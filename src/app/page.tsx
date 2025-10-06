import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="max-w-lg text-left md:text-center items-center justify-center space-y-2 md:space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold">Solusi Murah Teknologimu.</h2>
          <div className="flex flex-row items-left justify-start md:justify-center md:items-center">
            <h3 className="mt-4 text-lg md:text-2xl">
              #BuatTeknologi
            </h3>
            <h3 className="mt-4 text-lg md:text-2xl font-bold">
              DiBawahSatuJuta
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
