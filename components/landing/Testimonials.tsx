import { TESTIMONIALS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export function Testimonials() {
  return (
    <Section sx={{ bgcolor: "#f8fafc" }}>
      <Container>
        <Box sx={{ textAlign: "center", maxWidth: "lg", mx: "auto", mb: 8 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" }, fontWeight: 700, mb: 2 }}>
            Trusted by Transportation Professionals
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.125rem", color: "text.secondary" }}>
            See what our customers have to say about FreightBooks
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {TESTIMONIALS.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <FormatQuoteIcon sx={{ fontSize: 32, color: "secondary.main", opacity: 0.3, mb: 2 }} />
                  <Typography variant="body1" sx={{ color: "text.primary", mb: 3, lineHeight: 1.6 }}>
                    {testimonial.content}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Avatar sx={{ bgcolor: "primary.main", opacity: 0.1 }}>
                      <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </Typography>
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "primary.main" }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {testimonial.role}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.disabled" }}>
                        {testimonial.company}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
