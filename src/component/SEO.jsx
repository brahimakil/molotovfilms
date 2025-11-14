import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = 'Molotov Films - Professional Video Production & Creative Services',
  description = 'Premium video production, post-production, and creative services in Belgium. Transform your vision into cinematic reality.',
  keywords = 'video production Belgium, film production, post-production services, script writing, social media content creation',
  image = 'https://www.molotovfilms.be/Molotove text Final (2).png',
  url = 'https://www.molotovfilms.be/'
}) => {
  const location = useLocation();
  const currentUrl = `https://www.molotovfilms.be${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', 'website', true);

    // Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:card', 'summary_large_image', true);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

  }, [title, description, keywords, image, currentUrl]);

  return null;
};

// SEO data for different pages
export const seoData = {
  home: {
    title: 'Molotov Films - Professional Video Production & Creative Services in Belgium',
    description: 'Transform your vision into cinematic reality. Premium video production, post-production, script writing, and social media content creation services in Belgium.',
    keywords: 'video production Belgium, film production, cinematic videos, corporate videos, commercial production, creative agency Belgium'
  },
  about: {
    title: 'About Molotov Films - Your Creative Video Production Partner',
    description: 'Learn about Molotov Films, Belgium\'s leading video production company. Our team of creative professionals brings your vision to life with cinematic excellence.',
    keywords: 'about Molotov Films, video production company Belgium, creative team, film professionals'
  },
  services: {
    title: 'Video Production Services - Molotov Films Belgium',
    description: 'Comprehensive video production services including filming, post-production, script writing, social media content, and web development. Professional results guaranteed.',
    keywords: 'video production services, film services Belgium, professional video editing, commercial production'
  },
  postProduction: {
    title: 'Post-Production Services - Color Grading, Editing & VFX | Molotov Films',
    description: 'Professional post-production services including video editing, color grading, sound design, and motion graphics. Cinematic quality for every frame.',
    keywords: 'post-production Belgium, video editing, color grading, motion graphics, VFX, sound design'
  },
  scriptWriting: {
    title: 'Professional Script Writing Services | Molotov Films',
    description: 'Expert script writing for commercials, corporate videos, and film projects. Transform ideas into compelling narratives that engage your audience.',
    keywords: 'script writing Belgium, scriptwriting services, commercial scripts, video scripts, storytelling'
  },
  socialMedia: {
    title: 'Social Media Content Creation & Video Marketing | Molotov Films',
    description: 'Create viral-worthy content for social media platforms. Expert video production for Instagram, TikTok, YouTube, and more. Boost your online presence.',
    keywords: 'social media content creation, Instagram videos, TikTok content, YouTube production, viral videos Belgium'
  },
  webDevelopment: {
    title: 'Web Development & Digital Solutions | Molotov Films',
    description: 'Custom web development services to complement your video content. Build stunning websites and digital experiences that convert.',
    keywords: 'web development Belgium, website design, digital solutions, custom websites'
  },
  contact: {
    title: 'Contact Molotov Films - Get A Quote Today',
    description: 'Ready to bring your vision to life? Contact Molotov Films for professional video production services in Belgium. Get a free quote today.',
    keywords: 'contact Molotov Films, video production quote, film production Belgium contact'
  },
  pricing: {
    title: 'Video Production Pricing & Packages | Molotov Films',
    description: 'Transparent pricing for professional video production services. Find the perfect package for your project needs and budget.',
    keywords: 'video production pricing, film production costs, video packages Belgium'
  },
  blog: {
    title: 'Video Production Blog & Insights | Molotov Films',
    description: 'Latest tips, trends, and insights about video production, filmmaking, and creative content. Expert advice from Molotov Films.',
    keywords: 'video production blog, filmmaking tips, content creation insights, video marketing'
  },
  team: {
    title: 'Our Team - Meet The Creative Minds | Molotov Films',
    description: 'Meet the talented team behind Molotov Films. Our creative professionals are dedicated to bringing your vision to life.',
    keywords: 'Molotov Films team, video production professionals, creative team Belgium'
  },
  testimonials: {
    title: 'Client Testimonials & Reviews | Molotov Films',
    description: 'See what our clients say about working with Molotov Films. Real reviews from satisfied customers across Belgium.',
    keywords: 'Molotov Films reviews, client testimonials, video production testimonials Belgium'
  },
  faq: {
    title: 'Video Production FAQ | Molotov Films Belgium',
    description: 'Frequently asked questions about video production services, pricing, process, and more. Get answers to your questions.',
    keywords: 'video production FAQ, film production questions, Molotov Films FAQ'
  }
};

export default SEO;
