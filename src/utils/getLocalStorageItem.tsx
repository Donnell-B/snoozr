function getLocalStorageItem(
  key: string,
  defaultValue: any,
  parseValue?: Function
) {
  if (typeof window === "undefined") {
    return defaultValue;
  }

  try {
    const item = window.localStorage.getItem(key);
    if (parseValue !== undefined) {
      return item ? parseValue(item) : defaultValue;
    }
    return item ? item : defaultValue;
  } catch (error) {
    console.log(error);
    return defaultValue;
  }
}

export default getLocalStorageItem;
