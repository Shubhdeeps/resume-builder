import { useUserDataStore } from "../../../store/store";


const Theme = ({ color }) => {

    const setColor = useUserDataStore(state => state.setColor)

    const handleClick = (secondary, primary) => {
        setColor({
            background: secondary,
            color: primary
        })
    }
    return(
        <> 
        <div className="box" style={{background: color}}>
        </div>
        </ >
    )
}

export default Theme;