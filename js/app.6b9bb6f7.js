(function (t) {
  function e(e) {
    for (var s, r, u = e[0], i = e[1], l = e[2], c = 0, p = []; c < u.length; c++) r = u[c], Object.prototype.hasOwnProperty.call(o, r) && o[r] && p.push(o[r][0]), o[r] = 0;
    for (s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    f && f(e);
    while (p.length) p.shift()();
    return a.push.apply(a, l || []), n();
  }

  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], s = !0, r = 1; r < n.length; r++) {
        var u = n[r];
        0 !== o[u] && (s = !1);
      }
      s && (a.splice(e--, 1), t = i(i.s = n[0]));
    }
    return t;
  }

  var s = {},
    r = { app: 0 },
    o = { app: 0 },
    a = [];

  function u(t) {
    return i.p + 'js/' + ({}[t] || t) + '.' + { 'chunk-59f8adbc': 'fe39fd70' }[t] + '.js';
  }

  function i(e) {
    if (s[e]) return s[e].exports;
    var n = s[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
  }

  i.e = function (t) {
    var e = [],
      n = { 'chunk-59f8adbc': 1 };
    r[t] ? e.push(r[t]) : 0 !== r[t] && n[t] && e.push(r[t] = new Promise((function (e, n) {
      for (var s = 'css/' + ({}[t] || t) + '.' + { 'chunk-59f8adbc': '608b3d6c' }[t] + '.css', o = i.p + s, a = document.getElementsByTagName('link'), u = 0; u < a.length; u++) {
        var l = a[u],
          c = l.getAttribute('data-href') || l.getAttribute('href');
        if ('stylesheet' === l.rel && (c === s || c === o)) return e();
      }
      var p = document.getElementsByTagName('style');
      for (u = 0; u < p.length; u++) {
        l = p[u], c = l.getAttribute('data-href');
        if (c === s || c === o) return e();
      }
      var f = document.createElement('link');
      f.rel = 'stylesheet', f.type = 'text/css', f.onload = e, f.onerror = function (e) {
        var s = e && e.target && e.target.src || o,
          a = new Error('Loading CSS chunk ' + t + ' failed.\n(' + s + ')');
        a.code = 'CSS_CHUNK_LOAD_FAILED', a.request = s, delete r[t], f.parentNode.removeChild(f), n(a);
      }, f.href = o;
      var d = document.getElementsByTagName('head')[0];
      d.appendChild(f);
    })).then((function () {
      r[t] = 0;
    })));
    var s = o[t];
    if (0 !== s) {
      if (s) {
        e.push(s[2]);
      } else {
        var a = new Promise((function (e, n) {
          s = o[t] = [e, n];
        }));
        e.push(s[2] = a);
        var l,
          c = document.createElement('script');
        c.charset = 'utf-8', c.timeout = 120, i.nc && c.setAttribute('nonce', i.nc), c.src = u(t);
        var p = new Error;
        l = function (e) {
          c.onerror = c.onload = null, clearTimeout(f);
          var n = o[t];
          if (0 !== n) {
            if (n) {
              var s = e && ('load' === e.type ? 'missing' : e.type),
                r = e && e.target && e.target.src;
              p.message = 'Loading chunk ' + t + ' failed.\n(' + s + ': ' + r + ')', p.name = 'ChunkLoadError', p.type = s, p.request = r, n[1](p);
            }
            o[t] = void 0;
          }
        };
        var f = setTimeout((function () {
          l({
            type: 'timeout',
            target: c
          });
        }), 12e4);
        c.onerror = c.onload = l, document.head.appendChild(c);
      }
    }
    return Promise.all(e);
  }, i.m = t, i.c = s, i.d = function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (t) {
    'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, 'default', {
      enumerable: !0,
      value: t
    }), 2 & e && 'string' != typeof t) {
      for (var s in t) {
        i.d(n, s, function (e) {
          return t[e];
        }.bind(null, s));
      }
    }
    return n;
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t['default'];
    } : function () {
      return t;
    };
    return i.d(e, 'a', e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = '/', i.oe = function (t) {
    throw console.error(t), t;
  };
  var l = window['webpackJsonp'] = window['webpackJsonp'] || [],
    c = l.push.bind(l);
  l.push = e, l = l.slice();
  for (var p = 0; p < l.length; p++) e(l[p]);
  var f = c;
  a.push([0, 'chunk-vendors']), n();
})({
  0: function (t, e, n) {
    t.exports = n('56d7');
  },
  2656: function (t, e, n) {
  },
  '434d': function (t, e, n) {
    'use strict';
    n('7e5e');
  },
  '56d7': function (t, e, n) {
    'use strict';
    n.r(e);
    n('e260'), n('e6cf'), n('cca6'), n('a79d');
    var s = n('8c4f'),
      r = (n('d3b7'), n('2b0e')),
      o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n('div', [n('div', { staticClass: 'posts-section' }, [n('posts-list', { attrs: { userPosts: t.userPosts } })], 1), n('router-view')], 1);
      },
      a = [],
      u = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n('ul', { staticClass: 'post-list' }, t._l(t.getAllPosts, (function (t) {
          return n('post-item', {
            key: t.id,
            attrs: { post: t }
          });
        })), 1);
      },
      i = [],
      l = n('5530'),
      c = n('2f62'),
      p = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n('li', {
          staticClass: 'post-list__item',
          on: {
            click: function (e) {
              return t.setState(t.post.id, t.post.userId, t.post.title, t.post.body);
            }
          }
        }, [n('div', { staticClass: 'post-list__details' }, [n('span', { staticClass: 'post-list__user' }, [t._v('[User# ' + t._s(t.post.userId) + ']:')]), n('span', { staticClass: 'post-list__title' }, [t._v(t._s(t.post.title))])]), n('router-link', {
          staticClass: 'post-list__button',
          attrs: { to: '/post' }
        }, [t._v(' Open details ')])], 1);
      },
      f = [],
      d = {
        name: 'PostItem',
        data: function () {
          return { fullPost: {} };
        },
        props: { post: Object },
        methods: Object(l['a'])(Object(l['a'])({}, Object(c['d'])(['postDetails'])), {}, {
          setState: function (t, e, n, s) {
            this.fullPost.postId = t, this.fullPost.userId = e, this.fullPost.postTitle = n, this.fullPost.postBody = s, this.postDetails(this.fullPost);
          }
        })
      },
      h = d,
      m = (n('434d'), n('2877')),
      v = Object(m['a'])(h, p, f, !1, null, null, null),
      b = v.exports,
      g = {
        name: 'PostsList',
        components: { PostItem: b },
        computed: Object(c['c'])(['getAllPosts']),
        methods: Object(l['a'])({}, Object(c['b'])(['allPosts'])),
        mounted: function () {
          this.allPosts();
        }
      },
      P = g,
      _ = (n('bfb2'), Object(m['a'])(P, u, i, !1, null, null, null)),
      y = _.exports,
      j = {
        data: function () {
          return {
            userPosts: [],
            allUsers: []
          };
        },
        name: 'App',
        components: { PostsList: y }
      },
      O = j,
      w = Object(m['a'])(O, o, a, !1, null, null, null),
      k = w.exports;
    r['a'].use(s['a']);
    var C = new s['a']({
        mode: 'history',
        routes: [{
          path: '/',
          component: k
        }, {
          path: '/post',
          name: 'PostDetails',
          component: function () {
            return n.e('chunk-59f8adbc')
              .then(n.bind(null, 'aa8d'));
          }
        }]
      }),
      x = (n('96cf'), n('1da1')),
      E = {
        actions: {
          allPosts: function (t) {
            return Object(x['a'])(regeneratorRuntime.mark((function e() {
              var n,
                s;
              return regeneratorRuntime.wrap((function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, fetch('https://jsonplaceholder.typicode.com/posts');
                    case 2:
                      return n = e.sent, e.next = 5, n.json();
                    case 5:
                      s = e.sent, t.commit('setPosts', s);
                    case 7:
                    case'end':
                      return e.stop();
                  }
                }
              }), e);
            })))();
          }
        },
        mutations: {
          setPosts: function (t, e) {
            t.posts = e;
          },
          postDetails: function (t, e) {
            t.fullPost = e;
          }
        },
        state: {
          posts: [],
          fullPost: {}
        },
        getters: {
          getAllPosts: function (t) {
            return t.posts;
          },
          getFullPost: function (t) {
            return t.fullPost;
          }
        }
      };
    r['a'].use(c['a']);
    var S = new c['a'].Store({ modules: { posts: E } }),
      A = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n('div', { attrs: { id: 'app' } }, [n('h1', [t._v('Posts')]), n('div', { staticClass: 'posts-wrapper' }, [n('router-view')], 1)]);
      },
      T = [],
      I = (n('5c0b'), {}),
      L = Object(m['a'])(I, A, T, !1, null, null, null),
      D = L.exports;
    r['a'].use(s['a']), r['a'].config.productionTip = !1, new r['a']({
      store: S,
      router: C,
      render: function (t) {
        return t(D);
      }
    }).$mount('#app');
  },
  '5c0b': function (t, e, n) {
    'use strict';
    n('9c0c');
  },
  "7e5e": function (t, e, n) {
  },
  "9c0c": function (t, e, n) {
  },
  bfb2: function (t, e, n) {
    "use strict";
    n("2656")
  }
});
//# sourceMappingURL=app.6b9bb6f7.js.map
