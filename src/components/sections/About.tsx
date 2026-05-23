import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="tentang" className="py-14 md:py-24 lg:py-32 bg-primary-mid">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column - Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="rounded-xl overflow-hidden border border-border-subtle relative aspect-square md:aspect-[4/3] lg:aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070" 
              alt="Tim Konstruksi" 
              className="w-full h-full object-cover grayscale opacity-90 transition-all hover:grayscale-0"
              loading="lazy"
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-gradient-cta p-6 rounded-lg shadow-cta border border-white/10 z-10 hidden md:block">
            <div className="font-display text-4xl md:text-5xl font-bold text-white mb-1">2008</div>
            <div className="font-body text-sm text-white/90 uppercase tracking-widest font-medium">Tahun Berdiri</div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start order-1 lg:order-2"
        >
          <Badge className="mb-4">Tentang Kami</Badge>
          <h2 className="font-heading font-bold text-[34px] md:text-[40px] leading-tight mb-6">
            Mitra Konstruksi yang Dapat Anda Percaya
          </h2>
          <div className="space-y-4 font-body text-steel text-[16px] leading-relaxed mb-8">
            <p>
              PT. Chriselindo Baswara Nusantara hadir sebagai jembatan ketahanan struktural bagi berbagai proyek infrastruktur di Indonesia. Sejak didirikan, kami fokus pada penyediaan dan fabrikasi baja kualitas terbaik.
            </p>
            <p>
              Dengan kombinasi pengadaan material berstandar SNI (Standar Nasional Indonesia) dan keunggulan teknis dari tim fabrikasi kami, kami menjamin efisiensi proyek Anda dari hulu hingga hilir.
            </p>
          </div>

          {/* Milestones / Strengths */}
          <div className="space-y-4 w-full border-t border-border-subtle pt-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-accent shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-heading font-semibold text-white text-lg">Material Bersertifikasi SNI</h4>
                <p className="font-body text-steel text-sm mt-1">Standar keamanan tertinggi untuk setiap batang baja yang dikirim.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-accent shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-heading font-semibold text-white text-lg">Jaringan Distribusi Nasional</h4>
                <p className="font-body text-steel text-sm mt-1">Armada logistik terpadu untuk pengiriman ke seluruh site di Indonesia.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-accent shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-heading font-semibold text-white text-lg">Presisi Fabrikasi</h4>
                <p className="font-body text-steel text-sm mt-1">Dipotong dan dibentuk sesuai kebutuhan struktural engineering Anda.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
