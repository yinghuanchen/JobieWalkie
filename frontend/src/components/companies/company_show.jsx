import React, { useEffect } from "react"
import { connect } from "react-redux"
// import { fetchAllDebriefs } from "../../actions/debrief_actions"
import { fetchCompany } from "../../actions/company_actions"

// const addDebrief = () => {
//     const [writeDebrief, setWriteDebrief] = useState([

//     ])
// }

const CompanyShow = ({ company, debriefs, fetchAllDebriefs, fetchCompany, match }) => {
    
    let companyId = match.params.companyId

    useEffect(() => {
        fetchCompany(companyId)
    }, [fetchCompany, companyId])

    // useEffect(() => {
    //     fetchAllDebriefs()
    // }, [fetchAllDebriefs])

    // const companyDebriefs = debriefs.filter(debrief => debrief.company_id === companyId)
    if (!company) return null

    return (
        <>
        <div>
            <p>{company.name}</p>
            {/* <DebriefItem debriefs={companyDebriefs}/> */}
        </div>
        </>
    )
}

const mapSTP = (state) => {
return {
    company: state.companies.data,
    // debriefs: state.debriefs.data ? state.debriefs.data : []
    }
}

const mapDTP = (dispatch) => {
return {
    // fetchAllDebriefs: () => dispatch(fetchAllDebriefs()),
    fetchCompany: (companyId) => dispatch(fetchCompany(companyId)),
    }
}

export default connect(mapSTP, mapDTP)(CompanyShow)
