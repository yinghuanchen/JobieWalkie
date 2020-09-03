import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchAllCompanyDebriefs } from "../../actions/debrief_actions"
import { fetchCompany } from "../../actions/company_actions"
import DebriefList from "../debriefs/debrief_list"

const CompanyShow = ({ company, debriefs, fetchAllCompanyDebriefs, fetchCompany, match }) => {

    let companyId = match.params.companyId

    useEffect(() => {
        fetchCompany(companyId)
    }, [fetchCompany, companyId])

    useEffect(() => {
        fetchAllCompanyDebriefs(companyId)
    }, [fetchAllCompanyDebriefs, companyId])

    // const companyDebriefs = debriefs.filter(debrief => debrief.company === companyId)
    if (!company) return null // This is important. The "fetch" is the asynchronous call that dictates why this line is important.

    return (
        <>
            <div>
                <p>{company.name}</p>
                <DebriefList debriefs={debriefs}/>
            </div>
        </>
    )
}

const mapSTP = (state) => {
    return {
        company: state.companies.data,
        debriefs: state.debriefs.data || []
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchAllCompanyDebriefs: (companyId) => dispatch(fetchAllCompanyDebriefs(companyId)),
        fetchCompany: (companyId) => dispatch(fetchCompany(companyId)),
    }
}

export default connect(mapSTP, mapDTP)(CompanyShow)

// JW-TODO: Clint, use useParams to replace "match"
