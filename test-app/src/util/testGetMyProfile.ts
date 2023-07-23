import { getMyProfile } from './getData';

async function testGetMyProfile() {
  try {
    const profile = await getMyProfile();
    console.log(profile);
  } catch (error) {
    console.error(error);
  }
}

testGetMyProfile();
