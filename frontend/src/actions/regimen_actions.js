import * as RegimenUtil from '../util/regimen_util'
// import { RECEIVE_LIKE } from './like_action'


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

export const removeRegimen = (regimenId) => {
  return {
    type: REMOVE_REGIMEN,
    regimenId,
  }
}



export const fetchRegimen = (regimenId) => dispatch => RegimenUtil.fetchRegimen(regimenId)
  .then(regimen => dispatch(receiveRegimen(regimen.data)));

export const fetchRegimens = () => dispatch => RegimenUtil.fetchRegimens()
  .then(regimens => dispatch(receiveRegimens(regimens.data)));

export const updateRegimen = (regimen) => dispatch => RegimenUtil.updateRegimen(regimen)
  .then(regimen => dispatch(receiveRegimen(regimen.data)));



export const deleteRegimens = (regimenId) => dispatch => {
  return RegimenUtil.deleteRegimen(regimenId)
    .then(() => dispatch(removeRegimen(regimenId)))
}

export const createRegimen = (formRegimen) => dispatch => {
  return RegimenUtil.createRegimen(formRegimen)
    .then(regimen => dispatch(receiveRegimen(regimen.data)))
}

// export const likeRegimen = (likeData) => dispatch => {
//   debugger;
//   console.log("actions")
//   return RegimenUtil.likeRegimen(likeData)
//    .then(like => dispatch(receiveLike(like.data)))
// }

// export const fetchUserRegimen = (regimenId) => dispatch => {
//   return RegimenUtil.fetchUserRegimen(regimenId)
//   .then((regimens) => dispatch(receiveRegimens(regimens)) )
// }

