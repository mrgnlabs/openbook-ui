(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [4093],
  {
    21866: (e) => {
      e.exports = {
        radio: 'radio-ZflVGoxm',
        input: 'input-ZflVGoxm',
        box: 'box-ZflVGoxm',
        reverse: 'reverse-ZflVGoxm',
        label: 'label-ZflVGoxm',
        wrapper: 'wrapper-ZflVGoxm',
        noOutline: 'noOutline-ZflVGoxm',
      };
    },
    84707: (e) => {
      e.exports = {
        titleWrap: 'titleWrap-24p2N42k',
        groupFooter: 'groupFooter-24p2N42k',
      };
    },
    38701: (e) => {
      e.exports = { inlineRow: 'inlineRow-3IOXimxZ' };
    },
    92770: (e) => {
      e.exports = { icon: 'icon-3oPFhRYI' };
    },
    38869: (e) => {
      e.exports = {
        input: 'input-1zfqRRWX',
        symbol: 'symbol-1zfqRRWX',
        checkbox: 'checkbox-1zfqRRWX',
        label: 'label-1zfqRRWX',
        dropdownMenu: 'dropdownMenu-1zfqRRWX',
        sessionStart: 'sessionStart-1zfqRRWX',
        sessionEnd: 'sessionEnd-1zfqRRWX',
        sessionInputContainer: 'sessionInputContainer-1zfqRRWX',
        sessionDash: 'sessionDash-1zfqRRWX',
        inputGroup: 'inputGroup-1zfqRRWX',
        textarea: 'textarea-1zfqRRWX',
        inlineGroup: 'inlineGroup-1zfqRRWX',
        hasTooltip: 'hasTooltip-1zfqRRWX',
      };
    },
    64412: (e) => {
      e.exports = {
        wrap: 'wrap--0fHTrjW',
        labelWrap: 'labelWrap--0fHTrjW',
        label: 'label--0fHTrjW',
        hasTooltip: 'hasTooltip--0fHTrjW',
      };
    },
    14768: (e, t, n) => {
      'use strict';
      n.d(t, { splitThousands: () => o });
      var s = n(75496);
      function o(e, t = '&nbsp;') {
        let n = e + '';
        -1 !== n.indexOf('e') &&
          (n = (function (e) {
            return (0, s.fixComputationError)(e)
              .toFixed(10)
              .replace(/\.?0+$/, '');
          })(Number(e)));
        const o = n.split('.');
        return (
          o[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) + (o[1] ? '.' + o[1] : '')
        );
      }
    },
    82675: (e, t, n) => {
      'use strict';
      n.d(t, { ModelContext: () => o, bindModel: () => r });
      var s = n(67294);
      const o = s.createContext(null);
      function r(e, t) {
        return s.createElement(o.Consumer, null, (n) =>
          n ? s.createElement(e, { ...Object.assign({ model: n }, t) }) : null,
        );
      }
    },
    91967: (e, t, n) => {
      'use strict';
      n.d(t, {
        StylePropertyContext: () => r,
        StylePropertyContainer: () => a,
        bindPropertyContext: () => i,
      });
      var s = n(67294),
        o = n(82675);
      const r = s.createContext(null);
      class a extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._setValue = (e, t, n) => {
              const { model: s } = this.props;
              s.setProperty(e, t, n);
            });
        }
        componentDidMount() {
          const { property: e } = this.props;
          e.subscribe(this, () => this.forceUpdate());
        }
        componentWillUnmount() {
          const { property: e } = this.props;
          e.unsubscribeAll(this);
        }
        render() {
          const e = { setValue: this._setValue };
          return s.createElement(r.Provider, { value: e }, this.props.children);
        }
      }
      function i(e, t) {
        return (0, o.bindModel)(
          ({ model: n }) =>
            s.createElement(
              a,
              { model: n, property: t.property },
              s.createElement(e, { ...t }),
            ),
          t,
        );
      }
    },
    7202: (e, t, n) => {
      'use strict';
      n.d(t, { InputTooltip: () => d });
      var s = n(67294),
        o = n(94184),
        r = n.n(o),
        a = n(49775),
        i = n(74384),
        l = n(96404),
        p = n(92770),
        u = n(33237);
      function c() {
        document.removeEventListener('scroll', c),
          document.removeEventListener('touchstart', c),
          (0, i.hide)();
      }
      function h(e) {
        l.mobiletouch &&
          ((0, i.showOnElement)(e.currentTarget, { tooltipDelay: 0 }),
          document.addEventListener('scroll', c),
          document.addEventListener('touchstart', c));
      }
      function d(e) {
        const { className: t, title: n } = e;
        return s.createElement(a.Icon, {
          icon: u,
          className: r()(t, 'apply-common-tooltip', p.icon),
          title: n,
          onClick: h,
        });
      }
    },
    36135: (e, t, n) => {
      'use strict';
      n.d(t, {
        isGroup: () => o,
        isInputInlines: () => r,
        getInputGroups: () => a,
      });
      var s = n(16282);
      function o(e) {
        return e.hasOwnProperty('groupType');
      }
      function r(e) {
        return o(e) && 'inline' === e.groupType;
      }
      function a(e) {
        const t = [],
          n = new Map(),
          o = new Map();
        return (
          o.set(void 0, new Map()),
          e.forEach((e) => {
            const { group: r, inline: a } = e;
            if (void 0 !== r || void 0 !== a)
              if (void 0 !== r)
                if (void 0 !== a)
                  if (n.has(r)) {
                    const t = (0, s.ensureDefined)(n.get(r));
                    let l;
                    o.has(t)
                      ? (l = (0, s.ensureDefined)(o.get(t)))
                      : ((l = new Map()), o.set(t, l)),
                      i(e, 'inline', a, l, t.children);
                  } else {
                    const s = { id: a, groupType: 'inline', children: [e] },
                      i = { id: r, groupType: 'group', children: [s] },
                      l = new Map();
                    l.set(a, s), o.set(i, l), n.set(r, i), t.push(i);
                  }
                else i(e, 'group', r, n, t);
              else {
                const n = (0, s.ensureDefined)(o.get(void 0));
                i(e, 'inline', (0, s.ensureDefined)(a), n, t);
              }
            else t.push(e);
          }),
          t
        );
      }
      function i(e, t, n, o, r) {
        if (o.has(n)) (0, s.ensureDefined)(o.get(n)).children.push(e);
        else {
          const s = { id: n, groupType: t, children: [e] };
          o.set(n, s), r.push(s);
        }
      }
    },
    22489: (e, t, n) => {
      'use strict';
      n.d(t, { InputGroup: () => i });
      var s = n(67294),
        o = n(94184),
        r = n(35665),
        a = n(38869);
      function i(e) {
        const { className: t } = e,
          n = (0, s.useContext)(r.PropertyTable.InlineRowContext);
        return s.createElement(
          'div',
          { className: o(a.inputGroup, n && a.inlineGroup, t) },
          e.children,
        );
      }
    },
    38754: (e, t, n) => {
      'use strict';
      n.d(t, { InputRow: () => p });
      var s = n(79881),
        o = n(67294),
        r = n(16282),
        a = n(64512),
        i = n(35665),
        l = n(7202);
      class p extends o.PureComponent {
        render() {
          const {
            label: e,
            children: t,
            input: n,
            disabled: p,
            onChange: u,
            labelAlign: c,
            grouped: h,
            tooltip: d,
            offset: m,
          } = this.props;
          return o.createElement(
            i.PropertyTable.Row,
            null,
            o.createElement(
              i.PropertyTable.Cell,
              { placement: 'first', verticalAlign: c, grouped: h, offset: m },
              void 0 !== e
                ? e
                : (0, s.t)((0, r.ensureDefined)(n).name, { context: 'input' }),
            ),
            o.createElement(
              i.PropertyTable.Cell,
              { placement: 'last', grouped: h },
              t ||
                o.createElement(a.StudyInput, {
                  input: (0, r.ensureDefined)(n),
                  onChange: u,
                  disabled: p,
                  hasTooltip: Boolean(d),
                }),
              d && o.createElement(l.InputTooltip, { title: d }),
            ),
          );
        }
      }
    },
    4093: (e, t, n) => {
      'use strict';
      n.d(t, { InputsTabContent: () => G });
      var s,
        o = n(67294),
        r = n(79881),
        a = n(41497),
        i = n(35665),
        l = n(82604),
        p = n(94184),
        u = n.n(p),
        c = n(21866),
        h = n.n(c);
      const d = (0, l.makeSwitchGroupItem)(
        (((s = class extends o.PureComponent {
          constructor() {
            super(...arguments),
              (this._onChange = () => {
                this.props.onChange && this.props.onChange(this.props.value);
              });
          }
          render() {
            const e = p(this.props.className, h().radio, {
                [h().reverse]: Boolean(this.props.labelPositionReverse),
              }),
              t = p(h().label, { [h().disabled]: this.props.disabled }),
              n = p(h().box, { [h().noOutline]: -1 === this.props.tabIndex });
            let s = null;
            return (
              this.props.label &&
                (s = o.createElement(
                  'span',
                  { className: t },
                  this.props.label,
                )),
              o.createElement(
                'label',
                { className: e },
                o.createElement(
                  'span',
                  { className: h().wrapper, title: this.props.title },
                  o.createElement('input', {
                    id: this.props.id,
                    tabIndex: this.props.tabIndex,
                    autoFocus: this.props.autoFocus,
                    role: this.props.role,
                    className: h().input,
                    type: 'radio',
                    name: this.props.name,
                    checked: this.props.checked,
                    disabled: this.props.disabled,
                    value: this.props.value,
                    onChange: this._onChange,
                    ref: this.props.reference,
                  }),
                  o.createElement('span', { className: n }),
                ),
                s,
              )
            );
          }
        }).defaultProps = { value: 'on' }),
        s),
      );
      var m = n(16282),
        g = n(49923),
        v = n(84254),
        C = n(7202),
        f = n(38869);
      function y(e) {
        const {
            children: t,
            input: n,
            disabled: s,
            onChange: p,
            grouped: u,
            tooltip: c,
          } = e,
          h = (0, o.useContext)(a.PropertyContext),
          { values: y, setValue: b } = (0, m.ensureNotNull)(h),
          T = y[n.id],
          [E, x] = (0, o.useState)(T ? 'another-symbol' : 'main-symbol'),
          [_, S] = (0, o.useState)(T);
        return (
          (0, o.useEffect)(() => {
            T && S(T);
          }, [T]),
          o.createElement(
            l.SwitchGroup,
            {
              name: 'symbol-source-' + n.id,
              values: [E],
              onChange: function (e) {
                x(e),
                  'main-symbol' === e
                    ? (0, v.setter)(b)('', n.id, n.name)
                    : 'another-symbol' === e &&
                      _ &&
                      (0, v.setter)(b, p)(_, n.id, n.name);
              },
            },
            o.createElement(
              i.PropertyTable.Row,
              null,
              o.createElement(
                i.PropertyTable.Cell,
                { colSpan: 2, placement: 'first', grouped: u },
                o.createElement(d, {
                  value: 'main-symbol',
                  className: f.checkbox,
                  disabled: s,
                  label: o.createElement(
                    'span',
                    { className: f.label },
                    (0, r.t)('Main chart symbol', { context: 'input' }),
                  ),
                }),
              ),
            ),
            o.createElement(
              i.PropertyTable.Row,
              null,
              o.createElement(
                i.PropertyTable.Cell,
                { placement: 'first', grouped: u },
                o.createElement(d, {
                  value: 'another-symbol',
                  className: f.checkbox,
                  disabled: s,
                  label: o.createElement(
                    'span',
                    { className: f.label },
                    (0, r.t)('Another symbol', { context: 'input' }),
                  ),
                }),
              ),
              o.createElement(
                i.PropertyTable.Cell,
                { placement: 'last', grouped: u },
                t ||
                  o.createElement(g.SymbolInput, {
                    input: (0, m.ensureDefined)(n),
                    onChange: p,
                    disabled: s || 'main-symbol' === E,
                    hasTooltip: Boolean(c),
                  }),
                c && o.createElement(C.InputTooltip, { title: c }),
              ),
            ),
          )
        );
      }
      var b = n(13656);
      class T extends o.PureComponent {
        render() {
          const { label: e, input: t, tooltip: n } = this.props;
          return o.createElement(
            i.PropertyTable.Row,
            null,
            o.createElement(
              i.PropertyTable.Cell,
              { placement: 'first', colSpan: 2 },
              o.createElement(b.BoolInput, {
                label: e,
                input: t,
                hasTooltip: Boolean(n),
              }),
              n && o.createElement(C.InputTooltip, { title: n }),
            ),
          );
        }
      }
      var E = n(38754),
        x = n(40803),
        _ = n(11888),
        S = n(30698);
      class P extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: s,
              } = this.props;
              s(e.currentTarget.value, t, n);
            });
        }
        render() {
          const {
            input: { defval: e },
            value: t,
            disabled: n,
            onBlur: s,
            onKeyDown: r,
          } = this.props;
          return o.createElement(x.Textarea, {
            className: u()(f.input, f.textarea, _.InputClasses.FontSizeMedium),
            value: void 0 === t ? e : t,
            onChange: this._onChange,
            onBlur: s,
            onKeyDown: r,
            disabled: n,
          });
        }
      }
      const I = (0, S.debounced)(P),
        w = (0, v.bind)(I);
      var N = n(64412);
      function V(e) {
        const { input: t, label: n, tooltip: s } = e;
        return o.createElement(
          i.PropertyTable.Row,
          null,
          o.createElement(
            i.PropertyTable.Cell,
            { placement: 'first', colSpan: 2, className: N.wrap },
            o.createElement(
              'div',
              { className: N.labelWrap },
              o.createElement(
                'span',
                { className: u()(N.label, s && N.hasTooltip) },
                n,
              ),
              s && o.createElement(C.InputTooltip, { title: s }),
            ),
            o.createElement(w, { input: t }),
          ),
        );
      }
      function R(e) {
        const { input: t, tooltip: n } = e;
        return 'symbol' === t.type && t.optional
          ? o.createElement(y, { input: t, tooltip: n })
          : 'bool' === t.type
          ? o.createElement(T, {
              label: (0, r.t)(t.name, { context: 'input' }),
              input: t,
              tooltip: n,
            })
          : 'text_area' === t.type
          ? o.createElement(V, {
              label: (0, r.t)(t.name, { context: 'input' }),
              input: t,
              tooltip: n,
            })
          : o.createElement(E.InputRow, {
              labelAlign: (function (e) {
                switch (e) {
                  case 'session':
                    return 'adaptive';
                  case 'time':
                    return 'topCenter';
                  default:
                    return;
                }
              })(t.type),
              input: t,
              tooltip: n,
            });
      }
      var k = n(46358),
        B = n(38701);
      function M(e) {
        const { content: t } = e;
        let n;
        return o.createElement(
          i.PropertyTable.InlineRowContext.Provider,
          {
            value: !0,
          },
          o.createElement(
            'div',
            { className: B.inlineRow },
            t.children.map(
              (e, s) => (
                void 0 !== e.tooltip && (n = e.tooltip),
                o.createElement(R, {
                  key: e.id,
                  input: e,
                  tooltip: s === t.children.length - 1 ? n : void 0,
                })
              ),
            ),
          ),
        );
      }
      var D = n(36135),
        W = n(84707);
      function F(e) {
        const { content: t } = e;
        return (0, D.isGroup)(t)
          ? (0, D.isInputInlines)(t)
            ? o.createElement(M, { content: t })
            : o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  'div',
                  { className: W.titleWrap },
                  o.createElement(k.GroupTitleSection, {
                    title: (0, r.t)(t.id, { context: 'input' }),
                    name: t.id,
                  }),
                ),
                t.children.map((e) =>
                  (0, D.isGroup)(e)
                    ? o.createElement(M, { key: e.id, content: e })
                    : o.createElement(R, {
                        key: e.id,
                        input: e,
                        tooltip: e.tooltip,
                      }),
                ),
                o.createElement('div', { className: W.groupFooter }),
              )
          : o.createElement(R, { input: t, tooltip: t.tooltip });
      }
      const O = { offset: (0, r.t)('Offset') };
      class G extends o.PureComponent {
        render() {
          const {
              reference: e,
              inputs: t,
              property: n,
              study: s,
              model: r,
              onStudyInputChange: a,
            } = this.props,
            { offset: l, offsets: p } = n;
          return o.createElement(
            i.PropertyTable,
            { reference: e },
            o.createElement(z, {
              study: s,
              model: r,
              property: n.inputs,
              inputs: t,
              onStudyInputChange: a,
            }),
            l && this._createOffsetSection(l),
            p &&
              p.childNames().map((e) => {
                const t = p.childs()[e];
                return this._createOffsetSection(t);
              }),
          );
        }
        _createOffsetSection(e) {
          const t = e.childs();
          return o.createElement(z, {
            key: 'offset_' + t.title.value(),
            study: this.props.study,
            model: this.props.model,
            inputs: [H(t)],
            property: e,
          });
        }
      }
      function z(e) {
        const {
            study: t,
            model: n,
            inputs: s,
            property: r,
            onStudyInputChange: i,
          } = e,
          l = (0, o.useMemo)(() => (0, D.getInputGroups)(s), [s]);
        return o.createElement(
          a.PropertyContainer,
          { property: r, study: t, model: n, onStudyInputChange: i },
          l.map((e) => o.createElement(F, { key: e.id, content: e })),
        );
      }
      function H(e) {
        return {
          id: 'val',
          name: e.title.value() || O.offset,
          defval: e.val.value(),
          type: 'integer',
          min: e.min.value(),
          max: e.max.value(),
        };
      }
    },
    13656: (e, t, n) => {
      'use strict';
      n.d(t, { BoolInputComponent: () => p, BoolInput: () => u });
      var s = n(67294),
        o = n(37850),
        r = n(94184),
        a = n.n(r),
        i = n(84254),
        l = n(38869);
      class p extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = () => {
              const {
                input: { id: e, name: t },
                value: n,
                onChange: s,
              } = this.props;
              s(!n, e, t);
            });
        }
        render() {
          const {
              input: { defval: e },
              value: t,
              disabled: n,
              label: r,
              hasTooltip: i,
            } = this.props,
            p = void 0 === t ? e : t;
          return s.createElement(o.Checkbox, {
            className: a()(l.checkbox, i && l.hasTooltip),
            disabled: n,
            checked: p,
            onChange: this._onChange,
            label: s.createElement('span', { className: l.label }, r),
            labelAlignBaseline: !0,
          });
        }
      }
      const u = (0, i.bind)(p);
    },
    30698: (e, t, n) => {
      'use strict';
      n.d(t, { debounced: () => r });
      var s = n(67294);
      const o = { blur: 0, commit: 0, change: 1 / 0 };
      function r(e, t = o) {
        return class extends s.PureComponent {
          constructor(e) {
            super(e),
              (this._onChange = (e, n, s) => {
                const o = t.change;
                o
                  ? (clearTimeout(this._timeout),
                    this.setState({ value: e }, () => {
                      o !== 1 / 0 &&
                        (this._timeout = setTimeout(() => this._flush(), o));
                    }))
                  : this._flush(e);
              }),
              (this._onBlur = () => {
                this._debounce(t.blur);
                const { onBlur: e } = this.props;
                e && e();
              }),
              (this._onKeyDown = (e) => {
                13 === e.keyCode && this._debounce(t.commit);
              }),
              (this.state = { prevValue: e.value, value: e.value });
          }
          componentWillUnmount() {
            this._flush();
          }
          render() {
            const { value: t } = this.state;
            return s.createElement(e, {
              ...this.props,
              value: t,
              onChange: this._onChange,
              onBlur: this._onBlur,
              onKeyDown: this._onKeyDown,
            });
          }
          static getDerivedStateFromProps(e, t) {
            return e.value === t.prevValue
              ? t
              : { prevValue: e.value, value: e.value };
          }
          _debounce(e) {
            e
              ? (clearTimeout(this._timeout),
                e !== 1 / 0 &&
                  (this._timeout = setTimeout(() => this._flush(), e)))
              : this.setState((e) => {
                  this._flush(e.value);
                });
          }
          _flush(e) {
            const {
                input: { id: t, name: n },
                onChange: s,
              } = this.props,
              { prevValue: o, value: r } = this.state;
            clearTimeout(this._timeout);
            const a = void 0 !== e ? e : r;
            void 0 !== a && a !== o && s(a, t, n);
          }
        };
      }
    },
    93425: (e, t, n) => {
      'use strict';
      n.d(t, { FloatInputComponent: () => c, FloatInput: () => h });
      var s = n(67294),
        o = n(94184),
        r = n.n(o),
        a = n(47269),
        i = n(84254),
        l = n(30698),
        p = n(38869);
      class u extends s.PureComponent {
        render() {
          const { hasTooltip: e } = this.props;
          return s.createElement(a.NumericInput, {
            ...this.props,
            className: r()(p.input, e && p.hasTooltip),
            stretch: !1,
          });
        }
      }
      const c = (0, l.debounced)(u, { change: 1 / 0, commit: 0, blur: 0 }),
        h = (0, i.bind)(c);
    },
    82823: (e, t, n) => {
      'use strict';
      n.d(t, { IntegerInputComponent: () => c, IntegerInput: () => h });
      var s = n(67294),
        o = n(94184),
        r = n.n(o),
        a = n(84254),
        i = n(30698),
        l = n(47269),
        p = n(38869);
      class u extends s.PureComponent {
        render() {
          const { hasTooltip: e } = this.props;
          return s.createElement(l.NumericInput, {
            ...this.props,
            mode: 'integer',
            className: r()(p.input, e && p.hasTooltip),
            stretch: !1,
          });
        }
      }
      const c = (0, i.debounced)(u, { change: 1 / 0, commit: 0, blur: 0 }),
        h = (0, a.bind)(c);
    },
    47269: (e, t, n) => {
      'use strict';
      n.d(t, { NumericInput: () => b });
      var s = n(67294),
        o = n(16282),
        r = n(79881),
        a = n(93302),
        i = n(43367),
        l = n(66094),
        p = n(14768),
        u = n(76553);
      var c = n(57649),
        h = n(57968);
      const d = (0, r.t)('Number format is invalid.'),
        m = new (class {
          constructor(e = ' ') {
            this._divider = e;
          }
          format(e) {
            const t = (0, p.splitThousands)(e, this._divider);
            return (0, u.isRtl)() ? (0, u.startWithLTR)(t) : t;
          }
          parse(e) {
            const t = (0, u.stripLTRMarks)(e).split(this._divider).join(''),
              n = Number(t);
            return isNaN(n) || /e/i.test(t)
              ? { res: !1 }
              : { res: !0, value: n, suggest: this.format(n) };
          }
        })(),
        g = /^-?[0-9]*$/,
        v = 9e15;
      class C extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._onFocus = (e) => {
              this.setState({ focused: !0 }),
                this.props.onFocus && this.props.onFocus(e);
            }),
            (this._onBlur = (e) => {
              this.setState({
                displayValue: f(this.props, this.props.value),
                focused: !1,
              }),
                this.props.errorHandler && this.props.errorHandler(!1),
                this.props.onBlur && this.props.onBlur(e);
            }),
            (this._onValueChange = (e) => {
              const t = e.target.value;
              if (
                (void 0 !== this.props.onEmptyString &&
                  '' === t &&
                  this.props.onEmptyString(),
                'integer' === this.props.mode && !g.test(t))
              )
                return;
              const n = y(t, this.props.formatter),
                s = n.res
                  ? this._checkValueBoundaries(n.value)
                  : { isPassed: !1, msg: void 0 },
                o = n.res && !s.isPassed,
                r = n.res && n.suggest && !this.state.focused ? n.suggest : t,
                a = o && s.msg ? s.msg : d;
              this.setState({ displayValue: r, errorMsg: a }),
                n.res &&
                  s.isPassed &&
                  this.props.onValueChange(n.value, 'input'),
                this.props.errorHandler && this.props.errorHandler(!n.res || o);
            }),
            (this._onValueByStepChange = (e) => {
              const {
                  roundByStep: t = !0,
                  step: n = 1,
                  uiStep: s,
                  min: o = n,
                  formatter: r,
                } = this.props,
                i = y(this.state.displayValue, r),
                l = null != s ? s : n;
              let p = n;
              if (i.res) {
                const s = new a.Big(i.value),
                  r = s.minus(o).mod(n);
                let u = s.plus(e * l);
                !r.eq(0) && t && (u = u.plus((e > 0 ? 0 : 1) * l).minus(r)),
                  (p = u.toNumber());
              }
              const {
                isPassed: u,
                clampedValue: c,
              } = this._checkValueBoundaries(p);
              (p = u ? p : c),
                this.setState({ displayValue: f(this.props, p) }),
                this.props.onValueChange(p, 'step'),
                this.props.errorHandler && this.props.errorHandler(!1);
            });
          const { value: t } = e;
          this.state = {
            value: t,
            displayValue: f(e, t),
            focused: !1,
            errorMsg: d,
          };
        }
        render() {
          var e;
          return s.createElement(l.NumberInputView, {
            id: this.props.id,
            inputMode:
              null !== (e = this.props.inputMode) && void 0 !== e
                ? e
                : i.CheckMobile.iOS()
                ? void 0
                : 'numeric',
            borderStyle: this.props.borderStyle,
            fontSizeStyle: this.props.fontSizeStyle,
            value: this.state.displayValue,
            forceShowControls: this.props.forceShowControls,
            className: this.props.className,
            inputClassName: this.props.inputClassName,
            button: this.props.button,
            placeholder: this.props.placeholder,
            innerLabel: this.props.innerLabel,
            endSlot: this.props.endSlot,
            disabled: this.props.disabled,
            error: this.props.error,
            errorMessage: this.props.errorMessage || this.state.errorMsg,
            onValueChange: this._onValueChange,
            onValueByStepChange: this._onValueByStepChange,
            containerReference: this.props.containerReference,
            inputReference: this.props.inputReference,
            onClick: this.props.onClick,
            onFocus: this._onFocus,
            onBlur: this._onBlur,
            onKeyDown: this.props.onKeyDown,
            controlDecKeyCodes: this.props.controlDecKeyCodes,
            controlIncKeyCodes: this.props.controlIncKeyCodes,
            title: this.props.title,
            intent: this.props.intent,
            highlight: this.props.highlight,
            highlightRemoveRoundBorder: this.props.highlightRemoveRoundBorder,
            stretch: this.props.stretch,
            autoSelectOnFocus: !i.CheckMobile.any(),
          });
        }
        getClampedValue() {
          const { min: e = -1 / 0, max: t = v } = this.props,
            n = y(this.state.displayValue, this.props.formatter);
          return n.res ? (0, h.clamp)(n.value, e, t) : null;
        }
        static getDerivedStateFromProps(e, t) {
          const { alwaysUpdateValueFromProps: n, value: s } = e;
          return (t.focused && !n) || t.value === s
            ? null
            : { value: s, displayValue: f(e, s) };
        }
        _checkValueBoundaries(e) {
          var t, n, s, o;
          const { min: a = -1 / 0, max: i = v } = this.props,
            l = (function (e, t, n) {
              const s = e >= t,
                o = e <= n;
              return {
                passMin: s,
                passMax: o,
                pass: s && o,
                clamped: (0, h.clamp)(e, t, n),
              };
            })(e, a, i);
          let p;
          return (
            l.passMax ||
              (p =
                null !==
                  (n =
                    null === (t = this.props.boundariesErrorMessages) ||
                    void 0 === t
                      ? void 0
                      : t.greaterThanMax) && void 0 !== n
                  ? n
                  : (0,
                    r.t)(
                      'Specified value is more than the instrument maximum of {max}.',
                      { replace: { max: String(i) } },
                    )),
            l.passMin ||
              (p =
                null !==
                  (o =
                    null === (s = this.props.boundariesErrorMessages) ||
                    void 0 === s
                      ? void 0
                      : s.lessThanMin) && void 0 !== o
                  ? o
                  : (0,
                    r.t)(
                      'Specified value is less than the instrument minimum of {min}.',
                      { replace: { min: String(a) } },
                    )),
            { isPassed: l.pass, msg: p, clampedValue: l.clamped }
          );
        }
      }
      function f(e, t) {
        const { useFormatter: n = !0, formatter: s, mode: o } = e;
        return n && 'integer' !== o
          ? (function (e, t = m) {
              return null !== e ? t.format(e) : '';
            })(t, s)
          : (function (e) {
              if (null === e) return '';
              return c.NumericFormatter.formatNoE(e);
            })(t);
      }
      function y(e, t = m) {
        return t.parse
          ? t.parse(e)
          : { res: !1, error: 'Formatter does not support parse' };
      }
      class b extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._container = null),
            (this._handleContainerRef = (e) => (this._container = e)),
            (this._onChange = (e, t) => {
              const {
                input: { id: n, name: s },
                onChange: o,
                onBlur: r,
              } = this.props;
              o(e, n, s), 'step' === t && r && r();
            }),
            (this._onBlur = (e) => {
              const { onBlur: t } = this.props;
              if (t) {
                const n = (0, o.ensureNotNull)(this._container);
                n.contains(document.activeElement) ||
                  n.contains(e.relatedTarget) ||
                  t();
              }
            });
        }
        render() {
          const {
            input: { defval: e, min: t, max: n, step: o },
            value: r,
            disabled: a,
            onKeyDown: i,
            className: l,
            mode: p,
            stretch: u,
          } = this.props;
          return s.createElement(C, {
            className: l,
            value: Number(void 0 === r ? e : r),
            min: t,
            max: n,
            step: o,
            mode: p,
            onBlur: this._onBlur,
            onValueChange: this._onChange,
            onKeyDown: i,
            disabled: a,
            containerReference: this._handleContainerRef,
            fontSizeStyle: 'medium',
            roundByStep: !1,
            stretch: u,
          });
        }
      }
    },
    76470: (e, t, n) => {
      'use strict';
      n.d(t, { SelectInputComponent: () => u, SelectInput: () => c });
      var s = n(67294),
        o = n(94184),
        r = n.n(o),
        a = n(79881),
        i = n(45221),
        l = n(84254),
        p = n(38869);
      class u extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: s,
              } = this.props;
              s(e, t, n);
            });
        }
        render() {
          const {
              input: { id: e, defval: t, options: n, optionsTitles: o },
              value: l,
              disabled: u,
              hasTooltip: c,
            } = this.props,
            h = n.map((e) => {
              const t = o && o[e] ? o[e] : e;
              return { value: e, content: (0, a.t)(t, { context: 'input' }) };
            }),
            d = void 0 !== l && n.includes(l) ? l : t;
          return s.createElement(i.Select, {
            id: e,
            className: r()(p.input, c && p.hasTooltip),
            menuClassName: p.dropdownMenu,
            value: d,
            items: h,
            onChange: this._onChange,
            disabled: u,
          });
        }
      }
      const c = (0, l.bind)(u);
    },
    64512: (e, t, n) => {
      'use strict';
      n.d(t, { StudyInput: () => q });
      var s = n(67294),
        o = n(30875),
        r = n(82823),
        a = n(93425),
        i = n(13656),
        l = n(94184),
        p = n.n(l),
        u = n(81829),
        c = n(84254),
        h = n(30698),
        d = n(38869);
      class m extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: s,
              } = this.props;
              s(e.currentTarget.value, t, n);
            });
        }
        render() {
          const {
            input: { defval: e },
            value: t,
            disabled: n,
            onBlur: o,
            onKeyDown: r,
            hasTooltip: a,
          } = this.props;
          return s.createElement(u.InputControl, {
            className: p()(d.input, a && d.hasTooltip),
            value: void 0 === t ? e : t,
            onChange: this._onChange,
            onBlur: o,
            onKeyDown: r,
            disabled: n,
          });
        }
      }
      const g = (0, h.debounced)(m),
        v = (0, c.bind)(g);
      var C = n(49923),
        f = n(16282),
        y = n(22489),
        b = n(39628);
      function T(e = '') {
        const [, t = '', n = '', s = '', o = ''] = Array.from(
          e.match(/^(\d\d)(\d\d)-(\d\d)(\d\d)/) || [],
        );
        return [`${t}:${n}`, `${s}:${o}`];
      }
      class E extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._onStartPick = (e) => {
              this.setState({ startTime: e }, this._onChange);
            }),
            (this._onEndPick = (e) => {
              this.setState({ endTime: e }, this._onChange);
            }),
            (this._onChange = () => {
              const {
                  input: { id: e, name: t },
                  onChange: n,
                } = this.props,
                { startTime: s, endTime: o } = this.state;
              n(s.replace(':', '') + '-' + o.replace(':', ''), e, t);
            });
          const t = e.value || e.input.defval,
            [n, s] = T(t);
          this.state = { prevValue: t, startTime: n, endTime: s };
        }
        render() {
          const { startTime: e, endTime: t } = this.state,
            { hasTooltip: n } = this.props;
          return s.createElement(
            y.InputGroup,
            { className: p()(n && d.hasTooltip) },
            s.createElement(
              'div',
              { className: d.sessionStart },
              s.createElement(b.TimeInput, {
                className: p()(d.input, d.sessionInputContainer),
                name: 'start',
                value: (0, f.ensureDefined)(e),
                onChange: this._onStartPick,
              }),
              s.createElement('span', { className: d.sessionDash }, ' — '),
            ),
            s.createElement(
              'div',
              { className: d.sessionEnd },
              s.createElement(b.TimeInput, {
                className: p()(d.input, d.sessionInputContainer),
                name: 'end',
                value: (0, f.ensureDefined)(t),
                onChange: this._onEndPick,
              }),
            ),
          );
        }
        static getDerivedStateFromProps(e, t) {
          if (e.value === t.prevValue) return t;
          const [n, s] = T(e.value);
          return { prevValue: e.value, startTime: n, endTime: s };
        }
      }
      const x = (0, c.bind)(E);
      var _ = n(79881),
        S = n(27490),
        P = n(85062),
        I = n.n(P),
        w = n(41497),
        N = n(76470),
        V = n(48854);
      const R = {
        open: (0, _.t)('open'),
        high: (0, _.t)('high'),
        low: (0, _.t)('low'),
        close: (0, _.t)('close'),
        hl2: (0, _.t)('hl2'),
        hlc3: (0, _.t)('hlc3'),
        ohlc4: (0, _.t)('ohlc4'),
        hlcc4: (0, _.t)('hlcc4'),
      };
      class k extends s.PureComponent {
        render() {
          const { input: e } = this.props,
            { study: t, model: n } = this.context;
          let o = { ...R };
          delete o.hlcc4;
          const r = (0, V.createAdapter)(t);
          if (t && this._isStudy(t) && t.isChildStudy()) {
            const t = r.parentSource(),
              n = t.title(),
              s = I().getChildSourceInputTitles(e, t.metaInfo(), n);
            o = { ...o, ...s };
          }
          if (
            S.enabled('study_on_study') &&
            t &&
            this._isStudy(t) &&
            (t.isChildStudy() || I().canBeChild(t.metaInfo()))
          ) {
            const e = [t, ...r.getAllChildren()];
            n.model()
              .allStudies()
              .filter((t) => t.canHaveChildren() && !e.includes(t))
              .forEach((e) => {
                const t = e.title(!0, void 0, !0),
                  n = e.sourceId() || '#' + e.id(),
                  s = e.metaInfo(),
                  r = s.styles,
                  a = s.plots || [];
                if (1 === a.length) o[n + '$0'] = t;
                else if (a.length > 1) {
                  const e = a.reduce((e, s, o) => {
                    if (!I().canPlotBeSourceOfChildStudy(s.type)) return e;
                    let a;
                    try {
                      a = (0, f.ensureDefined)((0, f.ensureDefined)(r)[s.id])
                        .title;
                    } catch (e) {
                      a = s.id;
                    }
                    return { ...e, [`${n}$${o}`]: `${t}: ${a}` };
                  }, {});
                  o = { ...o, ...e };
                }
              });
          }
          const a = {
            ...e,
            type: 'text',
            options: Object.keys(o),
            optionsTitles: o,
          };
          return s.createElement(N.SelectInput, { ...this.props, input: a });
        }
        _isStudy(e) {
          return !e.hasOwnProperty('isInputsStudy');
        }
      }
      k.contextType = w.PropertyContext;
      var B = n(35001),
        M = n(1467),
        D = n(45221);
      const W = void 0,
        F = [
          '1',
          '3',
          '5',
          '15',
          '30',
          '45',
          '60',
          '120',
          '180',
          '240',
          '1D',
          '1W',
          '1M',
        ];
      class O extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: s,
              } = this.props;
              s(e, t, n);
            });
        }
        render() {
          const { input: e, value: t, disabled: n, hasTooltip: o } = this.props,
            r = B.Interval.parse(void 0 === t ? e.defval : t),
            a = r.isValid() ? r.value() : t,
            i = W ? W.get().filter((e) => !B.Interval.parse(e).isRange()) : [],
            l = (0, M.mergeResolutions)(F, i);
          return (
            l.unshift(''),
            s.createElement(D.Select, {
              id: e.id,
              className: p()(d.input, d.resolution, o && d.hasTooltip),
              menuClassName: p()(d.dropdownMenu, d.resolution),
              items:
                ((u = l),
                u.map((e) => ({
                  value: e,
                  content:
                    '' === e
                      ? (0, _.t)('Chart')
                      : (0, M.getTranslatedResolutionModel)(e).hint,
                }))),
              value: a,
              onChange: this._onChange,
              disabled: n,
            })
          );
          var u;
        }
      }
      const G = (0, c.bind)(O);
      var z = n(78736),
        H = n(91967);
      class K extends s.PureComponent {
        render() {
          return s.createElement(w.PropertyContext.Consumer, null, (e) =>
            e ? this._getColorInputWithContext(e) : null,
          );
        }
        _getColorInputWithContext(e) {
          var t;
          const {
              input: { id: n },
              disabled: o,
              hasTooltip: r,
            } = this.props,
            { model: a, study: i } = e;
          if ('properties' in i || 'tempProperties' in i) {
            const e =
              'properties' in i
                ? i.properties().inputs[n]
                : null === (t = i.tempProperties) || void 0 === t
                ? void 0
                : t.inputs.child(n);
            return s.createElement(
              H.StylePropertyContainer,
              { model: a, property: e },
              s.createElement(z.ColorWithThicknessSelect, {
                className: p()(r && d.hasTooltip),
                color: e,
                disabled: o,
              }),
            );
          }
          return null;
        }
      }
      class q extends s.PureComponent {
        render() {
          const {
            input: e,
            disabled: t,
            onChange: n,
            tzName: l,
            hasTooltip: p,
          } = this.props;
          if ((0, o.isStudyInputOptionsInfo)(e))
            return s.createElement(N.SelectInput, {
              input: e,
              disabled: t,
              onChange: n,
              hasTooltip: p,
            });
          switch (e.type) {
            case 'integer':
              return s.createElement(r.IntegerInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: p,
              });
            case 'float':
            case 'price':
              return s.createElement(a.FloatInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: p,
              });
            case 'bool':
              return s.createElement(i.BoolInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: p,
              });
            case 'text':
              return s.createElement(v, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: p,
              });
            case 'symbol':
              return s.createElement(C.SymbolInput, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: p,
              });
            case 'session':
              return s.createElement(x, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: p,
              });
            case 'source':
              return s.createElement(k, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: p,
              });
            case 'resolution':
              return s.createElement(G, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: p,
              });
            case 'time':
              return null;
            case 'color':
              return s.createElement(K, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: p,
              });
            default:
              return null;
          }
        }
      }
    },
    78736: (e, t, n) => {
      'use strict';
      n.d(t, { ColorWithThicknessSelect: () => v });
      var s = n(67294),
        o = n(14563),
        r = n(79881),
        a = n(90963),
        i = n(50968),
        l = n(91967),
        p = n(32895),
        u = n(37763),
        c = n(87438);
      const h = new a.TranslatedString(
          'change thickness',
          (0, r.t)('change thickness'),
        ),
        d = new a.TranslatedString('change color', (0, r.t)('change color')),
        m = new a.TranslatedString(
          'change opacity',
          (0, r.t)('change opacity'),
        ),
        g = [1, 2, 3, 4];
      class v extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._trackEventLabel = null),
            (this._getTransparencyValue = () => {
              const { transparency: e } = this.props;
              return e ? e.value() : 0;
            }),
            (this._getOpacityValue = () => {
              const { color: e } = this.props,
                t = (0, u.getPropertyValue)(e);
              if (t)
                return (0, i.isHexColor)(t)
                  ? (0, i.transparencyToAlpha)(this._getTransparencyValue())
                  : (0, o.parseRgba)(t)[3];
            }),
            (this._getColorValueInHex = () => {
              const { color: e } = this.props,
                t = (0, u.getPropertyValue)(e);
              return t
                ? (0, i.isHexColor)(t)
                  ? t
                  : (0, o.rgbToHexString)((0, o.parseRgb)(t))
                : null;
            }),
            (this._onThicknessChange = (e) => {
              const { thickness: t } = this.props;
              void 0 !== t && this._setProperty(t, e, h);
            }),
            (this._onColorChange = (e) => {
              const { color: t, isPaletteColor: n } = this.props,
                s = (0, u.getPropertyValue)(t);
              let r = 0;
              s &&
                (r = (0, i.isHexColor)(s)
                  ? this._getTransparencyValue()
                  : (0, i.alphaToTransparency)((0, o.parseRgba)(s)[3])),
                this._setProperty(t, (0, i.generateColor)(String(e), r, !0), d),
                (this._trackEventLabel =
                  'Plot color > ' + (n ? 'Palette' : 'Single'));
            }),
            (this._onOpacityChange = (e) => {
              const { color: t } = this.props,
                n = (0, u.getPropertyValue)(t);
              this._setProperty(
                t,
                (0, i.generateColor)(n, (0, i.alphaToTransparency)(e), !0),
                m,
              );
            }),
            (this._onPopupClose = () => {
              this._trackEventLabel &&
                ((0, c.trackEvent)(
                  'GUI',
                  'Study settings',
                  this._trackEventLabel,
                ),
                (this._trackEventLabel = null));
            });
        }
        componentWillUnmount() {
          this._onPopupClose();
        }
        render() {
          const {
            selectOpacity: e = !0,
            disabled: t,
            className: n,
          } = this.props;
          return s.createElement(p.ColorSelect, {
            className: n,
            disabled: t,
            color: this._getColorValueInHex(),
            selectOpacity: e,
            opacity: this._getOpacityValue(),
            thickness: this._getThicknessValue(),
            thicknessItems: g,
            onColorChange: this._onColorChange,
            onOpacityChange: this._onOpacityChange,
            onThicknessChange: this._onThicknessChange,
            onPopupClose: this._onPopupClose,
          });
        }
        _getThicknessValue() {
          const { thickness: e } = this.props;
          return e ? (0, u.getPropertyValue)(e) : void 0;
        }
        _setProperty(e, t, n) {
          const { setValue: s } = this.context;
          (0, u.setPropertyValue)(e, (e) => s(e, t, n));
        }
      }
      v.contextType = l.StylePropertyContext;
    },
    37763: (e, t, n) => {
      'use strict';
      function s(e) {
        return Array.isArray(e) ? e[0].value() : e.value();
      }
      function o(e, t) {
        if (Array.isArray(e)) for (const n of e) t(n);
        else t(e);
      }
      n.d(t, { getPropertyValue: () => s, setPropertyValue: () => o });
    },
    33237: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>';
    },
  },
]);
