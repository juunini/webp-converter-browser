given.addEventListener('change', () => {
  warning.style.display = 'none';
  const file = given.files[0];

  webpConverterBrowser.blobToWebP(file, { quality: quality.value }).then((blob) => {
    const url = URL.createObjectURL(blob);
    img.src = url;

    const image = new Image();
    image.src = url;

    image.addEventListener('load', () => {
      width.value = image.width;
      height.value = image.height;

      img.style.width = `${image.width}px`;
      img.style.height = `${image.height}px`;
    });
  });
});

download.addEventListener('click', () => {
  if (given.files.length === 0) {
    warning.style.display = 'block';
    return;
  }
  const file = given.files[0];

  webpConverterBrowser.blobToWebP(file, {
    quality: quality.value,
    width: width.value,
    height: height.value,
  }).then((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = `${file.name.split('.').slice(0, -1).join('.')}-converted.webp`;

    a.click();
    a.remove();
  });
});

quality.addEventListener('input', () => {
  qualityValue.innerText = quality.value;
});

width.addEventListener('input', () => {
  img.style.width = `${width.value}px`;
});

height.addEventListener('input', () => {
  img.style.height = `${height.value}px`;
});
