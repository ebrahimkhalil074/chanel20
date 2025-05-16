// context/SessionContext.tsx
import { createContext, useContext, ReactNode } from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

type SessionContextType = {
  session: Session | null;
  status: "loading" | "authenticated" | "unauthenticated";
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const useCustomSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useCustomSession must be used within a SessionContextProvider");
  }
  return context;
};

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  return (
    <SessionContext.Provider value={{ session, status }}>
      {children}
    </SessionContext.Provider>
  );
};
