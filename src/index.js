import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";


// const image="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss060e033385large.jpg"; 
// const title="How to be a badass";
// const author="OG G";


const firstBook = {
  author: "total badass",
  title: "How to be a badass",
  image: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss060e033385large.jpg",
};

const secondBook = {
  author: "OG G",
  title: "The badassery continues",
  image: "https://www.nasa.gov/sites/default/files/thumbnails/image/curiosity_selfie.jpg",
};

const BookList = () => {
  return (
    <section className = "book">
      <Book img={firstBook.image} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.image} title={secondBook.title} author={secondBook.author}/>
    </section>
  );
};

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







