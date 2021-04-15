export const stripStringHtml = (string) => {
    return string.replace(/(<([^>]+)>)/gi, "");
};