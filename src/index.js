import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book);
  }
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((dog) => {
        const { img, title, author, id } = dog;
        return <Book {...dog} key={dog.id} getBook={getBook}/>;
      })}
    </section>
  );
};


const EventExamples = () => {
  const handleFormInput= (e) => {
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log('its a good show');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
};

const Book = (props) => {
  const { img, title, author, getBook, id} = props;
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt="Intresting facts from curious minds" />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>click me</button>
      <h1>{author}</h1>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
