import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchCompanyDebriefs } from "../../actions/debrief_actions"
import { fetchCompany } from "../../actions/company_actions"
import DebriefList from "../debriefs/debrief_list"
import '../../stylesheets/company-show.css'

const CompanyShow = ({ company, debriefs, fetchCompanyDebriefs, fetchCompany, match }) => {

    let companyId = match.params.companyId

    useEffect(() => {
        fetchCompany(companyId)
    }, [fetchCompany, companyId])

    useEffect(() => {
        fetchCompanyDebriefs(companyId)
    }, [fetchCompanyDebriefs, companyId])

    if (!company) return null // This is important. The "fetch" is the asynchronous call that dictates why this line is important.

    return (
      <div className='company-main'>
          <div className='company-info'>
            <img src={company.companyImg} className='companyImg' alt={company.name} />
            <span className='company-name'> {company.name}</span>
          </div>
          <Link className='create' to={`/debriefs/${companyId}/create`}>Create Debrief</Link>
          
        <p>{company.link}</p>
        <DebriefList debriefs={debriefs} />
      </div>
    )
}

const mapSTP = (state, ownProps) => {
    return {
      company: state.companies[ownProps.match.params.companyId] || [],
      debriefs: Object.values(state.debriefs) || [],
    };
}

const mapDTP = (dispatch) => {
    return {
        fetchCompanyDebriefs: (companyId) => dispatch(fetchCompanyDebriefs(companyId)),
        fetchCompany: (companyId) => dispatch(fetchCompany(companyId)),
    }
}

export default connect(mapSTP, mapDTP)(CompanyShow)

// JW-TODO: Use useParams to replace "match"