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
  
  getPosts({page} = {}) {
    this.page = page || this.page
    const url = this.getUrlApiPosts({page: this.page})
    console.log({page, url})
    return api.get(url)
      .then(response => {
        this.totalPages = +response.headers['x-wp-totalpages']
        return response
      })
      .then(({ data: posts }) => ({
        totalPages: this.totalPages,
        posts
      }))
  }

  getUrlApiPosts({page}) { return `${this.urlBase}/posts?page=${page}` }

}

export default new PostsApiService(URL_WP_API_BASE)
