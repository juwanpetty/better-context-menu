export async function handleTabAction(
  actionId: string | number,
  tab: chrome.tabs.Tab
) {
  if (!tab?.id) return;

  switch (actionId) {
    case "duplicate":
      chrome.tabs.duplicate(tab.id);
      break;

    case "close":
      chrome.tabs.remove(tab.id);
      break;

    case "reopenClosed":
      chrome.sessions.restore();
      break;

    case "copyUrl":
      if (tab.id && tab.url) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (text) => navigator.clipboard.writeText(text),
          args: [tab.url],
        });
      }
      break;

    case "bookmark":
      chrome.bookmarks.create({ title: tab.title, url: tab.url });
      break;

    case "pinToggle":
      chrome.tabs.update(tab.id, { pinned: !tab.pinned });
      break;

    case "muteToggle":
      chrome.tabs.update(tab.id, {
        muted: !tab.mutedInfo?.muted,
      });
      break;

    case "moveToWindow":
      chrome.windows.getAll({ populate: false }, (windows) => {
        const target = windows.find((w) => w.id !== tab.windowId);
        if (target && tab.id) {
          chrome.tabs.move(tab.id, { windowId: target.id!, index: -1 });
          chrome.windows.update(target.id!, { focused: true });
        }
      });
      break;

    default:
      console.warn(`Unknown tab action: ${actionId}`);
  }
}
