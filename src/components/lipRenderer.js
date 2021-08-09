import React from "react";
// cards
import { parts } from "../parts/parts";
import _r1 from "../assets/images/rarity/_rarity_1.png";
import _r2 from "../assets/images/rarity/_rarity_2.png";
import _r3 from "../assets/images/rarity/_rarity_3.png";

const LipRenderer = ({ lip = null, size = 200, style }) => {
  if (!lip) {
    return null;
  }
  let rarity = _r1;

  if (lip.rarity >= 80) {
    rarity = _r2;
  }
  if (lip.rarity >= 95) {
    rarity = _r3;
  }

  let dnaStr = String(lip.dna);

  while (dnaStr.length < 16) dnaStr = "0" + dnaStr;

  let lipDeatils = {
    bg: dnaStr.substring(0, 2) % 5,
    mask: dnaStr.substring(2, 4) % 5,
    line: dnaStr.substring(4, 6) % 5,
    addon: dnaStr.substring(6, 8) % 5,
    addonMouth1: dnaStr.substring(8, 10) % 5,
    addonMouth2: dnaStr.substring(10, 12) % 5,
    addonMouth3: dnaStr.substring(12, 14) % 5,
    name: lip.name,
  };

  const lipStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
  };

  return (
    <div
      style={{
        minWidth: size,
        minHeight: size,
        background: "blue",
        position: "relative",
        ...style,
      }}
    >
      <img alt={"bg"} src={parts.bg[lipDeatils.bg]} style={lipStyle} />
      <img alt={"mask"} src={parts.mask[lipDeatils.mask]} style={lipStyle} />
      <img alt={"line"} src={parts.line[lipDeatils.line]} style={lipStyle} />
      <img alt={"addon"} src={parts.addon[lipDeatils.addon]} style={lipStyle} />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth1[lipDeatils.addonMouth1]}
        style={lipStyle}
      />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth2[lipDeatils.addonMouth2]}
        style={lipStyle}
      />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth3[lipDeatils.addonMouth3]}
        style={lipStyle}
      />
      <img alt={"rarity"} src={rarity} style={lipStyle} />
    </div>
  );
};

export default LipRenderer;
