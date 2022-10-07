export const loadImages = () => {
  let images = [];
  const importAll = (r) => {
    let files = [];
    r.keys().forEach((item, index) => {
      files.push(r(item));
    });
    return files;
  };
  images = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));
  return images;
};
