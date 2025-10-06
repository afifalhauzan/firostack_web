export default function Description() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tentang FIROSTACK
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            FIROSTACK adalah solusi teknologi terdepan yang menghadirkan inovasi digital berkualitas tinggi 
            dengan harga terjangkau. Kami berkomitmen untuk membuat teknologi dapat diakses oleh semua kalangan, 
            terutama UMKM dan startup yang membutuhkan solusi digital profesional.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold">Inovasi</h3>
              <p className="text-gray-300">
                Solusi teknologi terdepan yang mengikuti perkembangan zaman
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold">Terjangkau</h3>
              <p className="text-gray-300">
                Harga yang bersahabat tanpa mengurangi kualitas layanan
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold">Profesional</h3>
              <p className="text-gray-300">
                Tim berpengalaman dengan standar industri terbaik
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}