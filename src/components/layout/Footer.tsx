import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#060E1A] pt-16 pb-8 border-t border-white/5">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        {/* Col 1 */}
        <div className="lg:pr-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center font-display font-bold text-lg text-white">
              CB
            </div>
            <div className="font-heading font-bold text-base leading-tight uppercase tracking-wide">
              Chriselindo <br/>
              <span className="text-accent text-[10px] tracking-widest font-display">Baswara Nusantara</span>
            </div>
          </div>
          <p className="font-body text-steel text-sm leading-relaxed mb-6">
            Pusat distribusi dan fabrikasi baja berstandar SNI melayani kebutuhan konstruksi dari skala menengah hingga industri di seluruh Nusantara.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-steel hover:bg-accent hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-steel hover:bg-accent hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-steel hover:bg-accent hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-display font-bold text-white uppercase tracking-widest text-sm mb-6">Layanan</h4>
          <ul className="space-y-3 font-body text-steel text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">Penjualan Material Baja</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Custom Fabrikasi</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Konsultasi Project</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Logistik Nasional</a></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-display font-bold text-white uppercase tracking-widest text-sm mb-6">Produk Unggulan</h4>
          <ul className="space-y-3 font-body text-steel text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">Baja Ringan Canal C</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Spandek Penutup Atap</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Besi Hollow Galvanis</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Baja Profil (IWF/H-Beam)</a></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-display font-bold text-white uppercase tracking-widest text-sm mb-6">Kantor & Pabrik</h4>
          <ul className="space-y-4 font-body text-steel text-sm">
            <li>Kawasan Industri XYZ, Blok A No. 12<br/>Jakarta Barat, 11440</li>
            <li>
              <span>Senin - Jumat</span><br/>
              <span className="text-white">08:00 - 17:00 WIB</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 pt-8 border-t border-border-subtle/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-steel">
          &copy; {new Date().getFullYear()} PT Chriselindo Baswara Nusantara. All rights reserved.
        </p>
        <div className="flex gap-6 font-body text-xs text-steel">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
