import React from "react"

export function Logo({ className, ...props }: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="25.660 4978.290 272.349 224.170"
      // Combines external positional spacing styles with dynamic light/dark theme tracking tokens
      className={`
        w-9 h-9 fill-none
        stroke-[#06402B] dark:stroke-[#D4F15E] 
        transition-colors duration-300 ease-out 
        ${className || ""}
      `.trim()}
      {...props}
    >
      <title>Sarah Chen Logo</title>
      <desc>Drawing exported from Concepts: Smarter Sketching</desc>
      
      {/* Group layout wrapper: 
        Removed explicit stroke="#000000" fields from child nodes to let theme tokens cascade down perfectly 
      */}
      <g id="Pen" opacity="1.000" strokeWidth="27.000" strokeLinecap="round" strokeLinejoin="round">
        <path 
          id="STROKE_a0bda554-ff0d-43f1-8118-ded94a7679ea" 
          opacity="1.000" 
          strokeOpacity="1.000" 
          d="M 55.138 5002.021 L 54.937 5002.372 Q 54.488 5004.272 51.407 5024.270 Q 48.327 5044.267 46.840 5062.983 Q 45.353 5081.700 44.896 5091.369 Q 44.439 5101.038 43.794 5107.096 Q 43.149 5113.154 41.271 5134.372 Q 39.392 5155.589 38.611 5166.436 Q 37.830 5177.283 38.155 5183.518 Q 38.480 5189.752 39.492 5195.257 "
        />
        <path 
          id="STROKE_a4dd8e32-51dd-44f6-81b9-edd0665ae3d5" 
          opacity="1.000" 
          strokeOpacity="1.000" 
          d="M 118.130 4994.061 Q 118.140 4994.442 111.768 5009.871 Q 105.397 5025.300 101.028 5034.344 Q 96.658 5043.388 90.368 5056.202 Q 84.077 5069.017 57.007 5123.757 Q 56.694 5123.729 66.062 5117.602 Q 75.429 5111.475 89.753 5103.965 Q 104.076 5096.456 114.965 5090.638 Q 125.854 5084.820 137.799 5077.863 Q 149.744 5070.906 155.778 5066.880 Q 161.812 5062.854 166.438 5058.839 "
        />
        <path 
          id="STROKE_292ff4f2-83a4-44f6-8233-844d7858a540" 
          opacity="1.000" 
          strokeOpacity="1.000" 
          d="M 175.084 4987.198 Q 175.307 4987.856 170.985 5023.447 Q 166.664 5059.038 164.211 5078.718 Q 161.758 5098.398 160.820 5110.141 Q 159.881 5121.883 159.419 5128.669 Q 158.957 5135.456 158.946 5168.260 L 159.301 5171.515 "
        />
        <path 
          id="STROKE_3763217f-8c16-4ded-bb62-e9670b265344" 
          opacity="1.000" 
          strokeOpacity="1.000" 
          d="M 173.437 5007.785 Q 174.497 5005.941 177.066 5002.354 Q 179.636 4998.768 183.656 4996.322 Q 187.675 4993.876 191.884 4993.476 Q 196.093 4993.074 199.732 4995.032 Q 203.371 4996.989 207.064 5002.679 Q 210.757 5008.369 212.290 5019.035 Q 213.824 5029.700 213.311 5037.412 Q 212.798 5045.123 209.436 5055.239 Q 206.073 5065.355 202.585 5072.196 Q 199.096 5079.037 192.966 5087.027 Q 186.836 5095.018 183.562 5099.025 Q 183.623 5098.628 189.138 5096.735 Q 194.653 5094.841 199.342 5092.563 Q 204.032 5090.286 207.462 5088.292 Q 210.892 5086.297 219.463 5080.970 Q 228.033 5075.642 247.940 5067.682 Q 267.847 5059.721 289.278 5054.183 L 290.638 5054.035 "
        />
      </g>
    </svg>
  )
}