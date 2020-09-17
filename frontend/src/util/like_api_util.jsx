import axios from "axios"




export const fetchDebriefLikeCount = (debriefId) => {
    return axios.get(`/api/debriefs/${debriefId}/likeCount`)
}

export const fetchUserLikeDebriefIds = () => {
    return axios.get(`/api/users/current/likeDebriefId`);
};


export const createLike = (debriefId) => {
    return axios({
        method: "post",
        url: "/api/likes",
        data: { debriefId },
        //headers: { "Content-Type":"application/json" },
    });
}

export const deleteLike = (debriefId) => {
    return axios({
        method: "delete",
        url: "/api/likes",
        data: { debriefId },
        //headers: { "Content-Type":"application/json" },
    });
}