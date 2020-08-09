import React from "react";
import Preloader from "../components/Common/Preloader/Preloader";

const WithSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div><Preloader/></div>}>
            <Component {...props}/>
        </React.Suspense>
    }
}

export default WithSuspense;