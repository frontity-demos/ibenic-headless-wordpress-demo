import { setup } from 'axios-cache-adapter';
import {URL_WP_API_BASE} from 'config'

const CACHE_MAX_AGE = 15 * 60 * 1000

const api = setup({
  baseURL: URL_WP_API_BASE,
  cache: {
    maxAge: CACHE_MAX_AGE,
    exclude: {
      query: false
    }
  }
})

class PostsApiService {

  constructor(url) {
    this.urlBase = url
  }
  
  async getPostBySlug({slug = ''}) {
    const url = this.getUrlApiPostBySlug({slug})
    const response = await api.get(url)
    const { data: results } = response
    return results[0]
  }

  async getPosts({page = 1} = {}) {
    const url = this.getUrlApiPosts({page})
    const response = await api.get(url)
    const totalPages = +response.headers['x-wp-totalpages']
    const { data: posts } = response
    return { totalPages, posts }
  }

  getUrlApiPosts({page}) { return `${this.urlBase}/posts?page=${page}` }
  getUrlApiPostBySlug({slug}) { return `${this.urlBase}/posts?slug=${slug}` }

}

export default new PostsApiService(URL_WP_API_BASE)
