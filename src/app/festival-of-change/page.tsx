'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaLightbulb, FaHandshake, FaGlobe, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Create a client-side only wrapper component
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

interface GalleryImage {
  url: string;
  title: string;
  description?: string;
}

export default function FestivalOfChangePage() {
  const [isClient, setIsClient] = useState(false);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [page, setPage] = useState(1);
  const imagesPerPage = 12;

  useEffect(() => {
    setIsClient(true);
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('https://teacch-images.vercel.app/images');
      const data = await response.json();
      
      if (data && data.images && Array.isArray(data.images)) {
        setImages(data.images.map((url: string) => ({
          url,
          title: 'Festival of Change 2024',
          description: 'Moments from FOC 2024'
        })));
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <ClientOnly>
      <main className="flex min-h-screen flex-col">
        {/* Hero Section with Image Background */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Image Background */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-500/90 via-dark-500/85 to-dark-500/90 z-10"></div>
            {isClient && images.length > 0 && (
              <Image
                src={images[0].url}
                alt="Festival of Change Hero"
                fill
                className="object-cover"
                priority
              />
            )}
          </div>

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4">
                June 12, 2025 | Lagos, Nigeria
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-tight">
                Festival of Change
                <span className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                  2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Join Africa&apos;s largest gathering of education innovators, thought leaders, and change-makers as we reimagine the future of education.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#register"
                  className="px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300 text-lg w-full sm:w-auto"
                >
                  Register Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://festivalofchange.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-xl hover:bg-white/20 transition-all duration-300 text-lg w-full sm:w-auto border border-white/20"
                >
                  Visit FOC Website
                </motion.a>
              </div>
            </motion.div>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                <FaCalendarAlt className="text-teacch-orange text-2xl" />
                <span className="text-white">June 12, 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                <FaMapMarkerAlt className="text-teacch-orange text-2xl" />
                <span className="text-white">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                <FaUsers className="text-teacch-orange text-2xl" />
                <span className="text-white">1000+ Attendees</span>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          {isClient && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-white"
                />
              </motion.div>
            </motion.div>
          )}
        </section>

        {/* Impact Section */}
        <section className="w-full py-32 bg-white dark:bg-dark-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4">
                Our Impact
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                Transforming Education
                <span className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                  One Story at a Time
                </span>
              </h2>
              <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
                The Festival of Change has become a catalyst for educational transformation in Nigeria, bringing together stakeholders to address critical challenges and implement innovative solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: '1000+',
                  label: 'Attendees',
                  description: 'Education leaders, innovators, and stakeholders from across Africa',
                },
                {
                  number: '50+',
                  label: 'Speakers',
                  description: 'Industry experts sharing insights and best practices',
                },
                {
                  number: '20+',
                  label: 'Countries',
                  description: 'Global representation and diverse perspectives',
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center space-y-4"
                >
                  <div className="text-4xl md:text-6xl font-bold text-teacch-orange">
                    {stat.number}
                  </div>
                  <div className="text-xl font-bold text-dark-600 dark:text-white">
                    {stat.label}
                  </div>
                  <p className="text-dark-400 dark:text-gray-400">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOC 2024 Highlights */}
        <section className="w-full py-32 bg-light-100 dark:bg-dark-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4">
                FOC 2024 Highlights
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                A Landmark Event for
                <span className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                  Educational Innovation
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px] rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://res.cloudinary.com/dii1mpzje/image/upload/v1727386016/foc/lagossstech_47of458.jpg"
                  alt="Festival of Change 2024"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="text-lg text-dark-400 dark:text-gray-400">
                  The 2024 Festival of Change brought together experts who charted paths to reviving Nigeria&apos;s education sector. Key discussions centered around innovative approaches to address challenges in the educational system, including:
                </p>
                <ul className="space-y-4">
                  {[
                    'Integration of technology in education',
                    'Curriculum development and implementation',
                    'Teacher training and development',
                    'Infrastructure and funding solutions',
                    'Public-private partnerships in education',
                  ].map((point, index) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-dark-400 dark:text-gray-400"
                    >
                      <FaLightbulb className="text-teacch-orange flex-shrink-0" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="w-full py-32 bg-white dark:bg-dark-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4">
                Gallery
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                FOC 2024
                <span className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                  Memorable Moments
                </span>
              </h2>
              <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
                Relive the inspiring moments from Festival of Change 2024 through our curated gallery.
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-teacch-orange"></div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.slice(0, page * imagesPerPage).map((image, index) => (
                    <motion.div
                      key={image.url}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index % 12 * 0.1 }}
                      className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image.url}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 via-dark-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white text-sm font-medium truncate">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {page * imagesPerPage < images.length && (
                  <div className="mt-12 text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={loadMore}
                      className="px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300"
                    >
                      Load More
                    </motion.button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-teacch-orange transition-colors duration-300 z-10"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <div className="relative w-full h-full max-h-[80vh]">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* FOC 2025 Preview */}
        <section className="w-full py-32 bg-white dark:bg-dark-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4">
                Coming Soon
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                FOC 2025:
                <span className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                  The Future of Education
                </span>
              </h2>
              <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
                Join us for an even bigger and more impactful Festival of Change in 2025, featuring:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaUsers,
                  title: 'Global Speakers',
                  description: 'Learn from world-renowned education experts and innovators',
                },
                {
                  icon: FaHandshake,
                  title: 'Networking',
                  description: 'Connect with education leaders and potential collaborators',
                },
                {
                  icon: FaGlobe,
                  title: 'Innovation Showcase',
                  description: 'Experience cutting-edge educational technologies and methodologies',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-light-100 dark:bg-dark-600 p-8 rounded-2xl text-center"
                >
                  <feature.icon className="w-12 h-12 text-teacch-orange mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-dark-600 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-dark-400 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="register" className="w-full py-32 bg-light-100 dark:bg-dark-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-teacch-green/10 to-teacch-orange/10 rounded-3xl p-12 relative overflow-hidden backdrop-blur-xl border border-white/10">
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                  Be Part of the Change
                </h2>
                <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                  Join us on June 12, 2025, for an unforgettable experience that will shape the future of education in Africa.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://festivalofchange.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300 text-lg w-full sm:w-auto"
                  >
                    Register for FOC 2025
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://festivalofchange.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-xl hover:bg-white/20 transition-all duration-300 text-lg w-full sm:w-auto border border-white/20"
                  >
                    Contact Us
                  </motion.a>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teacch-green/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-teacch-orange/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ClientOnly>
  );
} 