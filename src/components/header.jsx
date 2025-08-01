
import logo from '../assets/images/logo.png';

function Header() {
    return(
        <header className="bg-gradient-to-r from-white via-blue-50/30 to-white shadow-lg border-b border-blue-100/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-center py-2 sm:py-3 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center relative group">
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    
                    {/* Logo con efectos */}
                    <div className="relative z-10 p-1 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                        <img 
                            src={logo} 
                            alt="Winterhalter Logo" 
                            className="h-12 sm:h-14 lg:h-16 w-auto object-contain drop-shadow-sm"
                        />
                    </div>
                    
                    {/* Línea decorativa */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#009FE3] to-[#00B0F0] group-hover:w-full transition-all duration-300 rounded-full"></div>
                </div>
            </div>
            
            {/* Efectos de fondo sutiles */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute top-0 left-1/4 w-1 h-1 bg-[#009FE3] rounded-full opacity-60 animate-ping"></div>
            <div className="absolute top-2 right-1/3 w-0.5 h-0.5 bg-[#00B0F0] rounded-full opacity-80 animate-ping" style={{animationDelay: '1s'}}></div>
        </header>
    )
}

export default Header;