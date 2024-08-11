import React, { useState } from "react";
import "./Form.css";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    sourceUrl: "",
    image: "",
    publisher: "",
    cookingTime: "",
    servings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="form-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          value={formData.title}
          onChange={handleChange}
          required
          name="title"
          type="text"
        />

        <label>URL</label>
        <input
          value={formData.sourceUrl}
          onChange={handleChange}
          required
          name="sourceUrl"
          type="text"
        />

        <label>Image URL</label>
        <input
          value={formData.image}
          onChange={handleChange}
          required
          name="image"
          type="text"
        />

        <label>Publisher</label>
        <input
          value={formData.publisher}
          onChange={handleChange}
          required
          name="publisher"
          type="text"
        />

        <label>Prep time (minutes)</label>
        <input
          value={formData.cookingTime}
          onChange={handleChange}
          required
          name="cookingTime"
          type="number"
        />

        <label>Servings</label>
        <input
          value={formData.servings}
          onChange={handleChange}
          required
          name="servings"
          type="number"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
