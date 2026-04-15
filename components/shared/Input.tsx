import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-gray-400 ml-1">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-4 text-gray-500 pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full bg-[#131720] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#fcd535]/50 focus:ring-1 focus:ring-[#fcd535]/50 transition-all',
              leftIcon && 'pl-11',
              rightIcon && 'pr-11',
              error && 'border-[#f6465d] focus:border-[#f6465d] focus:ring-[#f6465d]/50',
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-4 text-gray-500">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <span className="text-xs text-[#f6465d] ml-1 font-medium">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
