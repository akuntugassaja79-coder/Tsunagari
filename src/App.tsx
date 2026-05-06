/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Video, 
  Users, 
  MessageSquare, 
  Share2, 
  CheckCircle, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter, 
  Star,
  Menu,
  X,
  ArrowRight,
  Globe,
  Bell,
  Smartphone
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Paket Layanan", href: "#packages" },
    { name: "Tentang Kami", href: "#about" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-white/80 backdrop-blur-md editorial-border py-4" : "bg-transparent border-transparent py-8"
      }`}
      id="navbar"
    >
      <div className="container mx-auto px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
          </div>
          <span className={`text-2xl font-black tracking-tighter uppercase ${isScrolled ? "text-blue-900" : "text-white"}`}>
            TSUNAGARI
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold tracking-widest uppercase transition-colors hover:text-blue-600 pb-1 border-b-2 border-transparent hover:border-blue-600 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-blue-700 transition-all">
            MULAI SEKARANG
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl py-8 flex flex-col items-center gap-8 md:hidden border-t editorial-border"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-900 font-bold tracking-widest uppercase text-sm hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold w-64 shadow-xl">
              MULAI SEKARANG
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Editorial Blobs */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-blue-400 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-12 grid grid-cols-12 gap-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="col-span-12 lg:col-span-7 flex flex-col justify-center"
        >
          <span className="secondary-label mb-6">Solusi Konferensi Video Modern</span>
          <h1 className="text-6xl md:text-8xl font-serif font-light leading-[1.1] mb-8 text-slate-900">
            Hubungkan <span className="italic font-medium text-blue-700">Visi Anda</span> <br />
            Ke Seluruh Dunia
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-xl mb-10 leading-relaxed">
            Tsunagari bukan sekadar video call. Kami membangun jembatan untuk branding, informasi, dan layanan pelanggan yang terintegrasi langsung ke platform favorit Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full text-sm tracking-widest hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center gap-2">
              COBA GRATIS <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                 {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                   <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-slate-50 flex items-center justify-center shadow-sm">
                     <Icon className="w-4 h-4 text-slate-400" />
                   </div>
                 ))}
               </div>
               <p className="text-xs font-medium text-slate-400 italic">Integrasi media sosial otomatis.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 lg:col-span-5 relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop" 
              alt="Video Conference"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-blue-900/10"></div>
          </div>
          {/* Decorative Floating Card */}
          <div className="absolute -bottom-10 -left-10 p-8 bg-white rounded-3xl shadow-2xl border border-blue-50 max-w-[280px]">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle className="text-white w-6 h-6" />
            </div>
            <p className="text-lg font-serif font-bold text-slate-900 mb-1">HD Excellence</p>
            <p className="text-sm text-slate-500 leading-relaxed">Streaming 4K stabil untuk presentasi branding profesional Anda.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialPlatforms = () => {
    // Keep platforms content but update styling
  const platforms = [
    { name: "Instagram", icon: <Instagram className="w-6 h-6" />, color: "text-pink-600" },
    { name: "Facebook", icon: <Facebook className="w-6 h-6" />, color: "text-blue-600" },
    { name: "YouTube", icon: <Youtube className="w-6 h-6" />, color: "text-red-600" },
    { name: "TikTok", icon: <Smartphone className="w-6 h-6" />, color: "text-black" },
    { name: "X", icon: <Twitter className="w-6 h-6" />, color: "text-blue-400" },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y editorial-border">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-md">
                <span className="secondary-label">Multi-Platform</span>
                <h2 className="text-3xl font-serif font-medium mt-2">Publikasi Otomatis</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
            {platforms.map((platform, index) => (
                <div key={platform.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className={`p-4 bg-white rounded-2xl shadow-sm border editorial-border group-hover:shadow-md transition-all ${platform.color}`}>
                        {platform.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">{platform.name}</span>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Branding",
      label: "Visual Identity",
      description: "Tingkatkan kehadiran merek Anda dengan kustomisasi penuh pada antarmuka video dan domain unik.",
      icon: <Star className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Informasi",
      label: "Knowledge Flow",
      description: "Sampaikan pesan Anda dengan jelas melalui fitur presentasi HD, papan tulis digital, dan berbagi file cepat.",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Layanan Pelanggan",
      label: "Human Support",
      description: "Hubungkan agen CS Anda dengan pelanggan secara langsung untuk pengalaman bantuan yang lebih manusiawi.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-12">
        <div className="text-center mb-24">
          <span className="secondary-label">Apa Yang Kami Lakukan</span>
          <h2 className="text-5xl font-serif font-light mt-4 text-slate-900 italic">Membangun Jembatan <span className="font-normal not-italic">Komunikasi</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-blue-100 rounded-[3rem] overflow-hidden">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`p-16 border-blue-100 transition-colors group hover:bg-blue-50/50 ${index !== 2 ? "border-r" : ""} ${index === 0 ? "bg-white" : ""}`}
            >
              <div className="mb-10 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <div className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                </div>
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-2 block">{service.label}</span>
              <h3 className="text-3xl font-serif font-medium text-slate-900 mb-6">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  const plans = [
    {
      name: "Paket Dasar",
      label: "STARTER",
      price: "0",
      description: "Solusi esensial untuk individu.",
      features: ["Hingga 40 Menit", "100 Peserta", "Kualitas SD", "Berbagi Layar Standar"],
      highlight: false
    },
    {
      name: "Paket Profesional",
      label: "MOST POPULAR",
      price: "159.000",
      description: "Ideal untuk branding bisnis skala menengah.",
      features: ["Waktu Tidak Terbatas", "500 Peserta", "HD 1080p", "Streaming Sosmed", "CRM Integration"],
      highlight: true
    },
    {
      name: "Enterprise Elite",
      label: "CORPORATE",
      price: "1.200.000",
      description: "Solusi total informasi & branding korporat.",
      features: ["Manajer VIP", "SSO & Branding Kustom", "Penyimpanan Unlimited", "API Lanjutan"],
      highlight: false
    }
  ];

  return (
    <section id="packages" className="py-32 bg-blue-50/50 relative overflow-hidden">
      <div className="container mx-auto px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="secondary-label">Penawaran Kami</span>
          <h2 className="text-5xl font-serif font-light mt-4 text-slate-900">Pilih <span className="italic font-medium text-blue-700">Paket Langganan</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              whileHover={{ y: -10 }}
              className={`p-12 rounded-[2.5rem] border transition-all ${
                plan.highlight 
                ? "bg-blue-600 text-white shadow-2xl shadow-blue-200 border-transparent scale-105" 
                : "bg-white border-blue-100 shadow-sm"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                  <span className={`text-[9px] font-black tracking-widest px-3 py-1 rounded-full uppercase ${plan.highlight ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"}`}>
                    {plan.label}
                  </span>
              </div>
              <h3 className="text-3xl font-serif font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-8 font-light ${plan.highlight ? "text-blue-100" : "text-slate-500"}`}>{plan.description}</p>
              <div className="flex items-baseline gap-1 mb-8 border-y editorial-border py-6 my-6 border-opacity-20">
                <span className="text-xs font-bold font-sans">RP</span>
                <span className="text-5xl font-serif font-bold tracking-tighter">{plan.price}</span>
                <span className={`text-[10px] font-bold ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>/BLN</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-blue-200" : "text-blue-600"}`} />
                    <span className={plan.highlight ? "text-white" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full text-xs font-black tracking-widest uppercase transition-all ${
                plan.highlight 
                ? "bg-white text-blue-600 hover:bg-blue-50" 
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
              }`}>
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
    const reviews = [
        {
          name: "Siska Pratama",
          role: "CEO Digital Inovasi",
          comment: "Tsunagari mengubah cara kami berkomunikasi dengan klien. Kualitas videonya luar biasa jernih bahkan dengan koneksi terbatas.",
          avatar: "SP"
        },
        {
          name: "Budi Santoso",
          role: "CEO CreativeHub",
          comment: "Tsunagari memudahkan kami mengelola webinar sekaligus konten Instagram dalam satu klik. Efisiensi luar biasa!",
          avatar: "BS"
        },
        {
          name: "Larasati Putri",
          role: "Kepala Layanan Pelanggan",
          comment: "Memberikan layanan CS melalui video kini jauh lebih efisien. Pelanggan kami merasa lebih dihargai.",
          avatar: "LP"
        }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-12">
                <div className="text-center mb-24">
                    <span className="secondary-label">Testimonial</span>
                    <h2 className="text-5xl font-serif font-light mt-4 text-slate-900 italic">Apa Kata <span className="font-normal not-italic">Mereka</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-16">
                    {reviews.map((review, index) => (
                        <div key={index} className="relative group">
                            <div className="text-8xl text-blue-100 font-serif absolute -top-10 -left-6 opacity-60 transition-transform group-hover:scale-110">“</div>
                            <p className="text-xl italic font-serif text-slate-700 relative z-10 leading-relaxed mb-10">
                                {review.comment}
                            </p>
                            <div className="flex items-center gap-4 border-t editorial-border pt-8">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs font-black">
                                    {review.avatar}
                                </div>
                                <div>
                                    <h4 className="text-xs font-black tracking-widest uppercase text-slate-900">{review.name}</h4>
                                    <p className="text-[10px] font-bold text-slate-400 mt-0.5">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AboutUs = () => {
    return (
        <section id="about" className="py-32 bg-slate-50">
            <div className="container mx-auto px-12">
                <div className="grid md:grid-cols-12 gap-20 items-center">
                    <div className="md:col-span-6 relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-[2rem] -z-10 rotate-12"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1573161158521-80325ec0d84c?q=80&w=2070&auto=format&fit=crop" 
                            alt="Meeting Room"
                            className="rounded-[3rem] shadow-2xl relative z-10 grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="md:col-span-6">
                        <span className="secondary-label mb-6 block">Kisah Kami</span>
                        <h2 className="text-6xl font-serif font-light text-slate-900 mb-8 leading-tight">Membangun <span className="italic">Jembatan</span> Digital</h2>
                        <p className="text-slate-500 text-lg mb-8 font-light leading-relaxed">
                            Kami percaya bahwa koneksi yang berkualitas adalah kunci dari setiap bisnis yang sukses. Tsunagari lahir dari keinginan untuk menghubungkan individu dan tim melalui teknologi yang andal, aman, dan memikat secara visual.
                        </p>
                        <div className="grid grid-cols-2 gap-12 border-y editorial-border py-10 mb-12">
                            <div>
                                <h4 className="text-4xl font-serif font-bold text-blue-600 tracking-tighter">10JT+</h4>
                                <p className="text-[10px] font-black tracking-widest uppercase text-slate-400 mt-2">Menit Eksposur</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-serif font-bold text-blue-600 tracking-tighter">50K+</h4>
                                <p className="text-[10px] font-black tracking-widest uppercase text-slate-400 mt-2">Mitra Korporat</p>
                            </div>
                        </div>
                        <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-full text-xs tracking-widest hover:bg-slate-800 transition-all">
                            PELAJARI VISI KAMI
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white pt-24 pb-12 overflow-hidden relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 opacity-30"></div>
            <div className="container mx-auto px-12">
                <div className="grid md:grid-cols-12 gap-16 mb-24">
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-2xl font-black tracking-tighter">TSUNAGARI</span>
                        </div>
                        <p className="text-blue-200/60 leading-relaxed font-light mb-8 max-w-xs">
                            Platform konferensi video nomor satu di Indonesia yang mengutamakan kualitas, estetika, dan kemudahan koneksi tanpa batas.
                        </p>
                        <div className="flex gap-6">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <Icon key={i} className="w-5 h-5 text-blue-300/40 hover:text-white cursor-pointer transition-colors" />
                            ))}
                        </div>
                    </div>
                    
                    <div className="md:col-span-2">
                        <h4 className="text-[10px] font-black tracking-widest uppercase mb-8 text-blue-300">Layanan</h4>
                        <ul className="space-y-4 text-sm font-medium text-blue-200/60">
                            <li className="hover:text-white cursor-pointer transition-colors">Branding</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Webinar</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Cloud Sync</li>
                            <li className="hover:text-white cursor-pointer transition-colors">API Systems</li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-[10px] font-black tracking-widest uppercase mb-8 text-blue-300">Legalitas</h4>
                        <ul className="space-y-4 text-sm font-medium text-blue-200/60">
                            <li className="hover:text-white cursor-pointer transition-colors">Privasi</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Ketentuan</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Lisensi</li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="text-[10px] font-black tracking-widest uppercase mb-8 text-blue-300">Langganan</h4>
                        <p className="text-blue-200/60 text-sm mb-6 font-light">Dapatkan update eksklusif editorial Tsunagari.</p>
                        <div className="flex gap-3 bg-white/5 p-2 rounded-2xl border border-white/10">
                            <input 
                                type="email" 
                                placeholder="Alamat Email" 
                                className="bg-transparent border-none px-4 py-2 w-full text-sm focus:outline-none placeholder-blue-300/30"
                            />
                            <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-500 transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
                    <p className="text-[9px] font-black tracking-[0.4em] uppercase text-blue-400/40">
                        © 2026 TSUNAGARI TECHNOLOGY. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-10 text-[9px] font-black tracking-widest uppercase text-blue-400/20">
                        <span>Jakarta</span>
                        <span>London</span>
                        <span>Tokyo</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <SocialPlatforms />
      <Services />
      <Packages />
      <Testimonials />
      <AboutUs />
      <Footer />
    </div>
  );
}
