import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const picture = "https://images-assets.nasa.gov/image/NHQ202306200005/NHQ202306200005~thumb.jpg";
const title = "It's a wonderful life";
const author = "OG Badass";


const Book = () => {
  return (
    <section className="book">
      <img src={picture} alt="total badass" />
      <h2>{title}</h2>
      <h1>{author}</h1>
    </section>
  );
};



const Booklist = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);