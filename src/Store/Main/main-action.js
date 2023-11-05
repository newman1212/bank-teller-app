import {createAction} from '../create-action';
import {MAIN_ACTION_TYPES} from './main-types'




export const setTellerName = (tellerName) => createAction(MAIN_ACTION_TYPES.SET_TELLER_NAME,tellerName);