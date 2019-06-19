import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Todos} from'./Todos';
class App extends React.Component{
  constructor(props){
    super(props);
  }

 
render() {
  const tasks =[
    {
      id:1,
      text: 'Помыть посуду '
    },
    {
      id:3,
      text: 'Помыть кошку'
    },
    {
      id:4,
      text: 'Погулять с сестрой'
    }
  ]
  return (
    <div >
    <Todos tasks={tasks}></Todos>
    </div>
  );
  }
}

export default App;
