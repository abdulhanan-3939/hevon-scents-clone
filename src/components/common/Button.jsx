import React from 'react';
import './Button.css';

/**
 * Reusable Button component.
 * variant: 'primary' | 'secondary' | 'ghost' | 'outline'
 * size: 'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  className = '',
  ...props
}) {
  return (
    <Tag
      className={`btn btn--${variant} btn--${size} ${className}`}
      {...props}
    >
      <span className="btn__inner">{children}</span>
    </Tag>
  );
}
