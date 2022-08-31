import * as ExerciseUtils from '../util/exercise_util'


export const RECEIVE_EXERCISES = "RECEIVE_EXERCISES"
export const RECEIVE_EXERCISE = "RECEIVE_EXERCISE"

export const receiveExercises = (exercises) => ({
  type: RECEIVE_EXERCISES,
  exercises
})

export const receiveExercise = (exercise) => {
  // debugger
  return{type: RECEIVE_EXERCISE,
  exercise}
}

export const fetchExercises = () => dispatch => (
  ExerciseUtils.fetchExercises()
  .then(exercises => dispatch(receiveExercises(exercises.data)))
)

export const fetchExercise = id => dispatch => {
  return  ExerciseUtils.fetchExercise(id)
    .then(exercise => dispatch(receiveExercise(exercise.data)))
}

