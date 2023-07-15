import React from "react";

const Book = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-56">
        <img src={book.url} alt="Shoes" />
      </figure>
      <div className="card-bod">
        {/* <h2 className="card-title">Shoes!</h2> */}
        <p>{book.Title}</p>
        <p>{book.Author}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
