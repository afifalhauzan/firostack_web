"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan project?",
      answer: "Waktu pengerjaan bervariasi tergantung kompleksitas project. Website sederhana 1-2 minggu, aplikasi mobile 3-4 minggu, dan sistem kompleks 1-2 bulan. Kami akan memberikan timeline yang jelas setelah konsultasi awal."
    },
    {
      question: "Apakah ada garansi untuk layanan yang diberikan?",
      answer: "Ya, kami memberikan garansi 3 bulan untuk bug fixing dan maintenance dasar. Selain itu, kami juga menyediakan paket maintenance bulanan untuk update dan pengembangan berkelanjutan."
    },
    {
      question: "Bagaimana sistem pembayaran yang tersedia?",
      answer: "Kami menerima pembayaran melalui transfer bank, e-wallet (GoPay, OVO, DANA), dan virtual account. Pembayaran dapat dilakukan secara bertahap sesuai milestone project yang telah disepakati."
    },
    {
      question: "Apakah bisa request custom feature?",
      answer: "Tentu saja! Kami mengutamakan kebutuhan spesifik klien. Semua feature dapat disesuaikan dengan requirement bisnis Anda. Tim kami akan membantu merancang solusi yang paling optimal."
    },
    {
      question: "Apakah source code diberikan setelah project selesai?",
      answer: "Ya, semua source code akan diserahkan kepada klien setelah pembayaran lunas. Kami juga akan memberikan dokumentasi teknis dan panduan maintenance untuk memudahkan pengembangan selanjutnya."
    },
    {
      question: "Bagaimana jika ada perubahan requirement di tengah project?",
      answer: "Perubahan kecil masih bisa diakomodasi tanpa biaya tambahan. Untuk perubahan besar, kami akan berdiskusi untuk menyesuaikan timeline dan budget sesuai scope yang baru."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Pertanyaan yang sering diajukan seputar layanan FIROSTACK
          </p>
        </div>

        <div className="max-w-4xl w-full space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 hover:bg-slate-800/70 transition-colors duration-200 flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-slate-600 pt-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-300">
            Masih ada pertanyaan lain?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}