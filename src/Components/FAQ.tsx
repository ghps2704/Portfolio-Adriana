// src/components/Faq.tsx
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
// 1. Importe 'Variants' junto com 'motion'
import { motion, type Variants } from 'framer-motion';

const faqData = [
    // ... (seus dados do FAQ)
  {
    question: 'Como funciona a primeira consulta?',
    answer: 'A primeira consulta é uma conversa inicial, um espaço para nos conhecermos. Você poderá compartilhar o que te traz à terapia, e eu explicarei minha abordagem de trabalho. O objetivo é que você se sinta à vontade e entenda como podemos trabalhar juntos.',
  },
  {
    question: 'Qual a duração e frequência das sessões?',
    answer: 'Cada sessão dura em média 50 minutos. A frequência ideal é semanal, especialmente no início do processo, para que possamos construir um bom vínculo e aprofundar nas questões. Conforme o progresso, podemos ajustar a frequência de acordo com sua necessidade.',
  },
  {
    question: 'As sessões são confidenciais?',
    answer: 'Sim, absolutamente. O sigilo é um dos pilares éticos da psicologia. Tudo o que for discutido na sessão é estritamente confidencial, garantindo um ambiente seguro e de total confiança para você se expressar.',
  },
  {
    question: 'Preciso ter um "problema grave" para fazer terapia?',
    answer: 'Não, de forma alguma. A terapia é um espaço para autoconhecimento, desenvolvimento pessoal e cuidado com a saúde mental. Muitas pessoas buscam terapia para lidar com o estresse do dia a dia, melhorar relacionamentos, tomar decisões importantes ou simplesmente para ter um espaço de escuta e acolhimento.',
  },
];

// 2. Adicione o tipo ': Variants' à nossa constante
const faqItemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // ... (o resto do seu componente continua igual)
    <section id="faq" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 /* ... */ >Perguntas Frequentes</motion.h2>
          <motion.p /* ... */ >Esclarecendo algumas dúvidas comuns sobre o processo terapêutico.</motion.p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <motion.div 
              key={index} 
              className="border-b border-gray-300 pb-4"
              variants={faqItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* ... (resto do item do FAQ) */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left py-2"
              >
                <span className="text-xl font-sans font-semibold text-brand-dark">{item.question}</span>
                <span className="text-brand-primary text-xl">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {openIndex === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-4 text-brand-muted leading-relaxed font-sans"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}