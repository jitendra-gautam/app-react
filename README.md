# app-react
Steps taken to create this React App

1. Created 4 new React Components which are logical related in following way:

a.) postContainer.js is responsible for fetching data from https://jsonplaceholder.typicode.com/posts and passing it to PostList.js component.

b.) postList.js component receives data from postContainer.js component and after mapping pass it to post.js component.

c.) post.js component is responsible for showing title of the post data and passes its other details to detailedPost.js via React_Router

d.)In detailedPost.js, we show available info of post along with its comments received from API.

2. For styling of the components used React-Bootstrap Library

3. Created routes for the pages

Please visit for functional demo:
http://jitendra-gautam.github.io/app-react
