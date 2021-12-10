export const maskEmail = (email: string): string => {
  const domainName = email.substring(email.indexOf("@") + 2).replace(/\.\w+/, "");
  const maskedEmail = email.replace(domainName, "*".repeat(domainName.length));
  return maskedEmail;
};
