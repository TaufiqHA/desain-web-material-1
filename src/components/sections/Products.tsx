import { useState } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function Products() {
  const [filter, setFilter] = useState('Semua');

  const navFilters = ['Semua', 'Baja Ringan', 'Atap', 'Rangka'];

  const products = [
    {
      id: 1,
      category: 'Baja Ringan',
      name: 'Canal C / CNP',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800',
      desc: 'Baja ringan profil C standar tinggi, tahan karat (Galvalum).'
    },
    {
      id: 2,
      category: 'Rangka',
      name: 'Reng Baja Ringan',
      image: 'https://images.unsplash.com/photo-1605335198276-88029a1bd14e?q=80&w=800',
      desc: 'Dudukan atap ringan yang presisi dan kuat tekan.'
    },
    {
      id: 3,
      category: 'Atap',
      name: 'Atap Spandek',
      image: 'https://images.unsplash.com/photo-1508212177301-9dc555231b2c?q=80&w=800',
      desc: 'Zinc-alume blend, ideal untuk atap pabrik & komersial.'
    },
    {
      id: 4,
      category: 'Rangka',
      name: 'Besi Hollow',
      image: 'https://images.unsplash.com/photo-1533514114760-4389f572ae26?q=80&w=800',
      desc: 'Hollo galvanis kokoh untuk partisi dinding dan plafon.'
    }
  ];

  const filtered = filter === 'Semua' ? products : products.filter(p => p.category === filter);

  return (
    <section id="produk" className="py-14 md:py-24 lg:py-32 bg-primary-mid">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <Badge className="mb-4">Katalog Katalog</Badge>
            <h2 className="font-heading font-bold text-[34px] md:text-[40px] leading-tight">
              Produk Unggulan
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {navFilters.map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm font-display font-medium uppercase tracking-wider rounded border transition-all ${
                  filter === f 
                    ? 'border-accent bg-accent/20 text-accent-light' 
                    : 'border-border-subtle bg-transparent text-steel hover:border-slate-500 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-surface rounded-xl overflow-hidden border border-border-subtle group hover:border-accent/40 transition-all hover:shadow-card flex flex-col h-full"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 z-10">
                  <Badge>{prod.category}</Badge>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-2xl text-white mb-2">{prod.name}</h3>
                <p className="font-body text-steel text-[14px] leading-relaxed mb-6 flex-grow">{prod.desc}</p>
                <button className="w-full py-2.5 border border-border-subtle rounded text-white font-body font-medium text-sm hover:border-accent hover:text-accent transition-colors">
                  Minta Spesifikasi
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="ghost">Lihat Spesifikasi Lengkap (PDF) &rarr;</Button>
        </div>
      </div>
    </section>
  );
}
