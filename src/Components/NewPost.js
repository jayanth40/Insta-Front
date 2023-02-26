import React, { useState } from "react";
import axios from "axios";



function NewPost() {
  
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("")
  const [author, setAuthor] = useState("");
  const [city, setCity] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
   formData.append("description",description)
    formData.append("author", author);
    formData.append("city", city);
  
    
    setAuthor('');
    setCity('');
    setFile(null);
    setDescription('')
    axios
      .post("https://insta-back-xcxk.onrender.com/newpost", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="file">Upload a file:</label>
        <input type="file" id="file" onChange={handleFileChange} required/>
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
     <button type="submit" className="Fbut">Submit </button>
    </form>
    
  );
}


export default NewPost
