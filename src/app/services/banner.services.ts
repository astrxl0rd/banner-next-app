import axios from "axios";

const API_BASE_URL="https://valorant-api.com/v1/agents"

const client = axios.create({
    baseURL : API_BASE_URL,
})

const fetchAgent = async () => {
   const response = await axios.get(API_BASE_URL)
    return response.data;
}

export default fetchAgent