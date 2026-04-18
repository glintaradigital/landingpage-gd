'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Mail, Phone, MapPin, ArrowRight, Menu, X,
  Code, Smartphone, Monitor, Layout, Cloud, Settings
} from 'lucide-react';

const navItems = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const portfolioItems = [
  {
    id: 1,
    title: 'SaaS Analytics Dashboard',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=600&fit=crop',
    slug: 'saas-dashboard',
  },
  {
    id: 2,
    title: 'Fintech Mobile Wallet',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=600&fit=crop',
    slug: 'fintech-wallet',
  },
  {
    id: 3,
    title: 'Inventory Management System',
    category: 'Desktop App',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&h=600&fit=crop',
    slug: 'inventory-system',
  },
  {
    id: 4,
    title: 'Healthcare Patient Portal',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=600&fit=crop',
    slug: 'healthcare-portal',
  },
  {
    id: 5,
    title: 'Logistics Tracking App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=500&h=600&fit=crop',
    slug: 'logistics-app',
  },
  {
    id: 6,
    title: 'AI Code Assistant',
    category: 'Desktop App',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=600&fit=crop',
    slug: 'ai-assistant',
  },
];

const services = [
  {
    id: 1,
    title: 'Web App Development',
    description: 'Build scalable, high-performance web applications using modern frameworks like React, Next.js, and Node.js.',
    icon: Code,
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Create intuitive and powerful mobile experiences for iOS and Android using Flutter, React Native, or native technologies.',
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'Desktop Applications',
    description: 'Develop robust desktop software for Windows, macOS, and Linux with focus on performance and native experience.',
    icon: Monitor,
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Design user-centric interfaces and seamless user journeys specifically tailored for complex software systems.',
    icon: Layout,
  },
  {
    id: 5,
    title: 'Cloud & DevOps',
    description: 'Architect and manage secure cloud infrastructure, CI/CD pipelines, and automated deployment systems.',
    icon: Cloud,
  },
  {
    id: 6,
    title: 'Software Maintenance',
    description: 'Provide continuous support, bug fixes, and feature enhancements to ensure your software stays ahead.',
    icon: Settings,
  },
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'CTO & Lead Architect',
    bio: 'Software architect with 15+ years of experience in building distributed systems and enterprise software.',
  },
  {
    name: 'Sarah Chen',
    role: 'Senior Full-stack Developer',
    bio: 'Expert in modern web technologies, specializing in React, Node.js, and cloud-native development.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Product Design',
    bio: 'Dedicated to creating intuitive and functional user experiences for complex software products.',
  },
];

const testimonials = [
  {
    author: 'John Smith',
    company: 'Tech Startup Inc.',
    text: 'Glintara Digital transformed our brand completely. Their work exceeded all expectations.',
    rating: 5,
  },
  {
    author: 'Emily Davis',
    company: 'E-commerce Solutions',
    text: 'Professional, creative, and results-driven. Best investment for our digital presence.',
    rating: 5,
  },
  {
    author: 'Michael Brown',
    company: 'Fashion Brand Co.',
    text: 'Their strategic approach and attention to detail made all the difference for our campaign.',
    rating: 5,
  },
];

const blogPosts = [
  {
    id: 1,
    title: 'The Rise of Edge Computing',
    date: 'March 15, 2024',
    category: 'Technology',
    excerpt: 'Understanding how edge computing is revolutionizing real-time data processing and latency.',
  },
  {
    id: 2,
    title: 'Modernizing Legacy Systems',
    date: 'March 10, 2024',
    category: 'Development',
    excerpt: 'Strategic approach to migrating monolithic applications to microservices architecture.',
  },
  {
    id: 3,
    title: 'Scalable Database Architecture',
    date: 'March 5, 2024',
    category: 'Engineering',
    excerpt: 'Best practices for designing database schemas that scale with your growing application.',
  },
];

const caseStudies = [
  {
    id: 1,
    title: 'Enterprise ERP Modernization',
    client: 'Global Logistics Corp',
    result: '60% reduction in processing time',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Digital Banking Transformation',
    client: 'NextGen Fintech',
    result: 'Zero downtime during 500% traffic surge',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
  },
];

export default function Home() {
  const [activeNav, setActiveNav] = useState('portfolio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    // Intersection Observer untuk auto-active menu saat scroll
    const sections = ['portfolio', 'case-studies', 'services', 'about', 'blog', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const navLabel = sectionId
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          setActiveNav(navLabel.toLowerCase());
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex w-56 border-r border-gray-800 p-8 flex-col fixed h-screen overflow-auto">
        <div className="flex items-center gap-3 mb-12">
          <Image
            src="/assets/images/logo.png"
            alt="Glintara Digital Logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10"
          />
          <div>
            <p className="text-sm font-semibold leading-tight">Glintara</p>
            <p className="text-xs text-gray-400">Digital</p>
          </div>
        </div>

        <nav className="flex flex-col gap-6 mb-auto">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveNav(item.label.toLowerCase())}
              className={`text-sm tracking-wide transition-colors ${
                activeNav === item.label.toLowerCase()
                  ? 'text-white font-medium'
                  : 'text-gray-400 hover:text-white '
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="text-xs text-gray-400 space-y-4">
          <p>
            Premier software development agency specializing in building complex web, mobile, and desktop solutions.
          </p>
          <p>© 2024 Glintara Digital. All rights reserved.</p>
        </div>
      </aside>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/50" onClick={() => setMobileMenuOpen(false)} />
      )}

      <aside className={`fixed left-0 top-0 h-screen w-56 bg-black border-r border-gray-800 p-8 flex flex-col z-50 lg:hidden transform transition-transform ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/logo.png"
              alt="Glintara Digital Logo"
              width={40}
              height={40}
              priority
              className="h-10 w-10"
            />
            <div>
              <p className="text-sm font-semibold leading-tight">Glintara</p>
              <p className="text-xs text-gray-400">Digital</p>
            </div>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="lg:hidden">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 mb-auto">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveNav(item.label.toLowerCase());
                handleNavClick();
              }}
              className={`text-sm tracking-wide transition-colors ${
                activeNav === item.label.toLowerCase()
                  ? 'text-white font-medium'
                  : 'text-gray-400 hover:text-white '
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="text-xs text-gray-400 space-y-4">
          <p>
            Premier software development agency specializing in building complex web, mobile, and desktop solutions.
          </p>
          <p>© 2024 Glintara Digital. All rights reserved.</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-56 overflow-auto w-full">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/logo.png"
              alt="Glintara Digital Logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8"
            />
            <div>
              <p className="text-sm font-semibold leading-tight">Glintara</p>
              <p className="text-[10px] text-gray-400">Digital</p>
            </div>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            <Menu size={24} />
          </button>
        </div>
        {/* Portfolio Section */}
        <section id="portfolio" className="p-6 lg:p-12 border-b border-gray-800">
          <h2 className="text-xs lg:text-sm tracking-widest uppercase mb-8 lg:mb-12 text-gray-400">
            Selected Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {portfolioItems.map((item) => (
              <Link key={item.id} href={`/projects/${item.slug}`}>
                <div className="group cursor-pointer overflow-hidden">
                  <div className="relative h-64 lg:h-96 overflow-hidden bg-gray-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-2 lg:mt-4">
                    <p className="text-xs tracking-widest uppercase text-gray-400 mb-1 lg:mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-base lg:text-lg font-light tracking-tight">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="p-6 lg:p-12 border-b border-gray-800">
          <h2 className="text-xs lg:text-sm tracking-widest uppercase mb-8 lg:mb-12 text-gray-400">
            Case Studies
          </h2>
          <div className="space-y-8 lg:space-y-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-center">
                <div className="relative h-48 lg:h-64 overflow-hidden bg-gray-800">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2 lg:mb-3">
                    {study.client}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-light tracking-tight mb-3 lg:mb-4">{study.title}</h3>
                  <p className="text-base lg:text-lg font-semibold text-gray-100 mb-4 lg:mb-6">
                    {study.result}
                  </p>
                  <button className="inline-flex items-center gap-2 text-xs lg:text-sm font-medium hover:gap-3 transition-all">
                    Read Full Case Study <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="p-6 lg:p-12 border-b border-gray-800">
          <h2 className="text-xs lg:text-sm tracking-widest uppercase mb-8 lg:mb-12 text-gray-400">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="p-4 lg:p-6 border border-gray-800 hover:border-gray-600 transition-colors">
                  <IconComponent size={28} className="mb-3 lg:mb-4 text-white" />
                  <h3 className="text-base lg:text-lg font-medium mb-2 lg:mb-3">{service.title}</h3>
                  <p className="text-xs lg:text-sm text-gray-400">{service.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="p-6 lg:p-12 border-b border-gray-800">
          <h2 className="text-xs lg:text-sm tracking-widest uppercase mb-8 lg:mb-12 text-gray-400">
            About Us
          </h2>
          <div className="mb-8 lg:mb-12">
            <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-6">
              Engineering Excellence for the Digital Age.
            </h3>
            <p className="text-sm lg:text-lg text-gray-400 mb-3 lg:mb-4">
              Glintara Digital is a high-end software development agency specializing in building complex web, mobile, and desktop applications. We combine deep technical expertise with strategic product thinking to deliver robust solutions that scale.
            </p>
            <p className="text-sm lg:text-lg text-gray-400">
              Our engineering team focuses on modern architectural patterns, clean code, and performance-first development, ensuring that your digital products are not just functional, but future-proof.
            </p>
          </div>

          <div>
            <h4 className="text-xs lg:text-sm tracking-widest uppercase mb-6 lg:mb-8 text-gray-400">
              Our Team
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-24 lg:w-32 h-24 lg:h-32 rounded-full bg-gray-700 mx-auto mb-3 lg:mb-4"></div>
                  <h5 className="text-base lg:text-lg font-medium">{member.name}</h5>
                  <p className="text-xs lg:text-sm text-gray-400 mb-2 lg:mb-3">{member.role}</p>
                  <p className="text-xs lg:text-sm text-gray-400 line-clamp-3">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="p-6 lg:p-12 border-b border-gray-800">
          <h2 className="text-xs lg:text-sm tracking-widest uppercase mb-8 lg:mb-12 text-gray-400">
            What Clients Say
          </h2>
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-4 lg:gap-8 min-w-max">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-96 flex-shrink-0 p-4 lg:p-6 border border-gray-800">

                  <p className="text-xs lg:text-sm text-gray-400 mb-3 lg:mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-sm lg:text-base font-medium">{testimonial.author}</p>
                  <p className="text-xs lg:text-sm text-gray-400">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="p-6 lg:p-12 border-b border-gray-800">
          <h2 className="text-xs lg:text-sm tracking-widest uppercase mb-8 lg:mb-12 text-gray-400">
            Latest Articles
          </h2>
          <div className="space-y-6 lg:space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="pb-6 lg:pb-8 border-b border-gray-800 last:border-0">
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
                  {post.category} • {post.date}
                </p>
                <h3 className="text-xl lg:text-2xl font-light tracking-tight mb-2 lg:mb-3 hover:text-gray-300 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-400">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="p-6 lg:p-12">
          <h2 className="text-xs lg:text-sm tracking-widest uppercase mb-8 lg:mb-12 text-gray-400">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-6 lg:mb-8">
                  Let's work together on your next project.
                </h3>
              </div>
              <div className="space-y-4 lg:space-y-6">
                <div className="flex gap-3 lg:gap-4">
                  <Mail size={18} className="text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm lg:text-base font-medium">Email</p>
                    <a href="mailto:hello@glintaradigital.com" className="text-xs lg:text-sm text-gray-400 hover:text-white  break-all">
                      hello@glintaradigital.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 lg:gap-4">
                  <Phone size={18} className="text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm lg:text-base font-medium">Phone</p>
                    <a href="tel:+62812345678" className="text-xs lg:text-sm text-gray-400 hover:text-white ">
                      +62 812 345 678
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 lg:gap-4">
                  <MapPin size={18} className="text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm lg:text-base font-medium">Location</p>
                    <p className="text-xs lg:text-sm text-gray-400">Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 lg:space-y-6">
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-700 border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-700 border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs lg:text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-700 border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base bg-white text-black font-medium hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
