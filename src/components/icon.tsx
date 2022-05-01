import React, { FC } from "react";
import {
  faDiscord,
  faGithub,
  faSpotify,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "./fontAwesomeIcon";
import { SvgIconProps } from "@mui/material";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

type IconProps = SvgIconProps & {
  name: string;
};

export const Icon: FC<IconProps> = (props) => {
  const getIcon = (icon: string) => {
    return {
      spotify: <FontAwesomeIcon {...props} icon={faSpotify} sx={{ color: "#1ED760" }} />,
      twitter: <FontAwesomeIcon {...props} icon={faTwitter} sx={{ color: "#1D9BF0" }} />,
      github: <FontAwesomeIcon {...props} icon={faGithub} />,
      telegram: <FontAwesomeIcon {...props} icon={faTelegramPlane} sx={{ color: "#229ED9" }} />,
      discord: <FontAwesomeIcon {...props} icon={faDiscord} />,
      unknown: <FontAwesomeIcon {...props} icon={faQuestionCircle}/>
    }[icon];
  };
  return getIcon(props.name) || getIcon("unknown")!;
};
