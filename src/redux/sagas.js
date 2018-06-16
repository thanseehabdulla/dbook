import { all } from 'redux-saga/effects';
import dataSagas from './data/saga';


export default function* rootSaga(getState) {
    yield all([
        dataSagas(),
    ]);
}
