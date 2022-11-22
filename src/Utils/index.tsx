export const downloadImage = (url: string, name: string) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  console.log(url);
  fetch(proxyUrl + url)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.style.display = 'none';
      link.href = url;
      link.download = name;
      link.click();
    });
};
