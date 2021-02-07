import './App.css';
import React from 'react';
//import ReactDOM from 'react-dom'
import foods from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import NewFood from './Components/NewFood/NewFood';

function App() {

  

  return (
    <div className='App'>

      {/* <button>Add Food</button> */}
      <NewFood foods={foods} />

      <div style={{width: 550}}>
        {foods.map(food =>
          <FoodBox
            name={food.name}
            image={food.image}
            calories={food.calories}
            quantity={food.quantity} />
        )}
        </div>
    </div>
  )

}


export default App;
