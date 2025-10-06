import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const phoneNumber = '5543999124700';
  
  const defaultMessage = 'Olá! Vi seu site e gostaria de mais informações.';
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Entrar em contato pelo WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }} // Delay de 1s para aparecer depois que a página carrega
    >
      <FaWhatsapp className="text-3xl" />
    </motion.a>
  );
}