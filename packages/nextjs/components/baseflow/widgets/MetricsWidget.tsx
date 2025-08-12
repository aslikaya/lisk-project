import React from "react";
import { ArrowTrendingUpIcon, CurrencyDollarIcon, ShoppingCartIcon, UsersIcon } from "@heroicons/react/24/outline";

export function MetricsWidget() {
  const metrics = [
    {
      id: "1",
      name: "Revenue",
      value: "0.85 ETH",
      change: "+12%",
      icon: <CurrencyDollarIcon className="w-5 h-5 text-primary" />,
    },
    {
      id: "2",
      name: "Orders",
      value: "24",
      change: "+8%",
      icon: <ShoppingCartIcon className="w-5 h-5 text-success" />,
    },
    {
      id: "3",
      name: "Customers",
      value: "18",
      change: "+15%",
      icon: <UsersIcon className="w-5 h-5 text-secondary" />,
    },
    {
      id: "4",
      name: "Conversion",
      value: "3.2%",
      change: "+0.5%",
      icon: <ArrowTrendingUpIcon className="w-5 h-5 text-accent" />,
    },
  ];

  return (
    <div className="card bg-base-100 shadow-sm border border-base-300">
      <div className="card-body">
        <h2 className="card-title mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          {metrics.map(metric => (
            <div key={metric.id} className="stats shadow-sm">
              <div className="stat">
                <div className="stat-figure">{metric.icon}</div>
                <div className="stat-title text-xs">{metric.name}</div>
                <div className="stat-value text-lg">{metric.value}</div>
                <div className="stat-desc text-success">{metric.change}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
