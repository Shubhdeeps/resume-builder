import { useUserDataStore } from "../../../store/store";
import TemplateOne from "./TemplateOne";

const Template = ({ children }) => {
    const template = useUserDataStore(state => state.templateNumber)
    let temp;
    switch(template){
        case 0: 
        temp = <TemplateOne />
        break;

        case 1: 
        temp = <TemplateTwo />
        break;       
    }
    return(
        <div className="template">
          {temp}
         { children }
        </div>
     )
}

export default Template;