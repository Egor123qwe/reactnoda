import s from './Post.module.css';
import React from 'react';

function Post(props) {
    return (
        <div className={s.item}>
            <img alt='' src="https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg"/>
            {props.text}
        </div>
      );
}

export default Post;