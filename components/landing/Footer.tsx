import { Logo } from "@/components/shared/Logo";
import { footerLinks } from "@/config/navigation";
import { SOCIAL_LINKS } from "@/lib/constants";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import * as Icons from "@mui/icons-material";

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "white" }}>
      <Container>
        <Grid container spacing={4} sx={{ py: 8 }}>
          {/* Brand Column */}
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ mb: 3 }}>
              <Logo />
            </Box>
            <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 3, maxWidth: 300 }}>
              Comprehensive transportation service accounting system for brokers, dispatchers, and repair shops.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {SOCIAL_LINKS.map((social) => {
                const Icon = Icons[social.icon as keyof typeof Icons] as React.ElementType;
                return (
                  <IconButton
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      "&:hover": { bgcolor: "secondary.main" },
                    }}
                    aria-label={social.name}
                  >
                    {Icon && <Icon fontSize="small" />}
                  </IconButton>
                );
              })}
            </Box>
          </Grid>

          {/* Footer Links */}
          <Grid item xs={6} md={3} lg={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>Product</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {footerLinks.product.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={3} lg={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>Company</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={3} lg={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>Legal</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: 1, borderColor: "rgba(255, 255, 255, 0.1)", py: 4, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
          <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Built with Next.js 16 and Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
