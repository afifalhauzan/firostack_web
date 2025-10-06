import Img from "next/image";

export default function Description() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center bg-linear-290 from-[#2E1266] to-[#080D1C] text-white">
            <div className="container flex flex-col md:flex-row items-center justify-around gap-12 px-4 py-16">
                <div className="max-w-4xl text-left w-full md:w-1/2 space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Punya Ide Brilian?
                        </h2>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Jangan Biarkan Biaya Menghalangimu
                        </h2>
                    </div>
                    <div className="space-y-4">
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                            Firostack ngerti banget bahwa banyak gagasan hebat yang lahir dari <strong>bangku kuliah dan para perintis</strong> , tapi seringkali harus terkubur karena biaya pengembangan teknologi yang selangit. Kami hadir buat mendobrak batasan itu. Firostack adalah partner strategis kamu untuk mengubah ide jadi kenyataan. Mulai dari aplikasi mobile, personal website, hingga software berbasis AI, kami siap buat bantu wujudin.
                        </p>
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                            Dengan tagline <strong>#BuatTeknologiDiBawahSatuJuta</strong>, kami bukan hanya menawarkan jasa, kami juga menawarkan kesempatan. Kesempatan buat setiap mahasiswa dan perintis untuk bersaing dan menang. Gasss wujudkan ide kamu bareng kami!
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative flex items-center justify-center h-96">
                    {/* Background floating squares */}
                    <Img 
                        src="/square_1.svg" 
                        alt="Floating square" 
                        width={80} 
                        height={80} 
                        className="absolute top-10 left-10 animate-float-slow opacity-60" 
                    />
                    <Img 
                        src="/square_1.svg" 
                        alt="Floating square" 
                        width={60} 
                        height={60} 
                        className="absolute bottom-16 left-16 animate-float-delay opacity-50" 
                    />
                    
                    {/* Main laptop - centered */}
                    <Img 
                        src="/laptop.svg" 
                        alt="Hero Illustration" 
                        width={400} 
                        height={300} 
                        className="relative z-10 w-80 h-80 md:w-96 md:h-96" 
                    />
                    
                    {/* Foreground floating squares */}
                    <Img 
                        src="/square_1.svg" 
                        alt="Floating square" 
                        width={70} 
                        height={70} 
                        className="absolute top-20 right-8 animate-float opacity-70 z-20" 
                    />
                    <Img 
                        src="/square_1.svg" 
                        alt="Floating square" 
                        width={50} 
                        height={50} 
                        className="absolute bottom-12 right-20 animate-float-reverse opacity-60 z-20" 
                    />
                </div>
            </div>
        </section>
    );
}