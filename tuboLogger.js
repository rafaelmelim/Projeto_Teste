export const turboLogger = (message, textColor = "blue") => {
  const textStyle = `text-color: ${textColor}`;
  console.log(`%c${message}`, textStyle);
};
