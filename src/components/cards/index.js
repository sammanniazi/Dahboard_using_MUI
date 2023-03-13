import { Card, CardContent, Typography, Box } from '@mui/material';

const BookingCard = ({ title, icon, count, description }) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ marginRight: 2, alignItems: 'center' }}>
            {icon}
          </Box>

          <Box sx={{ marginLeft: 30 }}>
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="h5">{count}</Typography>
          </Box>
        </Box>

        <hr />
        <Typography variant="p">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
