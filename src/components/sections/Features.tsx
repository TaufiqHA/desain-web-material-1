import { motion } from 'motion/react';
import { PackageOpen, Settings, Users, DollarSign, Clock, ShieldCheck } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function Features() {
  const points = [
    { id: '01', icon: <PackageOpen size={32} />, title: "Stok Siap Kirim", desc: "Warehouse dengan inventory besar untuk suplai proyek nasional tanpa putus." },
    { id: '02', icon: <Settings size={32} />, title: "Fabrikasi Kustom", desc: "Dimensi dan tekukan material presisi tinggi sesuai Blue Print struktural Anda." },
    { id: '03', icon: <Users size={32} />, title: "Tim Teknis Handal", desc: "Didukung insinyur bersertifikasi siap membantu kalkulasi beban material." },
    { id: '04', icon: <DollarSign size={32} />, title: "Harga Kompetitif", desc: "Efisiensi supply chain menjamin margin proyek yang lebih menguntungkan untuk Anda." },
    { id: '05', icon: <Clock size={32} />, title: "Tepat Waktu", desc: "SLA ketat pada armada logistik. Kami paham cost of delay di lapangan." },
    { id: '06', icon: <ShieldCheck size={32} />, title: "After Sales & Garansi", desc: "Perlindungan kepastian produk SNI yang dilengkapi garansi kualitas pabrikan." },
  ];

  return (
    <section className="relative py-14 md:py-24 lg:py-32 bg-primary overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-mid/40 to-transparent pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">
        
        {/* Left Col - Headings */}
        <div className="lg:col-span-4 sticky top-32">
          <Badge className="mb-4">Mengapa Kami?</Badge>
          <h2 className="font-heading font-bold text-[34px] md:text-[40px] leading-tight mb-6">
            Standar Baja, <br/> Kecepatan Industri
          </h2>
          <p className="font-body text-steel text-[16px] leading-relaxed">
            Lebih dari sekadar supplier, kami memposisikan diri sebagai partner akselerasi pembangunan Anda.
          </p>
        </div>

        {/* Right Col - Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {points.map((pt, idx) => (
            <motion.div 
              key={pt.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative flex flex-col items-start group"
            >
              {/* Giant Number Background */}
              <div className="absolute -top-6 -left-4 font-display font-black text-8xl text-white opacity-[0.03] transition-opacity group-hover:opacity-[0.08] pointer-events-none">
                {pt.id}
              </div>
              
              <div className="text-accent mb-4 bg-surface-alt p-3 rounded shadow-sm border border-border-subtle relative z-10">
                {pt.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl text-white mb-2 relative z-10">{pt.title}</h3>
              <p className="font-body text-steel text-[15px] leading-relaxed relative z-10">{pt.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
