import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import "./StylishButton.css";
import "./Styles.css";
//import SearchIcon from "./SearchIcon.png";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [triggerSearch, setTriggerSearch] = useState(false);

  const fetchData = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/nfts");
      const filteredData = response.data.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.rank.toLowerCase().includes(query.toLowerCase()) ||
          item.imageURL.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounce function to delay search input handling
  const debouncedFetchData = _.debounce(fetchData, 500);

  // Effect to handle search term changes
  useEffect(() => {
    if (triggerSearch) {
      if (searchTerm) {
        debouncedFetchData(searchTerm);
        setIsDropdownOpen(true);
      } else {
        setResults([]);
        setIsDropdownOpen(false);
      }
      setTriggerSearch(false);
    }
  }, [searchTerm, triggerSearch]);

  // Handle clicking outside of dropdown to close it
  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown")) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    setTriggerSearch(true);
  };

  return (
    <div>
      <br />
      <div className="flex px-600 gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search NFTs..."
          className="style"
        />
        <button
          onClick={handleSearchClick}
          disabled={loading}
          className="stylish-button"
        >
          Search {/*<img src={SearchIcon} alt="Description" />*/}
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {isDropdownOpen && results.length > 0 && (
        <div className="dropdown-menu">
          <ul>
            {results.map((item) => (
              <li key={item.id}>
                <img src={item.imageURL} alt={item.title} width="50" />
                <div>{item.title}</div>
                <div>Rank: {item.rank}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isDropdownOpen && results.length === 0 && <p>No results found</p>}
    </div>
  );
};

export default Search;
