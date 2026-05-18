import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Box, Grid, Typography, Icon as MuiIcon } from "@mui/material";

const integrations = [
  {
    icon: "Bolt",
    name: "SAFER Integration",
    description: "Access FMCSA SAFER database for carrier safety ratings and compliance checks",
  },
  {
    icon: "Shield",
    name: "Secure Data",
    description: "Enterprise-grade encryption and security protocols to protect your data",
  },
  {
    icon: "Public",
    name: "API Access",
    description: "RESTful API for custom integrations and third-party connections",
  },
  {
    icon: "Storage",
    name: "Cloud Storage",
    description: "Scalable cloud infrastructure with automatic backups and disaster recovery",
  },
];

const iconMap: Record<string, React.ElementType> = {
  Bolt: require("@mui/icons-material/FlashOn").default,
  Shield: require("@mui/icons-material/VerifiedUser").default,
  Public: require("@mui/icons-material/Language").default,
  Storage: require("@mui/icons-material/Cloud").default,
};

export function IntegrationsSection() {
  return (
    <Section id="integrations" sx={{ bgcolor: "#f8fafc" }}>
      <Container>
        <Box sx={{ textAlign: "center", maxWidth: "lg", mx: "auto", mb: 8 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" }, fontWeight: 700, mb: 2 }}>
            Powerful Integrations & Security
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.125rem", color: "text.secondary" }}>
            Built with enterprise-grade security and seamless integrations to power your operations
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {integrations.map((integration, index) => {
            const Icon = iconMap[integration.icon];
            return (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card>
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
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
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      {Icon && <MuiIcon component={Icon} sx={{ color: "secondary.main", fontSize: 24 }} />}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {integration.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {integration.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
