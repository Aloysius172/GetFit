import { RECEIVE_REGIMEN, RECEIVE_REGIMENS, REMOVE_REGIMEN } from "../actions/regimen_actions";

export default function (state = {}, action) {
  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch(action.type){
    case RECEIVE_REGIMENS:
      Object.values(action.regimens).forEach(regimen => {
        nextState[regimen._id] = regimen;
      })
      return nextState;
    case RECEIVE_REGIMEN:
      nextState[action.regimen._id] = action.regimen;
      return nextState;
    case REMOVE_REGIMEN:
      delete nextState[action.regimenId]; 
      return nextState;
    default:
      return state;
  }
}