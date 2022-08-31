import axios from 'axios'

export const fetchExercises = () => {
  // debugger
  return axios.get('/api/exercises/')
};

export const fetchExercise = id => {
  return axios.get(`/api/exercises/${id}`)
};
