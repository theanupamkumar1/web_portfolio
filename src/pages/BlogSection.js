import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsCol = collection(db, "blogs");
      const blogsQuery = query(blogsCol, orderBy("date", "desc"), limit(5)); // Fetch latest 5 blogs
      const blogsSnapshot = await getDocs(blogsQuery);
      const blogsData = blogsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-section py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="blog" className="text-5xl font-bold mb-8 text-center">
          Latest Blogs
        </h2>
        <hr className="w-24 h-1 mx-auto my-4 bg-purple border-0 rounded md:my-5 dark:bg-gray-700" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              to={`/blog/${blog.id}`}
              className="blog-title text-gray-900 font-semibold "
            >
              <div
                key={blog.id}
                className="cards rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">
                    By {blog.author} •{" "}
                    {new Date(blog.date?.toDate()).toDateString()}
                  </p>
                  <span className="text-purple-500 font-semibold">
                    Read More..
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/blogs"
            className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200"
          >
            See All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
