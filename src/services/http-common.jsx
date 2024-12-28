import axios from "axios";

const apiBaseURL =
  "http://mekan-bul-backend-gjsv4uyrw-jacobss7s-projects.vercel.app";

export default axios.create({
  baseURL: apiBaseURL + "/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
});
