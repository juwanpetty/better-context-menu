import { useEffect, useState } from "react";
import { TAB_ACTIONS } from "../features/tabs/actions";
import { getEnabledActions, setEnabledActions } from "../features/tabs/storage";
import {
  SettingsContent,
  SettingsGroup,
  SettingsGroupContent,
  SettingsGroupLabel,
  SettingsMenu,
  SettingsMenuItem,
  SettingsMenuToggle,
} from "./settings";

const GROUP_ORDER = [
  "Navigation & Lifecycle",
  "Content & Sharing",
  "Tab State & Behavior",
  "Window Management",
];

export function AppSettings() {
  const [enabled, setEnabled] = useState<string[]>([]);

  useEffect(() => {
    getEnabledActions().then(setEnabled);
  }, []);

  function handleToggle(id: string) {
    const updated = enabled.includes(id)
      ? enabled.filter((i) => i !== id)
      : [...enabled, id];

    setEnabled(updated);
    setEnabledActions(updated);

    chrome.runtime.sendMessage({
      type: "UPDATE_CONTEXT_MENU",
      payload: updated,
    });
  }

  return (
    <SettingsContent>
      {GROUP_ORDER.map((group) => {
        const groupActions = TAB_ACTIONS.filter(
          (action) => action.group === group
        );

        return (
          <SettingsGroup>
            <SettingsGroupLabel>{group}</SettingsGroupLabel>

            <SettingsGroupContent>
              <SettingsMenu>
                {groupActions.map((action) => (
                  <SettingsMenuItem>
                    <label htmlFor={action.id}>{action.label}</label>
                    <SettingsMenuToggle
                      id={action.id}
                      checked={enabled.includes(action.id)}
                      onCheckedChange={() => handleToggle(action.id)}
                    />
                  </SettingsMenuItem>
                ))}
              </SettingsMenu>
            </SettingsGroupContent>
          </SettingsGroup>
        );
      })}
    </SettingsContent>
  );
}
