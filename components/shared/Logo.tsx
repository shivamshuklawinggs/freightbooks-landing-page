import { Box, Typography } from "@mui/material";

export function Logo({ className }: { className?: string }) {
  return (
    <Box className={className} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          bgcolor: "secondary.main",
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
          FB
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ color: "primary.main", fontWeight: "bold" }}>
        FreightBooks
      </Typography>
    </Box>
  );
}
