import React from "react"
import DebriefItem from "./debrief_item"

const DebriefList = ({ debriefs }) => {

    if (!debriefs) return null;
    return (
        <ul className='list-all-debriefs'>
            {
                debriefs.map((debrief) => {
                    return (
                        <DebriefItem key={debrief._id} debrief={debrief} />
                    )
                })
            }
        </ul>
    )
}

export default DebriefList