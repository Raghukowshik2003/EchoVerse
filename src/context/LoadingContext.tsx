// src/context/LoadingContext.tsx
"use client"; // Add the "use client" directive at the top
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

interface LoadingContextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  hasLoadedOnce: boolean; // Add hasLoadedOnce
  setHasLoadedOnce: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState<boolean>(false);

  useEffect(() => {
    if (!hasLoadedOnce && !isLoading) {
      setHasLoadedOnce(true);
    }
  }, [isLoading, hasLoadedOnce]);

  const value = { isLoading, setIsLoading, hasLoadedOnce, setHasLoadedOnce };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};
