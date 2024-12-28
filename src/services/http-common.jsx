import axios from "axios";

const apiBaseURL = "mekan-bul-backend-m4qcnal8d-jacobss7s-projects.vercel.app/";

export default axios.create({
  baseURL: apiBaseURL + "/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
