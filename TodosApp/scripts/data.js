const createState = (initialData) => {
  let state = initialData;
  let fn = null;

  const getState = () => state;

  const setState = (data) => {
    state = data;

    if (fn) {
        fn(state);
    }
  };

  const onUpdate = (changeFn) => {
      fn = changeFn;
  }

  return [getState, setState, onUpdate];
};
