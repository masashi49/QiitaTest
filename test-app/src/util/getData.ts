export type Profile = {
  id: string;
  items_count: number;
  name: string;
  location: string;
};

export function getMyProfile(): Promise<Profile> {
  return fetch('https://qiita.com/api/v2/users/TMDM', {
    headers: {
      Authorization: `Bearer 336eff6e0b4d1ff8294c3792786a0e12154874a2`,
    },
  }).then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      throw 'エラーです';
    }
    return {
      id: data.id,
      items_count: data.items_count,
      name: data.name,
      location: data.location,
    };
  });
}
