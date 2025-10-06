import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">Entre em Contato</h2>
          <p className="text-lg text-brand-muted mt-2">Vamos conversar sobre como posso te ajudar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Coluna da Esquerda: Informações de Contato */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">Informações</h3>
              <p className="text-brand-muted leading-relaxed">
                Sinta-se à vontade para me contatar por qualquer um dos canais abaixo. Responderei o mais breve possível.
              </p>
            </div>
            
            <div className="space-y-4 font-sans">
              <a href="https://wa.me/5543999124700" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg text-brand-dark hover:text-brand-primary transition-colors">
                <FaWhatsapp className="text-brand-primary text-2xl" />
                <span>(43) 99912-4700</span>
              </a>
              <a href="mailto:adrianalocatelli1@gmail.com" className="flex items-center space-x-3 text-lg text-brand-dark hover:text-brand-primary transition-colors">
                <FaEnvelope className="text-brand-primary text-2xl" />
                <span>adrianalocatelli1@exemplo.com</span>
              </a>
              <div className="flex items-start space-x-3 text-lg text-brand-dark">
                <FaMapMarkerAlt className="text-brand-primary text-2xl mt-1" />
                <span>
                  Londrina, PR - Brasil
                </span>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Formulário */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">Envie uma Mensagem</h3>
            <form action="https://formspree.io/f/xvgwrgya" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-brand-muted mb-1">Nome</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-brand-muted mb-1">E-mail</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-brand-muted mb-1">Mensagem</label>
                <textarea name="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all shadow-lg text-lg">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}