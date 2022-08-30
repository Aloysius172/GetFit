import axios from 'axios'

export const fetchExercises = () => {
  return axios.get('/api/exercises/')
};

export const fetchExercise = exerciseId => {
  return axios.get(`/api/exercises/${exerciseId}`)
};
