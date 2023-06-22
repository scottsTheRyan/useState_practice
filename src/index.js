import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";



const firstBook = {
  author: "Jordan Moore",
  title: "Interesting Facts For Curious Minds",
  img: "./images/book-1.jpg",
};
const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
};


const Book = (props) => {
  return (
    <section className="book">
      <img src={props.img} alt="total badass" />
      <h2>{props.title}</h2>
      <h1>{props.author}</h1>
    </section>
  );
};


const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.author}
        author={firstBook.title}
      />
      <Book
        img={secondBook.img}
        title={secondBook.author}
        author={secondBook.title}
      />
      <Book />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);