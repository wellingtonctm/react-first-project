import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'

const LayoutDashboard = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet>
            </Outlet>
        </div>
    )
}

export default LayoutDashboard;