import Layout from "../../../layout/Layout";
import { useActiveStore } from "../../../store/store";



const icon = () => {

    const setActive = useActiveStore(state => state.setActive)
    setActive('icons')
    
    return(
        <Layout>
        <h3>
            icon
        </h3>
        </Layout>
    )

}

export default icon;