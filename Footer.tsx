import { Mail, Phone, MapPin } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#344A7F] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-gray-300 leading-relaxed">
              Seu parceiro em soluções contábeis e tecnológicas para o crescimento do seu negócio.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="https://wa.me/5511974585384" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-[#ABE356] transition-colors">
                <MessageCircle className="w-5 h-5 mr-3" />
                <span>(11) 97458-5384</span>
              </a>
              <a href="mailto:contato@bookk.com.br" className="flex items-center text-gray-300 hover:text-[#ABE356] transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                <span>contato@bookk.com.br</span>
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>Rua Capivari, 215 - Pacaembu<br />São Paulo - SP</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Úteis</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-[#ABE356] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-gray-300 hover:text-[#ABE356] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} BOOKK. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
