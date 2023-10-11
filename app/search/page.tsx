import SearchHeader from './componenets/SearchHeader';
import SearchRestaurantCard from './componenets/SearchRestaurantCard';
import SearchSideBar from './componenets/SearchSideBar';

export default function Search() {
  return (
    <>
        <SearchHeader />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* SEARCH SIDE BAR */}
          <SearchSideBar />
          {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESAURANT CAR */}
            <SearchRestaurantCard />
            {/* RESAURANT CAR */}
          </div>
        </div>
      </>
  );
}
