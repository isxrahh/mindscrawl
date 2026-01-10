'use client';

import * as React from 'react';
import { motion, isMotionComponent, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

type AnyProps = Record<string, unknown>;

type DOMMotionProps<T extends HTMLElement = HTMLElement> = Omit<
  HTMLMotionProps<keyof HTMLElementTagNameMap>,
  'ref'
> & { ref?: React.Ref<T> };

type WithAsChild<Base extends object> =
  | (Base & { asChild: true; children: React.ReactElement })
  | (Base & { asChild?: false | undefined });

type SlotProps<T extends HTMLElement = HTMLElement> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
} & DOMMotionProps<T>;

/**
 * Creates a single callback ref that assigns the given element to multiple refs.
 *
 * @param refs - One or more refs (callback refs or ref objects) to update when the returned callback is invoked.
 * @returns A ref callback that sets the received node on each provided ref (`call` for function refs, `current` for ref objects).
 */
function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as React.RefObject<T | null>).current = node;
      }
    });
  };
}

/**
 * Merge a child element's props with slot props, concatenating `className` and shallow-merging `style`.
 *
 * @param childProps - Props provided by the child element; preserved unless overridden by `slotProps`.
 * @param slotProps - Props provided by the slot; for conflicting keys, values from `slotProps` take precedence. `className` values are concatenated and `style` objects are shallow-merged with `slotProps` overriding overlapping keys.
 * @returns An object containing the combined props ready to be spread onto the rendered element.
 */
function mergeProps<T extends HTMLElement>(
  childProps: AnyProps,
  slotProps: DOMMotionProps<T>,
): AnyProps {
  const merged: AnyProps = { ...childProps, ...slotProps };

  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className as string,
      slotProps.className as string,
    );
  }

  if (childProps.style || slotProps.style) {
    merged.style = {
      ...(childProps.style as React.CSSProperties),
      ...(slotProps.style as React.CSSProperties),
    };
  }

  return merged;
}

/**
 * Wraps a single React element child with motion capabilities, merging the child's props and ref with the Slot's props and ref.
 *
 * The child must be a single valid React element. If the child is already a motion component it is used directly; otherwise it is wrapped to provide motion behavior. Child and slot `className` and `style` are merged and both refs are combined.
 *
 * @param children - A single React element to render inside the Slot.
 * @param ref - An optional ref passed to the resulting element; it is merged with the child's existing ref.
 * @returns The motion-enabled element with merged props and a combined ref, or `null` if `children` is not a valid React element.
 */
function Slot<T extends HTMLElement = HTMLElement>({
  children,
  ref,
  ...props
}: SlotProps<T>) {
  const isAlreadyMotion =
    typeof children.type === 'object' &&
    children.type !== null &&
    isMotionComponent(children.type);

  const Base = React.useMemo(
    () =>
      isAlreadyMotion
        ? (children.type as React.ElementType)
        : motion.create(children.type as React.ElementType),
    [isAlreadyMotion, children.type],
  );

  if (!React.isValidElement(children)) return null;

  const { ref: childRef, ...childProps } = children.props as AnyProps;

  const mergedProps = mergeProps(childProps, props);

  return (
    <Base {...mergedProps} ref={mergeRefs(childRef as React.Ref<T>, ref)} />
  );
}

export {
  Slot,
  type SlotProps,
  type WithAsChild,
  type DOMMotionProps,
  type AnyProps,
};