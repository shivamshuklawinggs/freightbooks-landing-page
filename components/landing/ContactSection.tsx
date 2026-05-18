"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Box, Grid, Typography, Stack, TextField } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement actual API call to submit contact form
    // await api.post('/api/contact', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", company: "", message: "" });
      alert("Message sent successfully!");
    }, 1000);
  };

  return (
    <Section id="contact" sx={{ bgcolor: "background.default" }}>
      <Container>
        <Box sx={{ textAlign: "center", maxWidth: "lg", mx: "auto", mb: 8 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" }, fontWeight: 700, mb: 2 }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.125rem", color: "text.secondary" }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ maxWidth: "lg", mx: "auto" }}>
          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Card sx={{ bgcolor: "#f8fafc" }}>
                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={3}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
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
                          flexShrink: 0,
                        }}
                      >
                        <MailIcon sx={{ color: "secondary.main" }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>Email</Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {siteConfig.contact.email}
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack direction="row" spacing={2} alignItems="flex-start">
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
                          flexShrink: 0,
                        }}
                      >
                        <PhoneIcon sx={{ color: "secondary.main" }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>Phone</Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {siteConfig.contact.phone}
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack direction="row" spacing={2} alignItems="flex-start">
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
                          flexShrink: 0,
                        }}
                      >
                        <LocationOnIcon sx={{ color: "secondary.main" }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>Address</Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {siteConfig.contact.address}
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent sx={{ p: 3 }}>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <TextField
                    label="Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    fullWidth
                  />

                  <TextField
                    label="Email *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    fullWidth
                  />

                  <TextField
                    label="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    fullWidth
                  />

                  <TextField
                    label="Message *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    multiline
                    rows={5}
                    fullWidth
                  />

                  <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size={24} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <SendIcon sx={{ ml: 1 }} />
                      </>
                    )}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
