import fetch from 'node-fetch';
import { getMyProfile } from './getData'; // getMyProfile関数が定義されているファイルを指定します

const mockedFetch = jest.fn();
global.fetch = mockedFetch;

describe('getMyProfile', () => {
  beforeEach(() => {
    // テストの前にモックをクリアします
    mockedFetch.mockClear();
  });

  it('throws an error if the API responds with an error', async () => {
    // mockedFetchがエラーを返すように設定します
mockedFetch.mockImplementationOnce(() =>
  Promise.resolve({
    ok: false,
    json: () => Promise.resolve({ message: 'Error!' }),
  })
);

    // getMyProfileがエラーを投げることを確認します
    await expect(getMyProfile()).rejects.toThrow('エラーです');
  });
});
