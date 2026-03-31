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

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="border-t border-border" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <SectionDivider />
      <SolutionSection />
      <SectionDivider />
      <ServicesSection />
      <ValuePropositionSection />
      <ProblemStatementSection />
      <SectionDivider />
      <IndicatorsSection />
      <BenefitsSection />
      <CtaFinalSection />
    </>
  );
}
