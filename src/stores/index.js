import messageStore from "./messageStore";

const rootStore = {
  messageStore,
};

const useStores = () => {
  return rootStore;
};

export { rootStore, useStores };
