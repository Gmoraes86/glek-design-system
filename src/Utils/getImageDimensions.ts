export const getImageDimensions = (image: string) => {
  const img = new Image();
  img.src = image;

  return {
    width: img.width,
    height: img.height,
  };
};
