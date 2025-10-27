import React from 'react';

const VipGateLogo: React.FC<{ className?: string }> = ({ className = 'h-12' }) => {
  return (
    <div className={`flex items-center ${className}`}>
        <img src="https://i.ibb.co/Mx6NwhHc/IMG-20251026-WA0341.jpg" alt="VIP GATE Logo" className="h-full w-auto" />
    </div>
  );
};

export default VipGateLogo;
