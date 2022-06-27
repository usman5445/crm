import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL;

export async function newTicket(dataObj) {
  return await axios.post(
    `${BASE_URL}/crm/api/v1/tickets`,
    dataObj,
    {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem("userData"))
          .accessToken,
      },
    },
    {
      userId: JSON.parse(localStorage.getItem("userData")).userId,
    }
  );
}
