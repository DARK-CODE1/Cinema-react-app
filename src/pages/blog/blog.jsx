import React, { useState, useEffect } from 'react';
import './blog.css';
import BlogCard from '../../components/blogCard/blogCard';

function Blog() {
    const [blogs, setBlog] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:3000/data/blogData.json')
            .then(res => res.json())
            .then(data => setBlog(data))
            .catch(e => console.log(e.message));
    };
    useEffect(
        () => {
            fetchData();
        }, []);
    return (
        <section className="blogs" id="blog">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">our Blog</h4>
                </div>
                <div className="row mt-5">
                    {
                        blogs && blogs.length > 0 && blogs.map(blog => (
                            <BlogCard blog={blog} key={blog._id} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog