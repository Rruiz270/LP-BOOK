import { FileCheck, Monitor, Clock, Lock, Settings } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: FileCheck,
      title: 'Assinatura Eletrônica com Validade Jurídica',
      description: 'Assine documentos com total validade legal'
    },
    {
      icon: Monitor,
      title: 'Acesso Seguro a Sistemas e Portais',
      description: 'eCAC, Receita Federal e muito mais'
    },
    {
      icon: Clock,
      title: 'Agilidade e Redução de Custos',
      description: 'Menos papel, menos deslocamento, mais economia'
    },
    {
      icon: Lock,
      title: 'Total Segurança e Autenticidade',
      description: 'Proteja suas transações com criptografia'
    },
    {
      icon: Settings,
      title: 'Integração Perfeita',
      description: 'Compatível com softwares de gestão e contabilidade'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <img
              src="/Bookk-Logo-1 copy.png"
              alt="BOOKK Contabilidade Inteligente"
              className="h-16 sm:h-20 lg:h-24 w-auto"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#344A7F] mb-4 sm:mb-6">
            Descomplique Sua Rotina: A Força do Certificado Digital A1
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            O Certificado Digital A1 é a sua identidade eletrônica no mundo digital. Com ele, você assina documentos digitalmente com validade jurídica, acessa portais governamentais e descomplica a burocracia, tudo de forma segura e prática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#ABE356]"
            >
              <benefit.icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#ABE356] mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-[#344A7F] mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
