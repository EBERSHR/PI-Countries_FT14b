import React from "react";
import Home from "./components/Home";
import { getArticlesServer } from "./redux/actions";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getArticlesServer());
    }, [dispatch])


  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;