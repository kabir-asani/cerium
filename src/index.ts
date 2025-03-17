import axios from "axios";

const baseUrl = "https://a90b05cb-e593-4a77-a500-82b909c678f2.mock.pstmn.io";

// GET
try {
  const response = await axios.post(`${baseUrl}/cities`);

  const statusCode = response.status;
  const data = response.data;

  console.log("Status: ", statusCode);
  console.log("Data: ", data);
} catch (e) {
  console.log("Error", e);
}

// POST
try {
  const response = await axios.post(`${baseUrl}/cities`, {
    title: "Buy Fruits",
  });

  const statusCode = response.status;
  const data = response.data;

  console.log("Status: ", statusCode);
  console.log("Data: ", data);
} catch (e) {
  console.log("Error", e);
}
