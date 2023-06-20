import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";


function Fn1(){
  console.log('scope');
  let scope = 5;
  console.log(scope);{
    console.log('scope 2'){
      let scope = 'different scope';
        console.log(scope);
    }
    {
      console.log('scope 3');
        let scope = 'a third scope';
          console.log(scope);
    }
  }
}
console.log Fn1();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<fn1 />);
