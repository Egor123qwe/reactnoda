import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import AddPostForm from './AddPostForm';
import { initialStateTypeProfileReducer } from '../../../redux/ProfileReducer';


type PropsType = {
    AddPost: (post: string) => void,
    ProfilePage: initialStateTypeProfileReducer
}

const MyPosts: React.FC <PropsType> = (props) => {

    let PostsElement = props.ProfilePage.PostsData.map( e => <Post text={e.text} id={e.id}/>)

    return (
        <div className={s.MyPosts}>
            <div className={s.Addposts}>
                <AddPostForm AddPost={props.AddPost}/>
            </div>
            <div className={s.posts}>
                {PostsElement}
            </div>
            
        </div>
      );
}

export default MyPosts;