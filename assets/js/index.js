const ourBlogers = [
  {
    blogerPicture: './assets/images/blogers/blogger1.jpg',
    blogerName: 'James Morining',
    blogerposition: 'Health toplics Bloger ',
    article:
      'The start of a new decade brings with it new resolutions to improve one’s life, including a healthier lifestyle. ',
  },
  {
    blogerPicture: './assets/images/blogers/blogger2.jpg',
    blogerName: 'Julia Jonson',
    blogerposition: 'Food Blogger',
    article:
      'Variety of recipes and cooking-related articles with a focus on thoughtful and stylish living. ',
  },
  {
    blogerPicture: './assets/images/blogers/blogger3.jpg',
    blogerName: 'Smith Aniken',
    blogerposition: 'News Blogger',
    article:
      'In essence, a news blog is a type of news-publishing platform that mainly generates written and current-stories content',
  },
  {
    blogerPicture: './assets/images/blogers/blogger4.jpg',
    blogerName: 'Jenefer Bond',
    blogerposition: 'News blogger',
    article:
      'Here we bring you All the latest news about Ethiopia from the CES blogs.',
  },
  {
    blogerPicture: './assets/images/blogers/blogger5.jpg',
    blogerName: 'Eve Anston',
    blogerposition: 'Fashion Bloger',
    article:
      'A fashion blog can cover many topics, such as specific items of clothing and accessories, and beauty tips ',
  },
  {
    blogerPicture: './assets/images/blogers/blogger6.jpg',
    blogerName: 'Sentayhu Berhanu',
    blogerposition: 'Tech blogger',
    article:
      'Discover your best self through daily tips, quotes and new articles posted weekly. ',
  },
];
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  document.getElementById('cover').style.cssText = 'display: block; position: fixed; z-index: 5; width: 100%; height: 100%; background-color: #272a31; opacity: 0.9; top:0; left:0; mix-blend-mode: multiply; backdrop-filter: blur(6px);';
  document.getElementById('close').style.cssText = 'display: block;';
  document.getElementById('body').style.cssText = 'overflow:hidden;';
  document.getElementById('menu').style.cssText = 'display:block;  display: flex;';
});
const close = document.querySelector('#close');
close.addEventListener('click', () => {
  document.getElementById('cover').style.cssText = 'display:none; ';
  document.getElementById('body').style.cssText = 'overflow:none;';
  document.getElementById('menu').style.cssText = 'display:none';
});
function bloggersList() {
  let renderAll = '';
  let renderAllDsk = '';
  const renderblogger = document.getElementById('our-blogers');
  const renderbloggerDesktop = document.getElementById('our-blogers-desktop');
  let j = 0;
  ourBlogers.forEach((blogger) => {
    const render = `<div class="blogger-data">
    <div>
    <img src="./assets/images/black-and-white.jpg" class="image-black-and-white" alt="black-and-white">
    <img src="${blogger.blogerPicture}" class="blogger-picture" alt="blogger picture">
    </div>
    <div>
    <h3 class="blogger-name">${blogger.blogerName}<h3>
    <p class="orange blogger-detail">${blogger.blogerposition}</p>
    <p class="blogger-detail">${blogger.article}</p>
    </div>
    </div>
    <!-- Bloger -->
    `;
    renderAll += render;
    j += 1;
    if (j === 2) {
      renderAll += '<span class="less"></span> <span class="moreText">';
    }
    if (j === 6) {
      renderAll += '</span>';
    }
    renderAllDsk += render;
  });
  renderblogger.innerHTML = renderAll;
  renderbloggerDesktop.innerHTML = renderAllDsk;
  const seeMore = document.querySelector('#see-more-less');
  const ourBlogersSection = document.querySelector('#our-blogers');
  seeMore.addEventListener('click', () => {
    ourBlogersSection.classList.toggle('show-more');
    const container = seeMore.innerText;
    if (container === 'see Less') {
      seeMore.innerHTML = 'See More'
        + '&nbsp; <i id="updown" class="fa fa-angle-down" aria-hidden="true"></i>';
      document.querySelector('.moreText').style.cssText = 'display: none;';
    } else {
      seeMore.innerHTML = 'see Less'
        + '<i id="updown" class="fa fa-angle-up" aria-hidden="true"></i>';
      document.querySelector('.moreText').style.cssText = 'display: block;';
    }
  });
}
bloggersList();
