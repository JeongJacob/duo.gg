import Axios from "axios";

export const riotSummonersAxios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_RIOT_SUMMONERS_URL,
  timeout: 500,
  params: {
    api_key: process.env.NEXT_PUBLIC_RIOT_API_KEY,
  },
});
