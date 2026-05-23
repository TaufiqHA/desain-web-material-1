import { motion } from 'motion/react';
import { PackageSearch, PenTool, TrendingUp, Truck, HeadphonesIcon, Handshake } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function Services() {
  const services = [
    {
      icon: <PackageSearch size={40} className="text-accent stroke-[1.5]" />,
      title: "Penjualan Produk Material",
      desc: "Distribusi besi beton, profil baja, canal, reng, dan aksesoris industri dari pabrikan terbaik berstandar SNI."
    },
    {
      icon: <PenTool size={40} className="text-accent stroke-[1.5]" />,
      title: "Custom & Fabrikasi",
      desc: "Layanan forming, punching, drilling dan custom cut untuk menyesuaikan dimensi baja dengan gambar kerja proyek Anda."
    },
    {
      icon: <TrendingUp size={40} className="text-accent stroke-[1.5]" />,
      title: "Konsultasi Teknis",
      desc: "Tim sales dan engineer kami siap merekomendasikan efisiensi material tanpa mengorbankan integritas bangunan."
    },
    {
      icon: <Truck size={40} className="text-accent stroke-[1.5]" />,
      title: "Distribusi & Logistik",
      desc: "Layanan antar tepat waktu (just-in-time delivery) untuk mendukung pace pengerjaan proyek tanpa delay."
    },
    {
      icon: <HeadphonesIcon size={40} className="text-accent stroke-[1.5]" />,
      title: "After Sales Support",
      desc: "Garansi retur untuk cacat fisik serta layanan pendampingan jika terjadi kendala pada saat unloading."
    },
    {
      icon: <Handshake size={40} className="text-accent stroke-[1.5]" />,
      title: "Kemitraan Bisnis",
      desc: "Skema B2B khusus untuk kontraktor berskala besar dengan fleksibilitas payment (S&K Berlaku)."
    }
  ];

  return (
    <section id="layanan" className="py-14 md:py-24 lg:py-32 bg-primary">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge className="mb-4">Layanan Unggulan</Badge>
          <h2 className="font-heading font-bold text-[34px] md:text-[40px] leading-tight max-w-2xl">
            Solusi Total untuk <br className="hidden md:block"/> Kebutuhan Konstruksi Anda
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-card border border-border-subtle rounded-lg p-8 group hover:-translate-y-2 hover:border-accent/40 shadow-card transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/0 group-hover:bg-accent transition-colors duration-300"></div>
              
              <div className="mb-6">{srv.icon}</div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-white">{srv.title}</h3>
              <p className="font-body text-steel text-[15px] leading-relaxed mb-6">
                {srv.desc}
              </p>
              
              <a href="#kontak" className="inline-flex items-center text-accent text-sm font-display font-medium uppercase tracking-wider hover:text-accent-light transition-colors group-hover:gap-2">
                Pelajari Lebih <span className="ml-1 transition-all group-hover:translate-x-1">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
