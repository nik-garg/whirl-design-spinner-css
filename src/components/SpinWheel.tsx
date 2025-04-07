
import React from "react";
import "@/styles/spinwheel.css";

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
      {/* Wheel background design - adding circular pattern */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-xl"></div>
      <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-inner"></div>
      
      {/* Wheel with segments */}
      <div 
        id="wheel" 
        className="absolute inset-8 rounded-full overflow-hidden"
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
      <div className="absolute left-1/2 top-1/2 w-16 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg z-20 border-4 border-white">
        <div className="w-10 h-10 bg-blue-700 rounded-full shadow-inner"></div>
      </div>
      
      {/* Pointer */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-8 h-14 bg-gradient-to-b from-blue-400 to-blue-600 clip-triangle-down shadow-lg border-2 border-white"></div>
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
