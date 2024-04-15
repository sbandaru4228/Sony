import React, { Component, useEffect, useState } from 'react';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true,
            error: null
        };
    }
    componentDidMount() {
        this.fetchPosts();
    }
    fetchPosts = async () => {
        this.setState({ isLoading: true });
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            this.setState({ posts: data });
        } catch (error) {
            this.setState({ error: error.message });
        } finally {
            this.setState({ isLoading: false });
        }
    };
    render() {
        const { posts, isLoading, error } = this.state;
        return (
            <div>
                {isLoading && <p>Loading posts</p>}
                {error && <p>{error}</p>}
                {!isLoading && !error && (
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}
export default PostList;