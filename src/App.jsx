import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import "./App.css";
import SearchIcon from "./assets/icons8-search.svg";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <header>
        <div className="search-container">
          <img src={SearchIcon} alt="Search Icon" className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="profile">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.Xo89Fu2pDKhSHLMLO9-OcAHaHa&pid=Api&P=0&h=180"
            alt="Profile"
          />
          <p>Mayank Mehta</p>
          <select></select>
        </div>
      </header>
      <nav>
        <h1>Employees</h1>
        <div className="filter-buttons">
          <button>All</button>
          <button>Active</button>
          <button>Inactive</button>
        </div>
      </nav>
      <EmployeeList search={search} />
    </div>
  );
}

export default App;
