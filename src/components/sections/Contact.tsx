import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export function Contact() {
  return (
    <section id="kontak" className="relative bg-primary-mid border-t border-border-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Col - Contact Info */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <Badge className="mb-4 self-start">Hubungi Kami</Badge>
          <h2 className="font-heading font-bold text-[34px] md:text-[48px] leading-tight mb-4">
            Siap Mulai Proyek Anda?
          </h2>
          <p className="font-body text-steel text-lg mb-12 max-w-md">
            Diskusikan kebutuhan material, spesifikasi teknis, atau estimasi harga bersama tim engineer dan konsultan kami.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-surface border border-border-subtle rounded flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-white tracking-wide text-sm uppercase mb-1">Telepon / WhatsApp</h4>
                <p className="font-body text-lg text-white font-medium">+62 811-0000-0000</p>
                <p className="font-body text-steel text-sm">Senin - Jumat, 08:00 - 17:00 WIB</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-surface border border-border-subtle rounded flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-white tracking-wide text-sm uppercase mb-1">Email Pertanyaan</h4>
                <p className="font-body text-lg text-white font-medium">sales@chriselindo.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-surface border border-border-subtle rounded flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-white tracking-wide text-sm uppercase mb-1">Pabrik & Kantor Pusat</h4>
                <p className="font-body text-steel text-base leading-relaxed max-w-sm">
                  Kawasan Industri XYZ, Blok A No. 12<br/>
                  Jakarta Barat, DKI Jakarta 11440
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col - Form bg visual/overlay logic */}
        <div className="relative p-8 md:p-16 lg:p-24 bg-surface-alt border-l border-border-subtle flex flex-col justify-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888087405-eb81f5c621bf?q=80&w=2070')] bg-cover bg-center opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
          
          <div className="relative z-10 w-full max-w-xl mx-auto backdrop-blur-md">
            <h3 className="font-heading font-semibold text-2xl mb-8">Formulir Permintaan Estimasi</h3>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-display uppercase tracking-widest text-xs text-steel font-medium">Nama Lengkap *</label>
                  <input type="text" id="name" required className="bg-surface border border-border-subtle rounded px-4 py-3 text-white font-body focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="font-display uppercase tracking-widest text-xs text-steel font-medium">Perusahaan</label>
                  <input type="text" id="company" className="bg-surface border border-border-subtle rounded px-4 py-3 text-white font-body focus:outline-none focus:border-accent transition-all" placeholder="PT Maju Bersama" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="font-display uppercase tracking-widest text-xs text-steel font-medium">Nomor WhatsApp *</label>
                  <input type="tel" id="phone" required className="bg-surface border border-border-subtle rounded px-4 py-3 text-white font-body focus:outline-none focus:border-accent transition-all" placeholder="+62 8..." />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="product" className="font-display uppercase tracking-widest text-xs text-steel font-medium">Kebutuhan Produk *</label>
                  <select id="product" className="bg-surface border border-border-subtle rounded px-4 py-3 text-white focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Pilih Material...</option>
                    <option value="Canal C">Canal C / Baja Ringan</option>
                    <option value="Spandek">Atap Spandek</option>
                    <option value="Hollow">Besi Hollow</option>
                    <option value="Custom">Fabrikasi Custom</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-display uppercase tracking-widest text-xs text-steel font-medium">Keterangan / Volume Proyek</label>
                <textarea id="message" rows={4} className="bg-surface border border-border-subtle rounded px-4 py-3 text-white font-body focus:outline-none focus:border-accent transition-all resize-none" placeholder="Deskripsikan spesifikasi SNI yang dibutuhkan, luas area, atau urgensi..."></textarea>
              </div>

              <Button variant="primary" type="submit" className="w-full mt-2">
                Kirim Permintaan Estimasi
              </Button>
              
              <div className="text-center mt-6">
                <span className="font-body text-xs text-steel uppercase tracking-widest">Atau chat langsung via WhatsApp</span>
                <button className="w-full mt-4 flex items-center justify-center gap-2 bg-[#25D366]/10 text-white border border-[#25D366]/40 hover:bg-[#25D366]/20 transition-all py-3 rounded font-body font-medium text-[15px]">
                  <Phone size={18} className="text-[#25D366]"/> Hubungi via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
