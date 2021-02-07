import React, { Component } from 'react'

class NewFoodForm extends Component {

    state = {
        foodName: '',
        foodCalories: null,
        foodImage: ''
    }
    
    handleChangeFoodName = (event) => {
        this.setState({foodName: event.target.value})
    }

    handleChangeCalories = (event) => {
        this.setState({foodCalories: event.target.value})
    }

    handleChangeImage = (event) => {
        this.setState({foodImage: event.target.value})
    }
    
    render() {
        
        return (
            <form >
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" 
                        value={this.state.foodName} onChange={this.handleChangeFoodName} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                        <input className="input" type="text" 
                        value={this.state.calories} onChange={this.handleChangeCalories} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Image</label>
                    <div className="control">
                        <input className="input" type="text" 
                        value={this.state.image} onChange={this.handleChangeImage} />
                    </div>
                </div>

                <div className="control">
                    <button className="button is-link" onClick={() => 
                    this.props.addNewFood(this.state.foodName, this.state.calories, this.state.image)} >Submit</button>
                </div>

            </form>

        );
    }

}

export default NewFoodForm
