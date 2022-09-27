import React from 'react';
import TweetBox from './tweet_box';

class TweetCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: props.currentUserId,
            commentCreatorName: props.currentUserName,
            regimen_id: props.regimen.id,
            regimenCreator_id: props.regimen.user_id,
            regimenCreatorName: props.regimen.creator,
            text: "",
            newTweet: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newTweet: nextProps.newTweet.text });
    }

    handleSubmit(e) {
        e.preventDefault();
        let tweet = {
            user_id: this.state.user_id,
            commentCreatorName: this.state.commentCreatorName,
            regimen_id: this.state.regimen_id,
            regimenCreator_id: this.state.regimenCreator_id,
            regimenCreatorName: this.state.regimenCreatorName, 
            text: this.state.text
        };

        this.props.composeTweet(tweet);
        this.setState({ text: '' })
    }

    update() {
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="textarea"
                            value={this.state.text}
                            onChange={this.update()}
                            placeholder="Write your Comment..."
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
                <TweetBox text={this.state.newTweet} />
            </div>
        )
    }
}

export default TweetCompose;