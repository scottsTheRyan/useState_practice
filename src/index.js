import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const img="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss060e033385large.jpg";
const title="Still a Badass";
const author="Total Badass";

const BookList = () => {
  return (
    <section className = "book">
      <Book img={img} title={title} author={author}/>
      <Book img={img} title={title} author={author}/>
      <Book job="developer"/>
      <Book job="Astronaut" number={23}/>
      <Book jobNumber={24}/>
    </section>
  );
};

const Book = (props) => {
  return (
    <section>
      <img src={img} alt="Total badass times two" />
      <h2>{title}</h2>
      <h1>{author}</h1>
      <h1>{props.job}</h1>
      <h1>{props.number}</h1>
      <h1>{props.jobNumber}</h1>
    </section>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);







