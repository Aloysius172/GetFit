import * as RegimenUtil from '../util/regimen_util'


export const RECEIVE_REGIMEN = "RECEIVE_REGIMEN"
export const RECEIVE_REGIMENS = "RECEIVE_REGIMENS"
export const REMOVE_REGIMEN = "REMOVE_REGIMEN"

export const receiveRegimens = (regimens) => {
  return{
    type: RECEIVE_REGIMENS,
    regimens
  }
}

export const receiveRegimen = (regimen) => {
  return {
    type: RECEIVE_REGIMEN,
    regimen
  }
}

export const removeRegimen = () => {
  return {
    type: REMOVE_REGIMEN,
  }
}


export const createRegimen = (formRegimen) => dispatch => {
  return RegimenUtil.createRegimen(formRegimen)
  .then(regimen => dispatch(receiveRegimen(regimen)))
}

export const deleteRegimens = (regimenId) => dispatch => {
  return RegimenUtil.deleteRegimen(regimenId)
  .then(() => dispatch(removeRegimen()))
}


