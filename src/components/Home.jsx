import InputWithLabel from "./InputWithLabel";
import VenueList from "./VenueList";
import Header from "./Header";
import VenueDataService from "../services/VenueDataService";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const venues = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);
  const isSuccess = useSelector((state) => state.isSuccess);

  const [coordinate, setCoordiante] = useState({ lat: 1, long: 1 });
  const [query, setQuery] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordiante({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    dispatch({ type: "FETCH_INIT" });
    VenueDataService.nearbyVenues(coordinate.lat, coordinate.long)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, [coordinate.lat, coordinate.long]);

  const filteredVenues = Array.isArray(venues)
    ? venues.filter((venue) => {
        venue.name.toLowerCase().includes(query.toLowerCase()) |
          venue.address.toLowerCase().includes(query.toLowerCase());
      })
    : [];

  return (
    <div>
      <Header
        headerText="Mekanbul"
        motto="Civarınızdaki Mekanlarınızı Keşfedin!"
      />
      <InputWithLabel
        id="arama"
        label="Mekan Ara:"
        typ="text"
        isFocused
        onInputChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      />
      <hr />
      <div className="row">
        {isError && (
          <p>
            <strong>Bir şeyler ters gitti!</strong>
          </p>
        )}
        {isLoading && (
          <p>
            <strong>Yükleniyor...</strong>
          </p>
        )}
        {isSuccess && (
          <div className="row">
            <VenueList venues={filteredVenues} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
