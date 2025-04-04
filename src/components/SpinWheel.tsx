
import React from "react";

interface SegmentProps {
  value: string;
  icon: React.ReactNode;
  rotate: number;
  color: string;
}

// Define segments for the wheel
const segments: SegmentProps[] = [
  { 
    value: "50", 
    icon: <div className="text-blue-500">💎</div>, 
    rotate: 0, 
    color: "bg-yellow-200" 
  },
  { 
    value: "75", 
    icon: <div className="text-gray-700">🎟️</div>, 
    rotate: 45, 
    color: "bg-yellow-300" 
  },
  { 
    value: "10", 
    icon: <div className="text-blue-400">🎮</div>, 
    rotate: 90, 
    color: "bg-yellow-200" 
  },
  { 
    value: "100", 
    icon: <div className="text-yellow-500">💰</div>, 
    rotate: 135, 
    color: "bg-yellow-300" 
  },
  { 
    value: "200", 
    icon: <div className="text-yellow-500">💰</div>, 
    rotate: 180, 
    color: "bg-yellow-200" 
  },
  { 
    value: "100", 
    icon: <div className="text-gray-700">🎟️</div>, 
    rotate: 225, 
    color: "bg-yellow-300" 
  },
  { 
    value: "50", 
    icon: <div className="text-blue-500">💎</div>, 
    rotate: 270, 
    color: "bg-yellow-200" 
  },
  { 
    value: "100", 
    icon: <div className="text-yellow-500">💰</div>, 
    rotate: 315, 
    color: "bg-yellow-300" 
  },
];

const SpinWheel = () => {
  return (
    <div className="relative w-full max-w-sm aspect-square">
      {/* Wheel outer ring */}
      <div className="absolute inset-0 rounded-full bg-gray-100 shadow-lg"></div>
      
      {/* Wheel with segments */}
      <div 
        id="wheel" 
        className="absolute inset-2 rounded-full overflow-hidden transform transition-all duration-5000 ease-out"
      >
        <div className="w-full h-full relative">
          {segments.map((segment, index) => (
            <WheelSegment
              key={index}
              value={segment.value}
              icon={segment.icon}
              rotate={segment.rotate}
              color={segment.color}
            />
          ))}
        </div>
      </div>
      
      {/* Center dot */}
      <div className="absolute left-1/2 top-1/2 w-12 h-12 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-md z-20">
        <div className="w-8 h-8 bg-blue-600 rounded-full transform rotate-45 shadow-inner"></div>
      </div>
      
      {/* Pointer */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-6 h-12 bg-blue-500 clip-triangle-down shadow-md"></div>
      </div>
    </div>
  );
};

const WheelSegment = ({ value, icon, rotate, color }: SegmentProps) => {
  return (
    <div
      className={`absolute w-1/2 h-1/2 left-1/2 top-0 origin-bottom-left ${color}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="absolute inset-0 border-t border-r border-gray-400 origin-bottom-left" style={{ transform: "rotate(45deg)" }}></div>
      <div className="absolute w-full h-full flex flex-col items-center justify-center" style={{ transform: `rotate(${22.5}deg)` }}>
        <span className="text-yellow-800 text-3xl font-bold transform -rotate-90" style={{ marginLeft: "45%", marginBottom: "30%" }}>
          {value}
        </span>
        <span className="text-2xl transform -rotate-90" style={{ marginLeft: "25%" }}>
          {icon}
        </span>
      </div>
    </div>
  );
};

export default SpinWheel;
