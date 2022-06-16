import React, {Component} from 'react';
import './PostList.css';
import {Link} from 'react-router-dom'; 
import  Modal from 'react-modal';

Modal.setAppElement('#root')
class PostList extends Component{

state = {
  loading:true,
  isModalVisible:false,
  posts:[],

  title:'',
  description:''
}

  componentDidMount(){
    this.fetchData()
  }

fetchData = async ()=>{
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({posts: data, loading:false})
        console.log(data)
}

    renderItem = (post)=>{
    return (<li key={post.title}><Link to={{pathname:'/PostDetailedView', state: {post}}}>{post.title}</Link></li>)
    }

    renderItem2 = (post)=>{
        return (<li key={post.title}><Link to={{pathname:`/PostDetailedView/${post.id}`}}>{post.title}</Link></li>)
        }

    toggleModal = () => {
        this.setState({
            isModalVisible:!this.state.isModalVisible
        })
    }
    handleSubmit = () => {
        
        let a1 = ['sdaf','2','3']

        a1.push('4')
        let a2 = [...a1, '4']
        
    }

    handleInputChange = (event) => {
        event.preventDefault()

        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
      console.log('renderring... ', this.state)
      const {title, description} = this.state
    
        return(
          <div>
        <button onClick={this.toggleModal}>Create New Post</button>
       <div>
           <Modal isOpen={this.state.isModalVisible} onRequestClose={this.toggleModal}
              style={
                  {
                      overlay:{
                          backgroundColor: "grey"
                      }
                  }
              } >
             <p>Title is: {title} </p>    
             <p>Description is: {description} </p>  

            <form onSubmit={this.handleSubmit}>
               <h3>Title :</h3>
               <input type="text" id="title" placeholder="Enter the Title" name="title" onChange={this.handleInputChange}/>
               <h3>Description :</h3>
               <input type="text" id="desc" placeholder="Enter Description" name="description" onChange={this.handleInputChange} /> 
               <hr></hr>

                <button>Save & Publish</button>   

            </form>
            
           </Modal>
        </div>
    
            <ul>
            {this.state.posts.map(this.renderItem)}
            </ul>
</div>
     
        ) 
    }
}

export default PostList;