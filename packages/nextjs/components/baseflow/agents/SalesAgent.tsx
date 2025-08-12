import React from "react";
import { ChatBubbleLeftRightIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export function SalesAgent() {
  const recentOrders = [
    {
      id: "1",
      customer: "@alex",
      items: "2 T-shirts",
      total: "0.015 ETH",
      status: "Paid",
    },
    {
      id: "2",
      customer: "@sarah",
      items: "1 Hoodie",
      total: "0.025 ETH",
      status: "Processing",
    },
    {
      id: "3",
      customer: "@mike",
      items: "3 Stickers",
      total: "0.005 ETH",
      status: "Shipped",
    },
  ];

  const customerMessages = [
    {
      id: "1",
      customer: "@alex",
      message: "Do you have this in red?",
      time: "5m ago",
    },
    {
      id: "2",
      customer: "@taylor",
      message: "When will my order ship?",
      time: "20m ago",
    },
    {
      id: "3",
      customer: "@jordan",
      message: "Can I get a refund?",
      time: "1h ago",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Sales Agent</h1>
        <p className="text-base-content/70">Your AI assistant for orders, invoices, and customer service</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chat Interface */}
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
                  Good morning! Here&apos;s your sales summary:
                  <ul className="list-disc pl-5 mt-2 text-sm">
                    <li>5 new orders overnight</li>
                    <li>2 customers waiting for responses</li>
                    <li>Revenue: 0.15 ETH (≈$300)</li>
                  </ul>
                  What would you like me to help with today?
                </div>
              </div>

              <div className="mb-4 text-right">
                <p className="text-xs opacity-60 mb-1">You</p>
                <div className="bg-base-300 p-3 rounded-lg inline-block">Process order for @customer - 2 t-shirts</div>
              </div>

              <div className="mb-4">
                <p className="text-xs opacity-60 mb-1">AI Assistant</p>
                <div className="bg-primary text-primary-content p-3 rounded-lg">
                  Processing order for @customer:
                  <br />
                  - 2× T-shirts at 5 USDC each
                  <br />
                  - Total: 10 USDC
                  <br />
                  <br />
                  Payment link generated and sent via Farcaster DM.
                  <br />
                  I&apos;ll notify you when payment is received.
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

        {/* Recent Activity */}
        <div className="space-y-6">
          {/* Recent Orders */}
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <h2 className="card-title">
                  <ShoppingBagIcon className="w-5 h-5" />
                  Recent Orders
                </h2>
                <button className="btn btn-ghost btn-sm">View all</button>
              </div>

              <div className="divide-y divide-base-300">
                {recentOrders.map(order => (
                  <div key={order.id} className="py-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-sm opacity-60">{order.items}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{order.total}</p>
                      <div
                        className={`badge badge-sm ${
                          order.status === "Paid"
                            ? "badge-success"
                            : order.status === "Processing"
                            ? "badge-warning"
                            : "badge-info"
                        }`}
                      >
                        {order.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Messages */}
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <h2 className="card-title">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  Customer Messages
                </h2>
                <button className="btn btn-ghost btn-sm">View all</button>
              </div>

              <div className="divide-y divide-base-300">
                {customerMessages.map(msg => (
                  <div key={msg.id} className="py-3">
                    <div className="flex justify-between items-start">
                      <p className="font-medium">{msg.customer}</p>
                      <p className="text-xs opacity-60 text-right">{msg.time}</p>
                    </div>
                    <p className="text-sm opacity-70 mt-1">{msg.message}</p>
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
