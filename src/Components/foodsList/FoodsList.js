import React, { Component } from 'react';
import FoodBox from '../FoodBox'
import foods from './foods.json';

class FoodsList extends Component {
    
    render() {
        
        return (

            <div style={{width: 550}}>
            {foods.map((food, i) =>
                <FoodBox
                    key={food[i]}
                    {...food}
                />
            )}
            </div>

        );
    }

}

export default FoodsList