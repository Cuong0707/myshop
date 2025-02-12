import React,{ useState} from 'react';
import './BlogPage.css';

const BlogPage = () => {
    const Banner = [
        'assets/images/banner.jpg',
        'assets/images/banner.jpg',
        'assets/images/banner.jpg',
        'assets/images/banner.jpg',
    ];

    return (
        <div className="blog-page">
            <div className="slide-banner">
                <div className="slides">
                    {Banner.map((src, index) => {
                        return (
                            <img
                                key={index}
                                src={src}
                                alt={`circle-img-${index}`}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="content-section">
                <div className="everyday-fashion">
                    <h2>Everyday Fashion</h2>
                    {/* Add Everyday Fashion content here */}
                </div>
                <div className="celebrity-style">
                    <h2>Celebrity Style</h2>
                    <div className="celebrity-item">
                        <img src="path/to/image.jpg" alt="Celebrity" />
                        <h3>Celebrity Title</h3>
                    </div>
                    {/* Add more Celebrity Style content here */}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;