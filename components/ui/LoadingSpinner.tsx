import { CircularProgress, CircularProgressProps } from "@mui/material";

export interface LoadingSpinnerProps extends CircularProgressProps {
  size?: number;
}

const LoadingSpinner = ({ size = 24, ...props }: LoadingSpinnerProps) => {
  return (
    <CircularProgress
      size={size}
      color="primary"
      {...props}
    />
  );
};

export { LoadingSpinner };
