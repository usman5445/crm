import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL;

export async function fetchTickets() {
  return await axios.get(
    `${BASE_URL}/crm/api/v1/tickets`,
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
