const blogView = document.getElementById("blog-view");

const posts = [
  {
    id: 1,
    title: "Building worker help each other with at construction site",
    img: "assets/img/blog/blog_img01.jpg",
    date: "23 Dec 2022",
    link: "#",
    type: "Video",
    autor: "Admin",
    descarga: "assets/dowmload/BROCHURE_AP_PROSPECTIVA_2023.pdf"
  },
  {
    id: 2,
    title: "Full shot roofers working together with helmets",
    img: "assets/img/blog/blog_img01.jpg",
    date: "23 Dec 2022",
    link: "https://www.facebook.com/",
    type: "Video",
    autor: "Admin",
    descarga: ""
  },
  {
    id: 3,
    title: "Hard hatswork at the heavy manufacturing factory industrial",
    img: "assets/img/blog/blog_img01.jpg",
    date: "23 Dec 2022",
    link: "#",
    type: "Video",
    autor: "Admin",
    descarga: ""
  },
  {
    id: 4,
    title: "Building worker help each other with at construction site",
    img: "assets/img/blog/blog_img01.jpg",
    date: "23 Dec 2022",
    link: "#",
    type: "Video",
    autor: "Admin",
    descarga: ""
  },
  {
    id: 5,
    title: "Full shot roofers working together with helmets",
    img: "assets/img/blog/blog_img01.jpg",
    date: "23 Dec 2022",
    link: "#",
    type: "Video",
    autor: "Admin",
    descarga: ""
  },
  {
    id: 6,
    title: "Hard hatswork at the heavy manufacturing factory industrial",
    img: "assets/img/blog/blog_img01.jpg",
    date: "23 Dec 2022",
    link: "#",
    type: "Video",
    autor: "Admin",
    descarga: ""
  },
  {
    id: 7,
    title: "Building worker help each other with at construction site",
    img: "assets/img/blog/blog_img01.jpg",
    date: "23 Dec 2022",
    link: "#",
    type: "Video",
    autor: "Admin",
    descarga: ""
  },
  {
    id: 8,
    title: "Full shot roofers working together with helmets",
    img: "assets/img/blog/blog_img01.jpg",
    date: "23 Dec 2022",
    link: "#",
    type: "Video",
    autor: "Admin",
    descarga: ""
  },
  {
    id: 9,
    title: "Hard hatswork at the heavy manufacturing factory industrial",
    img: "assets/img/blog/blog_img01.jpg",
    date: "23 Dec 2022",
    link: "#",
    type: "Video",
    autor: "Admin",
    descarga: ""
  }
];

/* STARTS LOGICAL */

const postsHTML = posts.map((post) => createPost(post)).join("");
blogView.innerHTML = postsHTML;


function createPost(post) {
  return `
  <div class="col-12 col-md-6 col-xl-4">
      <div class="blog-post-item">
          <div class="blog-post-thumb">
              <a href="${post.link}" target="_blank"><img src="${post.img}" alt=""></a>
          </div>
          <div class="blog-post-content">
              <a href="${post.link}"target="_blank" class="tag">${post.type}</a>
              <div class="blog-meta">
                  <ul class="list-wrap">
                      <li><i class="far fa-user"></i> By ${post.autor}
                      </li>
                      <li><i class="fas fa-calendar-alt"></i>${post.date}</li>
                  </ul>
              </div>
              <h2 class="title"><a href="${post.link}" target="_blank">${post.title}</a>
              </h2>
              ${ post.descarga && `<a href="${post.descarga}" download target="_blank" class="btn btn-primary p-3"><small>Descargar Recurso</small></a>`}
          </div>
      </div>
  </div>`;
  }
