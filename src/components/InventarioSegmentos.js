import React, {Component} from 'react';
import Segmento from './Segmento';
import FormularioSegmento from './FormularioSegmento';

class InventarioSegmentos extends Component{

    state = {
        inventario: true,
        nuevo: false        
    }

    formularioSegmento = () => {
        this.setState({inventario: !this.state.inventario})  
        this.setState({nuevo: !this.state.nuevo})            
    }

    render(){
        if(this.state.inventario){
            return(
                <div className="row px-5">
                    <div className="col-12">
                        <div className="d-flex justify-content-between">
                            <h2>Inventario de segmentos</h2>
                            <button type="button" className="btn btn-success" onClick={ this.formularioSegmento } >+ Agregar Segmento</button>                    
                        </div><br/>
                        <div className="row">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">ID</th>    
                                <th scope="col">Tipo Via</th>
                                <th scope="col">Calzada(m)</th>
                                <th scope="col">Bordillo(m)</th>                                
                                <th scope="col">Dirección Inicio</th>
                                <th scope="col">Dirección Fin</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Calzadas</th>
                                <th scope="col">Estrato</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>                                          
                            { this.props.segmentos.map(segmento => 
                                <Segmento segmento={segmento} />
                            )} 
                        </table>
                        </div>
                    </div><br/>   <br/>     
                </div>
            )
        }else{
            return (
                <div className="row justify-content-center">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="d-flex justify-content-between">
                            <h2>Agregar segmento</h2>                             
                            <button type="button" className="btn btn-danger" onClick={ this.formularioSegmento }>Cancelar</button>                    
                        </div><br/>
                        <div className="row">
                            <FormularioSegmento 
                            guardar={this.formularioSegmento}/>
                        </div>
                    </div>                      
                    <div className="col-2"></div>                    
                </div>                
            )
        } 
    } 
}

export default InventarioSegmentos;
