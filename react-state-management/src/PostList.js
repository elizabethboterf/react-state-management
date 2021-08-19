import React from "react";
import DeletePost from "./DeletePost"
/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({posts, setPosts, handleDelete}) {
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  
  //const handleDelete=(index)=>{
     //DeletePost(index, posts, setPosts);
//  }
  const list = posts.map((post,index)=>{
       return(
          <div className="post">
           {post.type === "Text" ? (
            <p>{post.content}</p>
          ) : (
            <img src={post.content} />
          )}
          <DeletePost index={index} handleDelete={handleDelete} />
          </div>
        );
  });

  return <div className="post-list">{list}</div>;
}

export default PostList;

