import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
import foods from './foods.json';
import FoodBox from './Components/FoodBox/FoobBox';

function App() {
  return (
    <div className ='App'>
      {foods.map(food => 
      <FoodBox 
      name={food.name} 
      image={food.image} 
      calories={food.calories} 
      quantity={food.quantity} />
      )}      
    </div>
  );
}

export default App;
