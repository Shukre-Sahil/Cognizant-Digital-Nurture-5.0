import React, {Component} from 'react';

class blogPost{
  constructor(id, title,body){
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

class Post extends React.Component{
  constructor(props){
    super(props);
    // code
  }
  loadPost(){
    //code 
  }
  componentDidMount(){
    // code
  }
  render(){
    return(
      <div>
        <h1>Hello react</h1>
      </div>
    )
  }
  componentDidCatch(error,info){
    // code
  }
}


export default Post;