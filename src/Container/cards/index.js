import BookingCard from '../../components/cards/index';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

const card = () => {
  return (
    <>
      <BookingCard
        title="Booking"
        icon={< AccountBalanceRoundedIcon />}
        count={281}
        description="+55% than lask week"
      />
      <BookingCard
        title="Today's Users"
        icon={<AccessTimeFilledRoundedIcon/>}
        count={2,300}
        description="+3%
 than last month"
      />
      <BookingCard
        title="Followers"
        icon={< AccountCircleRoundedIcon/>}
        count={+91}
        description=" Just updated"
      />
      
    </>
  );
};
export default card;