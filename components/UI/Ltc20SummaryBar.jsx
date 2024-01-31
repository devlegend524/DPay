import React from "react";

export default function Ltc20SummaryBar({ tokenSummary }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 mb-3 gap-2 w-full cs-border rounded-md py-0.5 text-sm">
      <div className="flex gap-2 px-2">
        <p className="text-gray-300">Ticker:</p>
        <p>{tokenSummary?.tokenBalance?.ticker || "--"}</p>
      </div>
      <div className="flex gap-2 px-2">
        <p className="text-gray-300">Transferable:</p>
        <p>{tokenSummary?.tokenBalance.transferableBalance || "--"}</p>
      </div>
      <div className="flex gap-2 px-2">
        <p className="text-gray-300">Available:</p>
        <p>{tokenSummary?.tokenBalance.availableBalance || "--"}</p>
      </div>
      <div className="flex gap-2 px-2">
        <p className="text-gray-300">Overall:</p>
        <p>{tokenSummary?.tokenBalance?.overallBalance || "--"}</p>
      </div>
      <div className="flex gap-2 px-2">
        <p className="text-gray-300">Supply:</p>
        <p>{tokenSummary?.tokenInfo?.totalSupply || "--"}</p>
      </div>
      <div className="flex gap-2 px-2">
        <p className="text-gray-300">Minted:</p>
        <p>{tokenSummary?.tokenInfo?.totalMinted || "--"}</p>
      </div>
    </div>
  );
}
