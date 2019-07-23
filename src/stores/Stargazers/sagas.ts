import { put, call, takeLatest } from 'redux-saga/effects';
import { getStars } from 'apis/github.service';

interface Action {
  type: string;
  payload: {
    userName: string;
    repoName: string;
    params: GitHub.Params;
  };
}

function* fetchStargazers(action: Action) {
  try {
    const { userName, repoName, params } = action.payload;
    const { data } = yield call(getStars, userName, repoName, params);
    yield put({
      type: 'stars/FETCH_SUCCESSED',
      payload: {
        users: data,
      },
    });
  } catch (e) {
    yield put({ type: 'stars/FETCH_FAILED', payload: { errMsg: e.message } });
  }
}

export default function* watchStargazersAsync() {
  yield takeLatest('FETCH_STARGAZERS', fetchStargazers);
}
