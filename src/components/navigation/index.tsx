import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-100 shadow-lg justify-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/products" className="text-xl font-bold text-gray-800 mr-4">
            Product App
          </Link>
          
          <div className="flex space-x-4">
            <Link 
              to="/products" 
              className={`px-3 py-2 rounded-md ${
                location.pathname === '/products' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Все продукты
            </Link>
            <Link 
              to="/create-product" 
              className={`px-3 py-2 rounded-md ${
                location.pathname === '/create-product' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Создать продукт
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;