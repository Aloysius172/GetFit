import * as ExerciseUtils from '../util/exercise_util'


export const RECEIVE_EXERCISES = "RECEIVE_EXERCISES"
export const RECEIVE_EXERCISE = "RECEIVE_EXERCISE"

export const receiveExercises = exercises => ({
  type: RECEIVE_EXERCISES,
  exercises
})

export const receiveExercise = exercise => ({
  type: RECEIVE_EXERCISE,
  exercise
})

export const fetchExercises = () => dispatch => (
  ExerciseUtils.fetchExercises()
  .then(exercises => dispatch(receiveExercises(exercises)))
)

export const fetchExercise = exerciseId => dispatch => (
  ExerciseUtils.fetchExercise(exerciseId)
    .then(exercise => dispatch(receiveExercise(exercise)))
)