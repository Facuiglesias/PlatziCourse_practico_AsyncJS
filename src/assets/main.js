const API = "https://api.github.com/users/Facuiglesias/repos";

// const content = null || document.getElementById("content");

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const repos = await fetchData(API);
    console.log(repos.map((repo) => repo.name));
    let view = `
    ${repos.map(
      (repo) => `
    <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
        >
          <img src="" alt="" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${repo.name}
          </h3>
        </div>
      </div>
    `
    )}
      
      `;
  } catch {}
})();
