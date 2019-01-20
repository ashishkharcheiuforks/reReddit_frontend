(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    132: function(e, t, n) {},
    182: function(e, t, n) {},
    207: function(e, t, n) {},
    223: function(e, t, n) {
      e.exports = n(540);
    },
    232: function(e, t, n) {},
    255: function(e, t, n) {},
    313: function(e, t, n) {},
    325: function(e, t, n) {},
    327: function(e, t, n) {},
    331: function(e, t, n) {},
    347: function(e, t, n) {},
    349: function(e, t, n) {},
    351: function(e, t, n) {},
    365: function(e, t, n) {},
    367: function(e, t, n) {},
    370: function(e, t, n) {},
    372: function(e, t, n) {},
    388: function(e, t, n) {},
    390: function(e, t, n) {},
    392: function(e, t, n) {},
    499: function(e, t, n) {},
    501: function(e, t, n) {},
    503: function(e, t, n) {},
    505: function(e, t, n) {},
    507: function(e, t, n) {},
    517: function(e, t, n) {},
    519: function(e, t, n) {},
    522: function(e, t, n) {},
    524: function(e, t, n) {},
    526: function(e, t, n) {},
    528: function(e, t, n) {},
    530: function(e, t, n) {},
    532: function(e, t, n) {},
    534: function(e, t, n) {},
    536: function(e, t, n) {},
    538: function(e, t, n) {},
    540: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        a = n.n(r),
        o = n(26),
        s = n.n(o);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var c = n(19),
        i = n(134),
        l = n(16),
        u = n(88),
        d = n(210),
        m = n(211),
        p = n.n(m),
        E = (n(232),
        function(e) {
          return "/r/".concat(e);
        }),
        h = n(42),
        b = n(212),
        f = n(130),
        S = n(213),
        v = n.n(S),
        g = n(6),
        y = {
          loading: !1,
          error: null,
          title: null,
          pseudo: !1,
          description: null,
          subscriptionLoading: !1
        },
        O = function(e) {
          return ["popular", "home", "all"].indexOf(e.toLowerCase()) >= 0;
        },
        T = function(e) {
          return e.subreddit.title;
        },
        C = function(e) {
          return {
            title: e.subreddit.title,
            description: e.subreddit.description,
            pseudo: e.subreddit.psuedo,
            loading: e.subreddit.loading,
            error: e.subreddit.error
          };
        },
        _ = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : y,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCH_SUB_DETAIL_REQUEST":
              return Object(g.a)({}, e, { loading: !0, error: null });
            case "FETCH_SUB_DETAIL_SUCCESS":
              return Object(g.a)({}, e, {
                loading: !1,
                error: null,
                title: t.data.title,
                pseudo: O(t.data.title),
                description: t.data.description
              });
            case "FETCH_SUB_DETAIL_FAILURE":
              return Object(g.a)({}, e, { loading: !1, error: t.error });
            case "SET_SUB_TO_HOME":
              return Object(g.a)({}, e, {
                loading: !1,
                error: null,
                title: t.title
              });
            case "SUBREDDIT_SUBSCRIBE_REQUEST":
              return Object(g.a)({}, e, { subscriptionLoading: !0 });
            case "SUBREDDIT_SUBSCRIBE_SUCCESS":
            case "SUBREDDIT_SUBSCRIBE_FAILURE":
              return Object(g.a)({}, e, { subscriptionLoading: !1 });
            default:
              return e;
          }
        },
        U = {
          token: null,
          username: null,
          pk: null,
          subs: [],
          moderated_subs: [],
          error: null,
          loading: !1
        },
        j = function(e) {
          return e.userAuth.username;
        },
        R = function(e) {
          return e.userAuth.subs.map(function(e) {
            return e.title;
          });
        },
        A = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : U,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "USER_AUTH_LOGIN_REQUEST":
              return Object(g.a)({}, e, { loading: !0 });
            case "USER_AUTH_LOGIN_SUCCESS":
              return Object(g.a)({}, e, {
                token: t.data.token,
                username: t.data.username,
                pk: t.data.pk,
                subs: t.data.subs,
                moderated_subs: t.data.moderated_subs,
                loading: !1,
                error: null
              });
            case "USER_AUTH_LOGIN_FAILURE":
              return Object(g.a)({}, e, {
                token: null,
                loading: !1,
                error: t.error
              });
            case "USER_AUTH_LOGOUT_SUCCESS":
              return U;
            case "USER_AUTH_UPDATE_SUCCESS":
              return Object(g.a)({}, e, {
                username: t.data.username,
                subs: t.data.subs,
                moderated_subs: t.data.moderated_subs,
                loading: !1,
                error: null
              });
            default:
              return e;
          }
        },
        k = {
          showModal: !1,
          displayType: null,
          errorMessage: null,
          successMessage: null
        },
        P = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : k,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "SHOW_USER_AUTH_MODAL":
              return Object(g.a)({}, e, {
                showModal: !0,
                displayType: t.displayType,
                errorMessage: t.warningMessage,
                successMessage: t.successMessage
              });
            case "HIDE_USER_AUTH_MODAL":
              return Object(g.a)({}, e, {
                showModal: !1,
                displayType: null,
                errorMessage: null,
                successMessage: null
              });
            case "UPDATE_USER_AUTH_MODAL_ERROR":
              return Object(g.a)({}, e, { errorMessage: t.errorMessage });
            default:
              return e;
          }
        },
        I = {
          title: null,
          body: null,
          poster: null,
          pk: null,
          error: null,
          loading: !1
        },
        D = function(e) {
          return e.postDetail.title;
        },
        w = function(e) {
          return e.postDetail.body;
        },
        N = function(e) {
          return e.postDetail.poster;
        },
        L = function(e) {
          return e.postDetail.pk;
        },
        M = function(e) {
          return e.postDetail.loading;
        },
        H = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : I,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCH_POST_DETAIL_REQUEST":
              return Object(g.a)({}, e, { error: null, loading: !0 });
            case "FETCH_POST_DETAIL_SUCCESS":
              return Object(g.a)({}, e, {
                title: t.data.title,
                body: t.data.body,
                poster: t.data.poster_username,
                pk: t.data.pk,
                loading: !1,
                error: null
              });
            case "FETCH_POST_DETAIL_FAILURE":
              return Object(g.a)({}, e, { loading: !1, error: t.error });
            case "UPDATE_POST_SUCCESS":
              return Object(g.a)({}, e, { body: t.data.body });
            case "FETCH_POST_LIST_SUCCESS":
              return Object(g.a)({}, e, { pk: null });
            default:
              return e;
          }
        },
        B = n(13),
        F = n(38);
      function q(e, t) {
        var n = e.voteDisplayState || 0,
          r = t,
          a = e.upvotes + (r - n);
        return Object(g.a)({}, e, { voteDisplayState: r, upvotes: a });
      }
      var x = function(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "pk",
            n = [];
          return (
            e.forEach(function(e) {
              n.push(e[t]);
            }),
            n
          );
        },
        Q = function(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "pk",
            r = {};
          return (
            e.forEach(function(e) {
              (e = t ? t(e) : e), (r[e[n]] = Object(g.a)({}, e));
            }),
            r
          );
        },
        V = function(e) {
          return Q(e, function(e) {
            var t = e.vote_state,
              n = e.poster_username,
              r = e.subreddit_title,
              a = Object(B.a)(e, [
                "vote_state",
                "poster_username",
                "subreddit_title"
              ]);
            return Object(
              g.a
            )({ voteDisplayState: t, posterUsername: n, subredditTitle: r }, a);
          });
        },
        G = function(e, t) {
          var n = t.vote_state,
            r = Object(B.a)(t, ["vote_state"]),
            a = Object(g.a)({}, r, {
              voteDisplayState: n,
              created: "just now"
            });
          if (t.post)
            return Object(g.a)(
              {},
              (function(e, t) {
                var n = e.rootCommentIds.slice();
                return n.splice(0, 0, t.pk), { rootCommentIds: n };
              })(e, a),
              {
                commentsById: Object(g.a)(
                  {},
                  e.commentsById,
                  Object(F.a)({}, t.pk, a)
                )
              }
            );
          if (t.parent) {
            var o = (function(e, t) {
              var n = t.parent,
                r = e.commentsById[n];
              r.children = r.children || [];
              var a = r.children.slice();
              a.splice(0, 0, t.pk);
              var o = Object(g.a)({}, r, { children: a });
              return Object(g.a)({}, e.commentsById, Object(F.a)({}, n, o));
            })(e, a);
            return {
              commentsById: Object(g.a)({}, o, Object(F.a)({}, t.pk, a))
            };
          }
        },
        K = function(e, t, n) {
          var r,
            a,
            o = e.commentsById[t];
          return Object(g.a)({}, e, {
            commentsById: Object(g.a)(
              {},
              e.commentsById,
              Object(F.a)({}, t, ((r = o), (a = n), Object(g.a)({}, r, a)))
            )
          });
        },
        W = {
          commentsById: {},
          postersById: {},
          rootCommentIds: [],
          error: null,
          loading: !1,
          createCommentError: null,
          createCommentLoading: !1
        },
        z = function(e) {
          return e.comments.rootCommentIds;
        },
        J = function(e, t) {
          return e.comments.commentsById[t];
        },
        X = function(e, t) {
          var n = e.comments.commentsById[t].poster;
          return e.comments.postersById[n];
        },
        Y = function(e) {
          return e.comments.loading;
        },
        $ = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : W,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCH_POST_COMMENT_TREES_REQUEST":
              return Object(g.a)({}, e, { loading: !0 });
            case "FETCH_POST_COMMENT_TREES_SUCCESS":
              return Object(g.a)({}, e, {
                commentsById: t.data.entities.comments,
                postersById: t.data.entities.posters,
                rootCommentIds: t.data.result,
                error: null,
                loading: !1,
                createCommentError: null
              });
            case "FETCH_POST_COMMENT_TREES_FAILURE":
              return Object(g.a)({}, e, { error: t.error });
            case "CREATE_COMMENT_SUCCESS":
              return Object(g.a)({}, e, G(e, t.data), {
                createCommentLoading: !1,
                createCommentError: null
              });
            case "CREATE_COMMENT_REQUEST":
              return Object(g.a)({}, e, {
                createCommentLoading: !0,
                createCommentError: null
              });
            case "CREATE_COMMENT_FAILURE":
              return Object(g.a)({}, e, {
                createCommentLoading: !1,
                createCommentError: t.error
              });
            case "COMMENT_VOTE_SUCCESS":
              var n = t.data.comment;
              return Object(g.a)({}, e, {
                commentsById: Object(g.a)(
                  {},
                  e.commentsById,
                  Object(F.a)({}, n, q(e.commentsById[n], t.data.vote_type))
                )
              });
            case "DELETE_COMMENT_SUCCESS":
              return K(e, t.data.pk, { deleted: !0 });
            case "UPDATE_COMMENT_SUCCESS":
              return K(e, t.data.pk, Object(g.a)({}, t.data));
            default:
              return e;
          }
        },
        Z = n(15);
      function ee(e) {
        var t = (function(e, t) {
          if ("object" !== typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === typeof t ? t : String(t);
      }
      var te = {
          postsById: {},
          allPosts: [],
          loading: !0,
          error: null,
          deletionPostId: null,
          deleteError: null
        },
        ne = function(e, t) {
          return e.postList.postsById[t];
        },
        re = function(e) {
          return e.postList.allPosts;
        },
        ae = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : te,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCH_POST_LIST_REQUEST":
              return Object(g.a)({}, e, { loading: !0, error: null });
            case "FETCH_POST_LIST_SUCCESS":
              return Object(g.a)({}, e, {
                loading: !1,
                error: null,
                postsById: V(t.data),
                allPosts: x(t.data)
              });
            case "FETCH_POST_LIST_FAILURE":
              return Object(g.a)({}, e, { loading: !1, error: t.error });
            case "POST_VOTE_SUCCESS":
              var n = t.data.post;
              return Object(g.a)({}, e, {
                postsById: Object(g.a)(
                  {},
                  e.postsById,
                  Object(F.a)({}, n, q(e.postsById[n], t.data.vote_type))
                )
              });
            case "DELETE_POST_REQUEST":
              return Object(g.a)({}, e, {
                deleteError: null,
                deletionPostId: Number(t.pk)
              });
            case "DELETE_POST_SUCCESS":
              return (function(e, t) {
                var n = e.postsById,
                  r = (n[t], Object(B.a)(n, [t].map(ee)));
                delete r[t];
                var a = Object(Z.a)(e.allPosts),
                  o = a.indexOf(t);
                return (
                  a.splice(o, 1),
                  Object(g.a)({}, e, {
                    postsById: Object(g.a)({}, r),
                    allPosts: Object(Z.a)(a),
                    deletionPostId: null
                  })
                );
              })(e, e.deletionPostId);
            case "DELETE_POST_FAILURE":
              return Object(g.a)({}, e, { deleteError: t.error });
            case "SEARCH_SUCCESS":
              return Object(g.a)({}, e, {
                loading: !1,
                error: null,
                postsById: V(t.data.posts),
                allPosts: x(t.data.posts)
              });
            default:
              return e;
          }
        },
        oe = { creating: !1, error: null, loading: !1 },
        se = function(e) {
          return e.createPost.loading;
        },
        ce = function(e) {
          return e.createPost.error;
        },
        ie = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : oe,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "CREATE_POST_FAILURE":
              return Object(g.a)({}, e, { loading: !1, error: t.error });
            case "CREATE_POST_REQUEST":
              return Object(g.a)({}, e, { loading: !0, error: null });
            case "CREATE_POST_SUCCESS":
              return Object(g.a)({}, e, { loading: !1, error: null });
            default:
              return e;
          }
        },
        le = { error: null, loading: !1, newSubredditData: null },
        ue = function(e) {
          return e.createSubreddit.error;
        },
        de = function(e) {
          return e.createSubreddit.loading;
        },
        me = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : le,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "CREATE_SUBREDDIT_REQUEST":
              return Object(g.a)({}, e, {
                loading: !0,
                error: !1,
                newSubredditData: null
              });
            case "CREATE_SUBREDDIT_SUCCESS":
              return Object(g.a)({}, e, {
                newSubredditData: t.data,
                loading: !1,
                error: null
              });
            case "CREATE_SUBREDDIT_FAILURE":
              return Object(g.a)({}, e, {
                newSubredditData: null,
                loading: !1,
                error: t.error
              });
            default:
              return e;
          }
        },
        pe = { showDetailPostEditor: !1, loading: !1, error: !1 },
        Ee = function(e) {
          return e.editPost.showDetailPostEditor;
        },
        he = function(e) {
          return e.editPost.error;
        },
        be = function(e) {
          return e.editPost.loading;
        },
        fe = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : pe,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "TOGGLE_POST_EDITOR":
              return Object(g.a)({}, e, {
                showDetailPostEditor: !e.showDetailPostEditor
              });
            case "UPDATE_POST_REQUEST":
              return Object(g.a)({}, e, { loading: !0, error: null });
            case "UPDATE_POST_SUCCESS":
              return Object(g.a)({}, e, { loading: !1, error: null });
            case "UPDATE_POST_FAILURE":
              return Object(g.a)({}, e, { loading: !1, error: t.error });
            default:
              return e;
          }
        },
        Se = {
          query: "",
          allSubreddits: [],
          subredditsById: {},
          allUsers: [],
          usersById: {},
          searchResultsView: "posts",
          error: null,
          loading: !1
        },
        ve = function(e) {
          return e.search.error;
        },
        ge = function(e) {
          return e.search.loading;
        },
        ye = function(e) {
          return e.search.query;
        },
        Oe = function(e) {
          return e.search.allSubreddits;
        },
        Te = function(e) {
          return e.search.allUsers;
        },
        Ce = function(e, t) {
          return e.search.subredditsById[t];
        },
        _e = function(e) {
          return e.search.searchResultsView;
        },
        Ue = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Se,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "SEARCH_REQUEST":
              return Object(g.a)({}, e, { loading: !0, error: null });
            case "SEARCH_SUCCESS":
              return Object(g.a)({}, e, {
                loading: !1,
                error: null,
                allUsers: x(t.data.users),
                usersById: Q(t.data.users),
                allSubreddits: x(t.data.subreddits),
                subredditsById: Q(t.data.subreddits)
              });
            case "SEARCH_FAILURE":
              return Object(g.a)({}, e, { loading: !1, error: t.error });
            case "SET_SEARCH_QUERY":
              return Object(g.a)({}, e, {
                query: t.query,
                searchResultsView: "posts"
              });
            case "SET_SEARCH_RESULTS_VIEW":
              return Object(g.a)({}, e, { searchResultsView: t.viewName });
            default:
              return e;
          }
        },
        je = Object(h.c)({
          subreddit: _,
          userAuth: A,
          userAuthModal: P,
          postDetail: H,
          comments: $,
          postList: ae,
          createPost: ie,
          createSubreddit: me,
          editPost: fe,
          search: Ue
        }),
        Re = function(e) {
          console.log(e);
          try {
            if ((console.log("Response: ", e.response), e.response)) {
              if (e.response.data && "string" != typeof e.response.data) {
                var t = e.response.data;
                if (t.detail) return t.detail;
                if (t.non_field_errors) return t.non_field_errors[0];
                var n = Object.keys(t)[0],
                  r = t[n][0],
                  a = String(n);
                return a.charAt(0).toUpperCase() + a.substring(1) + ":  " + r;
              }
              return ""
                .concat(e.response.status, ": ")
                .concat(e.response.statusText);
            }
            return "Network Error";
          } catch (o) {
            return (
              console.log(o),
              "Something went wrong, please contact the site administration."
            );
          }
        },
        Ae = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || h.d,
        ke = { key: "root", storage: v.a },
        Pe = Object(f.a)(ke, je),
        Ie = Object(h.e)(
          Pe,
          Ae(
            Object(h.a)(function(e) {
              return function(t) {
                return function(n) {
                  if (n.type && n.type.startsWith("API_")) {
                    var r = n.callAPI,
                      a = n.types,
                      o = n.successActionCreator,
                      s = n.failureActionCreator;
                    return (
                      "function" === typeof a.request
                        ? e.dispatch(a.request)
                        : e.dispatch({ type: a.request }),
                      r()
                        .then(function(t) {
                          return "function" === typeof a.success
                            ? a.success(t, e.getState, e.dispatch)
                            : e.dispatch({ type: a.success, data: t });
                        })
                        .then(function(t) {
                          if (o) return e.dispatch(o(t.data));
                        })
                        .catch(function(t) {
                          var n = Re(t);
                          return (
                            s && e.dispatch(s(n)),
                            Promise.reject(
                              e.dispatch({ type: a.failure, error: n })
                            )
                          );
                        })
                    );
                  }
                  return t(n);
                };
              };
            }, b.a)
          )
        ),
        De = Object(f.b)(Ie),
        we = n(9),
        Ne = n(20),
        Le = n(11),
        Me = n(10),
        He = n(12),
        Be = n(25),
        Fe = n.n(Be),
        qe = "https://rereddit.api.clintdunn.org/",
        xe = qe + "vote/",
        Qe = qe + "comments/",
        Ve = function(e) {
          return "".concat(Qe).concat(e, "/");
        },
        Ge = qe + "subreddits/",
        Ke = function(e) {
          return Ge + "sub/" + e + "/";
        },
        We = qe + "users/",
        ze = qe + "posts/",
        Je = function(e) {
          return ze + e + "/";
        },
        Xe = function(e) {
          return e ? { headers: { Authorization: "Token ".concat(e) } } : {};
        },
        Ye = function(e, t, n) {
          var r = { action: t };
          return Fe.a
            .post(
              (function(e) {
                return Ge + "sub/" + e + "/subscribe/";
              })(e),
              r,
              Xe(n)
            )
            .then(function(e) {
              return e.data;
            });
        },
        $e = function(e) {
          return Fe.a
            .get(
              (function(e) {
                return We + "user/".concat(e, "/");
              })(e)
            )
            .then(function(e) {
              return e.data;
            });
        },
        Ze = function(e) {
          return {
            type: "SHOW_USER_AUTH_MODAL",
            displayType: e,
            successMessage:
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            errorMessage:
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null
          };
        },
        et = function() {
          return { type: "HIDE_USER_AUTH_MODAL" };
        },
        tt = function(e) {
          return { type: "UPDATE_USER_AUTH_MODAL_ERROR", errorMessage: e };
        },
        nt = function(e, t) {
          return {
            type: "API_USER_AUTH_LOGIN",
            types: {
              request: "USER_AUTH_LOGIN_REQUEST",
              success: "USER_AUTH_LOGIN_SUCCESS",
              failure: "USER_AUTH_LOGIN_FAILURE"
            },
            callAPI: function() {
              return (
                (n = { username: e, password: t }),
                Fe.a
                  .post("https://rereddit.api.clintdunn.org/users/login/", n)
                  .then(function(e) {
                    return e.data;
                  })
              );
              var n;
            },
            successActionCreator: et,
            failureActionCreator: tt
          };
        },
        rt = function(e, t, n) {
          return {
            type: "API_USER_AUTH_REGISTER",
            types: {
              request: "USER_AUTH_REGISTER_REQUEST",
              success: "USER_AUTH_REGISTER_SUCCESS",
              failure: "USER_AUTH_REGISTER_FAILURE"
            },
            callAPI: function() {
              return (
                (r = { username: e, password: t, email: n }),
                Fe.a
                  .post("https://rereddit.api.clintdunn.org/users/create/", r)
                  .then(function(e) {
                    return e.data;
                  })
              );
              var r;
            },
            failureActionCreator: tt,
            successActionCreator: ot
          };
        },
        at = function() {
          return function(e, t) {
            return e({
              type: "API_USER_AUTH_LOGOUT",
              types: {
                request: "USER_AUTH_LOGOUT_REQUEST",
                success: "USER_AUTH_LOGOUT_SUCCESS",
                failure: "USER_AUTH_LOGOUT_FAILURE"
              },
              callAPI: function() {
                return (
                  (e = t().userAuth.token),
                  Fe.a
                    .post(
                      "https://rereddit.api.clintdunn.org/users/logout/",
                      null,
                      Xe(e)
                    )
                    .then(function(e) {
                      return e.data;
                    })
                );
                var e;
              }
            });
          };
        },
        ot = function() {
          return Ze("login", "User profile created! Please log in.");
        },
        st = function(e) {
          return {
            type: "API_SUB_DETAIL",
            types: {
              request: "FETCH_SUB_DETAIL_REQUEST",
              success: "FETCH_SUB_DETAIL_SUCCESS",
              failure: "FETCH_SUB_DETAIL_FAILURE"
            },
            callAPI: function() {
              return (function(e) {
                return Fe.a.get(Ke(e)).then(function(e) {
                  return e.data;
                });
              })(e);
            }
          };
        },
        ct = function(e) {
          return function(t, n) {
            return t({
              type: "API_CREATE_SUBREDDIT",
              types: {
                request: "CREATE_SUBREDDIT_REQUEST",
                success: "CREATE_SUBREDDIT_SUCCESS",
                failure: "CREATE_SUBREDDIT_FAILURE"
              },
              callAPI: function() {
                return (function(e, t) {
                  return Fe.a
                    .post(
                      "https://rereddit.api.clintdunn.org/subreddits/",
                      e,
                      Xe(t)
                    )
                    .then(function(e) {
                      return e.data;
                    });
                })(e, n().userAuth.token);
              }
            });
          };
        },
        it = function(e, t) {
          return function(n, r) {
            return n({
              type: "API_SUBREDDIT_SUBSCRIBE",
              types: {
                request: "SUBREDDIT_SUBSCRIBE_REQUEST",
                success: lt,
                failure: "SUBREDDIT_SUBSCRIBE_FAILURE"
              },
              callAPI: function() {
                return Ye(e, t, r().userAuth.token);
              }
            });
          };
        },
        lt = function(e, t, n) {
          return (
            n({ type: "SUBREDDIT_SUBSCRIBE_SUCCESS", data: e }),
            t().userAuth.username
              ? n(
                  (function(e) {
                    return {
                      type: "API_USER_AUTH_UPDATE",
                      types: {
                        request: "USER_AUTH_UPDATE_REQUEST",
                        success: "USER_AUTH_UPDATE_SUCCESS",
                        failure: "USER_AUTH_UPDATE_FAILURE"
                      },
                      callAPI: function() {
                        return $e(e);
                      }
                    };
                  })(t().userAuth.username)
                )
              : null
          );
        },
        ut = n(329),
        dt = n(144),
        mt = (n(255), n(44)),
        pt = (n(313),
        function(e) {
          var t = e.loading,
            n = e.children,
            r = e.className,
            o = Object(B.a)(e, ["loading", "children", "className"]),
            s = a.a.createElement(mt.CircleLoader, {
              size: 20,
              className: "display: inline-block"
            });
          return a.a.createElement(
            "div",
            { className: "loading-button-container" },
            a.a.createElement(
              dt.a,
              Object.assign({}, o, {
                className: r || "loading-button",
                disabled: t
              }),
              t ? s : n
            )
          );
        }),
        Et = (n(325),
        function(e) {
          var t = e.active,
            n = e.children,
            r = e.onClick,
            o = t ? { opacity: "100", borderBottom: "3px solid white" } : {};
          return a.a.createElement(
            "div",
            {
              className: "nav-selector-button-container",
              style: o,
              onClick: r
            },
            a.a.createElement("p", null, n)
          );
        }),
        ht = n(14),
        bt = (n(327),
        function(e, t) {
          return function(n) {
            return function(r) {
              return e(r) ? a.a.createElement(t, r) : a.a.createElement(n, r);
            };
          };
        }),
        ft = function(e) {
          return function(t) {
            return function(n) {
              return e(n) ? a.a.createElement(t, n) : null;
            };
          };
        },
        St = Object(ht.a)(
          ft(function(e) {
            return e.authenticatedUsername;
          }),
          bt(
            function(e) {
              return e.userSubscriptions.includes(e.subredditTitle);
            },
            function(e) {
              var t = e.makeSubscriptionRequest,
                n = e.subredditTitle;
              return a.a.createElement(
                dt.a,
                {
                  className: "subscribe-button",
                  onClick: function() {
                    return t(n, "unsub");
                  }
                },
                "UNSUBSCRIBE"
              );
            }
          )
        )(function(e) {
          var t = e.makeSubscriptionRequest,
            n = e.subredditTitle;
          return a.a.createElement(
            dt.a,
            {
              className: "subscribe-button",
              onClick: function() {
                return t(n, "sub");
              }
            },
            "SUBSCRIBE"
          );
        }),
        vt = Object(c.b)(
          function(e) {
            return { authenticatedUsername: j(e), userSubscriptions: R(e) };
          },
          function(e) {
            return {
              makeSubscriptionRequest: function(t, n) {
                return e(it(t, n));
              }
            };
          }
        )(function(e) {
          var t = e.authenticatedUsername,
            n = e.userSubscriptions,
            r = e.subredditTitle,
            o = e.makeSubscriptionRequest;
          return a.a.createElement(St, {
            authenticatedUsername: t,
            userSubscriptions: n,
            subredditTitle: r,
            makeSubscriptionRequest: o
          });
        }),
        gt = Object(ut.a)(function(e) {
          var t = e.subredditTitle,
            n = e.description,
            r = e.authenticatedUsername,
            o = e.showUserAuthRegisterModal,
            s = e.history;
          return a.a.createElement(
            "div",
            { className: "sidebar-content" },
            a.a.createElement(
              "p",
              { className: "sidebar-header" },
              "SUBREDDIT DETAILS"
            ),
            a.a.createElement(
              "div",
              { className: "title" },
              a.a.createElement("h2", null, "r/", t)
            ),
            a.a.createElement("div", { className: "description" }, n),
            a.a.createElement(vt, { subredditTitle: t }),
            a.a.createElement(
              dt.a,
              {
                id: "create-post-button",
                className: "sidebar-button",
                onClick: function() {
                  return r ? s.push("/r/".concat(t, "/createPost")) : o();
                }
              },
              "CREATE POST"
            )
          );
        }),
        yt = Object(c.b)(
          function(e) {
            return { subredditData: C(e), authenticatedUsername: j(e) };
          },
          function(e) {
            return {
              showUserAuthRegisterModal: function() {
                return e(Ze("register"));
              }
            };
          }
        )(function(e) {
          var t = e.subredditData,
            n = t.title,
            r = t.description,
            o = t.loading,
            s = e.showUserAuthRegisterModal,
            c = e.authenticatedUsername;
          return a.a.createElement(gt, {
            subredditTitle: n,
            description: r,
            loading: o,
            showUserAuthRegisterModal: s,
            authenticatedUsername: c
          });
        }),
        Ot = n(551),
        Tt = (n(331),
        function() {
          return a.a.createElement(
            "div",
            null,
            a.a.createElement(
              Ot.a,
              null,
              a.a.createElement(
                Ot.a.Body,
                { id: "pulse-loader-panel-body" },
                a.a.createElement(mt.PulseLoader, {
                  className: "panel-clip-loader",
                  color: "#BFEFFF"
                })
              )
            )
          );
        }),
        Ct = function(e) {
          var t = e.panelNumber,
            n = Object(Z.a)(Array(t).keys()).map(function(e) {
              return a.a.createElement(Tt, { key: e });
            });
          return a.a.createElement("ul", null, n);
        };
      Ct.defaultProps = { panelNumber: 5 };
      var _t = Ct,
        Ut = (n(347),
        function() {
          return a.a.createElement(
            "div",
            { className: "sidebar-loader-container" },
            a.a.createElement(mt.PulseLoader, { color: "#BFEFFF" })
          );
        }),
        jt = (n(349),
        function() {
          return a.a.createElement(
            "div",
            { className: "block-loader-container" },
            a.a.createElement(mt.PulseLoader, { color: "#BFEFFF" })
          );
        }),
        Rt = (n(351),
        Object(ut.a)(function(e) {
          var t = e.skinny,
            n = e.primaryComponent,
            r = e.loading,
            o = e.match.params.subredditTitle,
            s = void 0 === o ? "Home" : o,
            c = Object(B.a)(e, [
              "skinny",
              "primaryComponent",
              "loading",
              "match"
            ]),
            i = t ? "skinny-container" : "",
            l = bt(function(e) {
              return e.loading;
            }, Ut)(yt),
            u = O(s)
              ? null
              : a.a.createElement(
                  "div",
                  { className: "subreddit-header-bar" },
                  a.a.createElement(
                    "div",
                    { id: "subreddit-header-bar-title" },
                    "r/",
                    s
                  )
                );
          return a.a.createElement(
            "div",
            { className: "subreddit-container" },
            u,
            a.a.createElement(
              "div",
              { className: "subreddit-content " + i },
              a.a.createElement(
                "div",
                { className: "primary-container" },
                n(c)
              ),
              a.a.createElement(
                "div",
                { className: "sidebar-container" },
                a.a.createElement(l, { loading: r })
              )
            )
          );
        })),
        At = (function(e) {
          function t() {
            return (
              Object(we.a)(this, t),
              Object(Le.a)(this, Object(Me.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props.match.params.subredditTitle || "home";
                  this.props.fetchSubDetail(e);
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.match.params.subredditTitle || "home";
                  this.props.match.params.subredditTitle !==
                    e.match.params.subredditTitle &&
                    this.props.fetchSubDetail(t);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.subredditData,
                    n = t.title,
                    r = t.description,
                    o = t.pseudo,
                    s = t.loading,
                    c = e.primaryComponent,
                    i = e.skinny;
                  return a.a.createElement(Rt, {
                    title: n,
                    description: r,
                    pseudo: o,
                    loading: s,
                    primaryComponent: c,
                    skinny: i
                  });
                }
              }
            ]),
            t
          );
        })(r.Component),
        kt = Object(c.b)(
          function(e) {
            return { subredditData: C(e) };
          },
          function(e) {
            return {
              fetchSubDetail: function(t) {
                return e(st(t));
              },
              makeSubscriptionRequest: function(t, n) {
                return e(it(t, n));
              }
            };
          }
        )(At),
        Pt = n(552),
        It = n(547),
        Dt = n(92),
        wt = (n(132), n(542)),
        Nt = n(543),
        Lt = n(98),
        Mt = function(e) {
          var t = e.subscribed.map(function(e) {
            return a.a.createElement(
              Lt.LinkContainer,
              { key: e.pk, exact: !0, to: "/r/" + e.title },
              a.a.createElement(wt.a, { eventKey: e.pk }, e.title)
            );
          });
          return a.a.createElement(
            Nt.a,
            {
              className: "feed-dropdown",
              eventKey: 3,
              title: "feed",
              id: "basic-nav-dropdown"
            },
            a.a.createElement(
              Lt.LinkContainer,
              { exact: !0, to: "/" },
              a.a.createElement(wt.a, { eventKey: 3.1 }, "Home")
            ),
            a.a.createElement(
              Lt.LinkContainer,
              { exact: !0, to: "/r/popular" },
              a.a.createElement(wt.a, { eventKey: 3.2 }, "Popular")
            ),
            a.a.createElement(
              Lt.LinkContainer,
              { exact: !0, to: "/r/all" },
              a.a.createElement(wt.a, { eventKey: 3.3 }, "All")
            ),
            a.a.createElement(wt.a, { divider: !0, eventKey: 3.4 }),
            t
          );
        },
        Ht = n(32),
        Bt = n.n(Ht),
        Ft = n(90),
        qt = n(22),
        xt = n(544),
        Qt = n(545),
        Vt = n(554),
        Gt = n(546),
        Kt = function(e) {
          var t = e.id,
            n = e.label,
            r = e.help,
            o = Object(B.a)(e, ["id", "label", "help"]);
          return a.a.createElement(
            xt.a,
            { controlId: t },
            a.a.createElement(Qt.a, null, n),
            a.a.createElement(Vt.a, o, r && a.a.createElement(Gt.a, null, r))
          );
        },
        Wt = (n(365),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(we.a)(this, t),
              ((n = Object(Le.a)(
                this,
                Object(Me.a)(t).call(this, e)
              )).handleChange = function(e) {
                n.setState({ query: e.target.value });
              }),
              (n.state = { query: "" }),
              (n.handleSearchSubmit = n.handleSearchSubmit.bind(
                Object(qt.a)(Object(qt.a)(n))
              )),
              n
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "handleSearchSubmit",
                value: (function() {
                  var e = Object(Ft.a)(
                    Bt.a.mark(function e(t) {
                      return Bt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  t.preventDefault(),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  this.props.handleSearchRequest(
                                    this.state.query
                                  )
                                );
                              case 4:
                                e.next = 9;
                                break;
                              case 6:
                                (e.prev = 6),
                                  (e.t0 = e.catch(1)),
                                  this.forceUpdate();
                              case 9:
                                this.setState({ query: "" }),
                                  this.props.history.push("/search");
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 6]]
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.loading;
                  e.error;
                  return a.a.createElement(
                    Pt.a.Form,
                    { pullLeft: !0 },
                    a.a.createElement(
                      "form",
                      { onSubmit: this.handleSearchSubmit },
                      a.a.createElement(Kt, {
                        id: "search-bar-input",
                        type: "text",
                        placeholder: "Search...",
                        name: "search",
                        onChange: this.handleChange,
                        value: this.state.query
                      }),
                      a.a.createElement(
                        pt,
                        { type: "submit", loading: t },
                        "Search"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component)),
        zt = Object(ut.a)(Wt),
        Jt = function(e) {
          return {
            type: "API_SEARCH",
            types: {
              request: "SEARCH_REQUEST",
              success: "SEARCH_SUCCESS",
              failure: "SEARCH_FAILURE"
            },
            callAPI: function() {
              return (function(e) {
                return Fe.a
                  .get("https://rereddit.api.clintdunn.org/search/", {
                    params: { q: e }
                  })
                  .then(function(e) {
                    return e.data;
                  });
              })(e);
            }
          };
        },
        Xt = Object(c.b)(null, function(e) {
          return {
            handleSearchRequest: function(t) {
              return e(
                (function(e) {
                  return { type: "SET_SEARCH_QUERY", query: e };
                })(t)
              );
            }
          };
        })(function(e) {
          var t = e.handleSearchRequest;
          return a.a.createElement(zt, { handleSearchRequest: t });
        }),
        Yt = function(e) {
          var t = e.children,
            n = e.subscribed;
          return a.a.createElement(
            Pt.a,
            { inverse: !0, fixed: "true", fluid: !0 },
            a.a.createElement(
              Pt.a.Header,
              null,
              a.a.createElement(
                Pt.a.Brand,
                null,
                a.a.createElement(Dt.a, { exact: !0, to: "/" }, "reReddit")
              )
            ),
            a.a.createElement(
              It.a,
              null,
              a.a.createElement(Mt, { subscribed: n })
            ),
            a.a.createElement(Xt, null),
            t
          );
        },
        $t = n(548),
        Zt = (n(367),
        function(e) {
          var t = e.children,
            n = e.onClick,
            r = e.inverted ? "user-button-inverted" : "user-button-default";
          return a.a.createElement(
            "div",
            null,
            a.a.createElement(
              dt.a,
              { onClick: n, id: r, className: "user-button" },
              t
            )
          );
        }),
        en = (n(182),
        function(e) {
          var t = e.showModal;
          e.middleWareTest;
          return a.a.createElement(
            It.a,
            { pullRight: !0, className: "right-user-links" },
            a.a.createElement(
              $t.a,
              { eventKey: 4 },
              a.a.createElement(
                Zt,
                {
                  onClick: function() {
                    return t("login");
                  },
                  inverted: !0
                },
                "login"
              )
            ),
            a.a.createElement(
              $t.a,
              { eventKey: 5 },
              a.a.createElement(
                Zt,
                {
                  onClick: function() {
                    return t("register");
                  }
                },
                "sign up"
              )
            )
          );
        }),
        tn = function(e) {
          var t = e.username,
            n = e.handleLogout;
          return a.a.createElement(
            It.a,
            { pullRight: !0, className: "auth-dropdown-container" },
            a.a.createElement(
              Nt.a,
              {
                className: "user-dropdown",
                eventKey: 3,
                title: t,
                id: "user-nav-dropdown"
              },
              a.a.createElement(wt.a, { eventKey: 3.1 }, "Action"),
              a.a.createElement(wt.a, { eventKey: 3.2 }, "Another action"),
              a.a.createElement(wt.a, { eventKey: 3.3 }, "Something else here"),
              a.a.createElement(wt.a, { divider: !0 }),
              a.a.createElement(
                wt.a,
                {
                  eventKey: 3.4,
                  onClick: function() {
                    return n();
                  }
                },
                "Logout"
              )
            )
          );
        },
        nn = function(e) {
          var t = e.showModal,
            n = e.username,
            r = e.handleLogout;
          e.middleWareTest;
          return n
            ? a.a.createElement(tn, { username: n, handleLogout: r })
            : a.a.createElement(en, { showModal: t });
        },
        rn = (function(e) {
          function t() {
            var e, n;
            Object(we.a)(this, t);
            for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
              o[s] = arguments[s];
            return (
              ((n = Object(Le.a)(
                this,
                (e = Object(Me.a)(t)).call.apply(e, [this].concat(o))
              )).render = function() {
                return a.a.createElement(
                  Yt,
                  { subscribed: n.props.subscribed },
                  a.a.createElement(nn, {
                    showModal: n.props.showModal,
                    username: n.props.username,
                    handleLogout: n.props.handleLogout
                  })
                );
              }),
              n
            );
          }
          return Object(He.a)(t, e), t;
        })(r.Component),
        an = Object(c.b)(
          function(e) {
            return {
              username: e.userAuth.username,
              subscribed: e.userAuth.subs
            };
          },
          function(e) {
            return {
              showModal: function(t) {
                return e(Ze(t));
              },
              handleLogout: function() {
                return e(at());
              }
            };
          },
          null,
          { pure: !1 }
        )(rn),
        on = n(553),
        sn = (n(370), n(549)),
        cn = n(37),
        ln = (n(372),
        function(e) {
          return a.a.createElement(
            sn.a,
            { bsStyle: "success", className: "alert-message" },
            a.a.createElement(cn.c, { color: "green", size: "3em" }),
            a.a.createElement(
              "p",
              { className: "alert-text", id: "success-text", align: "center" },
              e.children
            )
          );
        }),
        un = function(e) {
          return a.a.createElement(
            sn.a,
            { bsStyle: "danger", className: "alert-message" },
            a.a.createElement(cn.g, { color: "red", size: "3em" }),
            a.a.createElement(
              "p",
              { className: "alert-text", id: "error-text", align: "center" },
              e.children
            )
          );
        },
        dn = ft(function(e) {
          return e.children;
        })(un),
        mn = function(e) {
          var t,
            n = e.handleHide,
            r = e.title,
            o = e.formComponent,
            s = e.messageProps,
            c = s.errorMessage,
            i = s.successMessage,
            l = null;
          return (
            i && (l = a.a.createElement(ln, null, i)),
            c && (t = a.a.createElement(un, null, c)),
            a.a.createElement(
              on.a,
              { onHide: n, show: !0 },
              a.a.createElement(
                on.a.Header,
                { closeButton: !0 },
                a.a.createElement(on.a.Title, null, r)
              ),
              a.a.createElement(on.a.Body, null, l, t, o)
            )
          );
        },
        pn = (n(388),
        function(e) {
          var t = e.bsStyle,
            n = e.handleClick,
            r = e.loading,
            o = e.children,
            s = e.type,
            c = r
              ? a.a.createElement(mt.CircleLoader, {
                  size: 20,
                  className: "display: inline-block;"
                })
              : null;
          return a.a.createElement(
            "div",
            { id: "single-button" },
            a.a.createElement(
              dt.a,
              {
                bsStyle: t || null,
                className: "login-buttons",
                onClick: function() {
                  return n();
                },
                disabled: r,
                type: s || "button"
              },
              c || o
            )
          );
        }),
        En = (n(390),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(we.a)(this, t),
              ((n = Object(Le.a)(
                this,
                Object(Me.a)(t).call(this, e)
              )).handleChange = function(e) {
                n.setState(Object(F.a)({}, e.target.name, e.target.value));
              }),
              (n.state = { username: "", password: "" }),
              (n.handleChange = n.handleChange.bind(
                Object(qt.a)(Object(qt.a)(n))
              )),
              (n.handleSubmit = n.handleSubmit.bind(
                Object(qt.a)(Object(qt.a)(n))
              )),
              n
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "handleSubmit",
                value: (function() {
                  var e = Object(Ft.a)(
                    Bt.a.mark(function e() {
                      return Bt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.props.handleLogin(
                                    this.state.username,
                                    this.state.password
                                  )
                                );
                              case 3:
                                this.props.history.push(""), (e.next = 9);
                                break;
                              case 6:
                                (e.prev = 6),
                                  (e.t0 = e.catch(0)),
                                  this.forceUpdate();
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 6]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  return a.a.createElement(
                    "div",
                    { id: "login-form-container" },
                    a.a.createElement(
                      "form",
                      { onSubmit: this.handleSubmit },
                      a.a.createElement(Kt, {
                        id: "formControlsText",
                        label: "Username:",
                        type: "text",
                        value: this.state.username,
                        placeholder: "username",
                        name: "username",
                        onChange: this.handleChange,
                        autoFocus: !0
                      }),
                      a.a.createElement(Kt, {
                        id: "formControlsPassword",
                        label: "Password:",
                        type: "password",
                        value: this.state.password,
                        placeholder: "password",
                        name: "password",
                        onChange: this.handleChange
                      }),
                      a.a.createElement(
                        "div",
                        { id: "button-container" },
                        a.a.createElement(pn, {
                          bsStyle: "primary",
                          handleClick: this.handleSubmit,
                          loading: this.props.loading,
                          children: "Login",
                          type: "submit"
                        }),
                        a.a.createElement(pn, {
                          bsStyle: "danger",
                          handleClick: this.props.handleHide,
                          loading: this.props.loading,
                          children: "Cancel"
                        })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component)),
        hn = Object(ut.a)(En),
        bn = Object(c.b)(
          function(e) {
            return { loading: e.userAuth.loading };
          },
          function(e) {
            return {
              handleHide: function() {
                return e({ type: "HIDE_USER_AUTH_MODAL" });
              },
              handleLogin: function(t, n) {
                return e(nt(t, n));
              }
            };
          }
        )(function(e) {
          var t = e.handleHide,
            n = e.handleLogin,
            r = e.loading,
            o = e.messageProps;
          return a.a.createElement(mn, {
            handleHide: t,
            title: "Login",
            messageProps: o,
            formComponent: a.a.createElement(hn, {
              handleLogin: n,
              handleHide: t,
              loading: r
            })
          });
        }),
        fn = (n(392),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(we.a)(this, t),
              ((n = Object(Le.a)(
                this,
                Object(Me.a)(t).call(this, e)
              )).handleChange = function(e) {
                n.setState(Object(F.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function() {
                n.props.handleRegister(
                  n.state.username,
                  n.state.password,
                  n.state.email
                );
              }),
              (n.render = function() {
                return a.a.createElement(
                  "div",
                  { id: "register-form-container" },
                  a.a.createElement(
                    "form",
                    { onSubmit: n.handleSubmit },
                    a.a.createElement(Kt, {
                      id: "formControlsText",
                      label: "Username:",
                      type: "text",
                      value: n.state.username,
                      placeholder: "username",
                      name: "username",
                      onChange: n.handleChange,
                      autoFocus: !0
                    }),
                    a.a.createElement(Kt, {
                      id: "formControlsPassword",
                      label: "Password:",
                      type: "password",
                      value: n.state.password,
                      placeholder: "password",
                      name: "password",
                      onChange: n.handleChange
                    }),
                    a.a.createElement(Kt, {
                      id: "formControlsEmail",
                      label: "Email:",
                      type: "email",
                      value: n.state.email,
                      placeholder: "email",
                      name: "email",
                      onChange: n.handleChange
                    }),
                    a.a.createElement(
                      "div",
                      { id: "button-container" },
                      a.a.createElement(pn, {
                        bsStyle: "primary",
                        handleClick: n.handleSubmit,
                        loading: n.props.loading,
                        children: "Register",
                        type: "submit"
                      }),
                      a.a.createElement(pn, {
                        bsStyle: "danger",
                        handleClick: n.props.handleHide,
                        loading: n.props.loading,
                        children: "Cancel"
                      })
                    )
                  )
                );
              }),
              (n.handleChange = n.handleChange.bind(
                Object(qt.a)(Object(qt.a)(n))
              )),
              (n.state = { username: "", password: "", email: "" }),
              n
            );
          }
          return Object(He.a)(t, e), t;
        })(r.Component)),
        Sn = Object(c.b)(
          function(e) {
            return { loading: e.userAuth.loading };
          },
          function(e) {
            return {
              handleHide: function() {
                return e({ type: "HIDE_USER_AUTH_MODAL" });
              },
              handleRegister: function(t, n, r) {
                return e(rt(t, n, r));
              }
            };
          }
        )(function(e) {
          var t = e.handleHide,
            n = e.handleRegister,
            r = e.loading,
            o = e.messageProps;
          return a.a.createElement(mn, {
            handleHide: t,
            title: "Register",
            messageProps: o,
            formComponent: a.a.createElement(fn, {
              handleRegister: n,
              handleHide: t,
              loading: r
            })
          });
        }),
        vn = Object(c.b)(function(e) {
          return {
            displayType: e.userAuthModal.displayType,
            messageProps: {
              errorMessage: e.userAuthModal.errorMessage,
              successMessage: e.userAuthModal.successMessage
            }
          };
        })(function(e) {
          var t = e.displayType,
            n = e.messageProps;
          switch (t) {
            case "login":
              return a.a.createElement(bn, { messageProps: n });
            case "register":
              return a.a.createElement(Sn, { messageProps: n });
            default:
              return null;
          }
        }),
        gn = n(218),
        yn = n.n(gn),
        On = (n(497),
        n(499),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(we.a)(this, t),
              ((n = Object(Le.a)(
                this,
                Object(Me.a)(t).call(this, e)
              )).handleSubmitClick = function(e) {
                return n.setState({ editorHtml: "" }), n.props.handleSubmit(e);
              }),
              (n.state = { editorHtml: e.initialValue || "" }),
              (n.formats = [
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "code"
              ]),
              (n.modules = {
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "blockquote",
                    "code"
                  ],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" }
                  ],
                  ["clean"]
                ]
              }),
              (n.handleChange = n.handleChange.bind(
                Object(qt.a)(Object(qt.a)(n))
              )),
              (n.quillNode = a.a.createRef()),
              n
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.focusOnEditor || this.quillNode.current.focus();
                }
              },
              {
                key: "handleChange",
                value: function(e) {
                  this.setState({ editorHtml: e });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.placeholder,
                    o = t.usage,
                    s = t.onBlur,
                    c = t.loading,
                    i = "Submit";
                  switch (o) {
                    case "create":
                      i = "Post";
                      break;
                    case "update":
                      i = "Edit";
                  }
                  return a.a.createElement(
                    r.Fragment,
                    null,
                    a.a.createElement(yn.a, {
                      value: this.state.editorHtml,
                      onChange: this.handleChange,
                      placeholder: n || "What are your thoughts?",
                      modules: this.modules,
                      formats: this.formats,
                      ref: this.quillNode,
                      onBlur: s
                    }),
                    a.a.createElement(
                      pt,
                      {
                        onClick: function() {
                          return e.handleSubmitClick(e.state.editorHtml);
                        },
                        className: "submit-button",
                        loading: c
                      },
                      i
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component)),
        Tn = (n(501),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(we.a)(this, t),
              ((n = Object(Le.a)(
                this,
                Object(Me.a)(t).call(this, e)
              )).handleTitleChange = function(e) {
                return n.setState({ title: e.target.value });
              }),
              (n.state = { title: "" }),
              (n.handleSubmit = n.handleSubmit.bind(
                Object(qt.a)(Object(qt.a)(n))
              )),
              n
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "handleSubmit",
                value: (function() {
                  var e = Object(Ft.a)(
                    Bt.a.mark(function e(t) {
                      return Bt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.props.handleCreatePost(
                                    this.state.title,
                                    t,
                                    this.props.subredditTitle
                                  )
                                );
                              case 3:
                                e.sent,
                                  this.props.history.replace(
                                    "/r/".concat(this.props.subredditTitle)
                                  ),
                                  (e.next = 10);
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e.catch(0)),
                                  this.forceUpdate();
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 7]]
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = (e.errorMessage,
                    e.loading,
                    ft(function(e) {
                      return e.children;
                    })(un));
                  return a.a.createElement(
                    "div",
                    { className: "create-post-container" },
                    a.a.createElement(
                      "div",
                      { className: "alert-message-container" },
                      a.a.createElement(t, {
                        children: this.props.errorMessage
                      })
                    ),
                    a.a.createElement(
                      "form",
                      null,
                      a.a.createElement(
                        "div",
                        { className: "title-input-container" },
                        a.a.createElement(Kt, {
                          id: "create-post-title",
                          placeholder: "Title",
                          type: "text",
                          value: this.state.title,
                          onChange: this.handleTitleChange,
                          name: "username"
                        })
                      ),
                      a.a.createElement(On, {
                        handleCommentSubmit: this.handleSubmit,
                        usage: "create",
                        placeholder: "Text (optional)"
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component)),
        Cn = Object(ut.a)(Tn),
        _n = function(e, t, n, r) {
          var a = { orderby: t, username: n };
          return Fe.a
            .get(
              (function(e) {
                return ze + "subreddit-list/" + e + "/";
              })(e),
              Object(g.a)({ params: a }, Xe(r))
            )
            .then(function(e) {
              return e.data;
            });
        },
        Un = function(e, t, n, r) {
          var a = { title: e, body: t };
          return Fe.a
            .post(
              (function(e) {
                return Ke(e) + "post/";
              })(n),
              a,
              Xe(r)
            )
            .then(function(e) {
              return e.data;
            });
        },
        jn = function(e, t) {
          return function(n, r) {
            return n({
              type: "API_CREATE_POST",
              types: {
                request: "UPDATE_POST_REQUEST",
                success: "UPDATE_POST_SUCCESS",
                failure: "UPDATE_POST_FAILURE"
              },
              callAPI: function() {
                return (function(e, t, n) {
                  var r = { body: t };
                  return Fe.a.patch(Je(e), r, Xe(n)).then(function(e) {
                    return e.data;
                  });
                })(e, t, r().userAuth.token);
              }
            });
          };
        },
        Rn = function(e) {
          return function(t, n) {
            return t({
              type: "API_DELETE_POST",
              types: {
                request: An(e),
                success: "DELETE_POST_SUCCESS",
                failure: "DELETE_POST_FAILURE"
              },
              callAPI: function() {
                return (function(e, t) {
                  return Fe.a.delete(Je(e), Xe(t)).then(function(e) {
                    return e.data;
                  });
                })(e, n().userAuth.token);
              }
            });
          };
        },
        An = function(e) {
          return function(t) {
            return t({ type: "DELETE_POST_REQUEST", pk: e });
          };
        },
        kn = function(e) {
          return {
            type: "API_POST_DETAIL",
            types: {
              request: "FETCH_POST_DETAIL_REQUEST",
              success: "FETCH_POST_DETAIL_SUCCESS",
              failure: "FETCH_POST_DETAIL_FAILURE"
            },
            callAPI: function() {
              return (function(e) {
                return Fe.a.get(Je(e)).then(function(e) {
                  return e.data;
                });
              })(e);
            }
          };
        },
        Pn = (function(e) {
          function t() {
            return (
              Object(we.a)(this, t),
              Object(Le.a)(this, Object(Me.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "render",
                value: function() {
                  return a.a.createElement(Cn, this.props);
                }
              }
            ]),
            t
          );
        })(r.Component),
        In = Object(c.b)(
          function(e) {
            return {
              errorMessage: ce(e),
              loading: se(e),
              subredditTitle: T(e)
            };
          },
          function(e) {
            return {
              handleCreatePost: function(t, n, r) {
                return e(
                  (function(e, t, n) {
                    return function(r, a) {
                      return r({
                        type: "API_CREATE_POST",
                        types: {
                          request: "CREATE_POST_REQUEST",
                          success: "CREATE_POST_SUCCESS",
                          failure: "CREATE_POST_FAILURE"
                        },
                        callAPI: function() {
                          return Un(e, t, n, a().userAuth.token);
                        }
                      });
                    };
                  })(t, n, r)
                );
              }
            };
          }
        )(Pn),
        Dn = n(87),
        wn = (n(503),
        (function(e) {
          function t() {
            var e, n;
            Object(we.a)(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((n = Object(Le.a)(
                this,
                (e = Object(Me.a)(t)).call.apply(e, [this].concat(a))
              )).upvotedStyle = { color: "#cc3700" }),
              (n.downvotedStyle = { color: "#8DA8FF" }),
              n
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.upvotes,
                    n = e.displayState,
                    r = e.handleVote;
                  return a.a.createElement(
                    "div",
                    { className: "vote-container" },
                    a.a.createElement(
                      "div",
                      { className: "voter-arrow upvoter" },
                      a.a.createElement(
                        "span",
                        {
                          style: 1 === n ? this.upvotedStyle : {},
                          onClick: function() {
                            return r(1);
                          }
                        },
                        a.a.createElement(cn.b, null)
                      )
                    ),
                    a.a.createElement(
                      "div",
                      {
                        className: "vote-count",
                        style:
                          1 === n
                            ? this.upvotedStyle
                            : -1 === n
                            ? this.downvotedStyle
                            : {}
                      },
                      t
                    ),
                    a.a.createElement(
                      "div",
                      { className: "voter-arrow downvoter" },
                      a.a.createElement(
                        "span",
                        {
                          style: -1 === n ? this.downvotedStyle : {},
                          onClick: function() {
                            return r(-1);
                          }
                        },
                        a.a.createElement(cn.a, null)
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component)),
        Nn = function(e) {
          return function(t, n) {
            return t({
              type: "API_VOTE",
              types: {
                request: "VOTE_REQUEST",
                success: Ln,
                failure: "VOTE_FAILURE"
              },
              callAPI: function() {
                return (function(e, t) {
                  var n = e.itemType,
                    r = e.itemPk,
                    a = e.voteType,
                    o = null;
                  "comment" === n
                    ? (o = "t1_".concat(r))
                    : "post" === n && (o = "t2_".concat(r));
                  var s = { vote_type: a, item_fn: o };
                  return Fe.a.post(xe, s, Xe(t)).then(function(e) {
                    return e.data;
                  });
                })(e, n().userAuth.token);
              }
            });
          };
        },
        Ln = function(e, t, n) {
          if (e.hasOwnProperty("comment"))
            return n({ type: "COMMENT_VOTE_SUCCESS", data: e });
          if (e.hasOwnProperty("post"))
            return n({ type: "POST_VOTE_SUCCESS", data: e });
          throw new ReferenceError(
            "Upvote is of unknown type",
            "actions/Voter/index.js",
            41
          );
        },
        Mn = Object(c.b)(null, function(e, t) {
          return {
            handleVote: function(n) {
              return e(
                Nn({ voteType: n, itemType: t.itemType, itemPk: t.itemPk })
              );
            }
          };
        })(function(e) {
          var t = e.voteDisplayState,
            n = e.handleVote,
            r = e.upvotes;
          return a.a.createElement(wn, {
            displayState: t,
            handleVote: n,
            upvotes: r
          });
        }),
        Hn = n(541),
        Bn = (n(505),
        function(e) {
          var t = e.children;
          return a.a.createElement(
            Hn.a,
            { id: "ellipsis-dropdown" },
            a.a.createElement(
              Hn.a.Toggle,
              { noCaret: !0, className: "toggle-button" },
              a.a.createElement(cn.e, null)
            ),
            a.a.createElement(
              Hn.a.Menu,
              { className: "ellipsis-dropdown-menu" },
              t
            )
          );
        }),
        Fn = n(550),
        qn = n(555),
        xn = (n(507),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(we.a)(this, t),
              ((n = Object(Le.a)(
                this,
                Object(Me.a)(t).call(this, e)
              )).toggleTooltip = function() {
                n.setState({ showTooltip: !n.state.showTooltip });
              }),
              (n.copyToClipboard = function(e) {
                n.copyNode.current.select(),
                  document.execCommand("copy"),
                  n.toggleTooltip(),
                  setTimeout(n.toggleTooltip, 4e3);
              }),
              (n.state = { showTooltip: !1 }),
              (n.copyNode = a.a.createRef()),
              (n.copyTooltip = a.a.createElement(
                Fn.a,
                { id: "copy-tooltip" },
                "Copied Link"
              )),
              n
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.shareUrl;
                  return a.a.createElement(
                    r.Fragment,
                    null,
                    a.a.createElement(
                      qn.a,
                      {
                        placement: "bottom",
                        overlay: this.copyTooltip,
                        trigger: "focus",
                        delayHide: 4e3
                      },
                      a.a.createElement(
                        dt.a,
                        {
                          bsSize: "xsmall",
                          className: "share-button",
                          onClick: this.copyToClipboard
                        },
                        a.a.createElement(cn.f, null),
                        " Share"
                      )
                    ),
                    a.a.createElement(
                      "form",
                      null,
                      a.a.createElement("input", {
                        className: "hidden-copy-input",
                        readOnly: !0,
                        ref: this.copyNode,
                        value: e,
                        "aria-hidden": "true"
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component)),
        Qn = (n(517),
        (function(e) {
          function t() {
            var e, n;
            Object(we.a)(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((n = Object(Le.a)(
                this,
                (e = Object(Me.a)(t)).call.apply(e, [this].concat(a))
              )).handlePanelClick = function(e) {
                var t = n.props,
                  r = t.subredditTitle,
                  a = t.pk,
                  o = t.history;
                e.target instanceof HTMLDivElement &&
                  o.push("/r/".concat(r, "/postDetail/").concat(a));
              }),
              n
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.upvotes,
                    n = e.pk,
                    r = e.title,
                    o = e.subredditTitle,
                    s = e.posterUsername,
                    c = e.authUsername,
                    i = e.created,
                    l = e.voteDisplayState,
                    u = e.handleDeletePost,
                    d = (e.history,
                    ft(function(e) {
                      return e.showEllipsis;
                    })(Bn));
                  return a.a.createElement(
                    "div",
                    {
                      className: "post-segment-panel",
                      name: "postPanel",
                      onClick: this.handlePanelClick
                    },
                    a.a.createElement(Mn, {
                      upvotes: t,
                      voteDisplayState: l || 0,
                      itemType: "post",
                      itemPk: n
                    }),
                    a.a.createElement(
                      "div",
                      { className: "post-segment-text-container" },
                      a.a.createElement(
                        "div",
                        { className: "post-segment-title" },
                        a.a.createElement(
                          Dn.a,
                          {
                            id: "post-title",
                            to: "/r/" + o + "/postDetail/" + n
                          },
                          r
                        )
                      ),
                      a.a.createElement(
                        "div",
                        { className: "post-segment-info" },
                        a.a.createElement(
                          "strong",
                          null,
                          a.a.createElement(
                            Dn.a,
                            { to: "/r/".concat(o) },
                            "r/",
                            o
                          )
                        ),
                        "- posted by:",
                        a.a.createElement("a", { href: "#" }, " u/", s, " "),
                        i
                      ),
                      a.a.createElement(
                        "div",
                        { className: "post-segment-links" },
                        a.a.createElement(
                          Dn.a,
                          {
                            to: "/r/"
                              .concat(o, "/postDetail/")
                              .concat(n, "/comments")
                          },
                          a.a.createElement(
                            dt.a,
                            { bsSize: "xsmall", className: "post-buttons" },
                            "Comments"
                          )
                        ),
                        a.a.createElement(xn, {
                          shareUrl: ""
                            .concat(window.location, "/postDetail/")
                            .concat(n)
                        }),
                        a.a.createElement(
                          d,
                          { showEllipsis: c === s },
                          a.a.createElement(
                            wt.a,
                            { eventKey: 1, onSelect: u },
                            "delete"
                          ),
                          a.a.createElement(
                            wt.a,
                            {
                              eventKey: 2,
                              onSelect: function() {
                                return null;
                              }
                            },
                            "edit"
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component)),
        Vn = Object(ut.a)(Qn),
        Gn = Object(c.b)(
          function(e, t) {
            var n = t.postPk;
            t.usage;
            return { post: ne(e, n), authUsername: j(e) };
          },
          function(e, t) {
            return {
              handleDeletePost: function() {
                return e(Rn(t.postPk));
              }
            };
          }
        )(function(e) {
          var t = e.post,
            n = e.handleDeletePost,
            r = e.authUsername,
            o = (e.usage, t.upvotes),
            s = t.pk,
            c = t.title,
            i = t.subredditTitle,
            l = t.posterUsername,
            u = t.created,
            d = t.voteDisplayState;
          return a.a.createElement(Vn, {
            upvotes: o,
            pk: s,
            title: c,
            subredditTitle: i,
            posterUsername: l,
            authUsername: r,
            created: u,
            voteDisplayState: d,
            handleDeletePost: n
          });
        }),
        Kn = function() {
          return a.a.createElement(
            "div",
            { className: "empty-list-content" },
            a.a.createElement("h2", null, "Such Empty!")
          );
        },
        Wn = (n(519),
        Object(ut.a)(function(e) {
          var t,
            n = e.loading,
            r = e.error,
            o = e.allPosts;
          if (r) return a.a.createElement(un, null, r);
          if (n) t = a.a.createElement(_t, { panelNumber: 8 });
          else if (0 === o.length) t = a.a.createElement(Kn, null);
          else {
            var s = o.map(function(e) {
              return a.a.createElement(Gn, { postPk: e, key: e });
            });
            t = a.a.createElement("ul", null, s);
          }
          return a.a.createElement("div", { className: "postlist-content" }, t);
        })),
        zn = (function(e) {
          function t() {
            return (
              Object(we.a)(this, t),
              Object(Le.a)(this, Object(Me.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props.match.params.subredditTitle || "home";
                  this.props.fetchPostList(e, "new");
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.match.params.subredditTitle || "home";
                  this.props.match.params.subredditTitle !==
                    e.match.params.subredditTitle &&
                    this.props.fetchPostList(t, "new");
                }
              },
              {
                key: "render",
                value: function() {
                  return a.a.createElement(Wn, this.props);
                }
              }
            ]),
            t
          );
        })(r.Component),
        Jn = Object(ut.a)(
          Object(c.b)(
            function(e) {
              return {
                loading: e.postList.loading,
                error: e.postList.error,
                allPosts: e.postList.allPosts
              };
            },
            function(e) {
              return {
                fetchPostList: function(t, n) {
                  return e(
                    (function(e, t) {
                      return function(n, r) {
                        return n({
                          type: "API_SUB_POST_LIST",
                          types: {
                            request: "FETCH_POST_LIST_REQUEST",
                            success: "FETCH_POST_LIST_SUCCESS",
                            failure: "FETCH_POST_LIST_FAILURE"
                          },
                          callAPI: function() {
                            return _n(e, t, j(r()), r().userAuth.token);
                          }
                        });
                      };
                    })(t, n)
                  );
                }
              };
            }
          )(zn)
        ),
        Xn = (n(207),
        function(e) {
          var t = e.title,
            n = e.poster;
          return a.a.createElement(
            "div",
            { className: "post-info-line" },
            a.a.createElement(
              "div",
              { className: "link-to-sub" },
              a.a.createElement(Dn.a, { to: "/r/".concat(t) }, "r/".concat(t))
            ),
            a.a.createElement("span", { id: "divider" }, "-"),
            a.a.createElement(
              "div",
              { className: "link-to-user" },
              a.a.createElement(
                Dn.a,
                { to: "/u/".concat(n) },
                "Posted by u/".concat(n)
              )
            )
          );
        }),
        Yn = Object(c.b)(
          function(e) {
            return { loading: be(e) };
          },
          function(e, t) {
            return {
              handleSubmit: (function() {
                var n = Object(Ft.a)(
                  Bt.a.mark(function n(r) {
                    return Bt.a.wrap(
                      function(n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.prev = 0), (n.next = 3), e(jn(t.pk, r));
                            case 3:
                              n.next = 7;
                              break;
                            case 5:
                              (n.prev = 5), (n.t0 = n.catch(0));
                            case 7:
                              t.onEditorSubmitSuccess &&
                                t.onEditorSubmitSuccess();
                            case 8:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      this,
                      [[0, 5]]
                    );
                  })
                );
                return function(e) {
                  return n.apply(this, arguments);
                };
              })()
            };
          }
        )(function(e) {
          var t = e.handleSubmit,
            n = e.body,
            r = e.loading;
          return a.a.createElement(On, {
            handleSubmit: t,
            placeholder: n,
            initialValue: n,
            usage: "update",
            loading: r
          });
        }),
        $n = n(222),
        Zn = n(99),
        er = function(e, t) {
          var n = t ? { params: { username: t } } : {};
          return Fe.a
            .get(
              (function(e) {
                return "".concat(Qe, "post/").concat(e, "/");
              })(e),
              n
            )
            .then(function(e) {
              return e.data;
            });
        },
        tr = function(e, t, n) {
          if (0 === e.length)
            return n({
              type: "FETCH_POST_COMMENT_TREES_SUCCESS",
              data: { entities: { comments: {}, posters: {} }, result: [] }
            });
          var r = new Zn.b.Entity("posters", {}, { idAttribute: "pk" }),
            a = new Zn.b.Entity(
              "comments",
              { poster: r },
              { idAttribute: "pk" }
            ),
            o = new Zn.b.Array(a);
          a.define({ children: o });
          var s = Object(Zn.a)(e, o);
          return (
            Object.entries(s.entities.comments).forEach(function(e) {
              var t = Object($n.a)(e, 2),
                n = t[0],
                r = t[1],
                a = r.vote_state,
                o = Object(B.a)(r, ["vote_state"]);
              s.entities.comments[n] = Object(g.a)({}, o, {
                voteDisplayState: a
              });
            }),
            n({ type: "FETCH_POST_COMMENT_TREES_SUCCESS", data: s })
          );
        },
        nr = function(e) {
          return function(t, n) {
            return t({
              type: "API_CREATE_COMMENT",
              types: {
                request: "CREATE_COMMENT_REQUEST",
                success: "CREATE_COMMENT_SUCCESS",
                failure: "CREATE_COMMENT_FAILURE"
              },
              callAPI: function() {
                return (function(e, t) {
                  var n = e.body,
                    r = e.parentPk,
                    a = {
                      body: n,
                      parent_fn: e.rootComment
                        ? "t2_".concat(r)
                        : "t1_".concat(r)
                    };
                  return Fe.a.post(Qe, a, Xe(t)).then(function(e) {
                    return e.data;
                  });
                })(e, n().userAuth.token);
              }
            });
          };
        },
        rr = function(e) {
          return function(t, n) {
            return t({
              type: "API_DELETE_COMMENT",
              types: {
                request: "DELETE_COMMENT_REQUEST",
                success: "DELETE_COMMENT_SUCCESS",
                failure: "DELETE_COMMENT_FAILURE"
              },
              callAPI: function() {
                return (function(e, t) {
                  return Fe.a.delete(Ve(e), Xe(t)).then(function(e) {
                    return e.data;
                  });
                })(e, n().userAuth.token);
              }
            });
          };
        },
        ar = function(e) {
          return function(t, n) {
            return t({
              type: "API_UPDATE_COMMENT",
              types: {
                request: "UPDATE_COMMENT_REQUEST",
                success: "UPDATE_COMMENT_SUCCESS",
                failure: "UPDATE_COMMENT_FAILURE"
              },
              callAPI: function() {
                return (function(e, t) {
                  return Fe.a.patch(Ve(e.pk), e, Xe(t)).then(function(e) {
                    return e.data;
                  });
                })(e, n().userAuth.token);
              }
            });
          };
        },
        or = (n(522),
        n(524),
        Object(c.b)(
          function(e, t) {
            return { focusOnEditor: t.rootComment };
          },
          function(e, t) {
            switch (t.usage) {
              case "create":
                return {
                  handleSubmit: function(n) {
                    return e(
                      nr({
                        body: n,
                        parentPk: t.parentPk,
                        rootComment: t.rootComment
                      })
                    );
                  }
                };
              case "update":
                return {
                  handleSubmit: function(n) {
                    return (
                      t.onEditorSubmit && t.onEditorSubmit(),
                      e(ar({ body: n, pk: t.pk }))
                    );
                  }
                };
              default:
                return {};
            }
          }
        )(function(e) {
          return a.a.createElement(On, e);
        })),
        sr = (n(526),
        function(e) {
          var t = e.posterUsername,
            n = e.upvotes,
            r = e.created,
            o = e.deleted,
            s = !1 ^ n ? "point" : "points",
            c = o
              ? "comment deleted"
              : a.a.createElement(Dn.a, { to: "/" }, "u/".concat(t));
          return a.a.createElement(
            "div",
            { className: "poster-info-container" },
            a.a.createElement("span", null, c),
            a.a.createElement("span", null, o || "".concat(n, " ").concat(s)),
            a.a.createElement("span", null, "-"),
            a.a.createElement("span", null, "created: ".concat(r))
          );
        }),
        cr = (n(528),
        (function(e) {
          function t() {
            return (
              Object(we.a)(this, t),
              Object(Le.a)(this, Object(Me.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.body,
                    n = e.posterUsername,
                    o = e.authUsername,
                    s = (e.pk, e.handleDeleteComment),
                    c = e.handleToggleReplyEditor,
                    i = e.handleToggleUpdateEditor,
                    l = ft(function(e) {
                      return e.authUsername === e.posterUsername;
                    })(Bn);
                  return a.a.createElement(
                    r.Fragment,
                    null,
                    a.a.createElement("div", {
                      className: "comment-body-container",
                      dangerouslySetInnerHTML: { __html: t }
                    }),
                    a.a.createElement(
                      "div",
                      { className: "comment-links" },
                      a.a.createElement(
                        "div",
                        { className: "comment-icon" },
                        a.a.createElement(cn.d, null)
                      ),
                      a.a.createElement(
                        dt.a,
                        {
                          bsSize: "xsmall",
                          className: "comment-buttons",
                          onClick: c
                        },
                        "Reply"
                      ),
                      a.a.createElement(
                        l,
                        { authUsername: o, posterUsername: n },
                        a.a.createElement(
                          wt.a,
                          { eventKey: 2, onSelect: i },
                          "edit"
                        ),
                        a.a.createElement(
                          wt.a,
                          { eventKey: 1, onSelect: s },
                          "delete"
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component)),
        ir = (function(e) {
          function t(e) {
            var n;
            return (
              Object(we.a)(this, t),
              ((n = Object(Le.a)(this, Object(Me.a)(t).call(this, e))).state = {
                showReplyEditor: !1,
                showUpdateEditor: !1
              }),
              (n.handleToggleReplyEditor = n.handleToggleReplyEditor.bind(
                Object(qt.a)(Object(qt.a)(n))
              )),
              (n.handleToggleUpdateEditor = n.handleToggleUpdateEditor.bind(
                Object(qt.a)(Object(qt.a)(n))
              )),
              n
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "handleToggleReplyEditor",
                value: function() {
                  this.setState({
                    showReplyEditor: !this.state.showReplyEditor
                  });
                }
              },
              {
                key: "handleToggleUpdateEditor",
                value: function() {
                  this.setState({
                    showUpdateEditor: !this.state.showUpdateEditor
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.childrenList,
                    n = e.body,
                    r = e.posterUsername,
                    o = e.authUsername,
                    s = e.upvotes,
                    c = e.created,
                    i = e.pk,
                    l = e.voteDisplayState,
                    u = e.deleted,
                    d = e.handleToggleCollapse,
                    m = e.handleDeleteComment,
                    p = ft(function(e) {
                      return e.showEditor;
                    })(or),
                    E = Object(ht.a)(
                      ft(function(e) {
                        return !e.deleted;
                      }),
                      bt(function(e) {
                        return e.showUpdateEditor;
                      }, or)
                    )(cr);
                  return a.a.createElement(
                    "div",
                    { className: "comment-tree-content" },
                    a.a.createElement(
                      "div",
                      { className: "comment-voter-collapser" },
                      u ||
                        a.a.createElement(Mn, {
                          voteDisplayState: l,
                          itemType: "comment",
                          itemPk: i
                        }),
                      a.a.createElement(
                        "span",
                        {
                          onClick: function() {
                            return d();
                          },
                          className: "thread-line-container"
                        },
                        a.a.createElement("div", { className: "thread-line" })
                      )
                    ),
                    a.a.createElement(
                      "div",
                      { className: "comment-panel" },
                      a.a.createElement(
                        "div",
                        { className: "comment-info-line-container" },
                        a.a.createElement(sr, {
                          posterUsername: r,
                          upvotes: s,
                          created: c,
                          deleted: u
                        })
                      ),
                      a.a.createElement(
                        E,
                        Object.assign(
                          {
                            body: n,
                            posterUsername: r,
                            authUsername: o,
                            pk: i,
                            deleted: u,
                            handleDeleteComment: m
                          },
                          {
                            usage: "update",
                            initialValue: n,
                            onBlur: this.handleToggleUpdateEditor,
                            onEditorSubmit: this.handleToggleUpdateEditor,
                            showUpdateEditor: this.state.showUpdateEditor,
                            handleToggleReplyEditor: this
                              .handleToggleReplyEditor,
                            handleToggleUpdateEditor: this
                              .handleToggleUpdateEditor
                          }
                        )
                      ),
                      a.a.createElement(p, {
                        showEditor: this.state.showReplyEditor,
                        rootComment: !1,
                        parentPk: i,
                        usage: "create",
                        onBlur: this.handleToggleReplyEditor
                      }),
                      a.a.createElement(
                        "div",
                        { className: "children-container" },
                        t
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        lr = n(220),
        ur = (n(530),
        function(e) {
          var t = e.posterUsername,
            n = e.upvotes,
            r = e.created,
            o = e.deleted,
            s = e.handleToggleCollapse;
          return a.a.createElement(
            "div",
            { className: "comment-tree-content collapsed-container" },
            a.a.createElement(
              "div",
              {
                onClick: function() {
                  return s();
                },
                className: "expander"
              },
              a.a.createElement(lr.a, null)
            ),
            a.a.createElement(
              "div",
              { className: "collapsed-links" },
              a.a.createElement(sr, {
                posterUsername: t,
                upvotes: n,
                created: r,
                deleted: o
              })
            )
          );
        }),
        dr = (function(e) {
          function t(e) {
            var n;
            return (
              Object(we.a)(this, t),
              ((n = Object(Le.a)(this, Object(Me.a)(t).call(this, e))).state = {
                collapsed: !1
              }),
              (n.handleToggleCollapse = n.handleToggleCollapse.bind(
                Object(qt.a)(Object(qt.a)(n))
              )),
              n
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "handleToggleCollapse",
                value: function() {
                  this.setState({ collapsed: !this.state.collapsed });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.childrenPk,
                    n = e.body,
                    r = e.upvotes,
                    o = e.created,
                    s = e.pk,
                    c = e.voteDisplayState,
                    i = e.deleted,
                    l = e.posterUsername,
                    u = e.authUsername,
                    d = e.handleDeleteComment,
                    m = [];
                  Array.isArray(t) &&
                    t.length &&
                    (m = t.map(function(e) {
                      return a.a.createElement(mr, { pk: e, key: e });
                    }));
                  var p = bt(function(e) {
                    return e.collapsed;
                  }, ur)(ir);
                  return a.a.createElement(
                    p,
                    Object.assign(
                      {
                        childrenList: m,
                        body: n,
                        upvotes: r,
                        created: o,
                        pk: s,
                        voteDisplayState: c,
                        deleted: i,
                        posterUsername: l,
                        authUsername: u,
                        handleDeleteComment: d
                      },
                      {
                        handleToggleCollapse: this.handleToggleCollapse,
                        collapsed: this.state.collapsed
                      }
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        mr = Object(c.b)(
          function(e, t) {
            return {
              commentData: J(e, t.pk),
              posterData: X(e, t.pk),
              authUsername: j(e)
            };
          },
          function(e, t) {
            return {
              handleDeleteComment: function() {
                return e(rr(t.pk));
              }
            };
          }
        )(function(e) {
          var t = e.commentData,
            n = e.posterData,
            r = e.authUsername,
            o = e.handleDeleteComment,
            s = e.pk,
            c = t.children,
            i = t.body,
            l = t.upvotes,
            u = t.created,
            d = t.voteDisplayState,
            m = t.deleted,
            p = (n && n.username) || r;
          return a.a.createElement(dr, {
            childrenPk: c,
            body: i,
            upvotes: l,
            created: u,
            pk: s,
            voteDisplayState: d,
            deleted: m,
            posterUsername: p,
            authUsername: r,
            handleDeleteComment: o
          });
        }),
        pr = function(e) {
          var t = e.rootCommentPks,
            n = e.error,
            r = e.loading,
            o = e.postPk,
            s = e.createCommentError;
          e.createCommentLoading;
          if (n) return a.a.createElement(un, null, n);
          var c = [];
          Array.isArray(t) &&
            t.length &&
            (c = t.map(function(e) {
              return a.a.createElement(mr, { pk: e, key: e });
            }));
          var i = ft(function(e) {
              return e.children;
            })(un),
            l = bt(function(e) {
              return e.loading;
            }, _t)(function() {
              return c;
            });
          return a.a.createElement(
            "div",
            { className: "comment-tree-list-container" },
            a.a.createElement(i, { children: s }),
            a.a.createElement(
              "div",
              { className: "top-comment-editor" },
              a.a.createElement(or, {
                parentPk: o,
                rootComment: !0,
                usage: "create"
              })
            ),
            a.a.createElement(
              "ul",
              null,
              a.a.createElement(l, { loading: r, panelNumber: 10 })
            )
          );
        },
        Er = (function(e) {
          function t() {
            return (
              Object(we.a)(this, t),
              Object(Le.a)(this, Object(Me.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.fetchCommentList(this.props.match.params.postId);
                }
              },
              {
                key: "render",
                value: function() {
                  return a.a.createElement(pr, this.props);
                }
              }
            ]),
            t
          );
        })(r.Component),
        hr = Object(ut.a)(
          Object(c.b)(
            function(e) {
              return {
                loading: Y(e),
                rootCommentPks: z(e),
                error: e.comments.error,
                createCommentError: e.comments.createCommentError,
                createCommentLoading: e.comments.createCommentLoading,
                createdComment: e.comments.createdComment,
                postPk: L(e)
              };
            },
            function(e) {
              return {
                fetchCommentList: function(t) {
                  return e(
                    ((n = t),
                    function(e, t) {
                      return e({
                        type: "API_POST_COMMENT_TREES",
                        types: {
                          request: "FETCH_POST_COMMENT_TREES_REQUEST",
                          success: tr,
                          failure: "FETCH_POST_COMMENT_TREES_FAILURE"
                        },
                        callAPI: function() {
                          return er(n, t().userAuth.username);
                        }
                      });
                    })
                  );
                  var n;
                }
              };
            }
          )(Er)
        ),
        br = (function(e) {
          function t(e) {
            var n;
            return (
              Object(we.a)(this, t),
              ((n = Object(Le.a)(
                this,
                Object(Me.a)(t).call(this, e)
              )).scrollToCommentList = function() {
                window.scrollTo({
                  top: n.commentListNode.current.offsetTop,
                  behavior: "smooth"
                });
              }),
              (n.commentListNode = a.a.createRef()),
              (n.handleDelete = n.handleDelete.bind(
                Object(qt.a)(Object(qt.a)(n))
              )),
              n
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.commentScroll
                    ? this.scrollToCommentList()
                    : window.scrollTo(0, 0);
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e) {
                  this.props.commentScroll &&
                    e.pk !== this.props.pk &&
                    this.scrollToCommentList();
                }
              },
              {
                key: "handleDelete",
                value: (function() {
                  var e = Object(Ft.a)(
                    Bt.a.mark(function e() {
                      return Bt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.props.handleDeletePost()
                                );
                              case 2:
                                this.props.history.replace(
                                  "/r/".concat(this.props.subredditTitle)
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.subredditTitle,
                    n = e.posterUsername,
                    o = e.authUsername,
                    s = e.title,
                    c = e.pk,
                    i = e.body,
                    l = e.loading,
                    u = e.showPostEditor,
                    d = (e.handleDeletePost, e.togglePostEditor),
                    m = ft(function(e) {
                      return e.showEllipsis;
                    })(Bn);
                  return a.a.createElement(
                    "div",
                    { className: "post-detail-content" },
                    l
                      ? a.a.createElement(jt, null)
                      : a.a.createElement(
                          r.Fragment,
                          null,
                          a.a.createElement(Xn, { title: t, poster: n }),
                          a.a.createElement(
                            "div",
                            { className: "post-title-container" },
                            s
                          ),
                          a.a.createElement(
                            "div",
                            { className: "post-body-container" },
                            u
                              ? a.a.createElement(
                                  Yn,
                                  Object.assign(
                                    { body: i, pk: c },
                                    { onEditorSubmitSuccess: d }
                                  )
                                )
                              : a.a.createElement("div", {
                                  className: "body-html",
                                  dangerouslySetInnerHTML: { __html: i }
                                })
                          ),
                          a.a.createElement(
                            "div",
                            { className: "link-bar-container" },
                            a.a.createElement(xn, {
                              shareUrl: "".concat(window.location.href)
                            }),
                            a.a.createElement(
                              m,
                              { showEllipsis: o === n },
                              a.a.createElement(
                                wt.a,
                                { eventKey: 1, onSelect: this.handleDelete },
                                "delete"
                              ),
                              a.a.createElement(
                                wt.a,
                                { eventKey: 2, onSelect: d },
                                "edit"
                              )
                            )
                          )
                        ),
                    a.a.createElement(
                      "div",
                      {
                        className: "post-comments-container",
                        ref: this.commentListNode
                      },
                      a.a.createElement(hr, null)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        fr = Object(ut.a)(br),
        Sr = (function(e) {
          function t() {
            return (
              Object(we.a)(this, t),
              Object(Le.a)(this, Object(Me.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props.match.params.postId || null;
                  this.props.fetchPostDetail(e);
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.showPostEditor && this.props.togglePostEditor();
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.body,
                    n = e.title,
                    r = e.subredditTitle,
                    o = e.posterUsername,
                    s = e.authUsername,
                    c = e.pk,
                    i = e.loading,
                    l = e.showPostEditor,
                    u = e.editPostError,
                    d = e.commentScroll,
                    m = e.handleDeletePost,
                    p = e.togglePostEditor;
                  return a.a.createElement(fr, {
                    body: t,
                    title: n,
                    subredditTitle: r,
                    posterUsername: o,
                    authUsername: s,
                    pk: c,
                    loading: i,
                    showPostEditor: l,
                    editPostError: u,
                    commentScroll: d,
                    handleDeletePost: m,
                    togglePostEditor: p
                  });
                }
              }
            ]),
            t
          );
        })(r.Component),
        vr = Object(c.b)(
          function(e, t) {
            return {
              subredditTitle: t.title,
              body: w(e),
              title: D(e),
              posterUsername: N(e),
              pk: L(e),
              loading: M(e),
              showPostEditor: Ee(e),
              editPostError: he(e),
              authUsername: j(e)
            };
          },
          function(e, t) {
            return {
              fetchPostDetail: function(t) {
                return e(kn(t));
              },
              handleDeletePost: function() {
                return e(Rn(Number(t.match.params.postId)));
              },
              togglePostEditor: function() {
                return e({ type: "TOGGLE_POST_EDITOR" });
              }
            };
          }
        )(Sr),
        gr = (n(532),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(we.a)(this, t),
              ((n = Object(Le.a)(
                this,
                Object(Me.a)(t).call(this, e)
              )).handleTitleChange = function(e) {
                return n.setState({ title: e.target.value });
              }),
              (n.handleDescriptionChange = function(e) {
                return n.setState({ description: e.target.value });
              }),
              (n.state = { description: "", title: "" }),
              (n.handleSubmit = n.handleSubmit.bind(
                Object(qt.a)(Object(qt.a)(n))
              )),
              n
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "handleSubmit",
                value: (function() {
                  var e = Object(Ft.a)(
                    Bt.a.mark(function e() {
                      return Bt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.props.handleCreateSubreddit({
                                    title: this.state.title,
                                    description: this.state.description
                                  })
                                );
                              case 3:
                                this.props.history.push(
                                  "/r/".concat(this.state.title)
                                ),
                                  (e.next = 9);
                                break;
                              case 6:
                                (e.prev = 6),
                                  (e.t0 = e.catch(0)),
                                  this.forceUpdate();
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 6]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.errorMessage,
                    n = e.loading;
                  e.handleCreateSubreddit;
                  return a.a.createElement(
                    "div",
                    { className: "create-subreddit-container" },
                    a.a.createElement(
                      "div",
                      { className: "content-container" },
                      a.a.createElement(
                        "div",
                        { className: "form-container" },
                        a.a.createElement("h2", null, "Create a Subreddit"),
                        a.a.createElement("hr", null),
                        a.a.createElement(dn, null, t),
                        a.a.createElement(
                          "form",
                          null,
                          a.a.createElement(
                            "div",
                            { className: "input-container" },
                            a.a.createElement(Kt, {
                              id: "title-input",
                              placeholder: "title",
                              type: "text",
                              value: this.state.title,
                              onChange: this.handleTitleChange,
                              name: "title"
                            }),
                            a.a.createElement(Kt, {
                              id: "description-input",
                              placeholder: "description",
                              componentClass: "textarea",
                              onChange: this.handleDescriptionChange
                            })
                          ),
                          a.a.createElement(
                            "div",
                            { className: "submit-button" },
                            a.a.createElement(
                              pn,
                              {
                                bsStyle: "primary",
                                handleClick: this.handleSubmit,
                                loading: n
                              },
                              "create"
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component)),
        yr = Object(ut.a)(gr),
        Or = (function(e) {
          function t() {
            return (
              Object(we.a)(this, t),
              Object(Le.a)(this, Object(Me.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.errorMessage,
                    n = e.loading,
                    r = e.handleCreateSubreddit;
                  return a.a.createElement(yr, {
                    errorMessage: t,
                    loading: n,
                    handleCreateSubreddit: r
                  });
                }
              }
            ]),
            t
          );
        })(r.Component),
        Tr = Object(c.b)(
          function(e) {
            return { errorMessage: ue(e), loading: de(e) };
          },
          function(e) {
            return {
              handleCreateSubreddit: function(t) {
                return e(ct(t));
              }
            };
          }
        )(Or),
        Cr = (n(534),
        function(e) {
          var t = e.subreddit,
            n = e.handleSubredditRedirect;
          return a.a.createElement(
            "div",
            { className: "subreddit-panel", onClick: n },
            a.a.createElement(
              "div",
              { className: "title-and-subscriptions" },
              a.a.createElement("h1", null, "r/", t.title),
              a.a.createElement("p", null, t.members.length, " Subscribers ")
            ),
            a.a.createElement(
              "div",
              { className: "description" },
              a.a.createElement("p", null, t.description)
            ),
            a.a.createElement(
              "div",
              { className: "subscription-button" },
              a.a.createElement(vt, { subredditTitle: t.title })
            )
          );
        }),
        _r = (function(e) {
          function t() {
            var e, n;
            Object(we.a)(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((n = Object(Le.a)(
                this,
                (e = Object(Me.a)(t)).call.apply(e, [this].concat(a))
              )).handleSubredditRedirect = function() {
                return n.props.history.push(E(n.props.subreddit.title));
              }),
              n
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.subreddit;
                  return a.a.createElement(Cr, {
                    subreddit: e,
                    handleSubredditRedirect: this.handleSubredditRedirect
                  });
                }
              }
            ]),
            t
          );
        })(r.Component),
        Ur = Object(ut.a)(
          Object(c.b)(function(e, t) {
            var n = t.pk;
            return { subreddit: Ce(e, n) };
          })(_r)
        ),
        jr = (n(536),
        function(e) {
          e.loading, e.error;
          var t = e.allSubreddits.map(function(e) {
            return a.a.createElement(Ur, { key: e, pk: e });
          });
          return a.a.createElement(
            "div",
            { className: "subreddit-search-results-container" },
            t
          );
        }),
        Rr = (n(538),
        function(e) {
          var t = e.allPosts,
            n = e.allSubreddits,
            r = e.allUsers,
            o = e.loading,
            s = e.error,
            c = e.query,
            i = e.resultsView,
            l = e.changeResultsView,
            u = Object(ht.a)(
              bt(
                function(e) {
                  return "users" === e.view;
                },
                function() {
                  return null;
                }
              ),
              bt(function(e) {
                return "subreddits" === e.view;
              }, jr)
            )(Wn);
          return a.a.createElement(
            "div",
            { className: "search-results-container" },
            a.a.createElement(
              "div",
              { className: "search-navbar" },
              a.a.createElement(
                "div",
                { className: "search-query-name" },
                a.a.createElement("h2", null, 'Search results for: "', c, '"')
              ),
              a.a.createElement(
                "div",
                { className: "search-view-selector" },
                a.a.createElement(
                  Et,
                  {
                    active: "posts" === i,
                    onClick: function() {
                      return l("posts");
                    }
                  },
                  "Posts"
                ),
                a.a.createElement(
                  Et,
                  {
                    active: "subreddits" === i,
                    onClick: function() {
                      return l("subreddits");
                    }
                  },
                  "Subreddits"
                ),
                a.a.createElement(
                  Et,
                  {
                    active: "users" === i,
                    onClick: function() {
                      return l("users");
                    }
                  },
                  "Users"
                )
              )
            ),
            a.a.createElement(
              "div",
              { className: "results-list-container" },
              a.a.createElement(
                u,
                Object.assign(
                  {
                    allPosts: t,
                    allSubreddits: n,
                    allUsers: r,
                    error: s,
                    loading: o
                  },
                  { view: i }
                )
              )
            )
          );
        }),
        Ar = (function(e) {
          function t() {
            return (
              Object(we.a)(this, t),
              Object(Le.a)(this, Object(Me.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(He.a)(t, e),
            Object(Ne.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.searchRequest(this.props.query);
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e) {
                  e.query !== this.props.query &&
                    this.props.searchRequest(this.props.query);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.allPosts,
                    n = e.allSubreddits,
                    r = e.allUsers,
                    o = e.error,
                    s = e.loading,
                    c = e.query,
                    i = e.resultsView,
                    l = e.changeResultsView;
                  return a.a.createElement(Rr, {
                    allPosts: t,
                    allSubreddits: n,
                    allUsers: r,
                    loading: s,
                    error: o,
                    query: c,
                    resultsView: i,
                    changeResultsView: l
                  });
                }
              }
            ]),
            t
          );
        })(r.Component),
        kr = Object(c.b)(
          function(e) {
            return {
              query: ye(e),
              allPosts: re(e),
              allSubreddits: Oe(e),
              allUsers: Te(e),
              error: ve(e),
              loading: ge(e),
              resultsView: _e(e)
            };
          },
          function(e) {
            return {
              searchRequest: function(t) {
                return e(Jt(t));
              },
              changeResultsView: function(t) {
                return e(
                  (function() {
                    return {
                      type: "SET_SEARCH_RESULTS_VIEW",
                      viewName:
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "posts"
                    };
                  })(t)
                );
              }
            };
          }
        )(Ar);
      p.a.load({
        google: {
          families: ["Roboto Slab:400,700", "Noto Sans", "Poppins:400,500,700"]
        }
      }),
        s.a.render(
          a.a.createElement(
            c.a,
            { store: Ie },
            a.a.createElement(
              d.a,
              { loading: null, persistor: De },
              a.a.createElement(
                i.a,
                null,
                a.a.createElement(
                  "div",
                  { className: "whole-page" },
                  a.a.createElement(an, null),
                  a.a.createElement(vn, null),
                  a.a.createElement(
                    "div",
                    { className: "main-layout" },
                    a.a.createElement(
                      l.a,
                      null,
                      a.a.createElement(u.a, {
                        exact: !0,
                        path: "/r/:subredditTitle/:createPost",
                        render: function(e) {
                          return a.a.createElement(
                            kt,
                            Object.assign({}, e, {
                              skinny: !0,
                              primaryComponent: function(e) {
                                return a.a.createElement(In, e);
                              }
                            })
                          );
                        }
                      }),
                      a.a.createElement(u.a, {
                        exact: !0,
                        path: "/r/:subredditTitle/postDetail/:postId",
                        render: function(e) {
                          return a.a.createElement(
                            kt,
                            Object.assign({}, e, {
                              primaryComponent: function(e) {
                                return a.a.createElement(vr, e);
                              }
                            })
                          );
                        }
                      }),
                      "// Go directly to comments but otherwise same as postDetail",
                      a.a.createElement(u.a, {
                        exact: !0,
                        path: "/r/:subredditTitle/postDetail/:postId/comments",
                        render: function(e) {
                          return a.a.createElement(
                            kt,
                            Object.assign({}, e, {
                              primaryComponent: function(e) {
                                return a.a.createElement(
                                  vr,
                                  Object.assign({}, e, { commentScroll: !0 })
                                );
                              }
                            })
                          );
                        }
                      }),
                      a.a.createElement(u.a, {
                        exact: !0,
                        path: "/r/:subredditTitle",
                        render: function(e) {
                          return a.a.createElement(
                            kt,
                            Object.assign({}, e, {
                              primaryComponent: function(e) {
                                return a.a.createElement(Jn, e);
                              }
                            })
                          );
                        }
                      }),
                      a.a.createElement(u.a, {
                        exact: !0,
                        path: "/createSubreddit",
                        render: function(e) {
                          return a.a.createElement(Tr, {
                            match: e.match,
                            history: e.history
                          });
                        }
                      }),
                      a.a.createElement(u.a, {
                        exact: !0,
                        path: "/search",
                        render: function(e) {
                          return a.a.createElement(kr, {
                            match: e.match,
                            history: e.history
                          });
                        }
                      }),
                      "// The home psuedo-subreddit",
                      a.a.createElement(u.a, {
                        exact: !0,
                        path: "/",
                        render: function(e) {
                          return a.a.createElement(
                            kt,
                            Object.assign({}, e, {
                              primaryComponent: function(e) {
                                return a.a.createElement(Jn, e);
                              }
                            })
                          );
                        }
                      })
                    )
                  )
                )
              )
            )
          ),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[223, 2, 1]]
]);
//# sourceMappingURL=main.08365a30.chunk.js.map
