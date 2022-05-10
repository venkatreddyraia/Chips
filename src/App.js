import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Select, { components } from "react-select";

const MultiValue = props => (
  <components.MultiValue {...props}>
    {props.data.label}{props.data.image}
  </components.MultiValue>
);

const options = [
  {
    label:
      "Marina Augustine", 
    image: "",  
    value: "1"
  },
  {
    label:
      "Nick Jioplausiss",
    
    value: "2"
  },
  {
    label:
      "Narayana Garner",
    
    value: "3"
  },
  {
    label:
      "Anita Gros",
    
    value: "4"
  },
  {
    label:
      "Megan Smith",
    
    value: "5"
  }
];

function App() {
  return (
    <div className="App container mt-4">
      <div className="row">
        <div className="col-lg-8">
          <Select isMulti={true} options={options} components={{ MultiValue }} />
        </div>
      </div>
    </div>
  );
}

export default App;
