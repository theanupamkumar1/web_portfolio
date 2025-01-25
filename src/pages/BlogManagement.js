// // src/pages/BlogManagement.js
// import React, { useState } from "react";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import BlogEditor from "../comps/BlogEditor";
// import { Link } from "react-router-dom";

// const BlogManagement = () => {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("Anupam Kumar");

//   const handleSave = async (content) => {
//     try {
//       await addDoc(collection(db, "blogs"), {
//         title,
//         content,
//         author,
//         date: new Date(),
//         image: "https://via.placeholder.com/600x400", // Default image or upload logic
//       });
//       alert("Blog post saved successfully!");
//       setTitle(""); // Reset the form
//     } catch (error) {
//       console.error("Error saving blog post:", error);
//       alert("Failed to save blog post.");
//     }
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-8">Create a New Blog Post</h1>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Title
//         </label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-lg"
//           placeholder="Enter blog title"
//         />
//       </div>
//       <BlogEditor onSave={handleSave} />
//     </div>
//   );
// };
// <Link
//   to="/manage-blogs"
//   className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
// >
//   Manage Blogs
// </Link>;
// export default BlogManagement;

//======================================================================
// ...existing code...
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import BlogEditor from "../comps/BlogEditor";
import { Link } from "react-router-dom";

const BlogManagement = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Anupam Kumar");

  // Updated onSave signature to accept thumbnail
  const handleSave = async (content, thumbnail) => {
    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        author,
        date: new Date(),
        // Store the base64 thumbnail instead of a placeholder
        thumbnail: thumbnail,
      });
      alert("Blog post saved successfully!");
      setTitle("");
    } catch (error) {
      console.error("Error saving blog post:", error);
      alert("Failed to save blog post.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Create a New Blog Post</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter blog title"
        />
      </div>
      <BlogEditor onSave={handleSave} />
    </div>
  );
};

export default BlogManagement;
// ...existing code...
