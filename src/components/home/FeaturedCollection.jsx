import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col group cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="relative aspect-square bg-[#F7F7F7] mb-4 overflow-hidden rounded-sm">
        <button className="absolute top-3 left-3 z-10 p-1.5 bg-white rounded-full shadow-sm hover:text-red-500 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="flex flex-col flex-1 text-center md:text-left">
        <h3 className="text-[13px] md:text-[14px] font-medium text-gray-800 mb-1 line-clamp-2 h-10">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-[11px] text-gray-500 ml-1">
            {product.rating.toFixed(1)} ({product.reviews}) reviews
          </span>
        </div>

        {product.colors && (
          <div className="flex gap-2 mb-2 justify-center md:justify-start">
            {product.colors.map((color, idx) => (
              <div 
                key={idx}
                className={`w-3 h-3 rounded-full border border-gray-200`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-center md:justify-start gap-2 text-[14px]">
          <span className="font-bold text-[#333]">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-[12px]">₹{product.originalPrice.toLocaleString()}</span>
          )}
          {product.discount && (
            <span className="text-red-600 text-[12px] font-medium">{product.discount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedCollection = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'Kookaburra Pace Cricket Ball White',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', // Placeholder
      rating: 5.0,
      reviews: 3,
      price: 1401,
      originalPrice: 1649,
      discount: 'Save 15%',
    },
    {
      id: 2,
      name: 'SG X ISPL Swing Cricket Ball',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', // Placeholder
      rating: 5.0,
      reviews: 1,
      price: 135,
      originalPrice: 159,
      discount: 'Save 15%',
    },
    {
      id: 3,
      name: 'SG Super 50 Cricket Ball Colour',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', // Placeholder
      rating: 4.5,
      reviews: 12,
      price: 424,
      originalPrice: 499,
      discount: 'Save 15%',
      colors: ['red', 'white']
    },
    {
      id: 4,
      name: 'Versant Player Cricket Batting Arm Guard Size',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', // Placeholder
      rating: 0,
      reviews: 0,
      price: 595,
      originalPrice: 700,
      discount: 'Save 15%',
    },
    {
      id: 5,
      name: 'SS Super Test White Cricket Batting Gloves Mens Size',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', // Placeholder
      rating: 3.0,
      reviews: 2,
      price: 3089,
      originalPrice: 3635,
      discount: 'Save 15%',
    },
    {
      id: 6,
      name: 'MRF Genius Grand Edition Cricket Batting Gloves',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', // Placeholder
      rating: 4.8,
      reviews: 5,
      price: 2450,
      originalPrice: 2899,
      discount: 'Save 15%',
    },
    {
      id: 7,
      name: 'SG Players Edition Cricket Batting Pads',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', // Placeholder
      rating: 5.0,
      reviews: 8,
      price: 4120,
      originalPrice: 4850,
      discount: 'Save 15%',
    },
    {
      id: 8,
      name: 'MRF Legend VK 18 Complete Cricket Kit',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', // Placeholder
      rating: 4.9,
      reviews: 21,
      price: 12500,
      originalPrice: 14500,
      discount: 'Save 15%',
    },
    {
      id: 9,
      name: 'DSC Intense Pro Cricket Batting Pads',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', // Placeholder
      rating: 4.7,
      reviews: 6,
      price: 2850,
      originalPrice: 3350,
      discount: 'Save 15%',
    },
    {
      id: 10,
      name: 'Masuri E-Line Steel Cricket Helmet',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', // Placeholder
      rating: 5.0,
      reviews: 4,
      price: 8490,
      originalPrice: 9990,
      discount: 'Save 15%',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A1D1D] text-center mb-12">
          Featured Collection
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/featured-collection')}
            className="inline-block px-10 py-4 border-2 border-[#4A1D1D] text-[#4A1D1D] font-bold uppercase tracking-widest hover:bg-[#4A1D1D] hover:text-white transition-all duration-300"
          >
            View All Featured
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
