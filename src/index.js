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


const Book = (props) => {
  const {author, title, img} = props;
  return (
    <section className="book">
      <img src={img} alt="the things we think are alts"/>
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
        const { author, title, img, id } = dog;
        return <Book {...dog} key={dog.id} />;
      })}
      ;
    </section>
  );
};

const EventExamples = () => {
  const handleFormSubmission = (e) => {
    e.preventdefault();
    console.log(e);
  };

  const handleFormInput = (e) => {
    console.log(e);
  };

  const handleButtonClick = () => {
    alert('Clickin a button');
  };


  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Just practicin'</h2>
        <input onChange={handleFormInput}/>
      </form>
      <button onClick={handleButtonClick}>Click me click</button>
    </section>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)