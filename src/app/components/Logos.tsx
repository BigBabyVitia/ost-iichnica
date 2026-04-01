import React from "react";
import svgPaths from "../../imports/Wireframe2/svg-4dog1t1ofk";

export function LogoIichnitsa({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-[45px] w-[120px] sm:h-[60px] sm:w-[161px] md:h-[104px] md:w-[279px] shrink-0 ${className}`}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 279 104">
        <g clipPath="url(#clip0_1_15724)">
          <path d={svgPaths.p18999800} fill="white" />
          <path d={svgPaths.p33614880} fill="#FF5331" />
          <g>
            <mask height="64" id="mask0_1_15724" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="122" x="156" y="25">
              <g>
                <path d={svgPaths.p12dc7800} fill="white" />
                <path d={svgPaths.p33614880} fill="black" />
              </g>
            </mask>
            <g mask="url(#mask0_1_15724)">
              <path d={svgPaths.p2473bd00} fill="white" />
            </g>
          </g>
          <path d={svgPaths.pb618e00} fill="#FF5331" />
          <path d={svgPaths.p358ce280} fill="white" />
          <path d={svgPaths.p2dd5fe00} fill="#303030" />
          <path d={svgPaths.p723b800} fill="url(#paint0_linear_1_15724)" />
          <path d={svgPaths.p12c3bc00} stroke="white" strokeLinecap="round" strokeWidth="0.386197" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_15724" x1="37.7938" x2="35.713" y1="10.6502" y2="17.3082">
            <stop stopColor="#E7B43E" />
            <stop offset="1" stopColor="#F77E09" />
          </linearGradient>
          <clipPath id="clip0_1_15724">
            <rect fill="white" height="104" width="279" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function LogoWMTAI({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-[18px] w-[87px] sm:h-[24px] sm:w-[116px] md:h-[43px] md:w-[208px] shrink-0 ${className}`}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 43">
        <g>
          <g>
            <path d={svgPaths.p293c8700} fill="#FF5331" />
            <path d={svgPaths.p1d9f7e80} fill="#FF5331" />
            <path d={svgPaths.p6e57a70} fill="#FF5331" />
            <path d={svgPaths.p2b50bc80} fill="white" />
            <path d={svgPaths.p239e72a0} fill="white" />
          </g>
          <g>
            <path d={svgPaths.p3070a900} fill="#FF5331" />
            <path d={svgPaths.p2587ee00} fill="#FF5331" />
            <path d={svgPaths.p3d115700} fill="#FF5331" />
          </g>
        </g>
      </svg>
    </div>
  );
}
