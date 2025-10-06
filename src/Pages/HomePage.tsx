// src/pages/HomePage.tsx
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import Faq from '../Components/FAQ'; 
import BlogSection from '../Components/BlogSection';
import Contact from '../Components/Contact';
import About from '../Components/About';
import FloatingWhatsApp from '../Components/FloatingWhatsapp';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-background text-brand-dark">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <BlogSection />
        <Faq />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}