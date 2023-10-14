import React from "react";
import { Meta } from "@/components/layout/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { Section } from "@/components/layout/Section";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Header } from "@/components/header/Header";
import CarouselComponent from "@/components/carousel/Carousel";
import Information from "@/components/information/Information";
import TrendingDestinations from "@/components/trendingDestinations/TrendingDestinations";
import BestOffers from "@/components/bestOffers/BestOffers";

export default function Home() {
  return (
    <div className="flex flex-col text-gray-600 antialiased h-full">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Section
        width="w-full"
        height="min-h-screen"
        otherClassName="flex flex-col"
      >
        <div className="hidden sm:flex space-x-4">
          <div className="flex flex-col w-1/6 min-h-screen rounded-lg shadow-lg bg-white p-2">
            <Sidebar />
          </div>
          <div className="flex flex-col w-5/6 min-h-screen pr-3">
            <Header />
            <CarouselComponent />
            <div className="flex justify-center items-center -mt-3 z-50">
              <Information />
            </div>
            <TrendingDestinations />
            <BestOffers />
          </div>
        </div>
        <div className="flex flex-col sm:hidden h-full">
          <Header />
          <CarouselComponent />
          <div className="flex justify-center items-center">
            <Information />
          </div>
          <TrendingDestinations />
          <BestOffers />
        </div>
      </Section>
    </div>
  );
}
