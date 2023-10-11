import RestaurantNavBar from './components/RestaurantNavBar';
import Rating from './components/Rating';
import Title from './components/Title';
import Description from './components/Description';
import RestaurantImages from './components/RestaurantImages';
import Review from './components/Review';
import ReservationCard from './components/ReservationCard';
export default function Restaurant() {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Title />
        <Rating />
        <Description />
        <RestaurantImages />
        <Review />
      </div>
      <ReservationCard />
    </>
  );
}
