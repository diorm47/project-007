import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./tutorial-pagination.css";
import { ReactComponent as Left } from "../../assets/icons/pagination-left.svg";
import { ReactComponent as Right } from "../../assets/icons/pagination-right.svg";

function TutorialPagination({ items, setData }) {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  useEffect(() => {
    setData(currentItems);
  }, []);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="tutrial_pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<Right />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<Left />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default TutorialPagination;
