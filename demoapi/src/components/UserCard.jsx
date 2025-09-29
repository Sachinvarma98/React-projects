import React from 'react'

function UserCard(props) {
    console.log(props);
    
  return (
    <div className='user-card'>
        <img className='user-img' />
        <h3> {props.data.name.first} </h3>
        <p> {props.data.phone} </p>
        <p> {props.data.location.city} </p>
         {/* <img className='user-img' />
        <h3> username is  </h3>
        <p> passwor jfkjf </p>
        <p> pakeir </p> */}
    </div>
  )
}

export default UserCard