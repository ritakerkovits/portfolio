"use client";

import { useState, ReactNode } from "react";

type TabView = "mobile" | "desktop";

// 1. Declare the required properties in a TypeScript interface
interface VersionTabsProps {
  mobileContent: ReactNode;
  desktopContent: ReactNode;
}

// 2. Bind the interface to the component signature so TypeScript can validate them
export default function VersionTabs({ mobileContent, desktopContent }: VersionTabsProps) {
  const [activeTab, setActiveTab] = useState<TabView>("mobile");

  return (
    <div className="w-full transition-colors duration-300">
      {/* ─── TAB NAVIGATION HEADER ─── */}
      <div className="flex items-center w-full font-mono font-medium text-lg border-b border-black/10 dark:border-white/10  transition-colors duration-300 mb-8">
        <button
          onClick={() => setActiveTab("mobile")}
          className={`flex-1 py-4 text-center border-b-4 transition-all duration-200 focus:outline-none ${
            activeTab === "mobile"
              ? "text-[#032015] border-[#032015] dark:text-[#C1FA3C] dark:border-[#C1FA3C]"
              : "text-neutral-600 dark:text-[#FAF8F5]/60 border-transparent hover:text-black dark:hover:text-white"
          }`}
        >
          Mobile version
        </button>

        <button
          onClick={() => setActiveTab("desktop")}
          className={`flex-1 py-4 text-center border-b-4 transition-all duration-200 focus:outline-none ${
            activeTab === "desktop"
              ? "text-[#032015] border-[#032015] dark:text-[#C1FA3C] dark:border-[#C1FA3C]"
              : "text-neutral-600 dark:text-[#FAF8F5]/60 border-transparent hover:text-black dark:hover:text-white"
          }`}
        >
          Desktop version
        </button>
      </div>

      {/* ─── DYNAMIC CONTENT SWITCHER ─── */}
      <div className="w-full">
        {activeTab === "mobile" ? mobileContent : desktopContent}
      </div>
    </div>
  );
}