import React, { useState, useEffect } from "react";
import to from "await-to-js";
import PostsApiService from "services/PostsApiService";
import { Link } from "react-router-dom";

import "./index.scss";

const ListArticles = ({ page: currentPage }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const [error, { posts, totalPages }] = await to(
        PostsApiService.getPosts({ page: currentPage })
      );
      if (error) console.error(error.message);
      setTotalPages(totalPages);
      setPosts(posts);
      setLoading(false);
    })();
  }, [currentPage]);

  const pagesNumbers = Array(totalPages)
    .fill(0)
    .map((_, i) => i + 1);
  const pagination = pagesNumbers.map((pageNumber, i) => (
    <Link key={i} to={`/page/${pageNumber}`}>
      <button className={currentPage === i + 1 ? 'currentPage' : ''}>
        {pageNumber}
      </button>
    </Link>
  ));

  const postsList = posts.map((post, index) => {
    return (
      <article key={"article-" + index}>
        <Link to={`/${post.slug}`}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
        </Link>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        ></div>
      </article>
    );
  });

  return (
    <div className="articles">
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          <h2>Articles</h2>
          <h4>Displaying page {currentPage} of {totalPages}</h4>
          {postsList}
          {pagination}
        </div>
      )}
    </div>
  );
};

export default ListArticles;
