export type TabAction = {
  id: string;
  label: string;
  group: string;
  toggle?: boolean;
};

export const TAB_ACTIONS: TabAction[] = [
  {
    id: "duplicate",
    label: "Duplicate tab",
    group: "Navigation & Lifecycle",
  },
  {
    id: "close",
    label: "Close tab",
    group: "Navigation & Lifecycle",
  },
  {
    id: "reopenClosed",
    label: "Reopen closed tab",
    group: "Navigation & Lifecycle",
  },
  {
    id: "copyUrl",
    label: "Copy tab URL",
    group: "Content & Sharing",
  },
  {
    id: "bookmark",
    label: "Add to bookmarks",
    group: "Content & Sharing",
  },
  {
    id: "pinToggle",
    label: "Pin/unpin tab",
    group: "Tab State & Behavior",
    toggle: true,
  },
  {
    id: "muteToggle",
    label: "Mute/unmute tab",
    group: "Tab State & Behavior",
    toggle: true,
  },
  {
    id: "moveToWindow",
    label: "Move tab to another window",
    group: "Window Management",
  },
];

export const STORAGE_KEY = "enabledActions";
