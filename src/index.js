import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";


const books = [
    {
  author: "Bob White",
  title: "Another total badass",
  img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss060e033385large.jpg",
},
{
  author: "A Leon",
  title: "Thie Planet",
  img: "https://www.nasa.gov/sites/default/files/thumbnails/image/curiosity_selfie.jpg",
},
]


const Book = (props) => {
  const {img, title, author} = props;
  return (
    <section className="book">
      <img src={img} alt="total badass" />
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
        return <Book {...dog} key={dog.id} />;
      })}
    </section>
  );
}



const EventExamples = () => {
    const handleFormInput = (e) => {
    }
    const handleButtonClick = () => {
      alert('you clicked a button')
    }
    const handleFormSubmission = (e) => {
      e.preventDefault()
      console.log('form submitted')
    }

    return (
      <section>
        <form onSubmit={handleFormSubmission}>
          <h2>This is a form</h2>
          <input 
            onChange={handleFormInput}
            />
        </form>
        <button onClick={handleButtonClick}>Hunt Me</button>
      </section>
    )
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<BookList />);