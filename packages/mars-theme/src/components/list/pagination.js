import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Link from "../link";


/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions }) => {
  // Get the total posts to be displayed based for the current link
  const { page, totalPages } = state.source.get(state.router.link);

  // Pre-fetch the the next page if it hasn't been fetched yet.
  // useEffect(() => {
  //   if (next) actions.source.fetch(next);
  // }, []);

  const pagesNumbers = Array(totalPages)
    .fill(0)
    .map((_, i) => i + 1);

  const pagination = pagesNumbers.map((pageNumber, i) => (
    <Link key={i} link={`/page/${pageNumber}`}>
      <Text isCurrentPage={page === pageNumber}>{pageNumber}</Text>
    </Link>
  ));

  return (
    <PagesBlock>    
      {pagination}
    </PagesBlock>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);

const Text = styled.span`
  display: inline-block;
  margin-top: 16px;
  padding: 5px;
  ${({isCurrentPage}) => isCurrentPage && css`
    background: black;
    color: white;
  `
  }
`;

const PagesBlock = styled.div`
  a {
    margin-right: 10px;
  }
`;