import React, {Component, useState} from 'react';
import { Card } from '../../components';

const BlogFunctional = () => {
  const [cart, setCart] = React.useState(0);
  const [color, setColor] = React.useState(false);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("Age ganteng");

  React.useEffect(() => {
    getData()
  }, [])

  const handlePlus = () => {
    setCart(cart + 1)
  }

  const handleMin = () => {
    setCart(cart - 1)
  }

  const handleChangeColor = () => {
    setColor(!color);
  }

  const getData = () => {
    try {
      fetch('https://ariakm25.me/blog.json').then(res => {
        return res.json()
      }).then(resJSON => {
        console.log(resJSON)
        setData(resJSON);
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  return(
    <div>
      <div style={{marginBottom: 50, width: "100%", textAlign: "center"}}>{cart} | 
      <h1 style={{
        color: `${color ? "#fac" : "blue"}`
      }}>TEST GAN</h1></div>
      <button onClick={handlePlus}>Tambah</button>
      <button onClick={handleMin}>Kurangin</button>
      <button onMouseEnter={handleChangeColor}>Ganti Warna</button>
      <hr />
      onChange
      <input type="text" defaultValue={input} onChange={e => setInput(e.target.value)}  />

      <hr />
      FETCH DATA

      {/* {data.map((value, i) => {
        return <Card data={value} key={i} />
      })} */}
    </div>
  )
}

export default BlogFunctional;
