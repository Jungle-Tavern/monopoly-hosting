function adjustScale() {
    let scaleX = window.innerWidth / 600;
    let scaleY = window.innerHeight / 1200;
    let scale = Math.min(scaleX, scaleY);
    let wrapper = document.getElementById("wrapper");
    
    wrapper.style.transform = `scale(${scale})`;
    wrapper.style.left = `${(window.innerWidth - 1080 * scale) / 2}px`;
    wrapper.style.top = `${(window.innerHeight - 1920 * scale) / 2}px`;
    
    wrapper.style.visibility = "visible";
  }

  adjustScale();

  window.addEventListener("resize", adjustScale);
  document.addEventListener("DOMContentLoaded", adjustScale);