import { useUserDataStore } from "../../../store/store"



const Border = () => {
    const font = useUserDataStore(state => state.font)
    const fontUrl = useUserDataStore(state => state.fontUrl)
    const color = useUserDataStore(state => state.color)


    return(
        <div className="resume-border" id="my-node">
            <h1> Hello this is my resume </h1>
            <p> Hello this is my resume </p>
            <style jsx>{`
            @import url(${fontUrl});

            .resume-border{
                background: ${color.background};
                color: ${color.color};
                font-family: ${font.family};
            }
            `}</style>
        </div>
    )
}

export default Border