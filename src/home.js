import React ,{Component} from 'react';
import {Sections} from './sections'
import {Link} from 'react-router-dom'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
};
const stories= Sections.filter(({name})=>name==="stories");

class Home extends Component{
  hei = window.innerHeight;
    state = {
        he:{
            height :  this.hei-170,
        }
    }
  render(){
    return(
  <div className="home" style={this.state.he} >

{stories.map((story)=>{
return( 
  <div >
  <Carousel 
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? false: false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .8 ease-in  1s"
  transitionDuration={1000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
    {story.sections.map((secn)=>{
      return(
      <Link to={`stories/${secn.secname}`} key={secn.id} >
          <img src={secn.img} alt="" className="rounded-circle img-fluid"/>
          <span className="">{secn.ar}</span>
        </Link>
      )
    })}
    </Carousel>

  </div>
  )
})}
 
  
</div>
    )
  }
}
export default Home;
