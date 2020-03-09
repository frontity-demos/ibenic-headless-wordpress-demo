import React, { useState, useEffect } from "react";
import to from "await-to-js";
import PostsApiService from "services/PostsApiService";
import { Link } from "react-router-dom";

import "./index.scss";

const SingleArticle = ({ slug, currentPage }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const [error, post] = await to(PostsApiService.getPostBySlug({ slug }));
      if (error) console.error(error.message);
      setPost(post);

      setLoading(false);
    })();
  }, [slug]);

  return (
    <div className="single-article">
      {loading && <p>Loading...</p>}
      {post && (
        <article id={post.ID}>
          <Link className="btn btn-primary" to={`/page/${currentPage}`}>&lt; Back to page {currentPage}</Link>
          <h1>{post.title.rendered}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </article>
      )}
    </div>
  );
};

export default SingleArticle;
