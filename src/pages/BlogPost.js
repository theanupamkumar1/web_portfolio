// // src/pages/BlogPost.js
// import React, { useEffect, useState } from "react";
// import { db } from "../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useParams } from "react-router-dom";

// const BlogPost = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       const blogDoc = doc(db, "blogs", id);
//       const blogSnapshot = await getDoc(blogDoc);
//       if (blogSnapshot.exists()) {
//         setBlog({ id: blogSnapshot.id, ...blogSnapshot.data() });
//       } else {
//         console.log("Blog not found");
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   if (!blog) {
//     return <div className="text-center py-12">Loading...</div>;
//   }

//   return (
//     <div className="py-12 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <img
//             src={blog.image} // Base64 cover image
//             alt={blog.title}
//             className="w-full h-64 object-cover"
//           />
//           <div className="p-6">
//             <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
//             <p className="text-gray-600 mb-4">
//               By {blog.author} • {new Date(blog.date?.toDate()).toDateString()}
//             </p>
//             <div
//               className="prose max-w-none"
//               dangerouslySetInnerHTML={{ __html: blog.content }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;

//=========================================================================================

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogDoc = doc(db, "blogs", id);
      const blogSnapshot = await getDoc(blogDoc);
      if (blogSnapshot.exists()) {
        setBlog({ id: blogSnapshot.id, ...blogSnapshot.data() });
      } else {
        console.log("Blog not found");
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="text-center py-12 text-xl font-medium">Loading...</div>
    );
  }

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cover Image */}
        <img
          src={blog.thumbnail} // Base64 cover image
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
        />

        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {blog.title}
        </h1>

        {/* Author and Date */}
        <p className="text-gray-600 mb-8">
          By <span className="font-semibold text-gray-800">{blog.author}</span>{" "}
          • {new Date(blog.date?.toDate()).toDateString()}
        </p>

        {/* Blog Content */}
        <div
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Social Sharing Buttons */}
        <div className="mt-12 flex space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => {
              const url = window.location.href;
              const text = `Check out this blog post: ${blog.title}`;
              window.open(
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  url
                )}&text=${encodeURIComponent(text)}`,
                "_blank"
              );
            }}
          >
            Share on Twitter
          </button>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
            onClick={() => {
              const url = window.location.href;
              const text = `Check out this blog post: ${blog.title}`;
              window.open(
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  url
                )}`,
                "_blank"
              );
            }}
          >
            Share on LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
