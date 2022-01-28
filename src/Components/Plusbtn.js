import React, { Component } from "react";
import { Link } from "react-router-dom";

class Plusbtn extends Component {
  render() {
    return (
      <div className="open-search">
        {/* the link tags responsible for navigting from home page to search page */}
        <Link to={"/search"}>Add a book</Link>
      </div>
    );
  }
}

export default Plusbtn;
