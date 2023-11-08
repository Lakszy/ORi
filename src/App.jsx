import React, { useState } from "react";
import axios from "axios";
import GridCreation from "./Components/GridCreation";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState("");

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=94fdd14a300113aff95a76b9c8996483&text=${value}&safe_search=2`;

    try {
      const { data } = await axios.get(url);
      setImages(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <div>
      <input
        type="text"
        name="form"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Example: Bing"
      />
      {images && <GridCreation imagesData={images} />}
    </div>
  );
}

export default App;
