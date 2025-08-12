import React from "react";
import { BoltIcon, CalendarIcon, UsersIcon } from "@heroicons/react/24/outline";

export function MarketingAgent() {
  const socialMentions = [
    {
      id: "1",
      user: "@crypto_fan",
      message: "Just got my @merchant t-shirt! Love the quality!",
      engagement: 45,
      action: "Reply",
    },
    {
      id: "2",
      user: "@nft_collector",
      message: "Anyone tried @merchant hoodies? Worth it?",
      engagement: 23,
      action: "Reply",
    },
    {
      id: "3",
      user: "@web3_dev",
      message: "Working in my new @merchant gear today",
      engagement: 12,
      action: "Like",
    },
  ];

  const scheduledCampaigns = [
    {
      id: "1",
      name: "Summer Sale",
      date: "Jun 15",
      status: "Scheduled",
    },
    {
      id: "2",
      name: "New Collection Launch",
      date: "Jul 1",
      status: "Draft",
    },
    {
      id: "3",
      name: "Loyalty Rewards",
      date: "Active",
      status: "Running",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Marketing Agent</h1>
        <p className="text-base-content/70">Your AI assistant for promotions and customer engagement</p>
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
                  Good morning! Here are your marketing insights:
                  <ul className="list-disc pl-5 mt-2 text-sm">
                    <li>Your brand mentions are up 23% this week</li>
                    <li>3 influencers mentioned your products</li>
                    <li>Your &quot;Summer Sale&quot; promotion has generated 15 orders</li>
                  </ul>
                  Would you like me to suggest some engagement opportunities?
                </div>
              </div>

              <div className="mb-4 text-right">
                <p className="text-xs opacity-60 mb-1">You</p>
                <div className="bg-base-300 p-3 rounded-lg inline-block">
                  Yes, please suggest some engagement opportunities
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs opacity-60 mb-1">AI Assistant</p>
                <div className="bg-primary text-primary-content p-3 rounded-lg">
                  Here are some opportunities:
                  <br />
                  1. @crypto_fan shared a positive review - I suggest offering them a 10% discount code as thanks
                  <br />
                  2. @nft_collector is considering a purchase - I can automatically respond with product details
                  <br />
                  3. Several customers liked your last post - Should I create a &quot;weekend flash sale&quot; for them?
                  <br />
                  <br />
                  Which would you like me to action?
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

        {/* Marketing Stats */}
        <div className="space-y-6">
          {/* Social Mentions */}
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <h2 className="card-title">
                  <UsersIcon className="w-5 h-5" />
                  Recent Mentions
                </h2>
                <button className="btn btn-ghost btn-sm">View all</button>
              </div>

              <div className="divide-y divide-base-300">
                {socialMentions.map(mention => (
                  <div key={mention.id} className="py-3">
                    <div className="flex justify-between">
                      <p className="font-medium">{mention.user}</p>
                      <div className="flex items-center text-xs opacity-60">
                        <BoltIcon className="w-3 h-3 mr-1 text-warning" />
                        {mention.engagement}
                      </div>
                    </div>
                    <p className="text-sm opacity-70 mt-1">{mention.message}</p>
                    <div className="mt-2 text-right">
                      <button className="btn btn-xs btn-outline btn-primary">{mention.action}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Campaigns */}
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <h2 className="card-title">
                  <CalendarIcon className="w-5 h-5" />
                  Marketing Campaigns
                </h2>
                <button className="btn btn-ghost btn-sm">New Campaign</button>
              </div>

              <div className="divide-y divide-base-300">
                {scheduledCampaigns.map(campaign => (
                  <div key={campaign.id} className="py-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{campaign.name}</p>
                      <p className="text-sm opacity-60">{campaign.date}</p>
                    </div>
                    <div
                      className={`badge ${
                        campaign.status === "Running"
                          ? "badge-success"
                          : campaign.status === "Scheduled"
                          ? "badge-info"
                          : "badge-ghost"
                      }`}
                    >
                      {campaign.status}
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
