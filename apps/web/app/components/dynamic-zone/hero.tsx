"use client";

import React from "react";
import Link from "next/link";

import { Heading } from "../elements/heading";
import { Button } from "../elements/button";
import { Subheading } from "../elements/subheading";

import { motion } from "motion/react";

import ShootingStars from "../decorations/shooting-star";
import StarBackground from "../decorations/star-background";

type CTA = {
  id: number;
  text: string;
  URL: string;
  target?: string;
  variant?: string;
};

export const Hero = ({
  heading,
  sub_heading,
  CTAs,
  // locale,
}: {
  heading: string;
  sub_heading: string;
  CTAs: CTA[];
  // locale: string;
}) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* fade in shooting stars and star background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <StarBackground />
        <ShootingStars />
      </motion.div>
      <Heading
        as="h1"
        className="text-4xl md:text-4xl lg:text-8xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-10 py-6"
      >
        {heading.substring(0, heading.lastIndexOf(" "))}{" "}
        {/* <Cover>{heading.split(" ").pop()}</Cover> */}
        {heading.split(" ").pop()}
      </Heading>
      <Subheading className="text-center mt-2 md:mt-6 text-base md:text-xl text-muted  max-w-3xl mx-auto relative z-10">
        {sub_heading}
      </Subheading>
      <div className="flex space-x-2 items-center mt-8">
        {CTAs &&
          CTAs.map((cta) => {
            return (
              <Button
                key={cta?.id}
                as={Link}
                // href={`/${cta?.URL}`}
                href={`/`}
                {...(cta.variant && {
                  variant: cta.variant as
                    | "outline"
                    | "simple"
                    | "primary"
                    | "muted",
                })}
              >
                {cta.text}
              </Button>
            );
          })}
      </div>
      {/* <div className="absolute inset-x-0 bottom-0 h-80 w-full bg-gradient-to-t from-charcoal to-transparent" /> */}
    </div>
  );
};
