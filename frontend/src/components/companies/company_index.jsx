import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchAllCompanies } from "../../actions/company_actions"
import "../../stylesheets/job_listings.css"

const CompanyIndex = ({ companies, fetchAllCompanies }) => {

    useEffect(() => {
        fetchAllCompanies()
    }, [fetchAllCompanies])

    return (
        <ul>
            {
                companies.map((company, idx) => {
                    return (
                        <li key={idx}>
                            {company.name}
                        </li>
                    )
                })
            }
        </ul>
    )
}

const mapSTP = (state) => {
    return {
        companies: state.companies? Object.values(state.companies) : []
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchAllCompanies: () => dispatch(fetchAllCompanies())
    }
}

export default connect(mapSTP, mapDTP)(CompanyIndex)
