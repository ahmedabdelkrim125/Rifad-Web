import { ViewTransition, type ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <ViewTransition
      enter={{
        'nav-forward': 'page-forward-in',
        'nav-back': 'page-back-in',
        default: 'page-fade-in',
      }}
      exit={{
        'nav-forward': 'page-forward-out',
        'nav-back': 'page-back-out',
        default: 'page-fade-out',
      }}
      default="none"
    >
      <div>{children}</div>
    </ViewTransition>
  );
}
