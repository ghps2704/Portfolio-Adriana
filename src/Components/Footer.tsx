export default function Footer() {
  return (
    <footer className="bg-brand-light border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 text-center text-brand-muted font-sans">
        <p>© {new Date().getFullYear()} - Adriana Locatelli | Todos os direitos reservados.</p>
        <p className="text-sm mt-2">
          Desenvolvido com ❤️ para você
        </p>
      </div>
    </footer>
  );
}