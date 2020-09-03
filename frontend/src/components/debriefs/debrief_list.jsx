import React from "react"
import DebriefItem from "./debrief_item"

const DebriefList = ({ debriefs }) => {
    debugger
    return (
        <ul>
            {
                debriefs.forEach((debrief) => {
                    return (
                        <DebriefItem key={debrief._id} debrief={debrief} />
                    )
                })
            }
        </ul>
    )
}

export default DebriefList