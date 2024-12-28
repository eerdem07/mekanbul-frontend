import axios from "axios";

const apiBaseURL =
  "https://mekan-bul-backend-arliiiuow-jacobss7s-projects.vercel.app/";

export default axios.create({
  baseURL: apiBaseURL + "/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
