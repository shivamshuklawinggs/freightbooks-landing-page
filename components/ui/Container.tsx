import { Container as MuiContainer } from "@mui/material";

export interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

const Container = ({ children, className, maxWidth = "lg" }: ContainerProps) => {
  return (
    <MuiContainer className={className} maxWidth={maxWidth}>
      {children}
    </MuiContainer>
  );
};

export { Container };
