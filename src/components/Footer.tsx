import Link from "next/link";
import { Network } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 [content-visibility:auto]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Network className="w-6 h-6 text-electric-cyan" />
              <span className="font-bold text-xl tracking-tighter">GrupoInfinito<span className="text-electric-cyan">IA</span></span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              El ecosistema empresarial definitivo para la formalización y digitalización en LATAM.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Sede El Salvador</h5>
              <p className="text-gray-500 text-xs leading-relaxed">
                World Trade Center Torre Futura,<br />
                89 Av. Norte y Calle El Mirador,<br />
                San Salvador, El Salvador.<br />
                Tel: +(503) 2254-6506
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Sede Guatemala</h5>
              <p className="text-gray-500 text-xs leading-relaxed">
                Diagonal 6, 12-42 Zona 10,<br />
                Edificio Design Center, Torre I,<br />
                Ciudad de Guatemala, Guatemala.<br />
                Tel: +(502) 2314-5600
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Relación con Inversores</Link>
          </div>
          <div className="text-gray-600 text-[10px] italic">
            &quot;Humanizando la tecnología en la región. Fundada en 2020. GrupoInfinitoIA &copy; 2026&quot;
          </div>
        </div>
      </div>
    </footer>
  );
}
