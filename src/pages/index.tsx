import { ReactNode } from "react";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { getParticlesOptions, Icon } from "../components";
import Particles from "react-tsparticles";
import me from "../../public/me.json";

const Index = (): ReactNode => {
  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Particles options={getParticlesOptions()} />
      <Grid item component={Paper} elevation={1} sx={{ zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            verticalAlign: "center",
            m: 1,
            minWidth: "20vw",
          }}>
          <Avatar
            src={"/api/avatar"}
            sx={{
              m: 1,
              background: "none",
              width: 128,
              height: 128,
            }}></Avatar>
          <Typography variant="h5">{me.name}</Typography>
          <Paper
            elevation={0}
            sx={{
              m: 0.5,
              p: 0.5,
            }}>
            <Stack direction="row" spacing={0.5}>
              {me.social.map(({ description, icon, url }) => (
                <Tooltip key={icon} title={description} TransitionComponent={Zoom} arrow>
                  <IconButton href={url}>
                    <Icon name={icon} />
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Index;
