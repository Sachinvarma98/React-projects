import React from 'react'

function PostCard(props) {

  return (
    <div className='p-20'>
        <h3 className='post-card text-2xl font-bold'> {props.title} </h3>
        <p> {props.body} </p>
        <p>{props.id}</p>
        <p>{props.userId}</p>
    </div>
  )
}

export default PostCard