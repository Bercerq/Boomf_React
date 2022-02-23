export const getCenterBox = (box) => {
  let boxBoundingRect = box.getBoundingClientRect();

  return {
    x: boxBoundingRect.left + boxBoundingRect.width / 2,
    y: boxBoundingRect.top + boxBoundingRect.height / 2
  }
}

export const rotateDegree = (event, boxCenter) => {
  return Math.atan2(event.pageX - boxCenter.x, -(event.pageY - boxCenter.y)) * (180 / Math.PI)
}