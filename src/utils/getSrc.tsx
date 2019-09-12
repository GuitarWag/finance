export default (src: string | null) => {
  if (src !== null) {
    return src;
  }
  return '#';
};
