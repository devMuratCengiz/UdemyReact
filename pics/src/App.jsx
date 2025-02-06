import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
    console.log(result);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList imageList={images} />
    </>
  );
}

export default App;
