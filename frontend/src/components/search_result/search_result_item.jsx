import React, { useEffect } from "react"
import {Link} from 'react-router-dom'
import '../../stylesheets/search_result.css'

const SearchResultItem = ({ company }) => {
  
  const image = company.companyImg ? company.companyImg : "https://www.chanchao.com.tw/TWSF/taipei/images/default.jpg"
  
  return (
    <li className="search-result-item">
      <Link to={`/companies/${company._id}`}>
        <img src={image} alt="" id="img" className="img" />
      </Link>
      <Link to={`companies/${company._id}`}>{company.name}</Link>
    </li>
  )
}

export default SearchResultItem