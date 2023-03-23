const del_main = () => {
    setInterval(() => {
        const kor_trends = document.querySelector('ytd-rich-grid-renderer[class="style-scope ytd-two-column-browse-results-renderer"]')
        if (kor_trends) {
            kor_trends.remove()
        }
    }
    , 1);
}

const del_content = () => {
    setInterval(() => {
        const eng_trends = document.querySelector('div[id="secondary-inner"]')
        if (eng_trends) {
            eng_trends.remove()
        }
    }
    , 1);
}

window.onload = function(){
    del_main();
    del_content();
};