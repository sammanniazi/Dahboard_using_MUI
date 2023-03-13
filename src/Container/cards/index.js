import BookingCard from '../../components/cards/index';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

const card = () => {
  return (
    <>
      <BookingCard
        title="Card 1"
        icon={< AccountBalanceRoundedIcon />}
        count={5}
        description="ABCD"
      />
      <BookingCard
        title="Card 2"
        icon={<AccessTimeFilledRoundedIcon/>}
        count={10}
        description="EFGH"
      />
      <BookingCard
        title="Card 3"
        icon={< AccountCircleRoundedIcon/>}
        count={15}
        description="IJKL"
      />
      
    </>
  );
};
export default card;