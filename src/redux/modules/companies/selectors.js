export function dataSelector(dataResponse) {
  const filtered = dataResponse.data.map((item) => ({
    id: '1',
    name: 'name',
  }));
  return { total: dataResponse.total, data: filtered };
}
