export interface Template {
  link: string;
  type: string;
  title: string;
}
const one: Template = {
  link: "mailto:gece.ramirez@gmail.com",
  type: "Email",
  title: "gece.ramirez@gmail.com",
};
const two: Template = {
  link: "https://www.linkedin.com/in/gian-ramirez/",
  type: "LinkedIn",
  title: "Giancarlo Ramirez",
};

export const bytype = {
  one,
  two,
};
export const contact = Object.values(bytype);
