import { DotIcon } from "lucide-react";
import React from "react";

const Ping = () => {
  return (
    // make the ping dot top right
    <div className="relative ">
      <div className="absolute -top-8 -right-7">
        <DotIcon size={80} className="text-primary-300 animate-ping text-sm" />
      </div>
      <div className="absolute -top-8 -right-7">
        <DotIcon size={80} className="text-primary-300 text-sm" />
      </div>
    </div>
  );
};

export default Ping;
