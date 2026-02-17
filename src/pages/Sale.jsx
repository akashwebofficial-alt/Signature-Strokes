import { ChevronDown, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sale = () => {
  const navigate = useNavigate();
  const brands = [
    { name: 'SG', count: 9 },
    { name: 'SS', count: 8 },
    { name: 'Shrey', count: 1 },
    { name: 'Kookaburra', count: 4 },
    { name: 'BAS Vampire', count: 1 },
    { name: 'DSC', count: 15 },
    { name: 'EM', count: 1 },
    { name: 'Fino', count: 3 },
    { name: 'Forma', count: 1 },
    { name: 'GEM', count: 9 },
    { name: 'GM', count: 6 },
    { name: 'Gortonshire', count: 12 },
    { name: 'New Balance', count: 4 },
    { name: 'Other Brands', count: 3 },
    { name: 'Puma', count: 11 },
    { name: 'Reebok', count: 20 },
    { name: 'SF', count: 13 },
    { name: 'Spartan', count: 1 },
  ];

  const sizes = [
    { name: 'Junior', count: 6 },
    { name: 'Youth', count: 8 },
    { name: 'XS', count: 2 },
    { name: 'S', count: 14 },
    { name: 'M', count: 13 },
    { name: 'L', count: 16 },
    { name: 'XL', count: 13 },
    { name: 'XXL', count: 12 },
    { name: '3XL', count: 2 },
    { name: '26 (5-6 Years)', count: 1 },
    { name: '28 (7-8 Years)', count: 2 },
    { name: '30 (9-10 Years)', count: 2 },
    { name: '32 (11-12 Years)', count: 2 },
    { name: '34 (13-14 Years)', count: 2 },
    { name: 'Adult', count: 15 },
    { name: 'SH', count: 3 },
  ];

  const styles = [
    { name: 'Batting Gloves', count: 19 },
    { name: 'Wicket Keeping Gloves', count: 1 },
    { name: 'Batting Pads', count: 7 },
    { name: 'English Willow', count: 30 },
    { name: 'Kashmir Willow', count: 3 },
    { name: 'Steel Grill', count: 4 },
    { name: 'Thigh Guards', count: 4 },
    { name: 'Bat care', count: 1 },
    { name: 'Batting', count: 11 },
    { name: 'Bowling', count: 10 },
    { name: 'Cricket Whites', count: 8 },
    { name: 'Match Jerseys', count: 5 },
    { name: 'Training', count: 2 },
    { name: 'Duffle Cricket Kitbags', count: 6 },
    { name: 'Red Cricket Ball', count: 1 },
    { name: 'Others', count: 2 },
    { name: 'Cricket clothing', count: 2 },
  ];

  const availability = [
    { name: 'In stock', count: 120 },
    { name: 'Out of stock', count: 32 },
  ];

  const products = [
    {
      id: 1,
      name: 'SF Black Edition Player Edition English Willow Cricket Bat Size SH',
      price: '90,160',
      oldPrice: '1,28,800',
      save: '30%',
      image: 'https://www.cricketershop.com/cdn/shop/files/SF-Black-Edition-Player-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      rating: null
    },
    {
      id: 2,
      name: 'SF SD 42 English Willow Cricket Bat Size SH',
      price: '78,350',
      oldPrice: '1,04,470',
      save: '25%',
      image: 'https://www.cricketershop.com/cdn/shop/files/SF-SD-42-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      rating: null
    },
    {
      id: 3,
      name: 'Gunn & Moore (GM) Chroma Player Edition English Willow Cricket Bat Size SH',
      price: '54,570',
      oldPrice: '90,949',
      save: '40%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Gunn-Moore-GM-Chroma-Player-Edition-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      rating: null
    },
    {
      id: 4,
      name: 'Gunn & Moore (GM) Chroma Signature English Willow Cricket Bat Size SH',
      price: '53,306',
      oldPrice: '71,075',
      save: '25%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Gunn-Moore-GM-Chroma-Signature-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      rating: null
    },
    {
      id: 5,
      name: 'Gunn & Moore (GM) Icon Signature + English Willow Cricket Bat Size SH',
      price: '48,150',
      oldPrice: '65,065',
      save: '26%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Gunn-Moore-GM-Icon-Signature-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      rating: null
    },
    {
      id: 6,
      name: 'DSC Blu PRO English Willow Cricket Bat Size SH',
      price: '45,800',
      oldPrice: '68,360',
      save: '33%',
      image: 'https://www.cricketershop.com/cdn/shop/files/DSC-Blu-PRO-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      rating: null
    },
    {
      id: 7,
      name: 'DSC Condor Patrol English Willow Cricket Bat Size SH',
      price: '36,350',
      oldPrice: '42,765',
      save: '15%',
      image: 'https://www.cricketershop.com/cdn/shop/files/DSC-Condor-Patrol-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      rating: null
    },
    {
      id: 8,
      name: 'Gunn & Moore (GM) Siren Limited Edition English Willow Cricket Bat Size SH',
      price: '32,700',
      oldPrice: '50,300',
      save: '35%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Gunn-Moore-GM-Siren-Limited-Edition-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      rating: null
    },
    {
      id: 9,
      name: 'Gunn & Moore (GM) Prima Excalibur English Willow Cricket Bat Size SH',
      price: '31,350',
      oldPrice: '41,800',
      save: '25%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Gunn-Moore-GM-Prima-Excalibur-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      rating: null
    },
    {
      id: 10,
      name: 'DSC Split 400 English Willow Cricket Bat Size SH',
      price: '25,999',
      oldPrice: '30,580',
      save: '15%',
      image: 'https://www.cricketershop.com/cdn/shop/files/DSC-Split-400-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      rating: 5
    },
    {
      id: 11,
      name: 'DSC Blak 400 English Willow Cricket Bat Size SH',
      price: '23,999',
      oldPrice: '29,999',
      save: '20%',
      image: 'https://www.cricketershop.com/cdn/shop/files/DSC-Blak-400-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      rating: 5
    },
    {
      id: 12,
      name: 'SF Transformation 2.0 English Willow Cricket Bat Size SH',
      price: '22,599',
      oldPrice: '30,130',
      save: '25%',
      image: 'https://www.cricketershop.com/cdn/shop/files/SF-Transformation-2.0-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      rating: null
    },
    {
      id: 13,
      name: 'DSC Intense Speed Navy Cricket Batting Leg Guard Pads',
      price: '3,950',
      oldPrice: '4,935',
      save: '20%',
      image: 'https://www.cricketershop.com/cdn/shop/files/DSC-Intense-Speed-Navy-Cricket-Batting-Leg-Guard-Pads_360x.jpg',
      rating: null
    },
    {
      id: 14,
      name: 'DSC Condor Flite Navy Cricket Batting Leg Guard Pads Size',
      price: '3,835',
      oldPrice: '4,565',
      save: '16%',
      image: 'https://www.cricketershop.com/cdn/shop/files/DSC-Condor-Flite-Navy-Cricket-Batting-Leg-Guard-Pads_360x.jpg',
      rating: null
    },
    {
      id: 15,
      name: 'New Balance NB CK4020 K4 Cricket Rubber Shoes',
      price: '3,835',
      oldPrice: '5,045',
      save: '24%',
      image: 'https://www.cricketershop.com/cdn/shop/files/New-Balance-NB-CK4020-K4-Cricket-Rubber-Shoes_360x.jpg',
      rating: 5
    },
    {
      id: 16,
      name: 'Bas Vampire Players GX 8000 Cricket Kitbag',
      price: '3,715',
      oldPrice: '4,950',
      save: '25%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Bas-Vampire-Players-GX-8000-Cricket-Kitbag_360x.jpg',
      rating: null
    },
    {
      id: 17,
      name: 'SS Ultimate Blue Red Cricket Shoes',
      price: '3,285',
      oldPrice: '4,380',
      save: '25%',
      image: 'https://www.cricketershop.com/cdn/shop/files/SS-Ultimate-Blue-Red-Cricket-Shoes_360x.jpg',
      rating: null
    },
    {
      id: 18,
      name: 'Kookaburra Pro 600 Cricket Helmet Size',
      price: '3,285',
      oldPrice: '4,100',
      save: '20%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Kookaburra-Pro-600-Cricket-Helmet_360x.jpg',
      rating: null
    },
    {
      id: 19,
      name: 'Reebok Excel English Willow Cricket Bat Size 6',
      price: '3,225',
      oldPrice: '7,010',
      save: '54%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Reebok-Excel-English-Willow-Cricket-Bat-Size-6_360x.jpg',
      rating: null
    },
    {
      id: 20,
      name: 'Reebok Re-Volve Tech Cricket Rubber Shoes',
      price: '3,225',
      oldPrice: '4,600',
      save: '30%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Reebok-Re-Volve-Tech-Cricket-Rubber-Shoes_360x.jpg',
      rating: 5
    }
  ];

  return (
    <div className="bg-white">
      {/* Sale Banner */}
      <section className="relative h-[300px] flex items-center justify-center bg-[#0B1219] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/assets/images/sale/smoke-bg.jpg" 
            alt="Smoke Background" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000' }}
          />
        </div>
        <h1 className="relative text-white text-5xl md:text-6xl font-serif tracking-wide text-center">
          End of Season Cricket Sale
        </h1>
      </section>

      <div className="max-w-[1600px] mx-auto px-4 py-12 flex gap-8">
        {/* Filters Sidebar */}
        <aside className="w-64 flex-shrink-0 hidden lg:block">
          <div className="mb-8">
            <h2 className="text-[12px] font-bold text-gray-400 tracking-[0.2em] mb-6 uppercase border-b border-gray-100 pb-2">Filters</h2>
            
            {/* Price Filter */}
            <div className="mb-8">
              <div className="flex items-center justify-between cursor-pointer py-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Price</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="mt-4 px-2">
                <div className="flex justify-between text-[12px] text-gray-600 mb-4">
                  <span>₹0.00</span>
                  <span>₹1,35,000.00</span>
                </div>
                <div className="relative h-1 bg-gray-200 rounded-full">
                  <div className="absolute h-full bg-[#E67E22] rounded-full" style={{ left: '0%', right: '0%' }} />
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-[#E67E22] rounded-full cursor-pointer shadow-sm" />
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-[#E67E22] rounded-full cursor-pointer shadow-sm" />
                </div>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-6 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between cursor-pointer py-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Brand</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="mt-4 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                {brands.map(brand => (
                  <label key={brand.name} className="flex items-center gap-3 mb-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                    <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{brand.name} ({brand.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="mb-6 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between cursor-pointer py-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Size</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="mt-4 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                {sizes.map(size => (
                  <label key={size.name} className="flex items-center gap-3 mb-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                    <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{size.name} ({size.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Style Filter */}
            <div className="mb-6 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between cursor-pointer py-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Style</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="mt-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {styles.map(style => (
                  <label key={style.name} className="flex items-center gap-3 mb-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                    <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{style.name} ({style.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability Filter */}
            <div className="mb-6 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between cursor-pointer py-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Availability</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="mt-4">
                {availability.map(item => (
                  <label key={item.name} className="flex items-center gap-3 mb-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                    <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{item.name} ({item.count})</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex justify-end mb-8">
            <div className="relative inline-block text-left">
              <select className="appearance-none bg-white border border-gray-200 py-2 pl-4 pr-10 text-[13px] focus:outline-none cursor-pointer rounded-sm">
                <option>Price (High to Low)</option>
                <option>Price (Low to High)</option>
                <option>Best Selling</option>
                <option>Newest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div 
                key={product.id} 
                onClick={() => navigate(`/product/${product.id}`)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] bg-[#F7F7F7] mb-4 overflow-hidden rounded-sm">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300x400?text=Cricket+Bat' }}
                  />
                  <button className="absolute top-4 left-4 p-1.5 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="text-[14px] text-gray-800 line-clamp-2 leading-relaxed mb-1 hover:text-black transition-colors">
                  {product.name}
                </h3>
                {product.rating && (
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    <span className="text-[12px] text-gray-500">{product.rating}.0 (1) review</span>
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[15px] font-bold">₹{product.price}</span>
                  <span className="text-[13px] text-gray-400 line-through font-medium">₹{product.oldPrice}</span>
                  <span className="text-[13px] text-red-600 font-bold italic">Save {product.save}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sale;
