import React from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function Header() {
  return (
    <div className="flex items-center flex-1">
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/50" />
        <input type="text" placeholder="Search..." className="input input-bordered pl-10 w-80" />
      </div>
      <div className="flex items-center ml-4">
        <button className="btn btn-ghost btn-circle relative">
          <BellIcon className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </button>
      </div>
    </div>
  );
}
