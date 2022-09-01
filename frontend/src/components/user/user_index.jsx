import React from 'react'
import { UserIndexItem } from './user_index_item';
import {Link} from 'react-router-dom'

class UserIndex extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }


    render() {
        if (this.props.users)
            return (
                <div className='user-index'>
                    <ul className='user-index-list'>
                        {this.props.users.map((user, i) => (
                            <li key={i} className='user-index-item'>
                                <Link to={`/users/${user._id}`}>
                                    <UserIndexItem user={user} />
                                </Link>
                            </li>
                        ))}

                    </ul>
                    
                </div>

            )
    }



}
export default UserIndex