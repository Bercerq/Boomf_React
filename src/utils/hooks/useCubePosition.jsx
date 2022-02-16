import { useEffect } from "react";

export const useCubePosition = ({ boombData, setCubeRotateY, curCubePosition }) =>
  useEffect(() => {
    boombData.map(({ defaultRotate, position }) => {
      if (position === curCubePosition) {
        return setCubeRotateY(defaultRotate);
      }
    });
  }, [curCubePosition, boombData]);
