import React, { useEffect } from "react";

function UserIndex(props) {

    // const [events, setEvents] = useState([]);
    // console.log(props.events)
    useEffect(() => { props.getUsers() }, [])


    const users = props.users.map(user => {
        return <div className="events-loco" key={user.id}
            onClick={() => { window.location.href = `/#/users/${user.id}` }}>
            <div className="momo">
                {user.username}
                <br />
                {user.email}
                <br />
                <div>
                </div>
                <img className="momo-pic" src="https://www.djtimes.com/wp-content/uploads/2021/08/electric-zoo-music-festival-reveals-set-times-for-2021-dj-times.jpg" alt="" />
            </div>


        </div>
    });

    return <div className="events-index-container">
        <div className="index-header">
        </div>
        <div className="index-panels-container">
            <div className="index-panels-wrapper">
                <div className="default-wrappa">
                    {users}
                </div>
            </div>
        </div>
    </div>
}

export default UserIndex;