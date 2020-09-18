import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
//import { fetchAllCompanies } from "../../actions/company_actions"
import {
  fetchAllDebriefs,
  fetchAllDebriefsSortByLikeCount,
} from "../../actions/debrief_actions"; 
import { fetchUserLikeDebriefIds } from '../../actions/like_actions'; 
import DebriefList from "./debrief_list"
import '../../stylesheets/debrief.css'

const DebriefIndex = ({
  currentUser,
  debriefs,
  fetchAllDebriefs,
  fetchAllDebriefsSortByLikeCount,
  fetchUserLikeDebriefIds,
  likes,
}) => {
  const [indexType, setIndexType] = useState("date created");

  useEffect(() => {
    fetchUserLikeDebriefIds();
  }, []);

  useEffect(() => {
    fetchAllDebriefs();
  }, []);

   useEffect(() => {
     indexType === "date created"
       ? fetchAllDebriefs()
       : fetchAllDebriefsSortByLikeCount();
   }, [likes]);


  const handleToggle = () => {
    if (indexType === "date created") {
      fetchAllDebriefsSortByLikeCount();
      setIndexType("likes");
    } else {
      fetchAllDebriefs();
      setIndexType("date created");
    }
  };

  const text = indexType === "date created" ? "likes" : "date created";
  return (
    <div className="main-debrief">
      <div className="sort-button-container">
        <button className="sort-button" onClick={handleToggle}>Sort By {text}</button>
      </div>
      <DebriefList currentUser={currentUser} debriefs={debriefs} />
    </div>
  );
};

const mapSTP = (state) => {
    return {
      //companies: state.companies ? state.companies : {},
      currentUser: state.session.user,
      debriefs: state.debriefs ? Object.values(state.debriefs) : [],
      likes: state.likes ? state.likes : {},
    };
}

const mapDTP = (dispatch) => {
    return {
      //fetchAllCompanies: () => dispatch(fetchAllCompanies()),
      fetchAllDebriefs: () => dispatch(fetchAllDebriefs()),
      fetchUserLikeDebriefIds: () => dispatch(fetchUserLikeDebriefIds()),
      fetchAllDebriefsSortByLikeCount: () =>
        dispatch(fetchAllDebriefsSortByLikeCount()),
    };
}

export default connect(mapSTP, mapDTP)(DebriefIndex)