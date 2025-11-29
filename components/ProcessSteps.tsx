import React from 'react';
import { PROCESS_STEPS } from '../constants';

const StepIcon: React.FC<{ type: string }> = ({ type }) => {
  // Custom SVG visualizations for each step
  if (type === 'network') {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full text-orange-400">
        {/* Network nodes */}
        <line x1="40" y1="60" x2="160" y2="60" stroke="#fce7f3" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="40" y1="60" x2="80" y2="30" stroke="#fce7f3" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="80" y1="90" x2="160" y2="60" stroke="#fce7f3" strokeWidth="2" strokeDasharray="4 4" />
        
        <circle cx="40" cy="60" r="4" stroke="currentColor" fill="white" strokeWidth="2" />
        <circle cx="80" cy="30" r="4" stroke="currentColor" fill="white" strokeWidth="2" />
        <circle cx="80" cy="90" r="4" stroke="currentColor" fill="white" strokeWidth="2" />
        <circle cx="160" cy="60" r="4" stroke="currentColor" fill="white" strokeWidth="2" />
        <circle cx="120" cy="60" r="16" fill="#f97316" />
        <text x="120" y="66" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">C</text>
      </svg>
    );
  }
  if (type === 'list') {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* List items */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
           <g key={i} transform={`translate(40, ${25 + i * 14})`}>
             <text x="0" y="0" fontSize="8" fill="#cbd5e1">{i+1}</text>
             <line x1="15" y1="-2" x2={140} y2="-2" stroke={i === 2 || i === 3 ? "#f97316" : "#e2e8f0"} strokeWidth={i === 2 || i === 3 ? "3" : "2"} />
           </g>
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full text-orange-400">
       {/* Chart */}
       <path d="M40,100 L60,80 L80,90 L100,60 L120,70 L140,40 L160,50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
       <circle cx="40" cy="100" r="2" fill="white" stroke="#e2e8f0" />
       <circle cx="60" cy="80" r="2" fill="white" stroke="currentColor" />
       <circle cx="80" cy="90" r="2" fill="white" stroke="currentColor" />
       <circle cx="100" cy="60" r="2" fill="white" stroke="currentColor" />
       <circle cx="120" cy="70" r="2" fill="white" stroke="currentColor" />
       <circle cx="140" cy="40" r="2" fill="white" stroke="currentColor" />
       <circle cx="160" cy="50" r="2" fill="white" stroke="currentColor" />
       
       <rect x="35" y="100" width="10" height="0" fill="#fed7aa" opacity="0.5">
          <animate attributeName="height" from="0" to="20" dur="1s" fill="freeze" />
       </rect>
       <rect x="55" y="80" width="10" height="20" fill="#fed7aa" opacity="0.3" />
       <rect x="95" y="60" width="10" height="40" fill="#fed7aa" opacity="0.3" />
       <rect x="135" y="40" width="10" height="60" fill="#fed7aa" opacity="0.3" />
    </svg>
  );
};

export const ProcessSteps: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 relative">
           <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-16">
              <div className="h-12 w-px border-l border-dashed border-orange-300 mx-auto"></div>
              <div className="w-2 h-2 rounded-full border border-orange-400 mx-auto bg-white"></div>
           </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            3步 <span className="text-primary-600">开启数字化升级</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            从需求沟通到方案落地，禧讯云提供全流程服务支持，助力企业快速实现业务增长
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step) => (
            <div key={step.id} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              {/* Illustration Area */}
              <div className="h-40 mb-6 bg-slate-50 rounded-lg flex items-center justify-center p-4 border border-slate-100">
                <StepIcon type={step.iconType} />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};