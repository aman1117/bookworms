import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        {...props}
        className={cn("h-4 text-sm bg-stone-800 p-4 focus:outline-none focus:border-transparent rounded-sm w-full border border-stone-700  caret-yellow-500",className)}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
