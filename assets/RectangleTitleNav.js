import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RectangleTitleNav(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200" {...props}>
            <Path
                fill="#fbe413"
                d="M23.31 0h954q19.83 3.38 22.69 23.31v154q-3.37 19.84-23.31 22.69H23.19Q2.74 196.91 0 176.44V23.19Q3.05 2.95 23.31 0z"
            />
        </Svg>
    )
}

export default RectangleTitleNav
