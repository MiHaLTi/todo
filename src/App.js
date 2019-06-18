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
      text: 'Помыть посуду '
    },
    {
      text: 'Помыть кошку'
    },
    {
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
