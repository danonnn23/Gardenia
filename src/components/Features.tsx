import type { ElementType } from 'react';

interface FeaturesProps {
  title: string;
  // Ми кажемо, що icon — це компонент, який можна відрендерити
  icon: ElementType; 
  description?: string; // Додамо ще опис, щоб було цікавіше
}

const Features = ({ title, icon: Icon }: FeaturesProps) => {
  return (
    <div className="h-40 flex flex-col items-center p-6 border border-slate-800 rounded-2xl">
      {/* Ми маємо писати з великої літери <Icon />, щоб React зрозумів, що це компонент */}
      <div className="mb-4 text-emerald-950">
        <Icon size={40} /> 
      </div>
      <h3 className="text-black text-xl font-bold font-serif text-center">{title}</h3>
    </div>
  );
};

export default Features