import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Image = () => {
  return (
    <img src="https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151478/iss069e003412_th.jpg" alt="water everywhere"/>
  );
};

const Title = () => {
  return (
    <section>
    <h1>Land Around the Water</h1>
    </section>
  );
};

const Author = () => {
  return (
    <section>
      <h2>Iwrot Tdaht</h2>
    </section>
  );
};

const Book = () => {
  return (
    <section className="books">
      <img src="https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151460/tutuila_oli_2022203_th.jpg"
      alt="what is this"/>
      <h1>Title</h1>
      <h2>Author</h2>
    </section>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
