import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  // We add +1 because the method will not include the end number
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav className="nav-pagination" aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => {
          return (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <button onClick={() => onPageChange(page)} className="page-link">
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
