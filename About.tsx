export default function About() {
  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#344A7F] mb-6 sm:mb-8">
          BOOKK: Sua Parceria para uma Contabilidade Inteligente
        </h2>

        <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed">
          Com a BOOKK, você conta com um parceiro especializado em contabilidade e tecnologia. Nossa equipe está pronta para oferecer suporte completo, garantindo que seu Certificado Digital seja mais uma ferramenta para o sucesso e a eficiência da sua gestão.
        </p>

        <button
          onClick={handleContact}
          className="bg-[#ABE356] text-[#344A7F] px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Fale Conosco
        </button>
      </div>
    </section>
  );
}
