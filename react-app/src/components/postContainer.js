import {React, useState, useEffect} from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './postList';
import { Card } from 'react-bootstrap';


function PostContainer() {

  const [posts, setPosts] = useState([]);



useEffect(() => {
  const fetchTasks = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
setPosts(data);

  }

fetchTasks();

}, [])

  return (


<div>
    <Card>
    <Card.Header><h2><em>List of Posts from provided API </em></h2></Card.Header>
    </Card>


<CardDeck>
<PostList posts={posts}/>
</CardDeck>
</div>
  );
}

export default PostContainer;
  