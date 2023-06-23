import React from "react";
import "../styles/pagination.css";

const Pagination = ({ next, prev, onNext, onPrev }) => {
  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="container-pagination">
      <ul className="pagination-items">
        {prev ? (
          <li className="">
            <button className="btn-pagination" onClick={handlePrev}>
              Previous
            </button>
          </li>
        ) : (
          <label>Inicio</label>
        )}

        {next ? (
          <li className="">
            <button className="btn-pagination" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : (
          <label>Final</label>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
