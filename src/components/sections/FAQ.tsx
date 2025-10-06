"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { slideUpVariants, cardVariants } from "@/lib/motionVariants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah client dapat melakukan pembayaran diakhir?",
      answer: "Bisa banget! Tenang aja, kita ngerti kok kebutuhan mahasiswa dan para perintis. Sistemnya simpel: kamu cukup bayar DP 50% di awal, terus sisanya bisa dilunasin setelah project-nya beres."},
    {   
      question: "Apakah FiroStack juga dapat melakukan modifikasi terhadap aplikasi dan website yang sudah ada?",
      answer: "Ya, kami memberikan garansi 3 bulan untuk bug fixing dan maintenance dasar. Selain itu, kami juga menyediakan paket maintenance bulanan untuk update dan pengembangan berkelanjutan."
    },
    {
      question: "Bagaimana cara melakukan pemesanan FiroStack?",
      answer: "Gampang banget caranya! Ada dua cara nih: Lewat Halaman Jasa: Masuk ke bagian \"Jasa Kami\", pilih layanan yang kamu mau, terus klik tombol pesannya. Nanti kamu bakal langsung nyambung ke WhatsApp kita buat ngobrol-ngobrol. Lewat Tombol Kontak: Tinggal klik tombol \"Hubungi Kami\" di web, nanti langsung bisa chat sama tim FiroStack di WhatsApp."
    },
    {
      question: "Bagaimana jika saya ingin bertanya lebih lanjut tentang layanan FiroStack?",
      answer: "Kita seneng banget kalau kamu mau nanya-nanya. Gak usah sungkan, tanya apa aja bebas! Kamu bisa langsung pencet tombol \"Hubungi Kami\" atau kontak kita lewat info yang ada di web. Tim kita siap jawab semua pertanyaanmu, sekalian kita kasih konsul gratis buat ngebahas ide atau project yang pengen kamu bikin."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex min-h-170 flex-col items-center justify-start bg-gradient-to-b from-[#1F2B4B] to-[#080D1C] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 mt-6">
        <motion.div 
          className="text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUpVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-4xl w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 hover:bg-slate-800/70 transition-colors duration-200 flex justify-between items-center"
              >
                <h3 className="text-md lg:text-lg font-semibold pr-4">{faq.question}</h3>
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
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}