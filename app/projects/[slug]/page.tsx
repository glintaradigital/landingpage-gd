'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  images: string[];
}

const projectsData: Record<string, Project> = {
  'saas-dashboard': {
    id: 1,
    title: 'SaaS Analytics Dashboard',
    category: 'Web App',
    client: 'DataFlow Systems',
    year: '2024',
    description:
      'A comprehensive business intelligence platform that provides real-time data visualization and predictive analytics for enterprise clients.',
    challenge:
      'The client needed to process millions of data points per second and present them in an intuitive, responsive dashboard without latency issues.',
    solution:
      'We implemented a robust data pipeline using WebSocket for real-time updates and optimized React components with heavy memoization. The backend was built on a distributed microservices architecture.',
    results: [
      'Real-time data latency reduced by 80%',
      'Handled 5x increase in concurrent users',
      'Improved decision-making speed for clients by 40%',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e90526354a?w=600&h=400&fit=crop',
    ],
  },
  'fintech-wallet': {
    id: 2,
    title: 'Fintech Mobile Wallet',
    category: 'Mobile App',
    client: 'NextGen Payments',
    year: '2024',
    description:
      'A secure, user-friendly mobile wallet application supporting multi-currency transactions, instant peer-to-peer transfers, and crypto integration.',
    challenge:
      'Ensuring top-tier security and regulatory compliance while maintaining a friction-less user experience for non-technical users.',
    solution:
      'We used biometric authentication, multi-signature transaction approval, and a highly secure hardware security module (HSM) integration. The UI was designed for simplicity and speed.',
    results: [
      'Zero security breaches since launch',
      'App store rating of 4.9/5.0',
      'Processed over $100M in transactions in the first quarter',
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop',
    ],
  },
  'inventory-system': {
    id: 3,
    title: 'Inventory Management System',
    category: 'Desktop App',
    client: 'Global Logistics Corp',
    year: '2023',
    description:
      'A cross-platform desktop application for large-scale warehouse management, featuring barcode scanning, automated reordering, and deep ERP integration.',
    challenge:
      'Legacy systems were slow and prone to errors. Warehouse staff needed a high-performance tool that could work offline and sync perfectly when back online.',
    solution:
      'Built with Electron for cross-platform support with a local SQLite database for offline-first capabilities. Implemented a sophisticated conflict resolution algorithm for data syncing.',
    results: [
      'Inventory accuracy improved by 99.9%',
      'Warehouse operational costs reduced by 25%',
      'System uptime maintained at 99.99%',
    ],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop',
    ],
  },
  'healthcare-portal': {
    id: 4,
    title: 'Healthcare Patient Portal',
    category: 'Web App',
    client: 'Unity Health Network',
    year: '2023',
    description:
      'A secure HIPAA-compliant web portal for patients to access medical records, schedule appointments, and communicate with doctors via encrypted messaging.',
    challenge:
      'Managing sensitive health data with strict security protocols while ensuring the portal was accessible for elderly patients.',
    solution:
      'Implemented end-to-end encryption for all messages and data at rest. Conducted accessibility audits to ensure WCAG 2.1 Level AA compliance.',
    results: [
      '40% increase in patient engagement',
      'Appointment no-shows decreased by 30%',
      'Full HIPAA and GDPR compliance verified by external audit',
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1532187875605-1803a63972bc?w=600&h=400&fit=crop',
    ],
  },
  'logistics-app': {
    id: 5,
    title: 'Logistics Tracking App',
    category: 'Mobile App',
    client: 'SwiftDelivery',
    year: '2023',
    description:
      'A real-time delivery tracking application for both drivers and customers, featuring route optimization and automated proof of delivery.',
    challenge:
      'High battery consumption during GPS tracking and inaccurate ETA predictions due to traffic fluctuations.',
    solution:
      'Optimized GPS polling algorithms to save battery and integrated real-time traffic data from multiple APIs for precise ETA calculations.',
    results: [
      '30% reduction in average delivery time',
      'Driver battery life increased by 40%',
      'Customer satisfaction score improved from 3.8 to 4.7',
    ],
    image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1519055376510-746975a6c40e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
    ],
  },
  'ai-assistant': {
    id: 6,
    title: 'AI Code Assistant',
    category: 'Desktop App',
    client: 'CodeLeap Technologies',
    year: '2024',
    description:
      'An intelligent desktop application that assists developers with code generation, bug fixing, and documentation using localized LLM models.',
    challenge:
      'Providing powerful AI capabilities without requiring high-end GPU hardware or constant internet connection.',
    solution:
      'Implemented quantized local models optimized for CPU performance and built a fast, native-feeling UI with Rust and Tauri.',
    results: [
      'Developer productivity increased by 50%',
      'Runs efficiently on standard laptop hardware',
      'Ensures data privacy by keeping code local',
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
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
          className="inline-flex items-center gap-2 text-sm font-medium mb-6 text-gray-400 hover:text-white"
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
              {project.results.map((result: string, index: number) => (
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
