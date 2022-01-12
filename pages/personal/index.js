// a page for the adding all the personal details.
// this page should not be shown if user has already added his or her personal details. use a boolean to check if users has already added his personal details.

import { Link } from "@mui/material"


const personal = () => {
    return(
        <div>
            <Link href='/main/home'>
            <h3> Personal </h3>
            </Link>
        </div>
    )
}

export default personal