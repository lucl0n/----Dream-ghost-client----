(function (e) {
  function t(t) {
    for (var r, a, u = t[0], i = t[1], s = t[2], d = 0, l = []; d < u.length; d++)
      (a = u[d]), Object.prototype.hasOwnProperty.call(o, a) && o[a] && l.push(o[a][0]), (o[a] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    f && f(t);
    while (l.length) l.shift()();
    return c.push.apply(c, s || []), n();
  }

  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], r = !0, a = 1; a < n.length; a++) {
        var u = n[a];
        0 !== o[u] && (r = !1);
      }
      r && (c.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = {
      app: 0,
    },
    o = {
      app: 0,
    },
    c = [];

  function u(e) {
    return (
      i.p +
      'js/' +
      ({
        'group-admin~group-tickets': 'group-admin~group-tickets',
        'group-admin': 'group-admin',
        'group-tickets': 'group-tickets',
      }[e] || e) +
      '.' +
      {
        'chunk-0f4987b7': 'a0df7f99',
        'chunk-17427f0c': '29c580e5',
        'chunk-22405cfc': 'f311c6c2',
        'chunk-2d0e487d': 'ee915ccd',
        'chunk-2d21de35': 'f777f20b',
        'chunk-2d22c101': 'b637d7c7',
        'chunk-42a335a2': 'ec6b9129',
        'chunk-430c497b': '9ddffea6',
        'chunk-4e17a028': '12eda3ed',
        'chunk-032c9c15': '2ef02ff5',
        'chunk-d7161cfc': '79886d9a',
        'chunk-518df970': 'bcb9a593',
        'chunk-5afe7171': '09faaed5',
        'chunk-695025fe': 'a88436c6',
        'chunk-3eef3288': '862d7f4a',
        'chunk-68855d7b': '29aac2cd',
        'group-admin~group-tickets': '1919adc1',
        'group-admin': '0a07199b',
        'group-tickets': 'e2727de8',
        'chunk-7a275716': 'dd9c43c4',
        'chunk-90422d1e': 'd79e5705',
        'chunk-a69d7bba': '1c4f2927',
        'chunk-af78afae': '9785c29f',
        'chunk-bc0e593c': '5cd0f65f',
        'chunk-caec2872': '8d3ccd05',
        'chunk-cf066fea': '108091cc',
        'chunk-fe2ea0e2': '6732d1bf',
      }[e] +
      '.js'
    );
  }

  function i(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = {
      i: t,
      l: !1,
      exports: {},
    });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.e = function (e) {
    var t = [],
      n = {
        'chunk-0f4987b7': 1,
        'chunk-17427f0c': 1,
        'chunk-22405cfc': 1,
        'chunk-42a335a2': 1,
        'chunk-430c497b': 1,
        'chunk-4e17a028': 1,
        'chunk-032c9c15': 1,
        'chunk-d7161cfc': 1,
        'chunk-5afe7171': 1,
        'chunk-3eef3288': 1,
        'chunk-68855d7b': 1,
        'group-admin~group-tickets': 1,
        'group-admin': 1,
        'group-tickets': 1,
        'chunk-7a275716': 1,
        'chunk-a69d7bba': 1,
        'chunk-af78afae': 1,
        'chunk-bc0e593c': 1,
        'chunk-caec2872': 1,
        'chunk-fe2ea0e2': 1,
      };
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        t.push(
          (a[e] = new Promise(function (t, n) {
            for (
              var r =
                  'css/' +
                  ({
                    'group-admin~group-tickets': 'group-admin~group-tickets',
                    'group-admin': 'group-admin',
                    'group-tickets': 'group-tickets',
                  }[e] || e) +
                  '.' +
                  {
                    'chunk-0f4987b7': '30e5a30a',
                    'chunk-17427f0c': '30b9afd5',
                    'chunk-22405cfc': 'ac702fa7',
                    'chunk-2d0e487d': '31d6cfe0',
                    'chunk-2d21de35': '31d6cfe0',
                    'chunk-2d22c101': '31d6cfe0',
                    'chunk-42a335a2': '037a064a',
                    'chunk-430c497b': '50d39803',
                    'chunk-4e17a028': 'f4a11096',
                    'chunk-032c9c15': 'c15288dd',
                    'chunk-d7161cfc': 'b2b9032d',
                    'chunk-518df970': '31d6cfe0',
                    'chunk-5afe7171': '5abfb7f1',
                    'chunk-695025fe': '31d6cfe0',
                    'chunk-3eef3288': 'e4988387',
                    'chunk-68855d7b': '5c4f54bd',
                    'group-admin~group-tickets': '96ee62e1',
                    'group-admin': 'af1b85b9',
                    'group-tickets': '22c10a47',
                    'chunk-7a275716': '54008590',
                    'chunk-90422d1e': '31d6cfe0',
                    'chunk-a69d7bba': '354f2b40',
                    'chunk-af78afae': 'e1e50200',
                    'chunk-bc0e593c': '74b27371',
                    'chunk-caec2872': '341079bd',
                    'chunk-cf066fea': '31d6cfe0',
                    'chunk-fe2ea0e2': 'dd33e7a5',
                  }[e] +
                  '.css',
                o = i.p + r,
                c = document.getElementsByTagName('link'),
                u = 0;
              u < c.length;
              u++
            ) {
              var s = c[u],
                d = s.getAttribute('data-href') || s.getAttribute('href');
              if ('stylesheet' === s.rel && (d === r || d === o)) return t();
            }
            var l = document.getElementsByTagName('style');
            for (u = 0; u < l.length; u++) {
              (s = l[u]), (d = s.getAttribute('data-href'));
              if (d === r || d === o) return t();
            }
            var f = document.createElement('link');
            (f.rel = 'stylesheet'),
              (f.type = 'text/css'),
              (f.onload = t),
              (f.onerror = function (t) {
                var r = (t && t.target && t.target.src) || o,
                  c = new Error('Loading CSS chunk ' + e + ' failed.\n(' + r + ')');
                (c.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (c.request = r),
                  delete a[e],
                  f.parentNode.removeChild(f),
                  n(c);
              }),
              (f.href = o);
            var p = document.getElementsByTagName('head')[0];
            p.appendChild(f);
          }).then(function () {
            a[e] = 0;
          }))
        );
    var r = o[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var c = new Promise(function (t, n) {
          r = o[e] = [t, n];
        });
        t.push((r[2] = c));
        var s,
          d = document.createElement('script');
        (d.charset = 'utf-8'),
          (d.timeout = 120),
          i.nc && d.setAttribute('nonce', i.nc),
          (d.src = u(e));
        var l = new Error();
        s = function (t) {
          (d.onerror = d.onload = null), clearTimeout(f);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var r = t && ('load' === t.type ? 'missing' : t.type),
                a = t && t.target && t.target.src;
              (l.message = 'Loading chunk ' + e + ' failed.\n(' + r + ': ' + a + ')'),
                (l.name = 'ChunkLoadError'),
                (l.type = r),
                (l.request = a),
                n[1](l);
            }
            o[e] = void 0;
          }
        };
        var f = setTimeout(function () {
          s({
            type: 'timeout',
            target: d,
          });
        }, 12e4);
        (d.onerror = d.onload = s), document.head.appendChild(d);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = r),
    (i.d = function (e, t, n) {
      i.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: n,
        });
    }),
    (i.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(e, '__esModule', {
          value: !0,
        });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', {
          enumerable: !0,
          value: e,
        }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = '/'),
    (i.oe = function (e) {
      throw (console.error(e), e);
    });
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    d = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var f = d;
  c.push([0, 'chunk-vendors']), n();
})({
  0: function (e, t, n) {
    e.exports = n('cd49');
  },
  '060c': function (e, t, n) {
    'use strict';
    n('aedf');
  },
  '0613': function (e, t, n) {
    'use strict';
    var r = n('5502'),
      a = n('85ee');
    t['a'] = Object(r['a'])({
      state: {
        user: a['e'],
        moduleStruct: [],
        error: {
          message: null,
          errors: {},
        },
        stats: {
          users: 0,
          downloads: [],
          total_downloads: 0,
          launches: [],
          total_launches: 0,
          version: '',
        },
        links: {
          discord: 'https://discord.com',
        },
        referral: '',
      },
      mutations: {
        setUser: function (e, t) {
          (1 === t.access || t.access > 2) && (t.owned = !0), (e.user = t);
        },
      },
      modules: {},
    });
  },
  '0cfbe': function (e, t, n) {},
  '2c45': function (e, t, n) {
    'use strict';
    n('ecc6');
  },
  '39af': function (e, t, n) {
    'use strict';
    n('0cfbe');
  },
  '446e': function (e, t, n) {
    'use strict';
    var r = n('7a23'),
      a = {
        class: 'input__wrapper',
      },
      o = ['maxlength', 'minlength', 'placeholder', 'type'],
      c = {
        key: 0,
        class: 'input__error',
      };

    function u(e, t, n, u, i, s) {
      var d = Object(r['resolveComponent'])('icon');
      return (
        Object(r['openBlock'])(),
        Object(r['createElementBlock'])(
          'label',
          {
            class: Object(r['normalizeClass'])([
              {
                'input--error': e.errors.length > 0,
              },
              'input',
            ]),
            onMouseenter:
              t[1] ||
              (t[1] = function (t) {
                return (e.showError = !0);
              }),
            onMouseleave:
              t[2] ||
              (t[2] = function (t) {
                return (e.showError = !1);
              }),
          },
          [
            Object(r['createElementVNode'])('span', a, [
              e.icon
                ? (Object(r['openBlock'])(),
                  Object(r['createBlock'])(
                    d,
                    {
                      key: 0,
                      icon: e.icon,
                      class: 'input__wrapper__icon',
                    },
                    null,
                    8,
                    ['icon']
                  ))
                : Object(r['createCommentVNode'])('', !0),
              Object(r['withDirectives'])(
                Object(r['createElementVNode'])(
                  'input',
                  {
                    'onUpdate:modelValue':
                      t[0] ||
                      (t[0] = function (t) {
                        return (e.value = t);
                      }),
                    maxlength: e.maxLength,
                    minlength: e.minLength,
                    placeholder: e.placeholder,
                    type: e.type,
                    class: 'input__wrapper__value',
                  },
                  null,
                  8,
                  o
                ),
                [[r['vModelDynamic'], e.value]]
              ),
              Object(r['createVNode'])(d, {
                class: 'input__wrapper__icon input__wrapper__icon--error',
                icon: 'exclamation-triangle',
              }),
            ]),
            Object(r['createVNode'])(
              r['Transition'],
              {
                name: 'pop',
              },
              {
                default: Object(r['withCtx'])(function () {
                  return [
                    e.showError && e.errors.length > 0
                      ? (Object(r['openBlock'])(),
                        Object(r['createElementBlock'])('span', c, [
                          (Object(r['openBlock'])(!0),
                          Object(r['createElementBlock'])(
                            r['Fragment'],
                            null,
                            Object(r['renderList'])(e.errors, function (e, t) {
                              return (
                                Object(r['openBlock'])(),
                                Object(r['createElementBlock'])(
                                  'span',
                                  {
                                    key: t,
                                    class: 'input__error_value',
                                  },
                                  Object(r['toDisplayString'])(e),
                                  1
                                )
                              );
                            }),
                            128
                          )),
                        ]))
                      : Object(r['createCommentVNode'])('', !0),
                  ];
                }),
                _: 1,
              }
            ),
          ],
          34
        )
      );
    }
    n('a9e3');
    var i = n('d86a'),
      s = Object(r['defineComponent'])({
        emits: ['update:modelValue'],
        props: {
          modelValue: {
            default: '',
          },
          id: {
            type: String,
            required: !0,
          },
          icon: {
            type: String,
            default: void 0,
          },
          minLength: {
            type: Number,
            default: 0,
          },
          maxLength: {
            type: Number,
            default: -1,
          },
          required: {
            type: Boolean,
            default: !1,
          },
          type: {
            type: String,
            default: 'text',
          },
          placeholder: {
            type: String,
            default: '',
          },
        },
        setup: function (e, t) {
          var n = t.emit,
            a = e.id,
            o = e.minLength,
            c = e.maxLength,
            u = e.required,
            s = e.type,
            d = Object(r['toRef'])(e, 'modelValue'),
            l = Object(r['ref'])(!1),
            f = Object(r['computed'])({
              get: function () {
                return d.value;
              },
              set: function (e) {
                n('update:modelValue', e);
              },
            }),
            p = Object(r['computed'])(function () {
              return i['a'].get(a);
            });
          return (
            Object(r['watch'])(f, function () {
              i['a'].clear(a),
                'string' === typeof f.value &&
                  (i['a'].base(a, f.value, o, c, u), 'email' == s && i['a'].email(a, f.value));
            }),
            {
              showError: l,
              value: f,
              errors: p,
            }
          );
        },
      }),
      d = (n('39af'), n('6b0d')),
      l = n.n(d);
    const f = l()(s, [
      ['render', u],
      ['__scopeId', 'data-v-07536052'],
    ]);
    t['a'] = f;
  },
  '465c': function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getStats', function () {
        return o;
      }),
      n.d(t, 'getLinks', function () {
        return c;
      }),
      n.d(t, 'getReferralRewards', function () {
        return u;
      });
    var r = n('bc3a'),
      a = n.n(r),
      o = function () {
        return a.a.get('/stats');
      },
      c = function () {
        return a.a.get('/stats/links');
      },
      u = function () {
        return a.a.get('/stats/referrals');
      };
  },
  '4d91': function (e, t, n) {},
  '555f': function (e, t, n) {
    'use strict';
    var r = n('7a23'),
      a = {
        class: 'loader',
      },
      o = Object(r['createStaticVNode'])(
        '<svg class="loader__image active" fill="currentColor" height="267.1700134277344" viewBox="0 0 407.43 267.17" width="407.42999267578125" xmlns="http://www.w3.org/2000/svg" data-v-a95c9c38><path class="image__cloud" d="M120.15,213s-122,40-117-80c0-2,0-77,104-73,0-1,46-70,125-39,2,1,89-62.62,159,43.69,2,3.31,39,63.31-20,128.31,0,0-52,50-105,32C269.15,228,186.15,319,120.15,213Z" data-v-a95c9c38></path><path class="image__d" d="M75.12,107.54h9.64v51.12H75.12ZM80,149.37H92.24q4.76,0,7.35-2.28a8.13,8.13,0,0,0,2.6-6.47V125.57a8.14,8.14,0,0,0-2.6-6.47q-2.59-2.28-7.35-2.28H80v-9.28H92A25.29,25.29,0,0,1,103,109.68a15.22,15.22,0,0,1,6.87,6.26,19.64,19.64,0,0,1,2.36,9.91v14.49a19.64,19.64,0,0,1-2.27,9.63,15.47,15.47,0,0,1-6.8,6.4A24.58,24.58,0,0,1,92,158.66H80Z" data-v-a95c9c38></path><path class="image__r" d="M128.87,107.5h9.63v51.16h-9.63Zm3.83,21.31h17.79a4.66,4.66,0,0,0,2.6-.74,4.8,4.8,0,0,0,1.74-2.11,8,8,0,0,0,.65-3.16,7.7,7.7,0,0,0-.61-3.17,4.8,4.8,0,0,0-1.74-2.11,4.72,4.72,0,0,0-2.64-.74H132.7V107.5h18.56a14.3,14.3,0,0,1,7.42,1.9,12.86,12.86,0,0,1,5,5.36,19.22,19.22,0,0,1,0,16.07,12.78,12.78,0,0,1-5,5.36,14.23,14.23,0,0,1-7.4,1.9H132.7Zm10.76,7.7,10.3-1.62,13.78,23.77H155.87Z" data-v-a95c9c38></path><path class="image__e" d="M183,107.54h9.64v51.12H183Zm3.48,0h30.76v9.28H186.48Zm0,21.09h26.9v9.28h-26.9Zm0,20.74h30.76v9.29H186.48Z" data-v-a95c9c38></path><path class="image__a" d="M247.86,107.54H254l19.54,51.12H263.15l-12.23-34.91-12.24,34.91H228.31ZM237.7,141.18h26.89v9.28H237.7Z" data-v-a95c9c38></path><path class="image__m" d="M319.22,107.54h12.69v51.12h-8.75V119l.35,2.25L313.73,153h-8.5l-9.78-31,.35-3v39.7h-8.75V107.54h12.69L309.48,142Z" data-v-a95c9c38></path></svg>',
        1
      ),
      c = [o];

    function u(e, t, n, o, u, i) {
      return Object(r['openBlock'])(), Object(r['createElementBlock'])('div', a, c);
    }
    var i = {},
      s = (n('bde4'), n('6b0d')),
      d = n.n(s);
    const l = d()(i, [
      ['render', u],
      ['__scopeId', 'data-v-a95c9c38'],
    ]);
    t['a'] = l;
  },
  5700: function (e, t, n) {
    'use strict';
    var r = n('1344'),
      a = Object(r['a'])();
    t['a'] = a;
  },
  '79f6': function (e, t, n) {
    'use strict';
    n.d(t, 'j', function () {
      return Oe;
    }),
      n.d(t, 'c', function () {
        return je;
      }),
      n.d(t, 'e', function () {
        return we;
      }),
      n.d(t, 'a', function () {
        return a;
      }),
      n.d(t, 'b', function () {
        return o;
      }),
      n.d(t, 'd', function () {
        return z;
      }),
      n.d(t, 'f', function () {
        return c;
      }),
      n.d(t, 'g', function () {
        return Q;
      }),
      n.d(t, 'h', function () {
        return u;
      }),
      n.d(t, 'i', function () {
        return i;
      }),
      n.d(t, 'k', function () {
        return de;
      }),
      n.d(t, 'l', function () {
        return s;
      }),
      n.d(t, 'm', function () {
        return r;
      });
    var r = {};
    n.r(r),
      n.d(r, 'getSelf', function () {
        return g;
      }),
      n.d(r, 'getStaff', function () {
        return k;
      }),
      n.d(r, 'verifyEmail', function () {
        return v;
      }),
      n.d(r, 'sendVerify', function () {
        return O;
      }),
      n.d(r, 'updateHWID', function () {
        return j;
      }),
      n.d(r, 'updateUsername', function () {
        return w;
      }),
      n.d(r, 'deleteAccount', function () {
        return y;
      }),
      n.d(r, 'updatePassword', function () {
        return _;
      }),
      n.d(r, 'getUsers', function () {
        return C;
      }),
      n.d(r, 'setState', function () {
        return x;
      }),
      n.d(r, 'getBan', function () {
        return E;
      }),
      n.d(r, 'banUser', function () {
        return N;
      }),
      n.d(r, 'unbanUser', function () {
        return P;
      }),
      n.d(r, 'createDownload', function () {
        return T;
      }),
      n.d(r, 'getUser', function () {
        return A;
      }),
      n.d(r, 'deleteUser', function () {
        return V;
      }),
      n.d(r, 'updateUser', function () {
        return S;
      }),
      n.d(r, 'setUserPassword', function () {
        return B;
      }),
      n.d(r, 'deleteMessage', function () {
        return L;
      }),
      n.d(r, 'setWithdrawn', function () {
        return R;
      });
    var a = {};
    n.r(a),
      n.d(a, 'login', function () {
        return I;
      }),
      n.d(a, 'register', function () {
        return D;
      }),
      n.d(a, 'forgotPassword', function () {
        return M;
      }),
      n.d(a, 'resetPassword', function () {
        return U;
      }),
      n.d(a, 'logout', function () {
        return H;
      });
    var o = {};
    n.r(o),
      n.d(o, 'getChangelogs', function () {
        return F;
      }),
      n.d(o, 'deleteLog', function () {
        return Z;
      }),
      n.d(o, 'createChangelog', function () {
        return q;
      });
    var c = {};
    n.r(c),
      n.d(c, 'getGuides', function () {
        return G;
      }),
      n.d(c, 'getGuide', function () {
        return K;
      }),
      n.d(c, 'deleteGuide', function () {
        return Y;
      }),
      n.d(c, 'deleteImage', function () {
        return W;
      }),
      n.d(c, 'createGuide', function () {
        return J;
      }),
      n.d(c, 'uploadImage', function () {
        return $;
      });
    var u = {};
    n.r(u),
      n.d(u, 'getGlobal', function () {
        return X;
      }),
      n.d(u, 'createGlobal', function () {
        return ee;
      }),
      n.d(u, 'createMessage', function () {
        return te;
      }),
      n.d(u, 'deleteMessage', function () {
        return ne;
      });
    var i = {};
    n.r(i),
      n.d(i, 'createCharge', function () {
        return re;
      }),
      n.d(i, 'createSubscription', function () {
        return ae;
      }),
      n.d(i, 'updateOrder', function () {
        return oe;
      }),
      n.d(i, 'getDiscount', function () {
        return ce;
      }),
      n.d(i, 'getPaymentDetails', function () {
        return ue;
      }),
      n.d(i, 'createOrder', function () {
        return ie;
      }),
      n.d(i, 'getPayments', function () {
        return se;
      });
    var s = {};
    n.r(s),
      n.d(s, 'getTicket', function () {
        return le;
      }),
      n.d(s, 'setTicketState', function () {
        return fe;
      }),
      n.d(s, 'replyTicket', function () {
        return pe;
      }),
      n.d(s, 'getReplies', function () {
        return me;
      }),
      n.d(s, 'getTickets', function () {
        return he;
      }),
      n.d(s, 'createTicket', function () {
        return be;
      }),
      n.d(s, 'deleteTicket', function () {
        return ge;
      }),
      n.d(s, 'deleteReply', function () {
        return ke;
      }),
      n.d(s, 'assignTicket', function () {
        return ve;
      });
    var d = n('1da1'),
      l = (n('96cf'), n('d3b7'), n('bc3a')),
      f = n.n(l),
      p = n('85ee'),
      m = n('0613'),
      h = n('afbc'),
      b = n('5530'),
      g = function () {
        return f.a.get('users/self');
      },
      k = function () {
        return f.a.get('users/staff');
      },
      v = function (e, t, n, r) {
        return f.a.post(
          '/users/email/verify',
          {
            id: e,
            hash: t,
          },
          {
            params: {
              signature: n,
              expires: r,
            },
          }
        );
      },
      O = function (e) {
        return f.a.post('/users/email/send-verify', {
          email: e,
        });
      },
      j = function (e) {
        return f.a.post('/users/update/hwid', {
          hwid: e,
        });
      },
      w = function (e) {
        return f.a.post('/users/update/username', {
          username: e,
        });
      },
      y = function (e) {
        return f.a.delete('/users/self', {
          data: {
            password: e,
          },
        });
      },
      _ = function (e, t) {
        return f.a.post('/users/self/pw', {
          old_password: e,
          new_password: t,
        });
      },
      C = function (e, t, n) {
        return f.a.get('/users', {
          params: {
            query: e,
            limit: t,
            page: n,
          },
        });
      },
      x = function (e) {
        return f.a.post('/users/self/state', {
          state: e,
        });
      },
      E = function () {
        return f.a.get('/users/self/ban');
      },
      N = function (e, t) {
        return f.a.post('/users/'.concat(e, '/ban'), {
          reason: t,
        });
      },
      P = function (e) {
        return f.a.post('/users/'.concat(e, '/unban'));
      },
      T = function (e, t) {
        return f.a.get('/download', {
          params: {
            name: e,
            dev: t,
          },
          responseType: 'blob',
        });
      },
      A = function (e) {
        return f.a.get('/users/'.concat(e));
      },
      V = function (e) {
        return f.a.delete('/users/'.concat(e));
      },
      S = function (e, t) {
        return f.a.put('/users/'.concat(e), Object(b['a'])({}, t));
      },
      B = function (e, t) {
        return f.a.put('/users/'.concat(e, '/pw'), {
          password: t,
        });
      },
      L = function (e) {
        return f.a.delete('messages/'.concat(e));
      },
      R = function (e) {
        return f.a.post('/users/'.concat(e, '/withdraw'));
      },
      I = function (e, t, n) {
        return f.a.post('auth/login', {
          username: e,
          password: t,
          captcha: n,
        });
      },
      D = function (e, t, n, r) {
        return f.a.post('auth/register', {
          username: e,
          email: t,
          password: n,
          captcha: r,
        });
      },
      M = function (e, t) {
        return f.a.post('auth/forgot-password', {
          email: e,
          captcha: t,
        });
      },
      U = function (e, t, n) {
        return f.a.post('auth/reset-password', {
          email: e,
          token: t,
          password: n,
        });
      },
      H = function () {
        return f.a.post('auth/logout');
      },
      F = function () {
        return f.a.get('changelog');
      },
      Z = function (e) {
        return f.a.delete('changelog/'.concat(e));
      },
      q = function (e, t, n) {
        return f.a.post('changelog/create', {
          version: e,
          beta: t,
          features: n,
        });
      },
      z = n('d89f'),
      G = function (e) {
        return f.a.get('guides', {
          params: {
            filter: e,
          },
        });
      },
      K = function (e) {
        return f.a.get('guides/'.concat(e));
      },
      Y = function (e) {
        return f.a.delete('guides/'.concat(e));
      },
      W = function (e) {
        return f.a.delete('guides/upload', {
          data: {
            path: e,
          },
        });
      },
      J = function (e, t, n) {
        return f.a.post('guides/create', {
          title: e,
          type: t,
          body: n,
        });
      },
      $ = function (e) {
        var t = new FormData();
        return (
          t.append('image', e),
          f.a.post('guides/upload', t, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
        );
      },
      Q = n('f688'),
      X = function () {
        return f.a.get('/messages/global');
      },
      ee = function (e) {
        return f.a.post('/messages/global', {
          body: e,
        });
      },
      te = function (e, t) {
        return f.a.post('/messages/'.concat(e), {
          body: t,
        });
      },
      ne = function (e) {
        return f.a.delete('/messages/'.concat(e));
      },
      re = function (e) {
        return f.a.post('/payment/create/charge', {
          referral: e,
        });
      },
      ae = function (e) {
        return f.a.post('/payment/create/subscription', {
          referral: e,
        });
      },
      oe = function () {
        return f.a.post('/payment/update');
      },
      ce = function (e) {
        return f.a.get('/payment/discount/'.concat(e));
      },
      ue = function () {
        return f.a.get('/payment/details');
      },
      ie = function (e, t, n, r) {
        return f.a.post('/payment/create/order', {
          plan: e,
          months: t,
          discount: n,
          referral: r,
        });
      },
      se = function (e, t, n) {
        return f.a.get('/payment/list', {
          params: {
            query: e,
            limit: t,
            page: n,
          },
        });
      },
      de = n('465c'),
      le =
        (n('99af'),
        function (e) {
          return f.a.get('tickets/'.concat(e));
        }),
      fe = function (e, t) {
        return f.a.put('tickets/'.concat(e, '/state'), {
          state: t,
        });
      },
      pe = function (e, t) {
        return f.a.post('tickets/'.concat(e, '/reply'), {
          body: t,
        });
      },
      me = function (e) {
        return f.a.get('tickets/'.concat(e, '/replies'));
      },
      he = function (e, t) {
        return f.a.get('tickets', {
          params: {
            closed: e,
            filter: t,
          },
        });
      },
      be = function (e, t, n) {
        return f.a.post('tickets/create', {
          title: e,
          body: t,
          category: n,
        });
      },
      ge = function (e) {
        return f.a.delete('tickets/'.concat(e));
      },
      ke = function (e) {
        return f.a.delete('tickets/reply/'.concat(e));
      },
      ve = function (e, t) {
        return f.a.put('tickets/'.concat(e, '/assign/').concat(t));
      };

    function Oe(e) {
      localStorage.setItem('access_token', e),
        (f.a.defaults.headers.common['Authorization'] = 'Bearer ' + e);
    }

    function je() {
      localStorage.removeItem('access_token'),
        (f.a.defaults.headers.common['Authorization'] = 'Bearer'),
        _e();
    }

    function we() {
      return ye.apply(this, arguments);
    }

    function ye() {
      return (
        (ye = Object(d['a'])(
          regeneratorRuntime.mark(function e() {
            var t, n, r;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (-1 === m['a'].state.user.id) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return', m['a'].state.user);
                    case 2:
                      if (((t = localStorage.getItem('access_token')), null === t)) {
                        e.next = 17;
                        break;
                      }
                      return (
                        (f.a.defaults.headers.common['Authorization'] = 'Bearer ' + t),
                        (e.prev = 5),
                        (e.next = 8),
                        g()
                      );
                    case 8:
                      return (
                        (n = e.sent),
                        (r = n.data),
                        m['a'].commit('setUser', r),
                        e.abrupt('return', r)
                      );
                    case 14:
                      (e.prev = 14),
                        (e.t0 = e['catch'](5)),
                        console.error('Failed to retrieve user', e.t0);
                    case 17:
                      return e.abrupt('return', p['e']);
                    case 18:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[5, 14]]
            );
          })
        )),
        ye.apply(this, arguments)
      );
    }
    (f.a.defaults.baseURL = p['a']),
      (f.a.defaults.responseType = 'json'),
      (f.a.defaults.headers.common = {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      f.a.interceptors.response.use(
        function (e) {
          return e;
        },
        function (e) {
          var t,
            n,
            r = e.response;
          if (!r) return e;
          var a = r.status;
          if (401 == a) {
            je();
            var o = h['a'].currentRoute.value;
            if ('auth' in o.meta)
              return (
                h['a']
                  .push({
                    name: 'login',
                  })
                  .then()
                  .catch(),
                Promise.reject(e)
              );
          }
          var c = r.data;
          return (
            (m['a'].state.error.message = null !== (t = c.message) && void 0 !== t ? t : null),
            (m['a'].state.error.errors = null !== (n = c.errors) && void 0 !== n ? n : {}),
            Promise.reject(c)
          );
        }
      );
    var _e = function () {
      return (m['a'].state.user = p['e']);
    };
  },
  '7c11': function (e, t, n) {},
  '85ee': function (e, t, n) {
    'use strict';
    var r;
    n.d(t, 'j', function () {
      return a;
    }),
      n.d(t, 'g', function () {
        return o;
      }),
      n.d(t, 'b', function () {
        return c;
      }),
      n.d(t, 'a', function () {
        return u;
      }),
      n.d(t, 'd', function () {
        return i;
      }),
      n.d(t, 'e', function () {
        return s;
      }),
      n.d(t, 'c', function () {
        return d;
      }),
      n.d(t, 'f', function () {
        return l;
      }),
      n.d(t, 'k', function () {
        return f;
      }),
      n.d(t, 'i', function () {
        return p;
      }),
      n.d(t, 'h', function () {
        return m;
      });
    var a = '6Ld4V7wZAAAAAPe23DAB0Kpbsr4err_29TNKYHfu',
      o = null !== (r = 'production') && void 0 !== r ? r : 'production',
      c = 'development' === o ? 'http://localhost/' : '/',
      u = c + 'api/',
      i = {
        id: -1,
        state: -1,
        created_at: '',
        owner: {
          id: -1,
          username: '',
          access: -2,
        },
        assigned: {
          id: -1,
          username: '',
          access: -2,
        },
        title: '',
        category: -1,
        body: '',
      },
      s = {
        id: 1,
        username: 'vroom',
        email: '',
        email_verified_at: null,
        hwid: '',
        started: !1,
        last_hwid_change: null,
        access: -2,
        owned: true,
        department: -1,
        owned_expires_at: null,
        created_at: null,
        updated_at: null,
        ips: [],
        message: null,
        referral: null,
      },
      d = {
        id: -1,
        title: '',
        body: [],
        type: '',
      };
    'development' === o
      ? console.log(
          '%c Dream is running in development mode',
          'background: black; color: white; padding: 1em'
        )
      : (console.log('%cWarning', 'padding: .25em; background: #f13a3a; font-size: 2em'),
        console.log(
          '%cDream is a closed source application attempting to reverse engineer,\ncrack, pirate or any other attempts at modification are against our\nTOS and may result in the removal of your product',
          'background: black; padding: 1em'
        )),
      console.log('Copyright © 2019 - ' + new Date().getFullYear() + ' Dream All Right Reserved ');
    var l = [
        'Technical Support',
        'Sales',
        'Detections',
        'Suggestions',
        'Media Application',
        'Other',
      ],
      f = ['Open', 'Closed', 'Locked'],
      p = ['Default', 'Media', 'Helper', 'Admin', 'Super-Admin'],
      m = {
        referral_incr: {
          title: 'Update Referral Increment',
          text: 'Please enter the new referral price increment',
          env: 'REFERRAL_PRICE_INCR',
        },
        referral_min: {
          title: 'Update Referral Minimum',
          text: 'Please enter the new minimum referral withdraw amount',
          env: 'REFERRAL_PRICE_MIN',
        },
        discord: {
          title: 'Update Discord',
          text: 'Please enter the new discord link below',
          env: 'DISCORD_LINK',
        },
        version: {
          title: 'Set Version',
          text: 'Please enter the new version number below',
          env: 'APP_VERSION',
        },
        lifetime: {
          title: 'Set Lifetime Price',
          text: 'Please enter the new lifetime price below DONT INCLUDE dollar sign format as such: 35.00',
          env: 'PRICE_LIFETIME',
        },
        monthly: {
          title: 'Set Monthly Price',
          text: 'Please enter the new monthly price below DONT INCLUDE dollar sign format as such: 9.00',
          env: 'PRICE_MONTHLY_BASE',
        },
        monthly_incr: {
          title: 'Set Monthly Price Increment',
          text: 'Please enter the new monthly price increment below DONT INCLUDE dollar sign format as such: 5.00',
          env: 'PRICE_MONTHLY_BULK_INCR',
        },
      };
  },
  '8de0': function (e, t, n) {
    'use strict';
    n('7c11');
  },
  aedf: function (e, t, n) {},
  afbc: function (e, t, n) {
    'use strict';
    var r = n('1da1'),
      a = (n('96cf'), n('d3b7'), n('3ca3'), n('ddb0'), n('b0c0'), n('6c02')),
      o = n('7a23'),
      c = function (e) {
        return Object(o['pushScopeId'])('data-v-7c97ea20'), (e = e()), Object(o['popScopeId'])(), e;
      },
      u = {
        class: 'error',
      },
      i = c(function () {
        return Object(o['createElementVNode'])(
          'h1',
          {
            class: 'error__code',
          },
          '404',
          -1
        );
      }),
      s = c(function () {
        return Object(o['createElementVNode'])(
          'h2',
          {
            class: 'error__title',
          },
          'Page not found',
          -1
        );
      }),
      d = c(function () {
        return Object(o['createElementVNode'])(
          'p',
          {
            class: 'error__text',
          },
          'The requested page could not be found.',
          -1
        );
      }),
      l = Object(o['createTextVNode'])('Return Home'),
      f = {
        class: 'ref mt',
      },
      p = c(function () {
        return Object(o['createElementVNode'])('b', null, 'Dream', -1);
      });

    function m(e, t, n, r, a, c) {
      var m = Object(o['resolveComponent'])('router-link');
      return (
        Object(o['openBlock'])(),
        Object(o['createElementBlock'])('div', u, [
          i,
          s,
          d,
          Object(o['createVNode'])(
            m,
            {
              class: 'button button--warning error__button',
              to: {
                name: 'home',
              },
            },
            {
              default: Object(o['withCtx'])(function () {
                return [l];
              }),
              _: 1,
            }
          ),
          Object(o['createElementVNode'])('p', f, [
            p,
            Object(o['createTextVNode'])(
              ' © 2019 - ' + Object(o['toDisplayString'])(new Date().getFullYear()),
              1
            ),
          ]),
        ])
      );
    }
    var h = {},
      b = (n('060c'), n('6b0d')),
      g = n.n(b);
    const k = g()(h, [
      ['render', m],
      ['__scopeId', 'data-v-7c97ea20'],
    ]);
    var v = k,
      O = n('79f6'),
      j = n('d86a'),
      w = n('eef9'),
      y = n('0613'),
      _ = [
        {
          path: '/',
          name: 'home',
          component: function () {
            return n.e('chunk-22405cfc').then(n.bind(null, 'f4a9'));
          },
        },
        {
          path: '/login',
          name: 'login',
          component: function () {
            return n.e('chunk-cf066fea').then(n.bind(null, 'a55b'));
          },
        },
        {
          path: '/register',
          name: 'register',
          component: function () {
            return n.e('chunk-518df970').then(n.bind(null, '73cf'));
          },
        },
        {
          path: '/forgot-password',
          name: 'forgot-password',
          component: function () {
            return n.e('chunk-2d22c101').then(n.bind(null, 'f243'));
          },
        },
        {
          path: '/migrate',
          name: 'migrate',
          component: function () {
            return n.e('chunk-2d0e487d').then(n.bind(null, '912a'));
          },
          meta: {
            auth: !0,
          },
        },
        {
          path: '/reset-password/:token',
          name: 'reset-password',
          component: function () {
            return n.e('chunk-90422d1e').then(n.bind(null, '0813'));
          },
        },
        {
          path: '/banned',
          name: 'banned',
          component: function () {
            return n.e('chunk-5afe7171').then(n.bind(null, '166c'));
          },
        },
        {
          name: 'referral.code',
          path: '/referral/:code',
          component: function () {},
          meta: {
            auth: !0,
          },
          beforeEnter: function (e, t, n) {
            var r = e.params.code;
            return 6 != r.length
              ? (Object(w['g'])('error', 'That is not a valid referral code'),
                n({
                  name: 'dashboard.home',
                }))
              : ((y['a'].state.referral = r),
                Object(w['g'])('info', 'Referral Code Applied'),
                n({
                  name: 'dashboard.purchase',
                }));
          },
        },
        {
          path: '/email/verify/:id/:hash',
          name: 'verify-email',
          component: function () {
            return n.e('chunk-2d21de35').then(n.bind(null, 'd2e6'));
          },
          meta: {
            auth: !0,
            skipMigrate: !0,
          },
        },
        {
          path: '/popout',
          name: 'modules-popout',
          component: function () {
            return Promise.all([n.e('chunk-4e17a028'), n.e('chunk-d7161cfc')]).then(
              n.bind(null, 'e3c9')
            );
          },
          meta: {
            //auth: !0,
            //owned: !0
          },
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          redirect: '/dashboard/home',
          component: function () {
            return n.e('chunk-430c497b').then(n.bind(null, '7277'));
          },
          meta: {
            //auth: !0
          },
          children: [
            {
              name: 'dashboard.home',
              path: 'home',
              component: function () {
                return Promise.all([n.e('chunk-695025fe'), n.e('chunk-3eef3288')]).then(
                  n.bind(null, '197a')
                );
              },
            },
            {
              name: 'dashboard.modules',
              path: 'modules',
              component: function () {
                return Promise.all([n.e('chunk-4e17a028'), n.e('chunk-032c9c15')]).then(
                  n.bind(null, 'afe5')
                );
              },
              meta: {
                owned: !0,
              },
            },
            {
              name: 'dashboard.settings',
              path: 'settings',
              component: function () {
                return Promise.all([n.e('chunk-695025fe'), n.e('chunk-68855d7b')]).then(
                  n.bind(null, '2edc')
                );
              },
            },
            {
              name: 'dashboard.terms',
              path: 'terms',
              component: function () {
                return n.e('chunk-0f4987b7').then(n.bind(null, '91b9'));
              },
            },
            {
              name: 'dashboard.tickets',
              path: 'tickets',
              component: function () {
                return Promise.all([
                  n.e('chunk-695025fe'),
                  n.e('group-admin~group-tickets'),
                  n.e('group-tickets'),
                ]).then(n.bind(null, 'f73e'));
              },
            },
            {
              name: 'dashboard.tickets.create',
              path: 'tickets/create',
              component: function () {
                return Promise.all([
                  n.e('chunk-695025fe'),
                  n.e('group-admin~group-tickets'),
                  n.e('group-tickets'),
                ]).then(n.bind(null, 'ae38'));
              },
            },
            {
              name: 'dashboard.tickets.view',
              path: 'tickets/:ticket',
              component: function () {
                return Promise.all([
                  n.e('chunk-695025fe'),
                  n.e('group-admin~group-tickets'),
                  n.e('group-tickets'),
                ]).then(n.bind(null, '5ebe'));
              },
              beforeEnter: function (e, t, n) {
                return j['a'].isInteger(e.params.ticket)
                  ? n()
                  : (Object(w['g'])('error', 'That is not a valid ticket'),
                    n({
                      name: 'dashboard.tickets',
                    }));
              },
            },
            {
              name: 'dashboard.purchase',
              path: 'purchase',
              component: function () {
                return n.e('chunk-fe2ea0e2').then(n.bind(null, 'e3ae'));
              },
              meta: {
                owned: true,
              },
            },
            {
              name: 'dashboard.download',
              path: 'download',
              component: function () {
                return n.e('chunk-caec2872').then(n.bind(null, '795d'));
              },
              meta: {
                owned: true,
              },
            },
            {
              name: 'dashboard.configs',
              path: 'configs',
              component: function () {
                return n.e('chunk-42a335a2').then(n.bind(null, 'bf25'));
              },
              meta: {
                owned: !0,
              },
            },
            {
              name: 'dashboard.guides',
              path: 'guides',
              component: function () {
                return n.e('chunk-7a275716').then(n.bind(null, 'e027'));
              },
            },
            {
              name: 'dashboard.referrals',
              path: 'referral',
              component: function () {
                return n.e('chunk-17427f0c').then(n.bind(null, '1fb7'));
              },
              meta: {
                minAccess: 1,
                maxAccess: 1,
              },
            },
            {
              name: 'dashboard.guides.create',
              path: 'guides/create',
              component: function () {
                return Promise.all([
                  n.e('chunk-695025fe'),
                  n.e('group-admin~group-tickets'),
                  n.e('group-admin'),
                ]).then(n.bind(null, 'f6a1'));
              },
              meta: {
                minAccess: 3,
              },
            },
            {
              name: 'dashboard.guides.view',
              path: 'guides/:guide',
              component: function () {
                return n.e('chunk-a69d7bba').then(n.bind(null, '0f53'));
              },
              beforeEnter: function (e, t, n) {
                return j['a'].isInteger(e.params.guide)
                  ? n()
                  : (Object(w['g'])('error', 'That is not a valid guide'),
                    n({
                      name: 'dashboard.guides',
                    }));
              },
            },
            {
              name: 'dashboard.configs.publish',
              path: 'configs/publish',
              component: function () {
                return n.e('chunk-bc0e593c').then(n.bind(null, '2bde'));
              },
              meta: {
                owned: !0,
              },
            },
            {
              name: 'dashboard.changelog.create',
              path: 'changelog/create',
              component: function () {
                return n.e('chunk-af78afae').then(n.bind(null, '891c'));
              },
              meta: {
                minAccess: 2,
              },
            },
            {
              name: 'dashboard.manage',
              path: 'manage',
              component: function () {
                return Promise.all([
                  n.e('chunk-695025fe'),
                  n.e('group-admin~group-tickets'),
                  n.e('group-admin'),
                ]).then(n.bind(null, 'f33a'));
              },
              meta: {
                minAccess: 2,
              },
            },
            {
              name: 'dashboard.manage.users',
              path: 'manage/users',
              component: function () {
                return Promise.all([
                  n.e('chunk-695025fe'),
                  n.e('group-admin~group-tickets'),
                  n.e('group-admin'),
                ]).then(n.bind(null, '9207'));
              },
              meta: {
                minAccess: 2,
              },
            },
            {
              name: 'dashboard.manage.users.view',
              path: 'manage/users/:user',
              component: function () {
                return Promise.all([
                  n.e('chunk-695025fe'),
                  n.e('group-admin~group-tickets'),
                  n.e('group-admin'),
                ]).then(n.bind(null, 'fc0f'));
              },
              meta: {
                minAccess: 2,
              },
              beforeEnter: function (e, t, n) {
                return 'user' in e.params && j['a'].isInteger(e.params.user)
                  ? n()
                  : (Object(w['g'])('error', 'That is not a valid user'),
                    n({
                      name: 'dashboard.manage.users',
                    }));
              },
            },
            {
              name: 'dashboard.manage.payments',
              path: 'manage/payments',
              component: function () {
                return Promise.all([
                  n.e('chunk-695025fe'),
                  n.e('group-admin~group-tickets'),
                  n.e('group-admin'),
                ]).then(n.bind(null, '5314'));
              },
              meta: {
                minAccess: 2,
              },
            },
            {
              name: 'dashboard.manage.vars',
              path: 'manage/vars',
              component: function () {
                return Promise.all([
                  n.e('chunk-695025fe'),
                  n.e('group-admin~group-tickets'),
                  n.e('group-admin'),
                ]).then(n.bind(null, '3979'));
              },
              meta: {
                minAccess: 2,
              },
            },
            {
              name: 'dashboard.manage.discounts',
              path: 'manage/discounts',
              component: function () {
                return Promise.all([
                  n.e('chunk-695025fe'),
                  n.e('group-admin~group-tickets'),
                  n.e('group-admin'),
                ]).then(n.bind(null, '502e'));
              },
              meta: {
                minAccess: 2,
              },
            },
          ],
        },
        {
          path: '/:catchAll(.*)*',
          name: 'Not Found',
          component: v,
        },
      ],
      C = Object(a['a'])({
        history: Object(a['b'])('/'),
        routes: _,
      });
    C.beforeEach(
      (function () {
        var e = Object(r['a'])(
          regeneratorRuntime.mark(function e(t, n, r) {
            var a;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Object(O['e'])();
                  case 2:
                    if (((a = e.sent), -1 === a.id || -1 !== a.access || 'banned' === t.name)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt(
                      'return',
                      r({
                        name: 'banned',
                      })
                    );
                  case 5:
                    if ('auth' in t.meta) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt('return', r());
                  case 7:
                    if (-1 != a.id) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt(
                      'return',
                      r({
                        name: 'login',
                      })
                    );
                  case 9:
                    if (!('minAccess' in t.meta && t.meta['minAccess'] > a.access)) {
                      e.next = 11;
                      break;
                    }
                    return e.abrupt(
                      'return',
                      r({
                        name: 'dashboard.home',
                      })
                    );
                  case 11:
                    if (!('maxAccess' in t.meta && t.meta['maxAccess'] < a.access)) {
                      e.next = 13;
                      break;
                    }
                    return e.abrupt(
                      'return',
                      r({
                        name: 'dashboard.home',
                      })
                    );
                  case 13:
                    if (!('noOwned' in t.meta) || !a.owned) {
                      e.next = 15;
                      break;
                    }
                    return e.abrupt(
                      'return',
                      r({
                        name: 'dashboard.home',
                      })
                    );
                  case 15:
                    if (!('owned' in t.meta && !a.owned && a.access < 2)) {
                      e.next = 17;
                      break;
                    }
                    return e.abrupt(
                      'return',
                      r({
                        name: 'dashboard.home',
                      })
                    );
                  case 17:
                    if (!('skipMigrate' in t.meta) && 'migrate' !== t.name) {
                      e.next = 19;
                      break;
                    }
                    return e.abrupt('return', r());
                  case 19:
                    if (null !== a.email_verified_at) {
                      e.next = 21;
                      break;
                    }
                    return e.abrupt(
                      'return',
                      r({
                        name: 'migrate',
                      })
                    );
                  case 21:
                    return e.abrupt('return', r());
                  case 22:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n, r) {
          return e.apply(this, arguments);
        };
      })()
    ),
      C.afterEach(w['c']);
    t['a'] = C;
  },
  b578: function (e, t, n) {},
  b751: function (e, t, n) {},
  bde4: function (e, t, n) {
    'use strict';
    n('b578');
  },
  cd49: function (e, t, n) {
    'use strict';
    n.r(t);
    n('e260'), n('e6cf'), n('cca6'), n('a79d');
    var r = n('7a23');

    function a(e, t, n, a, o, c) {
      var u = Object(r['resolveComponent'])('router-view'),
        i = Object(r['resolveComponent'])('GlobalLoader'),
        s = Object(r['resolveComponent'])('ConfirmDialog'),
        d = Object(r['resolveComponent'])('Toaster');
      return (
        Object(r['openBlock'])(),
        Object(r['createElementBlock'])(
          r['Fragment'],
          null,
          [
            Object(r['createVNode'])(u),
            Object(r['createVNode'])(i),
            Object(r['createVNode'])(s),
            Object(r['createVNode'])(d),
          ],
          64
        )
      );
    }
    n('b751');
    var o = {
      key: 0,
      class: 'fullscreen-wrapper fullscreen-loader',
    };

    function c(e, t, n, a, c, u) {
      var i = Object(r['resolveComponent'])('Loader');
      return e.loading
        ? (Object(r['openBlock'])(),
          Object(r['createElementBlock'])('div', o, [Object(r['createVNode'])(i)]))
        : Object(r['createCommentVNode'])('', !0);
    }
    var u = n('555f'),
      i = n('5700'),
      s = Object(r['defineComponent'])({
        components: {
          Loader: u['a'],
        },
        setup: function () {
          var e = Object(r['ref'])(!1);
          return (
            i['a'].on('load:start', function () {
              return (e.value = !0);
            }),
            i['a'].on('load:done', function () {
              return (e.value = !1);
            }),
            {
              loading: e,
            }
          );
        },
      }),
      d = n('6b0d'),
      l = n.n(d);
    const f = l()(s, [['render', c]]);
    var p = f,
      m = {
        key: 0,
        class: 'fullscreen-wrapper dialog-wrapper',
      },
      h = {
        class: 'dialog',
      },
      b = {
        class: 'dialog__title',
      },
      g = {
        class: 'dialog__text',
      },
      k = {
        class: 'dialog__buttons',
      };

    function v(e, t, n, a, o, c) {
      var u = Object(r['resolveComponent'])('TextInput');
      return (
        Object(r['openBlock'])(),
        Object(r['createBlock'])(
          r['Transition'],
          {
            name: 'dialog',
          },
          {
            default: Object(r['withCtx'])(function () {
              return [
                e.visible
                  ? (Object(r['openBlock'])(),
                    Object(r['createElementBlock'])('div', m, [
                      Object(r['createElementVNode'])('div', h, [
                        Object(r['createElementVNode'])(
                          'h1',
                          b,
                          Object(r['toDisplayString'])(e.title),
                          1
                        ),
                        Object(r['createElementVNode'])(
                          'p',
                          g,
                          Object(r['toDisplayString'])(e.text),
                          1
                        ),
                        e.takeInput
                          ? (Object(r['openBlock'])(),
                            Object(r['createBlock'])(
                              u,
                              {
                                key: 0,
                                id: 'input',
                                modelValue: e.input,
                                'onUpdate:modelValue':
                                  t[0] ||
                                  (t[0] = function (t) {
                                    return (e.input = t);
                                  }),
                                class: 'mb',
                                icon: 'sticky-note',
                                placeholder: 'Value',
                                required: '',
                                type: 'text',
                              },
                              null,
                              8,
                              ['modelValue']
                            ))
                          : Object(r['createCommentVNode'])('', !0),
                        Object(r['createElementVNode'])('div', k, [
                          Object(r['createElementVNode'])(
                            'button',
                            {
                              class: 'dialog__button button',
                              onClick:
                                t[1] ||
                                (t[1] = function (t) {
                                  return e.submit(!0);
                                }),
                            },
                            ' Confirm '
                          ),
                          Object(r['createElementVNode'])(
                            'button',
                            {
                              class: 'dialog__button button',
                              onClick:
                                t[2] ||
                                (t[2] = function (t) {
                                  return e.submit(!1);
                                }),
                            },
                            ' Cancel '
                          ),
                        ]),
                      ]),
                    ]))
                  : Object(r['createCommentVNode'])('', !0),
              ];
            }),
            _: 1,
          }
        )
      );
    }
    var O = n('446e'),
      j =
        (n('4d91'),
        Object(r['defineComponent'])({
          components: {
            TextInput: O['a'],
          },
          setup: function () {
            var e = Object(r['ref'])(!1),
              t = Object(r['ref'])(''),
              n = Object(r['ref'])(''),
              a = Object(r['ref'])(function () {
                return !1;
              }),
              o = Object(r['ref'])(''),
              c = Object(r['ref'])(!1);
            return (
              i['a'].on('dialog:show', function (r) {
                (e.value = !0),
                  (t.value = r.title),
                  (n.value = r.text),
                  (a.value = r.callback),
                  (c.value = void 0 !== r.input),
                  (o.value = '');
              }),
              {
                visible: e,
                title: t,
                text: n,
                input: o,
                takeInput: c,
                submit: function (t) {
                  (e.value = !1), c && t ? a.value(t, o.value) : a.value(t);
                },
              }
            );
          },
        }));
    const w = l()(j, [['render', v]]);
    var y = w,
      _ = {
        class: 'toasts',
      };

    function C(e, t, n, a, o, c) {
      var u = Object(r['resolveComponent'])('Toast');
      return (
        Object(r['openBlock'])(),
        Object(r['createElementBlock'])('div', _, [
          Object(r['createVNode'])(
            r['TransitionGroup'],
            {
              name: 'slide',
            },
            {
              default: Object(r['withCtx'])(function () {
                return [
                  (Object(r['openBlock'])(!0),
                  Object(r['createElementBlock'])(
                    r['Fragment'],
                    null,
                    Object(r['renderList'])(e.toasts, function (t, n, a) {
                      return (
                        Object(r['openBlock'])(),
                        Object(r['createBlock'])(
                          u,
                          {
                            key: n,
                            message: t.text,
                            type: t.type,
                            onFinished: function (t) {
                              return e.removeToast(n);
                            },
                          },
                          null,
                          8,
                          ['message', 'type', 'onFinished']
                        )
                      );
                    }),
                    128
                  )),
                ];
              }),
              _: 1,
            }
          ),
        ])
      );
    }

    function x(e, t, n, a, o, c) {
      return (
        Object(r['openBlock'])(),
        Object(r['createElementBlock'])(
          'div',
          {
            class: Object(r['normalizeClass'])(['toast--' + e.type, 'toast']),
          },
          Object(r['toDisplayString'])(e.message),
          3
        )
      );
    }
    var E = Object(r['defineComponent'])({
      emits: ['finished'],
      props: {
        message: {
          type: String,
          required: !0,
        },
        type: {
          type: String,
          default: 'info',
        },
      },
      setup: function (e, t) {
        var n = e.message,
          a = e.type,
          o = t.emit;
        return (
          Object(r['onMounted'])(function () {
            return setTimeout(function () {
              return o('finished');
            }, 3e3);
          }),
          {
            message: n,
            type: a,
          }
        );
      },
    });
    n('2c45');
    const N = l()(E, [
      ['render', x],
      ['__scopeId', 'data-v-e0e0086e'],
    ]);
    var P = N,
      T = Object(r['defineComponent'])({
        components: {
          Toast: P,
        },
        setup: function () {
          var e = Object(r['ref'])({}),
            t = 0;

          function n(t) {
            delete e.value[t];
          }
          return (
            i['a'].on('toast', function (n) {
              return (e.value[++t] = n);
            }),
            {
              toasts: e,
              removeToast: n,
            }
          );
        },
      });
    n('8de0');
    const A = l()(T, [
      ['render', C],
      ['__scopeId', 'data-v-2f863d89'],
    ]);
    var V = A,
      S = {
        components: {
          Toaster: V,
          ConfirmDialog: y,
          GlobalLoader: p,
        },
      };
    const B = l()(S, [['render', a]]);
    var L = B,
      R = n('9483');
    Object(R['a'])(''.concat('/', 'service-worker.js'), {
      ready: function () {
        console.log(
          'App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB'
        );
      },
      registered: function () {
        console.log('Service worker has been registered.');
      },
      cached: function () {
        console.log('Content has been cached for offline use.');
      },
      updatefound: function () {
        console.log('New content is downloading.');
      },
      updated: function () {
        console.log('New content is available; please refresh.');
      },
      offline: function () {
        console.log('No internet connection found. App is running in offline mode.');
      },
      error: function (e) {
        console.error('Error during service worker registration:', e);
      },
    });
    var I = n('760d'),
      D = n('afbc'),
      M = n('0613'),
      U = n('ad3d'),
      H = n('c074'),
      F = n('ecee'),
      Z = n('f2d1');
    F['c'].add(
      H['Y'],
      H['b'],
      H['W'],
      H['Z'],
      Z['d'],
      Z['c'],
      Z['a'],
      H['i'],
      H['j'],
      H['g'],
      H['ab'],
      H['t'],
      H['M'],
      H['u'],
      H['h'],
      H['D'],
      H['E'],
      H['X'],
      H['db'],
      H['J'],
      H['P'],
      H['S'],
      H['H'],
      H['w'],
      H['I'],
      H['c'],
      H['V'],
      H['A'],
      H['F'],
      H['K'],
      H['d'],
      H['eb'],
      H['z'],
      H['fb'],
      H['l'],
      H['R'],
      H['f'],
      H['r'],
      H['m'],
      H['N'],
      H['p'],
      H['v'],
      H['q'],
      H['n'],
      H['Q'],
      H['bb'],
      H['s'],
      H['L'],
      H['T'],
      H['k'],
      H['y'],
      H['x'],
      H['U'],
      H['O'],
      Z['b'],
      H['e'],
      H['B'],
      H['a'],
      H['hb'],
      H['o'],
      H['gb'],
      H['cb'],
      H['G'],
      H['C']
    );
    var q = n('85ee'),
      z = n('eef9');
    Object(r['createApp'])(L)
      .component('icon', U['a'])
      .use(M['a'])
      .use(D['a'])
      .use(I['VueReCaptcha'], {
        siteKey: q['j'],
        loaderOptions: {
          useRecaptchaNet: !0,
          autoHideBadge: !0,
        },
      })
      .mount('#app'),
      Object(z['f'])();
  },
  d86a: function (e, t, n) {
    'use strict';
    n('99af');
    var r = n('0613');
    t['a'] = {
      base: function (e, t) {
        var n,
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
          c = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          u = null !== (n = r['a'].state.error.errors[e]) && void 0 !== n ? n : [];
        0 == t.length && c && u.push('The '.concat(e, ' field is required.')),
          t.length < a
            ? u.push('The '.concat(e, ' field must be at least ').concat(a, ' characters.'))
            : -1 != o &&
              t.length > o &&
              u.push('The '.concat(e, ' must not be greater than ').concat(o, ' characters.')),
          (r['a'].state.error.errors[e] = u);
      },
      email: function (e, t) {
        var n,
          a =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          o = null !== (n = r['a'].state.error.errors[e]) && void 0 !== n ? n : [];
        a.test(t) || o.push('The '.concat(e, ' must be a valid email address.')),
          (r['a'].state.error.errors[e] = o);
      },
      valid: function (e) {
        return this.get(e).length < 1;
      },
      get: function (e) {
        var t;
        return null !== (t = r['a'].state.error.errors[e]) && void 0 !== t ? t : [];
      },
      clear: function (e) {
        delete r['a'].state.error.errors[e];
      },
      match: function (e, t, n, a) {
        var o,
          c = null !== (o = r['a'].state.error.errors[t]) && void 0 !== o ? o : [];
        n !== a && c.push('The value of '.concat(t, ' must match ').concat(e)),
          (r['a'].state.error.errors[t] = c);
      },
      isInteger: function (e) {
        return /^\d+$/.test(e);
      },
    };
  },
  d89f: function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getConfigStruct', function () {
        return o;
      }),
      n.d(t, 'getSelfConfig', function () {
        return c;
      }),
      n.d(t, 'setKeyValue', function () {
        return u;
      }),
      n.d(t, 'getConfigs', function () {
        return i;
      }),
      n.d(t, 'useConfig', function () {
        return s;
      }),
      n.d(t, 'deleteConfig', function () {
        return d;
      }),
      n.d(t, 'publishConfig', function () {
        return l;
      });
    var r = n('bc3a'),
      a = n.n(r),
      o = function () {
        return a.a.get('/configs/struct');
      },
      c = function () {
        return a.a.get('/configs/me');
      },
      u = function (e, t) {
        return a.a.post('/configs/me/set', {
          key: e,
          value: t,
        });
      },
      i = function (e) {
        return a.a.get('/configs', {
          params: {
            filter: e,
          },
        });
      },
      s = function (e) {
        return a.a.post('/configs/'.concat(e, '/use'));
      },
      d = function (e) {
        return a.a.delete('/configs/'.concat(e));
      },
      l = function (e, t, n) {
        return a.a.post('/configs/publish', {
          type: e,
          name: t,
          description: n,
        });
      };
  },
  ecc6: function (e, t, n) {},
  eef9: function (e, t, n) {
    'use strict';
    n.d(t, 'g', function () {
      return a;
    }),
      n.d(t, 'b', function () {
        return o;
      }),
      n.d(t, 'e', function () {
        return c;
      }),
      n.d(t, 'f', function () {
        return u;
      }),
      n.d(t, 'c', function () {
        return i;
      }),
      n.d(t, 'd', function () {
        return s;
      }),
      n.d(t, 'h', function () {
        return l;
      }),
      n.d(t, 'a', function () {
        return f;
      });
    n('d3b7'), n('3ca3'), n('ddb0'), n('2b3d'), n('9861'), n('b680');
    var r = n('5700'),
      a = function (e, t) {
        return r['a'].emit('toast', {
          type: e,
          text: t,
        });
      },
      o = function (e, t) {
        return new Promise(function (n) {
          r['a'].emit('dialog:show', {
            title: e,
            text: t,
            callback: function (e) {
              return n(e);
            },
          });
        });
      },
      c = function (e, t) {
        return new Promise(function (n) {
          r['a'].emit('dialog:show', {
            title: e,
            text: t,
            input: !0,
            callback: function (e, t) {
              return n({
                result: e,
                input: t,
              });
            },
          });
        });
      },
      u = function () {
        return r['a'].emit('load:start');
      },
      i = function () {
        return r['a'].emit('load:done');
      };

    function s(e, t) {
      var n =
          window.URL && window.URL.createObjectURL
            ? window.URL.createObjectURL(e)
            : window.webkitURL.createObjectURL(e),
        r = document.createElement('a');
      (r.style.display = 'none'),
        (r.href = n),
        r.setAttribute('download', t),
        'undefined' === typeof r.download && r.setAttribute('target', '_blank'),
        document.body.appendChild(r),
        r.click(),
        setTimeout(function () {
          document.body.removeChild(r), window.URL.revokeObjectURL(n);
        }, 200);
    }

    function d(e) {
      var t = document.createElement('textarea');
      (t.value = e),
        (t.style.top = '0'),
        (t.style.left = '0'),
        (t.style.position = 'fixed'),
        document.body.appendChild(t),
        t.focus(),
        t.select();
      try {
        var n = document.execCommand('copy');
        n ? a('info', 'Copied to clipboard') : a('error', 'Failed to copy to clipboard');
      } catch (r) {
        a('error', 'Failed to copy to clipboard');
      }
      document.body.removeChild(t);
    }

    function l(e) {
      return e / 1e3 < 1
        ? e
        : e / 1e5 < 1
        ? (e / 1e3).toFixed(1) + 'k'
        : (e / 1e3).toFixed(0) + 'k';
    }

    function f(e) {
      navigator.clipboard
        ? navigator.clipboard.writeText(e).then(
            function () {
              a('info', 'Copied to clipboard');
            },
            function (e) {
              a('error', 'Failed to copy to clipboard');
            }
          )
        : d(e);
    }
  },
  f688: function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'getClientVars', function () {
        return o;
      }),
      n.d(t, 'setClientVars', function () {
        return c;
      }),
      n.d(t, 'setEnv', function () {
        return u;
      }),
      n.d(t, 'getDiscountCodes', function () {
        return i;
      }),
      n.d(t, 'setDiscountCodes', function () {
        return s;
      });
    var r = n('bc3a'),
      a = n.n(r),
      o = function () {
        return a.a.get('/manage/vars');
      },
      c = function (e) {
        return a.a.post('/manage/vars', {
          vars: e,
        });
      },
      u = function (e, t) {
        return a.a.post('/manage/env', {
          key: e,
          value: t,
        });
      },
      i = function () {
        return a.a.get('/manage/discounts');
      },
      s = function (e) {
        return a.a.post('/manage/discounts', {
          codes: e,
        });
      };
  },
});
