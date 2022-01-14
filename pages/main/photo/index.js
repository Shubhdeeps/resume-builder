import Layout from "../../../layout/Layout";
import { useActiveStore } from "../../../store/store";
import imageToBase64 from 'image-to-base64/browser';
import img from '../../../store/download.jpg'
import { useState } from "react";

const photo = () => {

    const setActive = useActiveStore(state => state.setActive)
    setActive('photo')

    const [base, setBase] = useState()
    
    const handleSubmit = (img) => {
        imageToBase64(img)
        .then(
            (response) => {
                setBase(response);
            }
        )
    }
    return(
        <Layout>
            <div onClick={() => handleSubmit(img)}>
                Hello, click me
            </div>
            {
                base ?
                <img src={`data:image/png; base64, ${base}`}/> : null
            }

        </Layout>
    )

}

export default photo;