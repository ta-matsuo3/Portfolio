// export const skillIcons = {
//     html: '../../../assets/icons/html.svg',
//     css: "../../../../assets/icons/css.svg",
//     js: "../../../../assets/icons/js.svg",
//     react: "../../../../assets/icons/react.svg",
// };

export const skillIcons = {
    html: new URL("/src/assets/icons/html.svg", import.meta.url).href,
    css: new URL("/src/assets/icons/css.svg", import.meta.url).href,
    js: new URL("/src/assets/icons/js.svg", import.meta.url).href,
    react: new URL("/src/assets/icons/react.svg", import.meta.url).href,
};