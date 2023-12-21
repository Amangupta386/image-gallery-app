import {Route, Routes} from 'react-router-dom'
import Gallery from "../components/gallery/gallery"

function CustomRoutes(){
    return(
        // <div>hiii</div>
        <Routes>
            <Route path = "/" element= {<Gallery/>}></Route>
            {/* <Route path = "/users/:id" element={</>}></Route> */}
        </Routes>
    )
}

export default CustomRoutes;