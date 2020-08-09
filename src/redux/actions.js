
export const agregarSegmento = (segmento) => {
    return {
        type: 'agregarSegmento',
        payload: segmento
    }
};

export const actualizarSegmento = (segmento) => {
    return {        
        type: 'actualizarSegmento',
        payload: segmento
    }
};

export const eliminarSegmento = (id) => {
    return {
        type: 'eliminarSegmento',
        payload: id
    }
};