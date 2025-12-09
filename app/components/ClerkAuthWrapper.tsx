'use client';

import { useUser } from '@clerk/nextjs';

interface ClerkAuthWrapperProps {
  children: (isSignedIn: boolean) => React.ReactNode;
}

export default function ClerkAuthWrapper({ children }: ClerkAuthWrapperProps) {
  const { isSignedIn } = useUser();
  return <>{children(isSignedIn || false)}</>;
}
