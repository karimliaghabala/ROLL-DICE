
import React from 'react';
import {useState} from "react"
import svg1 from './assets/1.png'
import svg2 from './assets/2.png'
import svg3 from './assets/3.png'
import svg4 from './assets/4.png'
import svg5 from './assets/5.png'
import svg6 from './assets/6.png'
import "./App.css"

function App () {
  
    var images = [
      svg1,
      svg2,
      svg3,
      svg4,
      svg5,
      svg6
    ]
    const [image, setNewImage] = useState(images[0])
    const [image2, setNewImage2] = useState(images[0])
    const rollDice = ()=>{
      const img = document.querySelector('img');
      const text = document.querySelector('.total>p');
      var randomNum1 = Math.floor(Math.random()*6);
      var randomNum2 = Math.floor(Math.random()*6);
      setNewImage(images[randomNum1]);
      setNewImage2(images[randomNum2]);
      text.textContent= (randomNum1 + randomNum2)+2
  
    }
    return (
      <div className="container">
        <div className="main">
          <div className="left">
            <img src={image} alt="svg" ></img>
          </div>
          <div className="right">
            <img src={image2}  alt="svg" ></img>
          </div>
        </div>
        <div className="main-total">
          <div className="total"> Cəmi
            <p></p>
          </div>
        </div>
        <div className="button">
          <button onClick={rollDice} >ROLL</button>
        </div>
      </div>
      
    )
  }
export default App

