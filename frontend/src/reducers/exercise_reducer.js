import { RECEIVE_EXERCISES, RECEIVE_EXERCISE } from "../actions/exercise_action";

const exercisesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_EXERCISES:
      Object.values(action.exercises).forEach(exercise => newState[exercise.id] = exercise.data)
      return newState;
    case RECEIVE_EXERCISE:
      newState[action.exercise] = action.exercise.data
      return newState
    default:
      return state;
  }
}

export default exercisesReducer