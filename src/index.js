import React from "react"
import ReactDOM from "react-dom/client";

import "./index.css";

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
      <Image />
      <Title />
      <Author />
    </section>
  );
};


const Image = () => {
  return (
    <section className="books">
      <img
        src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss060e033385large.jpg"
        alt="Nasa picture of the day"
      />
    </section>
  );
};

const Author = () => {
  return (
    <section>
      <h2>Will Peterson</h2>
    </section>
  );
};

const Title = () => {
  return (
    <section>
      <h1>Why NASA rocks</h1>
    </section>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);







