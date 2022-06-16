import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL;

export async function updateUsers(dataObj) {
  return await axios.put(
    `${BASE_URL}/crm/api/v1/users/${dataObj.userId}`,
    dataObj,
    {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem("userData"))
          .accessToken,
      },
    }
  );
}
