import { Box, BoxProps } from "@mui/material";

export interface SectionProps extends BoxProps {
  id?: string;
}

const Section = ({ id, children, sx, ...props }: SectionProps) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 4, sm: 5, lg: 6 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export { Section };
