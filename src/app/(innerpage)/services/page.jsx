import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Destination4 from '../../Components/Destination/Destination4';
import Story1 from '../../Components/Story/Story1';
import FeaturedTour1 from '../../Components/FeaturedTour/FeaturedTour1';
import Courses1 from '../../Components/courses/Courses1';
import CourseList from '../../Components/courses/CourseList';
const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="https://www.mgpu.ru/wp-content/uploads/2021/08/front-view-pile-of-books-next-to-laptop-scaled.jpg"
                Title="Our Services"
            ></BreadCumb> 
             <Story1></Story1>  
            <Courses1></Courses1>   
            <CourseList></CourseList>
            {/* <Destination4></Destination4> 
             <FeaturedTour1></FeaturedTour1>                 */}
    </div>
  );
};

export default page;