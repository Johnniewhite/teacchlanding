import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';


// Add this with your other data constants at the top of the file
const teamMembers = [
    {
        name: 'Erioluwa Adeyinka',
        role: 'Founder & CEO',
        bio: 'Visionary leader driving TEACCH\'s mission to transform African social innovation through creative intellectual development.',
        image: "https://cdn.prod.website-files.com/61cdad1a8cdf722279528e87/669f888cbbf57b8ae7b15481_1697071968551.jpeg",
    },
    {
        name: 'Doyinsola Owolabi',
        role: 'Head of Operations',
        bio: 'Operations specialist ensuring TEACCH\'s initiatives run smoothly and efficiently across all locations.',
        image: 'https://res.cloudinary.com/dm8jh1n7a/image/upload/v1748253052/Doyinsola_Owolabi_i09rc0.jpg',
    },
    {
        name: 'Temisan Joshua',
        role: 'CTO and Tech Team Lead',
        bio: 'Experienced program manager with a passion for developing initiatives that empower young African innovators.',
        image: 'https://res.cloudinary.com/dm8jh1n7a/image/upload/v1748252665/Joshua_jpzjpi.jpg',
    },
    {
        name: 'Anjola Oluwabada',
        role: 'Branding and Marketing Team Lead',
        bio: 'Technology expert guiding our digital transformation and incubator tech initiatives.',
        image: 'https://res.cloudinary.com/dm8jh1n7a/image/upload/v1748253745/Anjola_i73i68.jpg',
    }
];

const TeamMembers = () => {
    return (

        <section className="w-full py-32 bg-light-100 dark:bg-dark-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4">
                        Our Team
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                        Meet The
                        <span className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                            Visionaries
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
                        The passionate individuals driving TEACcH&apos;s mission forward with expertise and dedication.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group h-[400px] rounded-2xl overflow-hidden"
                        >
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 via-transparent to-transparent" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-end p-6">
                                <div className="transform transition-all duration-500 group-hover:-translate-y-10">
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-teacch-orange mb-4">{member.role}</p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    className="absolute bottom-0 left-0 right-0 p-6 bg-dark-600/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                                >
                                    <p className="text-gray-300 mb-4">{member.bio}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamMembers