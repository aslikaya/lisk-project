import React from "react";
import { useAccount, useBalance } from "wagmi";
import { ArrowDownIcon, ArrowUpIcon, WalletIcon } from "@heroicons/react/24/outline";

export function WalletWidget() {
  const { address } = useAccount();
  const { data: balance } = useBalance({
    address,
  });

  return (
    <div className="card bg-base-100 shadow-sm border border-base-300">
      <div className="card-body">
        <h2 className="card-title mb-4">
          <WalletIcon className="w-5 h-5" />
          Base Smart Wallet
        </h2>

        {address ? (
          <div className="space-y-4">
            <div className="stat">
              <div className="stat-title">Available Balance</div>
              <div className="stat-value text-lg">
                {balance ? `${parseFloat(balance.formatted).toFixed(2)} ${balance.symbol}` : "0.85 ETH"}
              </div>
            </div>

            <div className="divider"></div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="flex items-center text-sm">
                  <ArrowDownIcon className="w-4 h-4 text-success mr-2" />
                  Received
                </span>
                <span className="text-sm font-medium">+1.5 ETH</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center text-sm">
                  <ArrowUpIcon className="w-4 h-4 text-error mr-2" />
                  Sent
                </span>
                <span className="text-sm font-medium">-0.65 ETH</span>
              </div>
            </div>

            <button className="btn btn-primary btn-sm w-full mt-4">View Transactions</button>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-sm opacity-60">Connect wallet to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
