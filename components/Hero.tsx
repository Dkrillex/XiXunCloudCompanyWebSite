import React from 'react';
import { ArrowRight, Info } from 'lucide-react';

interface HeroProps {
  onConsultClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onConsultClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Background decoration - dashed line */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M 50,0 Q 50,200 200,200 T 500,400" 
            fill="none" 
            stroke="#93c5fd" 
            strokeWidth="2" 
            strokeDasharray="8 8"
          />
          <circle cx="500" cy="400" r="4" fill="none" stroke="#f97316" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
          全链路赋能，<span className="text-primary-600">助力企业</span><br />
          <span className="text-primary-600">数字化升级</span>
        </h1>
        
        <p className="text-gray-500 text-sm md:text-base lg:text-lg mb-10 max-w-3xl mx-auto font-light">
          禧讯云 · 电商合作服务 · 全场景工业设计 · AI赋能服务 · 定制化软件与云服务
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onConsultClick}
            className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md font-medium transition-all shadow-lg shadow-primary-200"
          >
            立即咨询 <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-600 border border-gray-200 px-8 py-3 rounded-md font-medium transition-all">
            <Info className="w-4 h-4" /> 了解服务
          </button>
        </div>
      </div>
    </section>
  );
};