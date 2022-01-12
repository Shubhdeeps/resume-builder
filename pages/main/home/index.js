
import Layout from "../../../layout/Layout";
import { useActiveStore } from "../../../store/store";

const home = () => {

    const setActive = useActiveStore(State => State.setActive)
    setActive("home")


    return(
        <Layout>
            <div className="home">
                <h3> Home </h3>
            </div>     
        </Layout>
    )
}

export default home;