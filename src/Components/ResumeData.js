// import { MenuBook, Book, School } from "@mui/icons-material";

exports.ResumeData = {
    about: " I am a full-stack developer, working with both back-end and front-end technologies together. Also design databases as per project requirements.",
    skills: [
        {
            "img": require("../images/skills/NodeJs.png"),
            "title": "Node JS"
        },
        {
            "img": require("../images/skills/reactjs.png"),
            "title": "React"
        },
        {
            "img": require("../images/skills/htmlcssjs.png"),
            "title": "HTML-CSS-JS"
        },
        {
            "img": require("../images/skills/postgresql.png"),
            "title": "PGSQL"
        },
        {
            "img": require("../images/skills/sqlServer.png"),
            "title": "SQL server"
        },
        {
            "img": require("../images/skills/firebase.png"),
            "title": "Firebase"
        },
        {
            "img": require("../images/skills/git.png"),
            "title": "Git"
        }
    ],
    education: [
        {
            date: "2018 - 2021",
            course: "B. Tech in Computer Sc. Engg.",
            institute: "Veer Surendra Sai University of Technology",
            location: "burla",
            grade: "CGPA - 7.2",
            icon: "School"
        },
        {
            date: "2013 - 2016",
            course: "Diploma in Computer Sc. Engg.",
            institute: "Bhubanananda Odisha School of Engineering (BOSE)",
            location: "CUTTACK",
            grade: "73 %",
            icon: "Book"
        },
        {
            date: "2013",
            course: "Matriculation",
            institute: "Balikuda High School",
            location: "Balikuda",
            grade: "70%",
            icon: "MenuBook"
        }
    ],
    contact: {
        phone_no: "+917328083161",
        email: "shyamasundars43@gmail.com",
        location: {
            dist: "Jagatsinghpur",
            state: "Odisha",
            pincode: "754108"
        }
    },
    experience: [
        {
            time: "2021 - Present",
            company: "IServeU Technology Pvt. Ltd. (ISU)",
            jobRole: "Software Engineer",
            technology: "Nodejs (Backend)",
            aboutCompany:"",
            isActivelyWorking:true,
            logo: require("../images/companyLogo/isu_logo.png"),
            projects: [
                {
                    title: "",
                    technology: "",
                    description: ""
                }
            ]
        },
        {
            time: "2016 - 2018",
            company: "Jindal Stainless LTD (JSL)",
            jobRole: "Junior Engineer",
            technology: "Asp.net, C#",
            aboutCompany:"",
            isActivelyWorking:false,
            logo: require("../images/companyLogo/JSL_logo.png"),
            projects: [
                {
                    title: "",
                    technology: "",
                    description: ""
                }
            ]
        }
    ]
}