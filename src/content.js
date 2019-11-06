import React ,{Component} from 'react';
class Content extends Component{
    hei = window.innerHeight;
      state = {
          he:{
              minHeight :  this.hei-170,
          }
      }
    render(){
      return(
<h1 style={this.state.he}>hhhhhhhhhhhhhhhhhh</h1>
      )
    }
}
export default Content;