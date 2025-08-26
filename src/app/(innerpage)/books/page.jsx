import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Blog4 from '../../Components/Blog/Blog4';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="https://www.law.msu.ru/uploads/slider/65f8290c826a1.jpg"
                Title="Books"
            ></BreadCumb> 
            <Blog4></Blog4>        
    </div>
  );
};

export default page;