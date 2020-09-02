
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const Company = require("./models/Company");

let newCompany = new Company({
    name: "Amazon",
    companyLink: "https://www.linkedin.com/company/amazon/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C560BAQFdwVGpSOHmgw/company-logo_200_200/0?e=1606953600&v=beta&t=R5S1K7GY4rmwqGfkcm9mum9JRl9OVYKTxceNdYKu0W8",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "Facebook",
    companyLink: "https://www.linkedin.com/company/facebook/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C560BAQF8rE3JvZVsSQ/company-logo_200_200/0?e=1606953600&v=beta&t=YMIATm3d8AKOAVHmUjo7UqYBOnyZKB8c_ZZmZPn7Y1M",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "Netflix",
    companyLink: "https://www.linkedin.com/company/netflix/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C4E0BAQEVb0ZISWk8vQ/company-logo_200_200/0?e=1606953600&v=beta&t=84rnJuWA3oWegaDxU4ZtA7RGr8XEDMElfDPDZHO0tE0",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "Google",
    companyLink: "https://www.linkedin.com/company/google/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0?e=1606953600&v=beta&t=Z6LIUb6orpkXofRgA8eRGolidAr1vot9ViaMK2HNkr4",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "Oracle",
    companyLink: "https://www.linkedin.com/company/oracle/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C4E0BAQGmS4ZS9i2T6w/company-logo_200_200/0?e=1606953600&v=beta&t=UYMsZVLlxD98He0QfweTMvl5wUNBzQgybiUMJVSDRBk",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "Synopsys Inc",
    companyLink: "https://www.linkedin.com/company/synopsys/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C4E0BAQEq7MVORIs3MA/company-logo_200_200/0?e=1606953600&v=beta&t=RdbQP9wwACsYOD8rB_18zAc_AlPit1QxAfLAhyWYngI",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));


newCompany = new Company({
    name: "Hulu",
    companyLink: "https://www.linkedin.com/company/hulu/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C560BAQEeG6IY_9Qdgg/company-logo_200_200/0?e=1606953600&v=beta&t=T3C4WYDWQX0901-sQJyMGVKvPYhYn7DvUgpSH0NjDR0",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "Snap Inc.",
    companyLink: "https://www.linkedin.com/company/snap-inc-co/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C510BAQEEDiZ9S-8rjA/company-logo_200_200/0?e=1606953600&v=beta&t=udgaCVPSubHDIZUWBpfyT6ghB8dN3XmTJwsP47dUHFk",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

 newCompany = new Company({
     name: "Alto Pharmacy",
     companyLink: "https://www.linkedin.com/company/altopharmacy/",
     companyImg: "https://media-exp1.licdn.com/dms/image/C560BAQHPZO74TFtBAQ/company-logo_200_200/0?e=1606953600&v=beta&t=zZZ3YQY1FD59iTwIysbajUW7Fs1juzZamNYtLOj2FNg",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "Gamesmith",
    companyLink: "https://www.linkedin.com/company/gamesmith/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C4E0BAQEwd5AfX3d0kA/company-logo_200_200/0?e=1606953600&v=beta&t=bdYlmVrvnIXGuUjng5f-wKdSk7kg4nOIeh02yJDKhtk",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "Tempo",
    companyLink: "https://www.linkedin.com/company/tempofit/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C560BAQGyV6qunqzwHQ/company-logo_200_200/0?e=1606953600&v=beta&t=WvLyhmqZXsxEE32apuU-dRvyP3gpexXjn2oKdIhjYGc",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "Chime",
    companyLink: "https://www.linkedin.com/company/chime-card/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C4D0BAQG0xdaDB3WowQ/company-logo_200_200/0?e=1606953600&v=beta&t=CoReUdZ9hbuyw5vCkFWUlxYuceof8hQ8__r6Q9gRtZU",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));


newCompany = new Company({
    name: "Tesla",
    companyLink: "https://www.linkedin.com/company/tesla-motors/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C4E0BAQFpB9xyi5w8IQ/company-logo_200_200/0?e=1606953600&v=beta&t=N0Bu13ViGdHMLwDbaLz064CUTmMCG1nPCAfBnx8jJ2o",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "PayPal",
    companyLink: "https://www.linkedin.com/company/paypal/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C4E0BAQGgcRYcsEA95g/company-logo_200_200/0?e=1606953600&v=beta&t=w9eC8ti-ZcJySwiaasV6JHGbo7geyS_zcl65VKBvn2c",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "Square",
    companyLink: "https://www.linkedin.com/company/joinsquare/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0?e=1606953600&v=beta&t=EL4kGqXKtb_ur7NOMiDFSVEBw3NXc1G-B01o70PI4mI",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "US Tech Solutions",
    companyLink: "https://www.linkedin.com/company/us-tech-solutions/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C4D0BAQHPF54GNm3f4w/company-logo_200_200/0?e=1606953600&v=beta&t=pgdcCGwsZkJWmonqoGj2aB3acLAN6ZELcaxDpjlXIhk",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "Voyage",
    companyLink: "https://www.linkedin.com/company/voyage.auto/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C560BAQFzCiy-d72GqQ/company-logo_200_200/0?e=1606953600&v=beta&t=rwHgy2P1hjlY8nnPFCAfkSdJMuVXWe-62xZnorafnGI",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
    name: "Waymo",
    companyLink: "https://www.linkedin.com/company/waymo/",
    companyImg: "https://media-exp1.licdn.com/dms/image/C4E0BAQG4FdRM0dx-3w/company-logo_200_200/0?e=1606953600&v=beta&t=EkOkhn1qvnOXUxWsq-qsms5NC0ayRIcrfCqQ22Fv0uM",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

