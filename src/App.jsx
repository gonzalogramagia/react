import { BrowserRouter } from "react-router-dom"
import { useEffect, useRef } from "react";

import { About, Contact, Hero, Navbar, Works, Footer, StarsCanvas } from './components';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const scrollTop = useRef(0);

  useEffect(() => {
    const handleMouseDown = (e) => {
      // Prevent drag if clicking on interactive elements like links or buttons
      if (e.target.closest('a, button, input, textarea, select')) return;

      isDragging.current = true;
      startX.current = e.pageX;
      startY.current = e.pageY;
      scrollLeft.current = window.scrollX;
      scrollTop.current = window.scrollY;
      document.body.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX;
      const y = e.pageY;
      const walkX = (x - startX.current) * 2.5; // Scroll speed multiplier
      const walkY = (y - startY.current) * 2.5;
      window.scrollTo(scrollLeft.current - walkX, scrollTop.current - walkY);
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        {/* <Skills /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
