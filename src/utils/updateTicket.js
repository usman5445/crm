import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL;

export async function updateTicket(dataObj) {
  return await axios.put(
    `${BASE_URL}/crm/api/v1/tickets/${dataObj.ticketId}`,
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
