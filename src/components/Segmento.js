import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { eliminarSegmento, actualizarSegmento } from '../redux/actions';

class Segmento extends Component{

    state = {
        editar: false,
        id: this.props.segmento.id,
        estado: this.props.segmento.estado,        
        tipoVia: this.props.segmento.tipoVia,
        estrato: this.props.segmento.estrato,
        longitudVia: this.props.segmento.longitudVia,
        longitudBordillo: this.props.segmento.longitudBordillo,
        calzadas: this.props.segmento.calzadas,
        direccionInicio: this.props.segmento.direccionInicio,
        direccionFin: this.props.segmento.direccionFin
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editar = () => {
        this.setState({editar: !this.state.editar})        
    }

    guardar = () => {
        this.props.actualizarSegmento(this.state);
        this.setState({editar: !this.state.editar});               
    } 

    render(){
        const {segmento} = this.props;
        if(this.state.editar){      
            return(              
                <tbody>
                    <tr key={segmento.id}>
                        <th>{segmento.id}</th>
                        <td>{segmento.tipoVia}</td>
                        <td className="col-1">{segmento.longitudVia}</td> 
                        <td className="col-1">{segmento.longitudBordillo}</td>
                        <td className="col-2">{segmento.direccionInicio}</td>  
                        <td className="col-2">{segmento.direccionFin}</td> 
                        <td className="col-2 px-1"><input className="col-7" name="estado" type="text" onChange={this.onChange} value={this.state.estado}/></td>                    
                        <td className="col-2 px-1"><input className="col-6" name="calzadas" type="number" onChange={this.onChange} value={this.state.calzadas}/></td>
                        <td className="col-2 px-1"><input className="col-6" name="estrato" type="number" onChange={this.onChange} value={this.state.estrato}/></td>
                        <td>                        
                            <div className="d-flex justify-content-around">
                                <button type="button" onClick={this.editar.bind(this, segmento.id)} className="btn btn-danger">Cancelar</button>
                                <button type="button" onClick={this.guardar} className="btn btn-success">Guardar</button>
                            </div>                                      
                        </td>
                    </tr>
                </tbody>
            )
        }else{
            return(                 
                <tbody>
                    <tr key={segmento.id}>
                        <th>{segmento.id}</th>
                        <td>{segmento.tipoVia}</td>
                        <td>{segmento.longitudVia}</td> 
                        <td>{segmento.longitudBordillo}</td>
                        <td>{segmento.direccionInicio}</td>  
                        <td>{segmento.direccionFin}</td>
                        <td>{segmento.estado}</td>               
                        <td>{segmento.calzadas}</td> 
                        <td>{segmento.estrato}</td>         
                        <td>
                            <div className="d-flex justify-content-around">
                                <button type="button" onClick={this.editar.bind(this, segmento.id)} className="btn btn-primary">Editar</button>                                
                                <button type="button" onClick={this.props.eliminarSegmento.bind(this, segmento.id)} className="btn btn-danger">X</button>
                            </div>                                       
                        </td>
                    </tr>
                </tbody>
            )
        }
    }  
}

Segmento.propTypes = {
    segmento: PropTypes.object
}

const mapDispatchToProps = {
    eliminarSegmento, actualizarSegmento
}

export default connect(null, mapDispatchToProps)(Segmento);