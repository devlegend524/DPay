import React, { useEffect, useState } from "react";

export default function TokenAvatar({ url, tick }) {
  const [avatar, setAvater] = useState(false);

  return (
    <>
      {avatar ? (
        <div
          className="rounded-full w-[30px] h-[30px] dark:bg-slate-900 bg-gray-300 flex text-xl font-bold justify-center items-center"
          key={tick}
        >
          {tick}
        </div>
      ) : (
        <img
          key={tick}
          src={url}
          className="rounded-full w-[30px] h-[30px]"
          alt=""
          onError={() => setAvater(true)}
        />
      )}
    </>
  );
}
