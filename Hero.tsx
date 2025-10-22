export default function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#344A7F] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ABE356] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ABE356] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Certificado Digital A1 BOOKK:<br />
            <span className="text-[#ABE356]">Segurança e Agilidade</span> com 15% de Desconto!
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-gray-200">
            Modernize sua vida digital e empresarial. Garanta seu e-CPF ou e-CNPJ com a expertise da BOOKK e uma condição especial para você!
          </p>

          <div className="inline-block bg-[#ABE356] text-[#344A7F] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-xl sm:text-2xl mb-8 shadow-lg transform hover:scale-105 transition-transform">
            APROVEITE: 15% OFF no seu Primeiro Certificado Digital A1!
          </div>

          <div>
            <button
              onClick={scrollToProducts}
              className="bg-[#ABE356] text-[#344A7F] px-8 sm:px-12 py-4 sm:py-5 rounded-lg font-bold text-lg sm:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Quero Meu Certificado com Desconto Agora!
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
