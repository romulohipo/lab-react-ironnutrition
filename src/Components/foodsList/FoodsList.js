import React, { Component } from 'react';
import FoodBox from '../FoodBox'
import foods from './foods.json';

class FoodsList extends Component {
    
    state = {
        myFoods: [...foods]
    }

    handleChange = id => {
        console.log(id)
        const foodsCopy = [...this.state.myFoods]
        foodsCopy[id].quantity += 1; 
        
        this.setState({
            myFoods: foodsCopy
        })
    }

    render() {
        
        return (

            <div style={{width: 550}}>
            {this.state.myFoods.map((food, i) =>
                <FoodBox
                    key={i}
                    name={food.name}
                    image={food.image}
                    calories={food.calories}
                    quantity={food.quantity}
                    id={i}
                    handleClick={this.handleClick}
                />
            )}
            </div>

        );
    }

}

export default FoodsList