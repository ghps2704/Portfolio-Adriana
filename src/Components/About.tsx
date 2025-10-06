export default function About() {
  return (
    // Usamos 'bg-white' para criar um contraste com as outras seções
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda: Imagem */}
          <div className="w-full h-auto flex justify-center">
            <img 
              // IMPORTANTE: Substitua pela foto profissional da sua sogra
              // Coloque a foto na pasta `public` e use o caminho, ex: "/foto-sobre.jpg"
              src="/adriana.png" // Placeholder
              alt="Foto profissional da psicóloga"
              className="rounded-lg shadow-2xl object-cover w-full max-w-sm"
            />
          </div>

          {/* Coluna da Direita: Texto */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
              Sobre Mim
            </h2>
            
            <div className="text-xl font-serif text-brand-primary">
              <p>Adriana Cristine Locatelli</p>
              <p className="text-lg font-sans text-brand-muted">Psicóloga Clínica - CRP 00/12345</p>
            </div>

            <p className="text-brand-muted leading-relaxed font-sans">
              Minha jornada na psicologia começou com o profundo desejo de compreender a mente humana e ajudar pessoas a encontrarem caminhos mais leves e significativos para suas vidas. Acredito que cada indivíduo possui a capacidade de se transformar e superar desafios.
            </p>
            <p className="text-brand-muted leading-relaxed font-sans">
              Com uma abordagem terapêutica focada no acolhimento e na escuta ativa, meu objetivo é criar um espaço seguro e livre de julgamentos, onde você possa explorar suas emoções, pensamentos e comportamentos com confiança.
            </p>
            <p className="text-brand-muted leading-relaxed font-sans">
              Sou formada pela Universidade [Nome da Universidade], com especialização em [Área de Especialização, ex: Terapia Cognitivo-Comportamental], e estou em constante atualização para oferecer o melhor suporte aos meus pacientes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}