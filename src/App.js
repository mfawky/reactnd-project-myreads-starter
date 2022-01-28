import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Searchpage from "./Components/Searchpage";
import { getAll } from "./BooksAPI";
class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    booksArr: [],
    /*movement: (book,shelf) => {
      console.log(book,shelf)*/
  };

  // here i'm using componentDidMount() and getAll() to get the books array and assign it to setState().
  componentDidMount = () => {
    getAll().then((booksArr) => {
      this.setState({ booksArr });
      // console.log("xxs", booksArr); --->>> just for testing 
    });
  };

  render() {
    return (
      <div className="app">
        <Routes>
          {/* this the replacement to the state that was here and here I will apply the specification of the project rubric to make the home page' URL displayed in the address bar is /. */}
          <Route
            path={"/"}
            element={
              <Homepage
                books={this.state.booksArr}
                refresh={this.componentDidMount}
              />
            }
          />

          {/* this the replacement to the state that was here and here I will apply the specification of the project rubric to make the search page' URL displayed in the address bar is /search. */}
          <Route path={"/search"} element={<Searchpage />} />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
