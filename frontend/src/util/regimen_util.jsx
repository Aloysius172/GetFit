import axios from 'axios'

export const createRegimen = (regimenData) => {
  return axios.post('api/regimens/', regimenData)
}

export const deleteRegimen = (regimenId) => {
  return axios.delete(`api/regimens/${regimenId}`)
}

