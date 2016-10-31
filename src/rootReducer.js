import { combineReducers } from 'redux';
import filtersReducer from './filters/filtersReducer';
import shareReducer from './share/shareReducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  share: shareReducer,
});

export default rootReducer;
