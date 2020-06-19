import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import Pagination from "./components/Pagination";
import Octocat from "./components/Octocat";
import axios from "axios";
import "./App.css";

function App() {
  const [response, setResponse] = useState([]);
  const [count, setCount] = useState("");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);


  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const formSubmit = e => {
    e.preventDefault()
    axios.get(`https://api.github.com/search/users?q=${query}&page=2&limit=14`)
      .then(response => {
        const data = response.data.items;
        setResponse(data);
        setCount(response.data.total_count);
      })
      .catch(errors => {
        console.error(errors);
      });
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = response.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="main">
      <h1>Github Search</h1>
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={response.length}
        paginate={paginate}
      />
      <div className="cat">
        <Octocat />
      </div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          id="input"
          placeholder="user name..."
          onChange={handleInputChange}
          value={query}
          aria-label="user name"
        />
        <button id="button">
          Find a user
        </button>
      </form>
      <h2>{count} results</h2>
      <UserList response={currentPosts} />
    </div>
  );
}

export default App;
