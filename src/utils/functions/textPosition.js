export const textPosition = (data, wrapperH, wrapperW) => {
  const center = {
    x: data.x + (data.node.clientWidth / 2),
    y: data.y + (data.node.clientHeight / 2)
  }

  const margin = {
    top: center.y - 0,
    left: center.x - 0,
    bottom: wrapperH - center.y,
    right: wrapperW - center.x
  }

  const position = {
    top: {y: 0, x: data.x},
    left: {y: data.y, x: 0},
    bottom: {y: (wrapperH - data.node.clientHeight), x: data.x},
    right: {y: data.y, x: (wrapperW - data.node.clientWidth)}
  }

  const sorted = Object.keys(margin).sort((a, b) => margin[a] - margin[b])
  const nearestSide = sorted[0];

  return position[nearestSide];
}