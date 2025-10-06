export default function Hero() {
  return (
    <section className="bg-brand-light">
      <div className="container mx-auto px-6 py-20 text-center flex flex-col items-center">
        {/* Imagem de Perfil */}
        <img 
            // Se a foto estiver em `public/foto-perfil.jpg`, use o caminho "/foto-perfil.jpg"
            src="/adriana.png" // Placeholder de imagem
            alt="Foto da Psicóloga" 
            className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-white mb-6"
        />

        {/* Título Principal */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4 max-w-2xl">
          Um espaço seguro para o seu desenvolvimento pessoal
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg text-brand-muted mb-8 max-w-3xl">
          Ajudo você a encontrar clareza, equilíbrio e bem-estar emocional através de uma abordagem terapêutica acolhedora e personalizada.
        </p>

        {/* Botão de Ação (Call to Action) */}
        <a 
          href="#contato" 
          className="inline-block bg-brand-primary text-white font-bold py-3 px-10 rounded-full hover:bg-opacity-90 transition-all shadow-lg text-lg"
        >
          Agende uma Conversa
        </a>
      </div>
    </section>
  );
}