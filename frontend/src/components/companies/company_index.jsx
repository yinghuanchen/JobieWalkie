import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchAllCompanies } from "../../actions/company_actions"
import CompanyItem from "./company_item"
import "../../stylesheets/job_listings.css"

const CompanyIndex = ({ companies, fetchAllCompanies }) => {

  useEffect(() => {
    fetchAllCompanies()
  }, [fetchAllCompanies])

  return (
    <ul>
        <CompanyItem key={companies._id} company={company} />
    </ul>
  )
}

const mapSTP = (state) => {
  return {
    companies: state.companies.data ? state.companies.data : []
  }
}

const mapDTP = (dispatch) => {
  return {
    fetchAllCompanies: () => dispatch(fetchAllCompanies())
  }
}

export default connect(mapSTP, mapDTP)(CompanyIndex)
