import React from 'react';
import { ABOUT_FEATURES } from '../constants';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="solutions">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Image Placeholder */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-gray-100 shadow-sm">
               {/* Simulating the paper texture background in the image */}
               <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/white-paper.png')]"></div>
               <div className="scale-150 transform opacity-90">
                 <Logo className="!text-6xl gap-4" />
               </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-primary-600">禧讯云</span> 全链路企业数字化解决方案
              </h2>
              <p className="text-gray-500 leading-relaxed">
                从产品设计到电商销售，从AI赋能到软件定制，提供覆盖企业全生命周期的数字化服务，助力企业快速实现业务增长
              </p>
            </div>

            <div className="space-y-6">
              {ABOUT_FEATURES.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-1 h-auto bg-primary-600 rounded-full flex-shrink-0 mt-1.5 mb-1.5"></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};