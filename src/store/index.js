import { createStore, combineReducers } from "redux";
import listReducer from '../reducers/listReducer';
import fieldReducer from '../reducers/fieldReducer';
import editReducer from '../reducers/editReducer';

const reducer = combineReducers({
  serviceList: listReducer,
  serviceField: fieldReducer,
  serviceEdit: editReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
