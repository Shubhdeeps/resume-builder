import { useRouter } from "next/router"


const Intro = () => {
    const route = useRouter()


    return(
        <div>
            <h2 onClick={() => route.push('/templates')}>welcome to resume builder</h2>
        </div>
    )
}

export default Intro