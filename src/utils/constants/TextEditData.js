import FontIcon from "./../assets/svg/FontIcon.svg";
import AddText from "./../assets/svg/AddText.svg";
import Colour from "./../assets/svg/Colour.svg";
import AlignmentCenter from "./../assets/svg/AlignmentCenter.svg";
import AlignmentLeft from "./../assets/svg/AlignmentLeft.svg";
import AlignmentRight from "./../assets/svg/AlignmentRight.svg";

export const editOptions = [
  { icon: FontIcon, text: "Font", component: "" },
  { icon: AddText, text: "Size", component: "" },
  { icon: Colour, text: "Colour", component: "" },
  { icon: AlignmentCenter, text: "Alignment", component: "" },
];

export const font = [
  { family: "Abril Fatface" },
  { family: "Futura" },
  { family: "Great Vibes" },
  { family: "Henny Penny" },
  { family: "IBM Plex Mono" },
];

export const background = [
  "#FF4130",
  "#FFAA00",
  "#0A74FF",
  "#1FD160",
  "#2EDBE3",
  "#FF328B",
  "#A3A3A3",
  "#222222",
];

export const alignmentIcon = [
  { icon: AlignmentCenter, side: "center" },
  { icon: AlignmentLeft, side: "left" },
  { icon: AlignmentRight, side: "right" },
];
