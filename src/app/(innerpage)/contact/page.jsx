import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Contact from '../../Components/Contact/Contact';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="https://www.dekom.com/landingpages/03_darum_dekom/alles_aus_einer_hand/13138/image-thumb__13138__large-stage-image_auto_a85c71ac4842f436fb9161d1caa1825b/allesauseinerhand_support@2x.jpg"
                Title="Contact Us"
            ></BreadCumb>
            <Contact></Contact>        
    </div>
  );
};

export default page;