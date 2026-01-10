import * as React from "react";

type PossibleRef<T> = React.Ref<T> | undefined;

/**
 * Assigns a value to a React ref (callback ref or RefObject).
 *
 * @param ref - The ref to set; either a callback ref or a RefObject (or undefined)
 * @param value - The value to assign to the ref
 * @returns The value returned by the callback ref when `ref` is a function, otherwise `undefined`
 */
function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === "function") {
    return ref(value);
  }

  if (ref !== null && ref !== undefined) {
    ref.current = value;
  }
}

/**
 * Creates a single ref callback that assigns a given node to each provided ref.
 *
 * @param refs - One or more callback refs or RefObject instances to be updated with the node
 * @returns A React ref callback which sets `node` on all provided refs. If any supplied callback ref returns a cleanup function, the returned callback will return a cleanup function that invokes those cleanups and clears non-function refs to `null`.
 */
function composeRefs<T>(...refs: PossibleRef<T>[]): React.RefCallback<T> {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });

    // React <19 will log an error to the console if a callback ref returns a
    // value. We don't use ref cleanups internally so this will only happen if a
    // user's ref callback returns a value, which we only expect if they are
    // using the cleanup functionality added in React 19.
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}

/**
 * Create a stable ref callback that assigns a single node to all provided refs.
 *
 * @param refs - One or more refs to compose; each may be a callback ref or a RefObject
 * @returns A memoized ref callback that sets the received node on every provided ref. If any composed callback ref returns a cleanup function, the returned callback may return a cleanup that invokes those cleanup functions (and clears non-function refs to `null`).
 */
function useComposedRefs<T>(...refs: PossibleRef<T>[]): React.RefCallback<T> {
  // biome-ignore lint/correctness/useExhaustiveDependencies: we want to memoize by all values
  return React.useCallback(composeRefs(...refs), refs);
}

export { composeRefs, useComposedRefs };