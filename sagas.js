import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA, putData } from './actions';
import Axios from "axios";

fetchData = () => {
    try {
      return Axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC9OY04qcszXe48J_D3aNSfIQ6em1gsegw&cx=007169331518472630987:wyr4dl8odkl&q=Динамо Киев`)
      .then(response => response.data.items)
    } catch (error) {
      console.log(error)
    }
  }

function* workerLoadData() {
    const data = yield call(fetchData);
     
    yield put(putData(data));
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}