import React, {Component} from 'react';
import { connect } from 'react-redux';

//components
import InventarioVias from './components/InventarioSegmentos';
import Navbar from './components/Navbar';

class App extends Component{
  
   render(){
      return(
      <div>
         <Navbar /> <br/>
         <InventarioVias segmentos = {this.props.segmentos}/>   
      </div>      
      )
   }      
};

const mapStateToProps = (state) => {
   return {
      segmentos: state.vias
   }
}

export default connect(mapStateToProps)(App);
