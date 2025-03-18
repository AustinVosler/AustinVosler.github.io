import React from "react";

import SpinningWheel from "../../components/SpinningWheel";

export default function Home() {
  const segments = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  return (
    <div>
      <SpinningWheel segments={segments} />
    </div>
  );
}