import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import {Route} from 'react-router-dom';
import './Posts.css';
import FullPost from '../FullPost/FullPost';
//import { Link } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        const posts = axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Lam'
                    }
                })
                this.setState({ posts: updatedPosts });
                // console.log(response);
            })
            .catch(error => {
                console.log(error);
                //this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        //this.setState({ selectedPostId: id });
        //this.props.history.push({pathname: '/posts/' + id}); // view 195: to go back or go foward...
        this.props.history.push('/posts/' + id); // Another way
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/posts/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                {/* <Route path={'/posts/:id'} exact component={FullPost} /> */}
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} /> 
            </div>
        );
    }
}

export default Posts;