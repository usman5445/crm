import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL;

export async function fetchUsers() {
  return await axios.get(`${BASE_URL}/crm/api/v1/users`, {
    headers: {
      "x-access-token": JSON.parse(localStorage.getItem("userData"))
        .accessToken,
    },
  });
}
