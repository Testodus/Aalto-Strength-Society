export const filterErrors = (label: string, message?: Array<string>) => {
  if (!message || !message.length) return '';
  const errors = message.filter((message?: string) => {
    if (message && message.includes(label)) {
      return message;
    }
  });

  if (errors.length) {
    return errors.reduce(
      (wholeString, message: string) => message + '. ' + wholeString
    );
  } else {
    return '';
  }
};

export const emptyErrors = {
  username: '',
  password: '',
  email: '',
  general: '',
};
