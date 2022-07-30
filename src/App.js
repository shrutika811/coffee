import React from 'react';
import Coffee from "./components/Coffee";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import NewCoffeeItem from './components/newItem/NewCoffeeItem';


const App=()=> {
  return (
    <div className="App">
         <NewCoffeeItem/>
       <Coffee/>
      
    </div>
  );
}

export default App;
