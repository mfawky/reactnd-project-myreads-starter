import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

class Searchpage extends Component {
  state = {
    newQuery: "",
    booksArr: [],
  };
  /* Here I'm gonna do the same thing as the eventHandler in Book.js and also add other things  */
  eventHandler = async (x) => {
    const newQuery = x.target.value;
    this.setState({ newQuery });
    if (newQuery) {
      const res = await search(newQuery);
      if (res.error) {
        this.setState({ booksArr: [] });
      } else {
        const bks = [];
        res.forEach((bk) => {
          const appBk = this.props.books[`${bk.id}`];
          bks.push({ ...bk, shelf: appBk ? appBk.shelf : "none" });
        });
        this.setState({ booksArr: bks });
      }
    } else {
      this.setState({ booksArr: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={"/"} className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.eventHandler}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksArr.length > 0 &&
              this.state.booksArr.map((book) => (
                <Book
                  key={book.id}
                  details={book}
                  movement={this.props.movement}
                  refresh={this.props.refresh}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Searchpage;
