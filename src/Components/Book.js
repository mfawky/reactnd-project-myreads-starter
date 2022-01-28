import React, { Component } from "react";
import { update } from "../BooksAPI";

class Book extends Component {
  eventHandler = async (x) => {
    const newShelf = x.target.value;
    const book = this.props.details;
    console.log("newShelf >> ", newShelf);
    console.log("book >> ", book);
    /*const res = */ await update(book, newShelf);
    // console.log("update res >> ", res); --->>> this was just for testing
    this.props.refresh(); /* this makes sure that the book is moved instantly without the need to refresh the page */
  };

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  this.props.details.imageLinks
                    ? this.props.details.imageLinks.thumbnail
                    : ""
                })`,
                /*Because there are books without a thumbnail, so the books with no thumbnail will not be a problem with this case */
              }}
            />
            <div className="book-shelf-changer">
              <select
                onChange={this.eventHandler}
                value={
                  this.props.details.shelf ? this.props.details.shelf : "none"
                } /* here when we press on the drop down list it hovers instantly on the current shelf the book is in --->>> if the book is in Want To Read Shelf --->>> the want to read button i the list is hoverd automatically */
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.details.title}</div>
          <div className="book-authors">
            {this.props.details.authors
              ? this.props.details.authors[0]
              : "Author Not Found"}
          </div>
          {/* And because there are books with no author, this step makes sure that not findig an author for a specific book will not be a problem and there will not be a crash to happen*/}
        </div>
      </li>
    );
  }
}

export default Book;
