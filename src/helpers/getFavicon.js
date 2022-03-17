export default (string = "") => {
  //Remove http://
  const withoutHttp = string.slice(8);

  if (!withoutHttp.includes("/")) return;

  const length = withoutHttp.length;
  const positionSlash = withoutHttp.indexOf("/");

  const domain = withoutHttp.slice(0, -(length - positionSlash));

  return `http://www.google.com/s2/favicons?domain=${domain}`;
};
