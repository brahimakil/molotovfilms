import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeOneLayout from "./component/HomeOneLayout";
import InnerPageLayout from "./component/InnerPageLayout";
import HomeTwoLayout from "./component/HomeTwoLayout";
import HomeThreeLayout from "./component/HomeThreeLayout";
import ScrollToTop from "./component/ScrollToTop";
import Error404 from "./pages/Error404";

// Eager load critical pages
import AboutPage from "./pages/AboutPage";

// Lazy load other pages for better performance
const HomeOne = lazy(() => import("./pages/HomeOne"));
const HomeTwo = lazy(() => import("./pages/HomeTwo"));
const HomeThree = lazy(() => import("./pages/HomeThree"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceDetailsPage = lazy(() => import("./pages/ServiceDetailsPage"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const ScriptWriting = lazy(() => import("./pages/ScriptWriting"));
const SocialMediaPerformancePage = lazy(() => import("./pages/SocialMediaPerformancePage"));
const PostProductionPage = lazy(() => import("./pages/PostProductionPage"));
const WebDevelopmentPage = lazy(() => import("./pages/WebDevelopmentPage"));
const BlogGridPage = lazy(() => import("./pages/BlogGridPage"));
const BlogDetailsPage = lazy(() => import("./pages/BlogDetailsPage"));
const BlogListViewPage = lazy(() => import("./pages/BlogListViewPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const SingleMemberPage = lazy(() => import("./pages/SingleMemberPage"));
const TeamMemberPage = lazy(() => import("./pages/TeamMemberPage"));
const TestimonialPage = lazy(() => import("./pages/TestimonialPage"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: '#f8f9fa'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎬</div>
            <div style={{ fontSize: '18px', color: '#666' }}>Loading...</div>
          </div>
        </div>
      }>
        <Routes>
          {/* Home One */}
          <Route path="/" element={<HomeOneLayout />}> 
            <Route index element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services-details" element={<ServiceDetailsPage />} />
            <Route path="social-media-performance" element={<SocialMediaPerformancePage />} />
            <Route path="post-production" element={<PostProductionPage />} />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="scriptwriting" element={<ScriptWriting />} />
            <Route path="web-development" element={<WebDevelopmentPage />} />
          </Route> 

          {/* Inner Page */}
          <Route element={<InnerPageLayout />}>
            <Route path="about" element={<HomeOne />} />
            <Route path="blog-grid" element={<BlogGridPage />} />
            <Route path="blog-details" element={<BlogDetailsPage />} />
            <Route path="blog-list-view" element={<BlogListViewPage />} />
            <Route path="contuct-us" element={<ContactUsPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="single-member" element={<SingleMemberPage />} />
            <Route path="team" element={<TeamMemberPage />} />
            <Route path="testimonial" element={<TestimonialPage />} />
          </Route>
          
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
