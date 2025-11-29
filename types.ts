export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  iconType: 'network' | 'list' | 'chart';
}

export interface PricingPlan {
  title: string;
  subtitle: string;
  priceTitle: string;
  features: string[];
  isHighlighted?: boolean;
}

export interface Testimonial {
  highlight: string;
  quote: string;
  author: string;
  role: string;
  avatarInitials: string;
}