
export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <img src="/logo.png" alt="Codework" className="h-14 w-auto object-contain" />
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Codework. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:contato@codework.com" className="text-sm text-gray-500 hover:text-black transition-colors">
              contato@codework.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
