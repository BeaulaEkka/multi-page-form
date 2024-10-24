"use client";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { MoveLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

const steps = [
  { title: "Step One", route: "step-one", link: "/add/step-one" },
  { title: "Step Two", route: "step-two", link: "/add/step-two" },
  { title: "Step Three", route: "step-three", link: "/add/step-three" },
  { title: "Review", route: "review", link: "/add/review" },
];

export default function StepNavigation() {
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop();

  console.log("currentpathstepnavigation", currentPath);

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const step = steps.findIndex((step) => step.route === currentPath);
    setCurrentStep(step);
  }, [currentPath]);

  return (
    <div>
      <Link
        href={steps[currentStep - 1]?.link || steps[0].link}
        className="mb-4 flex items-center gap-2 text-xl text-white/20 lg:mb-12 lg:gap-5 "
      >
        <span>
          <MoveLeft />
        </span>
        Back
      </Link>
      {/** list of form steps */}
      <div className="relative flex flex-row justify-between lg:flex-col lg:justify-start lg:gap-8">
        {steps.map((step, i) => (
          <Link
            key={step.link}
            href={step.link}
            className="group z-20 flex items-center gap-3 text-2xl"
            // onClick={() => setCurrentStep(step)}
            prefetch={true}
          >
            <span
              className={clsx(
                "flex h-8 w-8 items-center justify-center rounded-full border text-sm transition-colors duration-200 lg:h-10 lg:w-10 lg:text-lg text-white",
                {
                  "border-none bg-teal-500 text-black group-hover:border-none group-hover:text-black":
                    currentPath === step.route,
                  "border-white/65  group-hover:border-white group-hover:text-white text-white/75":
                    currentPath !== step.route,
                }
              )}
            >
              {i + 1}
            </span>
            <span
              className={clsx(
                "hidden text-white/75 transition-colors duration-200 group-hover:text-white lg:block",
                {
                  "font-light": currentPath !== step.route,
                  "font-semibold text-white": currentPath === step.route,
                }
              )}
            >
              {step.title}
            </span>
          </Link>
        ))}
        {/**mobile background dashes */}
        <div className="absolute top-4 flex h-1 w-full border-b border-dashed lg:hidden" />
      </div>
    </div>
  );
}
