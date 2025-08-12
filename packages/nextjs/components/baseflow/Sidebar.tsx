import React from "react";
import {
  ArrowTrendingUpIcon,
  ChartBarSquareIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  CubeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <ChartBarSquareIcon className="w-5 h-5" />,
    },
    {
      id: "sales",
      label: "Sales Agent",
      icon: <ShoppingCartIcon className="w-5 h-5" />,
    },
    {
      id: "inventory",
      label: "Inventory Agent",
      icon: <CubeIcon className="w-5 h-5" />,
    },
    {
      id: "marketing",
      label: "Marketing Agent",
      icon: <ArrowTrendingUpIcon className="w-5 h-5" />,
    },
    {
      id: "farcaster",
      label: "Farcaster",
      icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Cog6ToothIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-64 bg-base-100 border-r border-base-300 flex flex-col">
      <div className="p-4 border-b border-base-300">
        <h1 className="text-xl font-bold text-primary">BaseFlow Commerce AI</h1>
        <p className="text-xs text-base-content/60">Merchant Operating System</p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                  activeTab === item.id ? "bg-primary text-primary-content" : "text-base-content hover:bg-base-200"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-base-300">
        <div className="flex items-center">
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-8">
              <span className="text-sm">M</span>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">Merchant Store</p>
            <p className="text-xs text-base-content/60">@merchant</p>
          </div>
        </div>
      </div>
    </div>
  );
}
