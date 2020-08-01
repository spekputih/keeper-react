import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [allDetails, setAllDetails] = useState([]);
  function addDetails(details) {
    setAllDetails(prev => {
      return [...prev, details];
    });
  }
  function deleteOneDetail(id) {
    setAllDetails(prev => {
      return prev.filter((detail, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addDetails} />
      {allDetails.map((detail, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={detail.title}
            content={detail.content}
            onDelete={deleteOneDetail}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
