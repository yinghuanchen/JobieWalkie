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
  const [indexType, setIndexType] = useState("create time");

  useEffect(() => {
    fetchUserLikeDebriefIds();
  }, []);

  useEffect(() => {
    fetchAllDebriefs();
  }, []);

   useEffect(() => {
     indexType === "create time"
       ? fetchAllDebriefs()
       : fetchAllDebriefsSortByLikeCount();
   }, [likes]);


  const handleToggle = () => {
    if (indexType === "create time") {
      fetchAllDebriefsSortByLikeCount();
      setIndexType("like count");
    } else {
      fetchAllDebriefs();
      setIndexType("create time");
    }
  };

  const text = indexType === "create time" ? "like count" : "create time";
  return (
    <div className="main-debrief">
      <button onClick={handleToggle}>Sorted By {text}</button>
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