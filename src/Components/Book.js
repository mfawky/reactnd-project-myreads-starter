import React, { Component } from "react";

class Book extends Component {
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
                  this.props.details.imageLinks.thumbnail
                })`,
              }}
            />
            <div className="book-shelf-changer">
              <select value={this.props.Shelf}>
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
          <div className="book-authors">{this.props.details.authors.at(0)}</div>
        </div>
      </li>
    );
  }
}

export default Book;
