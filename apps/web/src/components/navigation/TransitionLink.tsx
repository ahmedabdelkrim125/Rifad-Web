import Link from 'next/link';
import type { ComponentProps } from 'react';

type TransitionLinkProps = ComponentProps<typeof Link> & {
  direction?: 'forward' | 'back';
};

export function TransitionLink({ direction = 'forward', ...props }: TransitionLinkProps) {
  const type = direction === 'back' ? 'nav-back' : 'nav-forward';
  return <Link transitionTypes={[type]} {...props} />;
}
