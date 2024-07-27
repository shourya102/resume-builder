export const handleClickOutside = (event, ref, close) => {
    if (ref.current && !ref.current.contains(event.target)) {
        close(false);
    }
};
