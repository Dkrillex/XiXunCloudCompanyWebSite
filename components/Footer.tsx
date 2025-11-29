import React from 'react';
import { Mail, Phone, Cloud } from 'lucide-react';
import { Logo } from './Logo';
import { FOOTER_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="mb-6 relative inline-block">
               <Cloud className="w-6 h-6 absolute -top-3 -right-3 text-gray-200" />
               {/* Small logo text only for footer if needed, or re-use component */}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
               <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-4">核心业务</h4>
                  <ul className="space-y-3">
                    {FOOTER_LINKS.coreServices.map((link) => (
                      <li key={link}><a href="#" className="text-gray-500 hover:text-primary-600 text-xs transition-colors">{link}</a></li>
                    ))}
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-4">服务方案</h4>
                  <ul className="space-y-3">
                    {FOOTER_LINKS.solutions.map((link) => (
                      <li key={link}><a href="#" className="text-gray-500 hover:text-primary-600 text-xs transition-colors">{link}</a></li>
                    ))}
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-4">关于我们</h4>
                  <ul className="space-y-3">
                    {FOOTER_LINKS.about.map((link) => (
                      <li key={link}><a href="#" className="text-gray-500 hover:text-primary-600 text-xs transition-colors">{link}</a></li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-2 lg:col-start-4">
            <h4 className="font-bold text-gray-900 text-sm mb-4">订阅我们的资讯</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="请输入您的邮箱" 
                className="flex-1 bg-white border border-gray-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-50 transition-all"
              />
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded text-sm transition-colors">
                订阅
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-400">
            禧讯云 · © {new Date().getFullYear()} 版权所有
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};