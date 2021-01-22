// Function to filter keys from an object
export const deleteKey = (ids, { ...data }) => {
  ids.forEach((id) => {
    delete data[id]
  })
  return data
};
