import React from 'react';
import { CORE_SERVICES } from '../constants';

export const CoreServices: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            四大核心业务，<span className="text-primary-600 border-b-4 border-primary-200">全链路赋能企业</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8">
             <div className="h-2 w-2 rounded-full border-2 border-orange-400"></div>
             <div className="h-px w-64 bg-dashed border-t border-gray-300 border-dashed"></div>
          </div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-sm">
            提供电商合作、工业设计、AI赋能、软件定制四大核心服务，覆盖企业从产品到销售、从设计到数字化的全生命周期需求
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-50 transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3 bg-blue-50 text-primary-600 rounded-lg group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};