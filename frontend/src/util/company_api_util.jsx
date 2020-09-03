import axios from "axios"

export const fetchAllCompanies = () => {
    return axios.get(`/api/companies`)
}

export const searchCompany = (query) => {
    // var bodyFormData = new FormData();
    // bodyFormData.append("name", query.name);
    // return axios.get(`/api/companies/`, { body: query});
    return axios({
        method: "post",
        url: "/api/companies",
        data: query,
        //headers: { "Content-Type":"application/json" },
    })
}

export const fetchCompany = (companyId) => {
    return axios.get(`/api/companies/${companyId}`)
}

// const options = {
//   headers: { "X-Custom-Header": "value" },
// };

// axios.post("/save", { a: 10 }, options);

// axios({
//   method: "post",
//   url: "/login",
//   data: {
//     firstName: "Finn",
//     lastName: "Williams",
//   },
// });ata: {
//     firstName: "Finn",
//     lastName: "Williams",
//   },
// });