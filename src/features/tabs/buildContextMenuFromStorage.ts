import { getEnabledActions } from "./storage";
import { TAB_ACTIONS } from "./actions";

const GROUP_ORDER = [
  "Navigation & Lifecycle",
  "Content & Sharing",
  "Tab State & Behavior",
  "Window Management",
];

export async function buildContextMenuFromStorage() {
  const enabledIds = await getEnabledActions();
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.contextMenus.removeAll(() => {
    GROUP_ORDER.forEach((group, index) => {
      const groupActions = TAB_ACTIONS.filter(
        (action) => action.group === group && enabledIds.includes(action.id)
      );

      groupActions.forEach((action) => {
        let title = action.label;

        if (action.id === "muteToggle" && tab?.mutedInfo) {
          title = tab.mutedInfo.muted ? "Unmute tab" : "Mute tab";
        }

        if (action.id === "pinToggle") {
          title = tab?.pinned ? "Unpin tab" : "Pin tab";
        }

        chrome.contextMenus.create({
          id: action.id,
          title,
          contexts: ["page"],
        });
      });

      // Add a separator after each group — except the last
      const isLastGroup = index === GROUP_ORDER.length - 1;
      if (groupActions.length && !isLastGroup) {
        chrome.contextMenus.create({
          id: `separator-${group}`,
          type: "separator",
          contexts: ["page"],
        });
      }
    });
  });
}
