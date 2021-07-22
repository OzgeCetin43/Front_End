import React, { Component } from "react";
import PropTypes from "prop-types";
import Faker from "faker";
import "./Comment.css";

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.shape({
            author: PropTypes.string,
            date: PropTypes.string,
            like: PropTypes.string,
            comment: PropTypes.string
        }).isRequired
    }

    render() {
        const { author, date, like, comment } = this.props.comment;

        return(
            <div className="comment-area">
                <img className="comment-author-image" alt="Comments, Faves, Star, Like" src={Faker.image.avatar()}/>
                <div className="comment-inner-area">
                    <div className="comment-info">
                        <a className="comment-author" href="#">{ author }</a>
                        <div>
                            <small className="comment-time">{ date }</small>
                            <i class="far fa-thumbs-up"></i>
                            <small className="comment-likes">{ like }</small>
                        </div>
                    </div>
                    <p>{ comment }</p>
                </div>
            </div>
        );
    }
} 

export default Comment;