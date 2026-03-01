import GameSavingLoader from "../gamesavingloadASYNC";
import read from "../reader";
import json from "../parser";


jest.mock('../reader.js');
jest.mock('../parser.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test('test load from gameSavingLoader with resolved data', async () => {

  const expectedJson = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  read.mockResolvedValue();
  json.mockResolvedValue(expectedJson);

  const data = await GameSavingLoader.load();

  expect(
    data
  ).toBe(
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'
  );

});

test('test load from gameSavingLoader with rejected data', async () => {

  read.mockRejectedValue(new Error("Error"));

  await expect(GameSavingLoader.load()).rejects.toThrow("Error");

});