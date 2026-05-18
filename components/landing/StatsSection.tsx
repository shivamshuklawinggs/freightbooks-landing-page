import { STATS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Box, Grid, Typography } from "@mui/material";

export function StatsSection() {
  return (
    <Section sx={{ bgcolor: "primary.main" }}>
      <Container>
        <Grid container spacing={4}>
          {STATS.map((stat, index) => (
            <Grid item xs={6} lg={3} key={index}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "2rem", sm: "3rem" },
                    fontWeight: "bold",
                    color: "secondary.main",
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
