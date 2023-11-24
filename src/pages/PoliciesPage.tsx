import { useRef, useEffect } from 'react';
import NavBar from '../components/shared/NavBar/NavBar'

const PoliciesPage = () => {
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
        <div>PoliciesPage</div>
    </div>
  )
}

export default PoliciesPage