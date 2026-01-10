import * as React from "react";

/**
 * Lazily initializes a ref value by invoking the provided factory on first use and returns the ref.
 *
 * @param fn - Factory function that produces the ref value when first needed
 * @returns A `React.RefObject<T>` whose `current` is the value produced by `fn` (initialized the first time the hook runs)
 */
function useLazyRef<T>(fn: () => T) {
  const ref = React.useRef<T | null>(null);

  if (ref.current === null) {
    ref.current = fn();
  }

  return ref as React.RefObject<T>;
}

export { useLazyRef };