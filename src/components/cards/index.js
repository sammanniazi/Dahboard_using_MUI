import { Card, CardContent, Typography, Box } from '@mui/material';

const BookingCard = ({ title, icon, count, description }) => {
  return (
    <Card>
      <CardContent sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', height: '50%', alignItems: 'center', justifyContent: 'center' }}>
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
