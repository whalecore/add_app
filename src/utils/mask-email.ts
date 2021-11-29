// функция для маскировки доменного имени почты пользователя
export const maskEmail = (email: string): string => {
  const domainName = email.substr(email.indexOf("@") + 2).replace(/\.\w+/, "");
  const maskedEmail = email.replace(domainName, "*".repeat(domainName.length));
  return maskedEmail;
};
