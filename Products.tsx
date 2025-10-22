export default function Products() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#344A7F] mb-4">
            Escolha o Certificado Ideal para Você ou Sua Empresa
          </h2>
          <p className="text-lg sm:text-xl text-[#ABE356] font-semibold">
            Aproveite 15% de desconto exclusivo no seu primeiro Certificado Digital A1 com a BOOKK!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* e-CPF A1 */}
          <div className="bg-white border-2 border-[#344A7F] rounded-2xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#ABE356] text-[#344A7F] px-6 py-2 font-bold text-lg rounded-bl-2xl">
              15% OFF!
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#344A7F] mb-4 mt-8">
              Certificado Digital e-CPF A1
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Ideal para pessoas físicas que precisam assinar documentos, acessar portais governamentais e declarar imposto de renda de forma eletrônica.
            </p>

            <div className="mb-8">
              <p className="text-gray-500 line-through text-lg mb-2">
                De R$ 155,00
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-600">Por Apenas</span>
                <span className="text-4xl sm:text-5xl font-bold text-[#344A7F]">
                  R$ 131,75
                </span>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full bg-[#ABE356] text-[#344A7F] py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Comprar e-CPF A1 com Desconto
            </button>
          </div>

          {/* e-CNPJ A1 */}
          <div className="bg-white border-2 border-[#344A7F] rounded-2xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#ABE356] text-[#344A7F] px-6 py-2 font-bold text-lg rounded-bl-2xl">
              15% OFF!
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#344A7F] mb-4 mt-8">
              Certificado Digital e-CNPJ A1
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Indispensável para empresas. Assine contratos, emita notas fiscais, acesse a Receita Federal e cumpra obrigações fiscais com segurança.
            </p>

            <div className="mb-8">
              <p className="text-gray-500 line-through text-lg mb-2">
                De R$ 230,00
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-600">Por Apenas</span>
                <span className="text-4xl sm:text-5xl font-bold text-[#344A7F]">
                  R$ 195,50
                </span>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full bg-[#ABE356] text-[#344A7F] py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Comprar e-CNPJ A1 com Desconto
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-600 italic">
          * Promoção válida para a primeira aquisição de Certificado Digital A1 na BOOKK.
        </p>
      </div>
    </section>
  );
}
