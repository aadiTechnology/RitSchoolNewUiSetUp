/**
 * To render the Logo properly based on school terms name
 * @param url
 * @returns
 */
export const prepareLogoUrl = (url: string) => {
  return `https://riteschoolmobileservicehttps.riteschool.com/images/${url
    ?.split(' ')
    .join('%20')}_logo.png`;
};

export const toTitleCase = (str) => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const getBreadCrumbsFromPath = () => {
  const path = location.pathname.replace(/^\//, '').split('/');

  const breadCrumbs = path.map((item, index) => {
    return {
      label: toTitleCase(item),
      link: '/' + path.slice(0, index + 1).join('/')
    };
  });
  return breadCrumbs;
};
