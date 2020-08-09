import Vias from '../segmentos.json';

const defaultState= {
    vias: Vias
}

function Reducer (state = defaultState, {type, payload}) {
    switch (type) {        
        case 'actualizarSegmento': {
            const nuevasVias = state.vias.map(
                via => {
                   if (via.id === parseInt(payload.id, 10)){
                      via.calzadas = parseInt(payload.calzadas);
                      via.estado = payload.estado;
                      via.estrato = parseInt(payload.estrato);
                      via.direccionInicio = payload.direccionInicio;
                      via.direccionFin = payload.direccionFin;
                      via.longitudBordillo = parseInt(payload.longitudBordillo);
                      via.longitudVia = parseInt(payload.longitudVia);
                      via.tipoVia = payload.tipoVia;               
                   }
                   return via;
                }         
            );
            state.vias = nuevasVias;
            return state;                      
        }         
        case 'eliminarSegmento': {
            const nuevasVias = state.vias.filter(vias => vias.id !== payload);
            state.vias = nuevasVias;
            console.log(state)      
            return state;  
        }
        case 'agregarSegmento': {
            const nuevoSegmento = {
                id: payload.id,
                estado: payload.estado,        
                tipoVia: payload.tipoVia,
                estrato: payload.estrato,
                longitudVia: payload.longitudVia,
                longitudBordillo: payload.longitudBordillo,
                calzadas: payload.calzadas,
                direccionInicio: payload.direccionInicio,
                direccionFin: payload.direccionFin
            }
            state.vias.unshift(nuevoSegmento);
            return state;  
        }
        default: return state;
    }    
}    


export default Reducer;

