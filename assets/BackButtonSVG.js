﻿import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackButton(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 756 1292" {...props}>
            <Path
                stroke="#ae4c64"
                strokeOpacity={0.98}
                strokeWidth={2}
                fill="none"
                vectorEffect="non-scaling-stroke"
                d="M755.29 24.5l-.01 1244.25"
            />
            <Path
                fill="#f6073f"
                d="M755.29 24.5l-.01 1244.25q-1.72 13.69-13.61 17.82-4.1 1.42-12.64 1.42-290.53.01-581.07.01c-12.29 0-22.39-2.28-26.57-14.59-2.79-8.23-1.75-21.96-1.3-32.01q.08-1.87-1.75-2.21-3.65-.68-7.89-1.67-44.92-10.52-89.89-20.79c-10.4-2.38-18.26-6.58-20.56-17.79v-199c3.27-12.09 10.78-14.89 23.04-17.39q48.12-9.79 96.53-19.57a.54.54 84.1 00.43-.53V785.82a1.52 1.51 6.8 00-1.16-1.47Q68.57 772.2 20.52 761.1C10.18 758.72 1.94 754.13 0 742.69V543.94c3.33-12.27 10.96-14.88 23.39-17.46q48.01-9.97 96.08-19.96a.62.61-5.8 00.5-.6l.02-177.24a.8.8-83.7 00-.62-.78c-32.03-7.44-63.98-15.17-96.02-22.23-11.71-2.58-20.89-5.72-23.35-18.73V88.69c2.19-9.57 8.3-14.79 17.68-16.7q50.79-10.35 101.59-20.72a.93.93 83.1 00.74-.95c-.61-15.23-4.35-42.25 17.35-46.06q1.45-.26 13.8-.26h580.02q7.48 0 11.35 1.37 12.43 4.41 12.76 19.13z"
            />
            <Path
                fill="#64948b"
                fillOpacity={0.961}
                d="M755.29 24.5l.71.06v1244.25l-.72-.06.01-1244.25z"
            />
        </Svg>
    )
}

export default BackButton
