import { Outlet } from "react-router-dom";
import TopNav from "../components/topnav";

const MainLayout = () => {
    return(
        <div>
            <TopNav/>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;