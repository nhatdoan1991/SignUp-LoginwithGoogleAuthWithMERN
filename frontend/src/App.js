import React from 'react';
import Header from '../src/components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import InputForm from './components/InputForm';

class App extends React.Component {

  render(){
 
    return (
      <div className="container">
        <Header title={"Mon's Recipe "} />
        <InputForm/>
      </div>
    );
  }
}

export default App;
