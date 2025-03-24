import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  oribitDuration,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  oribitDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        style={{
          animationDuration: oribitDuration,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
        className={twMerge(shouldOrbit === true && "animate-spin")}
      >
        <div
          className="flex items-start justify-start  "
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(
              shouldSpin === true && "animate-spin [animation-duration:10s])"
            )}
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              className=" inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
