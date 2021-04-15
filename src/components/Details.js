import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import '../App.css';
import {Container, Col} from "react-bootstrap";
import product from '../img/post-976115_960_720.png';
import {
    FacebookIcon,
    LinkedinIcon,
} from "react-share";
import { loadSinglePost } from "../services/post.service";
import Loader from './Loader';  
import { stripStringHtml } from "../utils/util";

function Details(props){
    const [post, setPost] = useState(null);
    const {noteId} = useParams();

    useEffect(() => {
        if(post == null){
            loadSinglePost(noteId).then(response => {
                setPost(response.data);
            });
        }
    });

    return(
        <>
            {post == null 
            ? <Loader />
            : <Container fluid>
                <Col sm={12} className="p-x">
                    <div className="details-holder">
                        <div className="details-image">
                            <img src={product} alt={"product"}></img>
                        </div>
                        <div className="details-title">
                            <h3>{ post.title.rendered }</h3>
                        </div>
                        <div className="details-share">
                            <span>Share:</span>
                            <div>
                                <FacebookIcon size={24} round={true} />
                                <LinkedinIcon size={24} round={true} />
                            </div>
                        </div>
                    </div>
                    <p className="details-description">{stripStringHtml(post.content.rendered)}</p>
                </Col>  
            </Container>
            }
        </>
    )
}

export default Details;