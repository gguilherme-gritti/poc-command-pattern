import { tv, type VariantProps } from 'tailwind-variants'
import type { ComponentProps } from 'react'

const card = tv({
  base: 'rounded-xl border transition-shadow',
  variants: {
    variant: {
      default: 'bg-white border-gray-200 shadow-sm',
      elevated: 'bg-white border-gray-100 shadow-lg',
      outlined: 'bg-transparent border-gray-300',
    },
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
    hoverable: {
      true: 'hover:shadow-md cursor-pointer',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
    hoverable: false,
  },
})

type CardVariants = VariantProps<typeof card>

type CardProps = ComponentProps<'div'> &
  CardVariants & {
    children: React.ReactNode
  }

export function Card({
  variant,
  padding,
  hoverable,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={card({ variant, padding, hoverable, className })}
      {...props}
    >
      {children}
    </div>
  )
}
