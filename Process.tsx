import { Phone, FileText, Monitor } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Phone,
      title: 'Escolha e Contato',
      description: 'Preencha nosso formulário ou fale conosco para escolher o certificado ideal (e-CPF ou e-CNPJ).'
    },
    {
      icon: FileText,
      title: 'Pagamento e Documentação',
      description: 'Realize o pagamento e providencie a documentação necessária para a validação.'
    },
    {
      icon: Monitor,
      title: 'Validação e Instalação',
      description: 'Agende sua validação (online ou presencial) e receba o suporte da BOOKK para a instalação e uso.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#344A7F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Processo Simplificado em 3 Passos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-[#ABE356] w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-xl">
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#344A7F]" />
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-8 min-h-[200px] flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block bg-[#ABE356] text-[#344A7F] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
