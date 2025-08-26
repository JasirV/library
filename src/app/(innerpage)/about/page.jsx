import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import About2 from '../../Components/About/About2';
import Choose1 from '../../Components/Choose/Choose1';
import Counter4 from '../../Components/Counter/Counter4';
import Team1 from '../../Components/Team/Team1';
import Testimonial3 from '../../Components/Testimonial/Testimonial3';
import Instagram2 from '../../Components/Instagram/Instagram2';
import Instagram1 from '../../Components/Instagram/Instagram1';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="https://www.cdc.gov/health-equity/media/images/2024/09/resized.jpg"
                Title="About Us"
            ></BreadCumb>  
            <About2></About2>   
            <Choose1></Choose1> 
            {/* <Counter4></Counter4> */}
            <Team1></Team1>
            {/* <Testimonial3></Testimonial3> */}
            <Instagram1></Instagram1>            
    </div>
  );
};

export default page;