import React from 'react'

function PostCard(props) {
  return (
    <div>
      <h3> {props.id} </h3>
<h5> {props.title} </h5>
    </div>

  )
}

export default PostCard