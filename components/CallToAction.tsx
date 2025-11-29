import React from 'react';
import { ArrowRight, Info } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-white border-t border-b border-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-blue-400"></div>
        <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-blue-300"></div>
        <div className="absolute bottom-10 left-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
         <svg className="absolute w-full h-full" preserveAspectRatio="none">
            <path d="M0,50 Q400,100 800,50 T1600,50" fill="none" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="10 10" />
            <circle cx="10%" cy="50" r="4" stroke="#f97316" fill="white" strokeWidth="2" />
            <circle cx="90%" cy="50" r="4" stroke="#f97316" fill="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          准备好开启企业数字化升级了吗？
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
          加入众多选择禧讯云的企业客户行列，全链路赋能助力业务增长，立即咨询获取定制化解决方案
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md font-medium transition-all shadow-md shadow-primary-200">
            立即咨询 <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 bg-primary-50 hover:bg-primary-100 text-primary-600 px-8 py-3 rounded-md font-medium transition-all border border-primary-100">
            <Info className="w-4 h-4" /> 了解服务
          </button>
        </div>
      </div>
    </section>
  );
};