import React, {Component} from 'react';
import { Card, MainContent, Button } from '../../components';

class Blog extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    try {
      fetch('https://ariakm25.me/blog.json').then(res => {
        return res.json()
      }).then(resJson => {
        this.setState({
          data: resJson
        })
      })
    } catch (error) {
      console.log(error);
    }
  }

  addToCart = () => {
    
  }
  

  render() {
    return(
      <MainContent>
        <Button onClick={() => alert('test!')}>Klik Dong</Button>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {this.state.data.map((value, index) => (
            <Card 
              key={index} 
              data={value}
            />
          ))}
        </div>
      </MainContent>
    )
  }
}

export default Blog;
