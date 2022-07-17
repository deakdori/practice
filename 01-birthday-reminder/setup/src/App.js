import React, { useState } from 'react';
import data from './data';
import List from './List';
import Button from "./Button";
import "./App.css";

export const App = () => {
  
  const [isEmpty, setIsEmpty] = useState(false);
  const onClick = () => {
    setIsEmpty(!isEmpty);
  };
  return (
    <main>
      <section>
        <h3>{!isEmpty ? data.length : 0} Birthdays Today</h3>
        <>
          {!isEmpty &&
          data.map(({id, name, image, age}) => (<List key = {id} name = {name} image = {image} age = {age} />))}
        </>
        <Button onClick = {onClick}/>
      </section>
    </main>   
  );
}

export default App;
