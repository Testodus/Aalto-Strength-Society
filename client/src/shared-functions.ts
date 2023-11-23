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

export const postNotice = (notice: string, title: string, userID: string) => {
  console.log('posting a notice', notice, title, userID);
  return '5';
};

export const updateNotice = (
  notice: string,
  title: string,
  userID: string,
  noticeID: string
) => {
  console.log('updating notice', notice, title, userID, noticeID);
  return true;
};
