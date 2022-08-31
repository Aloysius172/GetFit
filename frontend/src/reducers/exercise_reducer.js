import { RECEIVE_EXERCISES, RECEIVE_EXERCISE } from "../actions/exercise_action";

// export default function(state ={exercises: {}, exercise: {}}, action) {
//   debugger
//   Object.freeze(state);
//   let newState = Object.assign({}, state)
//   switch (action.type) {
//     case RECEIVE_EXERCISES:
//       // return Object.values(action.exercises.data).map(exercise => newState[action.exercise._id] = exercise)
      
//       newState.exercises = action.exercises.data
//       return newState.exercises
//     case RECEIVE_EXERCISE:
//       newState.exercise = Object.assign({}, state, { [action.exercise.id]: action.exercise.data })
//       return newState.exercise
//     default:
//       return state;
//   }
// }

// export default function (state = { exercises: {}, exercise: {} }, action) {
//   debugger
//   Object.freeze(state);
//   let newState = Object.assign({}, state)
//   switch (action.type) {
//     case RECEIVE_EXERCISES:
//       // return Object.values(action.exercises.data).map(exercise => newState[action.exercise._id] = exercise)

//       newState.exercises = action.exercises.data
//       return newState.exercises
//     case RECEIVE_EXERCISE:
//       newState.exercise = Object.assign({}, state, { [action.exercise.id]: action.exercise.data })
//       return newState.exercise
//     default:
//       return state;
//   }
// }

const exercisesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_EXERCISE:
      nextState[action.exercise._id] = action.exercise;
      return nextState;

    case RECEIVE_EXERCISES:
      Object.values(action.exercises).forEach(exercise => {
        nextState[exercise._id] = exercise;
      })
      return nextState;

    default:
      return state;
  }
}

export default exercisesReducer