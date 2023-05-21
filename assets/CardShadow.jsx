import * as React from "react"
import Svg, { G, Rect, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CardShadow = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)" opacity={0.16}>
      <Rect width={386} height={461} x={10.5} y={2} fill="#000" rx={25} />
    </G>
    <Defs></Defs>
  </Svg>
)
export default CardShadow
