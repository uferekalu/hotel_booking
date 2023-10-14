import React from "react";
import { Meta } from "@/components/layout/Meta";
import { Section } from "@/components/layout/Section";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { AppConfig } from "@/utils/AppConfig";
import { Header } from "@/components/header/Header";

const ExploreCity = () => {
  return (
    <div className="flex flex-col text-gray-600 antialiased">
      <Meta
        title={`${AppConfig.title} | Explore City`}
        description={AppConfig.description}
      />
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
            <div className="mt-3">Explore City</div>
          </div>
        </div>
        <div className="flex flex-col sm:hidden">
          <Header />
          <div className="mt-3">Explore City</div>
        </div>
      </Section>
    </div>
  );
};

export default ExploreCity;
