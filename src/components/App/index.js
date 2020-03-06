import React, { useState, useEffect } from 'react';
import to from 'await-to-js'
import PostsApiService from 'services/PostsApiService'
import Articles from 'components/Articles/'

import './index.scss';

const App = props => {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      setLoading(true)
      
      const [error, {posts, totalPages}] = await to(PostsApiService.getPosts({page: currentPage}))
      if (error) console.error(error.message)
      setTotalPages(totalPages)
      setPosts(posts)

      setLoading(false)
    })();
  },[currentPage])

  return (
    <div className="App">
        <div className="container">
          
          { posts && <Articles 
            currentPage={ currentPage } 
            setCurrentPage={ setCurrentPage }
            posts={ posts }
            totalPages={ totalPages }
            />
          }
            { loading && <p>Loading</p>}
        </div>
      </div>
  )
}

export default App;