import test from "node:test";
import assert from "node:assert/strict";

function resolveWorkshopRoute(foundryGlobal, moduleId) {
  return typeof foundryGlobal !== "undefined" && foundryGlobal.utils?.getRoute
    ? foundryGlobal.utils.getRoute(`modules/${moduleId}`)
    : `/modules/${moduleId}`;
}

test("workshop resolveWorkshopRoute respects proxy prefix from foundry.utils.getRoute", () => {
  const mockFoundry = {
    utils: {
      getRoute(path) {
        return `/vtt-proxy/${path}`;
      }
    }
  };
  const route = resolveWorkshopRoute(mockFoundry, "artificer-onednd");
  assert.equal(route, "/vtt-proxy/modules/artificer-onednd");
});

test("workshop resolveWorkshopRoute defaults to leading slash without foundry global", () => {
  const route = resolveWorkshopRoute(undefined, "artificer-onednd");
  assert.equal(route, "/modules/artificer-onednd");
});
