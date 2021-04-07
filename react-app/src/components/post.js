import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

const post = ({postData}) => {
    return (
        <div>
            <Card border="dark" style={{ width: '81rem' }} bg={'secondary'} >
    
<Card body>

             <Link to={{
      pathname: '/app-react/postDetails',
      state: {
        fromPostId: postData.id,
        fromPostTitle: postData.title,
        fromPostBody: postData.body,
        fromPostUserId: postData.userId
      }
    }}  style={{ color: '#000' }}> 
<h4>{postData.title}</h4>
  
      </Link>

</Card>


            </Card>
                   </div>
    )
}

export default post
