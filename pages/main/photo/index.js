import Layout from "../../../layout/Layout";
import { useActiveStore } from "../../../store/store";



const photo = () => {

    const setActive = useActiveStore(state => state.setActive)
    setActive('photo')
    
    return(
        <Layout>
        <h3>
            photo
        </h3>
        </Layout>
    )

}

export default photo;