import { searchCompany } from "../../actions/company_actions"
import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Link, useHistory, withRouter } from "react-router-dom";
import '../../stylesheets/search_bar.css'

const SearchBar = ({ searchCompany, searchResults, path }) => {
  const [inputStr, setinputStr] = useState("");
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const pushHistory = useHistory();

  useEffect(() => {
    setinputStr('');
    setisDropdownOpen(false); 
  }, [path]);

  const handleUpdate = (e) => {
    //console.log(e.target.value);
    console.log(e.target.value.trim());
    setinputStr(e.target.value);
    if (e.target.value.trim()) {
      searchCompany({ name: e.target.value.trim() });
      if (!isDropdownOpen) setisDropdownOpen(true);
    } else {
      setisDropdownOpen(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (inputStr.trim()) {
      setinputStr("");
      setisDropdownOpen(false);
      pushHistory.replace(`/search?companyName=${inputStr.trim()}`);
    }
  };

  const dropDownContent =
    isDropdownOpen && searchResults && searchResults.length > 0 ? (
      <div id="search-bar-drop-down">
        <ul>
          {searchResults.slice(0, 20).map((company, idx) => {
            return (
              <li key={idx} className="search-bar-item">
                <div className="search-bar-img-container">
                  <Link to={`/companies/${company._id}`}>
                    <img
                      src={company.companyImg}
                      alt=""
                      id="img"
                      className="img"
                    />
                  </Link>
                </div>
                <Link
                  className="search-bar-text-container"
                  to={`/companies/${company._id}`}
                >
                  {company.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    ) : null;
    
  return (
    <div id="search-bar-container">
      <div className="search-bar-input">
        <input
          className="search-bar-input-text"
          type="text"
          value={inputStr}
          onChange={handleUpdate}
          placeholder='Search company'
        />
        <button className="search-bar-input-btn" onClick={handleClick}>
          <i className="fas fa-search fa-lg search-bar-input-icon"></i>
        </button>
      </div>
      {dropDownContent}
    </div>
  );
};

const mapSTP = (state, ownProps) => ({
  searchResults: Object.values(state.companies),
  path: ownProps.location.pathname,
});

const mapDTP = (dispatch) => ({
    searchCompany: (query) => dispatch(searchCompany(query)),
})

export default withRouter(connect(mapSTP, mapDTP)(SearchBar));
