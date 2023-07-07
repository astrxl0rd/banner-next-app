import axios, { AxiosResponse } from "axios";
import { bannerAgent } from "../models/banner";
import { responseModel } from "../models/responseModel";

const API_BASE_URL="https://valorant-api.com/v1/agents"

const client = axios.create({
    baseURL : API_BASE_URL,
})

const fetchAgent = async () => {
    const response:AxiosResponse = await axios.get(API_BASE_URL);
    const currentResponse:responseModel = response.data;
    console.log(response)
    
    const bannerAgent = currentResponse.data
    console.log("ini banner agent",bannerAgent)

    return bannerAgent
}

export default fetchAgent