export const fetchJson = async (filePath) => {
  try {
    const response = await fetch(filePath);
    const text = await response.text();
    return JSON.parse(text);
  } catch (error) {
    console.error('Error fetching JSON:', error);
    throw error;
  }
};