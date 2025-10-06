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
    <section className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Jasa Kami
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
          {services.map((service, index) => (
            <div key={index} className="relative">
              {/* Card with rounded corners and gradient background */}
              <div className="bg-gradient-to-br from-[#080D1C] to-[#18043F] rounded-3xl p-8 text-center space-y-4 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:transform hover:scale-103">
                
                {/* Service Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
                
                {/* Pricing Section */}
                <div className="space-y-2 border-2 rounded-3xl border-[#262968] p-2 mt-8">
                  <div className="text-center">
                    <span className="text-lg font-semibold text-white block mb-2">
                      Mulai dari
                    </span>
                    
                    {/* Original Price (Strikethrough) */}
                    <div className="text-gray-500 text-md line-through">
                      {service.originalPrice}
                    </div>
                    
                    {/* Discount Price */}
                    <div className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-[#F9F9FF] to-[#7E79FF] bg-clip-text text-transparent transition-colors duration-200">
                      {service.discountPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}