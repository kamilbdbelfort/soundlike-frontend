import React from "react";
import NavBar from "../components/navbar/NavBar";
import Loading from "../components/loading/Loading";
import CardSection from "../components/cardSection/index";
import Cardsound from "../components/cardSection/soundCard/index";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectPopularSounds,
  selectLatestSounds,
  selectSearchedSounds,
  selectFilteredSounds,
  selectLoading,
} from "../store/sound/selectors";
import {
  fetchPopularSounds,
  fetchLatestSounds,
  fetchAllCategories,
} from "../store/sound/actions";

export default function HomePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const popularSounds = useSelector(selectPopularSounds);
  const latestSounds = useSelector(selectLatestSounds);
  const searchedSounds = useSelector(selectSearchedSounds);
  const filteredSounds = useSelector(selectFilteredSounds);

  useEffect(() => {
    dispatch(fetchAllCategories);
    dispatch(fetchPopularSounds);
    dispatch(fetchLatestSounds);
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <NavBar />
          {searchedSounds.length > 0 ? (
            <div>
              <CardSection title="SEARCHED" soundsList={searchedSounds} />
            </div>
          ) : filteredSounds.length > 0 ? (
            <div>
              <CardSection title="FILTERDED" soundsList={filteredSounds} />
            </div>
          ) : (
            <div>
              <CardSection title="POPULAR" soundsList={popularSounds} />
              <CardSection title="LATEST" soundsList={latestSounds} />{" "}
            </div>
          )}
          {/* {!searchedSounds && !filteredSounds ? (
            <div>
              <CardSection title="POPULAR" soundsList={popularSounds} />
              <CardSection title="LATEST" soundsList={latestSounds} />{" "}
            </div>
          ) : searchedSounds !== [] ? (
            <div>
              <CardSection />
            </div>
          ) : (
            <div>
              <CardSection />
            </div>
          )} */}
        </div>
      )}
    </div>
  );
}
