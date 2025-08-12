import React from "react";
import { ArrowTrendingUpIcon, ChartBarSquareIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export function InventoryAgent() {
  const lowStockItems = [
    {
      id: "1",
      name: "Black T-shirt (L)",
      stock: 3,
      reorderPoint: 5,
    },
    {
      id: "2",
      name: "Logo Stickers",
      stock: 10,
      reorderPoint: 20,
    },
    {
      id: "3",
      name: "Hoodie (M)",
      stock: 2,
      reorderPoint: 5,
    },
  ];

  const topSellingItems = [
    {
      id: "1",
      name: "Black T-shirt",
      sold: 24,
      trend: "up",
    },
    {
      id: "2",
      name: "Logo Hoodie",
      sold: 18,
      trend: "up",
    },
    {
      id: "3",
      name: "Cap",
      sold: 12,
      trend: "down",
    },
    {
      id: "4",
      name: "Sticker Pack",
      sold: 10,
      trend: "stable",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Inventory Agent</h1>
        <p className="text-base-content/70">Your AI assistant for stock management and demand forecasting</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Chat Interface */}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <div className="card-body">
            <div className="flex items-center justify-between mb-4">
              <h2 className="card-title">AI Assistant</h2>
              <div className="badge badge-success">Online</div>
            </div>

            <div className="bg-base-200 rounded-lg p-4 h-64 overflow-y-auto mb-4">
              <div className="mb-4">
                <p className="text-xs opacity-60 mb-1">AI Assistant</p>
                <div className="bg-primary text-primary-content p-3 rounded-lg">
                  I&apos;ve analyzed your inventory and have some updates:
                  <ul className="list-disc pl-5 mt-2 text-sm">
                    <li>3 items are running low on stock</li>
                    <li>Based on recent sales, you should reorder Black T-shirts</li>
                    <li>Your Logo Hoodies are selling faster than expected</li>
                  </ul>
                  Would you like me to prepare a restock order?
                </div>
              </div>

              <div className="mb-4 text-right">
                <p className="text-xs opacity-60 mb-1">You</p>
                <div className="bg-base-300 p-3 rounded-lg inline-block">
                  Yes, please prepare a restock order for all low stock items
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs opacity-60 mb-1">AI Assistant</p>
                <div className="bg-primary text-primary-content p-3 rounded-lg">
                  I&apos;ve prepared a restock order:
                  <br />
                  - 20× Black T-shirt (L) - 300 USDC
                  <br />
                  - 50× Logo Stickers - 75 USDC
                  <br />
                  - 15× Hoodie (M) - 450 USDC
                  <br />
                  <br />
                  Total: 825 USDC
                  <br />
                  Should I submit this to your supplier?
                </div>
              </div>
            </div>

            <div className="flex">
              <input
                type="text"
                placeholder="Type a command or question..."
                className="input input-bordered flex-1 rounded-r-none"
              />
              <button className="btn btn-primary rounded-l-none">Send</button>
            </div>
          </div>
        </div>

        {/* Inventory Stats */}
        <div className="space-y-6">
          {/* Low Stock Alert */}
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <h2 className="card-title text-warning">
                  <ExclamationTriangleIcon className="w-5 h-5" />
                  Low Stock Alert
                </h2>
                <button className="btn btn-primary btn-sm">Reorder All</button>
              </div>

              <div className="divide-y divide-base-300">
                {lowStockItems.map(item => (
                  <div key={item.id} className="py-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm opacity-60">Reorder point: {item.reorderPoint}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-warning">{item.stock} left</p>
                      <button className="btn btn-xs btn-outline btn-primary">Reorder</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Selling Items */}
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <h2 className="card-title">
                  <ArrowTrendingUpIcon className="w-5 h-5" />
                  Top Selling Items
                </h2>
                <button className="btn btn-ghost btn-sm">Full Report</button>
              </div>

              <div className="divide-y divide-base-300">
                {topSellingItems.map(item => (
                  <div key={item.id} className="py-3 flex items-center justify-between">
                    <p className="font-medium">{item.name}</p>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{item.sold} sold</p>
                      {item.trend === "up" && <ArrowTrendingUpIcon className="w-4 h-4 text-success" />}
                      {item.trend === "down" && <ArrowTrendingUpIcon className="w-4 h-4 text-error rotate-180" />}
                      {item.trend === "stable" && <ChartBarSquareIcon className="w-4 h-4 text-info" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
