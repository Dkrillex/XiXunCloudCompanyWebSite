import React from 'react';
import { Cloud } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 font-bold text-2xl text-primary-600 ${className}`}>
      <div className="relative">
        <Cloud className="w-8 h-8 fill-primary-100 stroke-primary-600" strokeWidth={2} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-2 border-b-2 border-primary-600 rounded-full" />
      </div>
      <span>禧讯云</span>
    </div>
  );
};