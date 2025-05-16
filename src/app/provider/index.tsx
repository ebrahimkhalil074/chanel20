
"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import UserProvider from "@/src/context/userContext";
import { SessionProvider as AuthProvider } from "@/src/context/sessonContext";
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  session?: Session | null;
}

const queryClient = new QueryClient();

export function Providers({ children, themeProps,session }: ProvidersProps) {
  const router = useRouter();

  return (
    <>
        <QueryClientProvider client={queryClient}>
<SessionProvider session={session}>
       <AuthProvider>
       <UserProvider>
       <HeroUIProvider navigate={router.push}>
          <Toaster />
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </HeroUIProvider>
      </UserProvider>
      </AuthProvider>
    </SessionProvider>
    </QueryClientProvider>
      
    </>
  );
}
