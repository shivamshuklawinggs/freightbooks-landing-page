import { TextField, TextFieldProps } from "@mui/material";

export interface TextareaProps extends Omit<TextFieldProps, "variant" | "multiline"> {
  variant?: "outlined" | "filled" | "standard";
}

const Textarea = ({ variant = "outlined", rows = 4, ...props }: TextareaProps) => {
  return <TextField variant={variant} multiline rows={rows} fullWidth {...props} />;
};

export { Textarea };
