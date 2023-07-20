test('テスト名', () => {
  expect(1).toBe(1);
});

export type Profile = { id: string; name?: string; age: number; email: string };

export function getMyProfile(): Promise<Profile> {
  return fetch('https://myapi.testing.com/my/profile', {
    headers: {
      'Authorization': `Bearer 336eff6e0b4d1ff8294c3792786a0e12154874a2`,
    }
  }).then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  });
}
