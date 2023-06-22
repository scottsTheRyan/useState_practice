import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Image = () => {
  return (
    <section>
      <img src= "https://images-assets.nasa.gov/image/NHQ202306200005/NHQ202306200005~thumb.jpg"
        alt="Badass"
      />
    </section>
  );
};

const Title = () => {
  return (
    <section>
      <h2>Badass, a Story</h2>
    </section>
  );
};

const Author = () => {
  return (
    <section>
      <h1>Badass</h1>
    </section>
  );
};



const Book = () => {
  return (
    <section className="book">
      <Image />
      <Title />
      <Author />
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