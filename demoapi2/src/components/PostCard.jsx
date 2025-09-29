import React from 'react'

function PostCard(props) {
  return (
    <div className='post-cards'>
        <h3> {props.id} </h3>
        <h4> {props.userId} </h4>
        <h5> {props.title} </h5>
        <h6> {props.body} </h6>
    </div>
  )
}

export default PostCard