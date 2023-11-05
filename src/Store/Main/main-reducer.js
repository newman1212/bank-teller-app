// import {CART_ACTION_TYPES} from './cart.types';


export const MAIN_INITIAL_STATE = {


	tellerName : '',
	 

};

export const mainReducer = (state = MAIN_INITIAL_STATE,action ={})=>{
 
	const {type,payload} = action;



	switch(type){

	case  CART_ACTION_TYPES.SET_TELLER_NAME :
		return{
			...state,
			tellerName: payload,
			
		};

	case  CART_ACTION_TYPES.SET_IS_CART_OPEN :
		return{
			...state,
			isCartOpen:payload,
			
		};

	default:
	return state


	};

};



