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
          <ListItemText>ein Debouncer in die Button einbauen</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              →
            </span>
          </ListItemIcon>
          <ListItemText>
            einen Check ob die Intervalle nicht mehr synchron laufen und somit
            verhinder das eventuell do beide Fahrzeugampeln zu gleich grün haben
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              →
            </span>
          </ListItemIcon>
          <ListItemText>
            nach dem Grün der Fußgängerampel statet immer die Haupstraße mit dem
            Interval zum nächsten grün, man könnt überlegen ob man das umstellt,
            sodaß immer die Ampel startet die zuerst rot hatte
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              →
            </span>
          </ListItemIcon>
          <ListItemText>
            es wäre zu überlegen ob für eine grüne Fußgängerampel beide
            Fahrzeugampeln auf rot umgeschaltet werden oder nur die der
            Hauptstraße, da an dieser die Fußgängerampel steht
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <span role="img" aria-label="Image check">
              →
            </span>
          </ListItemIcon>
          <ListItemText>
            Anzeige einbauen vielviel Zeit bis zum nächsten Grün
          </ListItemText>
        </ListItem>
      </List>
    </Stack>
  );
}
