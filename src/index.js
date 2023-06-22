import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "Jordan Moore",
  title: "Interesting Facts For Curious Minds",
  img: "https://images-assets.nasa.gov/image/KSC-20230613-PH-KLS02_0073/KSC-20230613-PH-KLS02_0073~thumb.jpg",
};
const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
};

// have to add ClassName for styles to be applied,
// className in react, class in html
const Book = (props) => {
  const { author, title, img } = props;
  return (
      <article className="book">
      <img src={img} alt="Intresting facts from curious minds" />
      <h2>{title}</h2>
      <h1>{author}</h1>
    </article>
  );
};

function BookList() {
  return (
    <section>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
