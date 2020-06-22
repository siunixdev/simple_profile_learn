import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import ProfileImage from "./img/profile-image.jpg";

export const ProfileData = {
  name: "Abdillah Firdaus",
  image: ProfileImage,
  description:
    "Hi, I'm fullstack developer from Sulawesi Barat, but I prefer as a backend developer. I am a focused person and interested in new things and liked challenges. Working now with PHP (Codeigniter and Laravel) and Javascript technologies like ReactJS, ExpressJS and React Native.",
};

export const sosmedData = [
  {
    link: "mailto:siunix.dev@gmail.com",
    target: "",
    backgroundColor: "#D84307",
    color: "#FFF",
    word: "siunix.dev@gmail.com",
    icon: Email,
  },
  {
    link: "https://www.linkedin.com/in/siunix/",
    target: "_blank",
    backgroundColor: "#20639b",
    color: "#FFF",
    word: "Abdillah Firdaus",
    icon: LinkedIn,
  },
  {
    link: "https://github.com/siunixdev/",
    target: "_blank",
    backgroundColor: "#666",
    color: "#FFF",
    word: "siunixdev",
    icon: GitHub,
  },
];

export const skills = [
  "PHP",
  "Codeigniter",
  "ReactJS",
  "ExpressJS",
  "React Native",
  "MySQL",
  "MongoDB",
  "REST API",
  "GraphQL",
  "Git",
  "Laravel",
  "Python",
];

export const workExperiences = [
  {
    companyName: "PT. Berdikari Pondasi Perkasa",
    location: "Jakarta",
    monthIn: "Jun",
    yearIn: "2019",
    monthOut: "",
    yearOut: "Present",
    position: "Backend Developer",
    status: "Fulltime",
    description:
      "Develep attendance system for API and admin dasboard, Develop Face Recognition System (Restful API)",
  },
  {
    companyName: "PT. Samamaju Prima",
    location: "Makassar",
    monthIn: "Jan",
    yearIn: "2019",
    monthOut: "Jul",
    yearOut: "2019",
    position: "Junior Backend Developer",
    status: "Fulltime",
    description:
      "Develop HRIS (Human Reasources Information System) for dashboard, Develop attendance system for API and admin dasboard",
  },
  {
    companyName: "PT. Phinisi Hospitality Indonesia",
    location: "Makassar",
    monthIn: "May",
    yearIn: "2018",
    monthOut: "Jan",
    yearOut: "2018",
    position: "IT Programmer",
    status: "Fulltime",
    description:
      "Develop HRIS (Human Reasources Information System), Develop Ticketing Entertainment for entertainment event and Develop hotel unit website",
  },
  {
    companyName: "PT. Sinar Galesong Pratama",
    location: "Makassar",
    monthIn: "July",
    yearIn: "2017",
    monthOut: "Oct",
    yearOut: "2017",
    position: "IT Programmer",
    status: "Internship (KKLP)",
    description: "Develop IT inventory system",
  },
];

export const educations = [
  {
    name: "STMIK Dipanegara Makassar",
    yearIn: "2014",
    yearOut: "2018",
    gpa: "-",
    major: "Informatics Engineering",
    degree: "S-1",
  },
];

export const informalEducations = [
  {
    name: "STMIK Dipanegara Makassar",
    yearIn: "2014",
    yearOut: "2018",
    gpa: "-",
    major: "Informatics Engineering",
    degree: "S-1",
  },
];
