import { put, takeEvery,call } from 'redux-saga/effects';
import axios from 'axios';

//grabs function before getting to store, and processes.
function* getData(action){
    console.log('in getDataSaga')
    try {
        const getDataResponse = yield call(axios.get, '/api/location');
        console.log(getDataResponse.data)
        yield put({
            type: 'GET_LOCALDATA',
            payload: getDataResponse.data
        })
    } catch (error) {}
}

function* getDataSaga() {
    // When GET_LOCATION is dispached, call the getDataSaga function
    yield takeEvery('GET_LOCATION', getData);
}

export default getDataSaga;