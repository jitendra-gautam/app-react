import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Card } from 'react-bootstrap';


const DetailedPost = () => {

    const location = useLocation();
    const history = useHistory();
    const [ commentDetails, setDetails ] = useState([]);
    const [ showDetails, setShowDetails ] = useState(false);
    

    const fetchComments = async (fromPostId) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${fromPostId}`);
      const data = await response.json()

      setDetails(data);
  if (response.data !== '')
  {
      console.log(data);
      //console.log(postDetails);
  }
    };

    useEffect(() => {
    if(location.state !== undefined){
      const { fromPostId } = location.state;
      console.log(fromPostId);
      fetchComments(fromPostId);
      setShowDetails(true);
    }
  }, []);

   
 



if (showDetails === true)
{
  
  return (

<div>
<Container>
<Card>
  <Card.Header>Post: {location.state.fromPostId}</Card.Header>
  <Card.Body>
    <Card.Title>{location.state.fromPostTitle}</Card.Title>
    <Card.Text>
    {location.state.fromPostBody}
    </Card.Text>
  </Card.Body>
</Card>




<h3><em>Comment section</em></h3>


{commentDetails.map((comment) => (

<Card border="light" style={{ width: '39rem' }}>
    <Card.Header>Comment: {comment.id}</Card.Header>
    <Card.Body>
           <Card.Text>
      Comment Body: {comment.body}
      </Card.Text>
       <Card.Title>{comment.email}</Card.Title>

    </Card.Body>
  </Card>





))}

<button onClick={history.goBack}>Go Back</button>


</Container>

</div>

  )

}
else
{

  return (
    <Container>
      <h1>This is else Block</h1>
    
    

<h1>Content is unavailable currently.</h1>
      
    </Container>
  )



}  



}

export default DetailedPost;

