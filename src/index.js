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
  const { img, title, author } = props;
  return (
    <section className="book">
      
      <img src={img} alt="Alternate name" />
      <h2>{title}</h2>
      <h1>{author}</h1>
    </section>
  );
};

const BookList = () => {
  
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((dog) => {
        const { img, title, author, id } = dog;
        return <Book {...dog} key={dog.id} />;
      })}
      ;
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
  }
  const handleButtonClick = () => {
    alert('You clicked me')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('Form submitted')
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Doing The Thing</h2>
        <input onChange={handleFormInput} />
      </form>
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  )







}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)