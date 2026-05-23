import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero noise-overlay flex items-center pt-[96px] overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-accent/5 -skew-x-12 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
        
        {/* Left Column (Text) 55% -> col-span-7 */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge>Solusi Material Konstruksi Terpercaya</Badge>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-display font-extrabold text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-tight"
          >
            Distribusi & Fabrikasi <br className="hidden md:block"/>
            <span className="text-accent">Baja Struktural</span> <br className="hidden md:block"/>
            Berskala Nasional
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="font-body text-[17px] text-steel max-w-xl leading-relaxed"
          >
            Menyediakan material baja berkualitas SNI dengan layanan fabrikasi custom dan pengiriman tepat waktu ke seluruh proyek di Indonesia. Kepercayaan Anda, prioritas kami.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4"
          >
            <Button variant="primary" onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}>Minta Penawaran Sekarang</Button>
            <Button variant="ghost" onClick={() => document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' })}>Lihat Produk Kami &rarr;</Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 md:gap-8 mt-12 pt-8 border-t border-border-subtle/50"
          >
            <div className="flex flex-col">
              <span className="font-display font-bold text-3xl text-white">15+</span>
              <span className="font-body text-xs text-steel uppercase tracking-widest mt-1">Tahun Pengalaman</span>
            </div>
            <div className="w-[1px] h-10 bg-accent/40 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-3xl text-white">500+</span>
              <span className="font-body text-xs text-steel uppercase tracking-widest mt-1">Proyek Selesai</span>
            </div>
            <div className="w-[1px] h-10 bg-accent/40 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-3xl text-white">1000+</span>
              <span className="font-body text-xs text-steel uppercase tracking-widest mt-1">Ton/Bulan</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (Visual) 45% -> col-span-5 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          <div className="relative rounded-lg overflow-hidden border border-border-subtle shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary/80 before:to-transparent before:z-10 aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1541888087405-eb81f5c621bf?q=80&w=2070" 
              alt="Fabrikasi Baja Struktural" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating Element */}
          <div className="absolute -bottom-8 -left-8 bg-surface-alt p-5 rounded-lg border border-border-subtle shadow-xl z-20 flex items-center gap-4 animate-pulse">
            <div className="w-3 h-3 rounded-full bg-success"></div>
            <span className="font-body text-sm font-medium">Kapasitas Produksi Aktif</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
