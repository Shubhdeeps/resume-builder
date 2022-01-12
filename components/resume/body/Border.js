import { useUserDataStore } from "../../../store/store"



const Border = () => {
    const font = useUserDataStore(state => state.font)
    const fontUrl = useUserDataStore(state => state.fontUrl)
    const primary = useUserDataStore(state => state.primary)
    const secondary = useUserDataStore(state => state.secondary)
    const textColor = useUserDataStore(state => state.text)
    const css = useUserDataStore(state => state.css)


    
    return(
        <div className="resume-border" id="my-node">
            <div className="head-content">
            <h1> Hello this is my resume </h1>
            </div>
            <div className="body-content">     
            <p> Hello this is my resume </p>
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
            `}</style>
        </div>
    )
}

export default Border