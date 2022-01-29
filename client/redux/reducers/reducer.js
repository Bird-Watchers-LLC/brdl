import * as types from '../constants/actionTypes';


const initialState = {
  page: 'signUp'
}

const reducer = (state = initialState, action) => {
  const stateCopy = { ...state };

 

  switch(action.type) {

    case types.SIGN_UP:
      return {
        ...stateCopy,
        page: 'signUp'
      }

    case types.LOGIN:
      return {
        ...stateCopy,
        page: 'login'
      }
    
    case types.COMMUNITY:
      return {
        ...stateCopy,
        page: 'community'
      }
    
    case types.PROFILE:
      return {
        ...stateCopy,
        page: 'profile'
      }
      
    default: 
      return stateCopy;
  }
}

export default reducer;