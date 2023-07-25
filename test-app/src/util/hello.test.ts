import * as GetData from './getData';
jest.mock('../util/getData');

const resData = {
  id: 'TMDM',
  items_count: 10,
  name: 'YMDM SH',
  location: 'おおさか',
};

function getTestApi(number: number = 200) {
  if (number > 200) {
    return jest
      .spyOn(GetData, 'getMyProfile')
      .mockRejectedValueOnce('エラーです');
  }
  return jest.spyOn(GetData, 'getMyProfile').mockResolvedValue(resData);
}

test('失敗', async () => {
  expect.assertions(2);
  getTestApi(300);
  try {
    const data = await GetData.getMyProfile();
  } catch (error) {
    expect(error).toBe('エラーです');
    expect(error).not.toBe('違います');
  }
});

test('成功', async () => {
  getTestApi();
  const data = await GetData.getMyProfile();
  expect(data).toEqual(resData);
});
