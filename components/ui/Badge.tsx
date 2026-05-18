import { Chip, ChipProps } from "@mui/material";

export interface BadgeProps {
  variant?: "default" | "success" | "warning" | "error" | "info";
  label?: string;
  children?: React.ReactNode;
}

const Badge = ({ variant = "default", label, children, ...props }: BadgeProps) => {
  const getColor = (): ChipProps["color"] => {
    switch (variant) {
      case "success":
        return "success";
      case "warning":
        return "warning";
      case "error":
        return "error";
      case "info":
        return "info";
      default:
        return "primary";
    }
  };

  return (
    <Chip
      color={getColor()}
      size="small"
      label={label || children}
      {...props}
    />
  );
};

export { Badge };
