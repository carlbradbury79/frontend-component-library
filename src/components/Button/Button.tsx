import React from 'react';
import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   */
  variant?: ButtonVariant;
  /**
   * Button size
   */
  size?: ButtonSize;
  /**
   * Is this button in a loading state?
   */
  loading?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  transition: all 0.2s ease-in-out;

  ${(props) => {
    switch (props.size) {
      case 'small':
        return `
          font-size: 12px;
          padding: 10px 16px;
        `;
      case 'large':
        return `
          font-size: 16px;
          padding: 12px 24px;
        `;
      case 'medium':
      default:
        return `
          font-size: 14px;
          padding: 11px 20px;
        `;
    }
  }}

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return `
          color: white;
          background-color: #1ea7fd;
          &:hover {
            background-color: #1890db;
          }
        `;
      case 'secondary':
        return `
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
          &:hover {
            box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 1px inset;
          }
        `;
      case 'danger':
        return `
          color: white;
          background-color: #dc3545;
          &:hover {
            background-color: #c82333;
          }
        `;
      default:
        return `
          color: white;
          background-color: #1ea7fd;
          &:hover {
            background-color: #1890db;
          }
        `;
    }
  }}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled,
  children,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      size={size}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </StyledButton>
  );
};
