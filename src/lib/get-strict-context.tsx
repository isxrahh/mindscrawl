import * as React from 'react';

/**
 * Create a typed React context along with a Provider component and a safety hook that enforces usage within that Provider.
 *
 * @param name - Optional label used in the runtime error message thrown by the hook when it is called outside its Provider.
 * @returns A readonly tuple where:
 *   - The first element is a Provider component accepting `{ value: T; children?: React.ReactNode }` that supplies the context value.
 *   - The second element is a hook that returns the context value of type `T` and throws an `Error` if called outside the corresponding Provider.
 */
function getStrictContext<T>(
  name?: string,
): readonly [
  ({
    value,
    children,
  }: {
    value: T;
    children?: React.ReactNode;
  }) => React.JSX.Element,
  () => T,
] {
  const Context = React.createContext<T | undefined>(undefined);

  const Provider = ({
    value,
    children,
  }: {
    value: T;
    children?: React.ReactNode;
  }) => <Context.Provider value={value}>{children}</Context.Provider>;

  const useSafeContext = () => {
    const ctx = React.useContext(Context);
    if (ctx === undefined) {
      throw new Error(`useContext must be used within ${name ?? 'a Provider'}`);
    }
    return ctx;
  };

  return [Provider, useSafeContext] as const;
}

export { getStrictContext };