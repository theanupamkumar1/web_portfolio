import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlogsPage from "./pages/BlogsPage";
import BlogPost from "./pages/BlogPost";
import Layout from "./comps/layout/Layout";
import BlogManagement from "./pages/BlogManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="/manage-blogs" element={<BlogManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
