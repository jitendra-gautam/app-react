import React, { Component } from 'react'
import Post from './post';

export class postList extends Component {
    render() {
         return this.props.posts.map((post) => (
            <div>
           
                <Post key={post.id} postData={post} />
                </div>
        ));
    }
}

export default postList;
