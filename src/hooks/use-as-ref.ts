import * as React from "react";

import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";

/**
 * Create a mutable ref that is kept synchronized with the provided value across renders.
 *
 * @param props - Initial value to store in the ref; `ref.current` is updated to this value on every render.
 * @returns A ref object whose `current` property always reflects the latest `props` value.
 */
function useAsRef<T>(props: T) {
  const ref = React.useRef<T>(props);

  useIsomorphicLayoutEffect(() => {
    ref.current = props;
  });

  return ref;
}

export { useAsRef };