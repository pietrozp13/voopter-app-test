let reqTimeout = [];

export const queueAction = (idx, callback, timeout) => {
  if (typeof reqTimeout[idx] === 'undefined' && reqTimeout[idx] === undefined) {
    reqTimeout[idx] = 0;
  }

  if (reqTimeout[idx]) {
    clearTimeout(reqTimeout[idx]);
    delete reqTimeout[idx];
  }

  reqTimeout[idx] = setTimeout(() => {
    if (typeof callback === 'function') {
      callback();
    }
  }, timeout);
};

export const getMinDate = (array) => {
  let dates = [];
  array.forEach((element) => {
    dates.push(new Date(element));
  });
  return new Date(Math.min.apply(null, dates)).toISOString().split('T')[0];
};

export const today = () => {
  return new Date().toISOString().split('T')[0];
};
