import { TypographyProps } from '@/types/typography'
import clsx from 'clsx'

/**
 * @param as - 태그. 기본 h2
 * @param size - 폰트 크기. 기본 20. line-height, font-weight 값이 함께 자동 지정됨.
 */
const Title = ({
  children,
  as: Tag = 'h1',
  className,
  size = 20
}: TypographyProps) => {
  const variable: { [key: number]: string } = {
    40: 'text-[40px]/[1.3] font-bold',
    36: 'text-[36px]/[1.3] font-bold',
    28: 'text-[28px]/[1.35] font-bold',
    24: 'text-[24px]/[1.35] font-bold',
    22: 'text-[22px]/[1.3] font-semibold',
    20: 'text-[20px]/[1.4] font-semibold',
    18: 'text-[18px]/[1.45] font-semibold'
  }

  return <Tag className={clsx(variable[size], className)}>{children}</Tag>
}

export default Title
