import React,{Component} from "react";

class PostDetailedView extends Component {


    componentDidMount(){
console.log('props', this.props)
        
    } 

    render() {
        const {title, body} = this.props.location.state.post
        return(
            <div>

            
                <div>
                  <div> <h1>{title} </h1> </div>
                  <br></br>
                  <br></br>
                  <div> <p> {body} </p>  </div>
                </div>
             

            </div>
       );
    }
}

export default PostDetailedView;