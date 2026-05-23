import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';
import { ArrowUpRight } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Pabrik Manufaktur Kalsel",
      location: "Banjarmasin, 2023",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=1000",
      cols: "md:col-span-2 md:row-span-2",
      height: "h-[400px] md:h-full"
    },
    {
      id: 2,
      name: "Gudang Logistik E-Commerce",
      location: "Cikarang, 2023",
      category: "Komersial",
      image: "https://images.unsplash.com/photo-1587293852726-694364abdf41?q=80&w=800",
      cols: "md:col-span-1 md:row-span-1",
      height: "h-[300px]"
    },
    {
      id: 3,
      name: "Struktur Kanopi Stadion",
      location: "Jawa Timur, 2022",
      category: "Fasilitas Umum",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      cols: "md:col-span-1 md:row-span-1",
      height: "h-[300px]"
    }
  ];

  return (
    <section id="portofolio" className="py-14 md:py-24 lg:py-32 bg-primary-mid">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center justify-center gap-4 mb-14">
          <Badge>Jejak Karya</Badge>
          <h2 className="font-heading font-bold text-[34px] md:text-[40px] leading-tight">
            Dipercaya Oleh Proyek <br className="hidden md:block" /> Infrastruktur Strategis
          </h2>
        </div>

        {/* Grid Masonry (Simulated with distinct spancels) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-min">
          {projects.map((proj, idx) => (
            <motion.div 
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer border border-border-subtle ${proj.cols} ${proj.height}`}
            >
              <img 
                src={proj.image} 
                alt={proj.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Top Badge */}
              <div className="absolute top-6 left-6 z-10">
                <Badge className="bg-transparent border-white/30 text-white shadow-sm backdrop-blur-sm">
                  {proj.category}
                </Badge>
              </div>

              {/* Bottom Content slide up on Hover */}
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white mb-1 group-hover:text-accent-light transition-colors">{proj.name}</h3>
                    <p className="font-body text-steel text-sm">{proj.location}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="text-white" size={20} />
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
