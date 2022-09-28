import * as LikeUtil from '../util/like_util'

export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const REMOVE_LIKE = "REMOVE_LIKE"
export const RECEIVE_LIKES = "RECEIVE_LIKES"

export const receiveLike = (like) => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

export const removeLike = (likeId) => {
    return {
        type: REMOVE_LIKE,
        likeId,
    }
}

export const receiveLikes = (likes) => {
    return {
        type: RECEIVE_LIKES,
        likes
    }
}




export const createLike = (formLike) => dispatch => {
    return LikeUtil.createLike(formLike)
        .then(like => dispatch(receiveLike(like.data)))
}

export const deleteLike = (likeId) => dispatch => {
    return LikeUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)))
}

export const fetchLikes = () => dispatch => LikeUtil.fetchLikes()
    .then(likes => dispatch(receiveLikes(likes.data)));