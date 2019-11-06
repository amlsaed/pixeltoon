import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
        <div    className="footer container-fluid"> 
            <div className="row d-flex justify-content-between no-gutters">
            <div className="col-md-3 ">
                <span>&#169; 2019 pixeltoon</span>
                <span><a href="about">about us</a></span>
                <span><a href="contact">contact us</a></span>
            </div>
            <div className="col-md-2 offset-md-7">
                <span className="social">follow us on:</span>
                <span className="social"><a href="facebook"><i className="fab fa-facebook-f"></i></a></span>
                <span className="social"><a href="facebook"><i className="fab fa-twitter"></i></a></span>
                <span className="social"><a href="facebook"><i className="fab fa-instagram"></i></a></span>
            </div>
            </div>
        </div>
        );
    }
}
export default Footer;