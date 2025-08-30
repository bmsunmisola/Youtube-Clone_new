import axios from "axios";

const API_KEY = "AIzaSyAE1RGgFoKm9oPyjl6rinhdj70kHlAxy9Y";
const BASE_URL_POPULAR = "https://www.googleapis.com/youtube/v3/videos";
const BASE_URL_SEARCH = "https://www.googleapis.com/youtube/v3/search";

// Fetch popular videos
export const get_popular_videos = async () => {
  try {
    const response = await axios.get(BASE_URL_POPULAR, {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "NG",
        maxResults: 100,
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching popular videos:", error);
    return [];
  }
};

export const search_videos = async (query) => {
  try {
    const response = await axios.get(BASE_URL_SEARCH, {
      params: {
        part: "snippet",
        q: query,
        type: "video",
        maxResults: 25,
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};
