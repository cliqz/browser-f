/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

const stubs = new Map();

stubs.set("performance", {
  from: "server2.conn4.child1/obj30",
  prototype: {
    type: "object",
    actor: "server2.conn4.child1/obj33",
    class: "PerformancePrototype",
    extensible: true,
    frozen: false,
    sealed: false,
    ownPropertyLength: 16,
    preview: {
      kind: "Object",
      ownProperties: {
        now: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            type: "object",
            actor: "server2.conn4.child1/obj34",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "now",
            displayName: "now",
          },
        },
        getEntries: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            type: "object",
            actor: "server2.conn4.child1/obj35",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "getEntries",
            displayName: "getEntries",
          },
        },
        getEntriesByType: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            type: "object",
            actor: "server2.conn4.child1/obj36",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "getEntriesByType",
            displayName: "getEntriesByType",
          },
        },
        getEntriesByName: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            type: "object",
            actor: "server2.conn4.child1/obj37",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "getEntriesByName",
            displayName: "getEntriesByName",
          },
        },
        clearResourceTimings: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            type: "object",
            actor: "server2.conn4.child1/obj38",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "clearResourceTimings",
            displayName: "clearResourceTimings",
          },
        },
        setResourceTimingBufferSize: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            type: "object",
            actor: "server2.conn4.child1/obj39",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "setResourceTimingBufferSize",
            displayName: "setResourceTimingBufferSize",
          },
        },
        mark: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            type: "object",
            actor: "server2.conn4.child1/obj40",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "mark",
            displayName: "mark",
          },
        },
        clearMarks: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            type: "object",
            actor: "server2.conn4.child1/obj41",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "clearMarks",
            displayName: "clearMarks",
          },
        },
        measure: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            type: "object",
            actor: "server2.conn4.child1/obj42",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "measure",
            displayName: "measure",
          },
        },
        clearMeasures: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            type: "object",
            actor: "server2.conn4.child1/obj43",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "clearMeasures",
            displayName: "clearMeasures",
          },
        },
      },
      ownPropertiesLength: 16,
    },
  },
  ownProperties: {
    userTimingJsNow: {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false,
    },
    userTimingJsNowPrefixed: {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false,
    },
    userTimingJsUserTiming: {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false,
    },
    userTimingJsUserTimingPrefixed: {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false,
    },
    userTimingJsPerformanceTimeline: {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false,
    },
    userTimingJsPerformanceTimelinePrefixed: {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false,
    },
    timeOrigin: {
      enumerable: true,
      writable: true,
      value: 1500971976372.9033,
    },
    timing: {
      enumerable: true,
      writable: true,
      value: {
        type: "object",
        actor: "server2.conn4.child1/obj44",
        class: "PerformanceTiming",
        extensible: true,
        frozen: false,
        sealed: false,
        ownPropertyLength: 0,
        preview: {
          kind: "Object",
          ownProperties: {},
          ownPropertiesLength: 0,
          safeGetterValues: {
            navigationStart: {
              getterValue: 1500971976373,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            unloadEventStart: {
              getterValue: 0,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            unloadEventEnd: {
              getterValue: 0,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            redirectStart: {
              getterValue: 0,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            redirectEnd: {
              getterValue: 0,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            fetchStart: {
              getterValue: 1500971982226,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            domainLookupStart: {
              getterValue: 1500971982251,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            domainLookupEnd: {
              getterValue: 1500971982255,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            connectStart: {
              getterValue: 1500971982255,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            connectEnd: {
              getterValue: 1500971982638,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
          },
        },
      },
    },
    navigation: {
      enumerable: true,
      writable: true,
      value: {
        type: "object",
        actor: "server2.conn4.child1/obj45",
        class: "PerformanceNavigation",
        extensible: true,
        frozen: false,
        sealed: false,
        ownPropertyLength: 0,
        preview: {
          kind: "Object",
          ownProperties: {},
          ownPropertiesLength: 0,
          safeGetterValues: {
            type: {
              getterValue: 0,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            redirectCount: {
              getterValue: 0,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
          },
        },
      },
    },
    onresourcetimingbufferfull: {
      enumerable: true,
      writable: true,
      value: {
        type: "null",
      },
    },
  },
  safeGetterValues: {
    timeOrigin: {
      getterValue: 1500971976372.9033,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    timing: {
      getterValue: {
        type: "object",
        actor: "server2.conn4.child1/obj44",
        class: "PerformanceTiming",
        extensible: true,
        frozen: false,
        sealed: false,
        ownPropertyLength: 0,
        preview: {
          kind: "Object",
          ownProperties: {},
          ownPropertiesLength: 0,
          safeGetterValues: {
            navigationStart: {
              getterValue: 1500971976373,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            unloadEventStart: {
              getterValue: 0,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            unloadEventEnd: {
              getterValue: 0,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            redirectStart: {
              getterValue: 0,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            redirectEnd: {
              getterValue: 0,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            fetchStart: {
              getterValue: 1500971982226,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            domainLookupStart: {
              getterValue: 1500971982251,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            domainLookupEnd: {
              getterValue: 1500971982255,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            connectStart: {
              getterValue: 1500971982255,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            connectEnd: {
              getterValue: 1500971982638,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
          },
        },
      },
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    navigation: {
      getterValue: {
        type: "object",
        actor: "server2.conn4.child1/obj45",
        class: "PerformanceNavigation",
        extensible: true,
        frozen: false,
        sealed: false,
        ownPropertyLength: 0,
        preview: {
          kind: "Object",
          ownProperties: {},
          ownPropertiesLength: 0,
          safeGetterValues: {
            type: {
              getterValue: 0,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
            redirectCount: {
              getterValue: 0,
              getterPrototypeLevel: 1,
              enumerable: true,
              writable: true,
            },
          },
        },
      },
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    onresourcetimingbufferfull: {
      getterValue: {
        type: "null",
      },
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
  },
});

stubs.set("timing", {
  from: "server1.conn1.child1/obj31",
  prototype: {
    type: "object",
    actor: "server1.conn1.child1/obj32",
    class: "PerformanceTimingPrototype",
    extensible: true,
    frozen: false,
    sealed: false,
    ownPropertyLength: 23,
    preview: {
      kind: "Object",
      ownProperties: {
        toJSON: {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            type: "object",
            actor: "server1.conn1.child1/obj33",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "toJSON",
            displayName: "toJSON",
          },
        },
        navigationStart: {
          configurable: true,
          enumerable: true,
          get: {
            type: "object",
            actor: "server1.conn1.child1/obj34",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "get navigationStart",
            displayName: "get navigationStart",
          },
          set: {
            type: "undefined",
          },
        },
        unloadEventStart: {
          configurable: true,
          enumerable: true,
          get: {
            type: "object",
            actor: "server1.conn1.child1/obj35",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "get unloadEventStart",
            displayName: "get unloadEventStart",
          },
          set: {
            type: "undefined",
          },
        },
        unloadEventEnd: {
          configurable: true,
          enumerable: true,
          get: {
            type: "object",
            actor: "server1.conn1.child1/obj36",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "get unloadEventEnd",
            displayName: "get unloadEventEnd",
          },
          set: {
            type: "undefined",
          },
        },
        redirectStart: {
          configurable: true,
          enumerable: true,
          get: {
            type: "object",
            actor: "server1.conn1.child1/obj37",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "get redirectStart",
            displayName: "get redirectStart",
          },
          set: {
            type: "undefined",
          },
        },
        redirectEnd: {
          configurable: true,
          enumerable: true,
          get: {
            type: "object",
            actor: "server1.conn1.child1/obj38",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "get redirectEnd",
            displayName: "get redirectEnd",
          },
          set: {
            type: "undefined",
          },
        },
        fetchStart: {
          configurable: true,
          enumerable: true,
          get: {
            type: "object",
            actor: "server1.conn1.child1/obj39",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "get fetchStart",
            displayName: "get fetchStart",
          },
          set: {
            type: "undefined",
          },
        },
        domainLookupStart: {
          configurable: true,
          enumerable: true,
          get: {
            type: "object",
            actor: "server1.conn1.child1/obj40",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "get domainLookupStart",
            displayName: "get domainLookupStart",
          },
          set: {
            type: "undefined",
          },
        },
        domainLookupEnd: {
          configurable: true,
          enumerable: true,
          get: {
            type: "object",
            actor: "server1.conn1.child1/obj41",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "get domainLookupEnd",
            displayName: "get domainLookupEnd",
          },
          set: {
            type: "undefined",
          },
        },
        connectStart: {
          configurable: true,
          enumerable: true,
          get: {
            type: "object",
            actor: "server1.conn1.child1/obj42",
            class: "Function",
            extensible: true,
            frozen: false,
            sealed: false,
            name: "get connectStart",
            displayName: "get connectStart",
          },
          set: {
            type: "undefined",
          },
        },
      },
      ownPropertiesLength: 23,
    },
  },
  ownProperties: {},
  safeGetterValues: {
    navigationStart: {
      getterValue: 1500967716401,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    unloadEventStart: {
      getterValue: 0,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    unloadEventEnd: {
      getterValue: 0,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    redirectStart: {
      getterValue: 0,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    redirectEnd: {
      getterValue: 0,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    fetchStart: {
      getterValue: 1500967716401,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    domainLookupStart: {
      getterValue: 1500967716401,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    domainLookupEnd: {
      getterValue: 1500967716401,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    connectStart: {
      getterValue: 1500967716401,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    connectEnd: {
      getterValue: 1500967716401,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    secureConnectionStart: {
      getterValue: 1500967716401,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    requestStart: {
      getterValue: 1500967716401,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    responseStart: {
      getterValue: 1500967716401,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    responseEnd: {
      getterValue: 1500967716401,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    domLoading: {
      getterValue: 1500967716426,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    domInteractive: {
      getterValue: 1500967716552,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    domContentLoadedEventStart: {
      getterValue: 1500967716696,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    domContentLoadedEventEnd: {
      getterValue: 1500967716715,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    domComplete: {
      getterValue: 1500967716719,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    loadEventStart: {
      getterValue: 1500967716719,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
    loadEventEnd: {
      getterValue: 1500967716720,
      getterPrototypeLevel: 1,
      enumerable: true,
      writable: true,
    },
  },
});

module.exports = stubs;
