"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "./button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  isComingSoon?: boolean;
  gradient?: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

const studyDisciplines: Gallery4Item[] = [
  {
    id: "cosmi",
    title: "Cosmi",
    description: "",
    href: "#download",
    image: "cosmi.png",
  },
  {
    id: "coming-soon-1",
    title: "Coming soon",
    description: "",
    href: "#",
    image: "",
    gradient: "bg-gradient-to-tr from-zinc-950 via-zinc-900 to-indigo-950/90",
    isComingSoon: true,
  },
  {
    id: "coming-soon-2",
    title: "Coming soon",
    description: "",
    href: "#",
    image: "",
    gradient: "bg-gradient-to-br from-zinc-950 via-zinc-900 to-teal-950/90",
    isComingSoon: true,
  },
  {
    id: "coming-soon-3",
    title: "Coming soon",
    description: "",
    href: "#",
    image: "",
    gradient: "bg-gradient-to-bl from-zinc-950 via-zinc-900 to-rose-950/90",
    isComingSoon: true,
  },
];

const Gallery4 = ({
  title = "Our Services",
  description = "",
  items = studyDisciplines,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-20 relative z-30 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-zinc-950 leading-[1.1]">
              {title}
            </h2>
            <p className="font-sans text-sm md:text-base text-zinc-600 leading-relaxed">
              {description || "Explore beautiful, approachable, and highly interactive learning interfaces that draw students back to knowledge. Experience a modern platform built with academic dignity."}
            </p>
          </div>

          {/* Right Column: Carousel overlapping / overflowing to the right */}
          <div className="lg:col-span-7 w-full overflow-visible relative">
            <div className="lg:-mr-44 xl:-mr-64 relative">
              <Carousel
                setApi={setCarouselApi}
                opts={{
                  breakpoints: {
                    "(max-width: 768px)": {
                      dragFree: true,
                    },
                  },
                }}
              >
                <CarouselContent className="ml-0">
                  {items.map((item) => (
                    <CarouselItem
                      key={item.id}
                      className="max-w-[320px] pl-[20px] lg:max-w-[420px]"
                    >
                      <div className="group rounded-xl block h-full select-none">
                        <div className="group relative h-full min-h-[24rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/10] border border-zinc-200/65 shadow-xs bg-zinc-950">
                          {item.isComingSoon ? (
                            <>
                              <div className={`absolute inset-0 h-full w-full ${item.gradient}`} />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-semibold tracking-wider text-zinc-300 font-sans uppercase">
                                  Coming Soon
                                </span>
                              </div>
                            </>
                          ) : (
                            <>
                              <a href={item.href} className="absolute inset-0 z-30 cursor-pointer" aria-label={`Proceed to ${item.title}`} />
                              <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-amber-950/20" />
                              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,119,6,0.1),transparent)]" />
                              <div className="absolute inset-0 flex items-center justify-center p-2">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                  }}
                                  className="w-64 h-64 md:w-76 md:h-76 max-w-[95%] max-h-[95%] object-contain"
                                />
                              </div>
                              <div className="absolute inset-0 h-full bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent mix-blend-multiply" />
                              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8 z-20 pointer-events-none">
                                <div className="mb-3 text-xl font-bold tracking-tight">
                                  {item.title}
                                </div>
                                <div className="flex items-center text-xs font-semibold text-white/95">
                                  Download Cosmi{" "}
                                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              
              <div className="mt-8 flex justify-center lg:justify-start gap-2">
                {items.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors cursor-pointer ${
                      currentSlide === index ? "bg-zinc-800" : "bg-zinc-300/40"
                    }`}
                    onClick={() => carouselApi?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
