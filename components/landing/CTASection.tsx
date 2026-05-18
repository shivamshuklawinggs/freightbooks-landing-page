import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Box, Typography, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ctaButtons } from "@/config/navigation";

export function CTASection() {
  return (
    <Section sx={{ bgcolor: "linear-gradient(to right, #383e4b, #2d3440)" }}>
      <Container>
        <Box sx={{ textAlign: "center", maxWidth: "lg", mx: "auto" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" },
              fontWeight: 700,
              color: "white",
              mb: 3,
            }}
          >
            Ready to Transform Your Freight Operations?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.8)",
              mb: 4,
              maxWidth: "xl",
              mx: "auto",
            }}
          >
            Join thousands of transportation professionals who trust FreightBooks to manage their loads, invoicing, and financial reporting.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button href={ctaButtons.primary.href} variant="secondary" size="lg">
              {ctaButtons.primary.label}
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
            <Button
              href={ctaButtons.secondary.href}
              variant="outline"
              size="lg"
              sx={{ borderColor: "white", color: "white", "&:hover": { bgcolor: "white", color: "primary.main" } }}
            >
              {ctaButtons.secondary.label}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Section>
  );
}
