import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="flex flex-col group cursor-pointer relative"
    >
      <div className="relative aspect-square bg-white mb-4 overflow-hidden rounded-sm border border-gray-50 shadow-sm">
        {/* Wishlist Icon */}
        <button className="absolute top-3 left-3 z-10 p-1.5 bg-white/80 rounded-full shadow-sm hover:text-red-500 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        
        {/* Sold Out Badge */}
        {product.isSoldOut && (
          <span className="absolute top-3 right-3 z-10 text-[10px] font-bold text-gray-500 uppercase">
            Sold Out
          </span>
        )}

        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110 ${product.isSoldOut ? 'opacity-60' : ''}`}
        />
      </div>
      
      <div className="flex flex-col text-center px-2">
        <h3 className="text-[13px] font-medium text-gray-800 mb-1 line-clamp-2 h-10">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center gap-2 text-[14px]">
          <span className="font-bold text-[#333]">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-[12px]">₹{product.originalPrice.toLocaleString()}</span>
          )}
          {product.discount && (
            <span className="text-red-600 text-[12px] font-semibold">{product.discount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: 'Nike Domain 3 Low Spikes Cricket Shoes',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
      price: 12745,
      originalPrice: 14995,
      discount: 'Save 15%',
      isSoldOut: true,
    },
    {
      id: 2,
      name: 'Nike Domain 3 Low Spikes Cricket Shoes White',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
      price: 12745,
      originalPrice: 14995,
      discount: 'Save 15%',
      isSoldOut: true,
    },
    {
      id: 3,
      name: 'Somi Msd Hitter English Willow Cricket Bat Size Long Blade',
      image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=2000',
      price: 25499,
      originalPrice: 29999,
      discount: 'Save 15%',
      isSoldOut: true,
    },
    {
      id: 4,
      name: 'Somi Exploder English Willow Cricket Bat Size SH',
      image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=2000',
      price: 32299,
      originalPrice: 37999,
      discount: 'Save 15%',
    },
    {
      id: 5,
      name: 'Shrey Meta VR Cricket Batting Combo Thigh Guard Radiant Red',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067',
      price: 2550,
      originalPrice: 3279,
      discount: 'Save 22%',
    },
    {
      id: 6,
      name: 'SG KLR Class English Willow Cricket Bat Size SH',
      image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=2000',
      price: 56000,
      originalPrice: 70000,
      discount: 'Save 20%',
    },
    {
      id: 7,
      name: 'SG Kung Fu Pandya English Willow Cricket Bat Size SH',
      image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=2000',
      price: 56000,
      originalPrice: 70000,
      discount: 'Save 20%',
    },
    {
      id: 8,
      name: 'Adidas 22 Yard Cloud White Aurora Onix Core Black Spikes Cricket Shoes',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
      price: 10199,
      originalPrice: 11999,
      discount: 'Save 15%',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A1D1D] text-center mb-12">
          New Arrivals
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
