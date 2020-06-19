import React, { useState } from "react";
const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const [prev, setPrev] = useState(1);
  const [next, setNext] = useState(0);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const prevPage = () => {
    setPrev(paginate(currentPage - 1));
    console.log(prev)
  };
  const nextPage = () => {
    setNext(paginate(currentPage + 1));
    console.log(next)
  };
  return (
    <nav className="pagination">
      <button className="page-link" onClick={prevPage}>
        Prev
      </button>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
      <button className="page-link" onClick={nextPage}>
        Next
      </button>
    </nav>
  );
};
export default Pagination;