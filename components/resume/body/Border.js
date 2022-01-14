import Draggable from "react-draggable"
import { useUserDataStore } from "../../../store/store"



const Border = () => {
    const font = useUserDataStore(state => state.font)
    const fontUrl = useUserDataStore(state => state.fontUrl)
    const primary = useUserDataStore(state => state.primary)
    const secondary = useUserDataStore(state => state.secondary)
    const textColor = useUserDataStore(state => state.text)
    const css = useUserDataStore(state => state.css)
    const iconColor = useUserDataStore(state => state.iconColor)
    const iconSize = useUserDataStore(state => state.iconSize)
   
    

    return(
        <div className="resume-border" id="my-node">
            <div className="head-content">
            <h1 className="react-draggable"> Hello this is my resume </h1>
            </div>
            <div className="body-content">     
            <p> Hello this is my resume </p>
            </div>
            <div id="iconz" >
               
            </div>
            <style jsx>{`
            @import url(${fontUrl});
            .resume-border{
                background: ${secondary};
                color: ${textColor};
                font-family: ${font.family};
                opacity: 1 !important;
                
            }
            .head-content{
                ${css}
                position: absolute;
                width: 100%;
                height: 15%;
                top: 0%;
                z-index: 1;
                background-blend-mode: normal;
            }
            .border-content{
                z-index: 2;
                
            }
            #iconz{
                border: 1px solid red;
                cursor: move;
                width: 50px;
                height: 50px;
                color: ${iconColor};
            }
            #iconz svg{
                width: 3em;
                height: ${iconSize}em;
            }
            `}</style>
        </div>
    )
}

export default Border