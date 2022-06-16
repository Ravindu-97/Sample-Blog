import React from 'react';
import './App.css';
import PostList from './PostList';
import PostDetailedView from './PostDetailedView';
import PostDetailedView2 from './PostDetailedView2';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
 

function App() {
  return (
    <Router>
  
      <Switch>
        
        <Route exact path="/" component={PostList} />
        <Route exact path="/PostDetailedView" component={PostDetailedView} />
        <Route exact path="/PostDetailedView/:postId" component={PostDetailedView2} />

        
      </Switch>
     
    </Router>
 
  );
}

export default App;
