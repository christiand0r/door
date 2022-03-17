export const connectJSON = async () =>
  await fetch(
    "https://raw.githubusercontent.com/christiand0r/portfolio/main/db/content.json"
  ).then((res) => res.json());
