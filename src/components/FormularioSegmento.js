import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { agregarSegmento } from '../redux/actions';

class FormularioSegmento extends Component{

    state ={
        id: '',
        estado: '',        
        tipoVia: '',
        estrato: '',
        longitudVia: '1.0',
        longitudBordillo: '1.0',
        calzadas: '',
        direccionInicio: '',
        direccionFin: ''
    }

    submitSegmento = (event) => {
        event.preventDefault();   
        this.props.agregarSegmento(this.state);   
        this.props.guardar();        
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
        <form onSubmit={this.submitSegmento} className="col-12 justify-content-center">
            <div className="form-group">
                <label className="font-weight-bold" for="viaFormControlInput">Identificador Via</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">#</span>
                    </div>
                    <input name="id" type="number" className="form-control" id="viaFormControlInput" required onChange={this.onChange} value={this.state.id}/>
                </div>                    
            </div>            
            <div className="form-row justify-content-between"> 
                <div className="col form-group">
                    <label className="font-weight-bold" for="calzadas">Calzadas</label>
                    <select type="number" name="calzadas" className="form-control" id="calzadas" required onChange={this.onChange}>
                        <option>Seleccione</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="col form-group">
                    <label className="font-weight-bold" for="viaFormControlSelect">Tipo de via</label>
                    <select name="tipoVia" className="form-control" id="viaFormControlSelect" required onChange={this.onChange}>
                        <option>Seleccione</option>
                        <option>Autopista</option>
                        <option>Calle</option>
                        <option>Carrera</option>
                        <option>Circular</option>
                        <option>Diagonal</option>
                        <option>Avenida</option>
                    </select>
                </div>                
            </div> 
            <div className="form-group">
                <label className="font-weight-bold" for="direccionInicioInput">Dirección Inicio</label>
                <input name="direccionInicio" type="text" className="form-control" id="direccionInicioInput" placeholder="Ingresar dirección" required onChange={this.onChange}/>
            </div>
            <div className="form-group"> 
                <label className="font-weight-bold" for="direccionFinInput">Dirección Fin</label>
                <input  name="direccionFin" type="text" className="form-control" id="direccionFinInput" placeholder="Ingresar dirección" onChange={this.onChange}/>
            </div>                    
            <div className="form-row">         
                <div className="col form-group">
                    <label className="font-weight-bold" for="longitudVia">Longitud Via</label>
                    <input name="longitudVia" type="text" className="form-control" id="longitudVia" placeholder="Metros" required onChange={this.onChange}/>
                </div> 
                <div className="col form-group">
                    <label className="font-weight-bold" for="longitudBordillo">Longitud Bordillo</label>
                    <input name="longitudBordillo" type="text" className="form-control" id="longitudBordillo" placeholder="Metros" required onChange={this.onChange}/>
                </div>  
            </div>        
            <div className="form-row justify-content-between">  
                <div className="col form-group">
                    <label className="font-weight-bold">Estado de la via</label> <br/> 
                    <div className="custom-control custom-radio custom-control-inline">
                        <input name="estado" type="radio" id="estadoVia1" className="custom-control-input" onChange={this.onChange} value="Buena"/>
                        <label className="custom-control-label" for="estadoVia1">Buena</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input name="estado" type="radio" id="estadoVia2" className="custom-control-input" onChange={this.onChange} value="Regular"/>
                        <label className="custom-control-label" for="estadoVia2">Regular</label>
                        </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input name="estado" type="radio" id="estadoVia3" className="custom-control-input" onChange={this.onChange} value="Mala"/>
                        <label className="custom-control-label" for="estadoVia3">Mala</label>
                    </div>
                </div>
                <div className="col form-group">
                    <label className="font-weight-bold" for="estratoFormControl">Estrato</label>
                    <select name="estrato" type="number" className="form-control" id="estratoFormControl" onChange={this.onChange} required>
                        <option>Seleccione</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>  <br/>
            <div className="form-row justify-content-center">  
                <button type="submit" className="btn btn-success" >Agregar Segmento</button>  
            </div>
        </form>
       )
    }
}

FormularioSegmento.propTypes = {
    segmento: PropTypes.object
}

const mapDispatchToProps = {
    agregarSegmento
}

const mapStateToProps = (state) => {
    return {
        state
    }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(FormularioSegmento);