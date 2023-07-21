const Del_Main = () => {
  const observer = new MutationObserver(() => {
    const Main_Video = document.querySelector('ytd-rich-grid-renderer[class="style-scope ytd-two-column-browse-results-renderer"]');
    if (Main_Video) {
      Main_Video.remove();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
};
  
const Del_Content = () => {
  const observer = new MutationObserver(() => {
      const Content_Video = document.querySelector('div[id="secondary-inner"]');
      if (Content_Video) {
          Content_Video.remove();
      }
  });
  observer.observe(document.body, { childList: true, subtree: true });
};

window.onload = function(){
  Del_Main();
  Del_Content();
};