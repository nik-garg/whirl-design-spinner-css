
import React, { useState } from "react";
import SpinWheel from "@/components/SpinWheel";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { spinWheel } from "@/utils/wheelUtils";
import { toast } from "@/components/ui/use-toast";

const prizes = [
  "50 Diamonds",
  "75 Tickets",
  "10 Coins",
  "100 Coins", 
  "200 Coins",
  "100 Tickets",
  "50 Diamonds",
  "100 Coins"
];

const Index = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const wheelElement = document.getElementById("wheel");
    const resultIndex = spinWheel(wheelElement);
    
    // Show result after animation finishes
    setTimeout(() => {
      if (resultIndex >= 0) {
        toast({
          title: "Congratulations! 🎉",
          description: `You won ${prizes[resultIndex]}!`,
          duration: 5000,
        });
      }
      setIsSpinning(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="container max-w-md px-4 py-8 flex flex-col items-center">
        <Header />
        <SpinWheel />
        <Button 
          className="mt-6 w-full py-6 text-2xl font-bold rounded-full bg-white text-blue-500 hover:bg-blue-50 transition-colors"
          onClick={handleSpin}
          disabled={isSpinning}
        >
          {isSpinning ? "Spinning..." : "Spin & Win"}
        </Button>
      </div>
    </div>
  );
};

export default Index;
