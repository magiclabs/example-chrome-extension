var Magic = (function () {
  function e() {
    return (e =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function t(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
  }
  function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  var n =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function o(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  function i() {
    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }
  o(function (e) {
    var t = (function (e) {
      var t = Object.prototype,
        r = t.hasOwnProperty,
        n = 'function' == typeof Symbol ? Symbol : {},
        o = n.iterator || '@@iterator',
        i = n.asyncIterator || '@@asyncIterator',
        a = n.toStringTag || '@@toStringTag';
      function s(e, t, r, n) {
        var o = Object.create((t && t.prototype instanceof f ? t : f).prototype),
          i = new I(n || []);
        return (
          (o._invoke = (function (e, t, r) {
            var n = 'suspendedStart';
            return function (o, i) {
              if ('executing' === n) throw new Error('Generator is already running');
              if ('completed' === n) {
                if ('throw' === o) throw i;
                return { value: void 0, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var s = E(a, r);
                  if (s) {
                    if (s === c) continue;
                    return s;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if ('suspendedStart' === n) throw ((n = 'completed'), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                n = 'executing';
                var f = u(e, t, r);
                if ('normal' === f.type) {
                  if (((n = r.done ? 'completed' : 'suspendedYield'), f.arg === c)) continue;
                  return { value: f.arg, done: r.done };
                }
                'throw' === f.type && ((n = 'completed'), (r.method = 'throw'), (r.arg = f.arg));
              }
            };
          })(e, r, i)),
          o
        );
      }
      function u(e, t, r) {
        try {
          return { type: 'normal', arg: e.call(t, r) };
        } catch (e) {
          return { type: 'throw', arg: e };
        }
      }
      e.wrap = s;
      var c = {};
      function f() {}
      function l() {}
      function h() {}
      var d = {};
      d[o] = function () {
        return this;
      };
      var p = Object.getPrototypeOf,
        v = p && p(p(w([])));
      v && v !== t && r.call(v, o) && (d = v);
      var y = (h.prototype = f.prototype = Object.create(d));
      function m(e) {
        ['next', 'throw', 'return'].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }
      function g(e, t) {
        var n;
        this._invoke = function (o, i) {
          function a() {
            return new t(function (n, a) {
              !(function n(o, i, a, s) {
                var c = u(e[o], e, i);
                if ('throw' !== c.type) {
                  var f = c.arg,
                    l = f.value;
                  return l && 'object' == typeof l && r.call(l, '__await')
                    ? t.resolve(l.__await).then(
                        function (e) {
                          n('next', e, a, s);
                        },
                        function (e) {
                          n('throw', e, a, s);
                        }
                      )
                    : t.resolve(l).then(
                        function (e) {
                          (f.value = e), a(f);
                        },
                        function (e) {
                          return n('throw', e, a, s);
                        }
                      );
                }
                s(c.arg);
              })(o, i, n, a);
            });
          }
          return (n = n ? n.then(a, a) : a());
        };
      }
      function E(e, t) {
        var r = e.iterator[t.method];
        if (void 0 === r) {
          if (((t.delegate = null), 'throw' === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = 'return'), (t.arg = void 0), E(e, t), 'throw' === t.method)
            )
              return c;
            (t.method = 'throw'),
              (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return c;
        }
        var n = u(r, e.iterator, t.arg);
        if ('throw' === n.type)
          return (t.method = 'throw'), (t.arg = n.arg), (t.delegate = null), c;
        var o = n.arg;
        return o
          ? o.done
            ? ((t[e.resultName] = o.value),
              (t.next = e.nextLoc),
              'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)),
              (t.delegate = null),
              c)
            : o
          : ((t.method = 'throw'),
            (t.arg = new TypeError('iterator result is not an object')),
            (t.delegate = null),
            c);
      }
      function b(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function _(e) {
        var t = e.completion || {};
        (t.type = 'normal'), delete t.arg, (e.completion = t);
      }
      function I(e) {
        (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(b, this), this.reset(!0);
      }
      function w(e) {
        if (e) {
          var t = e[o];
          if (t) return t.call(e);
          if ('function' == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var n = -1,
              i = function t() {
                for (; ++n < e.length; )
                  if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (i.next = i);
          }
        }
        return { next: A };
      }
      function A() {
        return { value: void 0, done: !0 };
      }
      return (
        (l.prototype = y.constructor = h),
        (h.constructor = l),
        (h[a] = l.displayName = 'GeneratorFunction'),
        (e.isGeneratorFunction = function (e) {
          var t = 'function' == typeof e && e.constructor;
          return !!t && (t === l || 'GeneratorFunction' === (t.displayName || t.name));
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, h)
              : ((e.__proto__ = h), a in e || (e[a] = 'GeneratorFunction')),
            (e.prototype = Object.create(y)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        m(g.prototype),
        (g.prototype[i] = function () {
          return this;
        }),
        (e.AsyncIterator = g),
        (e.async = function (t, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new g(s(t, r, n, o), i);
          return e.isGeneratorFunction(r)
            ? a
            : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
        }),
        m(y),
        (y[a] = 'Generator'),
        (y[o] = function () {
          return this;
        }),
        (y.toString = function () {
          return '[object Generator]';
        }),
        (e.keys = function (e) {
          var t = [];
          for (var r in e) t.push(r);
          return (
            t.reverse(),
            function r() {
              for (; t.length; ) {
                var n = t.pop();
                if (n in e) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (e.values = w),
        (I.prototype = {
          constructor: I,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
              !e)
            )
              for (var t in this)
                't' === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ('throw' === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function n(r, n) {
              return (
                (a.type = 'throw'),
                (a.arg = e),
                (t.next = r),
                n && ((t.method = 'next'), (t.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ('root' === i.tryLoc) return n('end');
              if (i.tryLoc <= this.prev) {
                var s = r.call(i, 'catchLoc'),
                  u = r.call(i, 'finallyLoc');
                if (s && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (s) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!u) throw new Error('try statement without catch or finally');
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            i &&
              ('break' === e || 'continue' === e) &&
              i.tryLoc <= t &&
              t <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = e),
              (a.arg = t),
              i ? ((this.method = 'next'), (this.next = i.finallyLoc), c) : this.complete(a)
            );
          },
          complete: function (e, t) {
            if ('throw' === e.type) throw e.arg;
            return (
              'break' === e.type || 'continue' === e.type
                ? (this.next = e.arg)
                : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
              c
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), _(r), c;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.tryLoc === e) {
                var n = r.completion;
                if ('throw' === n.type) {
                  var o = n.arg;
                  _(r);
                }
                return o;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function (e, t, r) {
            return (
              (this.delegate = { iterator: w(e), resultName: t, nextLoc: r }),
              'next' === this.method && (this.arg = void 0),
              c
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = t;
    } catch (e) {
      Function('r', 'regeneratorRuntime = r')(t);
    }
  });
  var a = function (e, t) {
    return (a =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      })(e, t);
  };
  function s(e, t) {
    function r() {
      this.constructor = e;
    }
    a(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
  }
  var u = function () {
    return (u =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var o in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  };
  function c(e, t, r, n) {
    return new (r || (r = Promise))(function (o, i) {
      function a(e) {
        try {
          u(n.next(e));
        } catch (e) {
          i(e);
        }
      }
      function s(e) {
        try {
          u(n.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                })).then(a, s);
      }
      u((n = n.apply(e, t || [])).next());
    });
  }
  function f(e, t) {
    var r,
      n,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: s(0), throw: s(1), return: s(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function s(i) {
      return function (s) {
        return (function (i) {
          if (r) throw new TypeError('Generator is already executing.');
          for (; a; )
            try {
              if (
                ((r = 1),
                n &&
                  (o =
                    2 & i[0]
                      ? n.return
                      : i[0]
                      ? n.throw || ((o = n.return) && o.call(n), 0)
                      : n.next) &&
                  !(o = o.call(n, i[1])).done)
              )
                return o;
              switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return a.label++, { value: i[1], done: !1 };
                case 5:
                  a.label++, (n = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !(
                      (o = (o = a.trys).length > 0 && o[o.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0])
                    )
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1];
                    break;
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    (a.label = o[1]), (o = i);
                    break;
                  }
                  if (o && a.label < o[2]) {
                    (a.label = o[2]), a.ops.push(i);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              i = t.call(e, a);
            } catch (e) {
              (i = [6, e]), (n = 0);
            } finally {
              r = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, s]);
      };
    }
  }
  function l(e, t) {
    var r = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!r) return e;
    var n,
      o,
      i = r.call(e),
      a = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; ) a.push(n.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        n && !n.done && (r = i.return) && r.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return a;
  }
  function h() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(l(arguments[t]));
    return e;
  }
  var d,
    p,
    v,
    y,
    m,
    g,
    E,
    b = {
      SEMVER_SPEC_VERSION: '2.0.0',
      MAX_LENGTH: 256,
      MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
      MAX_SAFE_COMPONENT_LENGTH: 16,
    },
    _ =
      'object' == typeof process &&
      process.env &&
      process.env.NODE_DEBUG &&
      /\bsemver\b/i.test(process.env.NODE_DEBUG)
        ? function () {
            var e;
            return (e = console).error.apply(e, ['SEMVER'].concat([].slice.call(arguments)));
          }
        : function () {},
    I = o(function (e, t) {
      var r = b.MAX_SAFE_COMPONENT_LENGTH,
        n = ((t = e.exports = {}).re = []),
        o = (t.src = []),
        i = (t.t = {}),
        a = 0,
        s = function (e, t, r) {
          var s = a++;
          _(s, t), (i[e] = s), (o[s] = t), (n[s] = new RegExp(t, r ? 'g' : void 0));
        };
      s('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
        s('NUMERICIDENTIFIERLOOSE', '[0-9]+'),
        s('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*'),
        s(
          'MAINVERSION',
          '(' +
            o[i.NUMERICIDENTIFIER] +
            ')\\.(' +
            o[i.NUMERICIDENTIFIER] +
            ')\\.(' +
            o[i.NUMERICIDENTIFIER] +
            ')'
        ),
        s(
          'MAINVERSIONLOOSE',
          '(' +
            o[i.NUMERICIDENTIFIERLOOSE] +
            ')\\.(' +
            o[i.NUMERICIDENTIFIERLOOSE] +
            ')\\.(' +
            o[i.NUMERICIDENTIFIERLOOSE] +
            ')'
        ),
        s(
          'PRERELEASEIDENTIFIER',
          '(?:' + o[i.NUMERICIDENTIFIER] + '|' + o[i.NONNUMERICIDENTIFIER] + ')'
        ),
        s(
          'PRERELEASEIDENTIFIERLOOSE',
          '(?:' + o[i.NUMERICIDENTIFIERLOOSE] + '|' + o[i.NONNUMERICIDENTIFIER] + ')'
        ),
        s(
          'PRERELEASE',
          '(?:-(' + o[i.PRERELEASEIDENTIFIER] + '(?:\\.' + o[i.PRERELEASEIDENTIFIER] + ')*))'
        ),
        s(
          'PRERELEASELOOSE',
          '(?:-?(' +
            o[i.PRERELEASEIDENTIFIERLOOSE] +
            '(?:\\.' +
            o[i.PRERELEASEIDENTIFIERLOOSE] +
            ')*))'
        ),
        s('BUILDIDENTIFIER', '[0-9A-Za-z-]+'),
        s('BUILD', '(?:\\+(' + o[i.BUILDIDENTIFIER] + '(?:\\.' + o[i.BUILDIDENTIFIER] + ')*))'),
        s('FULLPLAIN', 'v?' + o[i.MAINVERSION] + o[i.PRERELEASE] + '?' + o[i.BUILD] + '?'),
        s('FULL', '^' + o[i.FULLPLAIN] + '$'),
        s(
          'LOOSEPLAIN',
          '[v=\\s]*' + o[i.MAINVERSIONLOOSE] + o[i.PRERELEASELOOSE] + '?' + o[i.BUILD] + '?'
        ),
        s('LOOSE', '^' + o[i.LOOSEPLAIN] + '$'),
        s('GTLT', '((?:<|>)?=?)'),
        s('XRANGEIDENTIFIERLOOSE', o[i.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'),
        s('XRANGEIDENTIFIER', o[i.NUMERICIDENTIFIER] + '|x|X|\\*'),
        s(
          'XRANGEPLAIN',
          '[v=\\s]*(' +
            o[i.XRANGEIDENTIFIER] +
            ')(?:\\.(' +
            o[i.XRANGEIDENTIFIER] +
            ')(?:\\.(' +
            o[i.XRANGEIDENTIFIER] +
            ')(?:' +
            o[i.PRERELEASE] +
            ')?' +
            o[i.BUILD] +
            '?)?)?'
        ),
        s(
          'XRANGEPLAINLOOSE',
          '[v=\\s]*(' +
            o[i.XRANGEIDENTIFIERLOOSE] +
            ')(?:\\.(' +
            o[i.XRANGEIDENTIFIERLOOSE] +
            ')(?:\\.(' +
            o[i.XRANGEIDENTIFIERLOOSE] +
            ')(?:' +
            o[i.PRERELEASELOOSE] +
            ')?' +
            o[i.BUILD] +
            '?)?)?'
        ),
        s('XRANGE', '^' + o[i.GTLT] + '\\s*' + o[i.XRANGEPLAIN] + '$'),
        s('XRANGELOOSE', '^' + o[i.GTLT] + '\\s*' + o[i.XRANGEPLAINLOOSE] + '$'),
        s(
          'COERCE',
          '(^|[^\\d])(\\d{1,' +
            r +
            '})(?:\\.(\\d{1,' +
            r +
            '}))?(?:\\.(\\d{1,' +
            r +
            '}))?(?:$|[^\\d])'
        ),
        s('COERCERTL', o[i.COERCE], !0),
        s('LONETILDE', '(?:~>?)'),
        s('TILDETRIM', '(\\s*)' + o[i.LONETILDE] + '\\s+', !0),
        (t.tildeTrimReplace = '$1~'),
        s('TILDE', '^' + o[i.LONETILDE] + o[i.XRANGEPLAIN] + '$'),
        s('TILDELOOSE', '^' + o[i.LONETILDE] + o[i.XRANGEPLAINLOOSE] + '$'),
        s('LONECARET', '(?:\\^)'),
        s('CARETTRIM', '(\\s*)' + o[i.LONECARET] + '\\s+', !0),
        (t.caretTrimReplace = '$1^'),
        s('CARET', '^' + o[i.LONECARET] + o[i.XRANGEPLAIN] + '$'),
        s('CARETLOOSE', '^' + o[i.LONECARET] + o[i.XRANGEPLAINLOOSE] + '$'),
        s('COMPARATORLOOSE', '^' + o[i.GTLT] + '\\s*(' + o[i.LOOSEPLAIN] + ')$|^$'),
        s('COMPARATOR', '^' + o[i.GTLT] + '\\s*(' + o[i.FULLPLAIN] + ')$|^$'),
        s(
          'COMPARATORTRIM',
          '(\\s*)' + o[i.GTLT] + '\\s*(' + o[i.LOOSEPLAIN] + '|' + o[i.XRANGEPLAIN] + ')',
          !0
        ),
        (t.comparatorTrimReplace = '$1$2$3'),
        s('HYPHENRANGE', '^\\s*(' + o[i.XRANGEPLAIN] + ')\\s+-\\s+(' + o[i.XRANGEPLAIN] + ')\\s*$'),
        s(
          'HYPHENRANGELOOSE',
          '^\\s*(' + o[i.XRANGEPLAINLOOSE] + ')\\s+-\\s+(' + o[i.XRANGEPLAINLOOSE] + ')\\s*$'
        ),
        s('STAR', '(<|>)?=?\\s*\\*'),
        s('GTE0', '^\\s*>=\\s*0.0.0\\s*$'),
        s('GTE0PRE', '^\\s*>=\\s*0.0.0-0\\s*$');
    }),
    w = /^[0-9]+$/,
    A = b.MAX_LENGTH,
    N = b.MAX_SAFE_INTEGER,
    O = I.re,
    R = I.t,
    S = function (e, t) {
      var r = w.test(e),
        n = w.test(t);
      return (
        r && n && ((e = +e), (t = +t)), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
      );
    },
    L = (function () {
      function e(t, r) {
        if (
          ((r && 'object' == typeof r) || (r = { loose: !!r, includePrerelease: !1 }),
          t instanceof e)
        ) {
          if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease) return t;
          t = t.version;
        } else if ('string' != typeof t) throw new TypeError('Invalid Version: ' + t);
        if (t.length > A) throw new TypeError('version is longer than ' + A + ' characters');
        _('SemVer', t, r),
          (this.options = r),
          (this.loose = !!r.loose),
          (this.includePrerelease = !!r.includePrerelease);
        var n = t.trim().match(r.loose ? O[R.LOOSE] : O[R.FULL]);
        if (!n) throw new TypeError('Invalid Version: ' + t);
        if (
          ((this.raw = t),
          (this.major = +n[1]),
          (this.minor = +n[2]),
          (this.patch = +n[3]),
          this.major > N || this.major < 0)
        )
          throw new TypeError('Invalid major version');
        if (this.minor > N || this.minor < 0) throw new TypeError('Invalid minor version');
        if (this.patch > N || this.patch < 0) throw new TypeError('Invalid patch version');
        (this.prerelease = n[4]
          ? n[4].split('.').map(function (e) {
              if (/^[0-9]+$/.test(e)) {
                var t = +e;
                if (t >= 0 && t < N) return t;
              }
              return e;
            })
          : []),
          (this.build = n[5] ? n[5].split('.') : []),
          this.format();
      }
      var t = e.prototype;
      return (
        (t.format = function () {
          return (
            (this.version = this.major + '.' + this.minor + '.' + this.patch),
            this.prerelease.length && (this.version += '-' + this.prerelease.join('.')),
            this.version
          );
        }),
        (t.toString = function () {
          return this.version;
        }),
        (t.compare = function (t) {
          if ((_('SemVer.compare', this.version, this.options, t), !(t instanceof e))) {
            if ('string' == typeof t && t === this.version) return 0;
            t = new e(t, this.options);
          }
          return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
        }),
        (t.compareMain = function (t) {
          return (
            t instanceof e || (t = new e(t, this.options)),
            S(this.major, t.major) || S(this.minor, t.minor) || S(this.patch, t.patch)
          );
        }),
        (t.comparePre = function (t) {
          if (
            (t instanceof e || (t = new e(t, this.options)),
            this.prerelease.length && !t.prerelease.length)
          )
            return -1;
          if (!this.prerelease.length && t.prerelease.length) return 1;
          if (!this.prerelease.length && !t.prerelease.length) return 0;
          var r = 0;
          do {
            var n = this.prerelease[r],
              o = t.prerelease[r];
            if ((_('prerelease compare', r, n, o), void 0 === n && void 0 === o)) return 0;
            if (void 0 === o) return 1;
            if (void 0 === n) return -1;
            if (n !== o) return S(n, o);
          } while (++r);
        }),
        (t.compareBuild = function (t) {
          t instanceof e || (t = new e(t, this.options));
          var r = 0;
          do {
            var n = this.build[r],
              o = t.build[r];
            if ((_('prerelease compare', r, n, o), void 0 === n && void 0 === o)) return 0;
            if (void 0 === o) return 1;
            if (void 0 === n) return -1;
            if (n !== o) return S(n, o);
          } while (++r);
        }),
        (t.inc = function (e, t) {
          switch (e) {
            case 'premajor':
              (this.prerelease.length = 0),
                (this.patch = 0),
                (this.minor = 0),
                this.major++,
                this.inc('pre', t);
              break;
            case 'preminor':
              (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc('pre', t);
              break;
            case 'prepatch':
              (this.prerelease.length = 0), this.inc('patch', t), this.inc('pre', t);
              break;
            case 'prerelease':
              0 === this.prerelease.length && this.inc('patch', t), this.inc('pre', t);
              break;
            case 'major':
              (0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length) ||
                this.major++,
                (this.minor = 0),
                (this.patch = 0),
                (this.prerelease = []);
              break;
            case 'minor':
              (0 === this.patch && 0 !== this.prerelease.length) || this.minor++,
                (this.patch = 0),
                (this.prerelease = []);
              break;
            case 'patch':
              0 === this.prerelease.length && this.patch++, (this.prerelease = []);
              break;
            case 'pre':
              if (0 === this.prerelease.length) this.prerelease = [0];
              else {
                for (var r = this.prerelease.length; --r >= 0; )
                  'number' == typeof this.prerelease[r] && (this.prerelease[r]++, (r = -2));
                -1 === r && this.prerelease.push(0);
              }
              t &&
                (this.prerelease[0] === t
                  ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
                  : (this.prerelease = [t, 0]));
              break;
            default:
              throw new Error('invalid increment argument: ' + e);
          }
          return this.format(), (this.raw = this.version), this;
        }),
        e
      );
    })(),
    T = function (e, t, r) {
      return new L(e, r).compare(new L(t, r));
    },
    j = function (e, t, r, n) {
      switch (t) {
        case '===':
          return (
            'object' == typeof e && (e = e.version),
            'object' == typeof r && (r = r.version),
            e === r
          );
        case '!==':
          return (
            'object' == typeof e && (e = e.version),
            'object' == typeof r && (r = r.version),
            e !== r
          );
        case '':
        case '=':
        case '==':
          return (function (e, t, r) {
            return 0 === T(e, t, r);
          })(e, r, n);
        case '!=':
          return (function (e, t, r) {
            return 0 !== T(e, t, r);
          })(e, r, n);
        case '>':
          return (function (e, t, r) {
            return T(e, t, r) > 0;
          })(e, r, n);
        case '>=':
          return (function (e, t, r) {
            return T(e, t, r) >= 0;
          })(e, r, n);
        case '<':
          return (function (e, t, r) {
            return T(e, t, r) < 0;
          })(e, r, n);
        case '<=':
          return (function (e, t, r) {
            return T(e, t, r) <= 0;
          })(e, r, n);
        default:
          throw new TypeError('Invalid operator: ' + t);
      }
    },
    P = Symbol('SemVer ANY'),
    M = (function () {
      var e;
      function t(e, r) {
        if (
          ((r && 'object' == typeof r) || (r = { loose: !!r, includePrerelease: !1 }),
          e instanceof t)
        ) {
          if (e.loose === !!r.loose) return e;
          e = e.value;
        }
        _('comparator', e, r),
          (this.options = r),
          (this.loose = !!r.loose),
          this.parse(e),
          (this.value = this.semver === P ? '' : this.operator + this.semver.version),
          _('comp', this);
      }
      (e = [
        {
          key: 'ANY',
          get: function () {
            return P;
          },
        },
      ]) &&
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        })(t, e);
      var r = t.prototype;
      return (
        (r.parse = function (e) {
          var t = e.match(this.options.loose ? C[D.COMPARATORLOOSE] : C[D.COMPARATOR]);
          if (!t) throw new TypeError('Invalid comparator: ' + e);
          (this.operator = void 0 !== t[1] ? t[1] : ''),
            '=' === this.operator && (this.operator = ''),
            (this.semver = t[2] ? new L(t[2], this.options.loose) : P);
        }),
        (r.toString = function () {
          return this.value;
        }),
        (r.test = function (e) {
          if ((_('Comparator.test', e, this.options.loose), this.semver === P || e === P))
            return !0;
          if ('string' == typeof e)
            try {
              e = new L(e, this.options);
            } catch (e) {
              return !1;
            }
          return j(e, this.operator, this.semver, this.options);
        }),
        (r.intersects = function (e, r) {
          if (!(e instanceof t)) throw new TypeError('a Comparator is required');
          if (
            ((r && 'object' == typeof r) || (r = { loose: !!r, includePrerelease: !1 }),
            '' === this.operator)
          )
            return '' === this.value || new k(e.value, r).test(this.value);
          if ('' === e.operator) return '' === e.value || new k(this.value, r).test(e.semver);
          var n = !(
              ('>=' !== this.operator && '>' !== this.operator) ||
              ('>=' !== e.operator && '>' !== e.operator)
            ),
            o = !(
              ('<=' !== this.operator && '<' !== this.operator) ||
              ('<=' !== e.operator && '<' !== e.operator)
            ),
            i = this.semver.version === e.semver.version,
            a = !(
              ('>=' !== this.operator && '<=' !== this.operator) ||
              ('>=' !== e.operator && '<=' !== e.operator)
            ),
            s =
              j(this.semver, '<', e.semver, r) &&
              ('>=' === this.operator || '>' === this.operator) &&
              ('<=' === e.operator || '<' === e.operator),
            u =
              j(this.semver, '>', e.semver, r) &&
              ('<=' === this.operator || '<' === this.operator) &&
              ('>=' === e.operator || '>' === e.operator);
          return n || o || (i && a) || s || u;
        }),
        t
      );
    })(),
    C = I.re,
    D = I.t,
    k = (function () {
      function e(t, r) {
        var n = this;
        if (
          ((r && 'object' == typeof r) || (r = { loose: !!r, includePrerelease: !1 }),
          t instanceof e)
        )
          return t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease
            ? t
            : new e(t.raw, r);
        if (t instanceof M) return (this.raw = t.value), (this.set = [[t]]), this.format(), this;
        if (
          ((this.options = r),
          (this.loose = !!r.loose),
          (this.includePrerelease = !!r.includePrerelease),
          (this.raw = t),
          (this.set = t
            .split(/\s*\|\|\s*/)
            .map(function (e) {
              return n.parseRange(e.trim());
            })
            .filter(function (e) {
              return e.length;
            })),
          !this.set.length)
        )
          throw new TypeError('Invalid SemVer Range: ' + t);
        this.format();
      }
      var t = e.prototype;
      return (
        (t.format = function () {
          return (
            (this.range = this.set
              .map(function (e) {
                return e.join(' ').trim();
              })
              .join('||')
              .trim()),
            this.range
          );
        }),
        (t.toString = function () {
          return this.range;
        }),
        (t.parseRange = function (e) {
          var t = this,
            r = this.options.loose;
          (e = (e = e.trim()).replace(
            r ? x[F.HYPHENRANGELOOSE] : x[F.HYPHENRANGE],
            Z(this.options.includePrerelease)
          )),
            _('hyphen replace', e),
            (e = e.replace(x[F.COMPARATORTRIM], U)),
            _('comparator trim', e, x[F.COMPARATORTRIM]),
            (e = (e = (e = e.replace(x[F.TILDETRIM], G)).replace(x[F.CARETTRIM], B))
              .split(/\s+/)
              .join(' '));
          var n = r ? x[F.COMPARATORLOOSE] : x[F.COMPARATOR];
          return e
            .split(' ')
            .map(function (e) {
              return H(e, t.options);
            })
            .join(' ')
            .split(/\s+/)
            .map(function (e) {
              return Q(e, t.options);
            })
            .filter(
              this.options.loose
                ? function (e) {
                    return !!e.match(n);
                  }
                : function () {
                    return !0;
                  }
            )
            .map(function (e) {
              return new M(e, t.options);
            });
        }),
        (t.intersects = function (t, r) {
          if (!(t instanceof e)) throw new TypeError('a Range is required');
          return this.set.some(function (e) {
            return (
              z(e, r) &&
              t.set.some(function (t) {
                return (
                  z(t, r) &&
                  e.every(function (e) {
                    return t.every(function (t) {
                      return e.intersects(t, r);
                    });
                  })
                );
              })
            );
          });
        }),
        (t.test = function (e) {
          if (!e) return !1;
          if ('string' == typeof e)
            try {
              e = new L(e, this.options);
            } catch (e) {
              return !1;
            }
          for (var t = 0; t < this.set.length; t++) if (ee(this.set[t], e, this.options)) return !0;
          return !1;
        }),
        e
      );
    })(),
    x = I.re,
    F = I.t,
    U = I.comparatorTrimReplace,
    G = I.tildeTrimReplace,
    B = I.caretTrimReplace,
    z = function (e, t) {
      for (var r = !0, n = e.slice(), o = n.pop(); r && n.length; )
        (r = n.every(function (e) {
          return o.intersects(e, t);
        })),
          (o = n.pop());
      return r;
    },
    H = function (e, t) {
      return (
        _('comp', e, t),
        (e = q(e, t)),
        _('caret', e),
        (e = X(e, t)),
        _('tildes', e),
        (e = K(e, t)),
        _('xrange', e),
        (e = J(e, t)),
        _('stars', e),
        e
      );
    },
    W = function (e) {
      return !e || 'x' === e.toLowerCase() || '*' === e;
    },
    X = function (e, t) {
      return e
        .trim()
        .split(/\s+/)
        .map(function (e) {
          return V(e, t);
        })
        .join(' ');
    },
    V = function (e, t) {
      return e.replace(t.loose ? x[F.TILDELOOSE] : x[F.TILDE], function (t, r, n, o, i) {
        var a;
        return (
          _('tilde', e, t, r, n, o, i),
          W(r)
            ? (a = '')
            : W(n)
            ? (a = '>=' + r + '.0.0 <' + (+r + 1) + '.0.0-0')
            : W(o)
            ? (a = '>=' + r + '.' + n + '.0 <' + r + '.' + (+n + 1) + '.0-0')
            : i
            ? (_('replaceTilde pr', i),
              (a = '>=' + r + '.' + n + '.' + o + '-' + i + ' <' + r + '.' + (+n + 1) + '.0-0'))
            : (a = '>=' + r + '.' + n + '.' + o + ' <' + r + '.' + (+n + 1) + '.0-0'),
          _('tilde return', a),
          a
        );
      });
    },
    q = function (e, t) {
      return e
        .trim()
        .split(/\s+/)
        .map(function (e) {
          return Y(e, t);
        })
        .join(' ');
    },
    Y = function (e, t) {
      _('caret', e, t);
      var r = t.includePrerelease ? '-0' : '';
      return e.replace(t.loose ? x[F.CARETLOOSE] : x[F.CARET], function (t, n, o, i, a) {
        var s;
        return (
          _('caret', e, t, n, o, i, a),
          W(n)
            ? (s = '')
            : W(o)
            ? (s = '>=' + n + '.0.0' + r + ' <' + (+n + 1) + '.0.0-0')
            : W(i)
            ? (s =
                '0' === n
                  ? '>=' + n + '.' + o + '.0' + r + ' <' + n + '.' + (+o + 1) + '.0-0'
                  : '>=' + n + '.' + o + '.0' + r + ' <' + (+n + 1) + '.0.0-0')
            : a
            ? (_('replaceCaret pr', a),
              (s =
                '0' === n
                  ? '0' === o
                    ? '>=' +
                      n +
                      '.' +
                      o +
                      '.' +
                      i +
                      '-' +
                      a +
                      ' <' +
                      n +
                      '.' +
                      o +
                      '.' +
                      (+i + 1) +
                      '-0'
                    : '>=' + n + '.' + o + '.' + i + '-' + a + ' <' + n + '.' + (+o + 1) + '.0-0'
                  : '>=' + n + '.' + o + '.' + i + '-' + a + ' <' + (+n + 1) + '.0.0-0'))
            : (_('no pr'),
              (s =
                '0' === n
                  ? '0' === o
                    ? '>=' + n + '.' + o + '.' + i + r + ' <' + n + '.' + o + '.' + (+i + 1) + '-0'
                    : '>=' + n + '.' + o + '.' + i + r + ' <' + n + '.' + (+o + 1) + '.0-0'
                  : '>=' + n + '.' + o + '.' + i + ' <' + (+n + 1) + '.0.0-0')),
          _('caret return', s),
          s
        );
      });
    },
    K = function (e, t) {
      return (
        _('replaceXRanges', e, t),
        e
          .split(/\s+/)
          .map(function (e) {
            return $(e, t);
          })
          .join(' ')
      );
    },
    $ = function (e, t) {
      return (e = e.trim()).replace(
        t.loose ? x[F.XRANGELOOSE] : x[F.XRANGE],
        function (r, n, o, i, a, s) {
          _('xRange', e, r, n, o, i, a, s);
          var u = W(o),
            c = u || W(i),
            f = c || W(a);
          return (
            '=' === n && f && (n = ''),
            (s = t.includePrerelease ? '-0' : ''),
            u
              ? (r = '>' === n || '<' === n ? '<0.0.0-0' : '*')
              : n && f
              ? (c && (i = 0),
                (a = 0),
                '>' === n
                  ? ((n = '>='), c ? ((o = +o + 1), (i = 0), (a = 0)) : ((i = +i + 1), (a = 0)))
                  : '<=' === n && ((n = '<'), c ? (o = +o + 1) : (i = +i + 1)),
                '<' === n && (s = '-0'),
                (r = n + o + '.' + i + '.' + a + s))
              : c
              ? (r = '>=' + o + '.0.0' + s + ' <' + (+o + 1) + '.0.0-0')
              : f && (r = '>=' + o + '.' + i + '.0' + s + ' <' + o + '.' + (+i + 1) + '.0-0'),
            _('xRange return', r),
            r
          );
        }
      );
    },
    J = function (e, t) {
      return _('replaceStars', e, t), e.trim().replace(x[F.STAR], '');
    },
    Q = function (e, t) {
      return (
        _('replaceGTE0', e, t), e.trim().replace(x[t.includePrerelease ? F.GTE0PRE : F.GTE0], '')
      );
    },
    Z = function (e) {
      return function (t, r, n, o, i, a, s, u, c, f, l, h, d) {
        return (
          (r = W(n)
            ? ''
            : W(o)
            ? '>=' + n + '.0.0' + (e ? '-0' : '')
            : W(i)
            ? '>=' + n + '.' + o + '.0' + (e ? '-0' : '')
            : a
            ? '>=' + r
            : '>=' + r + (e ? '-0' : '')) +
          ' ' +
          (u = W(c)
            ? ''
            : W(f)
            ? '<' + (+c + 1) + '.0.0-0'
            : W(l)
            ? '<' + c + '.' + (+f + 1) + '.0-0'
            : h
            ? '<=' + c + '.' + f + '.' + l + '-' + h
            : e
            ? '<' + c + '.' + f + '.' + (+l + 1) + '-0'
            : '<=' + u)
        ).trim();
      };
    },
    ee = function (e, t, r) {
      for (var n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
      if (t.prerelease.length && !r.includePrerelease) {
        for (var o = 0; o < e.length; o++)
          if ((_(e[o].semver), e[o].semver !== M.ANY && e[o].semver.prerelease.length > 0)) {
            var i = e[o].semver;
            if (i.major === t.major && i.minor === t.minor && i.patch === t.patch) return !0;
          }
        return !1;
      }
      return !0;
    },
    te = function (e, t, r) {
      try {
        t = new k(t, r);
      } catch (e) {
        return !1;
      }
      return t.test(e);
    };
  function re(e) {
    return String.fromCharCode(parseInt(e.slice(1), 16));
  }
  function ne(e) {
    return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
  }
  function oe(e) {
    return (t = JSON.stringify(e)), btoa(encodeURIComponent(t).replace(/%[0-9A-F]{2}/g, re));
    var t;
  }
  function ie(e) {
    return JSON.parse(decodeURIComponent(Array.from(atob(e), ne).join('')));
  }
  function ae(e) {
    return void 0 === e;
  }
  function se(e) {
    return (
      (function (e) {
        return null === e;
      })(e) || ae(e)
    );
  }
  function ue(e) {
    if (!e) return !0;
    for (var t in e) if (Object.hasOwnProperty.call(e, t)) return !1;
    return !0;
  }
  !(function (e) {
    (e.LoginWithMagicLink = 'magic_auth_login_with_magic_link'),
      (e.LoginWithCredential = 'magic_auth_login_with_credential'),
      (e.GetIdToken = 'magic_auth_get_id_token'),
      (e.GenerateIdToken = 'magic_auth_generate_id_token'),
      (e.GetMetadata = 'magic_auth_get_metadata'),
      (e.IsLoggedIn = 'magic_auth_is_logged_in'),
      (e.Logout = 'magic_auth_logout'),
      (e.UpdateEmail = 'magic_auth_update_email');
  })(d || (d = {})),
    (function (e) {
      (e.MAGIC_HANDLE_RESPONSE = 'MAGIC_HANDLE_RESPONSE'),
        (e.MAGIC_OVERLAY_READY = 'MAGIC_OVERLAY_READY'),
        (e.MAGIC_SHOW_OVERLAY = 'MAGIC_SHOW_OVERLAY'),
        (e.MAGIC_HIDE_OVERLAY = 'MAGIC_HIDE_OVERLAY'),
        (e.MAGIC_HANDLE_EVENT = 'MAGIC_HANDLE_EVENT');
    })(p || (p = {})),
    (function (e) {
      e.MAGIC_HANDLE_REQUEST = 'MAGIC_HANDLE_REQUEST';
    })(v || (v = {})),
    (function (e) {
      (e.MissingApiKey = 'MISSING_API_KEY'),
        (e.ModalNotReady = 'MODAL_NOT_READY'),
        (e.MalformedResponse = 'MALFORMED_RESPONSE'),
        (e.InvalidArgument = 'INVALID_ARGUMENT'),
        (e.ExtensionNotInitialized = 'EXTENSION_NOT_INITIALIZED'),
        (e.IncompatibleExtensions = 'INCOMPATIBLE_EXTENSIONS');
    })(y || (y = {})),
    (function (e) {
      (e.SyncWeb3Method = 'SYNC_WEB3_METHOD'),
        (e.DuplicateIframe = 'DUPLICATE_IFRAME'),
        (e.ReactNativeEndpointConfiguration = 'REACT_NATIVE_ENDPOINT_CONFIGURATION'),
        (e.DeprecationNotice = 'DEPRECATION_NOTICE');
    })(m || (m = {})),
    (function (e) {
      (e[(e.ParseError = -32700)] = 'ParseError'),
        (e[(e.InvalidRequest = -32600)] = 'InvalidRequest'),
        (e[(e.MethodNotFound = -32601)] = 'MethodNotFound'),
        (e[(e.InvalidParams = -32602)] = 'InvalidParams'),
        (e[(e.InternalError = -32603)] = 'InternalError'),
        (e[(e.MagicLinkFailedVerification = -1e4)] = 'MagicLinkFailedVerification'),
        (e[(e.MagicLinkExpired = -10001)] = 'MagicLinkExpired'),
        (e[(e.MagicLinkRateLimited = -10002)] = 'MagicLinkRateLimited'),
        (e[(e.MagicLinkInvalidRedirectURL = -10006)] = 'MagicLinkInvalidRedirectURL'),
        (e[(e.UserAlreadyLoggedIn = -10003)] = 'UserAlreadyLoggedIn'),
        (e[(e.UpdateEmailFailed = -10004)] = 'UpdateEmailFailed'),
        (e[(e.UserRequestEditEmail = -10005)] = 'UserRequestEditEmail');
    })(g || (g = {})),
    (function (e) {
      e.Harmony = 'HARMONY';
    })(E || (E = {}));
  var ce = {},
    fe = { 'magic-sdk': 'magic-sdk', '@magic-sdk/react-native': 'magic-sdk-rn' },
    le = (function (e) {
      function t(r, n) {
        var o = e.call(this, 'Magic SDK Error: [' + r + '] ' + n) || this;
        return (
          (o.code = r),
          (o.rawMessage = n),
          (o.__proto__ = Error),
          Object.setPrototypeOf(o, t.prototype),
          o
        );
      }
      return s(t, e), t;
    })(Error),
    he = (function (e) {
      function t(r) {
        var n = e.call(this) || this;
        n.__proto__ = Error;
        var o,
          i = Number(null == r ? void 0 : r.code);
        return (
          (n.rawMessage = (null == r ? void 0 : r.message) || 'Internal error'),
          (n.code =
            !se((o = i)) && 'number' == typeof o && Object.values(g).includes(o)
              ? i
              : g.InternalError),
          (n.message = 'Magic RPC Error: [' + n.code + '] ' + n.rawMessage),
          Object.setPrototypeOf(n, t.prototype),
          n
        );
      }
      return s(t, e), t;
    })(Error),
    de = (function () {
      function e(e, t) {
        (this.code = e),
          (this.rawMessage = t),
          (this.message = 'Magic SDK Warning: [' + e + '] ' + t);
      }
      return (
        (e.prototype.log = function () {
          console.warn(this.message);
        }),
        e
      );
    })(),
    pe = (function (e) {
      function t(r, n, o, i) {
        var a = e.call(this, 'Magic Extension Error (' + r.name + '): [' + n + '] ' + o) || this;
        return (
          (a.code = n),
          (a.rawMessage = o),
          (a.data = i),
          (a.__proto__ = Error),
          Object.setPrototypeOf(a, t.prototype),
          a
        );
      }
      return s(t, e), t;
    })(Error),
    ve = (function () {
      function e(e, t, r) {
        (this.code = t),
          (this.rawMessage = r),
          (this.message = 'Magic Extension Warning (' + e.name + '): [' + t + '] ' + r);
      }
      return (
        (e.prototype.log = function () {
          console.warn(this.message);
        }),
        e
      );
    })(),
    ye = (function () {
      var e;
      return f(this, function (t) {
        switch (t.label) {
          case 0:
            (e = 0), (t.label = 1);
          case 1:
            return e < Number.MAX_SAFE_INTEGER ? [4, ++e] : [3, 3];
          case 2:
            return t.sent(), [3, 4];
          case 3:
            (e = 0), (t.label = 4);
          case 4:
            return [3, 1];
          case 5:
            return [2];
        }
      });
    })();
  function me() {
    return ye.next().value;
  }
  var ge = Symbol('Payload pre-processed by Magic SDK');
  function Ee(e) {
    return Object.defineProperty(e, ge, { value: !0, enumerable: !1 }), e;
  }
  function be(e) {
    var t, r, n;
    return (
      (function (e) {
        return !!e[ge];
      })(e) ||
        ((e.jsonrpc = null !== (t = e.jsonrpc) && void 0 !== t ? t : '2.0'),
        (e.id = me()),
        (e.method = null !== (r = e.method) && void 0 !== r ? r : 'noop'),
        (e.params = null !== (n = e.params) && void 0 !== n ? n : []),
        Ee(e)),
      e
    );
  }
  function _e(e, t) {
    return void 0 === t && (t = []), Ee({ params: t, method: e, jsonrpc: '2.0', id: me() });
  }
  var Ie = (function () {
      function e(t) {
        var r;
        t instanceof e
          ? ((this._jsonrpc = t.payload.jsonrpc),
            (this._id = t.payload.id),
            (this._result = t.payload.result),
            (this._error = t.payload.error))
          : se((r = t)) || ae(r.jsonrpc) || ae(r.id) || (ae(r.result) && ae(r.error))
          ? ((this._jsonrpc = t.jsonrpc),
            (this._id = t.id),
            (this._result = void 0),
            (this._error = void 0))
          : ((this._jsonrpc = t.jsonrpc),
            (this._id = t.id),
            (this._result = t.result),
            (this._error = t.error));
      }
      return (
        (e.prototype.applyError = function (e) {
          return (this._error = e), this;
        }),
        (e.prototype.applyResult = function (e) {
          return (this._result = e), this;
        }),
        Object.defineProperty(e.prototype, 'hasError', {
          get: function () {
            return null != this._error;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'hasResult', {
          get: function () {
            return void 0 !== this._result;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'payload', {
          get: function () {
            return {
              jsonrpc: this._jsonrpc,
              id: this._id,
              result: this._result,
              error: this._error,
            };
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })(),
    we = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return s(t, e), t;
    })(
      o(function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = '~';
        function n() {}
        function o(e, t, r) {
          (this.fn = e), (this.context = t), (this.once = r || !1);
        }
        function i(e, t, n, i, a) {
          if ('function' != typeof n) throw new TypeError('The listener must be a function');
          var s = new o(n, i || e, a),
            u = r ? r + t : t;
          return (
            e._events[u]
              ? e._events[u].fn
                ? (e._events[u] = [e._events[u], s])
                : e._events[u].push(s)
              : ((e._events[u] = s), e._eventsCount++),
            e
          );
        }
        function a(e, t) {
          0 == --e._eventsCount ? (e._events = new n()) : delete e._events[t];
        }
        function s() {
          (this._events = new n()), (this._eventsCount = 0);
        }
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
          (s.prototype.eventNames = function () {
            var e,
              n,
              o = [];
            if (0 === this._eventsCount) return o;
            for (n in (e = this._events)) t.call(e, n) && o.push(r ? n.slice(1) : n);
            return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o;
          }),
          (s.prototype.listeners = function (e) {
            var t = this._events[r ? r + e : e];
            if (!t) return [];
            if (t.fn) return [t.fn];
            for (var n = 0, o = t.length, i = new Array(o); n < o; n++) i[n] = t[n].fn;
            return i;
          }),
          (s.prototype.listenerCount = function (e) {
            var t = this._events[r ? r + e : e];
            return t ? (t.fn ? 1 : t.length) : 0;
          }),
          (s.prototype.emit = function (e, t, n, o, i, a) {
            var s = r ? r + e : e;
            if (!this._events[s]) return !1;
            var u,
              c,
              f = this._events[s],
              l = arguments.length;
            if (f.fn) {
              switch ((f.once && this.removeListener(e, f.fn, void 0, !0), l)) {
                case 1:
                  return f.fn.call(f.context), !0;
                case 2:
                  return f.fn.call(f.context, t), !0;
                case 3:
                  return f.fn.call(f.context, t, n), !0;
                case 4:
                  return f.fn.call(f.context, t, n, o), !0;
                case 5:
                  return f.fn.call(f.context, t, n, o, i), !0;
                case 6:
                  return f.fn.call(f.context, t, n, o, i, a), !0;
              }
              for (c = 1, u = new Array(l - 1); c < l; c++) u[c - 1] = arguments[c];
              f.fn.apply(f.context, u);
            } else {
              var h,
                d = f.length;
              for (c = 0; c < d; c++)
                switch ((f[c].once && this.removeListener(e, f[c].fn, void 0, !0), l)) {
                  case 1:
                    f[c].fn.call(f[c].context);
                    break;
                  case 2:
                    f[c].fn.call(f[c].context, t);
                    break;
                  case 3:
                    f[c].fn.call(f[c].context, t, n);
                    break;
                  case 4:
                    f[c].fn.call(f[c].context, t, n, o);
                    break;
                  default:
                    if (!u) for (h = 1, u = new Array(l - 1); h < l; h++) u[h - 1] = arguments[h];
                    f[c].fn.apply(f[c].context, u);
                }
            }
            return !0;
          }),
          (s.prototype.on = function (e, t, r) {
            return i(this, e, t, r, !1);
          }),
          (s.prototype.once = function (e, t, r) {
            return i(this, e, t, r, !0);
          }),
          (s.prototype.removeListener = function (e, t, n, o) {
            var i = r ? r + e : e;
            if (!this._events[i]) return this;
            if (!t) return a(this, i), this;
            var s = this._events[i];
            if (s.fn) s.fn !== t || (o && !s.once) || (n && s.context !== n) || a(this, i);
            else {
              for (var u = 0, c = [], f = s.length; u < f; u++)
                (s[u].fn !== t || (o && !s[u].once) || (n && s[u].context !== n)) && c.push(s[u]);
              c.length ? (this._events[i] = 1 === c.length ? c[0] : c) : a(this, i);
            }
            return this;
          }),
          (s.prototype.removeAllListeners = function (e) {
            var t;
            return (
              e
                ? this._events[(t = r ? r + e : e)] && a(this, t)
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (s.prototype.off = s.prototype.removeListener),
          (s.prototype.addListener = s.prototype.on),
          (s.prefixed = r),
          (s.EventEmitter = s),
          (e.exports = s);
      })
    );
  function Ae() {
    var e = new we();
    return {
      emitter: e,
      createChainingEmitterMethod: function (t, r) {
        return function () {
          for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
          return e[t].apply(e, n), r;
        };
      },
      createBoundEmitterMethod: function (t) {
        return function () {
          for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
          return e[t].apply(e, r);
        };
      },
    };
  }
  var Ne = Symbol('isPromiEvent');
  function Oe(e) {
    return !!e[Ne];
  }
  function Re(e) {
    var t = Se(e),
      r = Ae(),
      n = r.createBoundEmitterMethod,
      o = r.createChainingEmitterMethod,
      i = Symbol('Promise.then'),
      a = Symbol('Promise.catch'),
      s = Symbol('Promise.finally'),
      u = function (e, t) {
        return function () {
          for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
          var o = t[e].apply(t, r);
          return c(o);
        };
      },
      c = function (e) {
        var t;
        return Object.assign(
          e,
          (((t = {})[Ne] = !0),
          (t[i] = e[i] || e.then),
          (t[a] = e[a] || e.catch),
          (t[s] = e[s] || e.finally),
          (t.then = u(i, e)),
          (t.catch = u(a, e)),
          (t.finally = u(s, e)),
          (t.on = o('on', e)),
          (t.once = o('once', e)),
          (t.addListener = o('addListener', e)),
          (t.off = o('off', e)),
          (t.removeListener = o('removeListener', e)),
          (t.removeAllListeners = o('removeAllListeners', e)),
          (t.emit = n('emit')),
          (t.eventNames = n('eventNames')),
          (t.listeners = n('listeners')),
          (t.listenerCount = n('listenerCount')),
          t)
        );
      },
      f = c(
        t.then(
          function (e) {
            return f.emit('done', e), f.emit('settled'), e;
          },
          function (e) {
            throw (f.emit('error', e), f.emit('settled'), e);
          }
        )
      );
    return f;
  }
  function Se(e) {
    return new Promise(function (t, r) {
      var n = e(t, r);
      Promise.resolve(n).catch(r);
    });
  }
  var Le,
    Te = (function () {
      function e(e) {
        this.sdk = e;
      }
      return (
        Object.defineProperty(e.prototype, 'transport', {
          get: function () {
            return this.sdk.transport;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'overlay', {
          get: function () {
            return this.sdk.overlay;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.request = function (e) {
          var t = this.transport.post(this.overlay, v.MAGIC_HANDLE_REQUEST, be(e)),
            r = Re(function (e, r) {
              t.then(function (t) {
                if ((n(), t.hasError)) r(new he(t.payload.error));
                else {
                  if (!t.hasResult)
                    throw new le(
                      y.MalformedResponse,
                      'Response from the Magic iframe is malformed.'
                    );
                  e(t.payload.result);
                }
              }).catch(function (e) {
                n(), r(e);
              });
            }),
            n = this.transport.on(p.MAGIC_HANDLE_EVENT, function (t) {
              var n,
                o = t.data.response;
              if (o.id === e.id && (null === (n = o.result) || void 0 === n ? void 0 : n.event)) {
                var i = o.result,
                  a = i.params;
                r.emit.apply(r, h([i.event], void 0 === a ? [] : a));
              }
            });
          return r;
        }),
        e
      );
    })(),
    je = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        s(t, e),
        (t.prototype.loginWithMagicLink = function (e) {
          var t = e.showUI,
            r = _e(d.LoginWithMagicLink, [
              { email: e.email, showUI: void 0 === t || t, redirectURI: e.redirectURI },
            ]);
          return this.request(r);
        }),
        (t.prototype.loginWithCredential = function (e) {
          var t = null != e ? e : '';
          if (!e && 'web' === ce.platform) {
            t = window.location.search;
            var r = window.location.origin + window.location.pathname;
            window.history.replaceState(null, '', r);
          }
          var n = _e(d.LoginWithCredential, [t]);
          return this.request(n);
        }),
        t
      );
    })(Te),
    Pe = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        s(t, e),
        (t.prototype.getIdToken = function (e) {
          var t = _e(d.GetIdToken, [e]);
          return this.request(t);
        }),
        (t.prototype.generateIdToken = function (e) {
          var t = _e(d.GenerateIdToken, [e]);
          return this.request(t);
        }),
        (t.prototype.getMetadata = function () {
          var e = _e(d.GetMetadata);
          return this.request(e);
        }),
        (t.prototype.updateEmail = function (e) {
          var t = e.showUI,
            r = _e(d.UpdateEmail, [{ email: e.email, showUI: void 0 === t || t }]);
          return this.request(r);
        }),
        (t.prototype.isLoggedIn = function () {
          var e = _e(d.IsLoggedIn);
          return this.request(e);
        }),
        (t.prototype.logout = function () {
          var e = _e(d.Logout);
          return this.request(e);
        }),
        t
      );
    })(Te),
    Me = Ae(),
    Ce = Me.createBoundEmitterMethod,
    De = Me.createChainingEmitterMethod,
    ke = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.isMagic = !0),
          (t.on = De('on', t)),
          (t.once = De('once', t)),
          (t.addListener = De('addListener', t)),
          (t.off = De('off', t)),
          (t.removeListener = De('removeListener', t)),
          (t.removeAllListeners = De('removeAllListeners', t)),
          (t.emit = Ce('emit')),
          (t.eventNames = Ce('eventNames')),
          (t.listeners = Ce('listeners')),
          (t.listenerCount = Ce('listenerCount')),
          t
        );
      }
      return (
        s(t, e),
        (t.prototype.sendAsync = function (e, t) {
          if (!t)
            throw new le(
              y.InvalidArgument,
              'Invalid ' +
                ((i =
                  (n =
                    (r = {
                      procedure: 'Magic.rpcProvider.sendAsync',
                      argument: 1,
                      expected: 'function',
                      received: null === t ? 'null' : typeof t,
                    }).argument + 1) % 100),
                (1 == (o = n % 10) && 11 !== i
                  ? n + 'st'
                  : 2 === o && 12 !== i
                  ? n + 'nd'
                  : 3 === o && 13 !== i
                  ? n + 'rd'
                  : n + 'th') + ' argument given to `') +
                r.procedure +
                '`.\n  Expected: `' +
                r.expected +
                '`\n  Received: `' +
                r.received +
                '`'
            );
          var r, n, o, i;
          if (Array.isArray(e))
            this.transport
              .post(
                this.overlay,
                v.MAGIC_HANDLE_REQUEST,
                e.map(function (e) {
                  return be(e);
                })
              )
              .then(function (e) {
                t(
                  null,
                  e.map(function (e) {
                    return u(u({}, e.payload), {
                      error: e.hasError ? new he(e.payload.error) : null,
                    });
                  })
                );
              });
          else {
            var a = be(e);
            this.transport.post(this.overlay, v.MAGIC_HANDLE_REQUEST, a).then(function (e) {
              t(e.hasError ? new he(e.payload.error) : null, e.payload);
            });
          }
        }),
        (t.prototype.send = function (e, t) {
          if ('string' == typeof e) {
            var r = _e(e, Array.isArray(t) ? t : []);
            return this.request(r);
          }
          if (!Array.isArray(e) && !t) {
            var n = new de(
              m.SyncWeb3Method,
              'Non-async web3 methods are deprecated in web3 > 1.0 and are not supported by the Magic web3 provider. Please use an async method instead.'
            );
            return n.log(), new Ie(e).applyError({ code: -32603, message: n.rawMessage }).payload;
          }
          this.sendAsync(e, t);
        }),
        (t.prototype.enable = function () {
          var e = _e('eth_accounts');
          return this.request(e);
        }),
        t
      );
    })(Te);
  function xe(e, t) {
    return t ? new URL(e, t) : new URL(e);
  }
  function Fe(e) {
    var t = this;
    return function () {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      return c(t, void 0, void 0, function () {
        return f(this, function (t) {
          switch (t.label) {
            case 0:
              return Le ? [3, 2] : [4, ce.configureStorage()];
            case 1:
              (Le = t.sent()), (t.label = 2);
            case 2:
              return [4, Le.ready()];
            case 3:
              return t.sent(), [2, Le[e].apply(Le, h(r))];
          }
        });
      });
    };
  }
  var Ue = {
      __proto__: null,
      getItem: Fe('getItem'),
      setItem: Fe('setItem'),
      removeItem: Fe('removeItem'),
      clear: Fe('clear'),
      length: Fe('length'),
      key: Fe('key'),
      keys: Fe('keys'),
      iterate: Fe('iterate'),
    },
    Ge = ['request', 'transport', 'overlay', 'sdk'],
    Be = (function (e) {
      function t() {
        var t = e.call(this, void 0) || this;
        (t.__sdk_access_field_descriptors__ = new Map()),
          (t.__is_initialized__ = !1),
          (t.utils = {
            createPromiEvent: Re,
            isPromiEvent: Oe,
            encodeJSON: oe,
            decodeJSON: ie,
            createJsonRpcRequestPayload: _e,
            standardizeJsonRpcRequestPayload: be,
            storage: Ue,
          });
        var r = h(
          [t],
          (function (e) {
            for (var t = Object.getPrototypeOf(e), r = [t]; t !== Te.prototype; )
              (t = Object.getPrototypeOf(t)), r.push(t);
            return r;
          })(t)
        );
        return (
          Ge.forEach(function (e) {
            var n = r.map(function (t) {
                return Object.getOwnPropertyDescriptor(t, e);
              }),
              o = n.findIndex(function (e) {
                return !!e;
              }),
              i = n[o];
            i &&
              (t.__sdk_access_field_descriptors__.set(e, {
                descriptor: i,
                isPrototypeField: o > 0,
              }),
              Object.defineProperty(t, e, {
                configurable: !0,
                get: function () {
                  throw new le(
                    y.ExtensionNotInitialized,
                    'Extensions must be initialized with a Magic SDK instance before `Extension.' +
                      (t = e) +
                      '` can be accessed. Do not invoke `Extension.' +
                      t +
                      '` inside an extension constructor.'
                  );
                  var t;
                },
              }));
          }),
          t
        );
      }
      return (
        s(t, e),
        (t.prototype.init = function (e) {
          var t = this;
          this.__is_initialized__ ||
            (Ge.forEach(function (e) {
              if (t.__sdk_access_field_descriptors__.has(e)) {
                var r = t.__sdk_access_field_descriptors__.get(e),
                  n = r.descriptor;
                r.isPrototypeField ? delete t[e] : Object.defineProperty(t, e, n);
              }
            }),
            (this.sdk = e),
            (this.__is_initialized__ = !0));
        }),
        (t.prototype.createDeprecationWarning = function (e) {
          var t = e.useInstead;
          return new ve(
            this,
            'DEPRECATION_NOTICE',
            '`' +
              e.method +
              '` will be removed from this Extension in version `' +
              e.removalVersion +
              '`.' +
              (t ? ' Use `' + t + '` instead.' : '')
          );
        }),
        (t.prototype.createWarning = function (e, t) {
          return new ve(this, e, t);
        }),
        (t.prototype.createError = function (e, t, r) {
          return new pe(this, e, t, r);
        }),
        t
      );
    })(Te),
    ze = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return s(t, e), t;
    })(Be),
    He = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return s(t, e), (t.Internal = ze), t;
    })(Be);
  function We(e) {
    if (e.compat) {
      if ('magic-sdk' === ce.sdkName)
        return 'string' == typeof e.compat['magic-sdk']
          ? te(ce.version, e.compat['magic-sdk'])
          : !!e.compat['magic-sdk'];
      if ('@magic-sdk/react-native' === ce.sdkName)
        return 'string' == typeof e.compat['@magic-sdk/react-native']
          ? te(ce.version, e.compat['@magic-sdk/react-native'])
          : !!e.compat['@magic-sdk/react-native'];
    }
    return !0;
  }
  function Xe(e) {
    var t,
      r = this,
      n = null !== (t = null == e ? void 0 : e.extensions) && void 0 !== t ? t : [],
      o = {},
      i = [];
    if (
      (Array.isArray(n)
        ? n.forEach(function (e) {
            We(e)
              ? (e.init(r),
                (r[e.name] = e),
                e instanceof He.Internal && (ue(e.config) || (o[e.name] = e.config)))
              : i.push(e);
          })
        : Object.keys(n).forEach(function (e) {
            if (We(n[e])) {
              n[e].init(r);
              var t = n[e];
              (r[e] = t), t instanceof He.Internal && (ue(t.config) || (o[n[e].name] = t.config));
            } else i.push(n[e]);
          }),
      i.length)
    )
      throw (function (e) {
        var t = 'Some extensions are incompatible with `' + ce.sdkName + '@' + ce.version + '`:';
        return (
          e
            .filter(function (e) {
              return null != e.compat;
            })
            .forEach(function (e) {
              var r = e.compat[ce.sdkName];
              'string' == typeof r
                ? (t += '\n  - Extension `' + e.name + '` supports version(s) `' + r + '`')
                : r ||
                  (t +=
                    '\n  - Extension `' +
                    e.name +
                    '` does not support ' +
                    ce.platform +
                    ' environments.');
            }),
          new le(y.IncompatibleExtensions, t)
        );
      })(i);
    return o;
  }
  var Ve,
    qe,
    Ye = (function () {
      function e(e, t) {
        var r;
        if (((this.apiKey = e), !e))
          throw new le(
            y.MissingApiKey,
            'Please provide an API key that you acquired from the Magic developer dashboard.'
          );
        'react-native' === ce.platform &&
          (null == t ? void 0 : t.endpoint) &&
          new de(
            m.ReactNativeEndpointConfiguration,
            'CUSTOM DOMAINS ARE NOT SUPPORTED WHEN USING MAGIC SDK WITH REACT NATIVE! The `endpoint` parameter SHOULD NOT be provided. The Magic `<iframe>` is automatically wrapped by a WebView pointed at `' +
              ce.defaultEndpoint +
              '`. Changing this default behavior will lead to unexpected results and potentially security-threatening bugs.'
          ).log();
        var n = ce.version;
        (this.endpoint = xe(
          null !== (r = null == t ? void 0 : t.endpoint) && void 0 !== r ? r : ce.defaultEndpoint
        ).origin),
          (this.auth = new je(this)),
          (this.user = new Pe(this)),
          (this.rpcProvider = new ke(this));
        var o = Xe.call(this, t);
        this.parameters = oe({
          API_KEY: this.apiKey,
          DOMAIN_ORIGIN: window.location ? window.location.origin : '',
          ETH_NETWORK: null == t ? void 0 : t.network,
          host: xe(this.endpoint).host,
          sdk: fe[ce.sdkName],
          version: n,
          ext: ue(o) ? void 0 : o,
          locale: (null == t ? void 0 : t.locale) || 'en_US',
        });
      }
      return (
        Object.defineProperty(e.prototype, 'transport', {
          get: function () {
            return (
              e.__transports__.has(this.parameters) ||
                e.__transports__.set(
                  this.parameters,
                  new ce.PayloadTransport(this.endpoint, this.parameters)
                ),
              e.__transports__.get(this.parameters)
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'overlay', {
          get: function () {
            if (!e.__overlays__.has(this.parameters)) {
              var t = new ce.ViewController(this.transport);
              e.__overlays__.set(this.parameters, t);
            }
            return e.__overlays__.get(this.parameters);
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.preload = function () {
          return c(this, void 0, void 0, function () {
            return f(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.overlay.ready];
                case 1:
                  return e.sent(), [2];
              }
            });
          });
        }),
        (e.__transports__ = new Map()),
        (e.__overlays__ = new Map()),
        e
      );
    })(),
    Ke = (function () {
      function e(e, t) {
        (this.endpoint = e), (this.parameters = t), (this.messageHandlers = new Set()), this.init();
      }
      return (
        (e.prototype.post = function (e, t, r) {
          return c(this, void 0, void 0, function () {
            var n = this;
            return f(this, function (o) {
              return [
                2,
                Se(function (o) {
                  return c(n, void 0, void 0, function () {
                    var n, i, a;
                    return f(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return [4, e.ready];
                        case 1:
                          return (
                            s.sent(),
                            (n = []),
                            (i = Array.isArray(r)
                              ? r.map(function (e) {
                                  return e.id;
                                })
                              : []),
                            [4, e.postMessage({ msgType: t + '-' + this.parameters, payload: r })]
                          );
                        case 2:
                          return (
                            s.sent(),
                            (a = this.on(
                              p.MAGIC_HANDLE_RESPONSE,
                              ((u = function () {
                                return a();
                              }),
                              function (e) {
                                var t = (function (e, t) {
                                    var r,
                                      n =
                                        null === (r = t.data.response) || void 0 === r
                                          ? void 0
                                          : r.id,
                                      o = (function (e, t) {
                                        return t && Array.isArray(e)
                                          ? e.find(function (e) {
                                              return e.id === t;
                                            })
                                          : e;
                                      })(e, n);
                                    return n && o
                                      ? {
                                          id: n,
                                          response: new Ie(o)
                                            .applyResult(t.data.response.result)
                                            .applyError(t.data.response.error),
                                        }
                                      : {};
                                  })(r, e),
                                  a = t.id,
                                  s = t.response;
                                a && s && Array.isArray(r) && i.includes(a)
                                  ? (n.push(s), n.length === r.length && (u(), o(n)))
                                  : a && s && !Array.isArray(r) && a === r.id && (u(), o(s));
                              })
                            )),
                            [2]
                          );
                      }
                      var u;
                    });
                  });
                }),
              ];
            });
          });
        }),
        (e.prototype.on = function (e, t) {
          var r = this,
            n = t.bind(window),
            o = function (t) {
              t.data.msgType === e + '-' + r.parameters && n(t);
            };
          return (
            this.messageHandlers.add(o),
            function () {
              return r.messageHandlers.delete(o);
            }
          );
        }),
        e
      );
    })(),
    $e = (function () {
      function e(e) {
        (this.transport = e),
          (this.endpoint = e.endpoint),
          (this.parameters = e.parameters),
          (this.ready = this.waitForReady()),
          this.init && this.init(),
          this.listen();
      }
      return (
        (e.prototype.waitForReady = function () {
          var e = this;
          return new Promise(function (t) {
            e.transport.on(p.MAGIC_OVERLAY_READY, function () {
              return t();
            });
          });
        }),
        (e.prototype.listen = function () {
          var e = this;
          this.transport.on(p.MAGIC_HIDE_OVERLAY, function () {
            e.hideOverlay();
          }),
            this.transport.on(p.MAGIC_SHOW_OVERLAY, function () {
              e.showOverlay();
            });
        }),
        e
      );
    })(),
    Je = {
      __proto__: null,
      Extension: He,
      SDKError: le,
      ExtensionError: pe,
      ExtensionWarning: ve,
      RPCError: he,
      SDKWarning: de,
      isPromiEvent: Oe,
      get MagicPayloadMethod() {
        return d;
      },
      get MagicIncomingWindowMessage() {
        return p;
      },
      get MagicOutgoingWindowMessage() {
        return v;
      },
      get SDKErrorCode() {
        return y;
      },
      get SDKWarningCode() {
        return m;
      },
      get RPCErrorCode() {
        return g;
      },
      get EthChainType() {
        return E;
      },
    },
    Qe = o(function (e, t) {
      e.exports = (function e(t, r, n) {
        function o(s, u) {
          if (!r[s]) {
            if (!t[s]) {
              if (!u && i) return i();
              if (a) return a(s, !0);
              var c = new Error("Cannot find module '" + s + "'");
              throw ((c.code = 'MODULE_NOT_FOUND'), c);
            }
            var f = (r[s] = { exports: {} });
            t[s][0].call(
              f.exports,
              function (e) {
                return o(t[s][1][e] || e);
              },
              f,
              f.exports,
              e,
              t,
              r,
              n
            );
          }
          return r[s].exports;
        }
        for (var a = i, s = 0; s < n.length; s++) o(n[s]);
        return o;
      })(
        {
          1: [
            function (e, t, r) {
              (function (e) {
                var r,
                  n,
                  o = e.MutationObserver || e.WebKitMutationObserver;
                if (o) {
                  var i = 0,
                    a = new o(f),
                    s = e.document.createTextNode('');
                  a.observe(s, { characterData: !0 }),
                    (r = function () {
                      s.data = i = ++i % 2;
                    });
                } else if (e.setImmediate || void 0 === e.MessageChannel)
                  r =
                    'document' in e && 'onreadystatechange' in e.document.createElement('script')
                      ? function () {
                          var t = e.document.createElement('script');
                          (t.onreadystatechange = function () {
                            f(),
                              (t.onreadystatechange = null),
                              t.parentNode.removeChild(t),
                              (t = null);
                          }),
                            e.document.documentElement.appendChild(t);
                        }
                      : function () {
                          setTimeout(f, 0);
                        };
                else {
                  var u = new e.MessageChannel();
                  (u.port1.onmessage = f),
                    (r = function () {
                      u.port2.postMessage(0);
                    });
                }
                var c = [];
                function f() {
                  var e, t;
                  n = !0;
                  for (var r = c.length; r; ) {
                    for (t = c, c = [], e = -1; ++e < r; ) t[e]();
                    r = c.length;
                  }
                  n = !1;
                }
                t.exports = function (e) {
                  1 !== c.push(e) || n || r();
                };
              }.call(
                this,
                void 0 !== n
                  ? n
                  : 'undefined' != typeof self
                  ? self
                  : 'undefined' != typeof window
                  ? window
                  : {}
              ));
            },
            {},
          ],
          2: [
            function (e, t, r) {
              var n = e(1);
              function o() {}
              var i = {},
                a = ['REJECTED'],
                s = ['FULFILLED'],
                u = ['PENDING'];
              function c(e) {
                if ('function' != typeof e) throw new TypeError('resolver must be a function');
                (this.state = u), (this.queue = []), (this.outcome = void 0), e !== o && d(this, e);
              }
              function f(e, t, r) {
                (this.promise = e),
                  'function' == typeof t &&
                    ((this.onFulfilled = t), (this.callFulfilled = this.otherCallFulfilled)),
                  'function' == typeof r &&
                    ((this.onRejected = r), (this.callRejected = this.otherCallRejected));
              }
              function l(e, t, r) {
                n(function () {
                  var n;
                  try {
                    n = t(r);
                  } catch (t) {
                    return i.reject(e, t);
                  }
                  n === e
                    ? i.reject(e, new TypeError('Cannot resolve promise with itself'))
                    : i.resolve(e, n);
                });
              }
              function h(e) {
                var t = e && e.then;
                if (e && ('object' == typeof e || 'function' == typeof e) && 'function' == typeof t)
                  return function () {
                    t.apply(e, arguments);
                  };
              }
              function d(e, t) {
                var r = !1;
                function n(t) {
                  r || ((r = !0), i.reject(e, t));
                }
                function o(t) {
                  r || ((r = !0), i.resolve(e, t));
                }
                var a = p(function () {
                  t(o, n);
                });
                'error' === a.status && n(a.value);
              }
              function p(e, t) {
                var r = {};
                try {
                  (r.value = e(t)), (r.status = 'success');
                } catch (e) {
                  (r.status = 'error'), (r.value = e);
                }
                return r;
              }
              (t.exports = c),
                (c.prototype.catch = function (e) {
                  return this.then(null, e);
                }),
                (c.prototype.then = function (e, t) {
                  if (
                    ('function' != typeof e && this.state === s) ||
                    ('function' != typeof t && this.state === a)
                  )
                    return this;
                  var r = new this.constructor(o);
                  return (
                    this.state !== u
                      ? l(r, this.state === s ? e : t, this.outcome)
                      : this.queue.push(new f(r, e, t)),
                    r
                  );
                }),
                (f.prototype.callFulfilled = function (e) {
                  i.resolve(this.promise, e);
                }),
                (f.prototype.otherCallFulfilled = function (e) {
                  l(this.promise, this.onFulfilled, e);
                }),
                (f.prototype.callRejected = function (e) {
                  i.reject(this.promise, e);
                }),
                (f.prototype.otherCallRejected = function (e) {
                  l(this.promise, this.onRejected, e);
                }),
                (i.resolve = function (e, t) {
                  var r = p(h, t);
                  if ('error' === r.status) return i.reject(e, r.value);
                  var n = r.value;
                  if (n) d(e, n);
                  else {
                    (e.state = s), (e.outcome = t);
                    for (var o = -1, a = e.queue.length; ++o < a; ) e.queue[o].callFulfilled(t);
                  }
                  return e;
                }),
                (i.reject = function (e, t) {
                  (e.state = a), (e.outcome = t);
                  for (var r = -1, n = e.queue.length; ++r < n; ) e.queue[r].callRejected(t);
                  return e;
                }),
                (c.resolve = function (e) {
                  return e instanceof this ? e : i.resolve(new this(o), e);
                }),
                (c.reject = function (e) {
                  var t = new this(o);
                  return i.reject(t, e);
                }),
                (c.all = function (e) {
                  var t = this;
                  if ('[object Array]' !== Object.prototype.toString.call(e))
                    return this.reject(new TypeError('must be an array'));
                  var r = e.length,
                    n = !1;
                  if (!r) return this.resolve([]);
                  for (var a = new Array(r), s = 0, u = -1, c = new this(o); ++u < r; ) f(e[u], u);
                  return c;
                  function f(e, o) {
                    t.resolve(e).then(
                      function (e) {
                        (a[o] = e), ++s !== r || n || ((n = !0), i.resolve(c, a));
                      },
                      function (e) {
                        n || ((n = !0), i.reject(c, e));
                      }
                    );
                  }
                }),
                (c.race = function (e) {
                  if ('[object Array]' !== Object.prototype.toString.call(e))
                    return this.reject(new TypeError('must be an array'));
                  var t = e.length,
                    r = !1;
                  if (!t) return this.resolve([]);
                  for (var n = -1, a = new this(o); ++n < t; )
                    this.resolve(e[n]).then(
                      function (e) {
                        r || ((r = !0), i.resolve(a, e));
                      },
                      function (e) {
                        r || ((r = !0), i.reject(a, e));
                      }
                    );
                  return a;
                });
            },
            { 1: 1 },
          ],
          3: [
            function (e, t, r) {
              (function (t) {
                'function' != typeof t.Promise && (t.Promise = e(2));
              }.call(
                this,
                void 0 !== n
                  ? n
                  : 'undefined' != typeof self
                  ? self
                  : 'undefined' != typeof window
                  ? window
                  : {}
              ));
            },
            { 2: 2 },
          ],
          4: [
            function (e, t, r) {
              var n =
                  'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      },
                o = (function () {
                  try {
                    if ('undefined' != typeof indexedDB) return indexedDB;
                    if ('undefined' != typeof webkitIndexedDB) return webkitIndexedDB;
                    if ('undefined' != typeof mozIndexedDB) return mozIndexedDB;
                    if ('undefined' != typeof OIndexedDB) return OIndexedDB;
                    if ('undefined' != typeof msIndexedDB) return msIndexedDB;
                  } catch (e) {
                    return;
                  }
                })();
              function i(e, t) {
                (e = e || []), (t = t || {});
                try {
                  return new Blob(e, t);
                } catch (o) {
                  if ('TypeError' !== o.name) throw o;
                  for (
                    var r = new ('undefined' != typeof BlobBuilder
                        ? BlobBuilder
                        : 'undefined' != typeof MSBlobBuilder
                        ? MSBlobBuilder
                        : 'undefined' != typeof MozBlobBuilder
                        ? MozBlobBuilder
                        : WebKitBlobBuilder)(),
                      n = 0;
                    n < e.length;
                    n += 1
                  )
                    r.append(e[n]);
                  return r.getBlob(t.type);
                }
              }
              'undefined' == typeof Promise && e(3);
              var a = Promise;
              function s(e, t) {
                t &&
                  e.then(
                    function (e) {
                      t(null, e);
                    },
                    function (e) {
                      t(e);
                    }
                  );
              }
              function u(e, t, r) {
                'function' == typeof t && e.then(t), 'function' == typeof r && e.catch(r);
              }
              function c(e) {
                return (
                  'string' != typeof e &&
                    (console.warn(e + ' used as a key, but it is not a string.'), (e = String(e))),
                  e
                );
              }
              function f() {
                if (arguments.length && 'function' == typeof arguments[arguments.length - 1])
                  return arguments[arguments.length - 1];
              }
              var l = void 0,
                h = {},
                d = Object.prototype.toString;
              function p(e) {
                var t = h[e.name],
                  r = {};
                (r.promise = new a(function (e, t) {
                  (r.resolve = e), (r.reject = t);
                })),
                  t.deferredOperations.push(r),
                  (t.dbReady = t.dbReady
                    ? t.dbReady.then(function () {
                        return r.promise;
                      })
                    : r.promise);
              }
              function v(e) {
                var t = h[e.name].deferredOperations.pop();
                if (t) return t.resolve(), t.promise;
              }
              function y(e, t) {
                var r = h[e.name].deferredOperations.pop();
                if (r) return r.reject(t), r.promise;
              }
              function m(e, t) {
                return new a(function (r, n) {
                  if (
                    ((h[e.name] = h[e.name] || {
                      forages: [],
                      db: null,
                      dbReady: null,
                      deferredOperations: [],
                    }),
                    e.db)
                  ) {
                    if (!t) return r(e.db);
                    p(e), e.db.close();
                  }
                  var i = [e.name];
                  t && i.push(e.version);
                  var a = o.open.apply(o, i);
                  t &&
                    (a.onupgradeneeded = function (t) {
                      var r = a.result;
                      try {
                        r.createObjectStore(e.storeName),
                          t.oldVersion <= 1 &&
                            r.createObjectStore('local-forage-detect-blob-support');
                      } catch (r) {
                        if ('ConstraintError' !== r.name) throw r;
                        console.warn(
                          'The database "' +
                            e.name +
                            '" has been upgraded from version ' +
                            t.oldVersion +
                            ' to version ' +
                            t.newVersion +
                            ', but the storage "' +
                            e.storeName +
                            '" already exists.'
                        );
                      }
                    }),
                    (a.onerror = function (e) {
                      e.preventDefault(), n(a.error);
                    }),
                    (a.onsuccess = function () {
                      r(a.result), v(e);
                    });
                });
              }
              function g(e) {
                return m(e, !1);
              }
              function E(e) {
                return m(e, !0);
              }
              function b(e, t) {
                if (!e.db) return !0;
                var r = !e.db.objectStoreNames.contains(e.storeName),
                  n = e.version > e.db.version;
                if (
                  (e.version < e.db.version &&
                    (e.version !== t &&
                      console.warn(
                        'The database "' +
                          e.name +
                          '" can\'t be downgraded from version ' +
                          e.db.version +
                          ' to version ' +
                          e.version +
                          '.'
                      ),
                    (e.version = e.db.version)),
                  n || r)
                ) {
                  if (r) {
                    var o = e.db.version + 1;
                    o > e.version && (e.version = o);
                  }
                  return !0;
                }
                return !1;
              }
              function _(e) {
                return i(
                  [
                    (function (e) {
                      for (
                        var t = e.length, r = new ArrayBuffer(t), n = new Uint8Array(r), o = 0;
                        o < t;
                        o++
                      )
                        n[o] = e.charCodeAt(o);
                      return r;
                    })(atob(e.data)),
                  ],
                  { type: e.type }
                );
              }
              function I(e) {
                return e && e.__local_forage_encoded_blob;
              }
              function w(e) {
                var t = this,
                  r = t._initReady().then(function () {
                    var e = h[t._dbInfo.name];
                    if (e && e.dbReady) return e.dbReady;
                  });
                return u(r, e, e), r;
              }
              function A(e, t, r, n) {
                void 0 === n && (n = 1);
                try {
                  var o = e.db.transaction(e.storeName, t);
                  r(null, o);
                } catch (o) {
                  if (
                    n > 0 &&
                    (!e.db || 'InvalidStateError' === o.name || 'NotFoundError' === o.name)
                  )
                    return a
                      .resolve()
                      .then(function () {
                        if (
                          !e.db ||
                          ('NotFoundError' === o.name &&
                            !e.db.objectStoreNames.contains(e.storeName) &&
                            e.version <= e.db.version)
                        )
                          return e.db && (e.version = e.db.version + 1), E(e);
                      })
                      .then(function () {
                        return (function (e) {
                          p(e);
                          for (var t = h[e.name], r = t.forages, n = 0; n < r.length; n++) {
                            var o = r[n];
                            o._dbInfo.db && (o._dbInfo.db.close(), (o._dbInfo.db = null));
                          }
                          return (
                            (e.db = null),
                            g(e)
                              .then(function (t) {
                                return (e.db = t), b(e) ? E(e) : t;
                              })
                              .then(function (n) {
                                e.db = t.db = n;
                                for (var o = 0; o < r.length; o++) r[o]._dbInfo.db = n;
                              })
                              .catch(function (t) {
                                throw (y(e, t), t);
                              })
                          );
                        })(e).then(function () {
                          A(e, t, r, n - 1);
                        });
                      })
                      .catch(r);
                  r(o);
                }
              }
              var N = {
                  _driver: 'asyncStorage',
                  _initStorage: function (e) {
                    var t = this,
                      r = { db: null };
                    if (e) for (var n in e) r[n] = e[n];
                    var o = h[r.name];
                    o ||
                      (h[r.name] = o = {
                        forages: [],
                        db: null,
                        dbReady: null,
                        deferredOperations: [],
                      }),
                      o.forages.push(t),
                      t._initReady || ((t._initReady = t.ready), (t.ready = w));
                    var i = [];
                    function s() {
                      return a.resolve();
                    }
                    for (var u = 0; u < o.forages.length; u++) {
                      var c = o.forages[u];
                      c !== t && i.push(c._initReady().catch(s));
                    }
                    var f = o.forages.slice(0);
                    return a
                      .all(i)
                      .then(function () {
                        return (r.db = o.db), g(r);
                      })
                      .then(function (e) {
                        return (r.db = e), b(r, t._defaultConfig.version) ? E(r) : e;
                      })
                      .then(function (e) {
                        (r.db = o.db = e), (t._dbInfo = r);
                        for (var n = 0; n < f.length; n++) {
                          var i = f[n];
                          i !== t && ((i._dbInfo.db = r.db), (i._dbInfo.version = r.version));
                        }
                      });
                  },
                  _support: (function () {
                    try {
                      if (!o || !o.open) return !1;
                      var e =
                          'undefined' != typeof openDatabase &&
                          /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
                          !/Chrome/.test(navigator.userAgent) &&
                          !/BlackBerry/.test(navigator.platform),
                        t =
                          'function' == typeof fetch &&
                          -1 !== fetch.toString().indexOf('[native code');
                      return (
                        (!e || t) &&
                        'undefined' != typeof indexedDB &&
                        'undefined' != typeof IDBKeyRange
                      );
                    } catch (e) {
                      return !1;
                    }
                  })(),
                  iterate: function (e, t) {
                    var r = this,
                      n = new a(function (t, n) {
                        r.ready()
                          .then(function () {
                            A(r._dbInfo, 'readonly', function (o, i) {
                              if (o) return n(o);
                              try {
                                var a = i.objectStore(r._dbInfo.storeName).openCursor(),
                                  s = 1;
                                (a.onsuccess = function () {
                                  var r = a.result;
                                  if (r) {
                                    var n = r.value;
                                    I(n) && (n = _(n));
                                    var o = e(n, r.key, s++);
                                    void 0 !== o ? t(o) : r.continue();
                                  } else t();
                                }),
                                  (a.onerror = function () {
                                    n(a.error);
                                  });
                              } catch (e) {
                                n(e);
                              }
                            });
                          })
                          .catch(n);
                      });
                    return s(n, t), n;
                  },
                  getItem: function (e, t) {
                    var r = this;
                    e = c(e);
                    var n = new a(function (t, n) {
                      r.ready()
                        .then(function () {
                          A(r._dbInfo, 'readonly', function (o, i) {
                            if (o) return n(o);
                            try {
                              var a = i.objectStore(r._dbInfo.storeName).get(e);
                              (a.onsuccess = function () {
                                var e = a.result;
                                void 0 === e && (e = null), I(e) && (e = _(e)), t(e);
                              }),
                                (a.onerror = function () {
                                  n(a.error);
                                });
                            } catch (e) {
                              n(e);
                            }
                          });
                        })
                        .catch(n);
                    });
                    return s(n, t), n;
                  },
                  setItem: function (e, t, r) {
                    var n = this;
                    e = c(e);
                    var o = new a(function (r, o) {
                      var s;
                      n.ready()
                        .then(function () {
                          return (
                            (s = n._dbInfo),
                            '[object Blob]' === d.call(t)
                              ? (function (e) {
                                  return 'boolean' == typeof l
                                    ? a.resolve(l)
                                    : (function (e) {
                                        return new a(function (t) {
                                          var r = e.transaction(
                                              'local-forage-detect-blob-support',
                                              'readwrite'
                                            ),
                                            n = i(['']);
                                          r
                                            .objectStore('local-forage-detect-blob-support')
                                            .put(n, 'key'),
                                            (r.onabort = function (e) {
                                              e.preventDefault(), e.stopPropagation(), t(!1);
                                            }),
                                            (r.oncomplete = function () {
                                              var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                                                r = navigator.userAgent.match(/Edge\//);
                                              t(r || !e || parseInt(e[1], 10) >= 43);
                                            });
                                        }).catch(function () {
                                          return !1;
                                        });
                                      })(e).then(function (e) {
                                        return (l = e);
                                      });
                                })(s.db).then(function (e) {
                                  return e
                                    ? t
                                    : ((r = t),
                                      new a(function (e, t) {
                                        var n = new FileReader();
                                        (n.onerror = t),
                                          (n.onloadend = function (t) {
                                            var n = btoa(t.target.result || '');
                                            e({
                                              __local_forage_encoded_blob: !0,
                                              data: n,
                                              type: r.type,
                                            });
                                          }),
                                          n.readAsBinaryString(r);
                                      }));
                                  var r;
                                })
                              : t
                          );
                        })
                        .then(function (t) {
                          A(n._dbInfo, 'readwrite', function (i, a) {
                            if (i) return o(i);
                            try {
                              var s = a.objectStore(n._dbInfo.storeName);
                              null === t && (t = void 0);
                              var u = s.put(t, e);
                              (a.oncomplete = function () {
                                void 0 === t && (t = null), r(t);
                              }),
                                (a.onabort = a.onerror = function () {
                                  o(u.error ? u.error : u.transaction.error);
                                });
                            } catch (e) {
                              o(e);
                            }
                          });
                        })
                        .catch(o);
                    });
                    return s(o, r), o;
                  },
                  removeItem: function (e, t) {
                    var r = this;
                    e = c(e);
                    var n = new a(function (t, n) {
                      r.ready()
                        .then(function () {
                          A(r._dbInfo, 'readwrite', function (o, i) {
                            if (o) return n(o);
                            try {
                              var a = i.objectStore(r._dbInfo.storeName).delete(e);
                              (i.oncomplete = function () {
                                t();
                              }),
                                (i.onerror = function () {
                                  n(a.error);
                                }),
                                (i.onabort = function () {
                                  n(a.error ? a.error : a.transaction.error);
                                });
                            } catch (e) {
                              n(e);
                            }
                          });
                        })
                        .catch(n);
                    });
                    return s(n, t), n;
                  },
                  clear: function (e) {
                    var t = this,
                      r = new a(function (e, r) {
                        t.ready()
                          .then(function () {
                            A(t._dbInfo, 'readwrite', function (n, o) {
                              if (n) return r(n);
                              try {
                                var i = o.objectStore(t._dbInfo.storeName).clear();
                                (o.oncomplete = function () {
                                  e();
                                }),
                                  (o.onabort = o.onerror = function () {
                                    r(i.error ? i.error : i.transaction.error);
                                  });
                              } catch (e) {
                                r(e);
                              }
                            });
                          })
                          .catch(r);
                      });
                    return s(r, e), r;
                  },
                  length: function (e) {
                    var t = this,
                      r = new a(function (e, r) {
                        t.ready()
                          .then(function () {
                            A(t._dbInfo, 'readonly', function (n, o) {
                              if (n) return r(n);
                              try {
                                var i = o.objectStore(t._dbInfo.storeName).count();
                                (i.onsuccess = function () {
                                  e(i.result);
                                }),
                                  (i.onerror = function () {
                                    r(i.error);
                                  });
                              } catch (e) {
                                r(e);
                              }
                            });
                          })
                          .catch(r);
                      });
                    return s(r, e), r;
                  },
                  key: function (e, t) {
                    var r = this,
                      n = new a(function (t, n) {
                        e < 0
                          ? t(null)
                          : r
                              .ready()
                              .then(function () {
                                A(r._dbInfo, 'readonly', function (o, i) {
                                  if (o) return n(o);
                                  try {
                                    var a = i.objectStore(r._dbInfo.storeName),
                                      s = !1,
                                      u = a.openKeyCursor();
                                    (u.onsuccess = function () {
                                      var r = u.result;
                                      r
                                        ? 0 === e || s
                                          ? t(r.key)
                                          : ((s = !0), r.advance(e))
                                        : t(null);
                                    }),
                                      (u.onerror = function () {
                                        n(u.error);
                                      });
                                  } catch (e) {
                                    n(e);
                                  }
                                });
                              })
                              .catch(n);
                      });
                    return s(n, t), n;
                  },
                  keys: function (e) {
                    var t = this,
                      r = new a(function (e, r) {
                        t.ready()
                          .then(function () {
                            A(t._dbInfo, 'readonly', function (n, o) {
                              if (n) return r(n);
                              try {
                                var i = o.objectStore(t._dbInfo.storeName).openKeyCursor(),
                                  a = [];
                                (i.onsuccess = function () {
                                  var t = i.result;
                                  t ? (a.push(t.key), t.continue()) : e(a);
                                }),
                                  (i.onerror = function () {
                                    r(i.error);
                                  });
                              } catch (e) {
                                r(e);
                              }
                            });
                          })
                          .catch(r);
                      });
                    return s(r, e), r;
                  },
                  dropInstance: function (e, t) {
                    t = f.apply(this, arguments);
                    var r = this.config();
                    (e = ('function' != typeof e && e) || {}).name ||
                      ((e.name = e.name || r.name), (e.storeName = e.storeName || r.storeName));
                    var n,
                      i = this;
                    if (e.name) {
                      var u = e.name === r.name && i._dbInfo.db,
                        c = u
                          ? a.resolve(i._dbInfo.db)
                          : g(e).then(function (t) {
                              var r = h[e.name],
                                n = r.forages;
                              r.db = t;
                              for (var o = 0; o < n.length; o++) n[o]._dbInfo.db = t;
                              return t;
                            });
                      n = c.then(
                        e.storeName
                          ? function (t) {
                              if (t.objectStoreNames.contains(e.storeName)) {
                                var r = t.version + 1;
                                p(e);
                                var n = h[e.name],
                                  i = n.forages;
                                t.close();
                                for (var s = 0; s < i.length; s++) {
                                  var u = i[s];
                                  (u._dbInfo.db = null), (u._dbInfo.version = r);
                                }
                                return new a(function (t, n) {
                                  var i = o.open(e.name, r);
                                  (i.onerror = function (e) {
                                    i.result.close(), n(e);
                                  }),
                                    (i.onupgradeneeded = function () {
                                      i.result.deleteObjectStore(e.storeName);
                                    }),
                                    (i.onsuccess = function () {
                                      var e = i.result;
                                      e.close(), t(e);
                                    });
                                })
                                  .then(function (e) {
                                    n.db = e;
                                    for (var t = 0; t < i.length; t++) {
                                      var r = i[t];
                                      (r._dbInfo.db = e), v(r._dbInfo);
                                    }
                                  })
                                  .catch(function (t) {
                                    throw ((y(e, t) || a.resolve()).catch(function () {}), t);
                                  });
                              }
                            }
                          : function (t) {
                              p(e);
                              var r = h[e.name],
                                n = r.forages;
                              t.close();
                              for (var i = 0; i < n.length; i++) n[i]._dbInfo.db = null;
                              return new a(function (t, r) {
                                var n = o.deleteDatabase(e.name);
                                (n.onerror = n.onblocked = function (e) {
                                  var t = n.result;
                                  t && t.close(), r(e);
                                }),
                                  (n.onsuccess = function () {
                                    var e = n.result;
                                    e && e.close(), t(e);
                                  });
                              })
                                .then(function (e) {
                                  r.db = e;
                                  for (var t = 0; t < n.length; t++) v(n[t]._dbInfo);
                                })
                                .catch(function (t) {
                                  throw ((y(e, t) || a.resolve()).catch(function () {}), t);
                                });
                            }
                      );
                    } else n = a.reject('Invalid arguments');
                    return s(n, t), n;
                  },
                },
                O = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                R = /^~~local_forage_type~([^~]+)~/,
                S = '__lfsc__:'.length,
                L = S + 'arbf'.length,
                T = Object.prototype.toString;
              function j(e) {
                var t,
                  r,
                  n,
                  o,
                  i,
                  a = 0.75 * e.length,
                  s = e.length,
                  u = 0;
                '=' === e[e.length - 1] && (a--, '=' === e[e.length - 2] && a--);
                var c = new ArrayBuffer(a),
                  f = new Uint8Array(c);
                for (t = 0; t < s; t += 4)
                  (r = O.indexOf(e[t])),
                    (n = O.indexOf(e[t + 1])),
                    (o = O.indexOf(e[t + 2])),
                    (i = O.indexOf(e[t + 3])),
                    (f[u++] = (r << 2) | (n >> 4)),
                    (f[u++] = ((15 & n) << 4) | (o >> 2)),
                    (f[u++] = ((3 & o) << 6) | (63 & i));
                return c;
              }
              function P(e) {
                var t,
                  r = new Uint8Array(e),
                  n = '';
                for (t = 0; t < r.length; t += 3)
                  (n += O[r[t] >> 2]),
                    (n += O[((3 & r[t]) << 4) | (r[t + 1] >> 4)]),
                    (n += O[((15 & r[t + 1]) << 2) | (r[t + 2] >> 6)]),
                    (n += O[63 & r[t + 2]]);
                return (
                  r.length % 3 == 2
                    ? (n = n.substring(0, n.length - 1) + '=')
                    : r.length % 3 == 1 && (n = n.substring(0, n.length - 2) + '=='),
                  n
                );
              }
              var M = {
                serialize: function (e, t) {
                  var r = '';
                  if (
                    (e && (r = T.call(e)),
                    e &&
                      ('[object ArrayBuffer]' === r ||
                        (e.buffer && '[object ArrayBuffer]' === T.call(e.buffer))))
                  ) {
                    var n,
                      o = '__lfsc__:';
                    e instanceof ArrayBuffer
                      ? ((n = e), (o += 'arbf'))
                      : ((n = e.buffer),
                        '[object Int8Array]' === r
                          ? (o += 'si08')
                          : '[object Uint8Array]' === r
                          ? (o += 'ui08')
                          : '[object Uint8ClampedArray]' === r
                          ? (o += 'uic8')
                          : '[object Int16Array]' === r
                          ? (o += 'si16')
                          : '[object Uint16Array]' === r
                          ? (o += 'ur16')
                          : '[object Int32Array]' === r
                          ? (o += 'si32')
                          : '[object Uint32Array]' === r
                          ? (o += 'ui32')
                          : '[object Float32Array]' === r
                          ? (o += 'fl32')
                          : '[object Float64Array]' === r
                          ? (o += 'fl64')
                          : t(new Error('Failed to get type for BinaryArray'))),
                      t(o + P(n));
                  } else if ('[object Blob]' === r) {
                    var i = new FileReader();
                    (i.onload = function () {
                      var r = '~~local_forage_type~' + e.type + '~' + P(this.result);
                      t('__lfsc__:blob' + r);
                    }),
                      i.readAsArrayBuffer(e);
                  } else
                    try {
                      t(JSON.stringify(e));
                    } catch (r) {
                      console.error("Couldn't convert value into a JSON string: ", e), t(null, r);
                    }
                },
                deserialize: function (e) {
                  if ('__lfsc__:' !== e.substring(0, S)) return JSON.parse(e);
                  var t,
                    r = e.substring(L),
                    n = e.substring(S, L);
                  if ('blob' === n && R.test(r)) {
                    var o = r.match(R);
                    (t = o[1]), (r = r.substring(o[0].length));
                  }
                  var a = j(r);
                  switch (n) {
                    case 'arbf':
                      return a;
                    case 'blob':
                      return i([a], { type: t });
                    case 'si08':
                      return new Int8Array(a);
                    case 'ui08':
                      return new Uint8Array(a);
                    case 'uic8':
                      return new Uint8ClampedArray(a);
                    case 'si16':
                      return new Int16Array(a);
                    case 'ur16':
                      return new Uint16Array(a);
                    case 'si32':
                      return new Int32Array(a);
                    case 'ui32':
                      return new Uint32Array(a);
                    case 'fl32':
                      return new Float32Array(a);
                    case 'fl64':
                      return new Float64Array(a);
                    default:
                      throw new Error('Unkown type: ' + n);
                  }
                },
                stringToBuffer: j,
                bufferToString: P,
              };
              function C(e, t, r, n) {
                e.executeSql(
                  'CREATE TABLE IF NOT EXISTS ' +
                    t.storeName +
                    ' (id INTEGER PRIMARY KEY, key unique, value)',
                  [],
                  r,
                  n
                );
              }
              function D(e, t, r, n, o, i) {
                e.executeSql(
                  r,
                  n,
                  o,
                  function (e, a) {
                    a.code === a.SYNTAX_ERR
                      ? e.executeSql(
                          "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                          [t.storeName],
                          function (e, s) {
                            s.rows.length
                              ? i(e, a)
                              : C(
                                  e,
                                  t,
                                  function () {
                                    e.executeSql(r, n, o, i);
                                  },
                                  i
                                );
                          },
                          i
                        )
                      : i(e, a);
                  },
                  i
                );
              }
              function k(e, t, r, n) {
                var o = this;
                e = c(e);
                var i = new a(function (i, a) {
                  o.ready()
                    .then(function () {
                      void 0 === t && (t = null);
                      var s = t,
                        u = o._dbInfo;
                      u.serializer.serialize(t, function (t, c) {
                        c
                          ? a(c)
                          : u.db.transaction(
                              function (r) {
                                D(
                                  r,
                                  u,
                                  'INSERT OR REPLACE INTO ' +
                                    u.storeName +
                                    ' (key, value) VALUES (?, ?)',
                                  [e, t],
                                  function () {
                                    i(s);
                                  },
                                  function (e, t) {
                                    a(t);
                                  }
                                );
                              },
                              function (t) {
                                if (t.code === t.QUOTA_ERR) {
                                  if (n > 0) return void i(k.apply(o, [e, s, r, n - 1]));
                                  a(t);
                                }
                              }
                            );
                      });
                    })
                    .catch(a);
                });
                return s(i, r), i;
              }
              function x(e) {
                return new a(function (t, r) {
                  e.transaction(
                    function (n) {
                      n.executeSql(
                        "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                        [],
                        function (r, n) {
                          for (var o = [], i = 0; i < n.rows.length; i++)
                            o.push(n.rows.item(i).name);
                          t({ db: e, storeNames: o });
                        },
                        function (e, t) {
                          r(t);
                        }
                      );
                    },
                    function (e) {
                      r(e);
                    }
                  );
                });
              }
              var F = {
                _driver: 'webSQLStorage',
                _initStorage: function (e) {
                  var t = this,
                    r = { db: null };
                  if (e) for (var n in e) r[n] = 'string' != typeof e[n] ? e[n].toString() : e[n];
                  var o = new a(function (e, n) {
                    try {
                      r.db = openDatabase(r.name, String(r.version), r.description, r.size);
                    } catch (e) {
                      return n(e);
                    }
                    r.db.transaction(function (o) {
                      C(
                        o,
                        r,
                        function () {
                          (t._dbInfo = r), e();
                        },
                        function (e, t) {
                          n(t);
                        }
                      );
                    }, n);
                  });
                  return (r.serializer = M), o;
                },
                _support: 'function' == typeof openDatabase,
                iterate: function (e, t) {
                  var r = this,
                    n = new a(function (t, n) {
                      r.ready()
                        .then(function () {
                          var o = r._dbInfo;
                          o.db.transaction(function (r) {
                            D(
                              r,
                              o,
                              'SELECT * FROM ' + o.storeName,
                              [],
                              function (r, n) {
                                for (var i = n.rows, a = i.length, s = 0; s < a; s++) {
                                  var u = i.item(s),
                                    c = u.value;
                                  if (
                                    (c && (c = o.serializer.deserialize(c)),
                                    void 0 !== (c = e(c, u.key, s + 1)))
                                  )
                                    return void t(c);
                                }
                                t();
                              },
                              function (e, t) {
                                n(t);
                              }
                            );
                          });
                        })
                        .catch(n);
                    });
                  return s(n, t), n;
                },
                getItem: function (e, t) {
                  var r = this;
                  e = c(e);
                  var n = new a(function (t, n) {
                    r.ready()
                      .then(function () {
                        var o = r._dbInfo;
                        o.db.transaction(function (r) {
                          D(
                            r,
                            o,
                            'SELECT * FROM ' + o.storeName + ' WHERE key = ? LIMIT 1',
                            [e],
                            function (e, r) {
                              var n = r.rows.length ? r.rows.item(0).value : null;
                              n && (n = o.serializer.deserialize(n)), t(n);
                            },
                            function (e, t) {
                              n(t);
                            }
                          );
                        });
                      })
                      .catch(n);
                  });
                  return s(n, t), n;
                },
                setItem: function (e, t, r) {
                  return k.apply(this, [e, t, r, 1]);
                },
                removeItem: function (e, t) {
                  var r = this;
                  e = c(e);
                  var n = new a(function (t, n) {
                    r.ready()
                      .then(function () {
                        var o = r._dbInfo;
                        o.db.transaction(function (r) {
                          D(
                            r,
                            o,
                            'DELETE FROM ' + o.storeName + ' WHERE key = ?',
                            [e],
                            function () {
                              t();
                            },
                            function (e, t) {
                              n(t);
                            }
                          );
                        });
                      })
                      .catch(n);
                  });
                  return s(n, t), n;
                },
                clear: function (e) {
                  var t = this,
                    r = new a(function (e, r) {
                      t.ready()
                        .then(function () {
                          var n = t._dbInfo;
                          n.db.transaction(function (t) {
                            D(
                              t,
                              n,
                              'DELETE FROM ' + n.storeName,
                              [],
                              function () {
                                e();
                              },
                              function (e, t) {
                                r(t);
                              }
                            );
                          });
                        })
                        .catch(r);
                    });
                  return s(r, e), r;
                },
                length: function (e) {
                  var t = this,
                    r = new a(function (e, r) {
                      t.ready()
                        .then(function () {
                          var n = t._dbInfo;
                          n.db.transaction(function (t) {
                            D(
                              t,
                              n,
                              'SELECT COUNT(key) as c FROM ' + n.storeName,
                              [],
                              function (t, r) {
                                var n = r.rows.item(0).c;
                                e(n);
                              },
                              function (e, t) {
                                r(t);
                              }
                            );
                          });
                        })
                        .catch(r);
                    });
                  return s(r, e), r;
                },
                key: function (e, t) {
                  var r = this,
                    n = new a(function (t, n) {
                      r.ready()
                        .then(function () {
                          var o = r._dbInfo;
                          o.db.transaction(function (r) {
                            D(
                              r,
                              o,
                              'SELECT key FROM ' + o.storeName + ' WHERE id = ? LIMIT 1',
                              [e + 1],
                              function (e, r) {
                                var n = r.rows.length ? r.rows.item(0).key : null;
                                t(n);
                              },
                              function (e, t) {
                                n(t);
                              }
                            );
                          });
                        })
                        .catch(n);
                    });
                  return s(n, t), n;
                },
                keys: function (e) {
                  var t = this,
                    r = new a(function (e, r) {
                      t.ready()
                        .then(function () {
                          var n = t._dbInfo;
                          n.db.transaction(function (t) {
                            D(
                              t,
                              n,
                              'SELECT key FROM ' + n.storeName,
                              [],
                              function (t, r) {
                                for (var n = [], o = 0; o < r.rows.length; o++)
                                  n.push(r.rows.item(o).key);
                                e(n);
                              },
                              function (e, t) {
                                r(t);
                              }
                            );
                          });
                        })
                        .catch(r);
                    });
                  return s(r, e), r;
                },
                dropInstance: function (e, t) {
                  t = f.apply(this, arguments);
                  var r = this.config();
                  (e = ('function' != typeof e && e) || {}).name ||
                    ((e.name = e.name || r.name), (e.storeName = e.storeName || r.storeName));
                  var n,
                    o = this;
                  return (
                    s(
                      (n = e.name
                        ? new a(function (t) {
                            var n;
                            (n =
                              e.name === r.name ? o._dbInfo.db : openDatabase(e.name, '', '', 0)),
                              t(e.storeName ? { db: n, storeNames: [e.storeName] } : x(n));
                          }).then(function (e) {
                            return new a(function (t, r) {
                              e.db.transaction(
                                function (n) {
                                  function o(e) {
                                    return new a(function (t, r) {
                                      n.executeSql(
                                        'DROP TABLE IF EXISTS ' + e,
                                        [],
                                        function () {
                                          t();
                                        },
                                        function (e, t) {
                                          r(t);
                                        }
                                      );
                                    });
                                  }
                                  for (var i = [], s = 0, u = e.storeNames.length; s < u; s++)
                                    i.push(o(e.storeNames[s]));
                                  a.all(i)
                                    .then(function () {
                                      t();
                                    })
                                    .catch(function (e) {
                                      r(e);
                                    });
                                },
                                function (e) {
                                  r(e);
                                }
                              );
                            });
                          })
                        : a.reject('Invalid arguments')),
                      t
                    ),
                    n
                  );
                },
              };
              function U(e, t) {
                var r = e.name + '/';
                return e.storeName !== t.storeName && (r += e.storeName + '/'), r;
              }
              var G = {
                  _driver: 'localStorageWrapper',
                  _initStorage: function (e) {
                    var t = {};
                    if (e) for (var r in e) t[r] = e[r];
                    return (
                      (t.keyPrefix = U(e, this._defaultConfig)),
                      !(function () {
                        try {
                          return (
                            localStorage.setItem('_localforage_support_test', !0),
                            localStorage.removeItem('_localforage_support_test'),
                            !1
                          );
                        } catch (e) {
                          return !0;
                        }
                      })() || localStorage.length > 0
                        ? ((this._dbInfo = t), (t.serializer = M), a.resolve())
                        : a.reject()
                    );
                  },
                  _support: (function () {
                    try {
                      return (
                        'undefined' != typeof localStorage &&
                        'setItem' in localStorage &&
                        !!localStorage.setItem
                      );
                    } catch (e) {
                      return !1;
                    }
                  })(),
                  iterate: function (e, t) {
                    var r = this,
                      n = r.ready().then(function () {
                        for (
                          var t = r._dbInfo,
                            n = t.keyPrefix,
                            o = n.length,
                            i = localStorage.length,
                            a = 1,
                            s = 0;
                          s < i;
                          s++
                        ) {
                          var u = localStorage.key(s);
                          if (0 === u.indexOf(n)) {
                            var c = localStorage.getItem(u);
                            if (
                              (c && (c = t.serializer.deserialize(c)),
                              void 0 !== (c = e(c, u.substring(o), a++)))
                            )
                              return c;
                          }
                        }
                      });
                    return s(n, t), n;
                  },
                  getItem: function (e, t) {
                    var r = this;
                    e = c(e);
                    var n = r.ready().then(function () {
                      var t = r._dbInfo,
                        n = localStorage.getItem(t.keyPrefix + e);
                      return n && (n = t.serializer.deserialize(n)), n;
                    });
                    return s(n, t), n;
                  },
                  setItem: function (e, t, r) {
                    var n = this;
                    e = c(e);
                    var o = n.ready().then(function () {
                      void 0 === t && (t = null);
                      var r = t;
                      return new a(function (o, i) {
                        var a = n._dbInfo;
                        a.serializer.serialize(t, function (t, n) {
                          if (n) i(n);
                          else
                            try {
                              localStorage.setItem(a.keyPrefix + e, t), o(r);
                            } catch (e) {
                              ('QuotaExceededError' !== e.name &&
                                'NS_ERROR_DOM_QUOTA_REACHED' !== e.name) ||
                                i(e),
                                i(e);
                            }
                        });
                      });
                    });
                    return s(o, r), o;
                  },
                  removeItem: function (e, t) {
                    var r = this;
                    e = c(e);
                    var n = r.ready().then(function () {
                      localStorage.removeItem(r._dbInfo.keyPrefix + e);
                    });
                    return s(n, t), n;
                  },
                  clear: function (e) {
                    var t = this,
                      r = t.ready().then(function () {
                        for (
                          var e = t._dbInfo.keyPrefix, r = localStorage.length - 1;
                          r >= 0;
                          r--
                        ) {
                          var n = localStorage.key(r);
                          0 === n.indexOf(e) && localStorage.removeItem(n);
                        }
                      });
                    return s(r, e), r;
                  },
                  length: function (e) {
                    var t = this.keys().then(function (e) {
                      return e.length;
                    });
                    return s(t, e), t;
                  },
                  key: function (e, t) {
                    var r = this,
                      n = r.ready().then(function () {
                        var t,
                          n = r._dbInfo;
                        try {
                          t = localStorage.key(e);
                        } catch (e) {
                          t = null;
                        }
                        return t && (t = t.substring(n.keyPrefix.length)), t;
                      });
                    return s(n, t), n;
                  },
                  keys: function (e) {
                    var t = this,
                      r = t.ready().then(function () {
                        for (
                          var e = t._dbInfo, r = localStorage.length, n = [], o = 0;
                          o < r;
                          o++
                        ) {
                          var i = localStorage.key(o);
                          0 === i.indexOf(e.keyPrefix) && n.push(i.substring(e.keyPrefix.length));
                        }
                        return n;
                      });
                    return s(r, e), r;
                  },
                  dropInstance: function (e, t) {
                    if (
                      ((t = f.apply(this, arguments)),
                      !(e = ('function' != typeof e && e) || {}).name)
                    ) {
                      var r = this.config();
                      (e.name = e.name || r.name), (e.storeName = e.storeName || r.storeName);
                    }
                    var n,
                      o = this;
                    return (
                      s(
                        (n = e.name
                          ? new a(function (t) {
                              t(e.storeName ? U(e, o._defaultConfig) : e.name + '/');
                            }).then(function (e) {
                              for (var t = localStorage.length - 1; t >= 0; t--) {
                                var r = localStorage.key(t);
                                0 === r.indexOf(e) && localStorage.removeItem(r);
                              }
                            })
                          : a.reject('Invalid arguments')),
                        t
                      ),
                      n
                    );
                  },
                },
                B = function (e, t) {
                  for (var r, n, o = e.length, i = 0; i < o; ) {
                    if (
                      (r = e[i]) === (n = t) ||
                      ('number' == typeof r && 'number' == typeof n && isNaN(r) && isNaN(n))
                    )
                      return !0;
                    i++;
                  }
                  return !1;
                },
                z =
                  Array.isArray ||
                  function (e) {
                    return '[object Array]' === Object.prototype.toString.call(e);
                  },
                H = {},
                W = {},
                X = { INDEXEDDB: N, WEBSQL: F, LOCALSTORAGE: G },
                V = [X.INDEXEDDB._driver, X.WEBSQL._driver, X.LOCALSTORAGE._driver],
                q = ['dropInstance'],
                Y = [
                  'clear',
                  'getItem',
                  'iterate',
                  'key',
                  'keys',
                  'length',
                  'removeItem',
                  'setItem',
                ].concat(q),
                K = {
                  description: '',
                  driver: V.slice(),
                  name: 'localforage',
                  size: 4980736,
                  storeName: 'keyvaluepairs',
                  version: 1,
                };
              function $(e, t) {
                e[t] = function () {
                  var r = arguments;
                  return e.ready().then(function () {
                    return e[t].apply(e, r);
                  });
                };
              }
              function J() {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  if (t)
                    for (var r in t)
                      t.hasOwnProperty(r) && (arguments[0][r] = z(t[r]) ? t[r].slice() : t[r]);
                }
                return arguments[0];
              }
              var Q = new ((function () {
                function e(t) {
                  for (var r in ((function (e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                  })(this, e),
                  X))
                    if (X.hasOwnProperty(r)) {
                      var n = X[r],
                        o = n._driver;
                      (this[r] = o), H[o] || this.defineDriver(n);
                    }
                  (this._defaultConfig = J({}, K)),
                    (this._config = J({}, this._defaultConfig, t)),
                    (this._driverSet = null),
                    (this._initDriver = null),
                    (this._ready = !1),
                    (this._dbInfo = null),
                    this._wrapLibraryMethodsWithReady(),
                    this.setDriver(this._config.driver).catch(function () {});
                }
                return (
                  (e.prototype.config = function (e) {
                    if ('object' === (void 0 === e ? 'undefined' : n(e))) {
                      if (this._ready)
                        return new Error("Can't call config() after localforage has been used.");
                      for (var t in e) {
                        if (
                          ('storeName' === t && (e[t] = e[t].replace(/\W/g, '_')),
                          'version' === t && 'number' != typeof e[t])
                        )
                          return new Error('Database version must be a number.');
                        this._config[t] = e[t];
                      }
                      return !('driver' in e) || !e.driver || this.setDriver(this._config.driver);
                    }
                    return 'string' == typeof e ? this._config[e] : this._config;
                  }),
                  (e.prototype.defineDriver = function (e, t, r) {
                    var n = new a(function (t, r) {
                      try {
                        var n = e._driver,
                          o = new Error(
                            'Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver'
                          );
                        if (!e._driver) return void r(o);
                        for (var i = Y.concat('_initStorage'), u = 0, c = i.length; u < c; u++) {
                          var f = i[u];
                          if ((!B(q, f) || e[f]) && 'function' != typeof e[f]) return void r(o);
                        }
                        !(function () {
                          for (
                            var t = function (e) {
                                return function () {
                                  var t = new Error(
                                      'Method ' + e + ' is not implemented by the current driver'
                                    ),
                                    r = a.reject(t);
                                  return s(r, arguments[arguments.length - 1]), r;
                                };
                              },
                              r = 0,
                              n = q.length;
                            r < n;
                            r++
                          ) {
                            var o = q[r];
                            e[o] || (e[o] = t(o));
                          }
                        })();
                        var l = function (r) {
                          H[n] && console.info('Redefining LocalForage driver: ' + n),
                            (H[n] = e),
                            (W[n] = r),
                            t();
                        };
                        '_support' in e
                          ? e._support && 'function' == typeof e._support
                            ? e._support().then(l, r)
                            : l(!!e._support)
                          : l(!0);
                      } catch (e) {
                        r(e);
                      }
                    });
                    return u(n, t, r), n;
                  }),
                  (e.prototype.driver = function () {
                    return this._driver || null;
                  }),
                  (e.prototype.getDriver = function (e, t, r) {
                    var n = H[e] ? a.resolve(H[e]) : a.reject(new Error('Driver not found.'));
                    return u(n, t, r), n;
                  }),
                  (e.prototype.getSerializer = function (e) {
                    var t = a.resolve(M);
                    return u(t, e), t;
                  }),
                  (e.prototype.ready = function (e) {
                    var t = this,
                      r = t._driverSet.then(function () {
                        return null === t._ready && (t._ready = t._initDriver()), t._ready;
                      });
                    return u(r, e, e), r;
                  }),
                  (e.prototype.setDriver = function (e, t, r) {
                    var n = this;
                    z(e) || (e = [e]);
                    var o = this._getSupportedDrivers(e);
                    function i() {
                      n._config.driver = n.driver();
                    }
                    function s(e) {
                      return n._extend(e), i(), (n._ready = n._initStorage(n._config)), n._ready;
                    }
                    var c =
                      null !== this._driverSet
                        ? this._driverSet.catch(function () {
                            return a.resolve();
                          })
                        : a.resolve();
                    return (
                      (this._driverSet = c
                        .then(function () {
                          var e = o[0];
                          return (
                            (n._dbInfo = null),
                            (n._ready = null),
                            n.getDriver(e).then(function (e) {
                              (n._driver = e._driver),
                                i(),
                                n._wrapLibraryMethodsWithReady(),
                                (n._initDriver = (function (e) {
                                  return function () {
                                    var t = 0;
                                    return (function r() {
                                      for (; t < e.length; ) {
                                        var o = e[t];
                                        return (
                                          t++,
                                          (n._dbInfo = null),
                                          (n._ready = null),
                                          n.getDriver(o).then(s).catch(r)
                                        );
                                      }
                                      i();
                                      var u = new Error('No available storage method found.');
                                      return (n._driverSet = a.reject(u)), n._driverSet;
                                    })();
                                  };
                                })(o));
                            })
                          );
                        })
                        .catch(function () {
                          i();
                          var e = new Error('No available storage method found.');
                          return (n._driverSet = a.reject(e)), n._driverSet;
                        })),
                      u(this._driverSet, t, r),
                      this._driverSet
                    );
                  }),
                  (e.prototype.supports = function (e) {
                    return !!W[e];
                  }),
                  (e.prototype._extend = function (e) {
                    J(this, e);
                  }),
                  (e.prototype._getSupportedDrivers = function (e) {
                    for (var t = [], r = 0, n = e.length; r < n; r++) {
                      var o = e[r];
                      this.supports(o) && t.push(o);
                    }
                    return t;
                  }),
                  (e.prototype._wrapLibraryMethodsWithReady = function () {
                    for (var e = 0, t = Y.length; e < t; e++) $(this, Y[e]);
                  }),
                  (e.prototype.createInstance = function (t) {
                    return new e(t);
                  }),
                  e
                );
              })())();
              t.exports = Q;
            },
            { 3: 3 },
          ],
        },
        {},
        [4]
      )(4);
    }),
    Ze =
      (Ve = o(function (e, t) {
        'undefined' != typeof self && self,
          (function (e) {
            var t = /^~~local_forage_type~([^~]+)~/,
              r = '__lfsc__:'.length,
              n = r + 'arbf'.length,
              o = Object.prototype.toString;
            function i(e) {
              var t = 0.75 * e.length,
                r = e.length;
              '=' === e[e.length - 1] && (t--, '=' === e[e.length - 2] && t--);
              for (var n = new ArrayBuffer(t), o = new Uint8Array(n), i = 0, a = 0; i < r; i += 4) {
                var s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(
                    e[i]
                  ),
                  u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(
                    e[i + 1]
                  ),
                  c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(
                    e[i + 2]
                  ),
                  f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(
                    e[i + 3]
                  );
                (o[a++] = (s << 2) | (u >> 4)),
                  (o[a++] = ((15 & u) << 4) | (c >> 2)),
                  (o[a++] = ((3 & c) << 6) | (63 & f));
              }
              return n;
            }
            function a(e) {
              for (var t = new Uint8Array(e), r = '', n = 0; n < t.length; n += 3)
                (r += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[
                  t[n] >> 2
                ]),
                  (r += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[
                    ((3 & t[n]) << 4) | (t[n + 1] >> 4)
                  ]),
                  (r += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[
                    ((15 & t[n + 1]) << 2) | (t[n + 2] >> 6)
                  ]),
                  (r += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[
                    63 & t[n + 2]
                  ]);
              return (
                t.length % 3 == 2
                  ? (r = r.substring(0, r.length - 1) + '=')
                  : t.length % 3 == 1 && (r = r.substring(0, r.length - 2) + '=='),
                r
              );
            }
            function s(e, t) {
              return (e.name || t.name) + '/' + (e.storeName || t.storeName) + '/';
            }
            function u(e, t) {
              t &&
                e.then(
                  function (e) {
                    t(null, e);
                  },
                  function (e) {
                    t(e);
                  }
                );
            }
            function c() {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              if (arguments.length && 'function' == typeof arguments[arguments.length - 1])
                return arguments[arguments.length - 1];
            }
            function f(e, t) {
              var r = this;
              if (
                ((t = c.apply(this, arguments)), !(e = ('function' != typeof e && e) || {}).name)
              ) {
                var n = this.config();
                (e.name = e.name || n.name), (e.storeName = e.storeName || n.storeName);
              }
              return {
                promise: e.name
                  ? new Promise(function (t) {
                      t(e.storeName ? s(e, r._defaultConfig) : e.name + '/');
                    })
                  : Promise.reject('Invalid arguments'),
                callback: t,
              };
            }
            function l(e) {
              return (
                'string' != typeof e &&
                  (console.warn(e + ' used as a key, but it is not a string.'), (e = String(e))),
                e
              );
            }
            var h = {
                bufferToString: a,
                deserialize: function (e) {
                  if ('__lfsc__:' !== e.substring(0, r)) return JSON.parse(e);
                  var o,
                    a = e.substring(n),
                    s = e.substring(r, n);
                  if ('blob' === s && t.test(a)) {
                    var u = a.match(t);
                    (o = u[1]), (a = a.substring(u[0].length));
                  }
                  var c = i(a);
                  switch (s) {
                    case 'arbf':
                      return c;
                    case 'blob':
                      return (function (e, t) {
                        (e = e || []), (t = t || {});
                        try {
                          return new Blob(e, t);
                        } catch (o) {
                          if ('TypeError' !== o.name) throw o;
                          for (
                            var r = new ('undefined' != typeof BlobBuilder
                                ? BlobBuilder
                                : 'undefined' != typeof MSBlobBuilder
                                ? MSBlobBuilder
                                : 'undefined' != typeof MozBlobBuilder
                                ? MozBlobBuilder
                                : WebKitBlobBuilder)(),
                              n = 0;
                            n < e.length;
                            n += 1
                          )
                            r.append(e[n]);
                          return r.getBlob(t.type);
                        }
                      })([c], { type: o });
                    case 'si08':
                      return new Int8Array(c);
                    case 'ui08':
                      return new Uint8Array(c);
                    case 'uic8':
                      return new Uint8ClampedArray(c);
                    case 'si16':
                      return new Int16Array(c);
                    case 'ur16':
                      return new Uint16Array(c);
                    case 'si32':
                      return new Int32Array(c);
                    case 'ui32':
                      return new Uint32Array(c);
                    case 'fl32':
                      return new Float32Array(c);
                    case 'fl64':
                      return new Float64Array(c);
                    default:
                      throw new Error('Unkown type: ' + s);
                  }
                },
                serialize: function (e, t) {
                  var r = '';
                  if (
                    (e && (r = o.call(e)),
                    e &&
                      ('[object ArrayBuffer]' === r ||
                        (e.buffer && '[object ArrayBuffer]' === o.call(e.buffer))))
                  ) {
                    var n = void 0,
                      i = '__lfsc__:';
                    e instanceof ArrayBuffer
                      ? ((n = e), (i += 'arbf'))
                      : ((n = e.buffer),
                        '[object Int8Array]' === r
                          ? (i += 'si08')
                          : '[object Uint8Array]' === r
                          ? (i += 'ui08')
                          : '[object Uint8ClampedArray]' === r
                          ? (i += 'uic8')
                          : '[object Int16Array]' === r
                          ? (i += 'si16')
                          : '[object Uint16Array]' === r
                          ? (i += 'ur16')
                          : '[object Int32Array]' === r
                          ? (i += 'si32')
                          : '[object Uint32Array]' === r
                          ? (i += 'ui32')
                          : '[object Float32Array]' === r
                          ? (i += 'fl32')
                          : '[object Float64Array]' === r
                          ? (i += 'fl64')
                          : t(new Error('Failed to get type for BinaryArray'))),
                      t(i + a(n));
                  } else if ('[object Blob]' === r) {
                    var s = new FileReader();
                    (s.onload = function () {
                      var r = '~~local_forage_type~' + e.type + '~' + a(this.result);
                      t('__lfsc__:blob' + r);
                    }),
                      s.readAsArrayBuffer(e);
                  } else
                    try {
                      t(JSON.stringify(e));
                    } catch (r) {
                      console.error("Couldn't convert value into a JSON string: ", e), t(null, r);
                    }
                },
                stringToBuffer: i,
              },
              d = {},
              p = (function () {
                function e(e) {
                  (this.kp = e), (this.data = {});
                }
                return (
                  (e.resolve = function (t) {
                    return d[t] || (d[t] = new e(t)), d[t];
                  }),
                  (e.prototype.clear = function () {
                    this.data = {};
                  }),
                  (e.prototype.drop = function () {
                    this.clear(), delete d[this.kp];
                  }),
                  (e.prototype.get = function (e) {
                    return this.data[e];
                  }),
                  (e.prototype.key = function (e) {
                    return this.keys()[e];
                  }),
                  (e.prototype.keys = function () {
                    return Object.keys(this.data);
                  }),
                  (e.prototype.rm = function (e) {
                    delete this.data[e];
                  }),
                  (e.prototype.set = function (e, t) {
                    this.data[e] = t;
                  }),
                  e
                );
              })();
            (e._support = !0),
              (e._driver = 'localforage-driver-memory'),
              (e._initStorage = function (e) {
                var t = e
                    ? (function e(t) {
                        var r, n;
                        if (null === t || 'object' != typeof t || 'isActiveClone' in t) return t;
                        var o = t instanceof Date ? new Date(t) : t.constructor();
                        try {
                          for (
                            var i = (function (e) {
                                var t = 'function' == typeof Symbol && e[Symbol.iterator],
                                  r = 0;
                                return t
                                  ? t.call(e)
                                  : {
                                      next: function () {
                                        return (
                                          e && r >= e.length && (e = void 0),
                                          { value: e && e[r++], done: !e }
                                        );
                                      },
                                    };
                              })(Object.keys(t)),
                              a = i.next();
                            !a.done;
                            a = i.next()
                          ) {
                            var s = a.value;
                            Object.prototype.hasOwnProperty.call(t, s) &&
                              ((t.isActiveClone = null), (o[s] = e(t[s])), delete t.isActiveClone);
                          }
                        } catch (e) {
                          r = { error: e };
                        } finally {
                          try {
                            a && !a.done && (n = i.return) && n.call(i);
                          } finally {
                            if (r) throw r.error;
                          }
                        }
                        return o;
                      })(e)
                    : {},
                  r = s(t, this._defaultConfig),
                  n = p.resolve(r);
                return (
                  (this._dbInfo = t),
                  (this._dbInfo.serializer = h),
                  (this._dbInfo.keyPrefix = r),
                  (this._dbInfo.mStore = n),
                  Promise.resolve()
                );
              }),
              (e.clear = function (e) {
                var t = this,
                  r = this.ready().then(function () {
                    t._dbInfo.mStore.clear();
                  });
                return u(r, e), r;
              }),
              (e.dropInstance = function (e, t) {
                var r = f.apply(this, arguments),
                  n = r.promise,
                  o = r.callback,
                  i = n.then(function (e) {
                    p.resolve(e).drop();
                  });
                return u(i, o), n;
              }),
              (e.getItem = function (e, t) {
                var r = this;
                e = l(e);
                var n = this.ready().then(function () {
                  var t = r._dbInfo.mStore.get(e);
                  return null == t ? null : r._dbInfo.serializer.deserialize(t);
                });
                return u(n, t), n;
              }),
              (e.iterate = function (e, t) {
                var r = this,
                  n = this.ready().then(function () {
                    for (var t = r._dbInfo.mStore, n = t.keys(), o = 0; o < n.length; o++) {
                      var i = t.get(n[o]);
                      if (
                        (i && (i = r._dbInfo.serializer.deserialize(i)),
                        void 0 !== (i = e(i, n[o], o + 1)))
                      )
                        return i;
                    }
                  });
                return u(n, t), n;
              }),
              (e.key = function (e, t) {
                var r = this,
                  n = this.ready().then(function () {
                    var t;
                    try {
                      void 0 === (t = r._dbInfo.mStore.key(e)) && (t = null);
                    } catch (e) {
                      t = null;
                    }
                    return t;
                  });
                return u(n, t), n;
              }),
              (e.keys = function (e) {
                var t = this,
                  r = this.ready().then(function () {
                    return t._dbInfo.mStore.keys();
                  });
                return u(r, e), r;
              }),
              (e.length = function (e) {
                var t = this.keys().then(function (e) {
                  return e.length;
                });
                return u(t, e), t;
              }),
              (e.removeItem = function (e, t) {
                var r = this;
                e = l(e);
                var n = this.ready().then(function () {
                  r._dbInfo.mStore.rm(e);
                });
                return u(n, t), n;
              }),
              (e.setItem = function (e, t, r) {
                var n = this;
                e = l(e);
                var o = this.ready().then(function () {
                  void 0 === t && (t = null);
                  var r = t;
                  return new Promise(function (o, i) {
                    n._dbInfo.serializer.serialize(t, function (t, a) {
                      if (a) i(a);
                      else
                        try {
                          n._dbInfo.mStore.set(e, t), o(r);
                        } catch (e) {
                          i(e);
                        }
                    });
                  });
                });
                return u(o, r), o;
              }),
              Object.defineProperty(e, '__esModule', { value: !0 });
          })(t);
      })) &&
      Ve.__esModule &&
      Object.prototype.hasOwnProperty.call(Ve, 'default')
        ? Ve.default
        : Ve,
    et = {
      display: 'none',
      position: 'fixed',
      top: '0',
      right: '0',
      width: '100%',
      height: '100%',
      borderRadius: '0',
      border: 'none',
      zIndex: '2147483647',
    },
    tt = (function (e) {
      function r() {
        var t;
        return ((t = e.apply(this, arguments) || this).activeElement = null), t;
      }
      t(r, e);
      var n = r.prototype;
      return (
        (n.init = function () {
          var e = this;
          this.iframe = new Promise(function (t) {
            var r = function () {
              if (
                ((n = encodeURIComponent(e.parameters)),
                (o = [].slice.call(document.querySelectorAll('.magic-iframe'))),
                Boolean(
                  o.find(function (e) {
                    return e.src.includes(n);
                  })
                ))
              )
                new de(m.DuplicateIframe, 'Duplicate iframes found.').log();
              else {
                var r = document.createElement('iframe');
                r.classList.add('magic-iframe'),
                  (r.dataset.magicIframeLabel = xe(e.endpoint).host),
                  (r.title = 'Secure Modal'),
                  (r.src = xe('/send?params=' + encodeURIComponent(e.parameters), e.endpoint).href),
                  (function (e) {
                    for (var t = 0, r = Object.entries(et); t < r.length; t++) {
                      var n = r[t];
                      e.style[n[0]] = n[1];
                    }
                  })(r),
                  document.body.appendChild(r),
                  t(r);
              }
              var n, o;
            };
            ['loaded', 'interactive', 'complete'].includes(document.readyState)
              ? r()
              : window.addEventListener('load', r, !1);
          });
        }),
        (n.showOverlay = function () {
          try {
            var e = this;
            return Promise.resolve(e.iframe).then(function (t) {
              (t.style.display = 'block'), (e.activeElement = document.activeElement), t.focus();
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (n.hideOverlay = function () {
          try {
            var e = this;
            return Promise.resolve(e.iframe).then(function (t) {
              var r;
              (t.style.display = 'none'),
                (null === (r = e.activeElement) || void 0 === r ? void 0 : r.focus) &&
                  e.activeElement.focus(),
                (e.activeElement = null);
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (n.postMessage = function (e) {
          try {
            var t = this;
            return Promise.resolve(t.iframe).then(function (r) {
              if (!r || !r.contentWindow) throw new le(y.ModalNotReady, 'Modal is not ready.');
              r.contentWindow.postMessage(e, t.endpoint);
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        r
      );
    })($e),
    rt =
      ((qe = Ye),
      Object.assign(ce, {
        platform: 'web',
        sdkName: 'magic-sdk',
        version: '4.1.1',
        defaultEndpoint: 'https://auth.magic.link/',
        ViewController: tt,
        PayloadTransport: (function (e) {
          function n() {
            return e.apply(this, arguments) || this;
          }
          return (
            t(n, e),
            (n.prototype.init = function () {
              var e = this;
              window.addEventListener('message', function (t) {
                if (t.origin === e.endpoint && t.data && t.data.msgType && e.messageHandlers.size) {
                  var n;
                  t.data.response = null != (n = t.data.response) ? n : {};
                  for (
                    var o,
                      i = (function (e, t) {
                        var n;
                        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                          if (
                            Array.isArray(e) ||
                            (n = (function (e, t) {
                              if (e) {
                                if ('string' == typeof e) return r(e, void 0);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return (
                                  'Object' === n && e.constructor && (n = e.constructor.name),
                                  'Map' === n || 'Set' === n
                                    ? Array.from(e)
                                    : 'Arguments' === n ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                    ? r(e, void 0)
                                    : void 0
                                );
                              }
                            })(e))
                          ) {
                            n && (e = n);
                            var o = 0;
                            return function () {
                              return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                            };
                          }
                          throw new TypeError(
                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                          );
                        }
                        return (n = e[Symbol.iterator]()).next.bind(n);
                      })(e.messageHandlers.values());
                    !(o = i()).done;

                  )
                    (0, o.value)(t);
                }
              });
            }),
            n
          );
        })(Ke),
        configureStorage: function () {
          try {
            var e = Qe.createInstance({
              name: 'MagicAuthLocalStorageDB',
              storeName: 'MagicAuthLocalStorage',
            });
            return Promise.resolve(e.defineDriver(Ze)).then(function () {
              return Promise.resolve(e.setDriver([Qe.INDEXEDDB, Qe.LOCALSTORAGE, Ze._driver])).then(
                function () {
                  return e;
                }
              );
            });
          } catch (e) {
            return Promise.reject(e);
          }
        },
      }),
      qe);
  return Object.assign(rt, e({}, Je)), rt;
})();