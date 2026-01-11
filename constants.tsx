
import React from 'react';
import { Target, Zap, TrendingUp, BarChart3, Search, Layout, Settings, Rocket } from 'lucide-react';
import { Service, ProcessStep, Testimonial } from './types';

export const CONTACT_LINKS = {
  PHONE: 'tel:+916377061866',
  WHATSAPP: 'https://alvo.chat/75TI',
  TELEGRAM: 'https://t.me/+1LtcYwrz2KU1MjQ1',
};

export const SERVICES: Service[] = [
  {
    title: 'Meta Ads Management',
    description: 'Data-driven Facebook & Instagram ad campaigns designed to maximize ROI and scale your brand profitably.',
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Funnel Strategy',
    description: 'High-converting sales funnels that turn cold traffic into loyal customers with optimized landing pages.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: 'Scaling Operations',
    description: 'Aggressive scaling strategies for 6 and 7-figure brands without compromising on profitability.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: 'Retargeting Mastery',
    description: 'Advanced custom audience mapping to win back abandoned carts and warm up leads.',
    icon: <Zap className="w-6 h-6" />,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Deep Audit',
    description: 'I analyze your current pixel data, ads, and funnel to identify immediate leakages and opportunities.',
  },
  {
    number: '02',
    title: 'Strategy Forge',
    description: 'Building a custom roadmap including creative strategy, audience testing, and funnel optimization.',
  },
  {
    number: '03',
    title: 'Launch & Test',
    description: 'Initial roll-out with rigorous A/B testing on creatives and copies to find the winners.',
  },
  {
    number: '04',
    title: 'Scale & Dominate',
    description: 'Pushing the winners with increased budget and horizontal scaling to hit your revenue goals.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Founder, GlowSkin eCommerce',
    content: 'Vishnu transformed our ad account. We went from a 1.5x ROAS to a consistent 4.2x in just 3 months.',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    name: 'Amit Sharma',
    role: 'CEO, FinTech Solutions',
    content: 'The lead quality improved drastically. Vishnu understands the nuances of targeting high-ticket clients.',
    avatar: 'https://picsum.photos/seed/amit/100/100',
  },
  {
    name: 'David Miller',
    role: 'Marketing Director, SaaS Pulse',
    content: 'Highly professional and results-driven. The transparency in reporting is something we really value.',
    avatar: 'https://picsum.photos/seed/david/100/100',
  },
];
