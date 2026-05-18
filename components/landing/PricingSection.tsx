import { PRICING_TIERS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ctaButtons } from "@/config/navigation";
import { Box, Grid, Typography, Chip, List, ListItem, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export function PricingSection() {
  return (
    <Section id="pricing" sx={{ bgcolor: "background.default" }}>
      <Container>
        <Box sx={{ textAlign: "center", maxWidth: "lg", mx: "auto", mb: 8 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" }, fontWeight: 700, mb: 2 }}>
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.125rem", color: "text.secondary" }}>
            Choose the plan that fits your business needs. All plans include a 15-day free trial.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ maxWidth: "lg", mx: "auto" }}>
          {PRICING_TIERS.map((tier, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  position: "relative",
                  border: tier.popular ? 2 : 1,
                  borderColor: tier.popular ? "secondary.main" : "divider",
                  boxShadow: tier.popular ? 4 : 1,
                  transform: tier.popular ? "scale(1.05)" : "none",
                }}
              >
                {tier.popular && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: -16,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <Chip
                      label="Most Popular"
                      sx={{
                        bgcolor: "secondary.main",
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "primary.main" }}>
                      ${tier.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      /month
                    </Typography>
                  </Box>
                </CardHeader>
                <CardContent>
                  <List sx={{ mb: 3 }}>
                    {tier.features.map((feature, i) => (
                      <ListItem key={i} sx={{ py: 1 }}>
                        <CheckIcon sx={{ color: "secondary.main", mr: 2, fontSize: 20 }} />
                        <ListItemText primary={feature} primaryTypographyProps={{ variant: "body2" }} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    href={ctaButtons.primary.href}
                    variant={tier.popular ? "primary" : "outline"}
                    size="lg"
                    fullWidth
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
