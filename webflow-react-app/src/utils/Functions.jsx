export const Scroll_To_Top = () => {
    if (typeof window !== 'undefined') {
        window.scroll(0, 0);
    }
};