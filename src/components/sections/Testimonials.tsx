import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function Testimonials() {
  const reviews = [
    {
      text: "Suplai canal C untuk proyek perumahan di Bekasi berjalan mulus tanpa keterlambatan. Kualitas SNI terjamin ketebalannya presisi.",
      name: "Budi Santoso",
      role: "Project Manager, PT Adhi Karya Residensial",
      rating: 5
    },
    {
      text: "Layanan fabrikasi custom sangat membantu tim. Pemotongan sesuai blueprint mengurangi waste dan efisiensi waktu instalasi atap gudang kami signifikan.",
      name: "Ir. Hendra",
      role: "Lead Engineer, Jaya Sentosa Manufaktur",
      rating: 5
    },
    {
      text: "Harga sangat bersaing untuk kuantiti besar. Dukungan after sales tim Chriselindo sangat responsif ketika ada kendala saat bongkar muat.",
      name: "Dewi Andarini",
      role: "Procurement, Central Logistik Corp",
      rating: 4
    }
  ];

  return (
    <section className="relative py-14 md:py-24 lg:py-32 bg-primary">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.01)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px] pointer-events-none"></div>
      
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <Badge>Testimoni</Badge>
          <h2 className="font-heading font-bold text-[34px] md:text-[40px] leading-tight">
            Bagaimana Kami <br className="hidden md:block"/>Mendukung Klien Kami
          </h2>
        </div>

        {/* Grid/Slider Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-surface border border-border-subtle p-8 rounded-xl relative hover:border-accent/30 transition-colors"
            >
              <Quote className="absolute top-6 right-8 text-white/5" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
                {[...Array(5 - rev.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-border-subtle" />
                ))}
              </div>

              <p className="font-body italic text-white/80 text-[16px] leading-relaxed mb-8 relative z-10">
                "{rev.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-border-subtle pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center font-display font-bold text-lg text-white">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white">{rev.name}</h4>
                  <p className="font-body text-xs text-steel mt-0.5">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
