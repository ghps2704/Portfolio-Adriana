export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo ou Nome */}
        <div className="text-2xl font-serif font-bold text-brand-primary">
          <a href="/">Adriana Locatelli</a>
        </div>
        
        {/* Links de Navegação */}
        <ul className="hidden md:flex space-x-8 text-lg font-sans text-brand-dark">
          <li><a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre</a></li>
          <li><a href="#servicos" className="hover:text-brand-primary transition-colors">Serviços</a></li>
          <li><a href="#contato" className="hover:text-brand-primary transition-colors">Contato</a></li>
        </ul>

        {/* Botão para Agendamento (opcional, bom para destaque) */}
        <a href="#contato" className="hidden md:inline-block bg-brand-primary text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all shadow">
          Agendar
        </a>
      </nav>
    </header>
  );
}