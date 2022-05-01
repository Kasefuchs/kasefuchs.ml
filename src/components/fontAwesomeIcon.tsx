import React, { forwardRef } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

type FontAwesomeIconProps = SvgIconProps & {
  icon: IconDefinition;
};

export const FontAwesomeIcon = forwardRef<SVGSVGElement, FontAwesomeIconProps>((props, ref) => {
  const {
    icon: [width, height, , , svgPathData],
  } = props.icon;

  return (
    <SvgIcon {...props} ref={ref} viewBox={`0 0 ${width} ${height}`}>
      {typeof svgPathData === "string" ? (
        <path d={svgPathData} />
      ) : (
        svgPathData.map((d: string, i: number) => (
          <path key={d} style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />
        ))
      )}
    </SvgIcon>
  );
});
FontAwesomeIcon.displayName = "FontAwesomeIcon";
