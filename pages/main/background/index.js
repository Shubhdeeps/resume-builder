import Layout from "../../../layout/Layout";
import { useActiveStore } from "../../../store/store";



const background = () => {

    const setActive = useActiveStore(state => state.setActive)
    setActive('background')
    
    return(
        <Layout>
        <h3>
            background
        </h3>
        </Layout>
    )

}

export default background;