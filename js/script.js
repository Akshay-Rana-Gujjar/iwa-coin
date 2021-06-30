const root = document.querySelector("body");

// Real cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
cursor.setAttribute("data-scale", "1");
root.appendChild(cursor);

// // Following extra cursor element
// const follower = document.createElement('div');
// follower.classList.add('cursor', 'cursor__follower');
// root.appendChild(follower);

window.addEventListener("mousemove", (e) => {
  //   setPosition(follower, e);
  setPosition(cursor, e);
});
// window.addEventListener("scroll", (e) => {
  //   //   setPosition(follower, e);
//   setPosition(cursor, e);
// });

function setPosition(element, e) {
    element.setAttribute("style", `top: ${(e.pageY-7.5)}px; left: ${(e.pageX-7.5)}px;`)
  //   element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
//   element.style.transform = `translate3d(${e.pageX}px, ${e.pageY}px, 0) scale(${cursor.getAttribute("data-scale")}) `;
}

document.querySelectorAll("a, button, .faqs-item, .button").forEach((elem) => {
  elem.addEventListener("mouseenter", () =>{
    cursor.classList.add("cursor-hover");
    cursor.setAttribute("data-scale", "2.5");
  });
  elem.addEventListener("mouseleave", () =>{
    cursor.classList.remove("cursor-hover");
    
    cursor.setAttribute("data-scale", "1");
  });
});

const playButton = document.getElementById("play-button");

playButton.addEventListener("click", (e)=>{
  
  
  const videoHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/hOc_plnNtzw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  
  e.target.parentElement.innerHTML = videoHtml;
  
  
  
  // e.target.remove();
  
  
});