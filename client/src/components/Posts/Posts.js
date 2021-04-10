import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./styles";
import {useSelector} from "react-redux";

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state)=> state.posts);
    return (
        <>
            <h1>Hello from Posts</h1>
            <Post />
            <Post/>
            <Post/>
        </>
    )
}

export default Posts