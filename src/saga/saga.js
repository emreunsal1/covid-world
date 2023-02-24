import { call, put, takeEvery } from "redux-saga/effects";
import { getCountriesStatus } from "../stores/countries";
import { getAllCountryAndCity } from "../services";

function* fetchCountries() {
  try {
    const countries = yield call(getAllCountryAndCity);
    yield put(getCountriesStatus(countries));
  } catch (e) {
    yield put(getCountriesStatus([]));
  }
}

function* mySaga() {
  yield takeEvery("COUNTRIES_FETCH_REQUESTED", fetchCountries);
}

export default mySaga;
