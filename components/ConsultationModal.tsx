import React from 'react';
import { X } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-auto transform transition-all">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">扫码咨询</h3>
          <p className="text-gray-500 text-sm mb-6">微信扫描下方二维码，添加专属顾问</p>
          
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 inline-block mb-4">
            <img 
              src="/assets/QRCode.png" 
              alt="咨询二维码" 
              className="w-48 h-48 object-contain mx-auto"
            />
          </div>
          
          <div className="space-y-1">
            <p className="text-xs text-gray-400">
              工作时间：周一至周五 9:00 - 18:00
            </p>
            <p className="text-xs text-gray-400">
              专业团队一对一为您服务
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};