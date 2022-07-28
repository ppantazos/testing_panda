import React from "react";
import { VictoryPie } from 'victory';

function Pie(colors:string[], chart_data:object[]):JSX.Element{

    return (
        <>
            <VictoryPie
                colorScale={colors}
                data={chart_data}
                innerRadius={100}
                animate={{
                    duration: 2000
                  }}
            />
        </>
    )
}

export default Pie;