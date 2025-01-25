// // src/components/BlogEditor.js
// import React, { useState } from "react";
// import { Editor } from "@tinymce/tinymce-react";

// const BlogEditor = ({ onSave }) => {
//   const [content, setContent] = useState("");

//   return (
//     <div>
//       <Editor
//         apiKey="jn4izljdqvbakzbve83h3u94nxeezg4ii1ahvrr1f3gjuwqr" // Use the correct environment variable
//         value={content}
//         onEditorChange={(newContent) => setContent(newContent)}
//         init={{
//           height: 500,
//           menubar: true,
//           plugins: [
//             "advlist autolink lists link image charmap print preview anchor",
//             "searchreplace visualblocks code fullscreen",
//             "insertdatetime media table paste code help wordcount",
//           ],
//           toolbar:
//             "undo redo | formatselect | bold italic backcolor | \
//             alignleft aligncenter alignright alignjustify | \
//             bullist numlist outdent indent | removeformat | help | images",
//           images_upload_handler: (blobInfo, success) => {
//             const reader = new FileReader();
//             reader.onload = () => {
//               const base64 = reader.result; // Convert image to Base64
//               success(base64); // Pass the Base64 string to TinyMCE
//             };
//             reader.readAsDataURL(blobInfo.blob()); // Read the image file
//           },
//         }}
//       />
//       <button
//         onClick={() => onSave(content)}
//         className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
//       >
//         Save Blog Post
//       </button>
//     </div>
//   );
// };

// export default BlogEditor;

//===========================================================
// ...existing code...
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const BlogEditor = ({ onSave }) => {
  const [content, setContent] = useState("");
  // Add thumbnail state
  const [thumbnail, setThumbnail] = useState("");

  // Convert file to base64
  const handleThumbnailChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setThumbnail(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Thumbnail
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleThumbnailChange}
          className="mb-2"
        />
        {thumbnail && (
          <img
            src={thumbnail}
            alt="Thumbnail Preview"
            className="w-32 h-32 object-cover mb-2"
          />
        )}
      </div>
      <Editor
        apiKey="jn4izljdqvbakzbve83h3u94nxeezg4ii1ahvrr1f3gjuwqr"
        value={content}
        onEditorChange={(newContent) => setContent(newContent)}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help | images",
          images_upload_handler: (blobInfo, success) => {
            const reader = new FileReader();
            reader.onload = () => {
              success(reader.result);
            };
            reader.readAsDataURL(blobInfo.blob());
          },
        }}
      />
      <button
        onClick={() => onSave(content, thumbnail)}
        className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
      >
        Save Blog Post
      </button>
    </div>
  );
};

export default BlogEditor;
// ...existing code...
