import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {
  fetchCompanyDebriefs,
  fetchCompanyDebriefsSortByLikeCount,
} from "../../actions/debrief_actions";
import { fetchUserLikeDebriefIds } from '../../actions/like_actions'; 
import { fetchCompany } from "../../actions/company_actions"
import DebriefList from "../debriefs/debrief_list"
import '../../stylesheets/company-show.css'

const CompanyShow = ({ company, debriefs, likes, fetchCompanyDebriefs, fetchCompany, fetchCompanyDebriefsSortByLikeCount, match, fetchUserLikeDebriefIds }) => {

    let companyId = match.params.companyId;

    const [indexType, setIndexType] = useState("date created");

    useEffect(() => {
        fetchCompany(companyId)
    }, [fetchCompany, companyId])

    useEffect(() => {
      fetchUserLikeDebriefIds()
    }, [])
    
    useEffect(() => {
        fetchCompanyDebriefs(companyId)
    }, [companyId])

    useEffect(() => {
      indexType === "date created"
        ? fetchCompanyDebriefs(companyId)
        : fetchCompanyDebriefsSortByLikeCount(companyId);
    }, [likes]);


    const handleToggle = () => {
      if (indexType === "date created") {
        fetchCompanyDebriefsSortByLikeCount(companyId);
        setIndexType("likes");
      } else {
        fetchCompanyDebriefs(companyId);
        setIndexType("date created");
      }
    };

  const text = indexType === "date created" ? "likes" : "date created";

    if (!company) return null // This is important. The "fetch" is the asynchronous call that dictates why this line is important.

    return (
      <div className="company-main">
        <div className="company-info">
          <img
            src={company.companyImg}
            className="companyImg"
            alt={company.name}
          />
          <span className="company-name"> {company.name}</span>
          <Link className="create" to={`/debriefs/${companyId}/create`}>
            Create Debrief
          </Link>
        </div>

        <p>{company.link}</p>
        <button onClick={handleToggle}>Sort By {text}</button>
        <DebriefList debriefs={debriefs} />
      </div>
    );
}

const mapSTP = (state, ownProps) => {
    return {
      company: state.companies[ownProps.match.params.companyId] || [],
      debriefs: Object.values(state.debriefs) || [],
      likes: state.likes ? state.likes : {},
    };
}

const mapDTP = (dispatch) => {
    return {
      fetchCompanyDebriefs: (companyId) =>
        dispatch(fetchCompanyDebriefs(companyId)),
      fetchCompanyDebriefsSortByLikeCount: (companyId) =>
        dispatch(fetchCompanyDebriefsSortByLikeCount(companyId)),
      fetchCompany: (companyId) => dispatch(fetchCompany(companyId)),
      fetchUserLikeDebriefIds: () => dispatch(fetchUserLikeDebriefIds()),
    };
}

export default connect(mapSTP, mapDTP)(CompanyShow)

// JW-TODO: Use useParams to replace "match"