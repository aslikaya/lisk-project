import React from "react";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

export function MiniAppWidget() {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-300">
      <div className="card-body">
        <h2 className="card-title mb-4">
          <DevicePhoneMobileIcon className="w-5 h-5" />
          Farcaster Mini App
        </h2>
        <div className="text-center py-8">
          <div className="avatar placeholder mb-4">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
              <span className="text-xl">🛍️</span>
            </div>
          </div>
          <p className="text-sm opacity-60 mb-4">Your storefront is live on Farcaster</p>
          <div className="stats stats-vertical shadow-sm text-center">
            <div className="stat">
              <div className="stat-value text-lg">12</div>
              <div className="stat-desc">Active Sessions</div>
            </div>
            <div className="stat">
              <div className="stat-value text-lg">3</div>
              <div className="stat-desc">Recent Orders</div>
            </div>
          </div>
          <button className="btn btn-primary btn-sm mt-4">View Analytics</button>
        </div>
      </div>
    </div>
  );
}
