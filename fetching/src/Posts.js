import React, { Component } from 'react'
import LoaderHoc from './LoaderHoc'

 class Posts extends Component {
    render() {
        return (
            <div>
                {
                this.props.isLoading ? <div>Loading...</div>
                : this.props.posts.map(post =>
                <div key={post.id}>
                    <hr></hr>
                {post.body}
         
                </div>
                )}
            </div>
        );
    }
}
export default LoaderHoc(Posts);