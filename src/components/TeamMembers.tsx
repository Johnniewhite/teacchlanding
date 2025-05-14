import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';


// Add this with your other data constants at the top of the file
const teamMembers = [
    {
        name: 'Erioluwa Adeyinka',
        role: 'Founder & CEO',
        bio: 'Visionary leader driving TEACCH\'s mission to transform African social innovation through creative intellectual development.',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D',
    },
    {
        name: 'John Doe',
        role: 'Director of Programs',
        bio: 'Experienced program manager with a passion for developing initiatives that empower young African innovators.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D',
    },
    {
        name: 'Jane Smith',
        role: 'Head of Operations',
        bio: 'Operations specialist ensuring TEACCH\'s initiatives run smoothly and efficiently across all locations.',
        image: 'https://images.unsplash.com/photo-1611432579699-484f7990b127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D',
    },
    {
        name: 'Michael Johnson',
        role: 'Tech Lead',
        bio: 'Technology expert guiding our digital transformation and incubator tech initiatives.',
        image: 'https://media.istockphoto.com/id/2182227440/photo/portrait-of-smiling-man-against-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q4F6nHGs9DhsDLMwL9CHmIp1VSA2GwYg9nzJg0jOfH0=',
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
                        The passionate individuals driving TEACcH's mission forward with expertise and dedication.
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