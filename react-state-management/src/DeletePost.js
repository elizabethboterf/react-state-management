import React from "react";

function DeletePost({index, handleDelete}){
  return <button name="delete" onClick={handleDelete(index)} id={index}>Delete</button>
}

export default DeletePost;