import React, { useEffect } from "react"
import { connect } from "react-redux"
import { searchCompany } from "../../actions/company_actions"
import { withRouter, useLocation } from "react-router-dom"
import SearchResultItem from './search_result_item'
import '../../stylesheets/search_result.css'

const qs = require("qs")

const SearchResult = ({ companies, searchCompany }) => {

  console.log('in search result')
  let location = useLocation()
  //console.log(location.search)
  const inputStr = qs.parse(location.search, { ignoreQueryPrefix: true }).companyName
  // console.log(inputStr)

  useEffect(() => {
    searchCompany({ name: inputStr })
  }, [])

  return (
    <ul className="search-result">
      {companies.map((company, idx) => {
         //return <li key={idx}>{company.name}</li>;
         return <SearchResultItem key={idx} company={company}/>
      })}
    </ul>
  )
}

const mapSTP = (state) => {
  return {
    companies: state.companies.data ? state.companies.data : [],
  }
}

const mapDTP = (dispatch) => {
  return {
    searchCompany: (query) => dispatch(searchCompany(query)),
  }
}

export default withRouter(connect(mapSTP, mapDTP)(SearchResult))