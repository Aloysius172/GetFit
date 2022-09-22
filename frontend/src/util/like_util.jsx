import axios from 'axios'

export const createLike = (likeData) => {
    return axios.post('api/likes/', likeData)
}

export const deleteLike = (likeId) => (
    axios.delete(`api/likes/${likeId}`)
)