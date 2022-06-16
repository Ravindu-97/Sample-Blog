import React,{Component} from "react";

class PostDetailedView2 extends Component {


    state = {
        loading:true,        
        posts:[],      
       
    }

    componentDidMount(){
        this.fetchData()
        console.log('props', this.props)
      }

    
    
    fetchData = async ()=>{
            const url = "https://jsonplaceholder.typicode.com/posts";
            const response = await fetch(url);
            const data = await response.json();
            this.setState({posts: data[parseInt(this.props.match.params.postId)-1], loading:false})
            console.log(data)
    }

    render() {
        console.log('renderring... ', this.state)
        
        return(
            <div>

            
                <div>
                <div> <h1>{this.state.posts.title} </h1> </div>
                  <br></br>
                  <br></br>
                  <div> <p> {this.state.posts.body} </p>  </div>
                  
                  
                </div>
             

            </div>
       );
    }
}

export default PostDetailedView2;