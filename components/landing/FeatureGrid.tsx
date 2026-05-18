import { FEATURES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ctaButtons } from "@/config/navigation";
import { Box, Grid, Typography, Icon as MuiIcon } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const iconMap: Record<string, React.ElementType> = {
  Truck: require("@mui/icons-material/LocalShipping").default,
  FileText: require("@mui/icons-material/Description").default,
  Users: require("@mui/icons-material/People").default,
  BarChart3: require("@mui/icons-material/BarChart").default,
  Shield: require("@mui/icons-material/VerifiedUser").default,
  Wrench: require("@mui/icons-material/Build").default,
};

export function FeatureGrid() {
  return (
    <Section id="features" sx={{ bgcolor: "background.default" }}>
      <Container>
        <Box sx={{ textAlign: "center", maxWidth: "lg", mx: "auto", mb: 8 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" }, fontWeight: 700, mb: 2 }}>
            Everything You Need to Manage Your Freight Business
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.125rem", color: "text.secondary" }}>
            Powerful features designed specifically for brokers, dispatchers, and repair shops to streamline operations and boost productivity.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card>
                  <CardHeader>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        bgcolor: "secondary.main",
                        opacity: 0.1,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      {Icon && <MuiIcon component={Icon} sx={{ color: "secondary.main", fontSize: 24 }} />}
                    </Box>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button href={ctaButtons.primary.href} variant="primary" size="lg">
            Explore All Features
            <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
      </Container>
    </Section>
  );
}
