"use client";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

import { usePathname } from "next/navigation";

const steps = [
  { id: 1, title: "Step 1", route: "step-one", link: "/add/step-one" },
  { id: 2, title: "Step 2", route: "step-two", link: "/add/step-two" },
  { id: 3, title: "Step 3", route: "step-three", link: "/add/step-three" },
  { id: 4, title: "Review", route: "review", link: "/add/review" },
];

export default function StepNavigation() {
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop();

  const setCurrentStep = (id: number) => {};

  console.log("currentpathstepnavigation", currentPath);

  return (
    <div>
      <button
        type="button"
        className="mb-4 flex items-center gap-2 text-xl disabled:text-white/50 lg:mb-12 lg:gap-5"
      >
        Back
      </button>
      {/** list of form steps */}
      <div className="relative flex flex-row justify-between lg:flex-col lg:justify-start lg:gap-8">
        {steps.map((step) => (
          <Link
            key={step.id}
            href={step.link}
            className="group z-20 flex items-center gap-3 text-2xl"
            onClick={() => setCurrentStep(step.id)}
            prefetch={false}
          >
            <span
              className={clsx(
                "flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-colors duration-200 lg:h-12 lg:text-lg",
                {
                  "border-none bg-teal-500 text-black group-hover:border-none group-hover:text-black":
                    currentPath === step.route,
                  "border-white/75 bg-gray-900 group-hover:border-white group-hover:text-white text-white/75":
                    currentPath === step.route,
                }
              )}
            >
              {step.id}
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
