// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      xmlSpace={"preserve"}
      viewBox={"0 0 96 96"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 52h62.344L52.888 73.456a4 4 0 105.657 5.656l28.283-28.284c.186-.186.352-.391.498-.609.067-.101.114-.21.172-.315.066-.124.142-.242.195-.373.057-.135.089-.275.129-.415.033-.111.076-.217.099-.331.052-.26.079-.522.079-.785l-.001-.009a4.032 4.032 0 00-.078-.774c-.024-.12-.069-.231-.104-.349-.039-.133-.069-.268-.123-.397-.058-.139-.136-.265-.208-.396-.054-.098-.097-.198-.159-.292a3.94 3.94 0 00-.501-.614L58.544 16.888a4.001 4.001 0 00-5.657 5.657L74.343 44H12a4 4 0 000 8z"
        }
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
