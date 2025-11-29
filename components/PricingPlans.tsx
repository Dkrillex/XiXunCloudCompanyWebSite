import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

interface PricingPlansProps {
  onConsultClick: () => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ onConsultClick }) => {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              选择你的 <span className="text-primary-600">服务方案</span>
            </h2>
            <p className="text-gray-500 max-w-2xl">
              灵活的服务模式适配不同需求，无论是单一服务还是打包套餐，都能找到合适的解决方案
            </p>
          </div>
          {/* Decorative dashed line */}
          <div className="hidden md:flex flex-1 items-center justify-end px-8 opacity-30">
             <div className="w-2 h-2 rounded-full border border-orange-400 bg-white"></div>
             <div className="h-px w-full border-t border-dashed border-gray-400"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.isHighlighted 
                  ? 'bg-white shadow-xl ring-1 ring-primary-100' 
                  : 'bg-gray-100/50 hover:bg-white hover:shadow-lg'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-500 text-sm">{plan.subtitle}</p>
              </div>

              <div className="mb-8">
                <div className="text-3xl font-bold text-gray-900 mb-1">{plan.priceTitle}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 rounded-full p-0.5">
                      <Check className="w-3 h-3 text-primary-600" strokeWidth={3} />
                    </div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={onConsultClick}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.isHighlighted
                    ? 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                立即咨询
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};