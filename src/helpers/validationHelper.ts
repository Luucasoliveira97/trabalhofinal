export const isValidName = (name: string): boolean => {
  const nameRegex = /^[A-Za-z_\-' ]+$/;
  return name.length >= 3 && nameRegex.test(name);
};