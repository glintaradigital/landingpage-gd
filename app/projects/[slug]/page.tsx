'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projectsData: Record<string, any> = {
  'brand-identity': {
    id: 1,
    title: 'Brand Identity',
    category: 'Branding',
    client: 'Fashion Retail Company',
    year: '2024',
    description:
      'Complete brand identity overhaul for a luxury fashion retailer. We developed a comprehensive visual language, including logo redesign, color palette, typography guidelines, and brand assets.',
    challenge:
      'The client needed to modernize their brand while maintaining recognition among their loyal customer base. The challenge was to create a fresh, contemporary identity without alienating existing customers.',
    solution:
      'We conducted extensive market research and competitor analysis. The new identity maintains key elements of their heritage while introducing modern design principles. The result is a versatile system that works across all touchpoints.',
    results: [
      'Brand recognition increased by 35%',
      '48% improvement in social media engagement',
      'Successfully implemented across all business units',
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    ],
  },
  'digital-campaign': {
    id: 2,
    title: 'Digital Campaign',
    category: 'Marketing',
    client: 'Tech Startup',
    year: '2024',
    description:
      'Multi-channel digital campaign for a tech startup launching their innovative product. Campaign included social media, email marketing, content creation, and paid advertising.',
    challenge:
      'Limited budget and tight timeline to launch before competitor products. Need to create buzz and drive early adopter interest.',
    solution:
      'Created a guerrilla marketing approach with viral-worthy content. Used influencer partnerships and organic social media amplification to maximize reach without huge ad spend.',
    results: [
      '500K impressions in first week',
      '12% conversion rate on landing page',
      '2M in generated revenue',
    ],
    image: 'https://images.unsplash.com/photo-1559163853-98c7f14dc1c0?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1559163853-98c7f14dc1c0?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1559163853-98c7f14dc1c0?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1559163853-98c7f14dc1c0?w=600&h=400&fit=crop',
    ],
  },
  'web-design': {
    id: 3,
    title: 'Web Design',
    category: 'Design',
    client: 'E-commerce Platform',
    year: '2023',
    description:
      'Complete website redesign for an e-commerce platform focusing on user experience and conversion optimization. Implemented modern design principles and improved site performance.',
    challenge:
      'High bounce rate and low conversion rates. Existing design was outdated and not mobile-friendly.',
    solution:
      'Conducted user testing and analytics review. Redesigned with mobile-first approach, improved navigation, and streamlined checkout process.',
    results: [
      '45% increase in conversion rate',
      '60% improvement in mobile traffic',
      'Page load time reduced by 50%',
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    ],
  },
  'mobile-app': {
    id: 4,
    title: 'Mobile App',
    category: 'Development',
    client: 'Fintech Startup',
    year: '2023',
    description:
      'Native iOS and Android app development for a fintech startup. The app provides seamless payment processing, account management, and financial insights to users.',
    challenge:
      'Building a secure, user-friendly app that meets regulatory requirements while delivering excellent performance on both platforms.',
    solution:
      'Implemented robust backend infrastructure with encryption, created intuitive UI/UX, and conducted extensive security audits. Used native development for optimal performance.',
    results: [
      '100K downloads in first month',
      '4.8 star rating on app stores',
      '95% user retention rate',
    ],
    image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&h=400&fit=crop',
    ],
  },
  'social-media': {
    id: 5,
    title: 'Social Media',
    category: 'Content',
    client: 'Lifestyle Brand',
    year: '2023',
    description:
      'Comprehensive social media strategy and content creation for a lifestyle brand. Managed Instagram, TikTok, and YouTube channels with consistent, engaging content.',
    challenge:
      'Low engagement rates and inconsistent posting schedule. Need to build authentic community and increase follower growth.',
    solution:
      'Developed content calendar with mix of educational, entertaining, and promotional content. Engaged with community regularly and collaborated with micro-influencers.',
    results: [
      '300% follower growth in 6 months',
      '25% average engagement rate',
      'Secured brand partnerships worth 500K',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    ],
  },
  'video-production': {
    id: 6,
    title: 'Video Production',
    category: 'Media',
    client: 'Corporate Firm',
    year: '2023',
    description:
      'Professional video production for corporate marketing and training. Created product demo videos, testimonial videos, and internal training materials.',
    challenge:
      'Need to convey complex product features in an engaging, easy-to-understand format within a limited budget.',
    solution:
      'Used creative storytelling, motion graphics, and professional cinematography. Edited multiple versions for different platforms and audiences.',
    results: [
      '500K views on YouTube',
      '40% reduction in support tickets',
      '2.5M earned media value',
    ],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop',
    ],
  },
};

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsData[slug];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-light tracking-tight mb-6">Project not found</h1>
          <Link
            href="/#portfolio"
            className="inline-block px-6 py-3 bg-black text-white font-medium hover:bg-gray-800  transition-colors"
          >
            Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 px-6 lg:px-16 py-8 lg:py-12">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium mb-6 text-gray-400 hover:text-black dark:hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <h1 className="text-3xl lg:text-5xl font-light tracking-tight mb-6">{project.title}</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
              Category
            </p>
            <p className="font-medium">{project.category}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
              Client
            </p>
            <p className="font-medium">{project.client}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
              Year
            </p>
            <p className="font-medium">{project.year}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {/* Hero Image with Navigation */}
        <div className="relative bg-gray-800 aspect-video overflow-hidden">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white hover:bg-black/70 rounded-full transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white hover:bg-black/70 rounded-full transition-colors"
              >
                <ArrowRight size={20} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        {/* Project Details */}
        <div className="px-6 lg:px-16 py-8 lg:py-12 max-w-6xl mx-auto">
          {/* Overview */}
          <section className="mb-12 border-b border-gray-800 pb-12">
            <h2 className="text-2xl font-light tracking-tight mb-6">Overview</h2>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Challenge */}
          <section className="mb-12 border-b border-gray-800 pb-12">
            <h2 className="text-2xl font-light tracking-tight mb-6">Challenge</h2>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              {project.challenge}
            </p>
          </section>

          {/* Solution */}
          <section className="mb-12 border-b border-gray-800 pb-12">
            <h2 className="text-2xl font-light tracking-tight mb-6">Solution</h2>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-2xl font-light tracking-tight mb-6">Results</h2>
            <ul className="space-y-4">
              {project.results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-base lg:text-lg text-gray-300"
                >
                  <span className="text-2xl font-light text-white mt-1">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-gray-800">
            <h3 className="text-2xl font-light tracking-tight mb-6">Ready to start your project?</h3>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 bg-black text-white font-medium hover:bg-gray-800  transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
