import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button = ({ variant = "primary", size = "md", children, ...props }: ButtonProps) => {
  const getMuiVariant = (): MuiButtonProps["variant"] => {
    switch (variant) {
      case "secondary":
        return "contained";
      case "outline":
        return "outlined";
      case "ghost":
        return "text";
      default:
        return "contained";
    }
  };

  const getColor = (): MuiButtonProps["color"] => {
    switch (variant) {
      case "secondary":
        return "secondary";
      default:
        return "primary";
    }
  };

  const getSize = (): MuiButtonProps["size"] => {
    switch (size) {
      case "sm":
        return "small";
      case "lg":
        return "large";
      default:
        return "medium";
    }
  };

  return (
    <MuiButton
      variant={getMuiVariant()}
      color={getColor()}
      size={getSize()}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export { Button };
