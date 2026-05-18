import { Box, Grid, Typography, Chip, Button as MuiButton, Stack } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ctaButtons } from "@/config/navigation";

export function HeroSection() {
  return (
    <Box
      sx={{
        pt: { xs: 8, lg: 10 },
        pb: { xs: 5, lg: 8 },
        background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={6}>
            <Stack spacing={4}>
              <Chip
                icon={<LocalShippingIcon />}
                label="Transportation Management Made Simple"
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  alignSelf: "flex-start",
                }}
              />
              
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem", lg: "4rem" },
                  fontWeight: 700,
                  color: "primary.main",
                }}
              >
                Streamline Your{" "}
                <Box component="span" sx={{ color: "secondary.main" }}>
                  Freight Operations
                </Box>{" "}
                with Ease
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  color: "text.secondary",
                  maxWidth: "xl",
                }}
              >
                Comprehensive transportation service accounting system for brokers, dispatchers, and repair shops. Manage loads, invoicing, customers, and financial reporting all in one powerful platform.
              </Typography>

              <Stack spacing={3}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button href={ctaButtons.primary.href} variant="primary" size="lg">
                    {ctaButtons.primary.label}
                    <ArrowForwardIcon sx={{ ml: 1 }} />
                  </Button>
                  <Button href={ctaButtons.secondary.href} variant="outline" size="lg">
                    {ctaButtons.secondary.label}
                  </Button>
                </Stack>
                
                <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleIcon sx={{ color: "secondary.main" }} />
                    <Typography variant="body2">15-day free trial</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleIcon sx={{ color: "secondary.main" }} />
                    <Typography variant="body2">No credit card required</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleIcon sx={{ color: "secondary.main" }} />
                    <Typography variant="body2">Cancel anytime</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Content - Visual */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                position: "relative",
                background: "linear-gradient(135deg, #383e4b 0%, #2d3440 100%)",
                borderRadius: 4,
                p: 4,
                boxShadow: 24,
              }}
            >
              <Box
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 3,
                  p: 3,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                  <Box>
                    <Box sx={{ height: 16, width: 128, bgcolor: "rgba(255,255,255,0.3)", borderRadius: 1, mb: 1 }} />
                    <Box sx={{ height: 12, width: 96, bgcolor: "rgba(255,255,255,0.2)", borderRadius: 1 }} />
                  </Box>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: "secondary.main",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LocalShippingIcon sx={{ color: "white" }} />
                  </Box>
                </Box>
                
                <Stack spacing={2}>
                  {[1, 2, 3, 4].map((i) => (
                    <Box key={i} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <Box sx={{ height: 32, width: 32, bgcolor: "rgba(255,255,255,0.2)", borderRadius: 1 }} />
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ height: 12, bgcolor: "rgba(255,255,255,0.3)", borderRadius: 1, mb: 0.5 }} />
                        <Box sx={{ height: 8, width: "66%", bgcolor: "rgba(255,255,255,0.2)", borderRadius: 1 }} />
                      </Box>
                      <Box sx={{ height: 24, width: 64, bgcolor: "rgba(0, 201, 167, 0.5)", borderRadius: 1 }} />
                    </Box>
                  ))}
                </Stack>

                <Box
                  sx={{
                    pt: 3,
                    borderTop: 1,
                    borderColor: "rgba(255,255,255,0.2)",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box sx={{ height: 12, width: 80, bgcolor: "rgba(255,255,255,0.3)", borderRadius: 1, mb: 0.5 }} />
                    <Box sx={{ height: 8, width: 64, bgcolor: "rgba(255,255,255,0.2)", borderRadius: 1 }} />
                  </Box>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
                      $12,450
                    </Typography>
                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      This Month
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
