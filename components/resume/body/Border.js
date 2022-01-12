import { useUserDataStore } from "../../../store/store"



const Border = () => {
    const font = useUserDataStore(state => state.font)
    const fontUrl = useUserDataStore(state => state.fontUrl)
    const primary = useUserDataStore(state => state.primary)
    const textColor = useUserDataStore(state => state.text)



    return(
        <div className="resume-border" id="my-node">
            <h1> Hello this is my resume </h1>
            <p> Hello this is my resume </p>
            <style jsx>{`
            @import url(${fontUrl});

            .resume-border{
                background: ${primary};
                color: ${textColor};
                font-family: ${font.family};
            }
            `}</style>
        </div>
    )
}

export default Border