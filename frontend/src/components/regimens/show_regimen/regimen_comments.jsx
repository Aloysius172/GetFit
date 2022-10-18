import React from 'react';

const RegimenComments = props => (
    <li>
        <p>Comment by: </p><h2 class="posters-name">{props.comment.commentCreatorName}</h2>
        <div class="comment-body">{props.comment.text}</div>
        <button class="delete-comment" onClick={() => props.deleteTweet(props.comment._id)}>Delete Comment</button>
        <p class="comment-padding"></p>
    </li>
);

export default RegimenComments;