import { buildContextMenuFromStorage } from "../features/tabs/buildContextMenuFromStorage";
import { handleTabAction } from "../features/tabs/handlers";

// Rebuild context menu when the extension is first installed or updated
chrome.runtime.onInstalled.addListener(() => {
  buildContextMenuFromStorage();
});

// Rebuild context menu when the browser starts
chrome.runtime.onStartup.addListener(() => {
  buildContextMenuFromStorage();
});

// Rebuild context menu when user updates settings from the popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "UPDATE_CONTEXT_MENU") {
    buildContextMenuFromStorage();
  }
});

// Handle tab action when user clicks a context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
  handleTabAction(info.menuItemId, tab!);
});
