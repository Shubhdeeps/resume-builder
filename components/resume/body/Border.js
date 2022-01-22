import Draggable from "react-draggable"
import { usePesonalDataStore, useUserDataStore } from "../../../store/store"
import React from 'react'
import Template from "../templates/Template"

const Border = () => {
    const font = useUserDataStore(state => state.font)
    const fontUrl = useUserDataStore(state => state.fontUrl)
    const primary = useUserDataStore(state => state.primary)
    const secondary = useUserDataStore(state => state.secondary)
    const textColor = useUserDataStore(state => state.text)
    const iconColor = useUserDataStore(state => state.iconColor)
    const Image = usePesonalDataStore(state => state.image)
    const setPrintRef = useUserDataStore(state => state.setPrintRef)
    const ref = React.useRef();
    
    setPrintRef(ref)
   
    return(
        <div ref={ref} className="resume-border">
              <Template />
             <style jsx>{`
            @import url(${fontUrl});
           
            .resume-border{
                background: ${secondary};
                color: ${textColor};
                font-family: ${font.family};
                opacity: 1 !important;
            }
            .border-content{
                z-index: 2;
                
            }
            `}</style>           
        </div>
    )
}

export default Border