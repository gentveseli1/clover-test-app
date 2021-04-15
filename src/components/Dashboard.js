import React, { useEffect, useState } from "react";
import '../App.css';
import {Container} from "react-bootstrap";
import Post from './Post';
import {loadPosts} from '../services/post.service';
import Loader from './Loader';

function Dashboard(props){
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        if(posts.length <= 0){
            loadPosts().then(response => {
                setPosts(response.data);
            });
        }
    });

    const renderPosts = () => {
        return posts.map((post) => {
            return <Post key={post.id} postObj={post}/>
        });
    }

    return(
    <Container fluid>
        {posts.length > 0 
            ?
            renderPosts()
            :
            <Loader />
        }
    </Container>
    )
};

export default Dashboard;