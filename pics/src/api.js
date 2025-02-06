import axios from "axios";

const searchImages = async (term) => {
 const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 51EYeKX2KImvOafYRAfKOj1ssJpzrIos62uuRnx1N7s",
    },
    params: {
      query: term
    },
  });
  return response.data.results;
};


export default searchImages;