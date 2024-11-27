type CircularProgressBarProps = {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  textColor: string;
  strokeColor: string;
  fillColor: string;
};

const CircularProgressBar = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  textColor = "text-white",
  strokeColor = "#8764FF",
  fillColor = "#EEE9FF",
}: CircularProgressBarProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex justify-center items-center">
      <svg
        width={size}
        height={size}
        className="transform rotate-90" // Rotate the SVG to start progress from top
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle (light) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor} // Light background color
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress Circle (filled) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={fillColor} // Progress color (this can be dynamic or passed as a prop)
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round" // For a smooth rounded end
          className="transition-all duration-300"
        />
      </svg>

      {/* Percentage Text */}
      <div className={`absolute text-xl font-semibold ${textColor}`}>
        {percentage}%
      </div>
    </div>
  );
};

export default CircularProgressBar;
