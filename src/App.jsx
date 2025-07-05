import Header from './component/Header'
import LocomotiveScroll from 'locomotive-scroll';
import Strips from './component/Strips'
import Portfolios from './component/Portfolios'
import Disciplines from './component/Disciplines'
import Blogs from './component/Blogs'
import Home from './pages/Home'



const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  return (
    <>
    <Header />
    <Home />
    <Strips />
    <Portfolios/>
    <Disciplines />
    <Blogs />
    </>
  )
}

export default App