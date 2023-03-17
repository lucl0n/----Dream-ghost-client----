(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-cf066fea'],
  {
    '1ae4': function (e, t, n) {
      e.exports = n.p + 'img/logo.101e7fe3.svg';
    },
    a55b: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('7a23'),
        a = n('1ae4'),
        c = n.n(a),
        o = { class: 'center-wrapper full-height' },
        s = Object(r['createElementVNode'])(
          'img',
          { alt: 'Dream Logo', class: 'logo logo--m', src: c.a },
          null,
          -1
        ),
        l = { key: 0, class: 'error' },
        u = Object(r['createTextVNode'])(' Forgot password? '),
        d = ['disabled'],
        i = Object(r['createTextVNode'])(" Don't have an account? "),
        b = Object(r['createElementVNode'])('span', { class: 'text-p text-b' }, 'Register', -1);
      function p(e, t, n, a, c, p) {
        var m = Object(r['resolveComponent'])('TextInput'),
          f = Object(r['resolveComponent'])('router-link');
        return (
          Object(r['openBlock'])(),
          Object(r['createElementBlock'])('div', o, [
            s,
            Object(r['createElementVNode'])(
              'form',
              {
                class: 'form',
                onSubmit:
                  t[2] ||
                  (t[2] = Object(r['withModifiers'])(
                    function () {
                      return e.submitLogin && e.submitLogin.apply(e, arguments);
                    },
                    ['prevent']
                  )),
              },
              [
                e.error
                  ? (Object(r['openBlock'])(),
                    Object(r['createElementBlock'])(
                      'p',
                      l,
                      Object(r['toDisplayString'])(e.error),
                      1
                    ))
                  : Object(r['createCommentVNode'])('', !0),
                Object(r['createVNode'])(
                  m,
                  {
                    id: 'username',
                    modelValue: e.username,
                    'onUpdate:modelValue':
                      t[0] ||
                      (t[0] = function (t) {
                        return (e.username = t);
                      }),
                    'max-length': 99,
                    'min-length': 4,
                    required: !0,
                    class: 'mb',
                    icon: 'user',
                    placeholder: 'Username',
                  },
                  null,
                  8,
                  ['modelValue']
                ),
                Object(r['createVNode'])(
                  m,
                  {
                    id: 'password',
                    modelValue: e.password,
                    'onUpdate:modelValue':
                      t[1] ||
                      (t[1] = function (t) {
                        return (e.password = t);
                      }),
                    'max-length': 99,
                    'min-length': 4,
                    required: !0,
                    class: 'mb',
                    icon: 'lock',
                    placeholder: 'Password',
                    type: 'password',
                  },
                  null,
                  8,
                  ['modelValue']
                ),
                Object(r['createVNode'])(
                  f,
                  { to: { name: 'forgot-password' }, class: 'mb mt block text-d2 nd' },
                  {
                    default: Object(r['withCtx'])(function () {
                      return [u];
                    }),
                    _: 1,
                  }
                ),
                Object(r['createElementVNode'])(
                  'button',
                  {
                    disabled: !e.valid,
                    class: 'button button--primary full-sized',
                    type: 'submit',
                  },
                  ' Login ',
                  8,
                  d
                ),
                Object(r['createVNode'])(
                  f,
                  { to: { name: 'register' }, class: 'mt text-d2 block nd' },
                  {
                    default: Object(r['withCtx'])(function () {
                      return [i, b];
                    }),
                    _: 1,
                  }
                ),
              ],
              32
            ),
          ])
        );
      }
      var m = n('1da1'),
        f = (n('96cf'), n('760d')),
        j = n('6c02'),
        O = n('79f6'),
        g = n('eef9'),
        h = n('446e'),
        v = n('d86a'),
        w = Object(r['defineComponent'])({
          components: { TextInput: h['a'] },
          setup: function () {
            var e = Object(f['useReCaptcha'])(),
              t = e.executeRecaptcha,
              n = e.recaptchaLoaded,
              a = Object(j['d'])(),
              c = a.push,
              o = Object(r['ref'])(''),
              s = Object(r['ref'])(''),
              l = Object(r['ref'])(null),
              u = Object(r['computed'])(function () {
                return (
                  o.value.length > 0 &&
                  s.value.length > 0 &&
                  v['a'].valid('username') &&
                  v['a'].valid('password')
                );
              });
            function d() {
              return i.apply(this, arguments);
            }
            function i() {
              return (
                (i = Object(m['a'])(
                  regeneratorRuntime.mark(function e() {
                    var r, a, d, i;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ((Object(O['c'])(), u.value)) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt('return');
                            case 3:
                              return (e.prev = 3), Object(g['f'])(), (e.next = 7), n();
                            case 7:
                              return (e.next = 9), t('login');
                            case 9:
                              return (r = e.sent), (e.next = 12), O['a'].login(o.value, s.value, r);
                            case 12:
                              return (
                                (a = e.sent),
                                (d = a.data),
                                (i = d.access_token),
                                Object(O['j'])(i),
                                (e.next = 18),
                                c({ name: 'dashboard.home' })
                              );
                            case 18:
                              e.next = 24;
                              break;
                            case 20:
                              (e.prev = 20),
                                (e.t0 = e['catch'](3)),
                                console.error(e.t0),
                                (l.value = e.t0.message);
                            case 24:
                              return (e.prev = 24), Object(g['c'])(), e.finish(24);
                            case 27:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 20, 24, 27]]
                    );
                  })
                )),
                i.apply(this, arguments)
              );
            }
            return { username: o, password: s, valid: u, error: l, submitLogin: d };
          },
        }),
        x = n('6b0d'),
        V = n.n(x);
      const k = V()(w, [['render', p]]);
      t['default'] = k;
    },
  },
]);
//# sourceMappingURL=chunk-cf066fea.108091cc.js.map
