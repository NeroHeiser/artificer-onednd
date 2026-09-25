import test from "node:test";
import assert from "node:assert/strict";

function resolveBaseRoute(foundryGlobal, moduleId) {
  return typeof foundryGlobal !== "undefined" && foundryGlobal.utils?.getRoute
    ? foundryGlobal.utils.getRoute(`modules/${moduleId}`)
    : `/modules/${moduleId}`;
}

test("resolveBaseRoute uses foundry.utils.getRoute when present", () => {
  const mockFoundry = {
    utils: {
      getRoute(path) {
        return `/game/${path}`;
      }
    }
  };
  const route = resolveBaseRoute(mockFoundry, "artificer-onednd");
  assert.equal(route, "/game/modules/artificer-onednd");
});

test("resolveBaseRoute falls back to leading slash module path without foundry global", () => {
  const route = resolveBaseRoute(undefined, "artificer-onednd");
  assert.equal(route, "/modules/artificer-onednd");
});
