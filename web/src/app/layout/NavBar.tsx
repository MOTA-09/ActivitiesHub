import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Button, Container, MenuItem, MenuList } from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
        sx={{ backgroundImage: "linear-gradient(to right, #570abc, #923dbc)" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <MenuList>
              <MenuItem sx={{ display: "flex", gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>Events</Typography>
              </MenuItem>
            </MenuList>
            <MenuList disablePadding sx={{display: "flex"}}>
              <MenuItem sx={{fontSize: "1rem", textTransform: "uppercase"}}>Events</MenuItem>
              <MenuItem sx={{fontSize: "1rem", textTransform: "uppercase"}}>About</MenuItem>
              <MenuItem sx={{fontSize: "1rem", textTransform: "uppercase"}}>Contact</MenuItem>
            </MenuList>
            <Button size="large" variant="contained" sx={{backgroundColor: "#1e1233", color: "white", "&:hover": {backgroundColor: "#570abc"}}}>
              Create event
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
 