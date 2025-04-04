
/**
 * Gets a random result for the wheel spin
 * @returns A random degree value between 0-360
 */
export const getRandomSpin = (): number => {
  return Math.floor(Math.random() * 360);
};

/**
 * Spins the wheel to a random position and returns the result
 * @param wheelElement The wheel DOM element to spin
 * @returns The segment index that was landed on
 */
export const spinWheel = (wheelElement: HTMLElement | null): number => {
  if (!wheelElement) return -1;
  
  // Remove any previous spinning animation
  wheelElement.classList.remove("spinning");
  
  // Force a reflow to make sure the class removal takes effect
  void wheelElement.offsetWidth;
  
  // Generate a random spin result (in degrees)
  const randomSpin = getRandomSpin();
  
  // Set the custom property for the random spin angle
  wheelElement.style.setProperty('--random-spin', `${randomSpin}deg`);
  
  // Add the spinning class to start the animation
  wheelElement.classList.add("spinning");
  
  // Calculate which segment the spin landed on (8 segments total = 45 degrees each)
  const segmentIndex = Math.floor(((360 - (randomSpin % 360)) % 360) / 45);
  
  return segmentIndex;
};
