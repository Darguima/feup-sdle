'use client';

import SocketCoordinator from "@/lib/coordination/socket-coordinator";
import { createContext, useContext, useRef, ReactNode } from "react";

const SocketCoordinatorContext = createContext<SocketCoordinator | null>(null);

interface SocketCoordinatorProviderProps {
  children: ReactNode;
}

export const SocketCoordinatorProvider = ({
  children,
}: SocketCoordinatorProviderProps) => {
  const defaultUrls = process.env.NEXT_PUBLIC_SEED_URLS?.split(",") || ["ws://localhost:8000/ws"];

  const coordinatorRef = useRef<SocketCoordinator | null>(null);

  if (!coordinatorRef.current) {
    coordinatorRef.current = new SocketCoordinator(defaultUrls);
  }

  return (
    <SocketCoordinatorContext.Provider value={coordinatorRef.current}>
      {children}
    </SocketCoordinatorContext.Provider>
  );
};

export const useSocketCoordinator = (): SocketCoordinator => {
  const coordinator = useContext(SocketCoordinatorContext);

  if (!coordinator) {
    throw new Error("useSocketCoordinator must be used within a SocketCoordinatorProvider");
  }

  return coordinator;
};
