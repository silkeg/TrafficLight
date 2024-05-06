import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

export function FurtherOptimizations() {
  return (
    <Stack ml="6rem">
      <Typography variant="h5" component="h2" marginBlock="2rem">
        Mögliche weitere Optimierungen
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              →
            </span>
          </ListItemIcon>
          <ListItemText>
            Man könnte einen Debouncer für die Buttons bauen.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              →
            </span>
          </ListItemIcon>
          <ListItemText>
            Nach dem Grün der Fußgängerampel startet immer die Haupstraße mit
            dem Interval zum nächsten Grün. Man könnt überlegen ob man dies
            umstellt, sodaß immer die Ampel startet die als erstes rot hatte.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              →
            </span>
          </ListItemIcon>
          <ListItemText>
            Es wäre zu überlegen ob für eine grüne Fußgängerampel beide
            Fahrzeugampeln auf rot umgeschaltet werden müssen oder nur die der
            Hauptstraße, da dort die Fußgängerampel steht.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              →
            </span>
          </ListItemIcon>
          <ListItemText>
            Man könnte eine Anzeige einbauen, wielviel Zeit noch ist bis zum
            nächsten Grün noch.
          </ListItemText>
        </ListItem>
      </List>
    </Stack>
  );
}
