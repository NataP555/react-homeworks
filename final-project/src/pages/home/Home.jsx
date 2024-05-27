import React from 'react'

const Home = () => {
  return (
    <div style={{
      padding:"50px",
      display:"flex",
      flexDirection:"column",
      gap:"30px",
      alignItems:"center"

    }}>
      <h1>Welcome to our Movie World!</h1>
      <p style ={{
        color:'grey',
        fontWeight:'bold',
      }}>Here you can find all the information about  the most popular movies. </p>
      <p>Enjoy you time with us !</p>
      <img  style ={{
        height:"450px",
        width:"450px",
      }}
      src="../../Movie.jpg" alt="movie"/>
    </div>
  )
}

export default Home
