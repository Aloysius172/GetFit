import React from 'react';

const RegimenComments = props => (
    <li>
        <h2>{props.comment.commentCreatorName}</h2>
        <div>{props.comment.text}</div>
        <button onClick={() => props.deleteTweet(props.comment._id)}>Delete Comment</button>
    </li>
);

export default RegimenComments;