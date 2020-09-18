import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import {
  deleteDebrief,
  updateDebrief,
  fetchDebrief,
} from "../../actions/debrief_actions"; 
import { createLike, deleteLike, fetchUserLikeDebriefIds} from "../../actions/like_actions"
import { fetchAllDebriefs } from "../../util/debrief_api_util"

const DebriefItem = ({
  currentUser,
  debrief,
  deleteDebrief,
  updateDebrief,
  fetchAllDebriefs,
  likes,
  createLike,
  deleteLike,
  fetchUserLikeDebriefIds,
  fetchDebrief,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [debriefIntJobTitle, setDebriefIntJobTitle] = useState(
    debrief.jobTitle
  );
  const [debriefIntDifficulty, setDebriefIntDifficulty] = useState(
    debrief.difficulty
  );
  const [debriefIntDate, setDebriefIntDate] = useState(debrief.interviewDate);
  const [debriefIntStage, setDebriefIntStage] = useState(
    debrief.interviewStage
  );
  const [debriefIntSummary, setDebriefIntSummary] = useState(
    debrief.interviewSummary
  );
  const [debriefIntComments, setDebriefIntComments] = useState(
    debrief.comments
  );

  const handleCreateLike = () => {
    createLike(debrief._id).then(() => fetchDebrief(debrief._id));
  };

  const handleDeleteLike = () => {
    deleteLike(debrief._id).then(() => {
      fetchUserLikeDebriefIds();
      fetchDebrief(debrief._id);
    });
  };

  const isLike = debrief._id in likes;

  const placeLike = isLike ? (
    <button className="like-btn" onClick={handleDeleteLike}>
      <i className="fas fa-thumbs-up fa-lg like"></i>
      <span className="like-count">{debrief.likeCount}</span>
    </button>
  ) : (
    <button className="like-btn" onClick={handleCreateLike}>
      <i className="fas fa-thumbs-up fa-lg unlike"></i>
      <span className="like-count">{debrief.likeCount}</span>
    </button>
  );

  const handleSubmit = () => {
    setIsEditing(false);
    updateDebrief({
      ...debrief,
      user: currentUser.id,
      company: debrief.company._id,
      jobTitle: debriefIntJobTitle,
      difficulty: debriefIntDifficulty,
      interviewDate: debriefIntDate,
      interviewStage: debriefIntStage,
      interviewSummary: debriefIntSummary,
      comments: debriefIntComments,
    });
  };

  const handleDelete = () => {
    deleteDebrief(debrief._id);
  };
  const debriefUser = debrief.user === currentUser.id;

  const debriefButtons = isEditing ? (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="edit-modal-title">EDIT DEBRIEF</span>
          <span
            className="fas fa-times-circle"
            id="edit-modal-close"
            onClick={() => {
              setIsEditing(false);
            }}
          ></span>
        </div>

        <div className="modal-body">
          <div className="job-title-input">
            <input
              type="text"
              required
              value={debriefIntJobTitle}
              onChange={(event) => setDebriefIntJobTitle(event.target.value)}
            />
            <label>Job Title</label>
          </div>

          <div
            id="edit-radio-buttons"
            value={debriefIntDifficulty}
            onChange={(event) => setDebriefIntDifficulty(event.target.value)}
          >
            <span id="edit-difficulty-span"> Difficulty: </span>
            <div id="edit-selection-container">
              <span>1</span>
              <input type="radio" name="selection" value={1} />
            </div>
            <div id="edit-selection-container">
              <span>2</span>
              <input type="radio" name="selection" value={2} />
            </div>
            <div id="edit-selection-container">
              <span>3</span>
              <input type="radio" name="selection" value={3} />
            </div>
            <div id="edit-selection-container">
              <span>4</span>
              <input type="radio" name="selection" value={4} />
            </div>
            <div id="edit-selection-container">
              <span>5</span>
              <input type="radio" name="selection" value={5} />
            </div>
          </div>

          <div className="interview-date-container">
            <input
              type="date"
              value={debriefIntDate}
              onChange={(event) => setDebriefIntDate(event.target.value)}
              id="edit-date-input"
            />
            <label id="date-label">Interview Date: </label>
          </div>
          <div>
            <input
              type="text"
              value={debriefIntStage}
              onChange={(event) => setDebriefIntStage(event.target.value)}
              required
            />
            <label>Interview Stage</label>
          </div>
          <div>
            <textarea
              className="summary"
              value={debriefIntSummary}
              onChange={(event) => setDebriefIntSummary(event.target.value)}
              required
            />
            <label className="summary-label">Interview Summary</label>
          </div>
          <div>
            <input
              className="comments"
              type="text"
              required
              value={debriefIntComments}
              onChange={(event) => setDebriefIntComments(event.target.value)}
            />
            <label>Comments</label>
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="debrief-btn-container">
      <button className="debrief-btn" onClick={() => setIsEditing(true)}>
        Edit
      </button>
      <button className="debrief-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );

  return (
    <div className="debrief-body">
      {placeLike}
      <span>
        <p className="firstItem debrief-company">
          Company: {debrief.company.name}
        </p>
      </span>
      <span>
        <p className="firstItem debrief-title">
          Position Interviewed: {debrief.jobTitle}{" "}
        </p>
      </span>
      <span>
        <p className="firstItem debrief-date">
          Interview Date: {debrief.interviewDate.toString().slice(0, 10)}
        </p>
      </span>
      <span>
        <p className="firstItem debrief-stage">
          Interview Stage: {debrief.interviewStage}
        </p>
      </span>
      <span>
        <p className="firstItem debrief-difficulty">
          Interview Difficulty: {debrief.difficulty}
        </p>
      </span>
      <span>
        <span className="firstItem debrief-summary-span">
          Interview Summary:
        </span>
      </span>
      <p className="debrief-summary">{debrief.interviewSummary}</p>
      <span>
        <p className="firstItem debrief-comment">
          Comments: {debrief.comments}
        </p>
      </span>

      {debriefUser ? debriefButtons : null}
    </div>
  );
};

const mapSTP = (state) => {
    return {
        currentUser: state.session.user, 
        likes: state.likes ? state.likes : {}, 
    }
}

const mapDTP = (dispatch) => {
    return {
      fetchAllDebriefs: () => dispatch(fetchAllDebriefs()),
      deleteDebrief: (debrief) => dispatch(deleteDebrief(debrief)),
      updateDebrief: (debrief) => dispatch(updateDebrief(debrief)),
      createLike: (debriefId) => dispatch(createLike(debriefId)),
      deleteLike: (debriefId) => dispatch(deleteLike(debriefId)),
      fetchUserLikeDebriefIds: () => dispatch(fetchUserLikeDebriefIds()),
      fetchDebrief: (debriefId) => dispatch(fetchDebrief(debriefId)),
    };
}

export default connect(mapSTP, mapDTP)(DebriefItem)