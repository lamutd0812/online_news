import React from 'react';
//import { withRouter } from 'react-router-dom';  

import './Post.css';

const post = (props) => {
    //console.log(props);
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
};

export default post;

//export default withRouter(post);
//see 187: withRouter adds these props to other components, to any component we wrap with it. => get its info