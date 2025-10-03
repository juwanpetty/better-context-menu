import { STORAGE_KEY, TAB_ACTIONS } from "./actions";

export const getEnabledActions = async (): Promise<string[]> => {
  return new Promise((resolve) => {
    chrome.storage.sync.get([STORAGE_KEY], (result) => {
      const stored = result[STORAGE_KEY];

      // If nothing is set, return all actions
      if (!stored) {
        const allActionIds = TAB_ACTIONS.map((action) => action.id);

        chrome.storage.sync.set({ [STORAGE_KEY]: allActionIds }, () => {
          resolve(allActionIds);
        });
      } else {
        resolve(stored);
      }
    });
  });
};

export const setEnabledActions = async (actionIds: string[]) => {
  return new Promise<void>((resolve) => {
    chrome.storage.sync.set({ [STORAGE_KEY]: actionIds }, () => resolve());
  });
};
