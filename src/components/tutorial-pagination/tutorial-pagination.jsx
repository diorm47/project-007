import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./tutorial-pagination.css";
import { ReactComponent as Left } from "../../assets/icons/pagination-left.svg";
import { ReactComponent as Right } from "../../assets/icons/pagination-right.svg";

function TutorialPagination({ items, setData, currentPage, setCurrentPage, itemsPerPage = 6 }) {


  useEffect(() => {
    const currentItems = items.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    );
    setData(currentItems);
  }, [currentPage, items, setData]);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="tutorial_pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<Right />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3} // Количество отображаемых страниц
        pageCount={pageCount}
        previousLabel={<Left />}
        marginPagesDisplayed={1} // Количество точек между кнопками
        renderOnZeroPageCount={null}
        forcePage={currentPage} // Установка текущей страницы
      />
    </div>
  );
}

export default TutorialPagination;
