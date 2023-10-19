export const objectToGetParamsConvert = (data: Object): string => {
  let paramList = '';
  if (data) {
    paramList = '?';
    const entries = Object.entries(data);
    entries.forEach((element, index) => {
      if (index > 0) {
        paramList += '&';
      }
      paramList += element[0] + '=' + element[1].join(',');
    });
  }

  return paramList;
};
