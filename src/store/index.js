import {createStore, combineReducers} from 'redux'
import amountReducer from './amount/reducer'
import themeReducer from './theme/reducer'


const reducers = combineReducers({
    amountReducer,
    themeReducer
})

const store = createStore(reducers)

export default store;