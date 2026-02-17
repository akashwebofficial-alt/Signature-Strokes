import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const menuItems = [
    { 
      name: 'Bats', 
      hasDropdown: true,
      megaMenu: {
        brands: {
          logos: [
            { name: 'SG', src: '/assets/images/hero2/Sg_Logo.svg' },
            { name: 'Gray-Nicolls', src: '/assets/images/hero2/GrayNicolls_Logo.svg' },
            { name: 'MRF', src: '/assets/images/hero2/Mrf_Logo.svg' },
            { name: 'SS', src: '/assets/images/hero2/SS.svg' },
          ],
          links: ['SG', 'SS', 'DSC', 'Gortonshire', 'Gray Nicolls', 'View all']
        },
        sizes: {
          items: [
            { label: '3', height: 'h-16' },
            { label: '4', height: 'h-20' },
            { label: '5', height: 'h-24' },
            { label: '6', height: 'h-28' },
            { label: 'H', height: 'h-32' },
            { label: 'SH', height: 'h-32' },
            { label: 'LH', height: 'h-36' },
          ],
          links: ['Senior', 'Junior']
        },
        willow: {
          links: ['English Willow', 'Kashmir Willow']
        }
      }
    },
    { 
      name: 'Protection', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'PADS',
            image: '/assets/images/protection/pads.png',
            links: ['Batting Pads', 'Wicket Keeping Pads']
          },
          {
            title: 'GLOVES',
            image: '/assets/images/protection/gloves.png',
            links: ['Batting Gloves', 'Wicket Keeping Gloves', 'Inner Gloves']
          },
          {
            title: 'HELMETS',
            image: '/assets/images/protection/helmets.png',
            links: ['Titanium Grill', 'Steel Grill']
          },
          {
            title: 'GUARDS',
            image: '/assets/images/protection/guards.png',
            links: ['Abdominal Guard', 'Chest Guard', 'Thigh Guard', 'Elbow Guard']
          }
        ]
      }
    },
    { 
      name: 'Kitbags', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'DUFFLE CRICKET KITBAGS',
            image: '/assets/images/kitbags/duffle.png',
            links: []
          },
          {
            title: 'TROLLEY CRICKET KITBAGS',
            image: '/assets/images/kitbags/trolley.png',
            links: []
          }
        ]
      }
    },
    { 
      name: 'Clothings', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'CAPS / HATS',
            image: '/assets/images/clothings/caps-hats.png',
            links: []
          },
          {
            title: 'CRICKET WHITES',
            image: '/assets/images/clothings/cricket-whites.png',
            links: []
          },
          {
            title: 'SOCKS',
            image: '/assets/images/clothings/socks.png',
            links: []
          },
          {
            title: 'TRUNK / BRIEFS',
            image: '/assets/images/clothings/trunk-briefs.png',
            links: []
          }
        ]
      }
    },
    { 
      name: 'Balls', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'RED CRICKET BALLS',
            image: '/assets/images/balls/red-ball.png',
            links: []
          },
          {
            title: 'WHITE CRICKET BALLS',
            image: '/assets/images/balls/white-ball.png',
            links: []
          },
          {
            title: 'PINK CRICKET BALLS',
            image: '/assets/images/balls/pink-ball.png',
            links: []
          },
          {
            title: 'TRAINING CRICKET BALLS',
            image: '/assets/images/balls/training-ball.png',
            links: []
          }
        ]
      }
    },
    { 
      name: 'Shoes', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'BATTING CRICKET SHOES',
            image: '/assets/images/shoes/batting.png',
            links: []
          },
          {
            title: 'BOWLING CRICKET SHOES',
            image: '/assets/images/shoes/bowling.png',
            links: []
          }
        ]
      }
    },
    { 
      name: 'Accessories', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'SUNGLASSES',
            image: '/assets/images/accessories/sunglasses.png',
            links: []
          },
          {
            title: 'BAT CARE',
            image: '/assets/images/accessories/bat-care.png',
            links: []
          },
          {
            title: 'TRAINING',
            image: '/assets/images/accessories/training.png',
            links: []
          }
        ]
      }
    },
    { 
      name: 'Kit Packages', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'SENIOR COMPLETE KIT',
            image: '/assets/images/kit-packages/senior.png',
            links: []
          },
          {
            title: 'JUNIOR COMPLETE KIT',
            image: '/assets/images/kit-packages/junior.png',
            links: []
          }
        ]
      }
    },
    { name: 'Sale', isSpecial: true },
  ];

  return (
    <nav className="w-full border-t border-b border-gray-100 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center gap-8">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => item.name === 'Sale' && navigate('/sale')}
              className="group flex items-center gap-1 cursor-pointer font-medium text-[15px] hover:text-[#002B49] transition-colors py-4"
            >
              <div className="flex items-center gap-1">
                <span className={item.isSpecial ? 'text-red-600 font-bold' : 'text-gray-800'}>
                  {item.name}
                </span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform" />}
              </div>
              
              {/* Mega Menu for Bats, Protection, Kitbags, Clothings, Balls, Shoes, Accessories or Kit Packages */}
              {item.hasDropdown && (item.name === 'Bats' || item.name === 'Protection' || item.name === 'Kitbags' || item.name === 'Clothings' || item.name === 'Balls' || item.name === 'Shoes' || item.name === 'Accessories' || item.name === 'Kit Packages') && (
                <div className="absolute top-[100%] left-0 w-full bg-white shadow-[0_40px_80px_rgba(0,0,0,0.15)] border-t border-gray-100 hidden group-hover:block z-20 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="max-w-7xl mx-auto px-8 py-6 flex gap-6 justify-center max-h-[350px] overflow-y-auto scrollbar-hide bg-white relative border-b border-gray-50">
                    
                    {/* Bats Mega Menu */}
                    {item.name === 'Bats' && (
                      <>
                        {/* Shop By Brand */}
                        <div className="flex-1 max-w-[200px]">
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            {item.megaMenu.brands.logos.map(logo => (
                              <div key={logo.name} className="h-10 flex items-center justify-center p-1">
                                <img src={logo.src} alt={logo.name} className="max-h-full object-contain pointer-events-none" />
                              </div>
                            ))}
                          </div>
                          <h3 className="text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-4 uppercase text-center">SHOP BY BRAND</h3>
                          <ul className="space-y-2 text-center">
                            {item.megaMenu.brands.links.map(link => (
                              <li key={link} className={`text-[14px] cursor-pointer hover:text-[#002B49] transition-colors ${link === 'View all' ? 'font-bold text-[#4A1D1D]' : 'text-gray-600'}`}>{link}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Shop By Size */}
                        <div className="flex-1 max-w-[300px] text-center border-l border-gray-100 pl-8">
                          <div className="flex items-end justify-center gap-3 mb-4 h-20">
                            {item.megaMenu.sizes.items.map((size, idx) => (
                              <div key={idx} className="flex flex-col items-center gap-2">
                                <span className="text-[10px] font-bold text-gray-900">{size.label}</span>
                                <div className={`w-[8px] ${size.height} bg-[#E8D5B5] rounded-t-sm relative shadow-sm`}>
                                  <div className="absolute top-0 left-0 w-full h-[35%] bg-[#D4C4A8] rounded-t-sm" />
                                </div>
                              </div>
                            ))}
                          </div>
                          <h3 className="text-[11px] font-bold text-gray-400 tracking-[0.25em] mb-6 uppercase">Shop By Size</h3>
                          <ul className="space-y-3">
                            {item.megaMenu.sizes.links.map(link => (
                              <li key={link} className="text-[15px] text-gray-600 cursor-pointer hover:text-[#002B49] transition-colors">{link}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Shop By Willow */}
                        <div className="flex-1 max-w-[300px] text-center border-l border-gray-100 pl-8">
                          <div className="flex items-center justify-center gap-4 mb-4 h-20">
                            <div className="flex gap-3 items-end">
                              <div className="w-8 h-24 bg-[#E8D5B5] border border-gray-200/50 rounded-sm shadow-sm transform -rotate-6" />
                              <div className="w-8 h-28 bg-[#E8D5B5] border border-gray-200/50 rounded-sm shadow-sm" />
                              <div className="w-8 h-24 bg-[#E8D5B5] border border-gray-200/50 rounded-sm shadow-sm transform rotate-6" />
                            </div>
                          </div>
                          <h3 className="text-[11px] font-bold text-gray-400 tracking-[0.25em] mb-6 uppercase">Shop By Willow</h3>
                          <ul className="space-y-3">
                            {item.megaMenu.willow.links.map(link => (
                              <li key={link} className="text-[15px] text-gray-600 cursor-pointer hover:text-[#002B49] transition-colors">{link}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

                    {/* Protection, Kitbags, Clothings, Balls, Shoes, Accessories or Kit Packages Mega Menu */}
                    {(item.name === 'Protection' || item.name === 'Kitbags' || item.name === 'Clothings' || item.name === 'Balls' || item.name === 'Shoes' || item.name === 'Accessories' || item.name === 'Kit Packages') && item.megaMenu.sections.map((section, idx) => (
                      <div key={idx} className={`flex-1 max-w-[280px] text-center ${idx !== 0 ? 'border-l border-gray-100 pl-6' : ''}`}>
                        <div className="h-24 mb-3 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                          <img 
                            src={section.image} 
                            alt={section.title} 
                            className="max-h-full object-contain pointer-events-none hover:scale-105 transition-transform" 
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=' + section.title }}
                          />
                        </div>
                        <h3 className="text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-4 uppercase">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.links.map(link => (
                            <li key={link} className="text-[14px] text-gray-600 cursor-pointer hover:text-[#002B49] transition-colors">{link}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-[-15px] left-0 w-full h-[15px] bg-transparent" />
                  <div className="h-6 w-full bg-transparent" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
