import { getInstance } from "../api";


export const axios = require('axios');

const instance = getInstance();

const USER_ID = 1;

describe('API test', () => {
  test('should get user by id', async () => {
    const response = await instance.get(`/users/${USER_ID}`);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(USER_ID);
  });

  test('should handle error', async () => {
    try {
      await instance.get(`users/`);
    } catch (error: any) {
      expect(error.response.status).toBe(400);
    }
  });
});