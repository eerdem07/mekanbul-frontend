import axios from "axios";

const apiBaseURL =
  "https://mekan-bul-backend-gjsv4uyrw-jacobss7s-projects.vercel.app";

export default axios.create({
  baseURL: apiBaseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
});
