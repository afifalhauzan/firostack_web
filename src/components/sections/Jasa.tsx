"use client";

import { motion } from "motion/react";
import { slideUpVariants, cardVariants } from "@/lib/motionVariants";

export default function Jasa() {
  const services = [
    {
      icon: "🌐",
      title: "Mobile App Development",
      description: "Pengembangan aplikasi Android dan iOS.",
      originalPrice: "Rp. 1.500.000",
      discountPrice: "Rp. 950.000"
    },
    {
      icon: "📱",
      title: "Web Development", 
      description: "Pembuatan website, e-commerce, dan sistem informasi",
      originalPrice: "Rp. 2.000.000",
      discountPrice: "Rp. 1.200.000"
    },
    {
      icon: "🛒",
      title: "Artificial Intelligence",
      description: "Pembuatan AI citra, suara.",
      originalPrice: "Rp. 1.800.000",
      discountPrice: "Rp. 1.100.000"
    },
    {
      icon: "⚙️",
      title: "Hardware & IoT",
      description: "Solusi perangkat keras dan Internet of Things.",
      originalPrice: "Rp. 2.500.000",
      discountPrice: "Rp. 1.500.000"
    },
    {
      icon: "⚙️",
      title: "Network & CCTV Installation",
      description: "Instalasi jaringan dan sistem keamanan CCTV.",
      originalPrice: "Rp. 2.500.000",
      discountPrice: "Rp. 1.500.000"
    },
    {
      icon: "⚙️",
      title: "Custom Software",
      description: "Pengembangan perangkat lunak sesuai kebutuhan spesifik.",
      originalPrice: "Rp. 2.500.000",
      discountPrice: "Rp. 1.500.000"
    }
  ];

  return (
    <section id="jasa" className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 mt-4">
        <motion.div 
          className="text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUpVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Jasa Kami
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {services.map((service, index) => {
            const whatsappMessage = `Halo%20FIROSTACK,%20saya%20tertarik%20dengan%20layanan%20teknologi%20${encodeURIComponent(service.title)}%20Anda.`;
            const whatsappUrl = `https://wa.me/6285971883066?text=${whatsappMessage}`;
            
            return (
              <motion.div 
                key={index} 
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <div className="h-min-5 md:h-full bg-gradient-to-br from-[#080D1C] to-[#18043F] rounded-3xl p-8 text-center border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:transform hover:scale-103 flex flex-col justify-between cursor-pointer group-hover:shadow-lg group-hover:shadow-purple-500/20">
                    
                    {/* Content Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-purple-200 transition-colors duration-200">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-200">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Pricing Section - Always at bottom */}
                    <div className="space-y-2 border-2 rounded-3xl border-[#262968] group-hover:border-indigo-700/30 p-2 mt-8 transition-colors duration-300">
                      <div className="text-center">
                        <span className="text-lg font-semibold text-white block mb-2 group-hover:text-purple-200 transition-colors duration-200">
                          Mulai dari
                        </span>
                        
                        {/* Original Price (Strikethrough) */}
                        <div className="text-gray-500 text-md line-through">
                          {service.originalPrice}
                        </div>
                        
                        {/* Discount Price */}
                        <div className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-[#F9F9FF] to-[#7E79FF] bg-clip-text text-transparent transition-colors duration-200 group-hover:from-purple-200 group-hover:to-purple-400">
                          {service.discountPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}