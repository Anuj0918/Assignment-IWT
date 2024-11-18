import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/ContactUS/Contact';
import Blogs from './pages/Blogs/Blogs';
import AboutSection from './pages/Home/AboutSection';
import Authors from './pages/Home/Authors';
import  PrivacyPolicy from './pages/PrivacyPolicy';
import BlogPostLayout from './pages/Home/BlogPostLayout';
import Categories from './pages/Home/Categories';
function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contactus" element={<Contact/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/aboutus" element={<AboutSection/>}/>
          <Route path="/Authors" element={<Authors/>}/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
          <Route path="/Categories" element={<Categories/>}/>
          <Route path="/BlogPostLayout" element={<BlogPostLayout/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
