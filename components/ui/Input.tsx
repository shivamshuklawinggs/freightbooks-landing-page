import { TextField, TextFieldProps } from "@mui/material";

export interface InputProps extends Omit<TextFieldProps, "variant"> {
  variant?: "outlined" | "filled" | "standard";
}

const Input = ({ variant = "outlined", ...props }: InputProps) => {
  return <TextField variant={variant} fullWidth {...props} />;
};

export { Input };
