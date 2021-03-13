import { ReactNode, createContext, useEffect, useState } from 'react';

import { navigationBarState } from '../utils/navigation/scroll';

type RootContextType = { isPinned?: boolean };

const RootContext = createContext<RootContextType>({
  isPinned: undefined,
});

type RootContextProviderProps = { children: ReactNode };

export function RootContextProvider({ children }: RootContextProviderProps) {
  const limitPosition = 20;
  const [isPinned, setPinned] = useState(false);
  const [lastPosition, setLastPosition] = useState(0);

  const handleScroll = () => {
    const [pinned, position] = navigationBarState({
      limitPosition,
      pinned: isPinned,
      lastPosition,
    });
    setPinned(pinned);
    setLastPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const context = { isPinned };

  return <RootContext.Provider value={context}>{children}</RootContext.Provider>;
}

export default RootContext;
