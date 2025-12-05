'use client';

import { ArrowRight } from 'lucide-react';
import { COLORS } from '@/config/constants';
import Image from 'next/image';
import Link from 'next/link';

interface IndicatorCardProps {
    id: string;
    image: string;
    title: string;
    description: string;
    linkText: string;
}

const IndicatorCard: React.FC<IndicatorCardProps> = ({ 
    id, 
    image, 
    title, 
    description, 
    linkText 
}) => {
    return (
        <div className="flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
            {/* Image de l'indicateur */}
            <div className="relative w-full h-48 bg-gray-50 group-hover:bg-green-50 transition-colors duration-300">
                <Image 
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Contenu */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Affichage de l'ID pour référence */}
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 text-center mb-1">{id}</span> 

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {description}
                </p>

                {/* Lien "En savoir plus" vers page de formulaire */}
                <div className="mt-6">
                    <Link 
                        href={`/indicator-request/`}
                        className="inline-flex items-center text-sm font-bold hover:underline transition-all"
                        style={{ color: COLORS['agri-green'] }}
                    >
                        {linkText}
                        <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>
            </div>
            
            {/* Bordure basse colorée */}
            <div className="h-1 w-full" style={{ backgroundColor: COLORS['agri-green'] }}></div>
        </div>
    );
};

export default IndicatorCard;