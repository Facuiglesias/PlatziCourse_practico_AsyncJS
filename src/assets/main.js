const API = "https://api.github.com/users/Facuiglesias/repos";
const svgJs = `
  <svg 
  xmlns="http://www.w3.org/2000/svg"  
  viewBox="0 0 48 48" 
  width="96px" 
  height="96px">
    <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
    <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/>
  </svg>
`;

const svgHTML = `
  <svg 
  xmlns="http://www.w3.org/2000/svg" 
  x="0px" 
  y="0px" 
  width="100" 
  height="100" 
  viewBox="0 0 48 48">
    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
    <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
    <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
  </svg>
`;
const svgCSS = `
  <svg 
  xmlns="http://www.w3.org/2000/svg" 
  x="0px" 
  y="0px" 
  width="100" 
  height="100" 
  viewBox="0 0 48 48">
    <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
    <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
    <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
    <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
  </svg>
  `;

// const content = null || document.getElementById("content");

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

// (async () => {
//   try {
//     const repos = await fetchData(API);
//     const reposNames = repos.map((repo) => repo.name);
//     for (let i = 0; i < reposNames.length; i++) {
//       content.innerHTML =
//         content.innerHTML +
//         `
//       <div class="group relative">
//         <div
//           class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
//         >
//           <img src="" alt="" class="w-full" />
//         </div>
//         <div class="mt-4 flex justify-between">
//           <h3 class="text-sm text-gray-700">
//             <span aria-hidden="true" class="absolute inset-0">
//             ${reposNames[i]}
//             </span>
//           </h3>
//         </div>
//       </div>`;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// })();

(async () => {
  try {
    const repos = await fetchData(API);
    // console.log(repos);
    const reposNames = repos.map((repo) => repo.name);
    const reposDescription = repos.map((repo) => repo.description);
    const reposLang = repos.map((repo) => repo.language);
    console.log(reposLang);
    for (let i = 0; i < reposNames.length; i++) {
      content.innerHTML =
        content.innerHTML +
        `
          <div class="card">
            <div class="container-card bg-green-box">
            ${
              reposLang[i] == "JavaScript"
                ? svgJs
                : reposLang[i] == "HTML"
                ? svgHTML
                : reposLang[i] == "CSS"
                ? svgCSS
                : false
            }
              <p class="card-title">${reposNames[i]}</p>
              <p class="card-description">${reposDescription[i]}</p>
            </div>
          </div>
        </div>
      `;
    }
  } catch (error) {
    console.log(error);
  }
})();

{
  /* <svg
  width="80"
  height="80"
  viewBox="0 0 120 120"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="1"
    y="1"
    width="118"
    height="118"
    rx="24"
    fill="url(#paint0_linear_1366_4547)"
    fill-opacity="0.15"
    stroke="url(#paint1_radial_1366_4547)"
    stroke-width="2"
  ></rect>
  <path
    d="M33.2182 61.4C33.2182 75.425 37.2682 86.75 51.5932 86.75C65.9182 86.75 69.8182 75.425 69.8182 61.4C69.8182 47.225 65.9182 35.9 51.5932 35.9C37.2682 35.9 33.2182 47.225 33.2182 61.4ZM43.7182 61.4C43.7182 53.075 45.5932 46.1 51.5932 46.1C57.5182 46.1 59.3182 53.075 59.3182 61.4C59.3182 69.65 57.5182 76.55 51.5932 76.55C45.5932 76.55 43.7182 69.65 43.7182 61.4Z"
    fill="#54E8A9"
  ></path>
  <path
    d="M87.7143 36.35L78.0543 56H80.1243L89.7843 36.35H87.7143ZM74.6943 40.16C74.6943 42.44 76.4043 44.15 78.6843 44.15C80.9343 44.15 82.7043 42.44 82.7043 40.16C82.7043 37.91 80.9343 36.14 78.6843 36.14C76.4043 36.14 74.6943 37.91 74.6943 40.16ZM77.1243 40.16C77.1243 39.29 77.7543 38.57 78.6843 38.57C79.5543 38.57 80.2743 39.29 80.2743 40.16C80.2743 41.09 79.5543 41.72 78.6843 41.72C77.7543 41.72 77.1243 41.09 77.1243 40.16ZM85.3143 52.31C85.3143 54.59 87.0243 56.3 89.3043 56.3C91.5543 56.3 93.3243 54.59 93.3243 52.31C93.3243 50.06 91.5543 48.29 89.3043 48.29C87.0243 48.29 85.3143 50.06 85.3143 52.31ZM87.7443 52.31C87.7443 51.44 88.3743 50.72 89.3043 50.72C90.1743 50.72 90.8943 51.44 90.8943 52.31C90.8943 53.24 90.1743 53.87 89.3043 53.87C88.3743 53.87 87.7443 53.24 87.7443 52.31Z"
    fill="#2FCB89"
  ></path>
  <defs>
    <linearGradient
      id="paint0_linear_1366_4547"
      x1="0.0063367"
      y1="0.168432"
      x2="120.853"
      y2="119.009"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#2FCB89" stop-opacity="0.7"></stop>
      <stop offset="0.489583" stop-color="#2FCB89" stop-opacity="0"></stop>
      <stop offset="1" stop-color="#2FCB89" stop-opacity="0.7"></stop>
    </linearGradient>
    <radialGradient
      id="paint1_radial_1366_4547"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)"
    >
      <stop stop-color="#54E8A9"></stop>
      <stop offset="1" stop-color="#1A3E31" stop-opacity="0.2"></stop>
    </radialGradient>
  </defs>
</svg>; */
}
