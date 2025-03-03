"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import Loading from "@/app/loading";
import gsap from "gsap";

interface NavigationContextType {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const NavigationContext = createContext<NavigationContextType>({
  isLoading: false,
  startLoading: () => {},
  stopLoading: () => {},
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const loadingRef = useRef(null);
  const contentRef = useRef(null);

  const startLoading = () => setIsLoading(true);
  
  const stopLoading = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }
    });

    // Fade out loading screen
    tl.to(loadingRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    if (isInitialLoad) {
      // Set initial loading screen visibility
      gsap.set(loadingRef.current, { opacity: 1 });

      const handleLoadingComplete = () => {
        stopLoading();
      };

      window.addEventListener('loadingAnimationComplete', handleLoadingComplete);

      return () => {
        window.removeEventListener('loadingAnimationComplete', handleLoadingComplete);
      };
    }
  }, [isInitialLoad]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsLoading(true);
      setIsInitialLoad(true);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <NavigationContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      <div className="relative">
        <div ref={contentRef} className={`${isLoading ? 'invisible' : 'visible'}`}>
          {children}
        </div>
        {isLoading && (
          <div 
            ref={loadingRef}
            className="fixed inset-0 z-[99] bg-primaryColor top-0 left-0 right-0 bottom-0 h-screen overflow-hidden"
          >
            <Loading />
          </div>
        )}
      </div>
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext); 