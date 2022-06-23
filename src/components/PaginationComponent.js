import React from "react";
import ReactPaginate from "react-paginate";

const PaginationComponent = ({ getPage, pageCount }) => {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName={
        "pagination justify-content-center align-items-center gap-3"
      }
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"fw-bold"}
      nextClassName={"fw-bold"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComponent;
