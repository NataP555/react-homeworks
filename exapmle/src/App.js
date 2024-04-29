import React, { useState } from "react";
import Products from "./components/Products";
import LoginForm from "./components/LoginForm";





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const submitHandler = (e) => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <Products />
    );
  }




  
  return (
    <div className="App">
      <h1>App</h1>
      <LoginForm onSubmit={submitHandler}/>
    </div>
  );
}

export default App;