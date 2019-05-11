import React from 'react'
import  './App.css'

/**/
const Recipes = (props)=>{
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} />
      {props.ingredients.map(ingredient => (

          <li>{ingredient.text}</li>


      ))}
      <p>{props.calories}</p>

    </div>
  )
}

export default Recipes;
