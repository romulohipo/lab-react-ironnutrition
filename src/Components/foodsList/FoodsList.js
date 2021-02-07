import React, { Component } from 'react';
import FoodBox from '../FoodBox'
import foods from './foods.json';
import NewFoodForm from '../NewFoodForm'

class FoodsList extends Component {
    
    state = {
        allFoods: [...foods],
        myFoods: [],
        toggle: false
    }

    handleClick = (name, image, calories, quantity) => { 
        const myFoodsCopy = [...this.state.myFoods]
        const itemExists = myFoodsCopy.some(item => item.name === name)

        if(itemExists) {
            const index = myFoodsCopy.findIndex(item => item.name === name);
            myFoodsCopy[index].quantity = parseInt(quantity)
            this.setState({myFoods: myFoodsCopy})
        } else {
            let newItem = {
                name: name,
                calories: calories,
                image: image,                
                quantity: parseInt(quantity)
            }
            
            myFoodsCopy.push(newItem)
            
            this.setState({myFoods: myFoodsCopy})
        }
    }

    addNewFood = (name, image, calories) => {
        const newItem = {
            name: name,            
            calories: calories,
            image: image,
            quantity: 0
        }
        const allFoodsCopy = [...this.state.allFoods]

        allFoodsCopy.push(newItem)
            
        this.setState({allFoods: allFoodsCopy}, {toogle: !this.state.toggle})

    }

    handleToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        console.log(this.state)
        return (

            <div style={{width: 550}}>

            {!this.state.toggle && (
                <div className="control">
                <button className="button is-link" onClick={this.handleToggle} >Add Food</button>
            </div>
            )}

            {this.state.toggle && (<NewFoodForm addNewFood={this.addNewFood} />)}            

            {this.state.allFoods.map((food, i) =>
                <FoodBox
                    key={i}
                    name={food.name}
                    image={food.image}
                    calories={food.calories}
                    quantity={food.quantity}
                    handleClick={this.handleClick}
                    id={i}
                />
            )}
            </div>

        );
    }

}

export default FoodsList