import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
import foods from './foods.json';
import FoodBox from './Components/FoodBox/FoobBox';
import NewFood from './Components/NewFood/NewFood';

function App() {
  return (
    <div className='App'>

      <button>Add Food</button>
      <NewFood />
      <div className='column is-half'>
        {foods.map(food =>
          <FoodBox
            name={food.name}
            image={food.image}
            calories={food.calories}
            quantity={food.quantity} />
        )}
        <NewFood></NewFood>
        </div>
    </div>
  )

}


export default App;
