'use client';

import * as React from 'react';
import { HTMLMotionProps, motion, type Transition } from 'motion/react';

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
  type TooltipProviderProps,
  type TooltipProps,
  type TooltipContentProps,
  type TooltipArrowProps,
} from '@/components/animate-ui/primitives/animate/tooltip';

type AvatarProps = Omit<HTMLMotionProps<'div'>, 'translate'> & {
  children: React.ReactNode;
  zIndex: number;
  translate?: string | number;
} & Omit<TooltipProps, 'children'>;

/**
 * Render an avatar wrapped in a tooltip that shifts its child vertically on hover or tap.
 *
 * @param zIndex - CSS stacking order applied to the avatar container
 * @param translate - Vertical offset (e.g., '-30%' or 12) applied to the inner content when hovered or tapped
 * @param side - Tooltip side relative to the avatar
 * @param sideOffset - Tooltip side offset in pixels
 * @param align - Tooltip alignment relative to the avatar
 * @param alignOffset - Tooltip alignment offset in pixels
 * @returns The tooltip-wrapped avatar container element that animates its child by `translate` on hover or tap
 */
function AvatarContainer({
  zIndex,
  translate,
  side,
  sideOffset,
  align,
  alignOffset,
  ...props
}: AvatarProps) {
  return (
    <Tooltip
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
    >
      <TooltipTrigger asChild>
        <motion.div
          data-slot="avatar-container"
          initial="initial"
          whileHover="hover"
          whileTap="hover"
          style={{ position: 'relative', zIndex }}
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: translate },
            }}
            {...props}
          />
        </motion.div>
      </TooltipTrigger>
    </Tooltip>
  );
}

type AvatarGroupProps = Omit<React.ComponentProps<'div'>, 'translate'> & {
  children: React.ReactElement[];
  invertOverlap?: boolean;
  translate?: string | number;
  transition?: Transition;
  tooltipTransition?: Transition;
} & Omit<TooltipProviderProps, 'children'> &
  Omit<TooltipProps, 'children'>;

/**
 * Renders a horizontally stacked group of avatars with coordinated overlap, per-avatar tooltips, and hover/tap translation animations.
 *
 * @param children - An array of avatar React elements to display in the group.
 * @param id - Optional identifier forwarded to the TooltipProvider for associating tooltip state.
 * @param transition - Motion transition applied to each avatar's animation.
 * @param tooltipTransition - Motion transition applied to tooltip show/hide animations.
 * @param invertOverlap - When true, reverses the stacking order so later children appear below earlier ones.
 * @param translate - Vertical translate value applied to an avatar on hover/tap (e.g., '-30%' or number).
 * @param openDelay - Delay in milliseconds before tooltips open.
 * @param closeDelay - Delay in milliseconds before tooltips close.
 * @param side - Preferred tooltip side relative to each avatar.
 * @param sideOffset - Offset in pixels between the avatar and its tooltip.
 * @param align - Tooltip alignment relative to the avatar.
 * @param alignOffset - Offset in pixels applied to tooltip alignment.
 * @returns A React element that groups avatars with animated overlap and integrated tooltip providers.
 */
function AvatarGroup({
  ref,
  children,
  id,
  transition = { type: 'spring', stiffness: 300, damping: 17 },
  invertOverlap = false,
  translate = '-30%',
  openDelay = 0,
  closeDelay = 0,
  side = 'top',
  sideOffset = 25,
  align = 'center',
  alignOffset = 0,
  tooltipTransition = { type: 'spring', stiffness: 300, damping: 35 },
  style,
  ...props
}: AvatarGroupProps) {
  return (
    <TooltipProvider
      id={id}
      openDelay={openDelay}
      closeDelay={closeDelay}
      transition={tooltipTransition}
    >
      <div
        ref={ref}
        data-slot="avatar-group"
        style={{
          display: 'flex',
          alignItems: 'center',
          ...style,
        }}
        {...props}
      >
        {children?.map((child, index) => (
          <AvatarContainer
            key={index}
            zIndex={
              invertOverlap ? React.Children.count(children) - index : index
            }
            transition={transition}
            translate={translate}
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
          >
            {child}
          </AvatarContainer>
        ))}
      </div>
    </TooltipProvider>
  );
}

type AvatarGroupTooltipProps = TooltipContentProps;

/**
 * Renders TooltipContent with the provided avatar-group tooltip props.
 *
 * @param props - Props forwarded to the underlying TooltipContent component
 * @returns The TooltipContent element configured for the avatar group
 */
function AvatarGroupTooltip(props: AvatarGroupTooltipProps) {
  return <TooltipContent {...props} />;
}

type AvatarGroupTooltipArrowProps = TooltipArrowProps;

/**
 * Renders a tooltip arrow component configured for use within an AvatarGroup.
 *
 * @param props - Props forwarded to the underlying TooltipArrow component
 * @returns The TooltipArrow element with the provided props
 */
function AvatarGroupTooltipArrow(props: AvatarGroupTooltipArrowProps) {
  return <TooltipArrow {...props} />;
}

export {
  AvatarGroup,
  AvatarGroupTooltip,
  AvatarGroupTooltipArrow,
  type AvatarGroupProps,
  type AvatarGroupTooltipProps,
  type AvatarGroupTooltipArrowProps,
};