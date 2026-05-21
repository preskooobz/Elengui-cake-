import * as React from 'react';

import {
  Progress as ProgressPrimitive,
  ProgressIndicator as ProgressIndicatorPrimitive,
} from '@/components/animate-ui/primitives/radix/progress';
import { cn } from '@/lib/utils';

function Progress({
  className,
  ...props
}) {
  return (
    <ProgressPrimitive
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-black/5',
        className
      )}
      {...props}>
      <ProgressIndicatorPrimitive className="brand-gradient rounded-full h-full w-full flex-1" />
    </ProgressPrimitive>
  );
}

export { Progress };
