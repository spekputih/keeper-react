import React, { useState } from "react";

function CreateArea(props) {
  let [fullDetails, setDetails] = useState({
    title: "",
    content: ""
  });
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setDetails(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function handleClick(e) {
    e.preventDefault();
    props.onAdd(fullDetails);
    setDetails({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={fullDetails.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={fullDetails.content}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
