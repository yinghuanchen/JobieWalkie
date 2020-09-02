
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const Company = require("./models/Company");

let newCompany = new Company({
  name: "Volvo Cars",
  companyLink: "https://www.linkedin.com/company/volvocars/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C510BAQEEXHBiNUTKjQ/company-logo_200_200/0?e=1606953600&v=beta&t=qg_6-PP7BNKR6xkeOIhkWo1y2kYcWxElh8yddlXiIao",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "Lyft",
  companyLink: "https://www.linkedin.com/company/lyft/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C560BAQFoMDej0VdZVA/company-logo_200_200/0?e=1606953600&v=beta&t=cIA_AIeB9WhbsdkhjYeLRXSs4hgfTxaLmv3kJot5EC0",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "Intelliswift Software, Inc.",
  companyLink: "https://www.linkedin.com/company/intelliswift/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C560BAQFwZzozCVbQvw/company-logo_200_200/0?e=1606953600&amp;v=beta&amp;t=e3vyRv3xVQGwHRk2Ze7SrflOD7iVCKPHJfjm3z9ewnw",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "Cypress HCM",
  companyLink: "https://www.linkedin.com/company/cypress-hcm/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C560BAQFYAZ435MaGjw/company-logo_200_200/0?e=1606953600&v=beta&t=J_E8jGqh8y_zV5SWSxYLkiOYhLoXQLNT7-vVvUDtF4o",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "WSO2",
  companyLink: "https://www.linkedin.com/company/wso2/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C4D0BAQFchI_Xw-FFhQ/company-logo_200_200/0?e=1606953600&v=beta&t=hNOHQB3UGfCtdHgUTuUk4eTJ-3rY5yv5eQvfZVH3X8w",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "Genesis10",
  companyLink: "https://www.linkedin.com/company/genesis10/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C4D0BAQFXsKcwPqAW1Q/company-logo_200_200/0?e=1606953600&v=beta&t=PGOSOek8_GpQ9MPlffUVvdFXLNcIMK5elebDZIxp4yI",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));


newCompany = new Company({
  name: "Infinera",
  companyLink: "https://www.linkedin.com/company/infinera/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C4D0BAQESQ_wtnBQD3A/company-logo_200_200/0?e=1606953600&v=beta&t=SwwLaLYSL-aat3ywq8GCPkqsyB0A1grs4nkPXMSdqSE",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "Zoom",
  companyLink: "https://www.linkedin.com/company/zoom-video-communications/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C560BAQG4U6nMK74uIA/company-logo_200_200/0?e=1606953600&v=beta&t=9CtZ4KD98t4U0yWxFhCnWkgMRQ7TsbM2jRXAlQmjU_c",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

 newCompany = new Company({
   name: "Diligente Technologies",
   companyLink: "https://www.linkedin.com/company/diligente-technologies/",
   companyImg:
     "https://media-exp1.licdn.com/dms/image/C4E0BAQFGq6gNE7OCOQ/company-logo_200_200/0?e=1606953600&v=beta&t=zN3nvyYTzzDg0LkCKMP4Jk5Yu3sSBRUJn-phQXGSPbM",
 });
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "Infosys",
  companyLink: "https://www.linkedin.com/company/infosys/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C4E0BAQG0kH9tfZrTQg/company-logo_200_200/0?e=1606953600&v=beta&t=OqMbSNLIova3vBqjnXyxk0sthI0DAXDlUL-2qFlQX94",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "JobsPro Staffing (JPS)",
  companyLink: "https://www.linkedin.com/company/jobspro-staffing/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C4E0BAQE6oZqbj-_xoA/company-logo_200_200/0?e=1606953600&v=beta&t=jEDik6e2g_R7JbRN3_OMxQgkpAypG6rhg3tQvmYqU58",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "Nutanix",
  companyLink: "https://www.linkedin.com/company/nutanix/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C4D0BAQGgk_MZrRCS4w/company-logo_200_200/0?e=1606953600&v=beta&t=vL9Km6xjancU_VH1qf8E9iKp7De8Rx87FxT-4ACXTHE",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));


newCompany = new Company({
  name: "eBay",
  companyLink: "https://www.linkedin.com/company/ebay/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C4E0BAQEYVQUuW-Vlaw/company-logo_200_200/0?e=1606953600&v=beta&t=SoKHBgUYymn13OcaZisq1cAl5N2ZUrNjFjDgs9zjPt0",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "Bain & Company",
  companyLink: "https://www.linkedin.com/company/bain-and-company/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C4E0BAQFa88wc8CFUpg/company-logo_200_200/0?e=1606953600&v=beta&t=cRelapLuDyIioanJeaWDuBtd1gbHeCCnBApA9Bmni74",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "Roblox",
  companyLink: "https://www.linkedin.com/company/roblox/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C560BAQGF9ES-xE207Q/company-logo_200_200/0?e=1606953600&v=beta&t=avV4Kv-gi_pFTmCSJ7Ogrum_sGJiV67HJk9qQIXFx-c",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "E-Solutions",
  companyLink: "https://www.linkedin.com/company/e-solutions-inc/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C510BAQF2ad2--icdXQ/company-logo_200_200/0?e=1606953600&v=beta&t=sADZsziAYJlgXJ4mC-pIS22c1-nyGfms95Vi__zRyZo",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "Mercury Systems, Inc.",
  companyLink:
    "https://www.linkedin.com/company/mercury-systems-inc-it-solutions/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C4D0BAQFOk_brINv-Og/company-logo_200_200/0?e=1606953600&v=beta&t=W0PGPu5ETQtAa3YC-_hzqpfvn9uhgXL99AYkKFA3t6w",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "ICONMA",
  companyLink: "https://www.linkedin.com/company/iconma/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C4E0BAQEPYEqjVGFdiQ/company-logo_200_200/0?e=1606953600&v=beta&t=1CqNY3tp7myTfJ-cx1aomPd0KSUKPix4a8-zCABjr1M",
});
newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

newCompany = new Company({
  name: "Tekfortune Inc",
  companyLink: "https://www.linkedin.com/company/tekfortune/",
  companyImg:
    "https://media-exp1.licdn.com/dms/image/C510BAQFER4Lh-1mp0g/company-logo_200_200/0?e=1606953600&v=beta&t=bXg3_jZFkRzBC00lxTtU-Ha-Wb1TEIxqmppT1U0iP10",
});
newCompany
  .save()
  .then(() => console.log("success"))
  .catch((err) => console.log(err));

