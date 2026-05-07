import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';

const teamMembers = [
    {
        name: 'Erioluwa Adeyinka',
        role: 'Founder & CEO',
        bio: 'Visionary leader driving TEACCH\'s mission to transform African social innovation through creative intellectual development.',
        image: "/images/team/erioluwa.jpeg",
    },
    {
        name: 'Doyinsola Owolabi',
        role: 'Head of Operations',
        bio: 'Operations specialist ensuring TEACCH\'s initiatives run smoothly and efficiently across all locations.',
        image: '/images/team/doyinsola.jpg',
    },
    {
        name: 'Joshua Ayotope',
        role: 'CTO and Tech Team Lead',
        bio: 'Joshua Ayotope is a Tech Team Lead and CTO with expertise in mobile and web development, as well as cybersecurity. He specializes in building scalable applications using modern technologies.',
        image: '/images/team/Joshua Ayotope.jpg',
    },
    {
        name: 'Tobiloba Lasabi',
        role: 'Branding and Marketing Team Lead',
        bio: 'Tobiloba Lasabi is a Branding and Marketing Team Lead with expertise in digital marketing and communications. She specializes in building strong brand identities and executing effective marketing strategies.',
        image: '/images/team/Tobiloba Lasabi.jpg',
    }
];

const TeamMembers = () => {
    return (
        <section className="relative w-full py-32 bg-light-100 dark:bg-dark-600 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-teacch-orange/5 dark:bg-teacch-orange/10 blur-[120px]" />
                <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-teacch-green/5 dark:bg-teacch-green/10 blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-teacch-orange/10 text-sm md:text-base font-semibold text-teacch-orange uppercase tracking-wider mb-6"
                    >
                        Our Core Team
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold font-display mb-6 text-dark-600 dark:text-white"
                    >
                        Meet The
                        <span className="block text-transparent bg-clip-text bg-linear-to-r from-teacch-green via-teacch-orange to-teacch-green mt-2 pb-2">
                            Visionaries
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        The passionate individuals driving TEACcH&apos;s mission forward with expertise, creativity, and dedication.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative h-[450px] md:h-[500px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
                        >
                            {/* Base Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                            </div>

                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-linear-to-t from-dark-600/95 via-dark-600/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-linear-to-t from-teacch-green/95 via-dark-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Glassmorphism Border */}
                            <div className="absolute inset-0 rounded-3xl border border-white/10 dark:border-white/5 pointer-events-none" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                                <div className="relative z-10 transform transition-transform duration-500 ease-out group-hover:-translate-y-4">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-teacch-orange font-medium mb-4 group-hover:text-white transition-colors duration-300">
                                        {member.role}
                                    </p>
                                </div>

                                {/* Expanding Bio */}
                                <div className="relative z-10 grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                                    <div className="overflow-hidden">
                                        <div className="w-8 h-1 bg-teacch-orange mb-4 rounded-full mt-2" />
                                        <p className="text-gray-200 text-sm leading-relaxed pb-2">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamMembers