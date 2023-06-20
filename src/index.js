import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";


// const image="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss060e033385large.jpg"; 
// const title="How to be a badass";
// const author="OG G";


const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "https://www.nasa.gov/sites/default/files/thumbnails/image/curiosity_selfie.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((dog) => {
        const {author, title, img, id} = dog;
          return(
            <Book {...dog} key={dog.id}/>
          )
      })}
    </section>
  )
}

const Book = (props) => {
  console.log(props);
  const {img, title, author} = props;
  return (
    <section>
      <img src={img} alt="Total badass times two" />
      <h2>{title}</h2>
      <h1>{author}</h1>
    </section>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);







