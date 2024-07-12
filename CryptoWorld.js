let previousElement = null; // 用來存儲之前高亮的元素

function searchAndScroll(event) {
    event.preventDefault(); // 防止表單的默認提交行為

    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const context = document.querySelector('body'); // 獲取上下文

    if (previousElement) {
        const instance = new Mark(previousElement);
        instance.unmark(); // 清除之前高亮元素的背景色
    }

    const instance = new Mark(context);
    instance.mark(searchTerm, {
        className: 'highlight',
        done: function (count) {
            if (count > 0) {
                const firstHighlight = document.querySelector('.highlight');
                firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
                previousElement = context; // 更新之前高亮的元素
            }
        }
    });
}