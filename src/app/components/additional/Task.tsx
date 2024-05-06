import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

export function Task() {
  return (
    <Stack ml="6rem">
      <Typography variant="h5" component="h2" marginBlock="2rem">
        Aufgabe: Verkehrsampel
        <span role="img" aria-label="Image Pedestrian">
          🚶
        </span>
      </Typography>
      <Typography variant="h6" component="h3">
        Entwerfen sie eine Verkehrsregelungsanlage:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>
            die Hauptstraße ist im Anfangszustand auf freie Fahrt geschaltet,
            die Nebenstraße auf halt, der Fußgängerüberweg auf Stehen
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>die Nebenstraße bekommt 5 Sekunden grün</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>
            Fußgänger müssen immer die Gehberechtigung anfragen
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>
            die Fußgänger Ampel schaltet zwischen rot und grün. Grünphase: 5
            Sekunden
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>
            Die Verkehrsampel schaltet über gelb nach rot, und von Rot mit
            gleichzeitigem leuchten von gelb auf grün.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>
            Keine Ampel darf zur gleichen Zeit grün haben
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant="h6" component="h3" mt="2rem">
        Verkehrsampel Schaltzeiten:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>Rot 2s</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>gelb 1s</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>rot-gelb 2s</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>Übergangszeit 1s</ListItemText>
        </ListItem>
      </List>
      <Typography variant="h6" component="h3" mt="2rem">
        Verwendet werden soll:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>Typescript</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>REACT</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              ✔️
            </span>
          </ListItemIcon>
          <ListItemText>Material-UI</ListItemText>
        </ListItem>
      </List>
    </Stack>
  );
}
