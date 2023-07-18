import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmptyBox from 'assets/EmptyBox';
import EmptyStreet from 'assets/EmptyStreet';


export default function EmptyState() {
  const allEmptyStates = [EmptyBox, EmptyStreet];
  const randomIndex = Math.floor(Math.random() * allEmptyStates.length);
  const Component = allEmptyStates[randomIndex];
  return (
    <Box mt={4} ml={2}>
      <Typography variant='h2'>Nothing to see yet...</Typography>
      <Box mt={6} mx='auto' maxWidth={400}>
        <Component />
      </Box>
    </Box>
  );
}
