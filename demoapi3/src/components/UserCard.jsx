import React from 'react'

function UserCard(props) {

    return (
        <div>
            <img src={props.data.picture.large} alt="" />
            <h3> My name is {props.data.name.title} {props.data.name.first} {props.data.name.last} and i'm from- {props.data.location.country} {props.data.location.city} {props.data.location.street.name} street number - {props.data.location.street.number} </h3>
            <h3> contact no. - {props.data.phone} </h3>
            <h3> e-mail - {props.data.email} </h3>
        </div>
    )
}

export default UserCard