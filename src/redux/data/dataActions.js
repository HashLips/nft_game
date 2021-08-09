// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let allLips = await store
        .getState()
        .blockchain.lipToken.methods.getLips()
        .call();
      let allOwnerLips = await store
        .getState()
        .blockchain.lipToken.methods.getOwnerLips(account)
        .call();

      dispatch(
        fetchDataSuccess({
          allLips,
          allOwnerLips,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
