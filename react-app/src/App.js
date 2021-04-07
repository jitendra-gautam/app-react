import DetailedPost from './components/detailedPost';
import PostsContainer from './components/postContainer';
import { Route } from 'react-router-dom'
import { BrowserRouter, Switch } from 'react-router-dom';



function App() {


  return (


<div>
<BrowserRouter>
<Switch>
<Route component={PostsContainer} path="/app-react" exact />  
<Route component={DetailedPost} path="/app-react/postDetails" exact />
</Switch>
</BrowserRouter>


</div>
  );
}

export default App;
  