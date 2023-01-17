
async function getImage() {

  searchBtn.innerHTML = 'Loading...'

  const res = await fetch(
    "https://projects-daw2-production.up.railway.app/api/gatos?random"
  );
  const img = await res.json().then(searchBtn.innerText = "Obtener Nueva Imagen");

  const url = img.imgUrl;
  const description = img.description;

  return [url, description]
}
