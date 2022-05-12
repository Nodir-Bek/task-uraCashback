export function dataSelector(dataResponse) {
  const filtered = dataResponse.items.map((item) => ({
    id: item.id,
    name: item.name,
    short_description: item.short_description,
    currency: item.currency,
    rating: item.rating,
    status: item.status,
  }));
  return { total: dataResponse.total_count, data: filtered };
}
