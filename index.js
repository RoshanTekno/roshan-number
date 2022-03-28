const numberFormat = (number) => {
  let numFormat = Number(number);
  return numFormat > 10 ? numFormat : `0${numFormat}`;
};

module.exports = numberFormat;
