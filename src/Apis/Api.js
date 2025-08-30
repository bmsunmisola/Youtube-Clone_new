import axios from "axios";

// Replace this with your real API key from Google Cloud Console
const API_KEY = "AIzaSyDE_GmRBGkfwPIAwDFbZqdIl95x5fs-jug"; 

const BASE_URL_POPULAR = "https://www.googleapis.com/youtube/v3/videos";
const BASE_URL_SEARCH = "https://www.googleapis.com/youtube/v3/search";

// Fetch popular videos
export const get_popular_videos = async () => {
  try {
    const response = await axios.get(BASE_URL_POPULAR, {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "NG", // Set to your region
        maxResults: 50,
        key: API_KEY,
      },
    });

    if (!response.data.items || response.data.items.length === 0) {
      console.warn("No popular videos found.");
      return [];
    }

    return response.data.items;
  } catch (error) {
    console.error("Error fetching popular videos:", error.response?.data || error.message);
    return [];
  }
};

// Search videos
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

    if (!response.data.items || response.data.items.length === 0) {
      console.warn("No search results found.");
      return [];
    }

    return response.data.items;
  } catch (error) {
    console.error("Error fetching search results:", error.response?.data || error.message);
    return [];
  }
};
