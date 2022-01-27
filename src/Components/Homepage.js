import React, { Component } from "react";

import Shelf from "./Shelf";
import Plusbtn from "./Plusbtn";

class Homepage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {/* here it refrences to the Shelf.js react component I created to ease the code readability */}
          <Shelf
            books={this.props.books.filter(
              (book) => book.shelf === "currentlyReading"
            )}
            title=" Reading"
          />
          <Shelf
            books={this.props.books.filter(
              (book) => book.shelf === "wantToRead"
            )}
            title="Want To Read"
          />
          <Shelf
            books={this.props.books.filter((book) => book.shelf === "read")}
            title="Read"
          />
        </div>
        <Plusbtn /> {/* here I did the same thing with the Plus button */}
      </div>
    );
  }
}

export default Homepage;
