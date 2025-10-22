import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    certificateType: 'e-CPF A1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const emailBody = `
Novo pedido de Certificado Digital A1

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Certificado: ${formData.certificateType}
Mensagem: ${formData.message || 'Nenhuma mensagem adicional'}
    `;

    const mailtoLink = `mailto:contato@bookk.com.br?subject=Pedido de Certificado Digital A1 - ${formData.certificateType}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        certificateType: 'e-CPF A1',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#344A7F]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Aproveite o Desconto e Peça Seu Certificado Agora!
          </h2>
          <p className="text-lg sm:text-xl text-gray-200">
            Preencha os dados abaixo e entraremos em contato para finalizar sua compra com 15% de desconto no seu primeiro certificado!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-[#344A7F] border-2 border-[#ABE356] focus:outline-none focus:ring-2 focus:ring-[#ABE356]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-[#344A7F] border-2 border-[#ABE356] focus:outline-none focus:ring-2 focus:ring-[#ABE356]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white font-semibold mb-2">
                Telefone (WhatsApp) *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-[#344A7F] border-2 border-[#ABE356] focus:outline-none focus:ring-2 focus:ring-[#ABE356]"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">
                Tipo de Certificado Desejado *
              </label>
              <div className="space-y-3">
                <label className="flex items-center bg-white bg-opacity-20 rounded-lg p-4 cursor-pointer hover:bg-opacity-30 transition-all">
                  <input
                    type="radio"
                    name="certificateType"
                    value="e-CPF A1"
                    checked={formData.certificateType === 'e-CPF A1'}
                    onChange={(e) => setFormData({ ...formData, certificateType: e.target.value })}
                    className="w-5 h-5 text-[#ABE356] focus:ring-[#ABE356]"
                  />
                  <span className="ml-3 text-white font-medium">e-CPF A1 - R$ 131,75</span>
                </label>
                <label className="flex items-center bg-white bg-opacity-20 rounded-lg p-4 cursor-pointer hover:bg-opacity-30 transition-all">
                  <input
                    type="radio"
                    name="certificateType"
                    value="e-CNPJ A1"
                    checked={formData.certificateType === 'e-CNPJ A1'}
                    onChange={(e) => setFormData({ ...formData, certificateType: e.target.value })}
                    className="w-5 h-5 text-[#ABE356] focus:ring-[#ABE356]"
                  />
                  <span className="ml-3 text-white font-medium">e-CNPJ A1 - R$ 195,50</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Mensagem (Opcional)
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-[#344A7F] border-2 border-[#ABE356] focus:outline-none focus:ring-2 focus:ring-[#ABE356] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-[#ABE356] text-[#344A7F] py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {submitted ? 'Solicitação Enviada!' : 'Solicitar Meu Certificado com Desconto'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
