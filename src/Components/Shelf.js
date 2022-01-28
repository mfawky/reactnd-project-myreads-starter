import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <Book key={book.id} details={book} movement = {this.props.movement} refresh = {this.props.refresh} />
              ))}
            {/* here it refrences to the Book.js react component I created to ease the code readability*/}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
