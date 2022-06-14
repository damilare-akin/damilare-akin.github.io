// function toggleScrollBar() {
//     // let scrollbar = document.querySelector(scrollbars)
// }

// get page name
var page = window.location.pathname.split('/').pop();
console.log('posts.html')
console.log(['title.html', 'posts.html'].includes(page))

// animate back button on each page
if (page == 'about.html') {
  const $about_HomeBtn = document.querySelector('.button2');
  const about_to_home = document.getElementById('arrow_a_home');
  $about_HomeBtn.onmouseover = () => {
    about_to_home.animate([
      { right: '0' },
      { right: '10px' },
      { right: '0' }
    ], {
      duration: 1000,
      iterations: 3
    });
  }
} else if (['title.html', 'posts.html'].includes(page)){
  const post_HomeBtn = document.getElementById('posts_home')
  const arrow_home = document.getElementById('arrow_p_home');
  const point = document.getElementById('point')
  post_HomeBtn.onmouseover = () => {
    arrow_home.style.display = 'block'
    // point.style.display = 'none'
    arrow_home.animate([
      { right: '0' },
      { right: '10px' },
      { right: '0' }
    ], {
      duration: 1000,
      iterations: 3
    });
    post_HomeBtn.onmouseout = () => {
      arrow_home.style.display = 'none'
      // point.style.display = 'inline'
    }
  }

  const post_AboutBtn = document.getElementById('posts_about')
  const arrow_about = document.getElementById('arrow_p_about');
  post_AboutBtn.onmouseover = () => {
    arrow_about.style.display = 'block'
    arrow_about.animate([
      { right: '0' },
      { right: '10px' },
      { right: '0' }
    ], {
      duration: 1000,
      iterations: 3
    });
  }
  post_AboutBtn.onmouseout = () => {
    arrow_about.style.display = 'none'
  }
}


