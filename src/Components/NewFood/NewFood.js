import React, { Component } from 'react'

class NewFood extends Component {

    state = {
        foodName: '',
        // foodImage: { value: '' },
        // foodCalories: { value: '' },
        // quantity: 0
    }
    
    handleChange = (event) => {
        this.setState({foodName: event.target.value})
    }

    handleClick = () => {
        // this.props.foods.push(
        //     {
        //         foodName: this.state.foodName
        //     }
        // )
        
    }
    
    render() {
        
        return (
            <form >
                <label>Food Name:</label>
                <input type="text" value={this.state.foodName} onChange={this.handleChange} />

                <input type="submit" value="Submit" onClick={this.handleClick}/>
            </form>

        );
    }

}

export default NewFood