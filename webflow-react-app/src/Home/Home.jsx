
import HHead from './pages/HHead'
import HBody from './pages/HBody'
import HService from './pages/HService'
import HProject from './pages/HProject'
import HBService from './pages/HBService'
import HTeam from './pages/HTeam'
import HFooter from './pages/HFooter'


const Home = () => {
    return (
        <div>
            <HHead/>
            <HBody/>
            <HService/>
            <HProject/>
            <HBService/>
            <HTeam/>
            <HFooter/>
        </div>
    )
}

export default Home