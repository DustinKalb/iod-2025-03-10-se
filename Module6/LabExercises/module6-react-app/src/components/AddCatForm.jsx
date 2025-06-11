import { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [catName, setCatName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ name: catName, latinName, image });
  };
  return (
    <div className="AddCatForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Cat Name:
          <input
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
            name="catName"
          />
        </label>
        <label>
          Latin Name:
          <input
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
            name="latinName"
          />
        </label>
        <label>
          Image URL:
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            name="image"
          />
        </label>
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}

export default AddCatForm;
