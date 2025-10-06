export default function Jasa() {
  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      description: "Website profesional dan responsif untuk bisnis Anda",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Admin Panel"]
    },
    {
      icon: "📱",
      title: "Mobile App Development", 
      description: "Aplikasi mobile iOS dan Android yang user-friendly",
      features: ["Cross Platform", "Native Performance", "Push Notifications", "App Store Ready"]
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      description: "Toko online lengkap dengan sistem pembayaran terintegrasi",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Customer Dashboard"]
    },
    {
      icon: "⚙️",
      title: "System Integration",
      description: "Integrasi sistem existing dengan teknologi modern",
      features: ["API Integration", "Database Migration", "Cloud Deployment", "Performance Optimization"]
    }
  ];

  return (
    <section className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Layanan Kami
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Solusi teknologi lengkap untuk mengembangkan bisnis Anda ke era digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl w-full">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-gray-300">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-blue-400">Fitur Utama:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-gray-400">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors duration-200 mt-4">
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}