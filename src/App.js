import React, { Component } from 'react';
import './App.css';

//component
import { MainContent, Button, BlogFunctional } from './components';


//JSON 
// import data from './assets/dummy/blog.json';

class App extends Component {
  state = {
    cart: 0,
    color: false,
    input1: ""
  }

  addToCart = () => {
    this.setState({
      cart: this.state.cart + 1
    }, () => {
      alert('Product Sudah ditambahkan!')
    })
  }

  removeFromCart = () => {
    if(this.state.cart > 0) {
      this.setState({
        cart: this.state.cart - 1
      });
    }
  }

  handleChangeColor = () => {
    this.setState({
      color: !this.state.color
    })
  }

  handleSubmit = () => {
    const { input1 } = this.state;
    console.log(input1);
  }

  onInputChange = (event) => {
    this.setState({
      input1: event.target.value
    })
  }
  

  render() {
    const { cart, color, input1 } = this.state;
    return(
      <MainContent>
        <div style={{marginBottom: 30}}>
          Cart: {cart}
          <h1 style={{color: `${color ? "#fac" : "#333"}`}}>{input1}</h1>
        </div>
        <div>
          <Button onClick={this.addToCart}>ADD</Button>
          <Button onClick={this.removeFromCart}>Minus</Button>
          <Button onMouseEnter={this.handleChangeColor}>Change Color</Button>
        </div>

        <div style={{marginBottom: 30, marginTop: 30, textAlign:"center"}}>
          <input type="text" onChange={this.onInputChange}  />
          <Button onClick={this.handleSubmit}>Kirim</Button>
        </div>

<hr />
        <BlogFunctional />
      </MainContent>
    )
  }
}

export default App;
