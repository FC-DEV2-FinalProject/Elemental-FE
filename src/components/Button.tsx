import { cn } from '@/utils/cn'
import { cva } from 'class-variance-authority'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | 'Solid_Primary'
    | 'Outlined_Primary'
    | 'Outlined_Secondary'
    | 'Outlined'
  size?: 'Large' | 'Medium' | 'Small'
  disabled?: boolean
}

const buttonVariants = cva('py-16 px-10 font-semibold transition-all', {
  variants: {
    variant: {
      Solid_Primary:
        'text-[#FAFAFA] bg-[#15C0CC] hover:bg-[#44CDD6] focus:bg-[#13ADB8] disabled:bg-[#C5C5C6] disabled:cursor-not-allowed',
      Outlined_Primary:
        'text-[#13ADB8] border border-[#13ADB8] bg-[#FFF] hover:bg-[rgba(21, 192, 204, 0.15)] focus:bg-[rgba(21, 192, 204, 0.15)] disabled:text-[#ABABAC] disabled:cursor-not-allowed',
      Outlined_Secondary:
        'text-[#15C0CC] border border-[rgba(157,157,157,0.50)] bg-[#FFF] hover:bg-[rgba(25, 25, 25, 0.05)] focus:bg-[rgba(25, 25, 25, 0.15)] disabled:text-[#ABABAC] disabled:cursor-not-allowed',
      Outlined:
        'text-[#191919] border border-[rgba(157,157,157,0.50)] hover:bg-[rgba(25, 25, 25, 0.05)] focus:bg-[rgba(25, 25, 25, 0.15)] disabled:text-[#ABABAC] disabled:cursor-not-allowed'
    },
    size: {
      Large: 'text-[16px] rounded-[8px] h-[48px]',
      Medium: 'text-[14px] rounded-[6px] h-[40px]',
      Small: 'text-[14px] rounded-[6px] h-[32px]'
    }
  },

  defaultVariants: {
    variant: 'Solid_Primary',
    size: 'Medium'
  }
})

export default function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  const computedClassName = cn(buttonVariants({ variant, size }), className)

  console.log('Button className:', computedClassName) // 클래스 확인용
  console.log(buttonVariants({ variant: 'Solid_Primary', size: 'Medium' }))

  return (
    <button
      {...props}
      className={computedClassName}>
      {props.children}
    </button>
  )
}
