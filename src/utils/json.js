export const parseJSONWithFallback = (jsonString, fallback = null) => {
  try {
    const parsedValue = JSON.parse(jsonString);
    return parsedValue;
  } catch {
    // Invalid JSON
    return fallback;
  }
};
