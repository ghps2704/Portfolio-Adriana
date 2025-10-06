import { motion, type Variants } from 'framer-motion';

const servicesData = [
  // ... (seus dados de serviço)
  {
    title: 'Terapia Individual',
    description: 'Um processo focado em autoconhecimento, gestão de emoções e resolução de conflitos pessoais.'
  },
  {
    title: 'Terapia de Casal',
    description: 'Um espaço para fortalecer a comunicação, a conexão e resolver desafios no relacionamento.'
  },
  {
    title: 'Orientação Vocacional',
    description: 'Apoio na escolha ou transição de carreira com base em seus interesses, habilidades e propósito.'
  },
];

// 2. Adicione o tipo ': Variants' à nossa constante
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-brand-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">Como Posso Ajudar</h2>
          <p className="text-lg text-brand-muted mt-2">Conheça as principais áreas da minha atuação.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">{service.title}</h3>
              <p className="font-sans text-brand-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}