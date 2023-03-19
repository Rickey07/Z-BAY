import React from "react";
import { Skeleton } from "@mui/material";

const Shimmer = ({ height, shape, width, animation }) => {
  return (
    <Skeleton
      height={height && height}
      variant={shape && shape}
      width={width && width}
      animation={animation && animation}
    />
  );
};

export default Shimmer;
