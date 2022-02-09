import { useEffect } from "react";

export const useCubePosition = ({ cubeData, setCubeRotateY, currPosition }) =>
  useEffect(() => {
    cubeData.map(({ defaultRotate, position }) => {
      if (position === currPosition) {
        return setCubeRotateY(defaultRotate);
      }
    });
  }, [currPosition, cubeData]);
