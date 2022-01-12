import Theme from "../../../components/main/toolbar/Theme";
import Layout from "../../../layout/Layout";
import { useActiveStore } from "../../../store/store";


// primary color is for background 
// secondary color is for text
const primaryColor = [
    {
        color: '#0088C3',
    },
]
const theme = () => {

    const setActive = useActiveStore(State => State.setActive)
    setActive("theme")
    return(
        <Layout>
          <div className="theme-container">
             <div className="theme-box">
                 <h3>Primary</h3>
             </div> 
             <div className="theme-box">
                 <h3>Secondary</h3>
             </div> 
             <div className="theme-box">
                 <h3>Font</h3>
             </div> 
          </div>   
        </Layout>
    )
}

export default theme;