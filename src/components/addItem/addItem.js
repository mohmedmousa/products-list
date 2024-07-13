import React, {Component} from 'react';

class addItem extends Component {
    state = {
        product: '',
        price: '',
        quantity:1
    }

    handleChange = (e) => {
        console.log(e.target.id + ": " + e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.add(this.state)
        this.setState({
            product: '',
            price: '',
            quantity:1
        })
    }
    increase = () => {
        this.setState((prevState) => ({
            quantity: prevState.quantity + 1
        }));
    }

    // Method to decrease the quantity
    decrease = () => {
        this.setState((prevState) => ({
            quantity: prevState.quantity > 1 ? prevState.quantity - 1 : 1
        }));
    }

    render(){
        return(
            <div className="item">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.product} placeholder="Enter Product" id="product" onChange={this.handleChange} required/>
                    <input type="number" value={this.state.price} placeholder="Enter Price" id="price" onChange={this.handleChange} required/>
                    <div className="quality">
            <button type="button" onClick={this.increase}>+</button>
            <span>{this.state.quantity}</span>
            <button type="button" onClick={this.decrease} className="right-button">-</button>
        </div>
                    
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default addItem;