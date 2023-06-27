import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    title: "Interesting Facts For Curious Minds",
    author: "Jordan Moore",
    id: 1,
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    id: 2,
  },
];

const Book = (props) => {
  const {img, title, author}=props;
  return(
    <section>
      <img src={img} alt="alt things"
    </section>
  )
}






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)