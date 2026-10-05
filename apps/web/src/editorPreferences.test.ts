import { beforeEach, describe, expect, it } from "vite-plus/test";

import { resolveAndPersistPreferredEditor } from "./editorPreferences";
import { removeLocalStorageItem } from "./hooks/useLocalStorage";

describe("resolveAndPersistPreferredEditor", () => {
  beforeEach(() => {
    removeLocalStorageItem("t3code:last-editor");
  });

  it("keeps an established editor as the default when Devin is also installed", () => {
    expect(resolveAndPersistPreferredEditor(["devin", "webstorm", "file-manager"])).toBe(
      "webstorm",
    );
  });

  it("defaults to Devin over the file manager", () => {
    expect(resolveAndPersistPreferredEditor(["file-manager", "devin"])).toBe("devin");
  });
});
