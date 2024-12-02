import axios from "axios";

const BASE_URL = "http://localhost:3000"; // Adjust based on your Node.js server URL

export const sendPrompt = async (prompt: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/chat`, { prompt });
    console.log(response)
    return response.data.response;
  } catch (error: any) {
    console.error("Error in sendPrompt:", error.message);
    throw new Error(error.response?.data?.error || "Error sending prompt");
  }
};
