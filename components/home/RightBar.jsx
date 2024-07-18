import { Bell, User } from "lucide-react";
import React from "react";

const RightBar = () => {
  return (
    <div className="bg-black text-white flex-auto w-1/5">
      <div className="flex items-center gap-2 justify-between pe-4 mt-2">
        <span className="transParentBtn p-3 cursor-pointer">
          <Bell />
        </span>
        <span className="text-yellow-500">Arun Thakur</span>
        <span className="transParentBtn p-3 cursor-pointer">
          <User />
        </span>
      </div>
      <div>
        <h3 className="font-semibold">Continue</h3>
        <span>Card</span>
      </div>
      <div>
        <h3 className="font-semibold">Top Rated</h3>
        <span>Card</span>
      </div>
      <div>
        <h3 className="font-semibold">Genres</h3>
        <span>Card</span>
      </div>
    </div>
  );
};

export default RightBar;
