import NavBar from '../components/shared/NavBar/NavBar';
import Welcome from '../components/home/welcome/Welcome';
import MVV from '../components/home/mvv/MVV';
import Footer from '../components/shared/footer/Footer';
import Services from '../components/home/ourServices/Services';
import AboutUsSum from '../components/home/aboutUsSum/AboutUsSum';
import DoctorsAndFeatures from '../components/home/doctorsAndFeatures/DoctorsAndFeatures';
import { useRef, useEffect } from 'react';

const HomePage = () => {
  const scrollToTop = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollElement = scrollToTop.current;
    if (scrollElement) {
      scrollElement.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, []);
  
  return (
    <div ref={scrollToTop}>
        <NavBar />
        <Welcome />
        <DoctorsAndFeatures />
        <MVV />
        <Services />
        <AboutUsSum />
        <Footer />
    </div>
  )
}

export default HomePage