import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardHeader as MuiCardHeader,
  CardProps as MuiCardProps,
  Typography,
} from "@mui/material";

export interface CardProps extends MuiCardProps {
  children?: React.ReactNode;
}

const Card = ({ children, ...props }: CardProps) => {
  return <MuiCard {...props}>{children}</MuiCard>;
};

const CardHeader = ({ children, ...props }: Omit<MuiCardProps, "variant">) => {
  return <MuiCardHeader {...props}>{children}</MuiCardHeader>;
};

const CardTitle = ({ children, ...props }: Omit<MuiCardProps, "variant">) => {
  return (
    <Typography variant="h5" component="h3" {...props}>
      {children}
    </Typography>
  );
};

const CardDescription = ({ children, ...props }: Omit<MuiCardProps, "variant">) => {
  return (
    <Typography variant="body2" color="text.secondary" {...props}>
      {children}
    </Typography>
  );
};

const CardContent = ({ children, ...props }: Omit<MuiCardProps, "variant">) => {
  return <MuiCardContent {...props}>{children}</MuiCardContent>;
};

const CardFooter = ({ children, ...props }: Omit<MuiCardProps, "variant">) => {
  return <div {...props}>{children}</div>;
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
