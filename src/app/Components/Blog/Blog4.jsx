import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog4 = () => {

    const blogContent = [
        {img:'/assets/img/books/2 (1).jpg', title:'The Surfing man Will Blow Your Mind',auther:""},
        {img:'/assets/img/books/2 (2).jpg', title:'The Surfing man Will Blow Your Mind'},
        {img:'/assets/img/books/2 (3).jpg', title:'The Surfing man Will Blow Your Mind'},
        {img:'/assets/img/books/2 (4).jpg', title:'The Surfing man Will Blow Your Mind'},
        {img:'/assets/img/books/2 (5).jpg', title:'The Surfing man Will Blow Your Mind'},
        {img:'/assets/img/books/2 (6).jpg', title:'The Surfing man Will Blow Your Mind'},
        {img:'/assets/img/books/2 (7).jpg', title:'The Surfing man Will Blow Your Mind'},
        {img:'/assets/img/books/2 (8).jpg', title:'The Surfing man Will Blow Your Mind'},
        {img:'/assets/img/books/2 (9).jpg', title:'The Surfing man Will Blow Your Mind'},
        {img:'/assets/img/books/2 (10).jpg', title:'The Surfing man Will Blow Your Mind'},
        {img:'/assets/img/books/2 (11).jpg', title:'The Surfing man Will Blow Your Mind'},
        {img:'/assets/img/books/2 (12).jpg', title:'The Surfing man Will Blow Your Mind'},
        {img:'/assets/img/books/2 (13).jpg', title:'The Surfing man Will Blow Your Mind'},
      ];

    return (
        <section className="news-section section-padding fix">
            <div className="container">
                <div className="row g-4">
                {blogContent.map((item, i) => (
                    <div key={i} className="col-xl-4 col-md-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-card-items-3 style-4">
                            <div className="news-image">
                                <Image src={item.img} alt="img" width={416} height={347}   />
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li>
                                    <i className="bi bi-person"></i>
                                        {item?.auther}
                                    </li>
                                </ul>
                                <h4>
                                <Link href="/blog/blog-details">
                                    {item.title}
                                    </Link>
                                </h4>
                                <Link href="/blog/blog-details" className="link-btn">OrderNow <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    ))}
 

                </div>
            </div>
        </section>

    );
};

export default Blog4;