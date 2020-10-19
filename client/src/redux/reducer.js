import * as actionTypes from './actions/actionTypes';

const initialState = {
  isLoggedin: false,
//   userId: '',  
};

function reducer(state = initialState, action) {
    switch (action.type) {
      case actionTypes.ALTER_LOGIN:
        return {
          ...state,
          isLoggedin: !state.isLoggedin,
        };
        default:
            return state;
        }
    }


export default reducer;
