import React from "react"
import ReactDOM from "react-dom/client";

import "./index.css";

const img ="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss060e033385large.jpg"; 
const title="Badass";
const author="Badass Astronaut";


const BookList = () => {
  return (
    <section className = "book">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <section>
      <img src={img} alt="badass"/>;
      <h2>{title}</h2>
      <h2>{author}</h2>
    </section>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);







