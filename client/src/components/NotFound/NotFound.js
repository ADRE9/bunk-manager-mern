import React from "react";
import "./NotFound.css";
import Img404 from '../../assets/svg/404.png';

const NotFound = () => {
    return (<div>
        <h1 className='error_heading1'>
        Oops &#44; the page you&apos;re looking for doesn&apos;t exist
      </h1>
      <img src={Img404} className='error_img' alt='Img404'></img>
                <h1 className='error_heading2'>
                    Let's go <a href="/" className="HOME">home</a> and try from there.
                </h1>
            </div>
        
    );
};

export default NotFound;
