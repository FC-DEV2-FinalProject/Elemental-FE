import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { type InputHTMLAttributes } from 'react'

const inputVariants = cva(
  'w-full h-48 p-12 text-[16px] border focus-within:outline-none rounded-[8px] flex justify-center items-center gap-12',
  {
    variants: {
      variant: {
        default: 'border-[#9d9d9d] focus-within:border-black',
        success: 'border-[#15C0CC]',
        error: 'border-[#FF4242]'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  variant: 'default' | 'success' | 'error' | null | undefined
}

const Input = ({ className, children, variant, ...props }: InputProps) => {
  return (
    <label className={cn(inputVariants({ variant }), className)}>
      <input
        {...props}
        className="h-full placeholder:text-[#909091] border-none outline-none flex-1 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      {children}
    </label>
  )
}

export default Input
