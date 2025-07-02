"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';




const About = () => {
  const skills = [
    { name: 'Next.js', level: 98 },
    { name: 'React', level: 75 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'GraphQL', level: 70 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/3 mb-10 md:mb-0"
          >
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-indigo-500">
              <img 
                src="p.jpg"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-2/3 md:pl-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who am I?</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate web developer with 5+ years of experience creating modern, responsive, and user-friendly websites and applications. 
              I specialize in JavaScript technologies including React, Next.js, and Node.js.
            </p>
            <p className="text-gray-600 mb-8">
              My approach combines technical expertise with creative problem-solving to deliver high-quality solutions that meet client needs. 
              I'm dedicated to continuous learning and staying up-to-date with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;