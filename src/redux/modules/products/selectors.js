export function dataSelector(dataResponse) {
  const filtered = dataResponse.items.map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    description: item.description,
  }));
  return { total: dataResponse.total_count, data: filtered };
}
