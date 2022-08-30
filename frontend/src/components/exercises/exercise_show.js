import{ connect } from "react-redux";
import { fetchExercise } from "../../util/exercise_util";

const mSTP = (state, ownProps) => ({
  exercise: state
})