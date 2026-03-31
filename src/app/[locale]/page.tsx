import { getTranslations } from 'next-intl/server';

import HeroSection from '@/components/sections/home/HeroSection';
import SocialProofSection from '@/components/sections/home/SocialProofSection';
import SolutionSection from '@/components/sections/home/SolutionSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import ValuePropositionSection from '@/components/sections/home/ValuePropositionSection';
import ProblemStatementSection from '@/components/sections/home/ProblemStatementSection';
import IndicatorsSection from '@/components/sections/home/IndicatorsSection';
import BenefitsSection from '@/components/sections/home/BenefitsSection';
import CtaFinalSection from '@/components/sections/home/CtaFinalSection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Landing' });
  return {
    title: 'Mesure scientifique du risque pesticide',
    description: t('hero_punchline'),
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <SolutionSection />
      <ServicesSection />
      <ValuePropositionSection />
      <ProblemStatementSection />
      <IndicatorsSection />
      <BenefitsSection />
      <CtaFinalSection />
    </>
  );
}
