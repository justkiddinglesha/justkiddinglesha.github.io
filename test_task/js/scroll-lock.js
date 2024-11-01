!(function (e, t) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
		? define([], t)
		: 'object' == typeof exports
		? (exports.scrollLock = t())
		: (e.scrollLock = t())
})(this, function () {
	return (function (l) {
		var r = {}
		function o(e) {
			if (r[e]) return r[e].exports
			var t = (r[e] = { i: e, l: !1, exports: {} })
			return l[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports
		}
		return (
			(o.m = l),
			(o.c = r),
			(o.d = function (e, t, l) {
				o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l })
			}),
			(o.r = function (e) {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(e, '__esModule', { value: !0 })
			}),
			(o.t = function (t, e) {
				if ((1 & e && (t = o(t)), 8 & e)) return t
				if (4 & e && 'object' == typeof t && t && t.__esModule) return t
				var l = Object.create(null)
				if (
					(o.r(l),
					Object.defineProperty(l, 'default', { enumerable: !0, value: t }),
					2 & e && 'string' != typeof t)
				)
					for (var r in t)
						o.d(
							l,
							r,
							function (e) {
								return t[e]
							}.bind(null, r)
						)
				return l
			}),
			(o.n = function (e) {
				var t =
					e && e.__esModule
						? function () {
								return e.default
						  }
						: function () {
								return e
						  }
				return o.d(t, 'a', t), t
			}),
			(o.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}),
			(o.p = ''),
			o((o.s = 0))
		)
	})([
		function (e, t, l) {
			'use strict'
			l.r(t)
			var r = function (e) {
					return Array.isArray(e) ? e : [e]
				},
				a = function (e) {
					return e instanceof Node
				},
				o = function (e, t) {
					if (e && t) {
						e = e instanceof NodeList ? e : [e]
						for (var l = 0; l < e.length && !0 !== t(e[l], l, e.length); l++);
					}
				},
				n = function (e) {
					return console.error('[scroll-lock] '.concat(e))
				},
				b = function (e) {
					if (Array.isArray(e)) return e.join(', ')
				},
				c = function (e) {
					var t = []
					return (
						o(e, function (e) {
							return t.push(e)
						}),
						t
					)
				},
				h = function (e, t) {
					var l =
							!(2 < arguments.length && void 0 !== arguments[2]) ||
							arguments[2],
						r =
							3 < arguments.length && void 0 !== arguments[3]
								? arguments[3]
								: document
					if (l && -1 !== c(r.querySelectorAll(t)).indexOf(e)) return e
					for (
						;
						(e = e.parentElement) && -1 === c(r.querySelectorAll(t)).indexOf(e);

					);
					return e
				},
				v = function (e, t) {
					var l =
						2 < arguments.length && void 0 !== arguments[2]
							? arguments[2]
							: document
					return -1 !== c(l.querySelectorAll(t)).indexOf(e)
				},
				i = function (e) {
					if (e) return 'hidden' === getComputedStyle(e).overflow
				},
				m = function (e) {
					if (e) return !!i(e) || e.scrollTop <= 0
				},
				S = function (e) {
					if (e) {
						if (i(e)) return !0
						var t = e.scrollTop
						return e.scrollHeight <= t + e.offsetHeight
					}
				},
				y = function (e) {
					if (e) return !!i(e) || e.scrollLeft <= 0
				},
				k = function (e) {
					if (e) {
						if (i(e)) return !0
						var t = e.scrollLeft
						return e.scrollWidth <= t + e.offsetWidth
					}
				}
			l.d(t, 'disablePageScroll', function () {
				return d
			}),
				l.d(t, 'enablePageScroll', function () {
					return s
				}),
				l.d(t, 'getScrollState', function () {
					return f
				}),
				l.d(t, 'clearQueueScrollLocks', function () {
					return p
				}),
				l.d(t, 'getTargetScrollBarWidth', function () {
					return g
				}),
				l.d(t, 'getCurrentTargetScrollBarWidth', function () {
					return A
				}),
				l.d(t, 'getPageScrollBarWidth', function () {
					return G
				}),
				l.d(t, 'getCurrentPageScrollBarWidth', function () {
					return T
				}),
				l.d(t, 'addScrollableTarget', function () {
					return L
				}),
				l.d(t, 'removeScrollableTarget', function () {
					return W
				}),
				l.d(t, 'addScrollableSelector', function () {
					return x
				}),
				l.d(t, 'removeScrollableSelector', function () {
					return F
				}),
				l.d(t, 'addLockableTarget', function () {
					return Y
				}),
				l.d(t, 'addLockableSelector', function () {
					return E
				}),
				l.d(t, 'setFillGapMethod', function () {
					return O
				}),
				l.d(t, 'addFillGapTarget', function () {
					return P
				}),
				l.d(t, 'removeFillGapTarget', function () {
					return j
				}),
				l.d(t, 'addFillGapSelector', function () {
					return q
				}),
				l.d(t, 'removeFillGapSelector', function () {
					return M
				}),
				l.d(t, 'refillGaps', function () {
					return N
				})
			var u = ['padding', 'margin', 'width', 'max-width', 'none'],
				w = {
					scroll: !0,
					queue: 0,
					scrollableSelectors: ['[data-scroll-lock-scrollable]'],
					lockableSelectors: ['body', '[data-scroll-lock-lockable]'],
					fillGapSelectors: [
						'body',
						'[data-scroll-lock-fill-gap]',
						'[data-scroll-lock-lockable]',
					],
					fillGapMethod: u[0],
					startTouchY: 0,
					startTouchX: 0,
				},
				d = function (e) {
					w.queue <= 0 && ((w.scroll = !1), B(), X()), L(e), w.queue++
				},
				s = function (e) {
					0 < w.queue && w.queue--,
						w.queue <= 0 && ((w.scroll = !0), C(), Q()),
						W(e)
				},
				f = function () {
					return w.scroll
				},
				p = function () {
					w.queue = 0
				},
				g = function (e) {
					var t =
						1 < arguments.length && void 0 !== arguments[1] && arguments[1]
					if (a(e)) {
						var l = e.style.overflowY
						t
							? f() ||
							  (e.style.overflowY = e.getAttribute(
									'data-scroll-lock-saved-overflow-y-property'
							  ))
							: (e.style.overflowY = 'scroll')
						var r = A(e)
						return (e.style.overflowY = l), r
					}
					return 0
				},
				A = function (e) {
					if (a(e)) {
						if (e === document.body) {
							var t = document.documentElement.clientWidth
							return window.innerWidth - t
						}
						var l = e.style.borderLeftWidth,
							r = e.style.borderRightWidth
						;(e.style.borderLeftWidth = '0px'),
							(e.style.borderRightWidth = '0px')
						var o = e.offsetWidth - e.clientWidth
						return (
							(e.style.borderLeftWidth = l), (e.style.borderRightWidth = r), o
						)
					}
					return 0
				},
				G = function () {
					var e =
						0 < arguments.length && void 0 !== arguments[0] && arguments[0]
					return g(document.body, e)
				},
				T = function () {
					return A(document.body)
				},
				L = function (e) {
					e &&
						r(e).map(function (e) {
							o(e, function (e) {
								a(e)
									? e.setAttribute('data-scroll-lock-scrollable', '')
									: n('"'.concat(e, '" is not a Element.'))
							})
						})
				},
				W = function (e) {
					e &&
						r(e).map(function (e) {
							o(e, function (e) {
								a(e)
									? e.removeAttribute('data-scroll-lock-scrollable')
									: n('"'.concat(e, '" is not a Element.'))
							})
						})
				},
				x = function (e) {
					e &&
						r(e).map(function (e) {
							w.scrollableSelectors.push(e)
						})
				},
				F = function (e) {
					e &&
						r(e).map(function (t) {
							w.scrollableSelectors = w.scrollableSelectors.filter(function (
								e
							) {
								return e !== t
							})
						})
				},
				Y = function (e) {
					e &&
						(r(e).map(function (e) {
							o(e, function (e) {
								a(e)
									? e.setAttribute('data-scroll-lock-lockable', '')
									: n('"'.concat(e, '" is not a Element.'))
							})
						}),
						f() || B())
				},
				E = function (e) {
					e &&
						(r(e).map(function (e) {
							w.lockableSelectors.push(e)
						}),
						f() || B(),
						q(e))
				},
				O = function (e) {
					if (e)
						if (-1 !== u.indexOf(e)) (w.fillGapMethod = e), N()
						else {
							var t = u.join(', ')
							n(
								'"'
									.concat(
										e,
										'" method is not available!\nAvailable fill gap methods: '
									)
									.concat(t, '.')
							)
						}
				},
				P = function (e) {
					e &&
						r(e).map(function (e) {
							o(e, function (e) {
								a(e)
									? (e.setAttribute('data-scroll-lock-fill-gap', ''),
									  w.scroll || H(e))
									: n('"'.concat(e, '" is not a Element.'))
							})
						})
				},
				j = function (e) {
					e &&
						r(e).map(function (e) {
							o(e, function (e) {
								a(e)
									? (e.removeAttribute('data-scroll-lock-fill-gap'),
									  w.scroll || I(e))
									: n('"'.concat(e, '" is not a Element.'))
							})
						})
				},
				q = function (e) {
					e &&
						r(e).map(function (e) {
							;-1 === w.fillGapSelectors.indexOf(e) &&
								(w.fillGapSelectors.push(e), w.scroll || D(e))
						})
				},
				M = function (e) {
					e &&
						r(e).map(function (t) {
							;(w.fillGapSelectors = w.fillGapSelectors.filter(function (e) {
								return e !== t
							})),
								w.scroll || z(t)
						})
				},
				N = function () {
					w.scroll || X()
				},
				B = function () {
					var e = b(w.lockableSelectors)
					K(e)
				},
				C = function () {
					var e = b(w.lockableSelectors)
					R(e)
				},
				K = function (e) {
					var t = document.querySelectorAll(e)
					o(t, function (e) {
						U(e)
					})
				},
				R = function (e) {
					var t = document.querySelectorAll(e)
					o(t, function (e) {
						_(e)
					})
				},
				U = function (e) {
					if (a(e) && 'true' !== e.getAttribute('data-scroll-lock-locked')) {
						var t = window.getComputedStyle(e)
						e.setAttribute(
							'data-scroll-lock-saved-overflow-y-property',
							t.overflowY
						),
							e.setAttribute(
								'data-scroll-lock-saved-inline-overflow-property',
								e.style.overflow
							),
							e.setAttribute(
								'data-scroll-lock-saved-inline-overflow-y-property',
								e.style.overflowY
							),
							(e.style.overflow = 'hidden'),
							e.setAttribute('data-scroll-lock-locked', 'true')
					}
				},
				_ = function (e) {
					a(e) &&
						'true' === e.getAttribute('data-scroll-lock-locked') &&
						((e.style.overflow = e.getAttribute(
							'data-scroll-lock-saved-inline-overflow-property'
						)),
						(e.style.overflowY = e.getAttribute(
							'data-scroll-lock-saved-inline-overflow-y-property'
						)),
						e.removeAttribute('data-scroll-lock-saved-overflow-property'),
						e.removeAttribute(
							'data-scroll-lock-saved-inline-overflow-property'
						),
						e.removeAttribute(
							'data-scroll-lock-saved-inline-overflow-y-property'
						),
						e.removeAttribute('data-scroll-lock-locked'))
				},
				X = function () {
					w.fillGapSelectors.map(function (e) {
						D(e)
					})
				},
				Q = function () {
					w.fillGapSelectors.map(function (e) {
						z(e)
					})
				},
				D = function (e) {
					var t = document.querySelectorAll(e),
						l = -1 !== w.lockableSelectors.indexOf(e)
					o(t, function (e) {
						H(e, l)
					})
				},
				H = function (e) {
					var t =
						1 < arguments.length && void 0 !== arguments[1] && arguments[1]
					if (a(e)) {
						var l
						if ('' === e.getAttribute('data-scroll-lock-lockable') || t)
							l = g(e, !0)
						else {
							var r = h(e, b(w.lockableSelectors))
							l = g(r, !0)
						}
						'true' === e.getAttribute('data-scroll-lock-filled-gap') && I(e)
						var o = window.getComputedStyle(e)
						if (
							(e.setAttribute('data-scroll-lock-filled-gap', 'true'),
							e.setAttribute(
								'data-scroll-lock-current-fill-gap-method',
								w.fillGapMethod
							),
							'margin' === w.fillGapMethod)
						) {
							var n = parseFloat(o.marginRight)
							e.style.marginRight = ''.concat(n + l, 'px')
						} else if ('width' === w.fillGapMethod)
							e.style.width = 'calc(100% - '.concat(l, 'px)')
						else if ('max-width' === w.fillGapMethod)
							e.style.maxWidth = 'calc(100% - '.concat(l, 'px)')
						else if ('padding' === w.fillGapMethod) {
							var c = parseFloat(o.paddingRight)
							e.style.paddingRight = ''.concat(c + l, 'px')
						}
					}
				},
				z = function (e) {
					var t = document.querySelectorAll(e)
					o(t, function (e) {
						I(e)
					})
				},
				I = function (e) {
					if (
						a(e) &&
						'true' === e.getAttribute('data-scroll-lock-filled-gap')
					) {
						var t = e.getAttribute('data-scroll-lock-current-fill-gap-method')
						e.removeAttribute('data-scroll-lock-filled-gap'),
							e.removeAttribute('data-scroll-lock-current-fill-gap-method'),
							'margin' === t
								? (e.style.marginRight = '')
								: 'width' === t
								? (e.style.width = '')
								: 'max-width' === t
								? (e.style.maxWidth = '')
								: 'padding' === t && (e.style.paddingRight = '')
					}
				}
			'undefined' != typeof window &&
				window.addEventListener('resize', function (e) {
					N()
				}),
				'undefined' != typeof document &&
					(document.addEventListener('touchstart', function (e) {
						w.scroll ||
							((w.startTouchY = e.touches[0].clientY),
							(w.startTouchX = e.touches[0].clientX))
					}),
					document.addEventListener(
						'touchmove',
						function (n) {
							if (!w.scroll) {
								var e = w.startTouchY,
									t = w.startTouchX,
									l = n.touches[0].clientY,
									r = n.touches[0].clientX
								if (n.touches.length < 2) {
									var c = b(w.scrollableSelectors),
										a = e < l,
										i = l < e,
										u = t < r,
										d = r < t,
										s = e + 3 < l,
										f = l < e - 3,
										p = t + 3 < r,
										g = r < t - 3
									!(function e(t) {
										var l =
											1 < arguments.length &&
											void 0 !== arguments[1] &&
											arguments[1]
										if (t) {
											var r = h(t, c, !1)
											if (v(t, 'input[type="range"]')) return !1
											if (
												l ||
												(v(t, 'textarea, [contenteditable="true"]') &&
													h(t, c)) ||
												v(t, c)
											) {
												var o = !1
												y(t) && k(t)
													? ((a && m(t)) || (i && S(t))) && (o = !0)
													: m(t) && S(t)
													? ((u && y(t)) || (d && k(t))) && (o = !0)
													: ((s && m(t)) ||
															(f && S(t)) ||
															(p && y(t)) ||
															(g && k(t))) &&
													  (o = !0),
													o &&
														(r ? e(r, !0) : n.cancelable && n.preventDefault())
											} else e(r)
										} else n.cancelable && n.preventDefault()
									})(n.target)
								}
							}
						},
						{ passive: !1 }
					),
					document.addEventListener('touchend', function (e) {
						w.scroll || ((w.startTouchY = 0), (w.startTouchX = 0))
					}))
			var J = {
					hide: function (e) {
						n(
							'"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'
						),
							d(e)
					},
					show: function (e) {
						n(
							'"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'
						),
							s(e)
					},
					toggle: function (e) {
						n('"toggle" is deprecated! Do not use it.'), f() ? d() : s(e)
					},
					getState: function () {
						return (
							n(
								'"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'
							),
							f()
						)
					},
					getWidth: function () {
						return (
							n(
								'"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'
							),
							G()
						)
					},
					getCurrentWidth: function () {
						return (
							n(
								'"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'
							),
							T()
						)
					},
					setScrollableTargets: function (e) {
						n(
							'"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'
						),
							L(e)
					},
					setFillGapSelectors: function (e) {
						n(
							'"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'
						),
							q(e)
					},
					setFillGapTargets: function (e) {
						n(
							'"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'
						),
							P(e)
					},
					clearQueue: function () {
						n(
							'"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'
						),
							p()
					},
				},
				V = (function (o) {
					for (var e = 1; e < arguments.length; e++) {
						var n = null != arguments[e] ? arguments[e] : {},
							t = Object.keys(n)
						'function' == typeof Object.getOwnPropertySymbols &&
							(t = t.concat(
								Object.getOwnPropertySymbols(n).filter(function (e) {
									return Object.getOwnPropertyDescriptor(n, e).enumerable
								})
							)),
							t.forEach(function (e) {
								var t, l, r
								;(t = o),
									(r = n[(l = e)]),
									l in t
										? Object.defineProperty(t, l, {
												value: r,
												enumerable: !0,
												configurable: !0,
												writable: !0,
										  })
										: (t[l] = r)
							})
					}
					return o
				})(
					{
						disablePageScroll: d,
						enablePageScroll: s,
						getScrollState: f,
						clearQueueScrollLocks: p,
						getTargetScrollBarWidth: g,
						getCurrentTargetScrollBarWidth: A,
						getPageScrollBarWidth: G,
						getCurrentPageScrollBarWidth: T,
						addScrollableSelector: x,
						removeScrollableSelector: F,
						addScrollableTarget: L,
						removeScrollableTarget: W,
						addLockableSelector: E,
						addLockableTarget: Y,
						addFillGapSelector: q,
						removeFillGapSelector: M,
						addFillGapTarget: P,
						removeFillGapTarget: j,
						setFillGapMethod: O,
						refillGaps: N,
						_state: w,
					},
					J
				)
			t.default = V
		},
	]).default
})
