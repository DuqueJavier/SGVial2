import { createStore } from 'redux';
import segmentoReducer from './reducers';

const store = createStore( segmentoReducer );

//store.dispatch();

export default store;