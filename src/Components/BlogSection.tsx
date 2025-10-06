import { motion, type Variants } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// Dados de exemplo para os artigos. No futuro, isso poderia vir de um CMS.
const postsData = [
  {
    category: 'Autoconhecimento',
    title: '5 Passos Para Lidar Com a Ansiedade no Dia a Dia',
    excerpt: 'A ansiedade é uma emoção natural, mas quando se torna constante, pode atrapalhar. Veja algumas estratégias práticas para gerenciá-la.',
    imageUrl: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=870&auto=format&fit=crop',
    link: '#', // No futuro, este link levaria para a página do artigo
  },
  {
    category: 'Relacionamentos',
    title: 'Comunicação Não-Violenta: Como Melhorar Seus Relacionamentos',
    excerpt: 'Aprender a se comunicar de forma empática e clara é a chave para construir relações mais saudáveis e duradouras, seja no amor, na família ou no trabalho.',
    imageUrl: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=870&auto=format&fit=crop',
    link: '#',
  },
  {
    category: 'Carreira',
    title: 'Síndrome de Burnout: Identificando os Sinais de Esgotamento',
    excerpt: 'O esgotamento profissional, ou Burnout, é um problema sério. Saiba identificar os primeiros sinais e o que fazer para cuidar da sua saúde mental no trabalho.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=871&auto=format&fit=crop',
    link: '#',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">Artigos e Reflexões</h2>
          <p className="text-lg text-brand-muted mt-2">Um espaço com conteúdos para te ajudar na sua jornada.</p>
        </div>

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsData.map((post, index) => (
            <motion.div
              key={index}
              className="bg-brand-background rounded-lg shadow-lg overflow-hidden flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15 }}
            >
              <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-brand-primary mb-2">{post.category}</p>
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-3 flex-grow">{post.title}</h3>
                <p className="text-brand-muted font-sans mb-4">{post.excerpt}</p>
                <a href={post.link} className="mt-auto font-bold text-brand-primary hover:text-green-800 transition-colors flex items-center">
                  Leia Mais
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}