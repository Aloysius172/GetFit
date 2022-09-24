import axios from 'axios'


export const fetchRegimen = regimenId => {
  return axios.get(`/api/regimens/${regimenId}`)
}

export const fetchRegimens = () => (
  axios.get('/api/regimens')
)

export const createRegimen = (regimenData) => {
  return axios.post('api/regimens/', regimenData)
}

export const deleteRegimen = (regimenId) => (
  axios.delete(`api/regimens/${regimenId}`)
)

// export const fetchUserRegimen = (userId) => (
//   axios.get(`/api/regimens/users/${userId}`)
// )


export const updateRegimen = (regimen) => {
  return axios.patch(`/api/regimens/${regimen.id}`, regimen)
}

// export const likeRegimen = (likeData) => {
//   console.log("util")
//   return axios.post('/api/regimens/like-regimen', likeData)
// }