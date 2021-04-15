import React from "react";
import {Link} from 'react-router-dom';
import '../App.css';
import {Col} from "react-bootstrap";
import product from '../img/post-976115_960_720.png';
import { stripStringHtml } from "../utils/util";

function Post(props){

    return(
        <Col sm={12} className="p-x">
            <div className="post-box">
                <div className="post-image">
                    <img src={product} alt={"product"} className="w-100"></img>
                </div>
                <div className="post-details">
                    <h3 className="post-title">
                        {typeof props.postObj != 'undefined' &&
                            props.postObj.title.rendered
                        }
                    </h3>   
                    {typeof props.postObj != 'undefined' &&
                        <p className="post-description m-0">{stripStringHtml(props.postObj.content.rendered)}</p>
                    }
                    <Link to={"/pages/details/" + props.postObj.id} className="read-more">Read More</Link>
                </div>
            </div>
        </Col>
    )
}

export default Post;