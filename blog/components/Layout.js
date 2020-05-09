import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Backtotop from './Backtotop'

export default class Layout extends React.Component{
    render(){
        return (
            <>
            <Navbar/>
            <Sidebar/>
            <Backtotop/>
            </>
        );
    }
}