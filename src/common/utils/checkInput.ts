export const checkInput = (input: string): boolean => {
    if (!new RegExp(/^\d+$/).test(input)) return true;
    return false;
  };