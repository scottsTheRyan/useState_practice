import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const img="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss060e033385large.jpg";
const title="Still a Badass";
const author="Total Badass";

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
      <img src={img} alt="Total badass times two" />
      <h2>{title}</h2>
      <h1>{author}</h1>
    </section>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);







