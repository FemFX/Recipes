import React,{useEffect, useState} from 'react';
import Recipes from './Recipes.js'
import './App.css';

const App = () =>{
  //API
  const APP_ID = '991c8121';
  const APP_KEY = 'b9ff3e75056a631014d9777160819f66';
  //States
  const [recipes,setRecipes] = useState([])
  const [search, setSearch]  = useState('')
  const [query,setQuery]     = useState('chicken')

  useEffect(() =>{
    getRecipes()
    console.log('data');
  }, [query])

  const getRecipes = async () =>{
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await res.json()
    setRecipes(data.hits)
    console.log(data.hits);

  }

  const updateSearch = event => {
    setSearch(event.target.value)
  }

  const getSearch = event => {
    event.preventDefault()
    setQuery(search);
    setSearch('')
  }

    return (
      <div className="App">
   	<header>
   		<div class="header-logo">AllForKitchen</div>
         <form onSubmit={getSearch} className="search-form">
         	<input type="text" className="search-bar" value={search} onChange={updateSearch} />
         	<button type="submit" className="Search-btn btn btn-success">Search</button>
         </form>

     </header>
     <div className="recipes ">
     { recipes.map(recipes => (
       <Recipes

       title={recipes.recipe.label}
       calories={recipes.recipe.calories}
       image={recipes.recipe.image}
       ingredients={recipes.recipe.ingredients}
       />


     ))}
     </div>
    </div>
    )
}

export default App;
