import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

// Ideally we' shouldent make components which are responsible for BackEnd logic
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  // Fetching data from Server
  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());

        dispatch(fetchStatusActions.markFetchingFinished());
        // This will help to show the loading spinner

        dispatch(itemsActions.addInitialItems(items[0])); // As we're getting an array inside an array thus at 0 Index we have data array
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log(`Fetch aborted`);
        } else {
          console.error(`Fetch error:`, error);
        }
      });

    return () => {
      // console.log(`Cleaning up useEffect`);
      controller.abort();
    };
  }, [fetchStatus]);

  return <> </>; // headless components i.e. Thy have UI but its not their responsibility. They are responsible for backend logic, in this case its used in App.jsx to fetch items and make it available to components.
};
export default FetchItems;

// home
