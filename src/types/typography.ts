import { ElementType, ReactNode } from 'react'

export interface TypographyProps {
  children: ReactNode
  as?: ElementType
  className?: string
  size?: number
}
