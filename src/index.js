import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book-1.jpg',
};
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
};


function BookList() {
  return (
    <section>
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>

    </section>
  );
}

// have to add ClassName for styles to be applied,
// className in react, class in html
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="Intresting facts from curious minds" />
      <h2>{props.title}</h2>
      <h1>{props.author}</h1>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
