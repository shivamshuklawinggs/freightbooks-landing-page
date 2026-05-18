"use client";

import { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";
import { navItems, ctaButtons } from "@/config/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
          boxShadow: isScrolled ? 1 : 0,
          backdropFilter: isScrolled ? "blur(4px)" : "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Logo />
          
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
            {navItems.map((item) => (
              <Typography
                key={item.href}
                component="a"
                href={item.href}
                variant="body1"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  "&:hover": { color: "secondary.main" },
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button href={ctaButtons.secondary.href} variant="outline" size="sm">
              {ctaButtons.secondary.label}
            </Button>
            <Button href={ctaButtons.primary.href} variant="primary" size="sm">
              {ctaButtons.primary.label}
            </Button>
          </Box>

          <IconButton
            sx={{ display: { md: "none" } }}
            onClick={toggleMobileMenu}
            color="inherit"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{ display: { md: "none" } }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.href}
                component="a"
                href={item.href}
                onClick={toggleMobileMenu}
                sx={{ cursor: "pointer" }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <Button href={ctaButtons.secondary.href} variant="outline" size="md" fullWidth onClick={toggleMobileMenu}>
              {ctaButtons.secondary.label}
            </Button>
            <Button href={ctaButtons.primary.href} variant="primary" size="md" fullWidth onClick={toggleMobileMenu}>
              {ctaButtons.primary.label}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
