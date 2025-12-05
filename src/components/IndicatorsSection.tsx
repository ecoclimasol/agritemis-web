'use client';

import { useTranslations } from 'next-intl';
import IndicatorCard from './IndicatorCard';

export default function IndicatorsSection() {
    const t = useTranslations('Landing');

    // Définition des 5 indicateurs
    const indicatorsData = [
        { 
            id: 'ARI',
            image: '/indicators/ari.png',
            title: t('indicator_ari_title'), 
            description: t('indicator_ari_short_desc'),
            linkText: t('indicator_learn_more')
        },
        { 
            id: 'CRI',
            image: '/indicators/cri.png',
            title: t('indicator_cri_title'), 
            description: t('indicator_cri_short_desc'),
            linkText: t('indicator_learn_more')
        },
        { 
            id: 'CORI',
            image: '/indicators/cori.png',
            title: t('indicator_cori_title'), 
            description: t('indicator_cori_short_desc'),
            linkText: t('indicator_learn_more')
        },
        { 
            id: 'BRI',
            image: '/indicators/bri.png',
            title: t('indicator_bri_title'), 
            description: t('indicator_bri_short_desc'),
            linkText: t('indicator_learn_more')
        },
        { 
            id: 'WARI',
            image: '/indicators/wari.png',
            title: t('indicator_wari_title'), 
            description: t('indicator_wari_short_desc'),
            linkText: t('indicator_learn_more')
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                    {t('indicators_section_title')}
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    {t('indicators_section_subtitle')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {indicatorsData.map((indicator) => (
                        <IndicatorCard 
                            key={indicator.id}
                            id={indicator.id}
                            image={indicator.image}
                            title={indicator.title}
                            description={indicator.description}
                            linkText={indicator.linkText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}