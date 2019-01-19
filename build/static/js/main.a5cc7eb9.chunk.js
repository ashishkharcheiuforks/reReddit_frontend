(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    116: function(e, t, n) {},
    182: function(e, t, n) {},
    207: function(e, t, n) {},
    222: function(e, t, n) {
      e.exports = n(539);
    },
    231: function(e, t, n) {},
    254: function(e, t, n) {},
    312: function(e, t, n) {},
    324: function(e, t, n) {},
    326: function(e, t, n) {},
    328: function(e, t, n) {},
    344: function(e, t, n) {},
    346: function(e, t, n) {},
    348: function(e, t, n) {},
    364: function(e, t, n) {},
    366: function(e, t, n) {},
    369: function(e, t, n) {},
    371: function(e, t, n) {},
    387: function(e, t, n) {},
    389: function(e, t, n) {},
    391: function(e, t, n) {},
    498: function(e, t, n) {},
    500: function(e, t, n) {},
    502: function(e, t, n) {},
    504: function(e, t, n) {},
    506: function(e, t, n) {},
    516: function(e, t, n) {},
    518: function(e, t, n) {},
    521: function(e, t, n) {},
    523: function(e, t, n) {},
    525: function(e, t, n) {},
    527: function(e, t, n) {},
    529: function(e, t, n) {},
    531: function(e, t, n) {},
    533: function(e, t, n) {},
    535: function(e, t, n) {},
    537: function(e, t, n) {},
    539: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(1),
        a = n.n(r),
        o = n(22),
        s = n.n(o);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var c = n(16),
        i = n(118),
        l = n(125),
        u = n(88),
        d = n(210),
        m = (n(231),
        function(e) {
          return "/r/".concat(e);
        }),
        p = n(40),
        E = n(211),
        h = n(137),
        f = n(212),
        b = n.n(f),
        S = n(7),
        v = {
          loading: !1,
          error: null,
          title: null,
          description: null,
          subscriptionLoading: !1
        },
        y = function(e) {
          return e.subreddit.title;
        },
        O = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : v,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCH_SUB_DETAIL_REQUEST":
              return Object(S.a)({}, e, { loading: !0, error: null });
            case "FETCH_SUB_DETAIL_SUCCESS":
              return Object(S.a)({}, e, {
                loading: !1,
                error: null,
                title: t.data.title,
                description: t.data.description
              });
            case "FETCH_SUB_DETAIL_FAILURE":
              return Object(S.a)({}, e, { loading: !1, error: t.error });
            case "SET_SUB_TO_HOME":
              return Object(S.a)({}, e, {
                loading: !1,
                error: null,
                title: t.title
              });
            case "SUBREDDIT_SUBSCRIBE_REQUEST":
              return Object(S.a)({}, e, { subscriptionLoading: !0 });
            case "SUBREDDIT_SUBSCRIBE_SUCCESS":
            case "SUBREDDIT_SUBSCRIBE_FAILURE":
              return Object(S.a)({}, e, { subscriptionLoading: !1 });
            default:
              return e;
          }
        },
        g = {
          token: null,
          username: null,
          pk: null,
          subs: [],
          moderated_subs: [],
          error: null,
          loading: !1
        },
        T = function(e) {
          return e.userAuth.username;
        },
        _ = function(e) {
          return e.userAuth.subs.map(function(e) {
            return e.title;
          });
        },
        C = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : g,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "USER_AUTH_LOGIN_REQUEST":
              return Object(S.a)({}, e, { loading: !0 });
            case "USER_AUTH_LOGIN_SUCCESS":
              return Object(S.a)({}, e, {
                token: t.data.token,
                username: t.data.username,
                pk: t.data.pk,
                subs: t.data.subs,
                moderated_subs: t.data.moderated_subs,
                loading: !1,
                error: null
              });
            case "USER_AUTH_LOGIN_FAILURE":
              return Object(S.a)({}, e, {
                token: null,
                loading: !1,
                error: t.error
              });
            case "USER_AUTH_LOGOUT_SUCCESS":
              return g;
            case "USER_AUTH_UPDATE_SUCCESS":
              return Object(S.a)({}, e, {
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
        U = {
          showModal: !1,
          displayType: null,
          errorMessage: null,
          successMessage: null
        },
        j = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : U,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "SHOW_USER_AUTH_MODAL":
              return Object(S.a)({}, e, {
                showModal: !0,
                displayType: t.displayType,
                errorMessage: t.warningMessage,
                successMessage: t.successMessage
              });
            case "HIDE_USER_AUTH_MODAL":
              return Object(S.a)({}, e, {
                showModal: !1,
                displayType: null,
                errorMessage: null,
                successMessage: null
              });
            case "UPDATE_USER_AUTH_MODAL_ERROR":
              return Object(S.a)({}, e, { errorMessage: t.errorMessage });
            default:
              return e;
          }
        },
        R = {
          title: null,
          body: null,
          poster: null,
          pk: null,
          error: null,
          loading: !1
        },
        A = function(e) {
          return e.postDetail.title;
        },
        k = function(e) {
          return e.postDetail.body;
        },
        P = function(e) {
          return e.postDetail.poster;
        },
        I = function(e) {
          return e.postDetail.pk;
        },
        D = function(e) {
          return e.postDetail.loading;
        },
        w = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : R,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCH_POST_DETAIL_REQUEST":
              return Object(S.a)({}, e, { error: null, loading: !0 });
            case "FETCH_POST_DETAIL_SUCCESS":
              return Object(S.a)({}, e, {
                title: t.data.title,
                body: t.data.body,
                poster: t.data.poster_username,
                pk: t.data.pk,
                loading: !1,
                error: null
              });
            case "FETCH_POST_DETAIL_FAILURE":
              return Object(S.a)({}, e, { loading: !1, error: t.error });
            case "UPDATE_POST_SUCCESS":
              return Object(S.a)({}, e, { body: t.data.body });
            case "FETCH_POST_LIST_SUCCESS":
              return Object(S.a)({}, e, { pk: null });
            default:
              return e;
          }
        },
        N = n(34),
        L = n(35);
      function M(e, t) {
        var n = e.voteDisplayState || 0,
          r = t,
          a = e.upvotes + (r - n);
        return Object(S.a)({}, e, { voteDisplayState: r, upvotes: a });
      }
      var H = function(e) {
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
        B = function(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "pk",
            r = {};
          return (
            e.forEach(function(e) {
              (e = t ? t(e) : e), (r[e[n]] = Object(S.a)({}, e));
            }),
            r
          );
        },
        F = function(e) {
          return B(e, function(e) {
            var t = e.vote_state,
              n = e.poster_username,
              r = e.subreddit_title,
              a = Object(N.a)(e, [
                "vote_state",
                "poster_username",
                "subreddit_title"
              ]);
            return Object(
              S.a
            )({ voteDisplayState: t, posterUsername: n, subredditTitle: r }, a);
          });
        },
        q = function(e, t) {
          var n = t.vote_state,
            r = Object(N.a)(t, ["vote_state"]),
            a = Object(S.a)({}, r, {
              voteDisplayState: n,
              created: "just now"
            });
          if (t.post)
            return Object(S.a)(
              {},
              (function(e, t) {
                var n = e.rootCommentIds.slice();
                return n.splice(0, 0, t.pk), { rootCommentIds: n };
              })(e, a),
              {
                commentsById: Object(S.a)(
                  {},
                  e.commentsById,
                  Object(L.a)({}, t.pk, a)
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
              var o = Object(S.a)({}, r, { children: a });
              return Object(S.a)({}, e.commentsById, Object(L.a)({}, n, o));
            })(e, a);
            return {
              commentsById: Object(S.a)({}, o, Object(L.a)({}, t.pk, a))
            };
          }
        },
        x = function(e, t, n) {
          var r,
            a,
            o = e.commentsById[t];
          return Object(S.a)({}, e, {
            commentsById: Object(S.a)(
              {},
              e.commentsById,
              Object(L.a)({}, t, ((r = o), (a = n), Object(S.a)({}, r, a)))
            )
          });
        },
        Q = {
          commentsById: {},
          postersById: {},
          rootCommentIds: [],
          error: null,
          loading: !1,
          createCommentError: null,
          createCommentLoading: !1
        },
        V = function(e) {
          return e.comments.rootCommentIds;
        },
        G = function(e, t) {
          return e.comments.commentsById[t];
        },
        K = function(e, t) {
          var n = e.comments.commentsById[t].poster;
          return e.comments.postersById[n];
        },
        W = function(e) {
          return e.comments.loading;
        },
        z = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Q,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCH_POST_COMMENT_TREES_REQUEST":
              return Object(S.a)({}, e, { loading: !0 });
            case "FETCH_POST_COMMENT_TREES_SUCCESS":
              return Object(S.a)({}, e, {
                commentsById: t.data.entities.comments,
                postersById: t.data.entities.posters,
                rootCommentIds: t.data.result,
                error: null,
                loading: !1,
                createCommentError: null
              });
            case "FETCH_POST_COMMENT_TREES_FAILURE":
              return Object(S.a)({}, e, { error: t.error });
            case "CREATE_COMMENT_SUCCESS":
              return Object(S.a)({}, e, q(e, t.data), {
                createCommentLoading: !1,
                createCommentError: null
              });
            case "CREATE_COMMENT_REQUEST":
              return Object(S.a)({}, e, {
                createCommentLoading: !0,
                createCommentError: null
              });
            case "CREATE_COMMENT_FAILURE":
              return Object(S.a)({}, e, {
                createCommentLoading: !1,
                createCommentError: t.error
              });
            case "COMMENT_VOTE_SUCCESS":
              var n = t.data.comment;
              return Object(S.a)({}, e, {
                commentsById: Object(S.a)(
                  {},
                  e.commentsById,
                  Object(L.a)({}, n, M(e.commentsById[n], t.data.vote_type))
                )
              });
            case "DELETE_COMMENT_SUCCESS":
              return x(e, t.data.pk, { deleted: !0 });
            case "UPDATE_COMMENT_SUCCESS":
              return x(e, t.data.pk, Object(S.a)({}, t.data));
            default:
              return e;
          }
        },
        J = n(95);
      function X(e) {
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
      var Y = {
          postsById: {},
          allPosts: [],
          loading: !0,
          error: null,
          deletionPostId: null,
          deleteError: null
        },
        $ = function(e, t) {
          return e.postList.postsById[t];
        },
        Z = function(e) {
          return e.postList.allPosts;
        },
        ee = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Y,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCH_POST_LIST_REQUEST":
              return Object(S.a)({}, e, { loading: !0, error: null });
            case "FETCH_POST_LIST_SUCCESS":
              return Object(S.a)({}, e, {
                loading: !1,
                error: null,
                postsById: F(t.data),
                allPosts: H(t.data)
              });
            case "FETCH_POST_LIST_FAILURE":
              return Object(S.a)({}, e, { loading: !1, error: t.error });
            case "POST_VOTE_SUCCESS":
              var n = t.data.post;
              return Object(S.a)({}, e, {
                postsById: Object(S.a)(
                  {},
                  e.postsById,
                  Object(L.a)({}, n, M(e.postsById[n], t.data.vote_type))
                )
              });
            case "DELETE_POST_REQUEST":
              return Object(S.a)({}, e, {
                deleteError: null,
                deletionPostId: Number(t.pk)
              });
            case "DELETE_POST_SUCCESS":
              return (function(e, t) {
                var n = e.postsById,
                  r = (n[t], Object(N.a)(n, [t].map(X)));
                delete r[t];
                var a = Object(J.a)(e.allPosts),
                  o = a.indexOf(t);
                return (
                  a.splice(o, 1),
                  Object(S.a)({}, e, {
                    postsById: Object(S.a)({}, r),
                    allPosts: Object(J.a)(a),
                    deletionPostId: null
                  })
                );
              })(e, e.deletionPostId);
            case "DELETE_POST_FAILURE":
              return Object(S.a)({}, e, { deleteError: t.error });
            case "SEARCH_SUCCESS":
              return Object(S.a)({}, e, {
                loading: !1,
                error: null,
                postsById: F(t.data.posts),
                allPosts: H(t.data.posts)
              });
            default:
              return e;
          }
        },
        te = { creating: !1, error: null, loading: !1 },
        ne = function(e) {
          return e.createPost.loading;
        },
        re = function(e) {
          return e.createPost.error;
        },
        ae = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : te,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "CREATE_POST_FAILURE":
              return Object(S.a)({}, e, { loading: !1, error: t.error });
            case "CREATE_POST_REQUEST":
              return Object(S.a)({}, e, { loading: !0, error: null });
            case "CREATE_POST_SUCCESS":
              return Object(S.a)({}, e, { loading: !1, error: null });
            default:
              return e;
          }
        },
        oe = { error: null, loading: !1, newSubredditData: null },
        se = function(e) {
          return e.createSubreddit.error;
        },
        ce = function(e) {
          return e.createSubreddit.loading;
        },
        ie = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : oe,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "CREATE_SUBREDDIT_REQUEST":
              return Object(S.a)({}, e, {
                loading: !0,
                error: !1,
                newSubredditData: null
              });
            case "CREATE_SUBREDDIT_SUCCESS":
              return Object(S.a)({}, e, {
                newSubredditData: t.data,
                loading: !1,
                error: null
              });
            case "CREATE_SUBREDDIT_FAILURE":
              return Object(S.a)({}, e, {
                newSubredditData: null,
                loading: !1,
                error: t.error
              });
            default:
              return e;
          }
        },
        le = { showDetailPostEditor: !1, loading: !1, error: !1 },
        ue = function(e) {
          return e.editPost.showDetailPostEditor;
        },
        de = function(e) {
          return e.editPost.error;
        },
        me = function(e) {
          return e.editPost.loading;
        },
        pe = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : le,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "TOGGLE_POST_EDITOR":
              return Object(S.a)({}, e, {
                showDetailPostEditor: !e.showDetailPostEditor
              });
            case "UPDATE_POST_REQUEST":
              return Object(S.a)({}, e, { loading: !0, error: null });
            case "UPDATE_POST_SUCCESS":
              return Object(S.a)({}, e, { loading: !1, error: null });
            case "UPDATE_POST_FAILURE":
              return Object(S.a)({}, e, { loading: !1, error: t.error });
            default:
              return e;
          }
        },
        Ee = {
          query: "",
          allSubreddits: [],
          subredditsById: {},
          allUsers: [],
          usersById: {},
          searchResultsView: "posts",
          error: null,
          loading: !1
        },
        he = function(e) {
          return e.search.error;
        },
        fe = function(e) {
          return e.search.loading;
        },
        be = function(e) {
          return e.search.query;
        },
        Se = function(e) {
          return e.search.allSubreddits;
        },
        ve = function(e) {
          return e.search.allUsers;
        },
        ye = function(e, t) {
          return e.search.subredditsById[t];
        },
        Oe = function(e) {
          return e.search.searchResultsView;
        },
        ge = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Ee,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "SEARCH_REQUEST":
              return Object(S.a)({}, e, { loading: !0, error: null });
            case "SEARCH_SUCCESS":
              return Object(S.a)({}, e, {
                loading: !1,
                error: null,
                allUsers: H(t.data.users),
                usersById: B(t.data.users),
                allSubreddits: H(t.data.subreddits),
                subredditsById: B(t.data.subreddits)
              });
            case "SEARCH_FAILURE":
              return Object(S.a)({}, e, { loading: !1, error: t.error });
            case "SET_SEARCH_QUERY":
              return Object(S.a)({}, e, {
                query: t.query,
                searchResultsView: "posts"
              });
            case "SET_SEARCH_RESULTS_VIEW":
              return Object(S.a)({}, e, { searchResultsView: t.viewName });
            default:
              return e;
          }
        },
        Te = Object(p.c)({
          subreddit: O,
          userAuth: C,
          userAuthModal: j,
          postDetail: w,
          comments: z,
          postList: ee,
          createPost: ae,
          createSubreddit: ie,
          editPost: pe,
          search: ge
        }),
        _e = function(e) {
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
        Ce = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || p.d,
        Ue = { key: "root", storage: b.a },
        je = Object(h.a)(Ue, Te),
        Re = Object(p.e)(
          je,
          Ce(
            Object(p.a)(function(e) {
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
                          var n = _e(t);
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
            }, E.a)
          )
        ),
        Ae = Object(h.b)(Re),
        ke = n(10),
        Pe = n(15),
        Ie = n(12),
        De = n(11),
        we = n(13),
        Ne = n(21),
        Le = n.n(Ne),
        Me = function(e) {
          return "".concat("?comments/").concat(e, "/");
        },
        He = function(e) {
          return "?subreddits/sub/" + e + "/";
        },
        Be = function(e) {
          return "?posts/" + e + "/";
        },
        Fe = function(e) {
          return e ? { headers: { Authorization: "Token ".concat(e) } } : {};
        },
        qe = function(e) {
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
        xe = function() {
          return { type: "HIDE_USER_AUTH_MODAL" };
        },
        Qe = function(e) {
          return { type: "UPDATE_USER_AUTH_MODAL_ERROR", errorMessage: e };
        },
        Ve = function(e, t) {
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
                Le.a.post("?users/login/", n).then(function(e) {
                  return e.data;
                })
              );
              var n;
            },
            successActionCreator: xe,
            failureActionCreator: Qe
          };
        },
        Ge = function(e, t, n) {
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
                Le.a.post("?users/create/", r).then(function(e) {
                  return e.data;
                })
              );
              var r;
            },
            failureActionCreator: Qe,
            successActionCreator: We
          };
        },
        Ke = function() {
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
                  Le.a.post("?users/logout/", null, Fe(e)).then(function(e) {
                    return e.data;
                  })
                );
                var e;
              }
            });
          };
        },
        We = function() {
          return qe("login", "User profile created! Please log in.");
        },
        ze = function(e) {
          return {
            type: "API_USER_AUTH_UPDATE",
            types: {
              request: "USER_AUTH_UPDATE_REQUEST",
              success: "USER_AUTH_UPDATE_SUCCESS",
              failure: "USER_AUTH_UPDATE_FAILURE"
            },
            callAPI: function() {
              return (function(e) {
                return Le.a
                  .get(
                    (function(e) {
                      return "?users/" + "user/".concat(e, "/");
                    })(e)
                  )
                  .then(function(e) {
                    return e.data;
                  });
              })(e);
            }
          };
        },
        Je = function(e) {
          return {
            type: "API_SUB_DETAIL",
            types: {
              request: "FETCH_SUB_DETAIL_REQUEST",
              success: "FETCH_SUB_DETAIL_SUCCESS",
              failure: "FETCH_SUB_DETAIL_FAILURE"
            },
            callAPI: function() {
              return (function(e) {
                return Le.a.get(He(e)).then(function(e) {
                  return e.data;
                });
              })(e);
            }
          };
        },
        Xe = function(e) {
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
                  return Le.a.post("?subreddits/", e, Fe(t)).then(function(e) {
                    return e.data;
                  });
                })(e, n().userAuth.token);
              }
            });
          };
        },
        Ye = function(e, t) {
          return function(n, r) {
            return n({
              type: "API_SUBREDDIT_SUBSCRIBE",
              types: {
                request: "SUBREDDIT_SUBSCRIBE_REQUEST",
                success: $e,
                failure: "SUBREDDIT_SUBSCRIBE_FAILURE"
              },
              callAPI: function() {
                return (function(e, t, n) {
                  var r = { action: t };
                  return Le.a
                    .post(
                      (function(e) {
                        return "?subreddits/sub/" + e + "/subscribe/";
                      })(e),
                      r,
                      Fe(n)
                    )
                    .then(function(e) {
                      return e.data;
                    });
                })(e, t, r().userAuth.token);
              }
            });
          };
        },
        $e = function(e, t, n) {
          return (
            n({ type: "SUBREDDIT_SUBSCRIBE_SUCCESS", data: e }),
            t().userAuth.username ? n(ze(t().userAuth.username)) : null
          );
        },
        Ze = n(146),
        et = (n(254), n(42)),
        tt = (n(312),
        function(e) {
          var t = e.loading,
            n = e.children,
            r = e.className,
            o = Object(N.a)(e, ["loading", "children", "className"]),
            s = a.a.createElement(et.CircleLoader, {
              size: 20,
              className: "display: inline-block"
            });
          return a.a.createElement(
            "div",
            { className: "loading-button-container" },
            a.a.createElement(
              Ze.a,
              Object.assign({}, o, {
                className: r || "loading-button",
                disabled: t
              }),
              t ? s : n
            )
          );
        }),
        nt = (n(324),
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
        rt = n(75),
        at = (n(326),
        function(e, t) {
          return function(n) {
            return function(r) {
              return e(r) ? a.a.createElement(t, r) : a.a.createElement(n, r);
            };
          };
        }),
        ot = function(e) {
          return function(t) {
            return function(n) {
              return e(n) ? a.a.createElement(t, n) : null;
            };
          };
        },
        st = Object(rt.a)(
          ot(function(e) {
            return e.authenticatedUsername;
          }),
          at(
            function(e) {
              return e.userSubscriptions.includes(e.subredditTitle);
            },
            function(e) {
              var t = e.makeSubscriptionRequest,
                n = e.subredditTitle;
              return a.a.createElement(
                Ze.a,
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
            Ze.a,
            {
              className: "subscribe-button",
              onClick: function() {
                return t(n, "sub");
              }
            },
            "SUBSCRIBE"
          );
        }),
        ct = function(e) {
          var t = e.title,
            n = e.description,
            r = e.makeSubscriptionRequest,
            o = e.userSubs.subscribed,
            s = e.authenticatedUsername;
          return a.a.createElement(
            "div",
            { className: "sidebar-content" },
            a.a.createElement("div", { className: "title" }, "r/", t),
            a.a.createElement("div", { className: "description" }, n),
            a.a.createElement(st, {
              makeSubscriptionRequest: r,
              userSubscriptions: o,
              subredditTitle: t,
              authenticatedUsername: s
            }),
            a.a.createElement(
              Ze.a,
              {
                id: "create-post-button",
                className: "sidebar-button",
                onClick: function() {
                  return e.history.push("/r/".concat(e.title, "/createPost"));
                }
              },
              "CREATE POST"
            )
          );
        },
        it = n(550),
        lt = (n(328),
        function() {
          return a.a.createElement(
            "div",
            null,
            a.a.createElement(
              it.a,
              null,
              a.a.createElement(
                it.a.Body,
                { id: "pulse-loader-panel-body" },
                a.a.createElement(et.PulseLoader, {
                  className: "panel-clip-loader",
                  color: "#BFEFFF"
                })
              )
            )
          );
        }),
        ut = function(e) {
          var t = e.panelNumber,
            n = Object(J.a)(Array(t).keys()).map(function(e) {
              return a.a.createElement(lt, { key: e });
            });
          return a.a.createElement("ul", null, n);
        };
      ut.defaultProps = { panelNumber: 5 };
      var dt = ut,
        mt = (n(344),
        function() {
          return a.a.createElement(
            "div",
            { className: "sidebar-loader-container" },
            a.a.createElement(et.PulseLoader, { color: "#BFEFFF" })
          );
        }),
        pt = (n(346),
        function() {
          return a.a.createElement(
            "div",
            { className: "block-loader-container" },
            a.a.createElement(et.PulseLoader, { color: "#BFEFFF" })
          );
        }),
        Et = (n(348),
        function(e) {
          var t = e.skinny,
            n = e.primaryComponent,
            r = Object(N.a)(e, ["skinny", "primaryComponent"]),
            o = t ? "skinny-container" : "",
            s = at(function(e) {
              return e.loading;
            }, mt)(ct);
          return a.a.createElement(
            "div",
            { className: "subreddit-container " + o },
            a.a.createElement("div", { className: "primary-container" }, n(r)),
            a.a.createElement(
              "div",
              { className: "sidebar-container" },
              a.a.createElement(s, r)
            )
          );
        }),
        ht = (function(e) {
          function t() {
            return (
              Object(ke.a)(this, t),
              Object(Ie.a)(this, Object(De.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
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
                  return a.a.createElement(Et, this.props);
                }
              }
            ]),
            t
          );
        })(r.Component),
        ft = Object(c.b)(
          function(e) {
            return {
              title: e.subreddit.title,
              description: e.subreddit.description,
              loading: e.subreddit.loading,
              userSubs: {
                subscribed: e.userAuth.subs.map(function(e) {
                  return e.title;
                }),
                moderated: e.userAuth.moderated_subs.map(function(e) {
                  return e.title;
                })
              },
              authenticatedUsername: T(e)
            };
          },
          function(e) {
            return {
              fetchSubDetail: function(t) {
                return e(Je(t));
              },
              makeSubscriptionRequest: function(t, n) {
                return e(Ye(t, n));
              }
            };
          }
        )(ht),
        bt = n(551),
        St = n(546),
        vt = n(119),
        yt = (n(116), n(541)),
        Ot = n(542),
        gt = n(96),
        Tt = function(e) {
          var t = e.subscribed.map(function(e) {
            return a.a.createElement(
              gt.LinkContainer,
              { key: e.pk, exact: !0, to: "/r/" + e.title },
              a.a.createElement(yt.a, { eventKey: e.pk }, e.title)
            );
          });
          return a.a.createElement(
            Ot.a,
            {
              className: "feed-dropdown",
              eventKey: 3,
              title: "feed",
              id: "basic-nav-dropdown"
            },
            a.a.createElement(
              gt.LinkContainer,
              { exact: !0, to: "/" },
              a.a.createElement(yt.a, { eventKey: 3.1 }, "Home")
            ),
            a.a.createElement(
              gt.LinkContainer,
              { exact: !0, to: "/r/popular" },
              a.a.createElement(yt.a, { eventKey: 3.2 }, "Popular")
            ),
            a.a.createElement(
              gt.LinkContainer,
              { exact: !0, to: "/r/all" },
              a.a.createElement(yt.a, { eventKey: 3.3 }, "All")
            ),
            a.a.createElement(yt.a, { divider: !0, eventKey: 3.4 }),
            t
          );
        },
        _t = n(28),
        Ct = n.n(_t),
        Ut = n(39),
        jt = n(18),
        Rt = n(353),
        At = n(543),
        kt = n(544),
        Pt = n(553),
        It = n(545),
        Dt = function(e) {
          var t = e.id,
            n = e.label,
            r = e.help,
            o = Object(N.a)(e, ["id", "label", "help"]);
          return a.a.createElement(
            At.a,
            { controlId: t },
            a.a.createElement(kt.a, null, n),
            a.a.createElement(Pt.a, o, r && a.a.createElement(It.a, null, r))
          );
        },
        wt = (n(364),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(ke.a)(this, t),
              ((n = Object(Ie.a)(
                this,
                Object(De.a)(t).call(this, e)
              )).handleChange = function(e) {
                n.setState({ query: e.target.value });
              }),
              (n.state = { query: "" }),
              (n.handleSearchSubmit = n.handleSearchSubmit.bind(
                Object(jt.a)(Object(jt.a)(n))
              )),
              n
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
              {
                key: "handleSearchSubmit",
                value: (function() {
                  var e = Object(Ut.a)(
                    Ct.a.mark(function e(t) {
                      return Ct.a.wrap(
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
                    bt.a.Form,
                    { pullLeft: !0 },
                    a.a.createElement(
                      "form",
                      { onSubmit: this.handleSearchSubmit },
                      a.a.createElement(Dt, {
                        id: "search-bar-input",
                        type: "text",
                        placeholder: "Search...",
                        name: "search",
                        onChange: this.handleChange,
                        value: this.state.query
                      }),
                      a.a.createElement(
                        tt,
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
        Nt = Object(Rt.a)(wt),
        Lt = function(e) {
          return {
            type: "API_SEARCH",
            types: {
              request: "SEARCH_REQUEST",
              success: "SEARCH_SUCCESS",
              failure: "SEARCH_FAILURE"
            },
            callAPI: function() {
              return (function(e) {
                return Le.a
                  .get("?search/", { params: { q: e } })
                  .then(function(e) {
                    return e.data;
                  });
              })(e);
            }
          };
        },
        Mt = Object(c.b)(null, function(e) {
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
          return a.a.createElement(Nt, { handleSearchRequest: t });
        }),
        Ht = function(e) {
          var t = e.children,
            n = e.subscribed;
          return a.a.createElement(
            bt.a,
            { inverse: !0, fixed: "true", fluid: !0 },
            a.a.createElement(
              bt.a.Header,
              null,
              a.a.createElement(
                bt.a.Brand,
                null,
                a.a.createElement(vt.a, { exact: !0, to: "/" }, "reReddit")
              )
            ),
            a.a.createElement(
              St.a,
              null,
              a.a.createElement(Tt, { subscribed: n })
            ),
            a.a.createElement(Mt, null),
            t
          );
        },
        Bt = n(547),
        Ft = (n(366),
        function(e) {
          var t = e.children,
            n = e.onClick,
            r = e.inverted ? "user-button-inverted" : "user-button-default";
          return a.a.createElement(
            "div",
            null,
            a.a.createElement(
              Ze.a,
              { onClick: n, id: r, className: "user-button" },
              t
            )
          );
        }),
        qt = (n(182),
        function(e) {
          var t = e.showModal;
          e.middleWareTest;
          return a.a.createElement(
            St.a,
            { pullRight: !0, className: "right-user-links" },
            a.a.createElement(
              Bt.a,
              { eventKey: 4 },
              a.a.createElement(
                Ft,
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
              Bt.a,
              { eventKey: 5 },
              a.a.createElement(
                Ft,
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
        xt = function(e) {
          var t = e.username,
            n = e.handleLogout;
          return a.a.createElement(
            St.a,
            { pullRight: !0, className: "auth-dropdown-container" },
            a.a.createElement(
              Ot.a,
              {
                className: "user-dropdown",
                eventKey: 3,
                title: t,
                id: "user-nav-dropdown"
              },
              a.a.createElement(yt.a, { eventKey: 3.1 }, "Action"),
              a.a.createElement(yt.a, { eventKey: 3.2 }, "Another action"),
              a.a.createElement(yt.a, { eventKey: 3.3 }, "Something else here"),
              a.a.createElement(yt.a, { divider: !0 }),
              a.a.createElement(
                yt.a,
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
        Qt = function(e) {
          var t = e.showModal,
            n = e.username,
            r = e.handleLogout;
          e.middleWareTest;
          return n
            ? a.a.createElement(xt, { username: n, handleLogout: r })
            : a.a.createElement(qt, { showModal: t });
        },
        Vt = (function(e) {
          function t() {
            var e, n;
            Object(ke.a)(this, t);
            for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
              o[s] = arguments[s];
            return (
              ((n = Object(Ie.a)(
                this,
                (e = Object(De.a)(t)).call.apply(e, [this].concat(o))
              )).render = function() {
                return a.a.createElement(
                  Ht,
                  { subscribed: n.props.subscribed },
                  a.a.createElement(Qt, {
                    showModal: n.props.showModal,
                    username: n.props.username,
                    handleLogout: n.props.handleLogout
                  })
                );
              }),
              n
            );
          }
          return Object(we.a)(t, e), t;
        })(r.Component),
        Gt = Object(c.b)(
          function(e) {
            return {
              username: e.userAuth.username,
              subscribed: e.userAuth.subs
            };
          },
          function(e) {
            return {
              showModal: function(t) {
                return e(qe(t));
              },
              handleLogout: function() {
                return e(Ke());
              }
            };
          },
          null,
          { pure: !1 }
        )(Vt),
        Kt = n(552),
        Wt = (n(369), n(548)),
        zt = n(33),
        Jt = (n(371),
        function(e) {
          return a.a.createElement(
            Wt.a,
            { bsStyle: "success", className: "alert-message" },
            a.a.createElement(zt.c, { color: "green", size: "3em" }),
            a.a.createElement(
              "p",
              { className: "alert-text", id: "success-text", align: "center" },
              e.children
            )
          );
        }),
        Xt = function(e) {
          return a.a.createElement(
            Wt.a,
            { bsStyle: "danger", className: "alert-message" },
            a.a.createElement(zt.g, { color: "red", size: "3em" }),
            a.a.createElement(
              "p",
              { className: "alert-text", id: "error-text", align: "center" },
              e.children
            )
          );
        },
        Yt = ot(function(e) {
          return e.children;
        })(Xt),
        $t = function(e) {
          var t,
            n = e.handleHide,
            r = e.title,
            o = e.formComponent,
            s = e.messageProps,
            c = s.errorMessage,
            i = s.successMessage,
            l = null;
          return (
            i && (l = a.a.createElement(Jt, null, i)),
            c && (t = a.a.createElement(Xt, null, c)),
            a.a.createElement(
              Kt.a,
              { onHide: n, show: !0 },
              a.a.createElement(
                Kt.a.Header,
                { closeButton: !0 },
                a.a.createElement(Kt.a.Title, null, r)
              ),
              a.a.createElement(Kt.a.Body, null, l, t, o)
            )
          );
        },
        Zt = (n(387),
        function(e) {
          var t = e.bsStyle,
            n = e.handleClick,
            r = e.loading,
            o = e.children,
            s = e.type,
            c = r
              ? a.a.createElement(et.CircleLoader, {
                  size: 20,
                  className: "display: inline-block;"
                })
              : null;
          return a.a.createElement(
            "div",
            { id: "single-button" },
            a.a.createElement(
              Ze.a,
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
        en = (n(389),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(ke.a)(this, t),
              ((n = Object(Ie.a)(
                this,
                Object(De.a)(t).call(this, e)
              )).handleChange = function(e) {
                n.setState(Object(L.a)({}, e.target.name, e.target.value));
              }),
              (n.state = { username: "", password: "" }),
              (n.handleChange = n.handleChange.bind(
                Object(jt.a)(Object(jt.a)(n))
              )),
              (n.handleSubmit = n.handleSubmit.bind(
                Object(jt.a)(Object(jt.a)(n))
              )),
              n
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
              {
                key: "handleSubmit",
                value: (function() {
                  var e = Object(Ut.a)(
                    Ct.a.mark(function e() {
                      return Ct.a.wrap(
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
                      a.a.createElement(Dt, {
                        id: "formControlsText",
                        label: "Username:",
                        type: "text",
                        value: this.state.username,
                        placeholder: "username",
                        name: "username",
                        onChange: this.handleChange,
                        autoFocus: !0
                      }),
                      a.a.createElement(Dt, {
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
                        a.a.createElement(Zt, {
                          bsStyle: "primary",
                          handleClick: this.handleSubmit,
                          loading: this.props.loading,
                          children: "Login",
                          type: "submit"
                        }),
                        a.a.createElement(Zt, {
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
        tn = Object(Rt.a)(en),
        nn = Object(c.b)(
          function(e) {
            return { loading: e.userAuth.loading };
          },
          function(e) {
            return {
              handleHide: function() {
                return e({ type: "HIDE_USER_AUTH_MODAL" });
              },
              handleLogin: function(t, n) {
                return e(Ve(t, n));
              }
            };
          }
        )(function(e) {
          var t = e.handleHide,
            n = e.handleLogin,
            r = e.loading,
            o = e.messageProps;
          return a.a.createElement($t, {
            handleHide: t,
            title: "Login",
            messageProps: o,
            formComponent: a.a.createElement(tn, {
              handleLogin: n,
              handleHide: t,
              loading: r
            })
          });
        }),
        rn = (n(391),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(ke.a)(this, t),
              ((n = Object(Ie.a)(
                this,
                Object(De.a)(t).call(this, e)
              )).handleChange = function(e) {
                n.setState(Object(L.a)({}, e.target.name, e.target.value));
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
                    a.a.createElement(Dt, {
                      id: "formControlsText",
                      label: "Username:",
                      type: "text",
                      value: n.state.username,
                      placeholder: "username",
                      name: "username",
                      onChange: n.handleChange,
                      autoFocus: !0
                    }),
                    a.a.createElement(Dt, {
                      id: "formControlsPassword",
                      label: "Password:",
                      type: "password",
                      value: n.state.password,
                      placeholder: "password",
                      name: "password",
                      onChange: n.handleChange
                    }),
                    a.a.createElement(Dt, {
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
                      a.a.createElement(Zt, {
                        bsStyle: "primary",
                        handleClick: n.handleSubmit,
                        loading: n.props.loading,
                        children: "Register",
                        type: "submit"
                      }),
                      a.a.createElement(Zt, {
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
                Object(jt.a)(Object(jt.a)(n))
              )),
              (n.state = { username: "", password: "", email: "" }),
              n
            );
          }
          return Object(we.a)(t, e), t;
        })(r.Component)),
        an = Object(c.b)(
          function(e) {
            return { loading: e.userAuth.loading };
          },
          function(e) {
            return {
              handleHide: function() {
                return e({ type: "HIDE_USER_AUTH_MODAL" });
              },
              handleRegister: function(t, n, r) {
                return e(Ge(t, n, r));
              }
            };
          }
        )(function(e) {
          var t = e.handleHide,
            n = e.handleRegister,
            r = e.loading,
            o = e.messageProps;
          return a.a.createElement($t, {
            handleHide: t,
            title: "Register",
            messageProps: o,
            formComponent: a.a.createElement(rn, {
              handleRegister: n,
              handleHide: t,
              loading: r
            })
          });
        }),
        on = Object(c.b)(function(e) {
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
              return a.a.createElement(nn, { messageProps: n });
            case "register":
              return a.a.createElement(an, { messageProps: n });
            default:
              return null;
          }
        }),
        sn = n(217),
        cn = n.n(sn),
        ln = (n(496),
        n(498),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(ke.a)(this, t),
              ((n = Object(Ie.a)(
                this,
                Object(De.a)(t).call(this, e)
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
                Object(jt.a)(Object(jt.a)(n))
              )),
              (n.quillNode = a.a.createRef()),
              n
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
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
                    a.a.createElement(cn.a, {
                      value: this.state.editorHtml,
                      onChange: this.handleChange,
                      placeholder: n || "What are your thoughts?",
                      modules: this.modules,
                      formats: this.formats,
                      ref: this.quillNode,
                      onBlur: s
                    }),
                    a.a.createElement(
                      tt,
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
        un = (n(500),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(ke.a)(this, t),
              ((n = Object(Ie.a)(
                this,
                Object(De.a)(t).call(this, e)
              )).handleTitleChange = function(e) {
                return n.setState({ title: e.target.value });
              }),
              (n.state = { title: "" }),
              (n.handleSubmit = n.handleSubmit.bind(
                Object(jt.a)(Object(jt.a)(n))
              )),
              n
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
              {
                key: "handleSubmit",
                value: (function() {
                  var e = Object(Ut.a)(
                    Ct.a.mark(function e(t) {
                      return Ct.a.wrap(
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
                    ot(function(e) {
                      return e.children;
                    })(Xt));
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
                        a.a.createElement(Dt, {
                          id: "create-post-title",
                          placeholder: "Title",
                          type: "text",
                          value: this.state.title,
                          onChange: this.handleTitleChange,
                          name: "username"
                        })
                      ),
                      a.a.createElement(ln, {
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
        dn = Object(Rt.a)(un),
        mn = function(e, t, n, r) {
          var a = { title: e, body: t };
          return Le.a
            .post(
              (function(e) {
                return He(e) + "post/";
              })(n),
              a,
              Fe(r)
            )
            .then(function(e) {
              return e.data;
            });
        },
        pn = function(e, t) {
          return function(n, r) {
            return n({
              type: "API_SUB_POST_LIST",
              types: {
                request: "FETCH_POST_LIST_REQUEST",
                success: "FETCH_POST_LIST_SUCCESS",
                failure: "FETCH_POST_LIST_FAILURE"
              },
              callAPI: function() {
                return (function(e, t, n, r) {
                  var a = { orderby: t, username: n };
                  return Le.a
                    .get(
                      (function(e) {
                        return "?posts/subreddit-list/" + e + "/";
                      })(e),
                      Object(S.a)({ params: a }, Fe(r))
                    )
                    .then(function(e) {
                      return e.data;
                    });
                })(e, t, T(r()), r().userAuth.token);
              }
            });
          };
        },
        En = function(e, t) {
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
                  return Le.a.patch(Be(e), r, Fe(n)).then(function(e) {
                    return e.data;
                  });
                })(e, t, r().userAuth.token);
              }
            });
          };
        },
        hn = function(e) {
          return function(t, n) {
            return t({
              type: "API_DELETE_POST",
              types: {
                request: fn(e),
                success: "DELETE_POST_SUCCESS",
                failure: "DELETE_POST_FAILURE"
              },
              callAPI: function() {
                return (function(e, t) {
                  return Le.a.delete(Be(e), Fe(t)).then(function(e) {
                    return e.data;
                  });
                })(e, n().userAuth.token);
              }
            });
          };
        },
        fn = function(e) {
          return function(t) {
            return t({ type: "DELETE_POST_REQUEST", pk: e });
          };
        },
        bn = function(e) {
          return {
            type: "API_POST_DETAIL",
            types: {
              request: "FETCH_POST_DETAIL_REQUEST",
              success: "FETCH_POST_DETAIL_SUCCESS",
              failure: "FETCH_POST_DETAIL_FAILURE"
            },
            callAPI: function() {
              return (function(e) {
                return Le.a.get(Be(e)).then(function(e) {
                  return e.data;
                });
              })(e);
            }
          };
        },
        Sn = (function(e) {
          function t() {
            return (
              Object(ke.a)(this, t),
              Object(Ie.a)(this, Object(De.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
              {
                key: "render",
                value: function() {
                  return a.a.createElement(dn, this.props);
                }
              }
            ]),
            t
          );
        })(r.Component),
        vn = Object(c.b)(
          function(e) {
            return {
              errorMessage: re(e),
              loading: ne(e),
              subredditTitle: y(e)
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
                          return mn(e, t, n, a().userAuth.token);
                        }
                      });
                    };
                  })(t, n, r)
                );
              }
            };
          }
        )(Sn),
        yn = n(87),
        On = (n(502),
        (function(e) {
          function t() {
            var e, n;
            Object(ke.a)(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((n = Object(Ie.a)(
                this,
                (e = Object(De.a)(t)).call.apply(e, [this].concat(a))
              )).upvotedStyle = { color: "#cc3700" }),
              (n.downvotedStyle = { color: "#8DA8FF" }),
              n
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
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
                        a.a.createElement(zt.b, null)
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
                        a.a.createElement(zt.a, null)
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component)),
        gn = function(e) {
          return function(t, n) {
            return t({
              type: "API_VOTE",
              types: {
                request: "VOTE_REQUEST",
                success: Tn,
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
                  return Le.a.post("?vote/", s, Fe(t)).then(function(e) {
                    return e.data;
                  });
                })(e, n().userAuth.token);
              }
            });
          };
        },
        Tn = function(e, t, n) {
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
        _n = Object(c.b)(null, function(e, t) {
          return {
            handleVote: function(n) {
              return e(
                gn({ voteType: n, itemType: t.itemType, itemPk: t.itemPk })
              );
            }
          };
        })(function(e) {
          var t = e.voteDisplayState,
            n = e.handleVote,
            r = e.upvotes;
          return a.a.createElement(On, {
            displayState: t,
            handleVote: n,
            upvotes: r
          });
        }),
        Cn = n(540),
        Un = (n(504),
        function(e) {
          var t = e.children;
          return a.a.createElement(
            Cn.a,
            { id: "ellipsis-dropdown" },
            a.a.createElement(
              Cn.a.Toggle,
              { noCaret: !0, className: "toggle-button" },
              a.a.createElement(zt.e, null)
            ),
            a.a.createElement(
              Cn.a.Menu,
              { className: "ellipsis-dropdown-menu" },
              t
            )
          );
        }),
        jn = n(549),
        Rn = n(554),
        An = (n(506),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(ke.a)(this, t),
              ((n = Object(Ie.a)(
                this,
                Object(De.a)(t).call(this, e)
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
                jn.a,
                { id: "copy-tooltip" },
                "Copied Link"
              )),
              n
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.shareUrl;
                  return a.a.createElement(
                    r.Fragment,
                    null,
                    a.a.createElement(
                      Rn.a,
                      {
                        placement: "bottom",
                        overlay: this.copyTooltip,
                        trigger: "focus",
                        delayHide: 4e3
                      },
                      a.a.createElement(
                        Ze.a,
                        {
                          bsSize: "xsmall",
                          className: "share-button",
                          onClick: this.copyToClipboard
                        },
                        a.a.createElement(zt.f, null),
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
        kn = (n(516),
        (function(e) {
          function t() {
            var e, n;
            Object(ke.a)(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((n = Object(Ie.a)(
                this,
                (e = Object(De.a)(t)).call.apply(e, [this].concat(a))
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
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
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
                    ot(function(e) {
                      return e.showEllipsis;
                    })(Un));
                  return a.a.createElement(
                    "div",
                    {
                      className: "post-segment-panel",
                      name: "postPanel",
                      onClick: this.handlePanelClick
                    },
                    a.a.createElement(_n, {
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
                          yn.a,
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
                            yn.a,
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
                          yn.a,
                          {
                            to: "/r/"
                              .concat(o, "/postDetail/")
                              .concat(n, "/comments")
                          },
                          a.a.createElement(
                            Ze.a,
                            { bsSize: "xsmall", className: "post-buttons" },
                            "Comments"
                          )
                        ),
                        a.a.createElement(An, {
                          shareUrl: ""
                            .concat(window.location, "/postDetail/")
                            .concat(n)
                        }),
                        a.a.createElement(
                          d,
                          { showEllipsis: c === s },
                          a.a.createElement(
                            yt.a,
                            { eventKey: 1, onSelect: u },
                            "delete"
                          ),
                          a.a.createElement(
                            yt.a,
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
        Pn = Object(Rt.a)(kn),
        In = Object(c.b)(
          function(e, t) {
            var n = t.postPk;
            t.usage;
            return { post: $(e, n), authUsername: T(e) };
          },
          function(e, t) {
            return {
              handleDeletePost: function() {
                return e(hn(t.postPk));
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
          return a.a.createElement(Pn, {
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
        Dn = function() {
          return a.a.createElement(
            "div",
            { className: "empty-list-content" },
            a.a.createElement("h2", null, "Such Empty!")
          );
        },
        wn = (n(518),
        Object(Rt.a)(function(e) {
          var t,
            n = e.loading,
            r = e.error,
            o = e.allPosts;
          if (r) return a.a.createElement(Xt, null, r);
          if (n) t = a.a.createElement(dt, { panelNumber: 8 });
          else if (0 === o.length) t = a.a.createElement(Dn, null);
          else {
            var s = o.map(function(e) {
              return a.a.createElement(In, { postPk: e, key: e });
            });
            t = a.a.createElement("ul", null, s);
          }
          return a.a.createElement("div", { className: "postlist-content" }, t);
        })),
        Nn = (function(e) {
          function t() {
            return (
              Object(ke.a)(this, t),
              Object(Ie.a)(this, Object(De.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
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
                  return a.a.createElement(wn, this.props);
                }
              }
            ]),
            t
          );
        })(r.Component),
        Ln = Object(c.b)(
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
                return e(pn(t, n));
              }
            };
          }
        )(Nn),
        Mn = (n(207),
        function(e) {
          var t = e.title,
            n = e.poster;
          return a.a.createElement(
            "div",
            { className: "post-info-line" },
            a.a.createElement(
              "div",
              { className: "link-to-sub" },
              a.a.createElement(yn.a, { to: "/r/".concat(t) }, "r/".concat(t))
            ),
            a.a.createElement("span", { id: "divider" }, "-"),
            a.a.createElement(
              "div",
              { className: "link-to-user" },
              a.a.createElement(
                yn.a,
                { to: "/u/".concat(n) },
                "Posted by u/".concat(n)
              )
            )
          );
        }),
        Hn = Object(c.b)(
          function(e) {
            return { loading: me(e) };
          },
          function(e, t) {
            return {
              handleSubmit: (function() {
                var n = Object(Ut.a)(
                  Ct.a.mark(function n(r) {
                    return Ct.a.wrap(
                      function(n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.prev = 0), (n.next = 3), e(En(t.pk, r));
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
          return a.a.createElement(ln, {
            handleSubmit: t,
            placeholder: n,
            initialValue: n,
            usage: "update",
            loading: r
          });
        }),
        Bn = n(221),
        Fn = n(97),
        qn = function(e) {
          return function(t, n) {
            return t({
              type: "API_POST_COMMENT_TREES",
              types: {
                request: "FETCH_POST_COMMENT_TREES_REQUEST",
                success: xn,
                failure: "FETCH_POST_COMMENT_TREES_FAILURE"
              },
              callAPI: function() {
                return (function(e, t) {
                  var n = t ? { params: { username: t } } : {};
                  return Le.a
                    .get(
                      (function(e) {
                        return "".concat("?comments/", "post/").concat(e, "/");
                      })(e),
                      n
                    )
                    .then(function(e) {
                      return e.data;
                    });
                })(e, n().userAuth.username);
              }
            });
          };
        },
        xn = function(e, t, n) {
          if (0 === e.length)
            return n({
              type: "FETCH_POST_COMMENT_TREES_SUCCESS",
              data: { entities: { comments: {}, posters: {} }, result: [] }
            });
          var r = new Fn.b.Entity("posters", {}, { idAttribute: "pk" }),
            a = new Fn.b.Entity(
              "comments",
              { poster: r },
              { idAttribute: "pk" }
            ),
            o = new Fn.b.Array(a);
          a.define({ children: o });
          var s = Object(Fn.a)(e, o);
          return (
            Object.entries(s.entities.comments).forEach(function(e) {
              var t = Object(Bn.a)(e, 2),
                n = t[0],
                r = t[1],
                a = r.vote_state,
                o = Object(N.a)(r, ["vote_state"]);
              s.entities.comments[n] = Object(S.a)({}, o, {
                voteDisplayState: a
              });
            }),
            n({ type: "FETCH_POST_COMMENT_TREES_SUCCESS", data: s })
          );
        },
        Qn = function(e) {
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
                  return Le.a.post("?comments/", a, Fe(t)).then(function(e) {
                    return e.data;
                  });
                })(e, n().userAuth.token);
              }
            });
          };
        },
        Vn = function(e) {
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
                  return Le.a.delete(Me(e), Fe(t)).then(function(e) {
                    return e.data;
                  });
                })(e, n().userAuth.token);
              }
            });
          };
        },
        Gn = function(e) {
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
                  return Le.a.patch(Me(e.pk), e, Fe(t)).then(function(e) {
                    return e.data;
                  });
                })(e, n().userAuth.token);
              }
            });
          };
        },
        Kn = (n(521),
        n(523),
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
                      Qn({
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
                      e(Gn({ body: n, pk: t.pk }))
                    );
                  }
                };
              default:
                return {};
            }
          }
        )(function(e) {
          return a.a.createElement(ln, e);
        })),
        Wn = (n(525),
        function(e) {
          var t = e.posterUsername,
            n = e.upvotes,
            r = e.created,
            o = e.deleted,
            s = !1 ^ n ? "point" : "points",
            c = o
              ? "comment deleted"
              : a.a.createElement(yn.a, { to: "/" }, "u/".concat(t));
          return a.a.createElement(
            "div",
            { className: "poster-info-container" },
            a.a.createElement("span", null, c),
            a.a.createElement("span", null, o || "".concat(n, " ").concat(s)),
            a.a.createElement("span", null, "-"),
            a.a.createElement("span", null, "created: ".concat(r))
          );
        }),
        zn = (n(527),
        (function(e) {
          function t() {
            return (
              Object(ke.a)(this, t),
              Object(Ie.a)(this, Object(De.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
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
                    l = ot(function(e) {
                      return e.authUsername === e.posterUsername;
                    })(Un);
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
                        a.a.createElement(zt.d, null)
                      ),
                      a.a.createElement(
                        Ze.a,
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
                          yt.a,
                          { eventKey: 2, onSelect: i },
                          "edit"
                        ),
                        a.a.createElement(
                          yt.a,
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
        Jn = (function(e) {
          function t(e) {
            var n;
            return (
              Object(ke.a)(this, t),
              ((n = Object(Ie.a)(this, Object(De.a)(t).call(this, e))).state = {
                showReplyEditor: !1,
                showUpdateEditor: !1
              }),
              (n.handleToggleReplyEditor = n.handleToggleReplyEditor.bind(
                Object(jt.a)(Object(jt.a)(n))
              )),
              (n.handleToggleUpdateEditor = n.handleToggleUpdateEditor.bind(
                Object(jt.a)(Object(jt.a)(n))
              )),
              n
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
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
                    p = ot(function(e) {
                      return e.showEditor;
                    })(Kn),
                    E = Object(rt.a)(
                      ot(function(e) {
                        return !e.deleted;
                      }),
                      at(function(e) {
                        return e.showUpdateEditor;
                      }, Kn)
                    )(zn);
                  return a.a.createElement(
                    "div",
                    { className: "comment-tree-content" },
                    a.a.createElement(
                      "div",
                      { className: "comment-voter-collapser" },
                      u ||
                        a.a.createElement(_n, {
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
                        a.a.createElement(Wn, {
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
        Xn = n(219),
        Yn = (n(529),
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
              a.a.createElement(Xn.a, null)
            ),
            a.a.createElement(
              "div",
              { className: "collapsed-links" },
              a.a.createElement(Wn, {
                posterUsername: t,
                upvotes: n,
                created: r,
                deleted: o
              })
            )
          );
        }),
        $n = (function(e) {
          function t(e) {
            var n;
            return (
              Object(ke.a)(this, t),
              ((n = Object(Ie.a)(this, Object(De.a)(t).call(this, e))).state = {
                collapsed: !1
              }),
              (n.handleToggleCollapse = n.handleToggleCollapse.bind(
                Object(jt.a)(Object(jt.a)(n))
              )),
              n
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
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
                      return a.a.createElement(Zn, { pk: e, key: e });
                    }));
                  var p = at(function(e) {
                    return e.collapsed;
                  }, Yn)(Jn);
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
        Zn = Object(c.b)(
          function(e, t) {
            return {
              commentData: G(e, t.pk),
              posterData: K(e, t.pk),
              authUsername: T(e)
            };
          },
          function(e, t) {
            return {
              handleDeleteComment: function() {
                return e(Vn(t.pk));
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
          return a.a.createElement($n, {
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
        er = function(e) {
          var t = e.rootCommentPks,
            n = e.error,
            r = e.loading,
            o = e.postPk,
            s = e.createCommentError;
          e.createCommentLoading;
          if (n) return a.a.createElement(Xt, null, n);
          var c = [];
          Array.isArray(t) &&
            t.length &&
            (c = t.map(function(e) {
              return a.a.createElement(Zn, { pk: e, key: e });
            }));
          var i = ot(function(e) {
              return e.children;
            })(Xt),
            l = at(function(e) {
              return e.loading;
            }, dt)(function() {
              return c;
            });
          return a.a.createElement(
            "div",
            { className: "comment-tree-list-container" },
            a.a.createElement(i, { children: s }),
            a.a.createElement(
              "div",
              { className: "top-comment-editor" },
              a.a.createElement(Kn, {
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
        tr = (function(e) {
          function t() {
            return (
              Object(ke.a)(this, t),
              Object(Ie.a)(this, Object(De.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.fetchCommentList(this.props.match.params.postId);
                }
              },
              {
                key: "render",
                value: function() {
                  return a.a.createElement(er, this.props);
                }
              }
            ]),
            t
          );
        })(r.Component),
        nr = Object(Rt.a)(
          Object(c.b)(
            function(e) {
              return {
                loading: W(e),
                rootCommentPks: V(e),
                error: e.comments.error,
                createCommentError: e.comments.createCommentError,
                createCommentLoading: e.comments.createCommentLoading,
                createdComment: e.comments.createdComment,
                postPk: I(e)
              };
            },
            function(e) {
              return {
                fetchCommentList: function(t) {
                  return e(qn(t));
                }
              };
            }
          )(tr)
        ),
        rr = (function(e) {
          function t(e) {
            var n;
            return (
              Object(ke.a)(this, t),
              ((n = Object(Ie.a)(
                this,
                Object(De.a)(t).call(this, e)
              )).scrollToCommentList = function() {
                window.scrollTo({
                  top: n.commentListNode.current.offsetTop,
                  behavior: "smooth"
                });
              }),
              (n.commentListNode = a.a.createRef()),
              (n.handleDelete = n.handleDelete.bind(
                Object(jt.a)(Object(jt.a)(n))
              )),
              n
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
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
                  var e = Object(Ut.a)(
                    Ct.a.mark(function e() {
                      return Ct.a.wrap(
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
                    m = ot(function(e) {
                      return e.showEllipsis;
                    })(Un);
                  return a.a.createElement(
                    "div",
                    { className: "post-detail-content" },
                    l
                      ? a.a.createElement(pt, null)
                      : a.a.createElement(
                          r.Fragment,
                          null,
                          a.a.createElement(Mn, { title: t, poster: n }),
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
                                  Hn,
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
                            a.a.createElement(An, {
                              shareUrl: "".concat(window.location.href)
                            }),
                            a.a.createElement(
                              m,
                              { showEllipsis: o === n },
                              a.a.createElement(
                                yt.a,
                                { eventKey: 1, onSelect: this.handleDelete },
                                "delete"
                              ),
                              a.a.createElement(
                                yt.a,
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
                      a.a.createElement(nr, null)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        ar = Object(Rt.a)(rr),
        or = (function(e) {
          function t() {
            return (
              Object(ke.a)(this, t),
              Object(Ie.a)(this, Object(De.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
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
                  return a.a.createElement(ar, {
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
        sr = Object(c.b)(
          function(e, t) {
            return {
              subredditTitle: t.title,
              body: k(e),
              title: A(e),
              posterUsername: P(e),
              pk: I(e),
              loading: D(e),
              showPostEditor: ue(e),
              editPostError: de(e),
              authUsername: T(e)
            };
          },
          function(e, t) {
            return {
              fetchPostDetail: function(t) {
                return e(bn(t));
              },
              handleDeletePost: function() {
                return e(hn(Number(t.match.params.postId)));
              },
              togglePostEditor: function() {
                return e({ type: "TOGGLE_POST_EDITOR" });
              }
            };
          }
        )(or),
        cr = (n(531),
        (function(e) {
          function t(e) {
            var n;
            return (
              Object(ke.a)(this, t),
              ((n = Object(Ie.a)(
                this,
                Object(De.a)(t).call(this, e)
              )).handleTitleChange = function(e) {
                return n.setState({ title: e.target.value });
              }),
              (n.handleDescriptionChange = function(e) {
                return n.setState({ description: e.target.value });
              }),
              (n.state = { description: "", title: "" }),
              (n.handleSubmit = n.handleSubmit.bind(
                Object(jt.a)(Object(jt.a)(n))
              )),
              n
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
              {
                key: "handleSubmit",
                value: (function() {
                  var e = Object(Ut.a)(
                    Ct.a.mark(function e() {
                      return Ct.a.wrap(
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
                        a.a.createElement(Yt, null, t),
                        a.a.createElement(
                          "form",
                          null,
                          a.a.createElement(
                            "div",
                            { className: "input-container" },
                            a.a.createElement(Dt, {
                              id: "title-input",
                              placeholder: "title",
                              type: "text",
                              value: this.state.title,
                              onChange: this.handleTitleChange,
                              name: "title"
                            }),
                            a.a.createElement(Dt, {
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
                              Zt,
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
        ir = Object(Rt.a)(cr),
        lr = (function(e) {
          function t() {
            return (
              Object(ke.a)(this, t),
              Object(Ie.a)(this, Object(De.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.errorMessage,
                    n = e.loading,
                    r = e.handleCreateSubreddit;
                  return a.a.createElement(ir, {
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
        ur = Object(c.b)(
          function(e) {
            return { errorMessage: se(e), loading: ce(e) };
          },
          function(e) {
            return {
              handleCreateSubreddit: function(t) {
                return e(Xe(t));
              }
            };
          }
        )(lr),
        dr = Object(c.b)(
          function(e) {
            return { authenticatedUsername: T(e), userSubscriptions: _(e) };
          },
          function(e) {
            return {
              makeSubscriptionRequest: function(t, n) {
                return e(Ye(t, n));
              }
            };
          }
        )(function(e) {
          var t = e.authenticatedUsername,
            n = e.userSubscriptions,
            r = e.subredditTitle,
            o = e.makeSubscriptionRequest;
          return a.a.createElement(st, {
            authenticatedUsername: t,
            userSubscriptions: n,
            subredditTitle: r,
            makeSubscriptionRequest: o
          });
        }),
        mr = (n(533),
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
              a.a.createElement(dr, { subredditTitle: t.title })
            )
          );
        }),
        pr = (function(e) {
          function t() {
            var e, n;
            Object(ke.a)(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((n = Object(Ie.a)(
                this,
                (e = Object(De.a)(t)).call.apply(e, [this].concat(a))
              )).handleSubredditRedirect = function() {
                return n.props.history.push(m(n.props.subreddit.title));
              }),
              n
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.subreddit;
                  return a.a.createElement(mr, {
                    subreddit: e,
                    handleSubredditRedirect: this.handleSubredditRedirect
                  });
                }
              }
            ]),
            t
          );
        })(r.Component),
        Er = Object(Rt.a)(
          Object(c.b)(function(e, t) {
            var n = t.pk;
            return { subreddit: ye(e, n) };
          })(pr)
        ),
        hr = (n(535),
        function(e) {
          e.loading, e.error;
          var t = e.allSubreddits.map(function(e) {
            return a.a.createElement(Er, { key: e, pk: e });
          });
          return a.a.createElement(
            "div",
            { className: "subreddit-search-results-container" },
            t
          );
        }),
        fr = (n(537),
        function(e) {
          var t = e.allPosts,
            n = e.allSubreddits,
            r = e.allUsers,
            o = e.loading,
            s = e.error,
            c = e.query,
            i = e.resultsView,
            l = e.changeResultsView,
            u = Object(rt.a)(
              at(
                function(e) {
                  return "users" === e.view;
                },
                function() {
                  return null;
                }
              ),
              at(function(e) {
                return "subreddits" === e.view;
              }, hr)
            )(wn);
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
                  nt,
                  {
                    active: "posts" === i,
                    onClick: function() {
                      return l("posts");
                    }
                  },
                  "Posts"
                ),
                a.a.createElement(
                  nt,
                  {
                    active: "subreddits" === i,
                    onClick: function() {
                      return l("subreddits");
                    }
                  },
                  "Subreddits"
                ),
                a.a.createElement(
                  nt,
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
        br = (function(e) {
          function t() {
            return (
              Object(ke.a)(this, t),
              Object(Ie.a)(this, Object(De.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(we.a)(t, e),
            Object(Pe.a)(t, [
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
                  return a.a.createElement(fr, {
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
        Sr = Object(c.b)(
          function(e) {
            return {
              query: be(e),
              allPosts: Z(e),
              allSubreddits: Se(e),
              allUsers: ve(e),
              error: he(e),
              loading: fe(e),
              resultsView: Oe(e)
            };
          },
          function(e) {
            return {
              searchRequest: function(t) {
                return e(Lt(t));
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
        )(br);
      s.a.render(
        a.a.createElement(
          c.a,
          { store: Re },
          a.a.createElement(
            d.a,
            { loading: null, persistor: Ae },
            a.a.createElement(
              i.a,
              null,
              a.a.createElement(
                "div",
                { className: "whole-page" },
                a.a.createElement(Gt, null),
                a.a.createElement(on, null),
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
                          ft,
                          Object.assign({}, e, {
                            skinny: !0,
                            primaryComponent: function(e) {
                              return a.a.createElement(vn, e);
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
                          ft,
                          Object.assign({}, e, {
                            primaryComponent: function(e) {
                              return a.a.createElement(sr, e);
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
                          ft,
                          Object.assign({}, e, {
                            primaryComponent: function(e) {
                              return a.a.createElement(
                                sr,
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
                          ft,
                          Object.assign({}, e, {
                            primaryComponent: function(e) {
                              return a.a.createElement(Ln, e);
                            }
                          })
                        );
                      }
                    }),
                    a.a.createElement(u.a, {
                      exact: !0,
                      path: "/createSubreddit",
                      render: function(e) {
                        return a.a.createElement(ur, {
                          match: e.match,
                          history: e.history
                        });
                      }
                    }),
                    a.a.createElement(u.a, {
                      exact: !0,
                      path: "/search",
                      render: function(e) {
                        return a.a.createElement(Sr, {
                          match: e.match,
                          history: e.history
                        });
                      }
                    }),
                    a.a.createElement(u.a, {
                      exact: !0,
                      path: "/",
                      render: function(e) {
                        return a.a.createElement(
                          ft,
                          Object.assign({}, e, {
                            primaryComponent: function(e) {
                              return a.a.createElement(Ln, e);
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
  [[222, 2, 1]]
]);
//# sourceMappingURL=main.a5cc7eb9.chunk.js.map
