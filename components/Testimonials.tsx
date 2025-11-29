import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="cases">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-1 h-12 bg-primary-200 mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            客户成功案例，<span className="bg-primary-100 text-primary-600 px-2">见证业务增长</span>
          </h2>
          <p className="inline-block bg-primary-50 text-primary-800 text-sm px-4 py-1 rounded-full">
            看看企业客户如何通过禧讯云的全链路服务实现业务增长和数字化转型
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col justify-between">
              <div className="mb-6">
                <div className="bg-blue-100/50 text-primary-800 text-sm p-3 rounded-lg mb-4 leading-relaxed font-medium">
                  "{item.highlight}"
                </div>
                <p className="text-gray-500 text-sm italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200/60">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden shrink-0">
                  {/* Placeholder Avatar */}
                   <span className="text-gray-600 font-bold text-xs">{item.avatarInitials}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.author}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};