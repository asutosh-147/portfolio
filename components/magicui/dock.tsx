"use client";

import React, { PropsWithChildren, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "mx-auto h-max w-[58px] p-2 flex flex-col items-center gap-2 rounded-2xl border",
);

export const dockSlideLeft: Variants = {
  hidden: {
    x: 100,
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 200,
      duration: 0.4,
      damping: 12,
      velocity: 200,
      bounceDamping: 10,
      delay: 1,
    },
  },
};

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      ...props
    },
    ref,
  ) => {
    const mouseY = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          mouseY: mouseY,
          magnification: magnification,
          distance: distance,
        });
      });
    };

    return (
      <motion.div
        variants={dockSlideLeft}
        initial="hidden"
        animate="visible"
        ref={ref}
        onMouseMove={(e) => mouseY.set(e.clientY)} // Change to clientY
        onMouseLeave={() => mouseY.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), className)}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";


export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseY?: any;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

const DockIcon = ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseY,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mouseY, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };

    // Calculate distance from the mouse to the element's center
    return val - (bounds.y + bounds.height / 2);
  });

  let widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-neutral-400/30",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";


export { Dock, DockIcon, dockVariants };
