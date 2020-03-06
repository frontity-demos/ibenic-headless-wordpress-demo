import React from 'react';

import './index.scss';

const Articles = ({
  totalPages,
  currentPage,
  setCurrentPage,
  posts: postsFromProps
}) => {
 
  
  const pages = Array(totalPages).fill(0).map((_, i) => i+1)
  const pagination = pages.map((page, i) => (
    <button className={currentPage === i+1 && 'currentPage'} key={i} onClick={ () => { setCurrentPage( page ) } }>{ page }</button>)
    )
  
  const posts = postsFromProps.map( ( post, index ) => {
    return <article key={ 'article-' + index }>
        <h2 dangerouslySetInnerHTML={ { __html: post.title.rendered } }></h2>
        <div className="content" dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } }></div> 
    </article>
  });

  return (
    <div className="articles">
    <p>Articles</p>
      { posts }
      { pagination }
    </div>
  )
}

export default Articles