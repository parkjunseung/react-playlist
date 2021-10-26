import axios from "axios";

const KEY = "AIzaSyAJiUj3YmKxAzZ_Ks8Vswf9TpPnxqw5d3M";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 10,
      key:KEY
    },
    headers: {}
  });