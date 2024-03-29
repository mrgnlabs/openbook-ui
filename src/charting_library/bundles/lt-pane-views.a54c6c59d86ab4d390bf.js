(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [1583],
  {
    83764: (e, t, i) => {
      e.exports = i.p + 'f55394b616ed1ae9462c37daab941d93.png';
    },
    141: (e, t, i) => {
      e.exports = i.p + '898929f1acdb622689e0fc0c95c8fcd0.png';
    },
    80985: (e, t, i) => {
      e.exports = i.p + '4fafff07d8914dc11f6d335f606ff47c.png';
    },
    27867: (e, t, i) => {
      'use strict';
      i.d(t, { getImage: () => s });
      const n = new Map();
      function r(e) {
        e.crossOrigin = 'anonymous';
      }
      function s(e, t, i = r) {
        let s = n.get(e);
        return (
          void 0 === s &&
            ((s = new Promise((e, n) => {
              const r = new Image();
              (r.onload = () => {
                e(r), (r.onload = null), (r.onerror = null);
              }),
                (r.onerror = () => {
                  n(), (r.onload = null), (r.onerror = null);
                }),
                i(r),
                (r.src = t);
            })),
            n.set(e, s)),
          s
        );
      }
    },
    14768: (e, t, i) => {
      'use strict';
      i.d(t, { splitThousands: () => r });
      var n = i(75496);
      function r(e, t = '&nbsp;') {
        let i = e + '';
        -1 !== i.indexOf('e') &&
          (i = (function (e) {
            return (0, n.fixComputationError)(e)
              .toFixed(10)
              .replace(/\.?0+$/, '');
          })(Number(e)));
        const r = i.split('.');
        return (
          r[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) + (r[1] ? '.' + r[1] : '')
        );
      }
    },
    57583: (e, t, i) => {
      'use strict';
      var n = i(62159).PercentageFormatter,
        r = i(57649).NumericFormatter,
        s = i(54837).CHART_FONT_FAMILY,
        a = i(75235).fibLevelPrice,
        o = i(16932).drawScaled;
      function l(e, t, i) {
        (this._fibLevelsBasedOnLogScaleProperty = e),
          (this._sourcesToRow = {}),
          (this._rowsToSources = {}),
          (this._currentSymbol = ''),
          (this._actualCapacity = 1),
          (this._actualWidth = 1),
          (this._numericFormatter = new r()),
          (this._percentageFormatter = new n()),
          (this._pixelRatio = i.pixelRatio),
          this._recreateCanvas(
            this._actualWidth,
            l.ROW_HEIGHT * this._actualCapacity,
          ),
          (this._levelsCount = t);
      }
      (l.prototype.destroy = function () {
        (this._canvas = null), (this._cache = null);
      }),
        (l.prototype.topByRow = function (e) {
          return e * l.ROW_HEIGHT;
        }),
        (l.prototype.rowHeight = function (e) {
          return l.ROW_HEIGHT;
        }),
        (l.prototype.devicePixelRatio = function () {
          return (this._canvas && this._canvas.pixelRatio) || 0;
        }),
        (l.prototype._recreateCanvas = function (e, t) {
          (this._canvas = document.createElement('canvas')),
            (this._canvas.width = Math.ceil(e * this._pixelRatio)),
            (this._canvas.height = Math.ceil(
              t * this._actualCapacity * this._pixelRatio,
            )),
            (this._cache = this._canvas.getContext('2d')),
            (this._cache.font = '12px ' + s);
        }),
        (l.prototype.canvas = function () {
          return this._canvas;
        }),
        (l.ROW_HEIGHT = 14),
        (l.prototype.points = function (e) {
          return [e.points()[0], e.points()[1]];
        }),
        (l.prototype._selectStartPrice = function (e, t) {
          return t ? e.points()[0].price : e.points()[1].price;
        }),
        (l.prototype.startPoint = function (e, t) {
          var i = this._selectStartPrice(e, t);
          if (!this._calculateLogLevels(e)) return { price: i };
          var n = e.ownerSource().firstValue();
          return {
            price: i,
            coordinate: e.priceScale().priceToCoordinate(i, n),
          };
        }),
        (l.prototype._calculatePriceRange = function (e, t, i) {
          return i ? t.price - e.price : e.price - t.price;
        }),
        (l.prototype.priceRange = function (e, t) {
          var i = this.points(e),
            n = i[0],
            r = i[1],
            s = this._calculatePriceRange(n, r, t);
          if (!this._calculateLogLevels(e)) return { price: s };
          var a = e.priceScale(),
            o = e.ownerSource().firstValue(),
            l = a.priceToCoordinate(n.price, o),
            d = a.priceToCoordinate(r.price, o);
          return { price: s, coordinate: t ? d - l : l - d };
        }),
        (l.prototype.sourceIsReady = function (e) {
          return e.points().length >= 2;
        }),
        (l.prototype._calculateLogLevels = function (e) {
          return e.fibLevelsBasedOnLogScale && e.fibLevelsBasedOnLogScale();
        }),
        (l.prototype._calculateWidth = function (e) {
          if (!this.sourceIsReady(e)) return null;
          var t = this._canvas.getContext('2d');
          t.font = '12px ' + s;
          var i =
              !!e.properties().showPrices && e.properties().showPrices.value(),
            n =
              !!e.properties().coeffsAsPercents &&
              e.properties().coeffsAsPercents.value(),
            r = e.properties().showCoeffs.value(),
            o = this.points(e),
            l = o[0],
            d = o[1];
          if (!l || !d) return null;
          var h = e.ownerSource().firstValue();
          if (null === h) return 0;
          var c = !1,
            u = e.properties();
          u.reverse && u.reverse.value() && (c = u.reverse.value());
          for (
            var _ = this.startPoint(e, c),
              p = this.priceRange(e, c),
              g = this._calculateLogLevels(e),
              f = 0,
              v = [],
              x = 1;
            x <= this._levelsCount;
            x++
          ) {
            var w = u['level' + x].coeff.value(),
              m = '';
            if (
              (r &&
                (m += n
                  ? this._percentageFormatter.format(Math.round(1e4 * w) / 100)
                  : this._numericFormatter.format(w)),
              i)
            ) {
              var R = e.priceScale(),
                y = a(_, p, w, R, h, g);
              m += '(' + R.formatPrice(y, h) + ')';
            }
            var T = { text: m, left: f, width: t.measureText(m).width + 4 };
            v.push(T), (f += T.width);
          }
          return { totalWidth: f, cells: v };
        }),
        (l.prototype._effectiveState = function (e) {
          var t = {},
            i = e.properties();
          i.showPrices && (t.showPrices = i.showPrices.value()),
            i.coeffsAsPercents &&
              (t.coeffsAsPercents = i.coeffsAsPercents.value()),
            (t.showCoeffs = i.showCoeffs.value());
          var n = e.priceScale();
          n &&
            (n.formatter().state &&
              (t.formatter = e.priceScale().formatter().state()),
            (t.logLevels = this._calculateLogLevels(e))),
            i.reverse && (t.reverse = i.reverse.value()),
            (t.p1 = e.points()[0]),
            (t.p2 = e.points()[1]),
            3 === e.points().length && (t.p3 = e.points()[2]),
            (t.items = []);
          for (var r = 1; r <= this._levelsCount; r++) {
            var s = i['level' + r],
              a = { coeff: s.coeff.value(), color: s.color.value() };
            t.items.push(a);
          }
          return t;
        }),
        (l.prototype._findEmptyRow = function (e) {
          for (var t = 0; this._rowsToSources[t]; ) t++;
          return (
            (this._rowsToSources[t] = e),
            t >= this._actualCapacity &&
              (this._actualCapacity++,
              this._recreateCanvas(
                this._actualWidth,
                l.ROW_HEIGHT * this._actualCapacity,
              )),
            t
          );
        }),
        (l.prototype._repaintSource = function (e, t, i) {
          var n = l.ROW_HEIGHT * i.row;
          o(
            this._cache,
            this._pixelRatio,
            function () {
              this._cache.clearRect(0, n, this._actualWidth, l.ROW_HEIGHT),
                (this._cache.textBaseline = 'bottom'),
                (this._cache.font = '12px ' + s),
                (n += l.ROW_HEIGHT);
              for (var i = 0; i < e.cells.length; i++) {
                var r = e.cells[i];
                (this._cache.fillStyle = t.items[i].color),
                  this._cache.fillText(r.text, r.left, n);
              }
            }.bind(this),
          );
        }),
        (l.prototype.removeSource = function (e) {
          if (this._sourcesToRow[e]) {
            var t = this._sourcesToRow[e].row;
            o(this._cache, this._pixelRatio, function () {
              this._cache.clearRect(
                0,
                this.topByRow(t),
                this._actualWidth,
                l.ROW_HEIGHT,
              );
            }),
              delete this._sourcesToRow[e],
              delete this._rowsToSources[t];
          }
        }),
        (l.prototype._effectiveStatesEquals = function (e, t) {
          var i,
            n,
            r,
            s,
            a = function (e, t) {
              return (
                !(!e && !t) &&
                (!(!e || t) ||
                  !(e || !t) ||
                  e.index !== t.index ||
                  e.price !== t.price)
              );
            };
          if (e && !t) return !1;
          if (!e && t) return !1;
          if (e.showPrices !== t.showPrices) return !1;
          if (e.coeffsAsPercents !== t.coeffsAsPercents) return !1;
          if (e.showCoeffs !== t.showCoeffs) return !1;
          if (e.reverse !== t.reverse) return !1;
          if (e.logLevels !== t.logLevels) return !1;
          if (
            ((i = e.formatter),
            (n = t.formatter),
            (i || n) &&
              ((i && !n) ||
                (!i && n) ||
                i.minMove !== n.minMove ||
                i.minMove2 !== n.minMove2 ||
                i.fractional !== n.fractional ||
                i.fractionalLength !== n.fractionalLength))
          )
            return !1;
          if (a(e.p1, t.p1)) return !1;
          if (a(e.p2, t.p2)) return !1;
          if (a(e.p3, t.p3)) return !1;
          if (e.items.length !== t.items.length) return !1;
          for (var o = 0; o < e.items.length; o++)
            if (
              ((r = e.items[o]),
              (s = t.items[o]),
              r.coeff !== s.coeff || r.color !== s.color)
            )
              return !1;
          return !0;
        }),
        (l.prototype.updateSource = function (e) {
          var t = e.properties().symbol.value();
          if (
            (this._currentSymbol !== t &&
              ((this._currentSymbol = t),
              (this._sourcesToRow = {}),
              (this._rowsToSources = {})),
            !this._sourcesToRow[e.id()])
          ) {
            var i = this._findEmptyRow(e.id());
            this._sourcesToRow[e.id()] = { effectiveState: null, row: i };
          }
          var n = this._sourcesToRow[e.id()].effectiveState,
            r = this._effectiveState(e);
          if (!this._effectiveStatesEquals(n, r)) {
            var s = this._calculateWidth(e);
            if (s) {
              (this._sourcesToRow[e.id()].effectiveState = r),
                s.totalWidth > this._actualWidth &&
                  (this._recreateCanvas(
                    s.totalWidth,
                    l.ROW_HEIGHT * this._actualCapacity,
                  ),
                  (this._actualWidth = s.totalWidth));
              i = this._sourcesToRow[e.id()];
              this._repaintSource(s, r, i),
                (this._sourcesToRow[e.id()].effectiveState = r),
                (this._sourcesToRow[e.id()].preparedCells = s);
            } else this._sourcesToRow[e.id()].effectiveState = null;
          }
          return this._sourcesToRow[e.id()];
        }),
        (e.exports = { LevelledLineToolLabelsCache: l });
    },
    55913: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { Pattern5pointsPaneView: () => p });
      var n = i(33420),
        r = i(71172),
        s = i(87088),
        a = i(44896),
        o = i(18614),
        l = i(6397),
        d = i(57649),
        h = i(10288),
        c = i(59943),
        u = i(67857),
        _ = i(54837);
      class p extends u.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._abRetracement = NaN),
            (this._bcRetracement = NaN),
            (this._cdRetracement = NaN),
            (this._xdRetracement = NaN),
            (this._numericFormatter = new d.NumericFormatter()),
            (this._bcRetracementTrend = new l.TrendLineRenderer()),
            (this._xdRetracementTrend = new l.TrendLineRenderer()),
            (this._xbTrend = new l.TrendLineRenderer()),
            (this._bdTrend = new l.TrendLineRenderer()),
            (this._polylineRenderer = new c.PolygonRenderer(
              new h.HitTestResult(h.HitTestResult.MOVEPOINT),
            )),
            (this._mainTriangleRenderer = new o.TriangleRenderer()),
            (this._triangleRendererPoints234 = new o.TriangleRenderer()),
            (this._xbLabelRenderer = new a.TextRenderer()),
            (this._acLabelRenderer = new a.TextRenderer()),
            (this._bdLabelRenderer = new a.TextRenderer()),
            (this._xdLabelRenderer = new a.TextRenderer()),
            (this._textRendererALabel = new a.TextRenderer()),
            (this._textRendererBLabel = new a.TextRenderer()),
            (this._textRendererCLabel = new a.TextRenderer()),
            (this._textRendererDLabel = new a.TextRenderer()),
            (this._textRendererXLabel = new a.TextRenderer()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            this._updateBaseData(),
            (this._renderer = null),
            this._points.length < 2)
          )
            return;
          const e = this._source.properties().childs(),
            t = new s.CompositeRenderer(),
            i = (t, i) => ({
              points: [t],
              text: i,
              color: e.textcolor.value(),
              vertAlign: 'middle',
              horzAlign: 'center',
              font: _.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: e.bold && e.bold.value(),
              italic: e.italic && e.italic.value(),
              fontsize: e.fontsize.value(),
              backgroundColor: e.color.value(),
              backgroundRoundRect: 4,
            }),
            a = (t, i) => ({
              points: [t, i],
              color: e.color.value(),
              linewidth: 1,
              linestyle: n.LINESTYLE_DOTTED,
              extendleft: !1,
              extendright: !1,
              leftend: r.LineEnd.Normal,
              rightend: r.LineEnd.Normal,
            }),
            [o, l, d, h, c] = this._points,
            u = {
              points: [o, l, this._points.length < 3 ? l : d],
              color: 'rgba(0, 0, 0, 0)',
              linewidth: e.linewidth.value(),
              backcolor: e.backgroundColor.value(),
              fillBackground: e.fillBackground.value(),
              transparency: e.transparency.value(),
            };
          if (
            (this._mainTriangleRenderer.setData(u),
            t.append(this._mainTriangleRenderer),
            this._points.length > 3)
          ) {
            const i = {
              points: [d, h, 5 === this._points.length ? c : h],
              color: 'rgba(0, 0, 0, 0)',
              linewidth: e.linewidth.value(),
              backcolor: e.backgroundColor.value(),
              fillBackground: e.fillBackground.value(),
              transparency: e.transparency.value(),
            };
            this._triangleRendererPoints234.setData(i),
              t.append(this._triangleRendererPoints234);
          }
          const p = {
            points: this._points,
            color: e.color.value(),
            linewidth: e.linewidth.value(),
            backcolor: e.backgroundColor.value(),
            fillBackground: !1,
            linestyle: n.LINESTYLE_SOLID,
            filled: !1,
          };
          if (
            (this._polylineRenderer.setData(p),
            t.append(this._polylineRenderer),
            this._points.length >= 3)
          ) {
            const e = i(
              o.add(d).scaled(0.5),
              this._numericFormatter.format(this._abRetracement),
            );
            this._xbLabelRenderer.setData(e),
              t.append(this._xbLabelRenderer),
              this._xbTrend.setData(a(o, d)),
              t.append(this._xbTrend);
          }
          if (this._points.length >= 4) {
            this._bcRetracementTrend.setData(a(l, h)),
              t.append(this._bcRetracementTrend);
            const e = i(
              l.add(h).scaled(0.5),
              this._numericFormatter.format(this._bcRetracement),
            );
            this._acLabelRenderer.setData(e), t.append(this._acLabelRenderer);
          }
          if (this._points.length >= 5) {
            const e = i(
              d.add(c).scaled(0.5),
              this._numericFormatter.format(this._cdRetracement),
            );
            this._bdLabelRenderer.setData(e),
              t.append(this._bdLabelRenderer),
              this._xdRetracementTrend.setData(a(o, c)),
              t.append(this._xdRetracementTrend);
            const n = i(
              o.add(c).scaled(0.5),
              this._numericFormatter.format(this._xdRetracement),
            );
            this._xdLabelRenderer.setData(n),
              t.append(this._xdLabelRenderer),
              this._bdTrend.setData(a(d, c)),
              t.append(this._bdTrend);
          }
          const g = i(o, 'X');
          l.y > o.y
            ? ((g.vertAlign = 'bottom'), (g.offsetY = 5))
            : ((g.vertAlign = 'top'), (g.offsetY = 5)),
            this._textRendererXLabel.setData(g),
            t.append(this._textRendererXLabel);
          const f = i(l, 'A');
          if (
            (l.y < o.y
              ? ((f.vertAlign = 'bottom'), (f.offsetY = 5))
              : ((f.vertAlign = 'top'), (f.offsetY = 5)),
            this._textRendererALabel.setData(f),
            t.append(this._textRendererALabel),
            this._points.length > 2)
          ) {
            const e = i(d, 'B');
            d.y < l.y
              ? ((e.vertAlign = 'bottom'), (e.offsetY = 5))
              : ((e.vertAlign = 'top'), (e.offsetY = 5)),
              this._textRendererBLabel.setData(e),
              t.append(this._textRendererBLabel);
          }
          if (this._points.length > 3) {
            const e = i(h, 'C');
            h.y < d.y
              ? ((e.vertAlign = 'bottom'), (e.offsetY = 5))
              : ((e.vertAlign = 'top'), (e.offsetY = 5)),
              this._textRendererCLabel.setData(e),
              t.append(this._textRendererCLabel);
          }
          if (this._points.length > 4) {
            const e = i(c, 'D');
            c.y < h.y
              ? ((e.vertAlign = 'bottom'), (e.offsetY = 5))
              : ((e.vertAlign = 'top'), (e.offsetY = 5)),
              this._textRendererDLabel.setData(e),
              t.append(this._textRendererDLabel);
          }
          this.addAnchors(t), (this._renderer = t);
        }
        _updateBaseData() {
          if (this._source.points().length >= 3) {
            const [e, t, i] = this._source.points();
            this._abRetracement =
              Math.round(
                1e3 * Math.abs((i.price - t.price) / (t.price - e.price)),
              ) / 1e3;
          }
          if (this._source.points().length >= 4) {
            const [, e, t, i] = this._source.points();
            this._bcRetracement =
              Math.round(
                1e3 * Math.abs((i.price - t.price) / (t.price - e.price)),
              ) / 1e3;
          }
          if (this._source.points().length >= 5) {
            const [e, t, i, n, r] = this._source.points();
            (this._cdRetracement =
              Math.round(
                1e3 * Math.abs((r.price - n.price) / (n.price - i.price)),
              ) / 1e3),
              (this._xdRetracement =
                Math.round(
                  1e3 * Math.abs((r.price - t.price) / (t.price - e.price)),
                ) / 1e3);
          }
        }
      }
    },
    31017: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { ABCDPaneView: () => _ });
      var n = i(33420),
        r = i(87088),
        s = i(57649),
        a = i(6397),
        o = i(44896),
        l = i(71172),
        d = i(59943),
        h = i(10288),
        c = i(67857),
        u = i(54837);
      class _ extends c.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._numericFormatter = new s.NumericFormatter()),
            (this._abRetracementTrend = new a.TrendLineRenderer()),
            (this._cdRetracementTrend = new a.TrendLineRenderer()),
            (this._polylineRenderer = new d.PolygonRenderer(
              new h.HitTestResult(h.HitTestResult.MOVEPOINT),
            )),
            (this._abLabelRenderer = new o.TextRenderer()),
            (this._cdLabelRenderer = new o.TextRenderer()),
            (this._textRendererALabel = new o.TextRenderer()),
            (this._textRendererBLabel = new o.TextRenderer()),
            (this._textRendererCLabel = new o.TextRenderer()),
            (this._textRendererDLabel = new o.TextRenderer()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if ((super._updateImpl(), this._points.length < 2))
            return void (this._renderer = null);
          const e = this._source.properties().childs(),
            t = new r.CompositeRenderer(),
            i = (t, i) => ({
              points: [t],
              text: i,
              color: e.textcolor.value(),
              vertAlign: 'middle',
              horzAlign: 'center',
              font: u.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: e.bold && e.bold.value(),
              italic: e.italic && e.italic.value(),
              fontsize: e.fontsize.value(),
              backgroundColor: e.color.value(),
              backgroundRoundRect: 4,
            }),
            s = (t, i) => ({
              points: [t, i],
              color: e.color.value(),
              linewidth: e.linewidth.value(),
              linestyle: n.LINESTYLE_DOTTED,
              extendleft: !1,
              extendright: !1,
              leftend: l.LineEnd.Normal,
              rightend: l.LineEnd.Normal,
            }),
            [a, o, d, h] = this._points,
            c = {
              points: this._points,
              color: e.color.value(),
              linewidth: e.linewidth.value(),
              linestyle: n.LINESTYLE_SOLID,
              fillBackground: !1,
              filled: !1,
              backcolor: 'rgba(0, 0, 0, 0)',
            };
          this._polylineRenderer.setData(c), t.append(this._polylineRenderer);
          const _ = i(a, 'A');
          o.y > a.y
            ? ((_.vertAlign = 'bottom'), (_.offsetY = 5))
            : ((_.vertAlign = 'top'), (_.offsetY = 5)),
            this._textRendererALabel.setData(_),
            t.append(this._textRendererALabel);
          const p = i(o, 'B');
          if (
            (o.y < a.y
              ? ((p.vertAlign = 'bottom'), (p.offsetY = 5))
              : ((p.vertAlign = 'top'), (p.offsetY = 5)),
            this._textRendererBLabel.setData(p),
            t.append(this._textRendererBLabel),
            this._points.length > 2)
          ) {
            const e = i(d, 'C');
            d.y < o.y
              ? ((e.vertAlign = 'bottom'), (e.offsetY = 5))
              : ((e.vertAlign = 'top'), (e.offsetY = 5)),
              this._textRendererCLabel.setData(e),
              t.append(this._textRendererCLabel);
          }
          if (this._points.length > 3) {
            const e = i(h, 'D');
            h.y < d.y
              ? ((e.vertAlign = 'bottom'), (e.offsetY = 5))
              : ((e.vertAlign = 'top'), (e.offsetY = 5)),
              this._textRendererDLabel.setData(e),
              t.append(this._textRendererDLabel);
          }
          if (this._points.length >= 3) {
            this._abRetracementTrend.setData(s(a, d)),
              t.append(this._abRetracementTrend);
            const e = a.add(d).scaled(0.5),
              [n, r, o] = this._source.points(),
              l =
                Math.round(
                  1e3 * Math.abs((o.price - r.price) / (r.price - n.price)),
                ) / 1e3,
              h = i(e, this._numericFormatter.format(l));
            this._abLabelRenderer.setData(h), t.append(this._abLabelRenderer);
          }
          if (this._points.length >= 4) {
            this._cdRetracementTrend.setData(s(o, h)),
              t.append(this._cdRetracementTrend);
            const e = o.add(h).scaled(0.5),
              [, n, r, a] = this._source.points(),
              l =
                Math.round(
                  1e3 * Math.abs((a.price - r.price) / (r.price - n.price)),
                ) / 1e3,
              d = i(e, this._numericFormatter.format(l));
            this._cdLabelRenderer.setData(d), t.append(this._cdLabelRenderer);
          }
          this.addAnchors(t), (this._renderer = t);
        }
      }
    },
    35049: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { ArcPaneView: () => p });
      var n = i(89684),
        r = i(72927),
        s = i(51102),
        a = i(10992),
        o = i(87088),
        l = i(67857),
        d = i(50968),
        h = i(10288),
        c = i(58729),
        u = i(21344);
      class _ extends c.ScaledPaneRenderer {
        constructor() {
          super(...arguments), (this._data = null);
        }
        setData(e) {
          this._data = { ...e, angleFrom: 0, angleTo: Math.PI, clockwise: !1 };
        }
        hitTest(e) {
          if (null === this._data || this._data.points.length < 3) return null;
          const t = (0, u.interactionTolerance)().curve,
            i = this._data.points[0],
            a = this._data.points[1];
          let o = this._data.points[2],
            l = (0, n.distanceToLine)(i, a, o).distance;
          if (l < 1)
            return (
              (l = (0, n.distanceToLine)(i, a, e).distance),
              l < t ? new h.HitTestResult(h.HitTestResult.MOVEPOINT) : null
            );
          const d = a.subtract(i),
            c = d.length(),
            _ = i.add(a).scaled(0.5);
          let p = o.subtract(_).normalized();
          o = _.add(p.scaled(l));
          const g = d.x / c,
            f = d.y / c;
          let v = Math.acos(g);
          f < 0 && (v = -v);
          let x = (0, s.translationMatrix)(-i.x, -i.y);
          (e = (0, s.transformPoint)(x, e)),
            (x = (0, s.rotationMatrix)(-v)),
            (e = (0, s.transformPoint)(x, e)),
            (p = (0, s.transformPoint)(x, p));
          const w = 1 - Math.sqrt(3) / 2;
          if (
            ((x = (0, s.scalingMatrix)(1, (c * w) / l)),
            (e = (0, s.transformPoint)(x, e)),
            (p = (0, s.transformPoint)(x, p)),
            e.y * p.y < 0)
          )
            return null;
          let m;
          m =
            e.y < 0
              ? new r.Point(0.5 * c, (c * Math.sqrt(3)) / 2)
              : new r.Point(0.5 * c, (-c * Math.sqrt(3)) / 2);
          const R = e.subtract(m).length();
          return Math.abs(R - c) <= t
            ? new h.HitTestResult(h.HitTestResult.MOVEPOINT)
            : null;
        }
        _drawImpl(e) {
          if (null === this._data || this._data.points.length < 2) return;
          const t = this._data.points[0],
            i = this._data.points[1];
          if (this._data.points.length < 3)
            return (
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              e.beginPath(),
              e.moveTo(t.x, t.y),
              e.lineTo(i.x, i.y),
              void e.stroke()
            );
          let a = this._data.points[2];
          const o = (0, n.distanceToLine)(t, i, a).distance;
          if (o < 1)
            return (
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              e.beginPath(),
              e.moveTo(t.x, t.y),
              e.lineTo(i.x, i.y),
              void e.stroke()
            );
          const l = i.subtract(t),
            h = t.add(i).scaled(0.5),
            c = new r.Point(-l.y, l.x).normalized();
          (a = h.add(c.scaled(o))),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth);
          const u = l.length(),
            _ = l.x / u,
            p = l.y / u;
          let g = Math.acos(_);
          p < 0 && (g = -g);
          let f = this._data.points[2],
            v = (0, s.translationMatrix)(-h.x, -h.y);
          (f = (0, s.transformPoint)(v, f)),
            (v = (0, s.rotationMatrix)(-g)),
            (f = (0, s.transformPoint)(v, f)),
            (v = (0, s.scalingMatrix)(1, u / (2 * o))),
            (f = (0, s.transformPoint)(v, f)),
            f.y < 0 ? (this._data.clockwise = !0) : (this._data.clockwise = !1),
            e.save(),
            e.beginPath(),
            e.translate(t.x, t.y),
            e.rotate(g);
          const x = 1 - Math.sqrt(3) / 2;
          e.scale(1, o / (u * x)),
            this._data.clockwise
              ? e.arc(
                  0.5 * u,
                  (u * Math.sqrt(3)) / 2,
                  u,
                  (-2 * Math.PI) / 3,
                  -Math.PI / 3,
                  !1,
                )
              : e.arc(
                  0.5 * u,
                  (-u * Math.sqrt(3)) / 2,
                  u,
                  Math.PI / 3,
                  (2 * Math.PI) / 3,
                  !1,
                ),
            e.restore(),
            e.stroke(),
            this._data.fillBackground &&
              ((e.fillStyle = (0, d.generateColor)(
                this._data.backcolor,
                this._data.transparency,
              )),
              e.fill());
        }
      }
      class p extends l.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._arcRenderer = new _()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            0 === this._points.length)
          )
            return;
          const e = this._source.properties().childs(),
            t = {
              points: this._points,
              color: e.color.value(),
              linewidth: e.linewidth.value(),
              backcolor: e.backgroundColor.value(),
              fillBackground: e.fillBackground.value(),
              transparency: e.transparency.value(),
            };
          this._arcRenderer.setData(t);
          const i = new o.CompositeRenderer();
          (this._renderer = i), i.append(this._arcRenderer);
          const d = [],
            h = t.points[0],
            c = new r.Point(h.x, h.y);
          if (((c.data = 0), d.push(c), 1 === t.points.length)) return;
          const u = t.points[1],
            _ = new r.Point(u.x, u.y);
          if (((_.data = 1), 2 === t.points.length))
            return void this.addAnchors(i);
          d.push(_);
          let p = t.points[2];
          const g = (0, n.distanceToLine)(h, u, p).distance,
            f = u.subtract(h),
            v = h.add(u).scaled(0.5),
            x = new r.Point(-f.y, f.x).normalized();
          p = v.add(x.scaled(g));
          const w = v.add(x.scaled(-g)),
            m = f.length(),
            R = f.x / m,
            y = f.y / m;
          let T = Math.acos(R);
          y < 0 && (T = -T);
          let b = t.points[2],
            L = (0, s.translationMatrix)(-v.x, -v.y);
          (b = (0, s.transformPoint)(L, b)),
            (L = (0, s.rotationMatrix)(-T)),
            (b = (0, s.transformPoint)(L, b)),
            (L = (0, s.scalingMatrix)(1, m / (2 * g))),
            (b = (0, s.transformPoint)(L, b));
          const S = b.y >= 0 ? new r.Point(p.x, p.y) : new r.Point(w.x, w.y);
          (S.data = 2), d.push(S);
          const P = [
            a.PaneCursorType.Default,
            a.PaneCursorType.Default,
            (0, l.thirdPointCursorType)(h, u),
          ];
          i.append(
            this.createLineAnchor({ points: d, pointsCursorType: P }, 0),
          );
        }
      }
    },
    92713: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { ArrowMarkPaneView: () => u });
      var n = i(54837),
        r = i(67857),
        s = i(87088),
        a = i(73301),
        o = i(44896),
        l = i(10288),
        d = i(71044),
        h = i(57968);
      class c {
        constructor() {
          this._data = null;
        }
        setData(e) {
          this._data = e;
        }
        draw(e, t) {
          if (null !== this._data) {
            switch (
              (e.save(), (e.fillStyle = this._data.color), this._data.direction)
            ) {
              case 'up':
              case 'down':
                !(function (e, t, i, n) {
                  const r = Math.max(1, Math.floor(n)) % 2 ? 0.5 : 0,
                    s = 'up' === i ? 1 : -1,
                    a = s * Math.round(12 * n),
                    o = (0, h.ceiledEven)(19.5 * n) / 2 + r,
                    l = s * Math.round(10 * n),
                    d = (0, h.ceiledEven)(10 * n) / 2 + r,
                    c = Math.round(t.x * n) + r,
                    u = Math.round(t.y * n);
                  e.beginPath(),
                    e.moveTo(c, u),
                    e.lineTo(c + o, u + a),
                    e.lineTo(c + d, u + a),
                    e.lineTo(c + d, u + a + l),
                    e.lineTo(c - d, u + a + l),
                    e.lineTo(c - d, u + a),
                    e.lineTo(c - o, u + a),
                    e.moveTo(c, u),
                    e.fill();
                })(e, this._data.point, this._data.direction, t.pixelRatio);
                break;
              case 'left':
              case 'right':
                !(function (e, t, i, n) {
                  const r = Math.max(1, Math.floor(n)) % 2 ? 0.5 : 0,
                    s = 'left' === i ? 1 : -1,
                    a = s * Math.round(12 * n) + r,
                    o = (0, h.ceiledEven)(19.5 * n) / 2 + r,
                    l = s * Math.round(22 * n) + r,
                    d = (0, h.ceiledEven)(10 * n) / 2 + r,
                    c = Math.round(t.x * n) + r,
                    u = Math.round(t.y * n) + r;
                  e.beginPath(),
                    e.moveTo(c, u),
                    e.lineTo(c + a, u + o),
                    e.lineTo(c + a, u + d),
                    e.lineTo(c + l, u + d),
                    e.lineTo(c + l, u - d),
                    e.lineTo(c + a, u - d),
                    e.lineTo(c + a, u - o),
                    e.moveTo(c, u),
                    e.fill();
                })(e, this._data.point, this._data.direction, t.pixelRatio);
            }
            e.restore();
          }
        }
        hitTest(e) {
          if (null === this._data) return null;
          let t, i, n, r;
          switch (this._data.direction) {
            case 'up':
              (t = this._data.point.x - 9.75),
                (n = t + 19.5),
                (i = this._data.point.y),
                (r = i + 12 + 10);
              break;
            case 'down':
              (t = this._data.point.x - 9.75),
                (n = t + 19.5),
                (r = this._data.point.y),
                (i = r - 12 - 10);
              break;
            case 'left':
              (t = this._data.point.x),
                (n = t + 12 + 10),
                (i = this._data.point.y - 9.75),
                (r = i + 19.5);
              break;
            case 'right':
              (n = this._data.point.x),
                (t = n - 12 - 10),
                (i = this._data.point.y - 9.75),
                (r = i + 19.5);
          }
          return e.x < t || e.x > n || e.y < i || e.y > r
            ? null
            : new l.HitTestResult(l.HitTestResult.MOVEPOINT);
        }
        doesIntersectWithBox(e) {
          return null !== this._data && (0, d.pointInBox)(this._data.point, e);
        }
      }
      class u extends r.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._arrowMarkRenderer = new c()),
            (this._textRenderer = new o.TextRenderer()),
            (this._renderer = null),
            (this._anchorsOffset = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            1 !== this._points.length)
          )
            return;
          const e = this._getSource(),
            t = e.properties().childs(),
            i = this._getModel();
          this._arrowMarkRenderer.setData({
            point: this._points[0],
            direction: e.direction(),
            color: t.arrowColor.value(),
          }),
            (this._renderer = new s.CompositeRenderer()),
            this._renderer.append(this._arrowMarkRenderer),
            '' !== t.text.value() &&
              t.showLabel.value() &&
              (this._textRenderer.setData({
                points: this._points,
                font: n.CHART_FONT_FAMILY,
                bold: t.bold.value(),
                italic: t.italic.value(),
                fontSize: t.fontsize.value(),
                text: t.text.value(),
                color: t.color.value(),
                ...e.textAlignParams(),
              }),
              this._renderer.append(this._textRenderer));
          const r = [
            this._anchorsOffset
              ? this._points[0].add(this._anchorsOffset)
              : this._points[0].clone(),
          ];
          this._renderer.append(
            new a.SelectionRenderer({
              points: r,
              bgColors: this._lineAnchorColors(r),
              visible: this.areAnchorsVisible(),
              barSpacing: i.timeScale().barSpacing(),
              hittestResult: l.HitTestResult.MOVEPOINT,
            }),
          );
        }
      }
    },
    3305: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { ArrowMarkerPaneView: () => p });
      var n = i(67857),
        r = i(87088),
        s = i(44896),
        a = i(72927),
        o = i(58729),
        l = i(10288),
        d = i(21344);
      function h(e) {
        if (e < 92) return 18;
        let t = 0.25 * e;
        return (
          (t = Math.min(t, 106)),
          (t = Math.max(t, 18)),
          (t = Math.min(t, 0.9 * e)),
          t
        );
      }
      class c extends o.ScaledPaneRenderer {
        constructor(e) {
          super(), (this._data = e);
        }
        setData(e) {
          this._data = e;
        }
        hitTest(e) {
          if (this._data.points.length < 2) return null;
          let t = this._data.points[0],
            i = this._data.points[1].subtract(t);
          const n = i.length();
          i = this._data.points[1].subtract(this._data.points[0]);
          i.length() < 22 &&
            ((t = this._data.points[1].addScaled(i.normalized(), -22)),
            (i = this._data.points[1].subtract(t)));
          const r = e.subtract(t),
            s = i.dotProduct(r) / n;
          if (s < 0 || s > n) return null;
          const a = i.scaled(1 / n),
            o = t.addScaled(a, s),
            h = e.subtract(o),
            c = (0, d.interactionTolerance)().line,
            u = this._hittestGeometry(n);
          for (let e = u.length - 2; e >= 0; e--) {
            const t = u[e];
            if (s >= t.x) {
              const i = u[e + 1],
                n = i.x - t.x,
                r = i.y - t.y,
                a = (s - t.x) / n,
                o = t.y + r * a;
              return h.length() <= o + c
                ? new l.HitTestResult(l.HitTestResult.MOVEPOINT)
                : null;
            }
          }
          return h.length() < 3
            ? new l.HitTestResult(l.HitTestResult.MOVEPOINT)
            : null;
        }
        _drawImpl(e) {
          if (this._data.points.length < 2) return;
          (e.fillStyle = this._data.color),
            (e.strokeStyle = this._data.color),
            (e.lineJoin = 'round'),
            (e.lineCap = 'round');
          let t = this._data.points[1].subtract(this._data.points[0]);
          const i = t.length();
          let n = this._data.points[0];
          i < 22 &&
            ((n = this._data.points[1].addScaled(t.normalized(), -22)),
            (t = this._data.points[1].subtract(n)));
          const r = new a.Point(t.y, -t.x).normalized(),
            s = this._arrowGeometry(t.length()),
            o = t.normalized();
          (e.lineWidth = (function (e) {
            let t = Math.round(0.02 * e);
            return (t = Math.min(t, 5)), (t = Math.max(t, 2)), t;
          })(t.length())),
            e.beginPath(),
            e.moveTo(n.x, n.y);
          for (let t = 0; t < s.length; t++) {
            const i = s[t],
              a = n.addScaled(o, i.x).addScaled(r, i.y);
            e.lineTo(a.x, a.y);
          }
          e.lineTo(this._data.points[1].x, this._data.points[1].y);
          for (let t = s.length - 1; t >= 0; t--) {
            const i = s[t],
              a = n.addScaled(o, i.x).addScaled(r, -i.y);
            e.lineTo(a.x, a.y);
          }
          e.lineTo(n.x, n.y), e.stroke(), e.fill();
        }
        _arrowGeometry(e) {
          const t = h(e),
            i = [],
            n = e >= 35 ? 0.1 : 0;
          return (
            i.push(new a.Point(0, 0)),
            i.push(new a.Point(e - t + t * n, (1.22 * t) / 4)),
            i.push(new a.Point(e - t, (1.22 * t) / 2)),
            i.push(new a.Point(e, 0)),
            i
          );
        }
        _hittestGeometry(e) {
          const t = h(e),
            i = [];
          return (
            i.push(new a.Point(0, 0)),
            i.push(new a.Point(e - t, (1.22 * t) / 4)),
            i.push(new a.Point(e - t, (1.22 * t) / 2)),
            i.push(new a.Point(e, 0)),
            i
          );
        }
      }
      var u = i(90212),
        _ = i(54837);
      class p extends n.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._textRendererData = {
              text: '',
              color: '',
              vertAlign: 'middle',
              horzAlign: 'center',
              font: '',
              offsetX: 10,
              offsetY: 10,
              points: [],
              forceTextAlign: !0,
            }),
            (this._arrowRendererData = { points: [], color: '' }),
            (this._ellipseRendererData = {
              color: '',
              linewidth: 0,
              points: [],
              fillBackground: !0,
              backcolor: '',
              noHitTestOnBackground: !0,
            }),
            (this._drawAsCircle = !1),
            (this._textRenderer = new s.TextRenderer(this._textRendererData)),
            (this._arrowRenderer = new c(this._arrowRendererData)),
            (this._ellipseRenderer = new u.EllipseRendererSimple(
              this._ellipseRendererData,
            ));
        }
        renderer(e, t) {
          this._invalidated && this._updateImpl();
          const i = new r.CompositeRenderer();
          this._drawAsCircle
            ? i.append(this._ellipseRenderer)
            : i.append(this._arrowRenderer);
          const n = this._getSource().properties().childs();
          return (
            this._textRendererData.points &&
              this._textRendererData.points.length > 0 &&
              n.showLabel.value() &&
              (this._textRenderer.setData({ ...this._textRendererData }),
              i.append(this._textRenderer)),
            this.addAnchors(i),
            i
          );
        }
        _updateImpl() {
          super._updateImpl();
          const e = this._getPoints(),
            t = this._getSource().properties().childs();
          if (
            ((this._arrowRendererData.color = t.backgroundColor.value()),
            (this._arrowRendererData.points = e),
            (this._textRendererData.text = t.text.value()),
            (this._textRendererData.color = t.textColor.value()),
            (this._textRendererData.font = _.CHART_FONT_FAMILY),
            (this._textRendererData.bold = t.bold.value()),
            (this._textRendererData.italic = t.italic.value()),
            (this._textRendererData.fontsize = t.fontsize.value()),
            e.length >= 2)
          ) {
            const i = this._getSource().points(),
              n = i[0].index - i[1].index,
              r = i[0].price - i[1].price;
            if (
              ((this._drawAsCircle = 0 === n && Math.abs(r) < 1e-8),
              (this._textRendererData.points = [e[0]]),
              this._drawAsCircle)
            ) {
              (this._textRendererData.horzAlign = 'left'),
                (this._textRendererData.vertAlign = 'middle');
              const i = new a.Point(e[0].x - 9, e[0].y - 9),
                n = new a.Point(e[0].x + 9, e[0].y + 9);
              (this._ellipseRendererData.points = [i, n]),
                (this._ellipseRendererData.backcolor = t.backgroundColor.value()),
                (this._ellipseRendererData.color = t.backgroundColor.value());
            } else {
              const t = e[1].subtract(e[0]);
              Math.abs(t.x) >= Math.abs(t.y)
                ? (e[1].x > e[0].x
                    ? (this._textRendererData.horzAlign = 'right')
                    : (this._textRendererData.horzAlign = 'left'),
                  (this._textRendererData.vertAlign = 'middle'))
                : (e[1].y > e[0].y
                    ? (this._textRendererData.vertAlign = 'bottom')
                    : (this._textRendererData.vertAlign = 'top'),
                  (this._textRendererData.horzAlign = 'center'));
            }
          }
        }
      }
    },
    73955: (e, t, i) => {
      'use strict';
      i.r(t),
        i.d(t, {
          BalloonPaneView: () => f,
        });
      var n = i(73395),
        r = i(50968),
        s = i(54837),
        a = i(67857),
        o = i(72927),
        l = i(71044),
        d = i(76553),
        h = i(16932),
        c = i(58729),
        u = i(10288);
      class _ extends c.ScaledPaneRenderer {
        constructor() {
          super(),
            (this._geometryCache = {
              innerHeight: NaN,
              textHorizontalPadding: NaN,
              innerWidth: NaN,
              paddingLeft: NaN,
            }),
            (this._geomertryCacheInvalidated = !0),
            (this._data = null);
        }
        setData(e) {
          (this._data = e), (this._geomertryCacheInvalidated = !0);
        }
        hitTest(e, t) {
          if (null === this._data || 0 === this._data.points.length)
            return null;
          const i =
              this._data.points[0].x - (this._geometryCache.paddingLeft + 20),
            n = this._data.points[0].y - (this._geometryCache.innerHeight + 9),
            r = (0, o.box)(
              new o.Point(i, n),
              new o.Point(
                i + this._geometryCache.innerWidth,
                n + this._geometryCache.innerHeight,
              ),
            );
          return (0, l.pointInBox)(e, r)
            ? new u.HitTestResult(u.HitTestResult.MOVEPOINT, {
                areaName: u.AreaName.Text,
              })
            : null;
        }
        _drawImpl(e, t) {
          if (null === this._data || 0 === this._data.points.length) return;
          e.font = this._data.font;
          const i = this._measureInfo(e, this._data.label, this._data.fontSize),
            {
              paddingLeft: n,
              innerHeight: r,
              innerWidth: s,
              textHorizontalPadding: a,
            } = i;
          e.textAlign = (0, d.isRtl)() ? 'right' : 'left';
          const o = this._data.points[0].x - (n + 20),
            l = this._data.points[0].y - (r + 9);
          e.translate(o, l),
            e.beginPath(),
            e.moveTo(24, r),
            e.lineTo(15, r),
            e.arcTo(-1e3, 0, 1e3, 0, r / 2),
            e.lineTo(s - 15, 0),
            e.arcTo(1e3, r, -1e3, r, r / 2),
            e.lineTo(33, r),
            e.quadraticCurveTo(33, r + 4, 35, r + 9),
            e.quadraticCurveTo(27, r + 6, 24, r),
            (e.fillStyle = this._data.backgroundColor),
            e.fill(),
            (e.strokeStyle = this._data.borderColor),
            (e.lineWidth = 2),
            e.stroke(),
            e.closePath(),
            (e.textBaseline = 'middle'),
            (e.fillStyle = this._data.color),
            e.fillText(this._data.label, n + a, r / 2);
        }
        _measureInfo(e, t, i) {
          if (this._geomertryCacheInvalidated) {
            const n = e.measureText(t),
              r = i,
              s = 15,
              a = Math.round(r / 1.3),
              o = n.width + 2 * s,
              l = r + 2 * a,
              d = (0, h.calcTextHorizontalShift)(e, n.width);
            (this._geometryCache = {
              paddingLeft: s,
              innerWidth: o,
              innerHeight: l,
              textHorizontalPadding: d,
            }),
              (this._geomertryCacheInvalidated = !1);
          }
          return this._geometryCache;
        }
      }
      var p = i(87088),
        g = i(73301);
      class f extends a.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._balloonRenderer = new _()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl(e, t) {
          super._updateImpl(e, t);
          const i = this._source.properties().childs(),
            a = {
              points: this._points,
              color: i.color.value(),
              borderColor: i.borderColor.value(),
              backgroundColor: (0, r.generateColor)(
                i.backgroundColor.value(),
                i.transparency.value(),
              ),
              font: (0, n.makeFont)(i.fontsize.value(), s.CHART_FONT_FAMILY),
              fontSize: i.fontsize.value(),
              label: i.text.value(),
            };
          if ((this._balloonRenderer.setData(a), 1 === a.points.length)) {
            const e = new p.CompositeRenderer();
            return (
              e.append(this._balloonRenderer),
              e.append(
                new g.SelectionRenderer({
                  points: a.points,
                  bgColors: this._lineAnchorColors(a.points),
                  visible: this.areAnchorsVisible(),
                  barSpacing: this._model.timeScale().barSpacing(),
                  hittestResult: u.HitTestResult.MOVEPOINT,
                }),
              ),
              void (this._renderer = e)
            );
          }
          this._renderer = this._balloonRenderer;
        }
      }
    },
    25009: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { BarsPatternPaneView: () => x });
      var n = i(72927),
        r = i(53312),
        s = i(33420),
        a = i(50968),
        o = i(10288),
        l = i(87088),
        d = i(71172),
        h = i(59109),
        c = i(72095),
        u = i(6397),
        _ = i(69819),
        p = i(67857),
        g = i(83641);
      const f = r.colorsPalette['color-cold-gray-500'],
        v = {
          [g.LineToolBarsPatternMode.Bars]: (e) => [e[2], e[3]],
          [g.LineToolBarsPatternMode.Line]: (e) => e[4],
          [g.LineToolBarsPatternMode.OpenClose]: (e) => [e[1], e[4]],
          [g.LineToolBarsPatternMode.LineOpen]: (e) => e[1],
          [g.LineToolBarsPatternMode.LineHigh]: (e) => e[2],
          [g.LineToolBarsPatternMode.LineLow]: (e) => e[3],
          [g.LineToolBarsPatternMode.LineHL2]: (e) => (e[2] + e[3]) / 2,
        };
      class x extends p.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._vertLineRenderer1 = new _.VerticalLineRenderer()),
            (this._vertLineRenderer2 = new _.VerticalLineRenderer()),
            (this._medianRenderer = new u.TrendLineRenderer()),
            (this._renderer = null);
        }
        renderer() {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          var e, t;
          if (
            (super._updateImpl(),
            (this._renderer = null),
            this._points.length < 2)
          )
            return;
          const i = this._source.priceScale(),
            r =
              null !==
                (t =
                  null === (e = this._source.ownerSource()) || void 0 === e
                    ? void 0
                    : e.firstValue()) && void 0 !== t
                ? t
                : null;
          if (!i || i.isEmpty() || null === r) return;
          const u = this._source.points(),
            _ = this._source.pattern(),
            p = _.length,
            x = new l.CompositeRenderer();
          if (p > 0 && 2 === u.length) {
            const e = this._source.properties().childs(),
              t = e.mode.value(),
              l = e.color.value(),
              d = Math.abs((this._points[0].x - this._points[1].x) / (p - 1)),
              f = this._source.getPressCoeff(),
              w = (e) => i.priceToCoordinate(e, r) * f,
              [{ index: m }, { index: R }] = u,
              y = m < R ? this._points[0] : this._points[1],
              T = y.x,
              b = y.y - w(this._source.firstPatternPrice());
            if (
              t === g.LineToolBarsPatternMode.Bars ||
              t === g.LineToolBarsPatternMode.OpenClose
            ) {
              const e = v[t];
              for (let t = 0; t < p; t++) {
                const i = Math.round(T + t * d + 0.5),
                  r = e(_[t]).map(
                    (e, t) =>
                      new n.Point(i + (2 * t - 1), Math.round(w(e)) + b),
                  ),
                  s = new c.RectangleRenderer();
                s.setData({
                  points: r,
                  color: l,
                  backcolor: l,
                  linewidth: 1,
                  fillBackground: !0,
                  transparency: 10,
                  extendLeft: !1,
                  extendRight: !1,
                }),
                  x.append(s);
              }
              x.append(this.createLineAnchor({ points: this._points }, 0));
            } else {
              const e = v[t],
                i = _.map((t, i) => new n.Point(T + i * d, w(e(t)) + b));
              x.append(
                new h.PaneRendererLine({
                  barSpacing: d,
                  items: i,
                  lineColor: (0, a.generateColor)(l, 10),
                  lineStyle: s.LINESTYLE_SOLID,
                  lineWidth: 2,
                  hittest: new o.HitTestResult(o.HitTestResult.MOVEPOINT),
                  simpleMode: !0,
                  withMarkers: !1,
                }),
              ),
                x.append(this.createLineAnchor({ points: this._points }, 1));
            }
          } else
            this._vertLineRenderer1.setData({
              x: this._points[0].x,
              color: f,
              linewidth: 1,
              linestyle: s.LINESTYLE_SOLID,
            }),
              x.append(this._vertLineRenderer1),
              this._vertLineRenderer2.setData({
                x: this._points[1].x,
                color: f,
                linewidth: 1,
                linestyle: s.LINESTYLE_SOLID,
              }),
              x.append(this._vertLineRenderer2),
              this._medianRenderer.setData({
                points: this._points,
                color: f,
                linewidth: 1,
                linestyle: s.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: d.LineEnd.Normal,
                rightend: d.LineEnd.Normal,
              }),
              x.append(this._medianRenderer);
          this._renderer = x;
        }
      }
    },
    56095: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { BezierCubicPaneView: () => v });
      var n = i(50968),
        r = i(67857),
        s = i(58729),
        a = i(10288),
        o = i(41454),
        l = i(5025),
        d = i(6397),
        h = i(71172),
        c = i(18815),
        u = i(21344);
      class _ extends s.ScaledPaneRenderer {
        constructor(e) {
          super(), (this._data = e || null);
        }
        setData(e) {
          this._data = e;
        }
        hitTest(e, t) {
          const i = this._data;
          if (null === i) return null;
          if (4 === i.points.length) {
            const t = (0, u.interactionTolerance)().curve,
              [n, r, s, l] = i.points,
              d = l.subtract(n),
              h = s.subtract(d.scaled(0.25)),
              _ = s.add(d.scaled(0.25)),
              p = r.subtract(s),
              g = l.subtract(p.scaled(0.25)),
              f = l.add(p.scaled(0.25));
            if (
              (0, o.quadroBezierHitTest)(s, n, h, e, t) ||
              (0, o.cubicBezierHitTest)(s, l, _, g, e, t) ||
              (0, o.quadroBezierHitTest)(l, r, f, e, t)
            )
              return new a.HitTestResult(a.HitTestResult.MOVEPOINT);
            let v = (0, c.hitTestExtendedPoints)(e, t, i.extendLeftPoints);
            return (
              null === v &&
                (v = (0, c.hitTestExtendedPoints)(e, t, i.extendRightPoints)),
              v
            );
          }
          return null;
        }
        _drawImpl(e, t) {
          if (null === this._data) return;
          (e.lineCap = 'butt'),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.lineWidth),
            (0, l.setLineStyle)(e, this._data.lineStyle);
          const i = this._data.points[0],
            n = this._data.points[1];
          if (2 === this._data.points.length)
            e.beginPath(),
              e.moveTo(i.x, i.y),
              e.lineTo(n.x, n.y),
              e.stroke(),
              this._data.leftEnd === h.LineEnd.Arrow &&
                (0, d.drawArrow)(n, i, e, e.lineWidth, t.pixelRatio),
              this._data.rightEnd === h.LineEnd.Arrow &&
                (0, d.drawArrow)(i, n, e, e.lineWidth, t.pixelRatio);
          else {
            const r = this._data.points[2],
              s = this._data.points[3],
              a = s.subtract(i),
              o = r.subtract(a.scaled(0.25)),
              l = r.add(a.scaled(0.25)),
              u = n.subtract(r),
              _ = s.subtract(u.scaled(0.25)),
              p = s.add(u.scaled(0.25));
            this._data.fillBack &&
              this._data.points.length > 2 &&
              ((e.fillStyle = this._data.backColor),
              e.beginPath(),
              e.moveTo(i.x, i.y),
              e.quadraticCurveTo(o.x, o.y, r.x, r.y),
              e.bezierCurveTo(l.x, l.y, _.x, _.y, s.x, s.y),
              e.quadraticCurveTo(p.x, p.y, n.x, n.y),
              e.fill()),
              e.beginPath(),
              (0, c.buildExtendedSegments)(e, this._data.extendLeftPoints),
              e.moveTo(i.x, i.y),
              e.quadraticCurveTo(o.x, o.y, r.x, r.y),
              e.bezierCurveTo(l.x, l.y, _.x, _.y, s.x, s.y),
              e.quadraticCurveTo(p.x, p.y, n.x, n.y),
              (0, c.buildExtendedSegments)(e, this._data.extendRightPoints),
              e.stroke(),
              this._data.leftEnd === h.LineEnd.Arrow &&
                (0, d.drawArrow)(o, i, e, e.lineWidth, t.pixelRatio),
              this._data.rightEnd === h.LineEnd.Arrow &&
                (0, d.drawArrow)(p, n, e, e.lineWidth, t.pixelRatio);
          }
        }
      }
      var p = i(87088),
        g = i(60809),
        f = i(16282);
      class v extends r.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._bezierCubicRenderer = new _()),
            (this._renderer = null),
            (this._extendedSegmentLeftCache = null),
            (this._extendedSegmentRightCache = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
        _updateImpl(e, t) {
          if (
            (super._updateImpl(e, t),
            (this._renderer = null),
            this._points.length < 2)
          )
            return;
          const i = this._source.properties().childs();
          let r = [],
            s = [];
          if (4 === this._source.points().length) {
            const n = (0, f.ensureNotNull)(
                this._source.pointToScreenPoint(this._source.points()[0]),
              ),
              a = (0, f.ensureNotNull)(
                this._source.pointToScreenPoint(this._source.points()[1]),
              ),
              o = (0, f.ensureNotNull)(
                this._source.pointToScreenPoint(this._source.points()[2]),
              ),
              l = (0, f.ensureNotNull)(
                this._source.pointToScreenPoint(this._source.points()[3]),
              ),
              d = l.subtract(n),
              h = o.subtract(d.scaled(0.25)),
              c = a.subtract(o),
              u = l.add(c.scaled(0.25));
            i.extendLeft.value() &&
              (r = this._extendSegmentLeft(o, n, h, t, e)),
              i.extendRight.value() &&
                (s = this._extendSegmentRight(l, a, u, t, e));
          }
          const a = this._points.slice(),
            o = this._source.controlPoints();
          null !== o &&
            (a.push(
              (0, f.ensureNotNull)(this._source.pointToScreenPoint(o[0])),
            ),
            a.push(
              (0, f.ensureNotNull)(this._source.pointToScreenPoint(o[1])),
            ));
          const l = {
            points: a,
            color: i.linecolor.value(),
            lineWidth: i.linewidth.value(),
            lineStyle: i.linestyle.value(),
            leftEnd: i.leftEnd.value(),
            rightEnd: i.rightEnd.value(),
            fillBack: i.fillBackground.value(),
            backColor: (0, n.generateColor)(
              i.backgroundColor.value(),
              i.transparency.value(),
            ),
            extendLeftPoints: r,
            extendRightPoints: s,
          };
          this._bezierCubicRenderer.setData(l);
          const d = new p.CompositeRenderer();
          d.append(this._bezierCubicRenderer),
            this.addAnchors(d),
            (this._renderer = d);
        }
        _extendSegmentLeft(e, t, i, n, r) {
          return (
            (0, g.cacheIsValid)(
              this._extendedSegmentLeftCache,
              e,
              t,
              i,
              n,
              r,
            ) ||
              (this._extendedSegmentLeftCache = {
                p1: e,
                p2: t,
                p3: i,
                width: n,
                height: r,
                segment: (0, o.extendQuadroBezier)(e, t, i, n, r),
              }),
            (0, f.ensureNotNull)(this._extendedSegmentLeftCache).segment
          );
        }
        _extendSegmentRight(e, t, i, n, r) {
          return (
            (0, g.cacheIsValid)(
              this._extendedSegmentRightCache,
              e,
              t,
              i,
              n,
              r,
            ) ||
              (this._extendedSegmentRightCache = {
                p1: e,
                p2: t,
                p3: i,
                width: n,
                height: r,
                segment: (0, o.extendQuadroBezier)(e, t, i, n, r),
              }),
            (0, f.ensureNotNull)(this._extendedSegmentRightCache).segment
          );
        }
      }
    },
    60809: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { cacheIsValid: () => d, BezierQuadroPaneView: () => h });
      var n = i(16282),
        r = i(50968),
        s = i(67857),
        a = i(87088),
        o = i(41454),
        l = i(18815);
      function d(e, t, i, n, r, s) {
        return (
          null !== e &&
          e.p1.x === t.x &&
          e.p1.y === t.y &&
          e.p2.x === i.x &&
          e.p2.y === i.y &&
          e.p3.x === n.x &&
          e.p3.y === n.y &&
          e.width === r &&
          e.height === s
        );
      }
      class h extends s.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._bezierQuadroRenderer = new l.BezierQuadroRenderer()),
            (this._renderer = null),
            (this._extendedSegmentLeftCache = null),
            (this._extendedSegmentRightCache = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
        _updateImpl(e, t) {
          if (
            (super._updateImpl(e, t),
            (this._renderer = null),
            this._points.length < 2)
          )
            return;
          const i = this._source.properties().childs();
          let s = [],
            o = [];
          if (3 === this._source.points().length) {
            const r = (0, n.ensureNotNull)(
                this._source.pointToScreenPoint(this._source.points()[0]),
              ),
              a = (0, n.ensureNotNull)(
                this._source.pointToScreenPoint(this._source.points()[1]),
              ),
              l = (0, n.ensureNotNull)(
                this._source.pointToScreenPoint(this._source.points()[2]),
              ),
              d = a.subtract(r),
              h = l.subtract(d.scaled(0.25)),
              c = l.add(d.scaled(0.25));
            i.extendLeft.value() &&
              (s = this._extendSegmentLeft(l, r, h, t, e)),
              i.extendRight.value() &&
                (o = this._extendSegmentRight(l, a, c, t, e));
          }
          const l = this._points.slice(),
            d = this._source.controlPoint();
          null !== d &&
            l.push((0, n.ensureNotNull)(this._source.pointToScreenPoint(d)));
          const h = {
            points: l,
            color: i.linecolor.value(),
            lineWidth: i.linewidth.value(),
            lineStyle: i.linestyle.value(),
            leftEnd: i.leftEnd.value(),
            rightEnd: i.rightEnd.value(),
            fillBack: i.fillBackground.value(),
            backColor: (0, r.generateColor)(
              i.backgroundColor.value(),
              i.transparency.value(),
            ),
            extendLeftSegments: s,
            extendRightSegments: o,
          };
          this._bezierQuadroRenderer.setData(h);
          const c = new a.CompositeRenderer();
          c.append(this._bezierQuadroRenderer),
            this.addAnchors(c),
            (this._renderer = c);
        }
        _extendSegmentLeft(e, t, i, r, s) {
          return (
            d(this._extendedSegmentLeftCache, e, t, i, r, s) ||
              (this._extendedSegmentLeftCache = {
                p1: e,
                p2: t,
                p3: i,
                width: r,
                height: s,
                segment: (0, o.extendQuadroBezier)(e, t, i, r, s),
              }),
            (0, n.ensureNotNull)(this._extendedSegmentLeftCache).segment
          );
        }
        _extendSegmentRight(e, t, i, r, s) {
          return (
            d(this._extendedSegmentRightCache, e, t, i, r, s) ||
              (this._extendedSegmentRightCache = {
                p1: e,
                p2: t,
                p3: i,
                width: r,
                height: s,
                segment: (0, o.extendQuadroBezier)(e, t, i, r, s),
              }),
            (0, n.ensureNotNull)(this._extendedSegmentRightCache).segment
          );
        }
      }
    },
    18815: (e, t, i) => {
      'use strict';
      i.d(t, {
        hitTestExtendedPoints: () => c,
        buildExtendedSegments: () => u,
        BezierQuadroRenderer: () => _,
      });
      var n = i(89684),
        r = i(58729),
        s = i(71172),
        a = i(5025),
        o = i(10288),
        l = i(41454),
        d = i(6397),
        h = i(21344);
      function c(e, t, i) {
        for (const r of i)
          for (let i = 1; i < r.length; i++) {
            const s = r[i - 1],
              a = r[i];
            if ((0, n.distanceToSegment)(s, a, e).distance < t)
              return new o.HitTestResult(o.HitTestResult.MOVEPOINT);
          }
        return null;
      }
      function u(e, t) {
        for (let i = 0; i < t.length; i++) {
          const n = t[i],
            r = n[0];
          e.moveTo(r.x, r.y);
          for (let t = 1; t < n.length; t++) {
            const i = n[t];
            e.lineTo(i.x, i.y);
          }
        }
      }
      class _ extends r.ScaledPaneRenderer {
        constructor(e) {
          super(), (this._data = e || null);
        }
        setData(e) {
          this._data = e;
        }
        hitTest(e, t) {
          if (null !== this._data && 3 === this._data.points.length) {
            const t = (0, h.interactionTolerance)().curve,
              [i, n, r] = this._data.points,
              s = n.subtract(i),
              a = r.subtract(s.scaled(0.25)),
              d = r.add(s.scaled(0.25));
            if (
              (0, l.quadroBezierHitTest)(r, i, a, e, t) ||
              (0, l.quadroBezierHitTest)(r, n, d, e, t)
            )
              return new o.HitTestResult(o.HitTestResult.MOVEPOINT);
            let u = c(e, t, this._data.extendLeftSegments);
            return (
              null === u && (u = c(e, t, this._data.extendRightSegments)), u
            );
          }
          return null;
        }
        _drawImpl(e, t) {
          if (null === this._data) return;
          const [i, n, r] = this._data.points;
          if (
            ((e.lineCap = 'butt'),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.lineWidth),
            (0, a.setLineStyle)(e, this._data.lineStyle),
            2 === this._data.points.length)
          )
            e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(n.x, n.y), e.stroke();
          else {
            const a = n.subtract(i),
              o = r.subtract(a.scaled(0.25)),
              l = r.add(a.scaled(0.25));
            this._data.fillBack &&
              this._data.points.length > 2 &&
              ((e.fillStyle = this._data.backColor),
              e.beginPath(),
              e.moveTo(i.x, i.y),
              e.quadraticCurveTo(o.x, o.y, r.x, r.y),
              e.quadraticCurveTo(l.x, l.y, n.x, n.y),
              e.fill()),
              e.beginPath(),
              u(e, this._data.extendLeftSegments),
              e.moveTo(i.x, i.y),
              e.quadraticCurveTo(o.x, o.y, r.x, r.y),
              e.quadraticCurveTo(l.x, l.y, n.x, n.y),
              u(e, this._data.extendRightSegments),
              e.stroke(),
              this._data.leftEnd === s.LineEnd.Arrow &&
                (0, d.drawArrow)(o, i, e, e.lineWidth, t.pixelRatio),
              this._data.rightEnd === s.LineEnd.Arrow &&
                (0, d.drawArrow)(l, n, e, e.lineWidth, t.pixelRatio);
          }
        }
      }
    },
    58979: (e, t, i) => {
      'use strict';
      i.d(t, { BrushBasePaneView: () => d });
      var n = i(72927),
        r = i(59943),
        s = i(73301),
        a = i(87088),
        o = i(10288),
        l = i(67857);
      class d extends l.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._polygonRenderer = new r.PolygonRenderer()),
            (this._renderer = new a.CompositeRenderer());
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl();
          const e = Math.max(1, this._source.smooth()),
            t = this._points;
          if (0 === t.length) return void this._renderer.clear();
          const i = [t[0]];
          for (let n = 1; n < t.length; n++) {
            const r = t[n].subtract(t[n - 1]),
              s = r.length(),
              a = Math.min(5, Math.floor(s / e)),
              o = r.normalized().scaled(s / a);
            for (let e = 0; e < a - 1; e++) i.push(t[n - 1].add(o.scaled(e)));
            i.push(t[n]);
          }
          this._points = this._smoothArray(i, e);
          const n = this._createPolygonRendererData();
          if (
            (this._polygonRenderer.setData(n),
            (this._renderer = new a.CompositeRenderer()),
            this._renderer.append(this._polygonRenderer),
            this._source.finished())
          ) {
            const e = n.points.length;
            if (e > 0) {
              const t =
                  1 !== e ? [n.points[0], n.points[e - 1]] : [n.points[0]],
                i = new s.SelectionRenderer({
                  points: t,
                  bgColors: this._lineAnchorColors(t),
                  visible: this.areAnchorsVisible(),
                  hittestResult: o.HitTestResult.REGULAR,
                  barSpacing: this._getModel().timeScale().barSpacing(),
                });
              this._renderer.append(i);
            }
          }
        }
        _smoothArray(e, t) {
          if (1 === e.length) return e;
          const i = new Array(e.length);
          for (let r = 0; r < e.length; r++) {
            let s = new n.Point(0, 0);
            for (let i = 0; i < t; i++) {
              const t = Math.max(r - i, 0),
                n = Math.min(r + i, e.length - 1);
              (s = s.add(e[t])), (s = s.add(e[n]));
            }
            i[r] = s.scaled(0.5 / t);
          }
          return i.push(e[e.length - 1]), i;
        }
      }
    },
    54414: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { BrushPaneView: () => s });
      var n = i(33420),
        r = i(58979);
      class s extends r.BrushBasePaneView {
        _createPolygonRendererData() {
          const e = this._source.properties().childs(),
            t = {
              points: this._points,
              color: e.linecolor.value(),
              linewidth: e.linewidth.value(),
              linestyle: n.LINESTYLE_SOLID,
              linecap: 'round',
              skipClosePath: !0,
              leftend: e.leftEnd.value(),
              rightend: e.rightEnd.value(),
              filled: !1,
              fillBackground: !1,
              backcolor: e.backgroundColor.value(),
            };
          return (
            e.fillBackground.value() &&
              this._model.lineBeingCreated() !== this._source &&
              ((t.filled = !0),
              (t.fillBackground = !0),
              (t.transparency = e.transparency.value())),
            t
          );
        }
      }
    },
    58535: (e, t, i) => {
      'use strict';
      var n,
        r = i(72927).Point,
        s = i(67857).LineSourcePaneView,
        a = i(10288).HitTestResult,
        o = i(10288).AreaName,
        l = i(87088).CompositeRenderer,
        d = i(50968),
        h = i(33682).CalloutConsts,
        c = i(16932).calcTextHorizontalShift,
        u = i(76553).isRtl,
        _ = i(58729).ScaledPaneRenderer,
        p = i(54837);
      class g extends _ {
        constructor(e) {
          super(), (this._data = null), (this._textSizeCache = e);
        }
        wordWrap(e, t) {
          var i;
          n ||
            (((i = document.createElement('canvas')).width = 0),
            (i.height = 0),
            (n = i.getContext('2d')),
            (i = null)),
            (t = +t);
          var r = (e += '').split(/[^\S\r\n]*(?:\r\n|\r|\n|$)/);
          if ((r[r.length - 1] || r.pop(), !isFinite(t) || t <= 0)) return r;
          n.font = this.fontStyle();
          for (var s = [], a = 0; a < r.length; a++) {
            var o = r[a];
            if ((d = n.measureText(o).width) <= t) {
              s.push(o);
              continue;
            }
            var l = o.split(/([-)\]},.!?:;])|(\s+)/);
            let e;
            for (; l.length; ) {
              var d,
                h = ~~(((t / d) * (l.length + 2)) / 3);
              if (
                h <= 0 ||
                n.measureText(l.slice(0, 3 * h - 1).join('')).width <= t
              )
                for (
                  ;
                  n.measureText(l.slice(0, 3 * (h + 1) - 1).join('')).width <=
                  t;

                )
                  h++;
              else
                for (
                  ;
                  h > 0 &&
                  n.measureText(l.slice(0, 3 * --h - 1).join('')).width > t;

                );
              if (h > 0)
                s.push(l.slice(0, 3 * h - 1).join('')), l.splice(0, 3 * h);
              else {
                var c = l[0] + (l[1] || '');
                if (
                  ((e = 1 === e ? 1 : ~~((t / n.measureText(c)) * c.length)),
                  n.measureText(c.substring(0, e)).width <= t)
                )
                  for (; n.measureText(c.substring(0, e + 1)).width <= t; ) e++;
                else
                  for (
                    ;
                    e > 1 && n.measureText(c.substring(0, --e)).width > t;

                  );
                e < 1 && (e = 1),
                  s.push(c.substring(0, e)),
                  (l[0] = c.substring(e)),
                  (l[1] = '');
              }
              if ((d = n.measureText(l.join('')).width) <= t) {
                s.push(l.join(''));
                break;
              }
            }
          }
          return s;
        }
        setData(e) {
          (this._data = e),
            (this._data.lines = this.wordWrap(e.text, e.wordWrapWidth));
        }
        hitTest(e) {
          if (null === this._data || this._data.points.length < 2) return null;
          var t = this._data.points[0],
            i = this._data.points[1];
          if (t.subtract(e).length() < 3) return new a(a.CHANGEPOINT, 0);
          var n = i.x - this._textSizeCache.totalWidth / 2,
            r = i.y - this._textSizeCache.totalHeight / 2;
          return e.x >= n &&
            e.x <= n + this._textSizeCache.totalWidth &&
            e.y >= r &&
            e.y <= r + this._textSizeCache.totalHeight
            ? new a(a.MOVEPOINT, { areaName: o.Text })
            : null;
        }
        fontStyle() {
          return (
            (this._data.bold ? 'bold ' : '') +
            (this._data.italic ? 'italic ' : '') +
            this._data.fontSize +
            'px ' +
            this._data.font
          );
        }
        _drawImpl(e) {
          if (!(null === this._data || this._data.points.length < 2)) {
            var t = this._data.points[0].clone(),
              i = this._data.points[1].clone();
            (e.lineCap = 'butt'),
              (e.strokeStyle = this._data.bordercolor),
              (e.lineWidth = this._data.linewidth),
              (e.textBaseline = 'bottom'),
              (e.font = this.fontStyle());
            var n = this._data.fontSize * this._data.lines.length,
              r =
                this._data.wordWrapWidth ||
                this._data.lines.reduce(function (t, i) {
                  return Math.max(t, e.measureText(i).width);
                }, 0);
            (this._textSizeCache.textHeight = n),
              (this._textSizeCache.textHeight = r);
            var s = h.RoundRadius,
              a = h.TextMargins,
              o = r + 2 * a + 2 * s,
              l = n + 2 * a + 2 * s;
            (this._textSizeCache.totalWidth = o),
              (this._textSizeCache.totalHeight = l);
            var _ = i.x - o / 2,
              p = i.y - l / 2,
              g = 0,
              f = r + 2 * a > 2 * s,
              v = n + 2 * a > 2 * s;
            e.textAlign = u() ? 'right' : 'left';
            var x = c(e, r);
            t.x > _ + o ? (g = 20) : t.x > _ && (g = 10),
              t.y > p + l ? (g += 2) : t.y > p && (g += 1),
              e.save(),
              e.translate(_, p),
              (t.x -= _),
              (t.y -= p),
              (i.x -= _),
              (i.y -= p),
              e.beginPath(),
              e.moveTo(s, 0),
              10 === g
                ? f
                  ? (e.lineTo(i.x - s, 0),
                    e.lineTo(t.x, t.y),
                    e.lineTo(i.x + s, 0),
                    e.lineTo(o - s, 0))
                  : (e.lineTo(t.x, t.y), e.lineTo(o - s, 0))
                : e.lineTo(o - s, 0),
              20 === g
                ? (e.lineTo(t.x, t.y), e.lineTo(o, s))
                : e.arcTo(o, 0, o, s, s),
              21 === g
                ? v
                  ? (e.lineTo(o, i.y - s),
                    e.lineTo(t.x, t.y),
                    e.lineTo(o, i.y + s),
                    e.lineTo(o, l - s))
                  : (e.lineTo(t.x, t.y), e.lineTo(o, l - s))
                : e.lineTo(o, l - s),
              22 === g
                ? (e.lineTo(t.x, t.y), e.lineTo(o - s, l))
                : e.arcTo(o, l, o - s, l, s),
              12 === g
                ? f
                  ? (e.lineTo(i.x + s, l),
                    e.lineTo(t.x, t.y),
                    e.lineTo(i.x - s, l),
                    e.lineTo(s, l))
                  : (e.lineTo(t.x, t.y), e.lineTo(s, l))
                : e.lineTo(s, l),
              2 === g
                ? (e.lineTo(t.x, t.y), e.lineTo(0, l - s))
                : e.arcTo(0, l, 0, l - s, s),
              1 === g
                ? v
                  ? (e.lineTo(0, i.y + s),
                    e.lineTo(t.x, t.y),
                    e.lineTo(0, i.y - s),
                    e.lineTo(0, s))
                  : (e.lineTo(t.x, t.y), e.lineTo(0, s))
                : e.lineTo(0, s),
              0 === g
                ? (e.lineTo(t.x, t.y), e.lineTo(s, 0))
                : e.arcTo(0, 0, s, 0, s),
              e.stroke(),
              (e.fillStyle = d.generateColor(
                this._data.backcolor,
                this._data.transparency,
              )),
              e.fill(),
              (e.fillStyle = this._data.color),
              (p = s + a + this._data.fontSize),
              (_ = s + a + x);
            for (var w = 0; w < this._data.lines.length; w++)
              e.fillText(this._data.lines[w], _, p), (p += this._data.fontSize);
            e.restore();
          }
        }
      }
      t.CalloutPaneView = class extends s {
        constructor(e, t) {
          super(e, t),
            (this._textSizeCache = {}),
            (this._calloutRenderer = new g(this._textSizeCache)),
            (this._renderer = null);
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            this._source._calculatePoint2(),
            (this._renderer = null),
            this._points[0] && !(this._points.length < 2))
          ) {
            var e = this._source.properties(),
              t = { points: [] };
            t.points.push(this._points[0]);
            var i = this._points[1].clone();
            (i.x =
              this._points[0].x +
              this._source._barOffset * this._model.timeScale().barSpacing()),
              t.points.push(i),
              (t.color = e.color.value()),
              (t.linewidth = e.linewidth.value()),
              (t.backcolor = e.backgroundColor.value()),
              (t.transparency = e.transparency.value()),
              (t.text = e.text.value()),
              (t.font = p.CHART_FONT_FAMILY),
              (t.fontSize = e.fontsize.value()),
              (t.bordercolor = e.bordercolor.value()),
              e.wordWrap &&
                e.wordWrap.value() &&
                (t.wordWrapWidth = e.wordWrapWidth.value()),
              (t.bold = e.bold && e.bold.value()),
              (t.italic = e.italic && e.italic.value()),
              this._calloutRenderer.setData(t);
            var n = new l();
            n.append(this._calloutRenderer);
            var s = t.points[1],
              a = [].concat(t.points);
            if (
              (a.splice(a.length - 1, 1),
              n.append(this.createLineAnchor({ points: a }, 0)),
              t.wordWrapWidth)
            ) {
              var o = new r(
                s.x + (t.wordWrapWidth >> 1) + h.RoundRadius + h.TextMargins,
                s.y,
              );
              (o.data = 1), n.append(this.createLineAnchor({ points: [o] }, 1));
            }
            this._renderer = n;
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    95636: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(67857).LineSourcePaneView,
        s = i(69819).VerticalLineRenderer,
        a = i(6397).TrendLineRenderer,
        o = i(10288).HitTestResult,
        l = i(87088).CompositeRenderer,
        d = i(71172).LineEnd;
      t.LineToolCircleLinesPaneView = class extends r {
        constructor(e, t) {
          super(e, t),
            (this._lines = []),
            (this._trendRenderer = new a()),
            (this._renderer = null);
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            !(this._source.points().length < 2))
          ) {
            var e = this._model.timeScale();
            if (
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !e.isEmpty()
            ) {
              var t = this._source.points()[0],
                i = this._source.points()[1],
                r = i ? i.index - t.index : 1;
              if (((this._lines = []), 0 !== r)) {
                var a = e.visibleBarsStrictRange();
                if (r > 0)
                  for (var h = t.index; h <= a.lastBar(); h += r)
                    this._lines.push({ x: e.indexToCoordinate(h) });
                else
                  for (h = t.index; h >= a.firstBar(); h += r)
                    this._lines.push({ x: e.indexToCoordinate(h) });
                if (!(this._points.length < 2)) {
                  var c = new l(),
                    u = this._source.properties(),
                    _ = {
                      points: [t, i],
                      width: this._model.timeScale().width(),
                      height: this._source.priceScale().height(),
                      color: u.trendline.color.value(),
                      linewidth: u.trendline.linewidth.value(),
                      linestyle: u.trendline.linestyle.value(),
                      extendleft: !1,
                      extendright: !1,
                      leftend: d.Normal,
                      rightend: d.Normal,
                    };
                  this._trendRenderer.setData(_), c.append(this._trendRenderer);
                  var p = this._model.timeScale().width(),
                    g = this._source.priceScale().height();
                  for (h = 0; h < this._lines.length; h++) {
                    var f = {
                        width: p,
                        height: g,
                        x: this._lines[h].x,
                        color: u.linecolor.value(),
                        linewidth: u.linewidth.value(),
                        linestyle: u.linestyle.value(),
                      },
                      v = new s();
                    v.setData(f), c.append(v);
                  }
                  if (2 === this._source.points().length) {
                    var x = [].concat(this._points);
                    c.append(this.createLineAnchor({ points: x }, 0));
                  } else
                    c.append(
                      this.createLineAnchor(
                        {
                          points: [
                            new n(
                              this._points[0].x,
                              this._source.priceScale().height() / 2,
                            ),
                          ],
                          hittestResult: o.MOVEPOINT,
                        },
                        1,
                      ),
                    );
                  this._renderer = c;
                }
              }
            }
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    18004: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { CirclePaneView: () => d });
      var n = i(87088),
        r = i(67857),
        s = i(71044),
        a = i(10288),
        o = i(21344);
      class l {
        constructor(e) {
          this._data = null != e ? e : null;
        }
        setData(e) {
          this._data = e;
        }
        draw(e, t) {
          if (null === this._data) return;
          const {
            center: i,
            radius: n,
            lineWidth: r,
            color: s,
            fillBackground: a,
            backColor: o,
          } = this._data;
          e.save();
          const l = t.pixelRatio,
            d = Math.max(1, Math.floor(l)),
            h = (d % 2) / 2,
            c = Math.round(i.x * l) + h,
            u = Math.round(i.y * l) + h,
            _ = Math.round(c + n * l),
            p = Math.max(1, Math.floor(r * l)),
            g = _ - c - p;
          a &&
            g > 0 &&
            ((e.fillStyle = o),
            e.beginPath(),
            e.moveTo(c + g, u),
            e.arc(c, u, g, 0, 2 * Math.PI, !1),
            e.fill());
          const f = Math.max(d / 2, _ - c - p / 2);
          (e.strokeStyle = s),
            (e.lineWidth = p),
            e.beginPath(),
            e.moveTo(c + f, u),
            e.arc(c, u, f, 0, 2 * Math.PI, !1),
            e.stroke(),
            e.restore();
        }
        hitTest(e, t) {
          if (null === this._data) return null;
          const { center: i, radius: n } = this._data,
            r = (0, o.interactionTolerance)().curve;
          if (!(0, s.pointInCircle)(e, i, n + r)) return null;
          const l =
            n > r && (0, s.pointInCircle)(e, i, n - r)
              ? a.HitTestResult.MOVEPOINT_BACKGROUND
              : a.HitTestResult.MOVEPOINT;
          return new a.HitTestResult(l);
        }
      }
      class d extends r.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._circleRenderer = new l()),
            (this._renderer = new n.CompositeRenderer());
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            this._renderer.clear(),
            this._points.length < 2)
          )
            return;
          const e = this._source.properties().childs(),
            [t, i] = this._points;
          this._circleRenderer.setData({
            center: t,
            radius: Math.sqrt((i.x - t.x) ** 2 + (i.y - t.y) ** 2),
            color: e.color.value(),
            lineWidth: e.linewidth.value(),
            backColor: e.backgroundColor.value(),
            fillBackground: e.fillBackground.value(),
          }),
            this._renderer.append(this._circleRenderer),
            this.addAnchors(this._renderer, {
              hittestResult: [
                a.HitTestResult.MOVEPOINT,
                a.HitTestResult.CHANGEPOINT,
              ],
            });
        }
      }
    },
    78866: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { CrossLinePaneView: () => l });
      var n = i(67857),
        r = i(29982),
        s = i(69819),
        a = i(87088),
        o = i(10288);
      class l extends n.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._renderer = null),
            (this._horizLineRenderer = new r.HorizontalLineRenderer()),
            (this._vertLineRenderer = new s.VerticalLineRenderer()),
            this._horizLineRenderer.setHitTest(
              new o.HitTestResult(o.HitTestResult.MOVEPOINT),
            );
        }
        update() {
          this._invalidated = !0;
        }
        renderer() {
          return (
            this._invalidated && (this._updateImpl(), (this._invalidated = !1)),
            this._renderer
          );
        }
        _updateImpl() {
          super._updateImpl(), (this._renderer = null);
          const e = this._getPoints();
          if (0 === e.length) return;
          const t = {
            color: this._getSource().lineColor(),
            linestyle: this._getSource().lineStyle(),
            linewidth: this._getSource().lineWidth(),
            x: e[0].x,
            y: e[0].y,
          };
          this._horizLineRenderer.setData(t),
            this._horizLineRenderer.setHitTest(
              new o.HitTestResult(o.HitTestResult.MOVEPOINT, {
                snappingPrice: this._source.points()[0].price,
              }),
            ),
            this._vertLineRenderer.setData(t),
            this._vertLineRenderer.setHitTest(
              new o.HitTestResult(o.HitTestResult.MOVEPOINT, {
                snappingIndex: this._source.points()[0].index,
              }),
            );
          const i = new a.CompositeRenderer();
          i.append(this._horizLineRenderer),
            i.append(this._vertLineRenderer),
            this.addAnchors(i),
            (this._renderer = i);
        }
      }
    },
    41308: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { CypherPaneView: () => r });
      var n = i(55913);
      class r extends n.Pattern5pointsPaneView {
        _updateBaseData() {
          if (this._source.points().length >= 3) {
            const [e, t, i] = this._source.points();
            this._abRetracement =
              Math.round(
                1e3 * Math.abs((i.price - t.price) / (t.price - e.price)),
              ) / 1e3;
          }
          if (this._source.points().length >= 4) {
            const [e, t, , i] = this._source.points();
            this._bcRetracement =
              Math.round(
                1e3 * Math.abs((i.price - e.price) / (t.price - e.price)),
              ) / 1e3;
          }
          if (this._source.points().length >= 5) {
            const [e, , t, i, n] = this._source.points();
            (this._cdRetracement =
              Math.round(
                1e3 * Math.abs((n.price - i.price) / (i.price - t.price)),
              ) / 1e3),
              (this._xdRetracement =
                Math.round(
                  1e3 * Math.abs((n.price - i.price) / (e.price - i.price)),
                ) / 1e3);
          }
        }
      }
    },
    99178: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { DateAndPriceRangePaneView: () => b });
      var n = i(16282),
        r = i(72927),
        s = i(79881),
        a = i(76553),
        o = i(67857),
        l = i(44896),
        d = i(72095),
        h = i(6397),
        c = i(87088),
        u = i(62159),
        _ = i(33420),
        p = i(71172),
        g = i(1953),
        f = i(85421),
        v = i(76559),
        x = (i(86656), i(54837));
      const w = new g.TimeSpanFormatter(),
        m = new u.PercentageFormatter(),
        R = new v.VolumeFormatter(),
        y = (0, s.t)('{count} bars'),
        T = (0, s.t)('Vol');
      class b extends o.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._distanceLineRenderer = new h.TrendLineRenderer()),
            (this._distancePriceRenderer = new h.TrendLineRenderer()),
            (this._backgroundRenderer = new d.RectangleRenderer()),
            (this._borderRenderer = new d.RectangleRenderer()),
            (this._textRenderer = new l.TextRenderer()),
            (this._renderer = new c.CompositeRenderer()),
            (this._pipFormatter = null),
            (this._lastSymbolInfo = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
        _updateImpl(e, t) {
          var i;
          if (
            (super._updateImpl(),
            this._renderer.clear(),
            this._points.length < 2 || this._source.points().length < 2)
          )
            return;
          const s = this._source.properties().childs();
          s.fillBackground &&
            s.fillBackground.value() &&
            (this._backgroundRenderer.setData({
              points: this._points,
              color: 'white',
              linewidth: 0,
              backcolor: s.backgroundColor.value(),
              fillBackground: !0,
              transparency: s.backgroundTransparency.value(),
              extendLeft: !1,
              extendRight: !1,
            }),
            this._renderer.append(this._backgroundRenderer));
          const [o, d] = this._points;
          s.drawBorder.value() &&
            (this._borderRenderer.setData({
              points: this._points,
              color: s.borderColor.value(),
              linewidth: s.borderWidth.value(),
              fillBackground: !1,
              extendLeft: !1,
              extendRight: !1,
              backcolor: '',
            }),
            this._renderer.append(this._borderRenderer));
          const h = s.drawBorder.value() ? s.borderWidth.value() / 2 : 0,
            c = Math.round((o.y + d.y) / 2),
            u = new r.Point(o.x + Math.sign(d.x - o.x) * h, c),
            g = new r.Point(d.x + Math.sign(o.x - d.x) * h, c);
          this._distanceLineRenderer.setData({
            points: [u, g],
            color: s.linecolor.value(),
            linewidth: s.linewidth.value(),
            linestyle: _.LINESTYLE_SOLID,
            extendleft: !1,
            extendright: !1,
            leftend: p.LineEnd.Normal,
            rightend:
              Math.abs(o.x - d.x) >= 25 * s.linewidth.value()
                ? p.LineEnd.Arrow
                : p.LineEnd.Normal,
          }),
            this._renderer.append(this._distanceLineRenderer);
          const v = Math.round((o.x + d.x) / 2),
            b = new r.Point(v, o.y + Math.sign(d.y - o.y) * h),
            L = new r.Point(v, d.y + Math.sign(o.y - d.y) * h);
          this._distancePriceRenderer.setData({
            points: [b, L],
            color: s.linecolor.value(),
            linewidth: s.linewidth.value(),
            linestyle: _.LINESTYLE_SOLID,
            extendleft: !1,
            extendright: !1,
            leftend: p.LineEnd.Normal,
            rightend:
              Math.abs(b.y - L.y) >= 25 * s.linewidth.value()
                ? p.LineEnd.Arrow
                : p.LineEnd.Normal,
          }),
            this._renderer.append(this._distancePriceRenderer),
            s.showLabel.value();
          {
            const t = this._source.points()[0].price,
              h = this._source.points()[1].price,
              c = h - t,
              u = (100 * c) / Math.abs(t),
              _ = this._source.points()[0].index,
              p = this._source.points()[1].index,
              g = p - _,
              v = (0, a.forceLTRStr)(g + ''),
              b = this._model.timeScale().indexToUserTime(_),
              L = this._model.timeScale().indexToUserTime(p);
            let S = '';
            if (b && L) {
              const e = (L.valueOf() - b.valueOf()) / 1e3;
              S = ', ' + (0, a.startWithLTR)(w.format(e));
            }
            const P = this._model.mainSeries().symbolInfo();
            P &&
              P !== this._lastSymbolInfo &&
              ((this._pipFormatter = new f.PipFormatter(
                P.pricescale,
                P.minmov,
                P.type,
                P.minmove2,
              )),
              (this._lastSymbolInfo = P));
            const C =
              (0, n.ensureNotNull)(this._source.ownerSource())
                .formatter()
                .format(c) +
              ' (' +
              m.format(Math.round(100 * u) / 100) +
              ') ' +
              (this._pipFormatter ? this._pipFormatter.format(c) : '');
            let M = (0, a.forceLTRStr)(C) + '\n' + y.format({ count: v }) + S;
            const I = this._source.volume();
            let N;
            Number.isNaN(I) || (M += `\n${T} ${R.format(I)}`),
              (N =
                h > t
                  ? new r.Point(0.5 * (o.x + d.x), d.y - 2 * s.fontsize.value())
                  : new r.Point(
                      0.5 * (o.x + d.x),
                      d.y + 0.7 * s.fontsize.value(),
                    ));
            const D = { x: 0, y: 10 },
              A = s.fontsize.value(),
              k = {
                points: [N],
                text: M,
                color: s.textcolor.value(),
                font: x.CHART_FONT_FAMILY,
                offsetX: D.x,
                offsetY: D.y,
                padding: 8,
                vertAlign: 'middle',
                horzAlign: 'center',
                fontsize: A,
                backgroundRoundRect: 4,
                backgroundHorzInflate: 0.4 * A,
                backgroundVertInflate: 0.2 * A,
              },
              E =
                null === (i = s.fillLabelBackground) || void 0 === i
                  ? void 0
                  : i.value();
            E && (k.backgroundColor = s.labelBackgroundColor.value()),
              this._textRenderer.setData(k);
            const B = this._textRenderer.measure(),
              O = (0, l.calculateLabelPosition)(B, o, d, D, e);
            this._textRenderer.setPoints([O]),
              this._renderer.append(this._textRenderer);
          }
          this.addAnchors(this._renderer);
        }
      }
    },
    86656: (e, t, i) => {
      'use strict';
      i.d(t, {
        rangeToolsDarkThemeColors: () => r,
        rangeToolsLightThemeColors: () => s,
      });
      var n = i(53312);
      const r = {
          textColor: (0, n.getHexColorByName)('color-white'),
          shadow: 'rgba(0, 0, 0, 0.4)',
          background: (0, n.getHexColorByName)('color-cold-gray-800'),
        },
        s = {
          textColor: (0, n.getHexColorByName)('color-black'),
          shadow: 'rgba(0, 0, 0, 0.2)',
          background: (0, n.getHexColorByName)('color-white'),
        };
    },
    34286: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { DateRangePaneView: () => w });
      var n = i(72927),
        r = i(79881),
        s = i(76553),
        a = i(67857),
        o = i(44896),
        l = i(72095),
        d = i(6397),
        h = i(87088),
        c = i(33420),
        u = i(71172),
        _ = i(1953),
        p = i(76559),
        g = (i(86656), i(54837));
      const f = new p.VolumeFormatter(),
        v = (0, r.t)('{count} bars'),
        x = (0, r.t)('Vol');
      class w extends a.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._leftBorderRenderer = new d.TrendLineRenderer()),
            (this._rightBorderRenderer = new d.TrendLineRenderer()),
            (this._distancePriceRenderer = new d.TrendLineRenderer()),
            (this._backgroundRenderer = new l.RectangleRenderer()),
            (this._textRenderer = new o.TextRenderer()),
            (this._renderer = new h.CompositeRenderer());
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
        _updateImpl(e, t) {
          var i;
          if (
            (super._updateImpl(),
            this._renderer.clear(),
            this._points.length < 2 || this._source.points().length < 2)
          )
            return;
          const r = this._source.properties().childs(),
            a = r.extendTop.value(),
            l = r.extendBottom.value(),
            [d, h] = this._points,
            p = a ? 0 : Math.min(d.y, h.y),
            w = l ? this._height() : Math.max(d.y, h.y);
          r.fillBackground.value() &&
            (this._backgroundRenderer.setData({
              points: [new n.Point(d.x, p), new n.Point(h.x, w)],
              color: 'white',
              linewidth: 0,
              backcolor: r.backgroundColor.value(),
              fillBackground: !0,
              transparency: r.backgroundTransparency.value(),
              extendLeft: !1,
              extendRight: !1,
            }),
            this._renderer.append(this._backgroundRenderer));
          const m = (e, t, i) => {
            e.setData({
              points: [t, i],
              color: r.linecolor.value(),
              linewidth: r.linewidth.value(),
              linestyle: c.LINESTYLE_SOLID,
              extendleft: !1,
              extendright: !1,
              leftend: u.LineEnd.Normal,
              rightend: u.LineEnd.Normal,
            }),
              this._renderer.append(e);
          };
          m(this._leftBorderRenderer, new n.Point(d.x, p), new n.Point(d.x, w)),
            m(
              this._rightBorderRenderer,
              new n.Point(h.x, p),
              new n.Point(h.x, w),
            );
          const R = Math.round((d.y + h.y) / 2),
            y = new n.Point(d.x, R),
            T = new n.Point(h.x, R);
          this._distancePriceRenderer.setData({
            points: [y, T],
            color: r.linecolor.value(),
            linewidth: r.linewidth.value(),
            linestyle: c.LINESTYLE_SOLID,
            extendleft: !1,
            extendright: !1,
            leftend: u.LineEnd.Normal,
            rightend:
              Math.abs(y.x - T.x) >= 15 * r.linewidth.value()
                ? u.LineEnd.Arrow
                : u.LineEnd.Normal,
          }),
            this._renderer.append(this._distancePriceRenderer),
            r.showLabel.value();
          {
            const t = this._source.points()[0].index,
              n = this._source.points()[1].index,
              a = n - t,
              l = this._model.timeScale().indexToUserTime(t),
              c = this._model.timeScale().indexToUserTime(n);
            let u = '';
            if (l && c) {
              const e = (c.valueOf() - l.valueOf()) / 1e3;
              u =
                ', ' + (0, s.startWithLTR)(new _.TimeSpanFormatter().format(e));
            }
            const p = this._source.volume(),
              w = Number.isNaN(p) ? '' : `\n${x} ${f.format(p)}`,
              m = v.format({ count: (0, s.forceLTRStr)(a.toString()) }) + u + w,
              R = { x: 0, y: 10 },
              y = r.fontsize.value(),
              T = {
                text: m,
                color: r.textcolor.value(),
                font: g.CHART_FONT_FAMILY,
                offsetX: R.x,
                offsetY: R.y,
                padding: 8,
                vertAlign: 'middle',
                horzAlign: 'center',
                fontsize: y,
                backgroundRoundRect: 4,
                backgroundHorzInflate: 0.4 * y,
                backgroundVertInflate: 0.2 * y,
              },
              b =
                null === (i = r.fillLabelBackground) || void 0 === i
                  ? void 0
                  : i.value();
            b && (T.backgroundColor = r.labelBackgroundColor.value()),
              this._textRenderer.setData(T);
            const L = this._textRenderer.measure(),
              S = (0, o.calculateLabelPosition)(L, d, h, R, e);
            this._textRenderer.setPoints([S]),
              this._renderer.append(this._textRenderer);
          }
          this.addAnchors(this._renderer);
        }
      }
    },
    41065: (e, t, i) => {
      'use strict';
      var n = i(67857).LineSourcePaneView,
        r = i(10847).DisjointChannelRenderer,
        s = i(6397).TrendLineRenderer,
        a = i(44896).TextRenderer,
        o = i(87088).CompositeRenderer,
        l = i(10992).PaneCursorType,
        d = i(54837),
        h = [l.Default, l.Default, l.VerticalResize, l.Default];
      t.DisjointChannelPaneView = class extends n {
        constructor(e, t) {
          super(e, t),
            (this._label = null),
            (this._trendLineRendererPoints12 = new s()),
            (this._trendLineRendererPoints43 = new s()),
            (this._disjointChannelRenderer = new r()),
            (this._p1LabelRenderer = new a()),
            (this._p2LabelRenderer = new a()),
            (this._p3LabelRenderer = new a()),
            (this._p4LabelRenderer = new a()),
            (this._renderer = null);
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            (this._label = null),
            !(this._source.points().length < 2) && this._source.priceScale())
          ) {
            var e = this._source.points()[0],
              t = this._source.points()[1],
              i = this._source.ownerSource().firstValue();
            if (
              ((this._price1 = this._source
                .priceScale()
                .formatPrice(e.price, i)),
              (this._price2 = this._source
                .priceScale()
                .formatPrice(t.price, i)),
              3 === this._source.points().length)
            ) {
              var n = this._source.points()[2];
              this._price3 = this._source.priceScale().formatPrice(n.price, i);
              var r = t.price - e.price;
              this._price4 = this._source
                .priceScale()
                .formatPrice(n.price + r, i);
            }
            if (!(this._points.length < 2)) {
              var s,
                a = new o(),
                l =
                  ((e = this._points[0]),
                  (t = this._points[1]),
                  this._source.properties()),
                c = this._model,
                u = this._source;
              if (this._points.length >= 3) {
                ((n = this._points[2]).x = t.x), (n.square = !0);
                var _ = t.y - e.y;
                if (
                  (((s = e.clone()).y = n.y + _),
                  (s.data = 3),
                  l.fillBackground.value())
                ) {
                  var p = c.timeScale().width(),
                    g = u.priceScale().height(),
                    f = l.extendLeft.value(),
                    v = l.extendRight.value();
                  this._disjointChannelRenderer.setData({
                    width: p,
                    height: g,
                    extendleft: f,
                    extendright: v,
                    points: [e, t, n, s],
                    backcolor: l.backgroundColor.value(),
                    transparency: l.transparency.value(),
                    hittestOnBackground: TradingView.isMobile.any(),
                  }),
                    a.append(this._disjointChannelRenderer);
                }
              }
              var x = function (e, t) {
                  return {
                    points: [e, t],
                    width: c.timeScale().width(),
                    height: u.priceScale().height(),
                    color: l.linecolor.value(),
                    linewidth: l.linewidth.value(),
                    linestyle: l.linestyle.value(),
                    extendleft: l.extendLeft.value(),
                    extendright: l.extendRight.value(),
                    leftend: l.leftEnd.value(),
                    rightend: l.rightEnd.value(),
                  };
                },
                w = this,
                m = function (e, t, i, n, r, s) {
                  if (w._source.properties().showPrices.value()) {
                    var o = {
                      points: [i],
                      text: r,
                      color: w._source.properties().textcolor.value(),
                      horzAlign: i.x > n.x ? 'left' : 'right',
                      vertAlign: 'middle',
                      font: d.CHART_FONT_FAMILY,
                      offsetX: 6,
                      offsetY: 0,
                      boxPadding: 0,
                      bold: w._source.properties().bold.value(),
                      italic: w._source.properties().italic.value(),
                      fontsize: w._source.properties().fontsize.value(),
                      forceTextAlign: !0,
                    };
                    e.setData(o), a.append(e);
                    o = {
                      points: [n],
                      text: s,
                      color: w._source.properties().textcolor.value(),
                      horzAlign: i.x < n.x ? 'left' : 'right',
                      vertAlign: 'middle',
                      font: d.CHART_FONT_FAMILY,
                      offsetX: 6,
                      offsetY: 0,
                      boxPadding: 0,
                      bold: w._source.properties().bold.value(),
                      italic: w._source.properties().italic.value(),
                      fontsize: w._source.properties().fontsize.value(),
                      forceTextAlign: !0,
                    };
                    t.setData(o), a.append(t);
                  }
                };
              if (
                (this._trendLineRendererPoints12.setData(x(e, t)),
                a.append(this._trendLineRendererPoints12),
                m(
                  this._p1LabelRenderer,
                  this._p2LabelRenderer,
                  e,
                  t,
                  this._price1,
                  this._price2,
                ),
                2 === this._points.length)
              )
                return this.addAnchors(a), void (this._renderer = a);
              this._trendLineRendererPoints43.setData(x(s, n)),
                a.append(this._trendLineRendererPoints43),
                m(
                  this._p3LabelRenderer,
                  this._p4LabelRenderer,
                  n,
                  s,
                  this._price3,
                  this._price4,
                );
              var R = [e, t, n, s];
              this._model.lineBeingCreated() === this._source && R.pop(),
                a.append(
                  this.createLineAnchor({ points: R, pointsCursorType: h }, 0),
                ),
                (this._renderer = a);
            }
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    81277: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { ElliottLabelsPaneView: () => v });
      var n = i(67857),
        r = i(87088),
        s = i(57968),
        a = i(50968),
        o = i(33420),
        l = i(10288),
        d = i(72927),
        h = i(71044),
        c = i(16932),
        u = i(73395);
      class _ {
        constructor(e, t) {
          (this._data = e), (this._hitTestResult = t);
        }
        hitTest(e) {
          const t = this._center(),
            i = this._data.circleRadius,
            n = {
              min: new d.Point(t.x - i, t.y - i),
              max: new d.Point(t.x + i, t.y + i),
            };
          return (0, h.pointInBox)(e, n) ? this._hitTestResult : null;
        }
        draw(e, t) {
          e.save();
          const i = t.pixelRatio,
            n = (Math.max(1, Math.floor(i)) % 2) / 2,
            r = this._center(),
            s = Math.round(r.x * i) + n,
            a = Math.round(r.y * i) + n;
          if (this._data.showCircle) {
            const t =
              Math.round(s + this._data.circleRadius * i) -
              s -
              (this._data.circleBorderWidth * i) / 2;
            (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.circleBorderWidth * i),
              e.beginPath(),
              e.moveTo(s + t, a),
              e.arc(s, a, t, 0, 2 * Math.PI, !1),
              e.stroke();
          }
          (e.font = (0, u.makeFont)(
            this._data.fontSize,
            this._data.font,
            this._data.bold ? 'bold' : void 0,
          )),
            (e.textBaseline = 'middle'),
            (e.textAlign = 'center'),
            (e.fillStyle = this._data.color),
            (0, c.drawScaled)(e, i, () => {
              e.fillText(
                this._data.letter,
                s / i,
                a / i + 0.05 * this._data.fontSize,
              );
            }),
            e.restore();
        }
        _center() {
          const e = 'bottom' === this._data.vertAlign ? -1 : 1,
            t =
              this._data.point.y +
              e * this._data.yOffset +
              e * this._data.circleRadius,
            i = this._data.point.x;
          return new d.Point(i, t);
        }
      }
      var p = i(54837),
        g = i(59943);
      const f = {
        4: { font: 24, circle: 36, circleBorderWidth: 1, bold: !0 },
        3: { font: 20, circle: 28, circleBorderWidth: 1, bold: !1 },
        2: { font: 18, circle: 22, circleBorderWidth: 1, bold: !1 },
        1: { font: 16, circle: 22, circleBorderWidth: 1, bold: !1 },
        0: { font: 11, circle: 14, circleBorderWidth: 1, bold: !0 },
      };
      class v extends n.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._renderer = null),
            (this._polylineRenderer = new g.PolygonRenderer());
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          var e;
          super._updateImpl(), (this._renderer = null);
          const t = this._source.properties().childs(),
            i = this._source.priceScale(),
            n = this._model.timeScale(),
            d =
              null === (e = this._source.ownerSource()) || void 0 === e
                ? void 0
                : e.firstValue();
          if (!i || i.isEmpty() || n.isEmpty() || null == d) return;
          const h = new r.CompositeRenderer();
          if (t.showWave.value()) {
            const e = {
              points: this._points,
              color: (0, a.generateColor)(t.color.value(), 0),
              linewidth: t.linewidth.value(),
              linestyle: o.LINESTYLE_SOLID,
              fillBackground: !1,
              filled: !1,
              backcolor: 'rgba(0, 0, 0, 0)',
              linejoin: 'round',
            };
            this._polylineRenderer.setData(e), h.append(this._polylineRenderer);
          }
          const c = this.areAnchorsVisible() ? 0 : 1;
          let u = 1;
          if (this._points.length > 2) {
            const e = this._points[2],
              t = this._points[1];
            u = (0, s.sign)(e.y - t.y);
          }
          let g = 0;
          this._model.lineBeingCreated() === this._source && (g = 1);
          const v = (0, a.resetTransparency)(t.color.value());
          for (let e = 0; e < this._points.length - g; e++, u = -u) {
            if (e < c) continue;
            const t = this._source.label(e);
            let i = t.label;
            const n = 'circle' === t.decoration;
            'brackets' === t.decoration && (i = '(' + i + ')');
            const r = f[t.group],
              s = new l.HitTestResult(l.HitTestResult.CHANGEPOINT, {
                pointIndex: e,
              });
            h.append(
              new _(
                {
                  point: this._points[e],
                  letter: i,
                  color: v,
                  font: p.CHART_FONT_FAMILY,
                  fontSize: r.font,
                  bold: r.bold,
                  showCircle: n,
                  circleRadius: r.circle / 2,
                  circleBorderWidth: r.circleBorderWidth,
                  yOffset: 10,
                  vertAlign: 1 === u ? 'top' : 'bottom',
                },
                s,
              ),
            );
          }
          const x = [];
          for (let e = 0; e < this._points.length; e++) {
            const t = this._points[e].clone();
            (t.data = e), x.push(t);
          }
          this._model.lineBeingCreated() === this._source && x.pop(),
            h.append(this.createLineAnchor({ points: x }, 0)),
            (this._renderer = h);
        }
      }
    },
    72133: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { EllipsePaneView: () => p });
      var n = i(89684),
        r = i(72927),
        s = i(10992),
        a = i(87088),
        o = i(67857),
        l = i(51102),
        d = i(50968),
        h = i(10288),
        c = i(58729),
        u = i(21344);
      class _ extends c.ScaledPaneRenderer {
        constructor() {
          super(...arguments), (this._data = null);
        }
        setData(e) {
          this._data = {
            ...e,
            angleFrom: 0,
            angleTo: 2 * Math.PI,
            clockwise: !1,
          };
        }
        hitTest(e) {
          if (null === this._data || this._data.points.length < 3) return null;
          const t = this._data.points[0],
            i = this._data.points[1];
          let s = this._data.points[2];
          const a = (0, n.distanceToLine)(t, i, s).distance,
            o = i.subtract(t),
            d = t.add(i).scaled(0.5),
            c = new r.Point(-o.y, o.x).normalized();
          s = d.add(c.scaled(a));
          const _ = o.length(),
            p = o.x / _,
            g = o.y / _;
          let f = Math.acos(p);
          g < 0 && (f = -f);
          let v = (0, l.translationMatrix)(-d.x, -d.y);
          e = (0, l.transformPoint)(v, e);
          let x = (0, l.transformPoint)(v, this._data.points[2]);
          (v = (0, l.rotationMatrix)(-f)),
            (e = (0, l.transformPoint)(v, e)),
            (x = (0, l.transformPoint)(v, x)),
            (v = (0, l.scalingMatrix)(1, _ / (2 * a))),
            (e = (0, l.transformPoint)(v, e)),
            (x = (0, l.transformPoint)(v, x));
          const w = e.length(),
            m = (0, u.interactionTolerance)().curve;
          return Math.abs(w - 0.5 * _) <= m
            ? new h.HitTestResult(h.HitTestResult.MOVEPOINT)
            : this._data.fillBackground &&
              !this._data.noHitTestOnBackground &&
              w <= 0.5 * _
            ? new h.HitTestResult(h.HitTestResult.MOVEPOINT_BACKGROUND)
            : null;
        }
        _drawImpl(e) {
          if (null === this._data || this._data.points.length < 2) return;
          const t = this._data.points[0],
            i = this._data.points[1];
          if (this._data.points.length < 3)
            return (
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              e.beginPath(),
              e.moveTo(t.x, t.y),
              e.lineTo(i.x, i.y),
              void e.stroke()
            );
          let s = this._data.points[2];
          const a = (0, n.distanceToLine)(t, i, s).distance;
          if (a < 1)
            return (
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              e.beginPath(),
              e.moveTo(t.x, t.y),
              e.lineTo(i.x, i.y),
              void e.stroke()
            );
          const o = i.subtract(t),
            h = t.add(i).scaled(0.5),
            c = new r.Point(-o.y, o.x).normalized();
          (s = h.add(c.scaled(a))),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth);
          const u = o.length(),
            _ = o.x / u,
            p = o.y / u;
          let g = Math.acos(_);
          p < 0 && (g = -g);
          let f = this._data.points[2],
            v = (0, l.translationMatrix)(-h.x, -h.y);
          (f = (0, l.transformPoint)(v, f)),
            (v = (0, l.rotationMatrix)(-g)),
            (f = (0, l.transformPoint)(v, f)),
            (v = (0, l.scalingMatrix)(1, u / (2 * a))),
            (f = (0, l.transformPoint)(v, f)),
            f.y < 0 ? (this._data.clockwise = !0) : (this._data.clockwise = !1),
            e.save(),
            e.beginPath(),
            e.translate(h.x, h.y),
            e.rotate(g),
            e.scale(1, (2 * a) / u),
            e.arc(
              0,
              0,
              0.5 * u,
              this._data.angleFrom,
              this._data.angleTo,
              this._data.clockwise,
            ),
            e.restore(),
            e.stroke(),
            this._data.fillBackground &&
              ((e.fillStyle = (0, d.generateColor)(
                this._data.backcolor,
                this._data.transparency,
              )),
              e.fill());
        }
      }
      class p extends o.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._ellipseRenderer = new _()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            this._points.length < 2)
          )
            return;
          const e = this._source.properties().childs(),
            t = {
              points: this._points,
              color: e.color.value(),
              linewidth: e.linewidth.value(),
              backcolor: e.backgroundColor.value(),
              fillBackground: e.fillBackground.value(),
              transparency: e.transparency.value(),
              noHitTestOnBackground: !1,
            };
          this._ellipseRenderer.setData(t);
          const i = new a.CompositeRenderer();
          i.append(this._ellipseRenderer);
          const l = t.points[0],
            d = t.points[1];
          if (2 === this._points.length)
            return this.addAnchors(i), void (this._renderer = i);
          let h = t.points[2];
          const c = (0, n.distanceToLine)(l, d, h).distance,
            u = d.subtract(l),
            _ = l.add(d).scaled(0.5),
            p = new r.Point(-u.y, u.x).normalized();
          h = _.add(p.scaled(c));
          const g = _.add(p.scaled(-c)),
            f = new r.Point(l.x, l.y);
          f.data = 0;
          const v = new r.Point(d.x, d.y);
          v.data = 1;
          const x = new r.Point(h.x, h.y);
          x.data = 2;
          const w = new r.Point(g.x, g.y);
          w.data = 3;
          const m = (0, o.thirdPointCursorType)(f, v),
            R = [s.PaneCursorType.Default, s.PaneCursorType.Default, m, m];
          i.append(
            this.createLineAnchor(
              { points: [f, v, x, w], pointsCursorType: R },
              0,
            ),
          ),
            (this._renderer = i);
        }
      }
    },
    34810: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(67857).LineSourcePaneView,
        s = i(55752),
        a = i(10288).HitTestResult,
        o = i(58729).ScaledPaneRenderer;
      class l extends o {
        constructor(e, t) {
          super(), (this._data = e), (this._adapter = t);
        }
        _textWidth(e) {
          if (0 === this._adapter.getText().length) return 0;
          e.save(), (e.font = this._adapter.getFont());
          var t = e.measureText(this._adapter.getText()).width;
          return e.restore(), 5 + t;
        }
        _drawArrow(e, t, i) {
          e.save(),
            (e.strokeStyle = this._adapter.getArrowColor()),
            (e.fillStyle = this._adapter.getArrowColor());
          var n = this._adapter.getArrowHeight(),
            r = this._adapter.getDirection();
          e.translate(t - 2, i),
            'buy' !== r && (e.rotate(Math.PI), e.translate(-4, 0)),
            CanvasEx.drawArrow(e, 0, 0, 0, n, 4),
            e.restore();
        }
        _drawText(e, t, i) {
          var n = this._adapter.getText();
          if (n) {
            e.save(),
              (e.textAlign = 'center'),
              (e.textBaseline = 'middle'),
              (e.font = this._adapter.getFont()),
              (e.fillStyle = this._adapter.getTextColor());
            var r = t + this._textWidth(e) / 2,
              a = i + s.fontHeight(this._adapter.getFont()) / 2;
            e.fillText(n, r, a - 1), e.restore();
          }
        }
        _drawImpl(e, t) {
          var i = Math.round(this._data.points[0].x),
            n = Math.round(this._data.points[0].y);
          this._drawArrow(e, i, n);
          var r = this._textWidth(e);
          if (0 !== r) {
            var a = this._adapter.getArrowHeight(),
              o = this._adapter.getArrowSpacing(),
              l = s.fontHeight(this._adapter.getFont()),
              d =
                'buy' === this._adapter.getDirection()
                  ? n + a + o
                  : n - a - o - l;
            this._drawText(e, Math.round(i + 0.5 - r / 2), d);
          }
        }
        hitTest(e) {
          var t,
            i,
            n = Math.round(this._data.points[0].x),
            r = Math.round(this._data.points[0].y),
            s = this._adapter.getArrowHeight();
          if (
            ('buy' === this._adapter.getDirection()
              ? ((t = r), (i = r + s))
              : ((t = r - s), (i = r)),
            e.x >= n - 2 && e.x <= n + 2 && e.y >= t && e.y <= i)
          ) {
            var o = this._adapter.getTooltip();
            const e = () => {
              TradingView.TradingWidget &&
                TradingView.TradingWidget.journalDialog();
            };
            return new a(a.CUSTOM, {
              clickHandler: e,
              tapHandler: e,
              tooltip:
                '' !== o
                  ? { text: o, rect: { x: n, y: t, w: 2, h: i - t } }
                  : null,
            });
          }
          return null;
        }
      }
      class d extends r {
        _updateImpl() {
          super._updateImpl(),
            (this._renderer = null),
            (this._rendererCached = !1);
        }
        renderer(e, t) {
          if ((this._invalidated && this._updateImpl(), this._rendererCached))
            return this._renderer;
          this._rendererCached = !0;
          var i = this._source,
            r = i.points();
          if (0 === r.length) return null;
          var s = i._adapter,
            a = i._model.timeScale(),
            o = this._source._model
              .paneForSource(this._source)
              .executionsPositionController()
              .getXYCoordinate(s, a, r[0].index);
          if (!isFinite(o.y) || o.y < 0 || o.y > e || o.x < 0)
            return (this._renderer = null), null;
          var d = { points: [new n(o.x, o.y)] };
          return (this._renderer = new l(d, s)), this._renderer;
        }
      }
      (d.prototype._renderer = null),
        (d.prototype._rendererCached = !1),
        (t.ExecutionPaneView = d);
    },
    89436: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { FibChannelPaneView: () => g });
      var n = i(16282),
        r = i(72927),
        s = i(50968),
        a = i(57583),
        o = i(68791),
        l = i(71172),
        d = i(87088),
        h = i(21498),
        c = i(6397),
        u = i(44993);
      class _ extends a.LevelledLineToolLabelsCache {
        priceRange(e, t) {
          const i = e.points()[2],
            r = e.points()[0],
            s = this._calculatePriceRange(i, r, t);
          if (!this._calculateLogLevels(e)) return { price: s };
          const a = e.priceScale(),
            o = (0, n.ensureNotNull)(e.ownerSource()).firstValue();
          if (null === a || null === o) return { price: s };
          const l = a.priceToCoordinate(i.price, o),
            d = a.priceToCoordinate(r.price, o);
          return { price: s, coordinate: t ? d - l : l - d };
        }
        _selectStartPrice(e) {
          return e.points()[0].price;
        }
      }
      class p extends h.ParallelChannelRenderer {
        _getColor() {
          const e = (0, n.ensureNotNull)(this._data);
          return (0, s.generateColor)(e.backcolor, e.transparency, !0);
        }
      }
      class g extends u.LineToolPaneViewWithLevelledTextCache {
        constructor() {
          super(...arguments),
            (this._baseLineRenderer = new c.TrendLineRenderer()),
            (this._lastLevelTrendRenderer = new c.TrendLineRenderer()),
            (this._renderer = null),
            (this._norm = null);
        }
        getCacheRects(e, t) {
          super.getCacheRects(e, t);
          const i = (0, n.ensureNotNull)(this._norm),
            s = this._source.properties(),
            a = (0, n.ensureDefined)(s.child('level' + t)).childs(),
            o = this._cacheState.preparedCells.cells[t - 1];
          let l;
          const d = this._points[0],
            h = this._points[1],
            c = i.scaled(a.coeff.value()),
            u = d.add(c),
            _ = h.add(c);
          switch (s.childs().horzLabelsAlign.value()) {
            case 'left':
              l = u;
              break;
            case 'center': {
              l = u.add(_).scaled(0.5);
              const e = Math.round(l.x + o.width / 2);
              l = new r.Point(e, l.y);
              break;
            }
            case 'right': {
              l = _.clone();
              const e = Math.round(l.x + o.width);
              l = new r.Point(e, l.y);
              break;
            }
          }
          l = (0, n.ensureDefined)(l);
          const p = {
              left: o.left,
              top: (0, n.ensureNotNull)(this._cache).topByRow(
                this._cacheState.row,
              ),
              width: o.width,
              height: (0, n.ensureNotNull)(this._cache).rowHeight(
                this._cacheState.row,
              ),
            },
            g = {
              left: Math.round(l.x - p.width),
              top: Math.round(l.y),
              width: o.width,
              height: p.height,
            },
            f = s.childs().vertLabelsAlign.value();
          return (
            'middle' === f && (g.top -= g.height / 2),
            'bottom' === f && (g.top -= g.height),
            { cacheRect: p, targetRect: g }
          );
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _createCache(e) {
          return new _(
            this._source.properties().childs().fibLevelsBasedOnLogScale,
            this._source.levelsCount(),
            e,
          );
        }
        _updateImpl() {
          super._updateImpl();
          if (null === this._source.priceScale()) return;
          (this._renderer = null),
            3 === this._points.length &&
              3 === this._source.points().length &&
              (this._norm = this._points[2].subtract(this._points[0]));
          const e = new d.CompositeRenderer();
          if (this._points.length < 2)
            return this.addAnchors(e), void (this._renderer = e);
          const t = this._source.properties().childs(),
            i = this._points[0],
            r = this._points[1];
          if (this._points.length < 3) {
            const n = {
              points: [i, r],
              color: t.level1.childs().color.value(),
              linewidth: t.levelsStyle.childs().linewidth.value(),
              linestyle: t.levelsStyle.childs().linestyle.value(),
              extendleft: t.extendLeft.value(),
              extendright: t.extendRight.value(),
              leftend: l.LineEnd.Normal,
              rightend: l.LineEnd.Normal,
            };
            return (
              this._baseLineRenderer.setData(n),
              e.append(this._baseLineRenderer),
              this.addAnchors(e),
              void (this._renderer = e)
            );
          }
          const s = (t, i, n) => {
              const r = new o.PaneRendererCachedImage(this, n);
              e.append(r);
            },
            a = this._source.levelsCount(),
            h = (0, n.ensureNotNull)(this._norm);
          for (let o = 1; o < a; o++) {
            const l = (0, n.ensureDefined)(
              this._source.properties().child('level' + o),
            ).childs();
            if (!l.visible.value()) continue;
            let d = null;
            for (let e = o + 1; e <= a; e++) {
              const t = (0, n.ensureDefined)(
                this._source.properties().child('level' + e),
              ).childs();
              if (t.visible.value()) {
                d = t;
                break;
              }
            }
            if (!d) break;
            const c = h.scaled(l.coeff.value()),
              u = i.add(c),
              _ = r.add(c),
              g = h.scaled(d.coeff.value()),
              f = {
                points: [u, _, i.add(g), r.add(g)],
                color: l.color.value(),
                linewidth: t.levelsStyle.childs().linewidth.value(),
                linestyle: t.levelsStyle.childs().linestyle.value(),
                extendleft: t.extendLeft.value(),
                extendright: t.extendRight.value(),
                backcolor: l.color.value(),
                transparency: t.transparency.value(),
                skipTopLine: !0,
                fillBackground: t.fillBackground.value(),
                hittestOnBackground: !0,
                showMidline: !1,
              },
              v = new p();
            v.setData(f),
              e.append(v),
              (t.showCoeffs.value() || t.showPrices.value()) && s(0, 0, o);
          }
          let c = null;
          for (let e = a; e >= 1; e--) {
            if (
              (0, n.ensureDefined)(this._source.properties().child('level' + e))
                .childs()
                .visible.value()
            ) {
              c = e;
              break;
            }
          }
          if (null !== c) {
            const a = (0, n.ensureDefined)(
              this._source.properties().child('level' + c),
            ).childs();
            if (a.visible.value()) {
              const n = h.scaled(a.coeff.value()),
                o = i.add(n),
                d = r.add(n),
                u = {
                  points: [o, d],
                  color: a.color.value(),
                  linewidth: t.levelsStyle.childs().linewidth.value(),
                  linestyle: t.levelsStyle.childs().linestyle.value(),
                  extendleft: t.extendLeft.value(),
                  extendright: t.extendRight.value(),
                  leftend: l.LineEnd.Normal,
                  rightend: l.LineEnd.Normal,
                };
              this._lastLevelTrendRenderer.setData(u),
                e.append(this._lastLevelTrendRenderer),
                (t.showCoeffs.value() || t.showPrices.value()) && s(0, 0, c);
            }
          }
          this.addAnchors(e), (this._renderer = e);
        }
      }
    },
    1509: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(6397).TrendLineRenderer,
        s = i(68791).PaneRendererCachedImage,
        a = i(10288).HitTestResult,
        o = i(87088).CompositeRenderer,
        l = i(57649).NumericFormatter,
        d = i(90212).EllipseRendererSimple,
        h = i(71172).LineEnd,
        c = i(44993).LineToolPaneViewWithLevelledTextCache;
      t.FibCirclesPaneView = class extends c {
        constructor(e, t) {
          super(e, t),
            (this._rendererCache = {}),
            (this._numericFormatter = new l()),
            (this._trendLineRenderer = new r()),
            (this._renderer = null);
        }
        getCacheRects(e, t) {
          super.getCacheRects(e, t);
          var i = this._cacheState.preparedCells.cells[
            this._levels[t].index - 1
          ];
          if (i) {
            var n = this._levels[t],
              r = {
                left: i.left,
                top: this._cache.topByRow(this._cacheState.row),
                width: i.width,
                height: this._cache.rowHeight(this._cacheState.row),
              };
            return {
              cacheRect: r,
              targetRect: {
                left: Math.round(n.labelPoint.x - r.width),
                top: Math.round(n.labelPoint.y - r.height / 2),
                width: i.width,
                height: r.height,
              },
            };
          }
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            !(this._source.points().length < 2 || this._points.length < 2) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          ) {
            var e = this._points[0],
              t = this._points[1];
            this._center = e.add(t).scaled(0.5);
            var i = Math.abs(t.x - e.x),
              r = Math.abs(t.y - e.y);
            this._levels = [];
            for (
              var l = this._source.properties(),
                c = this._source.levelsCount(),
                u = 1;
              u <= c;
              u++
            ) {
              var _ = l['level' + u];
              if (_.visible.value()) {
                var p = _.coeff.value(),
                  g = _.color.value(),
                  f = [];
                f.push(
                  new n(
                    this._center.x - 0.5 * i * p,
                    this._center.y - 0.5 * r * p,
                  ),
                ),
                  f.push(
                    new n(
                      this._center.x + 0.5 * i * p,
                      this._center.y + 0.5 * r * p,
                    ),
                  );
                var v = new n(this._center.x, this._center.y + 0.5 * r * p);
                this._levels.push({
                  color: g,
                  points: f,
                  labelPoint: v,
                  linewidth: _.linewidth.value(),
                  linestyle: _.linestyle.value(),
                  index: u,
                });
              }
            }
            if (!(this._points.length < 2)) {
              var x = new o(),
                w = l.fillBackground.value(),
                m = l.transparency.value();
              for (u = 0; u < this._levels.length; u++) {
                var R = this._levels[u],
                  y = {};
                (y.points = R.points),
                  (y.color = R.color),
                  (y.linewidth = R.linewidth),
                  (y.backcolor = R.color),
                  u > 0 && (y.wholePoints = this._levels[u - 1].points),
                  (y.fillBackground = w),
                  (y.transparency = m);
                var T = new a(a.MOVEPOINT, null, R.index);
                if ((x.append(new d(y, T)), l.showCoeffs.value())) {
                  var b = new s(this, u);
                  x.append(b);
                }
              }
              if (l.trendline.visible.value()) {
                var L = {
                  points: [this._points[0], this._points[1]],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: l.trendline.color.value(),
                  linewidth: l.trendline.linewidth.value(),
                  linestyle: l.trendline.linestyle.value(),
                  extendleft: !1,
                  extendright: !1,
                  leftend: h.Normal,
                  rightend: h.Normal,
                };
                this._trendLineRenderer.setData(L),
                  x.append(this._trendLineRenderer);
              }
              this.addAnchors(x), (this._renderer = x);
            }
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    75235: (e, t, i) => {
      'use strict';
      i.d(t, { fibLevelCoordinate: () => r, fibLevelPrice: () => s });
      var n = i(16282);
      function r(e, t, i, r, s, a) {
        if (a)
          return Math.round(
            (0, n.ensureDefined)(e.coordinate) +
              (0, n.ensureDefined)(t.coordinate) * i,
          );
        const o = e.price + t.price * i;
        return r.priceToCoordinate(o, s);
      }
      function s(e, t, i, r, s, a) {
        if (!a) return e.price + t.price * i;
        const o =
          (0, n.ensureDefined)(e.coordinate) +
          (0, n.ensureDefined)(t.coordinate) * i;
        return r.coordinateToPrice(o, s);
      }
    },
    81247: (e, t, i) => {
      'use strict';
      var n = i(16282).ensureNotNull,
        r = i(72927).Point,
        s = i(72095).RectangleRenderer,
        a = i(6397).TrendLineRenderer,
        o = i(68791).PaneRendererCachedImage,
        l = i(10288).HitTestResult,
        d = i(87088).CompositeRenderer,
        h = i(71172).LineEnd,
        c = i(75235).fibLevelCoordinate,
        u = i(44993).LineToolPaneViewWithLevelledTextCache;
      t.FibRetracementPaneView = class extends u {
        constructor(e, t) {
          super(e, t),
            (this._rendererCache = {}),
            (this._trendLineRenderer = new a()),
            (this._renderer = null);
        }
        getCacheRects(e, t) {
          if ((super.getCacheRects(e, t), !this._cacheState.preparedCells))
            return null;
          var i = this._levels[t].index - 1,
            s = this._cacheState.preparedCells.cells[i];
          if (!s) return null;
          var a = this._points[0],
            o = this._points[1],
            l = Math.min(a.x, o.x),
            d = Math.max(a.x, o.x);
          (a = new r(l, this._levels[t].y)), (o = new r(d, this._levels[t].y));
          var h,
            c = this._source.properties(),
            u = c.extendLines.value() ? this._model.timeScale().width() : d,
            _ = n(this._cache);
          switch (c.horzLabelsAlign.value()) {
            case 'left':
              h = a;
              break;
            case 'center':
              ((h = a.add(o).scaled(0.5)).x += s.width / 2),
                (h.x = Math.round(h.x));
              break;
            case 'right':
              c.extendLines.value()
                ? (h = new r(u - 4, this._levels[t].y))
                : (((h = new r(u + 4, this._levels[t].y)).x += s.width),
                  (h.x = Math.round(h.x)));
          }
          var p = {
              left: s.left,
              top: _.topByRow(this._cacheState.row),
              width: s.width,
              height: _.rowHeight(this._cacheState.row),
            },
            g = {
              left: h.x - p.width,
              top: h.y,
              width: s.width,
              height: p.height,
            },
            f = c.vertLabelsAlign.value();
          return (
            'middle' === f && (g.top -= g.height / 2),
            'bottom' === f && (g.top -= g.height),
            { cacheRect: p, targetRect: g }
          );
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            !(this._source.points().length < 2))
          ) {
            var e = this._source.priceScale();
            if (e && !e.isEmpty() && !this._model.timeScale().isEmpty()) {
              var t = this._source.ownerSource().firstValue();
              if (null != t) {
                var i = this._source.points()[0],
                  n = this._source.points()[1],
                  u = !1;
                (P = this._source.properties()).reverse &&
                  P.reverse.value() &&
                  (u = P.reverse.value()),
                  (this._levels = []);
                var _,
                  p,
                  g = u ? i.price : n.price,
                  f = u ? n.price : i.price,
                  v = f - g,
                  x = e.isLog() && P.fibLevelsBasedOnLogScale.value();
                if (x)
                  (_ = e.priceToCoordinate(g, t)),
                    (p = e.priceToCoordinate(f, t) - _);
                for (
                  var w = { price: g, coordinate: _ },
                    m = { price: v, coordinate: p },
                    R = this._source.levelsCount(),
                    y = 1;
                  y <= R;
                  y++
                ) {
                  var T = P['level' + y];
                  if (T.visible.value()) {
                    var b = T.coeff.value(),
                      L = T.color.value(),
                      S = c(w, m, b, e, t, x);
                    this._levels.push({
                      color: L,
                      y: S,
                      price: e.coordinateToPrice(S, t),
                      linewidth: P.levelsStyle.linewidth.value(),
                      linestyle: P.levelsStyle.linestyle.value(),
                      index: y,
                    });
                  }
                }
                if (!(this._points.length < 2)) {
                  var P,
                    C = new d(),
                    M =
                      ((i = this._points[0]),
                      (n = this._points[1]),
                      Math.min(i.x, n.x)),
                    I = Math.max(i.x, n.x),
                    N = (P = this._source.properties()).fillBackground.value(),
                    D = P.transparency.value(),
                    A = P.extendLinesLeft.value(),
                    k = P.extendLines.value();
                  if (N)
                    for (y = 0; y < this._levels.length; y++)
                      if (y > 0 && N) {
                        var E = this._levels[y - 1],
                          B =
                            ((i = new r(M, this._levels[y].y)),
                            (n = new r(I, E.y)),
                            {});
                        (B.points = [i, n]),
                          (B.color = this._levels[y].color),
                          (B.linewidth = 0),
                          (B.backcolor = this._levels[y].color),
                          (B.fillBackground = !0),
                          (B.transparency = D),
                          (B.extendLeft = A),
                          (B.extendRight = k),
                          (z = new s(void 0, void 0, !0)).setData(B),
                          C.append(z);
                      }
                  var O = M,
                    H = I;
                  O === H && (A && (O -= 1), k && (H += 1));
                  for (y = 0; y < this._levels.length; y++) {
                    var z,
                      V = {
                        points: [
                          (i = new r(O, this._levels[y].y)),
                          (n = new r(H, this._levels[y].y)),
                        ],
                        width: this._model.timeScale().width(),
                        height: this._source.priceScale().height(),
                        color: this._levels[y].color,
                        linewidth: this._levels[y].linewidth,
                        linestyle: this._levels[y].linestyle,
                        extendleft: A,
                        extendright: k,
                        leftend: h.Normal,
                        rightend: h.Normal,
                      };
                    if (
                      ((z = new a()).setData(V),
                      z.setHitTest(
                        new l(
                          l.MOVEPOINT,
                          { snappingPrice: this._levels[y].price },
                          this._levels[y].index,
                        ),
                      ),
                      C.append(z),
                      P.showCoeffs.value() || P.showPrices.value())
                    ) {
                      var W = new o(this, y);
                      C.append(W);
                    }
                  }
                  if (P.trendline.visible.value()) {
                    V = {
                      points: [this._points[0], this._points[1]],
                      width: this._model.timeScale().width(),
                      height: this._source.priceScale().height(),
                      color: P.trendline.color.value(),
                      linewidth: P.trendline.linewidth.value(),
                      linestyle: P.trendline.linestyle.value(),
                      extendleft: !1,
                      extendright: !1,
                      leftend: h.Normal,
                      rightend: h.Normal,
                    };
                    this._trendLineRenderer.setData(V),
                      C.append(this._trendLineRenderer);
                  }
                  this.addAnchors(C), (this._renderer = C);
                }
              }
            }
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    43900: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { FibSpeedResistanceArcsPaneView: () => g });
      var n = i(72927),
        r = i(57968),
        s = i(10288),
        a = i(68791),
        o = i(87088),
        l = i(71172),
        d = i(6397),
        h = i(44993),
        c = i(50968),
        u = i(21344),
        _ = i(58729);
      class p extends _.ScaledPaneRenderer {
        constructor(e, t, i) {
          super(),
            (this._data = e),
            (this._hittest =
              t || new s.HitTestResult(s.HitTestResult.MOVEPOINT)),
            (this._backHittest =
              i || new s.HitTestResult(s.HitTestResult.MOVEPOINT_BACKGROUND));
        }
        hitTest(e) {
          const t = this._data;
          if (null === t) return null;
          if ((0, r.sign)(e.y - t.center.y) !== t.dir && !t.fullCircles)
            return null;
          const i = e.subtract(t.center).length(),
            n = (0, u.interactionTolerance)().curve;
          return Math.abs(i - t.radius) < n
            ? this._hittest
            : t.hittestOnBackground && Math.abs(i) <= t.radius + n
            ? this._backHittest
            : null;
        }
        _drawImpl(e) {
          const t = this._data;
          null !== t &&
            ((e.lineCap = 'butt'),
            (e.strokeStyle = t.color),
            (e.lineWidth = t.linewidth),
            e.translate(t.center.x, t.center.y),
            e.beginPath(),
            t.fullCircles
              ? e.arc(0, 0, t.radius, 2 * Math.PI, 0, !1)
              : t.dir > 0
              ? e.arc(0, 0, t.radius, 0, Math.PI, !1)
              : e.arc(0, 0, t.radius, Math.PI, 0, !1),
            e.stroke(),
            t.fillBackground &&
              (t.radius2 &&
                (t.fullCircles
                  ? e.arc(0, 0, t.radius2, 2 * Math.PI, 0, !0)
                  : t.dir > 0
                  ? e.arc(0, 0, t.radius2, Math.PI, 0, !0)
                  : e.arc(0, 0, t.radius2, 0, Math.PI, !0)),
              (e.fillStyle = (0, c.generateColor)(t.color, t.transparency, !0)),
              e.fill()));
        }
      }
      class g extends h.LineToolPaneViewWithLevelledTextCache {
        constructor() {
          super(...arguments),
            (this._trendLineRenderer = new d.TrendLineRenderer()),
            (this._renderer = null),
            (this._levels = []);
        }
        getCacheRects(e, t) {
          super.getCacheRects(e, t);
          const i = this._cache,
            n = this._cacheState.preparedCells.cells[this._levels[t].index - 1];
          if (!n || !i) return null;
          const r = this._levels[t],
            s = {
              left: n.left,
              top: i.topByRow(this._cacheState.row),
              width: n.width,
              height: i.rowHeight(this._cacheState.row),
            };
          return {
            cacheRect: s,
            targetRect: {
              left: Math.round(r.labelPoint.x - s.width),
              top: Math.round(r.labelPoint.y - s.height / 2),
              width: n.width,
              height: s.height,
            },
          };
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            this._points.length < 2)
          )
            return;
          const e = this._source.priceScale();
          if (!e || e.isEmpty() || this._model.timeScale().isEmpty()) return;
          const t = this._points[0],
            i = this._points[1],
            d = t.subtract(i).length();
          this._levels = [];
          const h = this._source.properties().childs(),
            c = this._source.levelsCount();
          for (let e = 1; e <= c; e++) {
            const s = 'level' + e,
              a = this._source.properties().child(s).childs();
            if (!a.visible.value()) continue;
            const o = a.coeff.value(),
              l = a.color.value(),
              h = i.subtract(t).length() * o,
              c = (0, r.sign)(i.y - t.y),
              u = new n.Point(t.x, t.y + c * d * o);
            this._levels.push({
              color: l,
              radius: h,
              dir: c,
              labelPoint: u,
              linewidth: a.linewidth.value(),
              linestyle: a.linestyle.value(),
              index: e,
            });
          }
          if (this._points.length < 2) return;
          const u = new o.CompositeRenderer(),
            _ = h.fillBackground.value(),
            g = h.transparency.value();
          for (let e = 0; e < this._levels.length; e++) {
            const i = this._levels[e],
              n = {
                center: t,
                color: i.color,
                linewidth: i.linewidth,
                radius: i.radius,
                dir: i.dir,
                transparency: g,
                fillBackground: _,
                hittestOnBackground: !0,
                fullCircles: h.fullCircles.value(),
                radius2: e > 0 ? this._levels[e - 1].radius : void 0,
              },
              r = new s.HitTestResult(
                s.HitTestResult.MOVEPOINT,
                void 0,
                i.index,
              );
            if ((u.append(new p(n, r)), h.showCoeffs.value())) {
              const t = new a.PaneRendererCachedImage(this, e);
              u.append(t);
            }
          }
          const f = h.trendline.childs();
          if (f.visible.value()) {
            const e = {
              points: [this._points[0], this._points[1]],
              color: f.color.value(),
              linewidth: f.linewidth.value(),
              linestyle: f.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: l.LineEnd.Normal,
              rightend: l.LineEnd.Normal,
            };
            this._trendLineRenderer.setData(e),
              u.append(this._trendLineRenderer);
          }
          this.addAnchors(u), (this._renderer = u);
        }
      }
    },
    95292: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { FibSpeedResistanceFanPaneView: () => p });
      var n = i(16282),
        r = i(72927),
        s = i(57649),
        a = i(10288),
        o = i(16758),
        l = i(87088),
        d = i(71172),
        h = i(44896),
        c = i(6397),
        u = i(67857),
        _ = i(54837);
      class p extends u.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._numericFormatter = new s.NumericFormatter()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            this._source.points().length < 2)
          )
            return;
          const e = this._source.priceScale(),
            t = (0, n.ensureNotNull)(this._source.ownerSource()).firstValue();
          if (
            null === t ||
            !e ||
            e.isEmpty() ||
            this._model.timeScale().isEmpty()
          )
            return;
          if (this._points.length < 2) return;
          const i = this._source.points()[0],
            s = this._source.points()[1],
            u = this._source.properties().childs(),
            p = u.reverse.value(),
            g = [],
            f = p ? s.price - i.price : i.price - s.price,
            v = p ? i.price : s.price;
          for (let i = 1; i <= 7; i++) {
            const n = 'hlevel' + i,
              r = this._source.properties().child(n).childs();
            if (!r.visible.value()) continue;
            const s = r.coeff.value(),
              a = r.color.value(),
              o = v + s * f,
              l = e.priceToCoordinate(o, t);
            g.push({ coeff: s, color: a, y: l, index: i });
          }
          const x = [],
            w = p ? s.index - i.index : i.index - s.index,
            m = p ? i.index : s.index;
          for (let e = 1; e <= 7; e++) {
            const t = 'vlevel' + e,
              i = this._source.properties().child(t).childs();
            if (!i.visible.value()) continue;
            const n = i.coeff.value(),
              r = i.color.value(),
              s = Math.round(m + n * w),
              a = this._model.timeScale().indexToCoordinate(s);
            x.push({ coeff: n, color: r, x: a, index: e });
          }
          const R = new l.CompositeRenderer(),
            y = this._points[0],
            T = this._points[1],
            b = Math.min(y.x, T.x),
            L = Math.min(y.y, T.y),
            S = Math.max(y.x, T.x),
            P = Math.max(y.y, T.y),
            C = u.grid.childs().color.value(),
            M = u.grid.childs().linewidth.value(),
            I = u.grid.childs().linestyle.value();
          for (let e = 0; e < g.length; e++) {
            const t = new r.Point(b, g[e].y),
              i = new r.Point(S, g[e].y);
            if (u.grid.childs().visible.value()) {
              const e = {
                  points: [t, i],
                  color: C,
                  linewidth: M,
                  linestyle: I,
                  extendleft: !1,
                  extendright: !1,
                  leftend: d.LineEnd.Normal,
                  rightend: d.LineEnd.Normal,
                },
                n = new c.TrendLineRenderer();
              n.setData(e), R.append(n);
            }
            if (u.showLeftLabels.value()) {
              const i = {
                points: [t],
                text: this._numericFormatter.format(g[e].coeff),
                color: g[e].color,
                vertAlign: 'middle',
                horzAlign: 'right',
                font: _.CHART_FONT_FAMILY,
                offsetX: 5,
                offsetY: 0,
                fontsize: 12,
                forceTextAlign: !0,
              };
              R.append(new h.TextRenderer(i));
            }
            if (u.showRightLabels.value()) {
              const t = {
                points: [i],
                text: this._numericFormatter.format(g[e].coeff),
                color: g[e].color,
                vertAlign: 'middle',
                horzAlign: 'left',
                font: _.CHART_FONT_FAMILY,
                offsetX: 5,
                offsetY: 0,
                fontsize: 12,
                forceTextAlign: !0,
              };
              R.append(new h.TextRenderer(t));
            }
          }
          for (let e = 0; e < x.length; e++) {
            const t = new r.Point(x[e].x, L),
              i = new r.Point(x[e].x, P);
            if (u.grid.childs().visible.value()) {
              const e = {
                  points: [t, i],
                  color: C,
                  linewidth: M,
                  linestyle: I,
                  extendleft: !1,
                  extendright: !1,
                  leftend: d.LineEnd.Normal,
                  rightend: d.LineEnd.Normal,
                },
                n = new c.TrendLineRenderer();
              n.setData(e), R.append(n);
            }
            if (u.showTopLabels.value()) {
              const i = {
                points: [t],
                text: this._numericFormatter.format(x[e].coeff),
                color: x[e].color,
                vertAlign: 'bottom',
                horzAlign: 'center',
                font: _.CHART_FONT_FAMILY,
                offsetX: 0,
                offsetY: 5,
                fontsize: 12,
              };
              R.append(new h.TextRenderer(i));
            }
            if (u.showBottomLabels.value()) {
              const t = {
                points: [i],
                text: this._numericFormatter.format(x[e].coeff),
                color: x[e].color,
                vertAlign: 'top',
                horzAlign: 'center',
                font: _.CHART_FONT_FAMILY,
                offsetX: 0,
                offsetY: 5,
                fontsize: 12,
              };
              R.append(new h.TextRenderer(t));
            }
          }
          const N = u.fillBackground.value(),
            D = u.transparency.value();
          for (let e = 0; e < g.length; e++) {
            const t = new r.Point(T.x, g[e].y);
            if (e > 0 && N) {
              const i = {
                  p1: y,
                  p2: t,
                  p3: y,
                  p4: new r.Point(T.x, g[e - 1].y),
                  color: g[e].color,
                  transparency: D,
                  hittestOnBackground: !0,
                  extendLeft: !1,
                },
                n = new o.ChannelRenderer();
              n.setData(i), R.append(n);
            }
            {
              const i = {
                  points: [y, t],
                  color: g[e].color,
                  linewidth: u.linewidth.value(),
                  linestyle: u.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: d.LineEnd.Normal,
                  rightend: d.LineEnd.Normal,
                },
                n = new c.TrendLineRenderer();
              n.setData(i),
                n.setHitTest(
                  new a.HitTestResult(a.HitTestResult.MOVEPOINT, void 0, {
                    type: 'h',
                    index: g[e].index,
                  }),
                ),
                R.append(n);
            }
          }
          for (let e = 0; e < x.length; e++) {
            const t = new r.Point(x[e].x, T.y);
            if (e > 0 && N) {
              const i = {
                  p1: y,
                  p2: t,
                  p3: y,
                  p4: new r.Point(x[e - 1].x, T.y),
                  color: x[e].color,
                  transparency: D,
                  hittestOnBackground: !0,
                  extendLeft: !1,
                },
                n = new o.ChannelRenderer();
              n.setData(i), R.append(n);
            }
            {
              const i = {
                  points: [y, t],
                  color: x[e].color,
                  linewidth: u.linewidth.value(),
                  linestyle: u.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: d.LineEnd.Normal,
                  rightend: d.LineEnd.Normal,
                },
                n = new c.TrendLineRenderer();
              n.setData(i),
                n.setHitTest(
                  new a.HitTestResult(a.HitTestResult.MOVEPOINT, void 0, {
                    type: 'v',
                    index: x[e].index,
                  }),
                ),
                R.append(n);
            }
          }
          this.addAnchors(R), (this._renderer = R);
        }
      }
    },
    33732: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { FibSpiralPaneView: () => _ });
      var n = i(87088),
        r = i(71172),
        s = i(6397),
        a = i(67857),
        o = i(5025),
        l = i(10288),
        d = i(21344),
        h = i(58729);
      const c = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
      class u extends h.ScaledPaneRenderer {
        constructor() {
          super(...arguments), (this._data = null);
        }
        setData(e) {
          this._data = e;
        }
        hitTest(e) {
          if (null === this._data || this._data.points.length < 2) return null;
          const t = this._data.points[0],
            i = this._data.points[1].subtract(t),
            n = e.subtract(t),
            r = i.normalized(),
            s = r.transposed(),
            a = n.normalized();
          let o = Math.acos(r.dotProduct(a));
          Math.asin(s.dotProduct(a)) < 0 && (o = 2 * Math.PI - o);
          const h = this._data.counterclockwise ? -1 : 1,
            c = n.length(),
            u = (0, d.interactionTolerance)().curve;
          for (let e = 0; e < 4; e++) {
            const t = (h * o) / (0.5 * Math.PI);
            let n = this._continiusFib(t + 4 * e);
            if (null !== n && ((n = (n * i.length()) / 5), Math.abs(n - c) < u))
              return new l.HitTestResult(l.HitTestResult.MOVEPOINT);
          }
          return null;
        }
        _drawImpl(e) {
          if (null === this._data || this._data.points.length < 2) return;
          (e.lineCap = 'round'), (e.strokeStyle = this._data.color);
          const t = this._data.points[0],
            i = this._data.points[1];
          e.translate(t.x, t.y);
          let n = i.subtract(t);
          const r = n.length();
          n = n.normalized();
          let s = Math.acos(n.x);
          Math.asin(n.y) < 0 && (s = 2 * Math.PI - s),
            e.rotate(s),
            e.scale(r / 5, r / 5),
            (e.lineWidth = this._data.linewidth),
            (0, o.setLineStyle)(e, this._data.linestyle);
          const a = Math.PI / 100;
          e.moveTo(0, 0);
          const l = this._data.counterclockwise ? -1 : 1;
          for (let t = 0; t < 50 * (c.length - 1); t++) {
            const i = l * t * a,
              n = this._continiusFib(t / 50);
            if (null === n) break;
            const r = Math.cos(i) * n,
              s = Math.sin(i) * n;
            e.lineTo(r, s);
          }
          e.scale(5 / r, 5 / r), e.rotate(-s), e.stroke();
        }
        _continiusFib(e) {
          const t = Math.floor(e),
            i = Math.ceil(e);
          if (i >= c.length) return null;
          let n = e - t;
          n = Math.pow(n, 1.15);
          return c[t] + (c[i] - c[t]) * n;
        }
      }
      class _ extends a.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._trendLineRenderer = new s.TrendLineRenderer()),
            (this._spiralRenderer = new u()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            this._points.length < 2)
          )
            return;
          const e = new n.CompositeRenderer(),
            t = this._source.properties().childs();
          {
            const i = {
              points: [this._points[0], this._points[1]],
              color: t.linecolor.value(),
              linewidth: t.linewidth.value(),
              linestyle: t.linestyle.value(),
              extendleft: !1,
              extendright: !0,
              leftend: r.LineEnd.Normal,
              rightend: r.LineEnd.Normal,
            };
            this._trendLineRenderer.setData(i),
              e.append(this._trendLineRenderer);
          }
          {
            const i = {
              points: this._points,
              color: t.linecolor.value(),
              linewidth: t.linewidth.value(),
              linestyle: t.linestyle.value(),
              counterclockwise: t.counterclockwise.value(),
            };
            this._spiralRenderer.setData(i), e.append(this._spiralRenderer);
          }
          this.addAnchors(e), (this._renderer = e);
        }
      }
    },
    62585: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(67857).LineSourcePaneView,
        s = i(69819).VerticalLineRenderer,
        a = i(44896).TextRenderer,
        o = i(72095).RectangleRenderer,
        l = i(6397).TrendLineRenderer,
        d = i(10288).HitTestResult,
        h = i(87088).CompositeRenderer,
        c = i(71172).LineEnd,
        u = i(54837);
      t.FibTimeZonePaneView = class extends r {
        constructor(e, t) {
          super(e, t),
            (this._levels = []),
            (this._trendRenderer = new l()),
            (this._renderer = null);
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            !(this._source.points().length < 1) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          ) {
            var e = this._source.points()[0];
            2 === this._source.points().length &&
              (x = this._source.points()[1]);
            var t = this._source.properties(),
              i = this._source.points()[0].index;
            if (null !== this._model.timeScale().visibleBarsStrictRange()) {
              this._levels = [];
              for (var r = x ? x.index - e.index : 1, l = 1; l <= 11; l++) {
                var _ = t['level' + l];
                if (_.visible.value()) {
                  var p = Math.round(i + _.coeff.value() * r),
                    g = {
                      index: l,
                      x: this._model.timeScale().indexToCoordinate(p),
                      color: _.color.value(),
                      width: _.linewidth.value(),
                      style: _.linestyle.value(),
                    };
                  t.showLabels.value() &&
                    ((g.text = _.coeff.value()),
                    (g.y = this._source.priceScale().height())),
                    this._levels.push(g);
                }
              }
              var f = new h();
              if ((t = this._source.properties()).fillBackground.value())
                for (l = 1; l < this._levels.length; l++) {
                  var v = this._levels[l - 1],
                    x =
                      ((e = new n(this._levels[l].x, 0)),
                      new n(v.x, this._source.priceScale().height())),
                    w = {};
                  (w.points = [e, x]),
                    (w.color = this._levels[l].color),
                    (w.linewidth = 0),
                    (w.backcolor = this._levels[l].color),
                    (w.fillBackground = !0),
                    (w.transparency = t.transparency.value()),
                    (w.extendLeft = !1),
                    (w.extendRight = !1),
                    (R = new o(void 0, void 0, !0)).setData(w),
                    f.append(R);
                }
              for (l = 0; l < this._levels.length; l++) {
                var m = {};
                (m.x = this._levels[l].x),
                  (m.color = this._levels[l].color),
                  (m.linewidth = this._levels[l].width),
                  (m.linestyle = this._levels[l].style);
                var R,
                  y = new d(d.MOVEPOINT, null, this._levels[l].index);
                if (
                  ((R = new s()).setData(m),
                  R.setHitTest(y),
                  f.append(R),
                  void 0 !== this._levels[l].text)
                ) {
                  var T,
                    b = t.horzLabelsAlign.value();
                  switch (
                    ((b =
                      'left' === b
                        ? 'right'
                        : 'right' === b
                        ? 'left'
                        : 'center'),
                    t.vertLabelsAlign.value())
                  ) {
                    case 'top':
                      T = new n(this._levels[l].x, 0);
                      break;
                    case 'middle':
                      T = new n(this._levels[l].x, 0.5 * this._levels[l].y);
                      break;
                    case 'bottom':
                      T = new n(this._levels[l].x, this._levels[l].y);
                  }
                  var L = {
                    points: [T],
                    text: '' + this._levels[l].text,
                    color: m.color,
                    vertAlign: t.vertLabelsAlign.value(),
                    horzAlign: b,
                    font: u.CHART_FONT_FAMILY,
                    offsetX: 2,
                    offsetY: 0,
                    fontsize: 12,
                  };
                  f.append(new a(L));
                }
              }
              if (2 === this._points.length) {
                var S = {
                  points: [this._points[0], this._points[1]],
                  color: t.trendline.color.value(),
                  linewidth: t.trendline.linewidth.value(),
                  linestyle: t.trendline.linestyle.value(),
                  extendleft: !1,
                  extendright: !1,
                  leftend: c.Normal,
                  rightend: c.Normal,
                };
                this._trendRenderer.setData(S), f.append(this._trendRenderer);
              }
              2 === this._source.points().length
                ? f.append(this.createLineAnchor({ points: this._points }, 0))
                : this._points.length > 0 &&
                  f.append(
                    this.createLineAnchor(
                      {
                        points: [
                          new n(
                            this._points[0].x,
                            this._source.priceScale().height() / 2,
                          ),
                        ],
                        hittestResult: d.MOVEPOINT,
                      },
                      0,
                    ),
                  ),
                (this._renderer = f);
            }
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    19027: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(6397).TrendLineRenderer,
        s = i(68791).PaneRendererCachedImage,
        a = i(10288).HitTestResult,
        o = i(87088).CompositeRenderer,
        l = i(93572).ArcWedgeRenderer,
        d = i(71172).LineEnd,
        h = i(44993).LineToolPaneViewWithLevelledTextCache;
      t.FibWedgePaneView = class extends h {
        constructor(e, t) {
          super(e, t),
            (this._levels = []),
            (this._baseTrendRenderer = new r()),
            (this._edgeTrendRenderer = new r()),
            (this._renderer = null);
        }
        getCacheRects(e, t) {
          super.getCacheRects(e, t);
          var i = this._cacheState.preparedCells.cells[
            this._levels[t].index - 1
          ];
          if (i) {
            var n = this._levels[t],
              r = {
                left: i.left,
                top: this._cache.topByRow(this._cacheState.row),
                width: i.width,
                height: this._cache.rowHeight(this._cacheState.row),
              };
            return {
              cacheRect: r,
              targetRect: {
                left: Math.round(n.labelPoint.x - r.width),
                top: Math.round(n.labelPoint.y - r.height / 2),
                width: i.width,
                height: r.height,
              },
            };
          }
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            (this._levels = []),
            this._points.length < 3)
          )
            this._updateRenderer();
          else {
            var e = this._points,
              t = e[0],
              i = e[1],
              r = e[2],
              s = i.subtract(t).normalized(),
              a = r.subtract(t).normalized(),
              o = new n(1, 0),
              l = new n(0, 1),
              d = Math.acos(s.dotProduct(o));
            s.dotProduct(l) < 0 && (d = 2 * Math.PI - d), (this._edge1 = d);
            var h = Math.acos(a.dotProduct(o));
            a.dotProduct(l) < 0 && (h = 2 * Math.PI - h),
              (this._edge2 = h),
              d < h &&
                ((this._edge1 = Math.max(d, h)),
                (this._edge2 = Math.min(d, h) + 2 * Math.PI)),
              Math.abs(d - h) > Math.PI &&
                ((this._edge1 = Math.min(d, h)),
                (this._edge2 = Math.max(d, h) - 2 * Math.PI));
            for (
              var c = this._source.properties(), u = 1;
              u <= this._source.levelsCount();
              u++
            ) {
              var _ = c['level' + u];
              if (_.visible.value()) {
                var p = _.coeff.value(),
                  g = _.color.value(),
                  f = i.subtract(t).length() * p,
                  v = s.add(a).scaled(0.5).normalized().scaled(f),
                  x = t.add(v);
                this._levels.push({
                  coeff: p,
                  color: g,
                  radius: f,
                  labelPoint: x,
                  p1: t.add(s.scaled(f)),
                  p2: t.add(a.scaled(f)),
                  linewidth: _.linewidth.value(),
                  linestyle: _.linestyle.value(),
                  index: u,
                });
              }
            }
            this._points.length < 2 || this._updateRenderer();
          }
        }
        _updateRenderer() {
          if (!((w = this._points).length < 2)) {
            var e = new o(),
              t = this._source.properties(),
              i = w[0],
              n = w[1],
              r = {
                points: [i, n],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: t.trendline.color.value(),
                linewidth: t.trendline.visible.value()
                  ? t.trendline.linewidth.value()
                  : 0,
                linestyle: t.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: d.Normal,
                rightend: d.Normal,
              };
            if (
              (this._baseTrendRenderer.setData(r),
              e.append(this._baseTrendRenderer),
              w.length < 3)
            )
              return this.addAnchors(e), void (this._renderer = e);
            var h = w[2],
              c = h.data,
              u = n.subtract(i).length(),
              _ = h.subtract(i).normalized();
            ((h = i.add(_.scaled(u))).data = c),
              (r = {
                points: [i, h],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: t.trendline.color.value(),
                linewidth: t.trendline.visible.value()
                  ? t.trendline.linewidth.value()
                  : 0,
                linestyle: t.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: d.Normal,
                rightend: d.Normal,
              }),
              this._edgeTrendRenderer.setData(r),
              e.append(this._edgeTrendRenderer);
            for (var p = this._levels.length - 1; p >= 0; p--) {
              var g = this._levels[p],
                f = {};
              (f.center = this._points[0]),
                (f.radius = g.radius),
                (f.prevRadius = p > 0 ? this._levels[p - 1].radius : 0),
                (f.edge = this._edge),
                (f.color = g.color),
                (f.linewidth = g.linewidth),
                (f.edge1 = this._edge1),
                (f.edge2 = this._edge2),
                (f.p1 = g.p1),
                (f.p2 = g.p2),
                (f.fillBackground = t.fillBackground.value()),
                (f.transparency = t.transparency.value());
              var v = new l();
              if (
                (v.setData(f),
                v.setHitTest(new a(a.MOVEPOINT, null, g.index)),
                e.append(v),
                t.showCoeffs.value())
              ) {
                var x = new s(this, p);
                e.append(x);
              }
            }
            var w = [i, n];
            this._model.lineBeingCreated() !== this._source && w.push(h),
              e.append(this.createLineAnchor({ points: w }, 0)),
              (this._renderer = e);
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    16399: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { FlagMarkPaneView: () => c });
      var n = i(67857),
        r = i(87088),
        s = i(73301),
        a = i(10288),
        o = i(71044),
        l = i(55430),
        d = i(58729);
      class h extends d.ScaledPaneRenderer {
        constructor() {
          super(...arguments), (this._data = null);
        }
        setData(e) {
          this._data = e;
        }
        hitTest(e) {
          if (null === this._data) return null;
          const { x: t, y: i } = this._data.point;
          return e.x < t || e.x > t + 20 || e.y < i - 22 || e.y > i
            ? null
            : new a.HitTestResult(a.HitTestResult.MOVEPOINT);
        }
        doesIntersectWithBox(e) {
          return null !== this._data && (0, o.pointInBox)(this._data.point, e);
        }
        _drawImpl(e) {
          null !== this._data &&
            (e.save(),
            e.translate(
              Math.round(this._data.point.x) - 0.5,
              Math.round(this._data.point.y - 22) - 0.5,
            ),
            (e.fillStyle = '#434651'),
            (0, l.drawRoundRect)(e, 0, 0, 2, 22, 1),
            e.fill(),
            (e.fillStyle = this._data.color),
            e.beginPath(),
            e.moveTo(6.87, 0),
            e.bezierCurveTo(5.62, 0, 4.46, 0.23, 3.32, 0.69),
            e.bezierCurveTo(3.26, 0.71, 3.2, 0.75, 3.15, 0.8),
            e.bezierCurveTo(3.06, 0.89, 3, 1.02, 3, 1.16),
            e.lineTo(3, 1.19),
            e.lineTo(3, 12.5),
            e.bezierCurveTo(3, 12.8, 3.3, 13.02, 3.59, 12.93),
            e.bezierCurveTo(4.61, 12.64, 5.94, 12.44, 6.87, 12.44),
            e.bezierCurveTo(8.5, 12.44, 10.09, 12.83, 11.63, 13.21),
            e.bezierCurveTo(13.19, 13.6, 14.79, 14, 16.45, 14),
            e.bezierCurveTo(17.59, 14, 18.65, 13.81, 19.69, 13.43),
            e.bezierCurveTo(19.88, 13.36, 20, 13.18, 20, 12.98),
            e.lineTo(20, 1.19),
            e.bezierCurveTo(20, 1.06, 19.83, 0.93, 19.66, 0.99),
            e.bezierCurveTo(18.63, 1.38, 17.58, 1.56, 16.45, 1.56),
            e.bezierCurveTo(14.82, 1.56, 13.23, 1.17, 11.69, 0.79),
            e.bezierCurveTo(10.14, 0.4, 8.53, 0, 6.87, 0),
            e.closePath(),
            e.fill(),
            e.restore());
        }
      }
      class c extends n.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._flagMarkRenderer = new h()),
            (this._renderer = null),
            (this._anchorsOffset = null);
        }
        setAnchors(e) {
          this._anchorsOffset = e;
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            1 !== this._points.length)
          )
            return;
          this._flagMarkRenderer.setData({
            point: this._points[0],
            color: this._getSource().properties().childs().flagColor.value(),
          });
          const e = this._getModel();
          (this._renderer = new r.CompositeRenderer()),
            this._renderer.append(this._flagMarkRenderer);
          const t = [
            this._anchorsOffset
              ? this._points[0].add(this._anchorsOffset)
              : this._points[0].clone(),
          ];
          this._renderer.append(
            new s.SelectionRenderer({
              points: t,
              bgColors: this._lineAnchorColors(t),
              visible: this.areAnchorsVisible(),
              barSpacing: e.timeScale().barSpacing(),
              hittestResult: a.HitTestResult.MOVEPOINT,
            }),
          );
        }
      }
    },
    88589: (e, t, i) => {
      'use strict';
      var n = i(67857).LineSourcePaneView,
        r = i(10847).DisjointChannelRenderer,
        s = i(6397).TrendLineRenderer,
        a = i(44896).TextRenderer,
        o = i(87088).CompositeRenderer,
        l = i(54837);
      t.FlatBottomPaneView = class extends n {
        constructor(e, t) {
          super(e, t),
            (this._label1 = null),
            (this._label2 = null),
            (this._trendLineRendererPoints12 = new s()),
            (this._trendLineRendererPoints43 = new s()),
            (this._disjointChannelRenderer = new r()),
            (this._p1LabelRenderer = new a()),
            (this._p2LabelRenderer = new a()),
            (this._p3LabelRenderer = new a()),
            (this._p4LabelRenderer = new a()),
            (this._renderer = null);
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            (this._label1 = null),
            (this._label2 = null),
            !(this._source.points().length < 2) && this._source.priceScale())
          ) {
            var e = this._source.points()[0],
              t = this._source.points()[1],
              i = this._source.ownerSource().firstValue();
            if (
              ((this._price1 = this._source
                .priceScale()
                .formatPrice(e.price, i)),
              (this._price2 = this._source
                .priceScale()
                .formatPrice(t.price, i)),
              3 === this._source.points().length)
            ) {
              var n = this._source.points()[2];
              this._price3 = this._source.priceScale().formatPrice(n.price, i);
            }
            if (!(this._points.length < 2)) {
              var r,
                s = new o(),
                a =
                  ((e = this._points[0]),
                  (t = this._points[1]),
                  this._source.properties()),
                d = this._model,
                h = this._source;
              if (
                3 === this._points.length &&
                (((n = this._points[2]).x = t.x),
                ((r = e.clone()).y = n.y),
                (r.data = 3),
                a.fillBackground.value())
              ) {
                var c = d.timeScale().width(),
                  u = h.priceScale().height(),
                  _ = a.extendLeft.value(),
                  p = a.extendRight.value();
                this._disjointChannelRenderer.setData({
                  width: c,
                  height: u,
                  extendleft: _,
                  extendright: p,
                  points: [e, t, n, r],
                  backcolor: a.backgroundColor.value(),
                  transparency: a.transparency.value(),
                  hittestOnBackground: TradingView.isMobile.any(),
                }),
                  s.append(this._disjointChannelRenderer);
              }
              var g = function (e, t) {
                return {
                  points: [e, t],
                  width: d.timeScale().width(),
                  height: h.priceScale().height(),
                  color: a.linecolor.value(),
                  linewidth: a.linewidth.value(),
                  linestyle: a.linestyle.value(),
                  extendleft: a.extendLeft.value(),
                  extendright: a.extendRight.value(),
                  leftend: a.leftEnd.value(),
                  rightend: a.rightEnd.value(),
                };
              };
              if (
                (this._trendLineRendererPoints12.setData(g(e, t)),
                s.append(this._trendLineRendererPoints12),
                2 === this._points.length)
              )
                return this.addAnchors(s), void (this._renderer = s);
              var f = this,
                v = function (e, t, i, n, r, a) {
                  if (f._source.properties().showPrices.value()) {
                    var o = {
                      points: [i],
                      text: r,
                      color: f._source.properties().textcolor.value(),
                      horzAlign: i.x > n.x ? 'left' : 'right',
                      vertAlign: 'middle',
                      font: l.CHART_FONT_FAMILY,
                      offsetX: 6,
                      offsetY: 0,
                      boxPadding: 0,
                      bold: f._source.properties().bold.value(),
                      italic: f._source.properties().italic.value(),
                      fontsize: f._source.properties().fontsize.value(),
                      forceTextAlign: !0,
                    };
                    e.setData(o), s.append(e);
                    o = {
                      points: [n],
                      text: a,
                      color: f._source.properties().textcolor.value(),
                      horzAlign: i.x < n.x ? 'left' : 'right',
                      vertAlign: 'middle',
                      font: l.CHART_FONT_FAMILY,
                      offsetX: 6,
                      offsetY: 0,
                      boxPadding: 0,
                      bold: f._source.properties().bold.value(),
                      italic: f._source.properties().italic.value(),
                      fontsize: f._source.properties().fontsize.value(),
                      forceTextAlign: !0,
                    };
                    t.setData(o), s.append(t);
                  }
                };
              v(
                this._p1LabelRenderer,
                this._p2LabelRenderer,
                e,
                t,
                this._price1,
                this._price2,
              ),
                this._trendLineRendererPoints43.setData(g(r, n)),
                s.append(this._trendLineRendererPoints43),
                v(
                  this._p3LabelRenderer,
                  this._p4LabelRenderer,
                  n,
                  r,
                  this._price3,
                  this._price3,
                );
              var x = [e, t, n, r];
              this._model.lineBeingCreated() === this._source && x.pop(),
                s.append(this.createLineAnchor({ points: x }, 0)),
                (this._renderer = s);
            }
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    18250: (e, t, i) => {
      'use strict';
      i.d(t, { GannArcRenderer: () => o });
      var n = i(72927),
        r = i(50968),
        s = i(10288),
        a = i(58729);
      class o extends a.ScaledPaneRenderer {
        constructor() {
          super(), (this._data = null);
        }
        setData(e) {
          this._data = e;
        }
        hitTest(e) {
          if (null === this._data) return null;
          e = e.subtract(this._data.center);
          const t = this._data.edge.subtract(this._data.center),
            i = t.y / t.x;
          e = new n.Point(e.x, e.y / i);
          let r = this._data.point.subtract(this._data.center);
          r = new n.Point(r.x, r.y / i);
          const a = r.length(),
            o = e.length();
          let l = this._data.prevPoint.subtract(this._data.center);
          l = new n.Point(l.x, l.y / i);
          const d = l.length();
          return Math.abs(o - a) < 5 && t.x * e.x >= 0 && t.y * e.y >= 0
            ? new s.HitTestResult(s.HitTestResult.MOVEPOINT)
            : this._data.fillBack &&
              o >= d &&
              o <= a &&
              t.x * e.x >= 0 &&
              t.y * e.y >= 0
            ? new s.HitTestResult(s.HitTestResult.MOVEPOINT_BACKGROUND)
            : null;
        }
        _drawImpl(e) {
          if (null === this._data) return;
          (e.lineCap = 'butt'),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth),
            e.translate(this._data.center.x, this._data.center.y);
          const t = this._data.edge.subtract(this._data.center),
            i = t.y / t.x;
          let s = this._data.point.subtract(this._data.center);
          s = new n.Point(s.x, s.y / i);
          let a = s.length(),
            o = this._data.prevPoint.subtract(this._data.center);
          o = new n.Point(o.x, o.y / i);
          let l = o.length();
          e.scale(1, i),
            this._data.fillBack &&
              (this._data.point.x < this._data.center.x && ((a = -a), (l = -l)),
              e.beginPath(),
              e.moveTo(l, 0),
              e.lineTo(a, 0),
              e.arcTo(a, a, 0, a, Math.abs(a)),
              e.lineTo(0, l),
              e.arcTo(l, l, l, 0, Math.abs(l)),
              (e.fillStyle = (0, r.generateColor)(
                this._data.color,
                this._data.transparency,
                !0,
              )),
              e.fill()),
            e.beginPath(),
            this._data.point.x > this._data.center.x
              ? e.arc(0, 0, Math.abs(a), 0, Math.PI / 2, !1)
              : e.arc(0, 0, Math.abs(a), -Math.PI / 2, -Math.PI, !0),
            e.scale(1, 1 / i),
            e.stroke();
        }
      }
    },
    2498: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { GannComplexPaneView: () => u });
      var n = i(72927),
        r = i(67857),
        s = i(6397),
        a = i(44896),
        o = i(87088),
        l = i(71172),
        d = i(33420),
        h = i(18250),
        c = i(76553);
      class u extends r.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._verticalLevelsRenderers = []),
            (this._horizontalLevelsRenderers = []),
            (this._fanRenderers = []),
            (this._arcRenderers = []),
            (this._priceDiffTextRenderer = new a.TextRenderer()),
            (this._indexDiffTextRenderer = new a.TextRenderer()),
            (this._ratioTextRenderer = new a.TextRenderer()),
            (this._renderer = null),
            this._initRenderers();
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl(), (this._renderer = null);
          const e = new o.CompositeRenderer(),
            t = this._getPoints();
          if (t.length < 2)
            return this.addAnchors(e), void (this._renderer = e);
          let [i, n] = t;
          const r = this._getSource(),
            s = r.isReversed();
          s && ([n, i] = t);
          const a = n.x - i.x,
            l = n.y - i.y,
            d = i,
            h = n,
            c = this._getModel(),
            u = {
              barsCoordsRange: a,
              priceCoordsRange: l,
              startPoint: d,
              endPoint: h,
              p1: i,
              p2: n,
              isLabelsVisible: r.isLabelsVisible(),
              reversed: s,
            };
          this._prepareLevels(e, u),
            this._prepareFanLines(e, u),
            this._prepareArcs(e, u),
            this._prepareLabels(e, u);
          const _ = [i, n];
          c.lineBeingCreated() === r && _.pop(),
            e.append(this.createLineAnchor({ points: _ }, 0)),
            (this._renderer = e);
        }
        _initRenderers() {
          const e = this._getSource(),
            t = e.levelsCount();
          for (let e = 0; e < t; e++)
            this._verticalLevelsRenderers.push(new s.TrendLineRenderer()),
              this._horizontalLevelsRenderers.push(new s.TrendLineRenderer());
          const i = e.fanLinesCount();
          for (let e = 0; e < i; e++)
            this._fanRenderers.push(new s.TrendLineRenderer());
          const n = e.arcsCount();
          for (let e = 0; e < n; e++)
            this._arcRenderers.push(new h.GannArcRenderer());
        }
        _prepareLevels(e, t) {
          const {
              startPoint: i,
              endPoint: r,
              barsCoordsRange: s,
              priceCoordsRange: a,
            } = t,
            o = this._getSource().levels();
          for (const t of o) {
            if (!t.visible) continue;
            const o = t.index / 5,
              h = i.x + o * s,
              c = {
                points: [new n.Point(h, i.y), new n.Point(h, r.y)],
                color: t.color,
                linewidth: t.width,
                linestyle: d.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: l.LineEnd.Normal,
                rightend: l.LineEnd.Normal,
              },
              u = this._verticalLevelsRenderers[t.index];
            u.setData(c), e.append(u);
            const _ = i.y + o * a,
              p = {
                points: [new n.Point(i.x, _), new n.Point(r.x, _)],
                color: t.color,
                linewidth: t.width,
                linestyle: d.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: l.LineEnd.Normal,
                rightend: l.LineEnd.Normal,
              },
              g = this._horizontalLevelsRenderers[t.index];
            g.setData(p), e.append(g);
          }
        }
        _prepareFanLines(e, t) {
          const {
              p1: i,
              startPoint: r,
              endPoint: s,
              barsCoordsRange: a,
              priceCoordsRange: o,
            } = t,
            h = this._getSource().fanLines();
          for (const t of h) {
            if (!t.visible) continue;
            const h = t.x,
              c = t.y;
            let u, _;
            if (h > c) {
              u = s.x;
              const e = c / h;
              _ = r.y + e * o;
            } else {
              _ = s.y;
              const e = h / c;
              u = r.x + e * a;
            }
            const p = {
                points: [i, new n.Point(u, _)],
                color: t.color,
                linewidth: t.width,
                linestyle: d.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: l.LineEnd.Normal,
                rightend: l.LineEnd.Normal,
              },
              g = this._fanRenderers[t.index];
            g.setData(p), e.append(g);
          }
        }
        _prepareArcs(e, t) {
          const {
            p1: i,
            startPoint: r,
            endPoint: s,
            barsCoordsRange: a,
            priceCoordsRange: o,
          } = t;
          let l = i;
          const d = this._getSource(),
            h = d.isArcsBackgroundFilled(),
            c = d.arcsBackgroundTransparency(),
            u = d.arcs();
          for (const t of u) {
            if (!t.visible) continue;
            const i = t.x / 5,
              d = t.y / 5,
              u = r.x + i * a,
              _ = r.y + d * o,
              p = {
                center: r,
                point: new n.Point(u, _),
                edge: s,
                color: t.color,
                linewidth: t.width,
                fillBack: h,
                transparency: c,
                prevPoint: l,
              },
              g = this._arcRenderers[t.index];
            g.setData(p), e.append(g), (l = p.point);
          }
        }
        _prepareLabels(e, t) {
          const { p1: i, p2: r, isLabelsVisible: s, reversed: a } = t;
          if (!s) return;
          const o = this._getSource(),
            l = o.ownerSource();
          let d = o.getPriceDiff(),
            h = o.getIndexDiff();
          if (null === d || null === h || null === l) return;
          a && ((d = -d), (h = -h));
          const u = new n.Point(i.x, r.y),
            _ = (0, c.forceLTRStr)(l.formatter().format(d)),
            p = this._getLabelData(u, _);
          (p.horzAlign = h > 0 ? 'right' : 'left'),
            (p.vertAlign = d > 0 ? 'bottom' : 'top'),
            (p.offsetX = 10),
            (p.offsetY = d > 0 ? 8 : 10),
            (p.forceTextAlign = !0),
            this._priceDiffTextRenderer.setData(p),
            e.append(this._priceDiffTextRenderer);
          const g = new n.Point(r.x, i.y),
            f = (0, c.forceLTRStr)(h.toString()),
            v = this._getLabelData(g, f);
          (v.horzAlign = h > 0 ? 'left' : 'right'),
            (v.vertAlign = d > 0 ? 'top' : 'bottom'),
            (v.offsetX = 10),
            (v.offsetY = d > 0 ? 10 : 8),
            (v.forceTextAlign = !0),
            this._indexDiffTextRenderer.setData(v),
            e.append(this._indexDiffTextRenderer);
          const x = o.getScaleRatio();
          if (null === x) return;
          const w = o.getScaleRatioFormatter(),
            m = (0, c.forceLTRStr)(w.format(x)),
            R = this._getLabelData(r, m);
          (R.horzAlign = h > 0 ? 'left' : 'right'),
            (R.vertAlign = d > 0 ? 'bottom' : 'top'),
            (R.offsetX = 10),
            (R.offsetY = d > 0 ? 8 : 10),
            (R.forceTextAlign = !0),
            this._ratioTextRenderer.setData(R),
            e.append(this._ratioTextRenderer);
        }
        _getLabelData(e, t) {
          const i = this._getSource(),
            {
              textColor: n,
              font: r,
              fontSize: s,
              bold: a,
              italic: o,
            } = i.getLabelsStyle();
          return {
            points: [e],
            backgroundColor: 'transparent',
            text: t,
            font: r,
            bold: a,
            italic: o,
            fontsize: s,
            color: n,
            vertAlign: 'top',
            horzAlign: 'center',
            offsetX: 0,
            offsetY: 0,
            backgroundRoundRect: 4,
          };
        }
      }
    },
    69152: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { GannFanPaneView: () => u });
      var n = i(72927),
        r = i(10288),
        s = i(16758),
        a = i(87088),
        o = i(71172),
        l = i(44896),
        d = i(6397),
        h = i(67857),
        c = i(54837);
      class u extends h.LineSourcePaneView {
        constructor() {
          super(...arguments), (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            this._source.points().length < 2)
          )
            return;
          const e = this._source.priceScale();
          if (!e || e.isEmpty() || this._model.timeScale().isEmpty()) return;
          if (this._points.length < 2) return;
          const t = this._points[0],
            i = this._points[1],
            h = [],
            u = i.x - t.x,
            _ = i.y - t.y,
            p = this._source.properties().childs();
          for (let e = 1; e <= 9; e++) {
            const n = 'level' + e,
              r = this._source.properties().child(n).childs();
            if (!r.visible.value()) continue;
            const s = r.coeff1.value(),
              a = r.coeff2.value(),
              o = s / a,
              l = r.color.value(),
              d = s + '/' + a;
            let c, p;
            s > a
              ? ((c = i.x), (p = t.y + _ / o))
              : ((c = t.x + u * o), (p = i.y)),
              h.push({
                label: d,
                color: l,
                x: c,
                y: p,
                linewidth: r.linewidth.value(),
                linestyle: r.linestyle.value(),
                index: e,
              });
          }
          const g = new a.CompositeRenderer(),
            f = p.fillBackground.value(),
            v = p.transparency.value();
          for (let e = 0; e < h.length; e++) {
            const i = new n.Point(h[e].x, h[e].y);
            if (f)
              if (h[e].index < 4) {
                const r = {
                    p1: t,
                    p2: i,
                    p3: t,
                    p4: new n.Point(h[e + 1].x, h[e + 1].y),
                    color: h[e].color,
                    transparency: v,
                    hittestOnBackground: !0,
                    extendLeft: !1,
                  },
                  a = new s.ChannelRenderer();
                a.setData(r), g.append(a);
              } else if (h[e].index > 4 && e > 0) {
                const r = {
                    p1: t,
                    p2: i,
                    p3: t,
                    p4: new n.Point(h[e - 1].x, h[e - 1].y),
                    color: h[e].color,
                    transparency: v,
                    hittestOnBackground: !0,
                    extendLeft: !1,
                  },
                  a = new s.ChannelRenderer();
                a.setData(r), g.append(a);
              }
            {
              const n = {
                  points: [t, i],
                  color: h[e].color,
                  linewidth: h[e].linewidth,
                  linestyle: h[e].linestyle,
                  extendleft: !1,
                  extendright: !0,
                  leftend: o.LineEnd.Normal,
                  rightend: o.LineEnd.Normal,
                },
                s = new d.TrendLineRenderer();
              s.setData(n),
                s.setHitTest(
                  new r.HitTestResult(
                    r.HitTestResult.MOVEPOINT,
                    void 0,
                    h[e].index,
                  ),
                ),
                g.append(s);
            }
            if (p.showLabels.value()) {
              const t = {
                points: [i],
                text: h[e].label,
                color: h[e].color,
                vertAlign: 'middle',
                horzAlign: 'left',
                font: c.CHART_FONT_FAMILY,
                offsetX: 0,
                offsetY: 5,
                fontsize: 12,
              };
              g.append(new l.TextRenderer(t));
            }
          }
          this.addAnchors(g), (this._renderer = g);
        }
      }
    },
    47536: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { GannFixedPaneView: () => h });
      var n = i(72927),
        r = i(67857),
        s = i(6397),
        a = i(87088),
        o = i(71172),
        l = i(33420),
        d = i(18250);
      class h extends r.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._verticalLevelsRenderers = []),
            (this._horizontalLevelsRenderers = []),
            (this._fanRenderers = []),
            (this._arcRenderers = []),
            (this._renderer = null),
            this._initRenderers();
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl(), (this._renderer = null);
          const e = this._getSource(),
            t = this._getPoints(),
            i = e.getScreenPoints();
          if (t.length < 2 || i.length < 2) return;
          const [n, r] = i;
          (t[1] = n), (t[1].data = 1), (t[2] = r);
          const s = this._getPoints(),
            o = new a.CompositeRenderer();
          if (s.length < 2)
            return this.addAnchors(o), void (this._renderer = o);
          const l = s[0],
            d = 3 === s.length ? s[2] : s[1],
            h = d.x - l.x,
            c = d.y - l.y,
            u = l,
            _ = d,
            p = this._getModel(),
            g = {
              barsCoordsRange: h,
              priceCoordsRange: c,
              startPoint: u,
              endPoint: _,
              p1: l,
              p2: d,
            };
          this._prepareLevels(o, g),
            this._prepareFanLines(o, g),
            this._prepareArcs(o, g);
          const f = [l, s[1]];
          p.lineBeingCreated() === e && f.pop(),
            o.append(this.createLineAnchor({ points: f }, 0)),
            (this._renderer = o);
        }
        _initRenderers() {
          const e = this._getSource(),
            t = e.levelsCount();
          for (let e = 0; e < t; e++)
            this._verticalLevelsRenderers.push(new s.TrendLineRenderer()),
              this._horizontalLevelsRenderers.push(new s.TrendLineRenderer());
          const i = e.fanLinesCount();
          for (let e = 0; e < i; e++)
            this._fanRenderers.push(new s.TrendLineRenderer());
          const n = e.arcsCount();
          for (let e = 0; e < n; e++)
            this._arcRenderers.push(new d.GannArcRenderer());
        }
        _prepareLevels(e, t) {
          const {
              startPoint: i,
              endPoint: r,
              barsCoordsRange: s,
              priceCoordsRange: a,
            } = t,
            d = this._getSource().levels();
          for (const t of d) {
            if (!t.visible) continue;
            const d = t.index / 5,
              h = i.x + d * s,
              c = {
                points: [new n.Point(h, i.y), new n.Point(h, r.y)],
                color: t.color,
                linewidth: t.width,
                linestyle: l.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: o.LineEnd.Normal,
                rightend: o.LineEnd.Normal,
              },
              u = this._verticalLevelsRenderers[t.index];
            u.setData(c), e.append(u);
            const _ = i.y + d * a,
              p = {
                points: [new n.Point(i.x, _), new n.Point(r.x, _)],
                color: t.color,
                linewidth: t.width,
                linestyle: l.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: o.LineEnd.Normal,
                rightend: o.LineEnd.Normal,
              },
              g = this._horizontalLevelsRenderers[t.index];
            g.setData(p), e.append(g);
          }
        }
        _prepareFanLines(e, t) {
          const {
              p1: i,
              startPoint: r,
              endPoint: s,
              barsCoordsRange: a,
              priceCoordsRange: d,
            } = t,
            h = this._getSource().fanLines();
          for (const t of h) {
            if (!t.visible) continue;
            const h = t.x,
              c = t.y;
            let u, _;
            if (h > c) {
              u = s.x;
              const e = c / h;
              _ = r.y + e * d;
            } else {
              _ = s.y;
              const e = h / c;
              u = r.x + e * a;
            }
            const p = {
                points: [i, new n.Point(u, _)],
                color: t.color,
                linewidth: t.width,
                linestyle: l.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: o.LineEnd.Normal,
                rightend: o.LineEnd.Normal,
              },
              g = this._fanRenderers[t.index];
            g.setData(p), e.append(g);
          }
        }
        _prepareArcs(e, t) {
          const {
            p1: i,
            startPoint: r,
            endPoint: s,
            barsCoordsRange: a,
            priceCoordsRange: o,
          } = t;
          let l = i;
          const d = this._getSource(),
            h = d.isArcsBackgroundFilled(),
            c = d.arcsBackgroundTransparency(),
            u = d.arcs();
          for (const t of u) {
            if (!t.visible) continue;
            const i = t.x / 5,
              d = t.y / 5,
              u = r.x + i * a,
              _ = r.y + d * o,
              p = {
                center: r,
                point: new n.Point(u, _),
                edge: s,
                color: t.color,
                linewidth: t.width,
                fillBack: h,
                transparency: c,
                prevPoint: l,
              },
              g = this._arcRenderers[t.index];
            g.setData(p), e.append(g), (l = p.point);
          }
        }
      }
    },
    71600: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(67857).LineSourcePaneView,
        s = i(44896).TextRenderer,
        a = i(72095).RectangleRenderer,
        o = i(6397).TrendLineRenderer,
        l = i(87088).CompositeRenderer,
        d = i(57649).NumericFormatter,
        h = i(71172).LineEnd,
        c = i(54837);
      t.GannSquarePaneView = class extends r {
        constructor(e, t) {
          super(e, t),
            (this._numericFormatter = new d()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            !(this._source.points().length < 2) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          ) {
            var e = this._source.points()[0],
              t = this._source.points()[1],
              i = (C = this._source.properties()).reverse && C.reverse.value();
            this._hlevels = [];
            for (
              var r = i ? e.price - t.price : t.price - e.price,
                d = i ? t.price : e.price,
                u = this._source.ownerSource().firstValue(),
                _ = 1;
              _ <= 7;
              _++
            ) {
              if ((m = C['hlevel' + _]).visible.value()) {
                var p = m.coeff.value(),
                  g = m.color.value(),
                  f = d + p * r,
                  v = this._source.priceScale().priceToCoordinate(f, u);
                this._hlevels.push({ coeff: p, color: g, y: v });
              }
            }
            this._vlevels = [];
            var x = i ? e.index - t.index : t.index - e.index,
              w = i ? t.index : e.index;
            for (_ = 1; _ <= 7; _++) {
              var m;
              if ((m = C['vlevel' + _]).visible.value()) {
                (p = m.coeff.value()), (g = m.color.value());
                var R = Math.round(w + p * x),
                  y = this._model.timeScale().indexToCoordinate(R);
                this._vlevels.push({ coeff: p, color: g, x: y });
              }
            }
            if (
              ((this._hfans = []), (this._vfans = []), C.fans.visible.value())
            )
              for (_ = 1; _ <= 7; _++) {
                (R = Math.round(w + C['hlevel' + _].coeff.value() * x)),
                  (f = d + C['vlevel' + _].coeff.value() * r);
                this._hfans.push(this._model.timeScale().indexToCoordinate(R)),
                  this._vfans.push(
                    this._source.priceScale().priceToCoordinate(f, u),
                  );
              }
            var T = new l();
            if (this._points.length < 2)
              return this.addAnchors(T), void (this._renderer = T);
            (e = this._points[0]), (t = this._points[1]);
            var b = Math.min(e.x, t.x),
              L = Math.min(e.y, t.y),
              S = Math.max(e.x, t.x),
              P = Math.max(e.y, t.y),
              C = this._source.properties(),
              M = this._source.properties().fillHorzBackground.value(),
              I = this._source.properties().horzTransparency.value(),
              N = this._source.properties().fillVertBackground.value(),
              D = this._source.properties().vertTransparency.value();
            for (_ = 0; _ < this._hlevels.length; _++) {
              if (_ > 0 && M) {
                var A = this._hlevels[_ - 1];
                (e = new n(b, this._hlevels[_].y)), (t = new n(S, A.y));
                ((O = {}).points = [e, t]),
                  (O.color = this._hlevels[_].color),
                  (O.linewidth = 0),
                  (O.backcolor = this._hlevels[_].color),
                  (O.fillBackground = !0),
                  (O.transparency = I),
                  (O.extendLeft = !1),
                  (O.extendRight = !1),
                  (z = new a(void 0, void 0, !0)).setData(O),
                  T.append(z);
              }
              var k = {
                points: [
                  (e = new n(b, this._hlevels[_].y)),
                  (t = new n(S, this._hlevels[_].y)),
                ],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._hlevels[_].color,
                linewidth: C.linewidth.value(),
                linestyle: C.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: h.Normal,
                rightend: h.Normal,
              };
              if (
                ((z = new o()).setData(k),
                T.append(z),
                C.showLeftLabels.value())
              ) {
                var E = {
                  points: [e],
                  text: this._numericFormatter.format(this._hlevels[_].coeff),
                  color: this._hlevels[_].color,
                  vertAlign: 'middle',
                  horzAlign: 'right',
                  font: c.CHART_FONT_FAMILY,
                  offsetX: 5,
                  offsetY: 0,
                  fontsize: 12,
                  forceTextAlign: !0,
                };
                T.append(new s(E));
              }
              if (C.showRightLabels.value()) {
                var B = {
                  points: [t],
                  text: this._numericFormatter.format(this._hlevels[_].coeff),
                  color: this._hlevels[_].color,
                  vertAlign: 'middle',
                  horzAlign: 'left',
                  font: c.CHART_FONT_FAMILY,
                  offsetX: 5,
                  offsetY: 0,
                  fontsize: 12,
                };
                T.append(new s(B));
              }
            }
            for (_ = 0; _ < this._vlevels.length; _++) {
              (e = new n(this._vlevels[_].x, L)),
                (t = new n(this._vlevels[_].x, P));
              if (_ > 0 && N) {
                A = this._vlevels[_ - 1];
                var O,
                  H = new n(A.x, L);
                ((O = {}).points = [H, t]),
                  (O.color = this._vlevels[_].color),
                  (O.linewidth = 0),
                  (O.backcolor = this._vlevels[_].color),
                  (O.fillBackground = !0),
                  (O.transparency = D),
                  (O.extendLeft = !1),
                  (O.extendRight = !1),
                  (z = new a(void 0, void 0, !0)).setData(O),
                  T.append(z);
              }
              var z;
              k = {
                points: [e, t],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._vlevels[_].color,
                linewidth: C.linewidth.value(),
                linestyle: C.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: h.Normal,
                rightend: h.Normal,
              };
              if (
                ((z = new o()).setData(k), T.append(z), C.showTopLabels.value())
              ) {
                var V = {
                  points: [e],
                  text: this._numericFormatter.format(this._vlevels[_].coeff),
                  color: this._vlevels[_].color,
                  vertAlign: 'bottom',
                  horzAlign: 'center',
                  font: c.CHART_FONT_FAMILY,
                  offsetX: 0,
                  offsetY: 3,
                  fontsize: 12,
                };
                T.append(new s(V));
              }
              if (C.showBottomLabels.value()) {
                var W = {
                  points: [t],
                  text: this._numericFormatter.format(this._vlevels[_].coeff),
                  color: this._vlevels[_].color,
                  vertAlign: 'top',
                  horzAlign: 'center',
                  font: c.CHART_FONT_FAMILY,
                  offsetX: 0,
                  offsetY: 5,
                  fontsize: 12,
                };
                T.append(new s(W));
              }
            }
            var F = this;
            U(T, this._hfans, !0), U(T, this._vfans, !1);
            var Y = new n(this._points[0].x, this._points[1].y);
            Y.data = 2;
            var j = new n(this._points[1].x, this._points[0].y);
            (j.data = 3),
              T.append(
                this.createLineAnchor({ points: [...this._points, Y, j] }, 0),
              ),
              (this._renderer = T);
          }
          function U(e, t, i) {
            var r = new n(b, L),
              s = new n(S, L),
              a = new n(b, P),
              l = new n(S, P),
              d = {
                width: F._model.timeScale().width(),
                height: F._source.priceScale().height(),
                color: C.fans.color.value(),
                linewidth: C.linewidth.value(),
                linestyle: C.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: h.Normal,
                rightend: h.Normal,
              };
            function c(t) {
              var i = new o();
              i.setData(Object.assign({}, d, { points: t })), e.append(i);
            }
            for (var u = 0; u < t.length; ++u) {
              var _ = i ? P : t[u],
                p = i ? L : t[u],
                g = i ? t[u] : b,
                f = i ? t[u] : S,
                v = new n(f, _),
                x = new n(g, _),
                w = new n(f, p),
                m = new n(g, p);
              c([a, w]), c([l, m]), c([r, v]), c([s, x]);
            }
          }
        }
      };
    },
    98327: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { GhostFeedPaneView: () => p });
      var n = i(53312),
        r = i(33420),
        s = i(47903),
        a = i(10288),
        o = i(87088),
        l = i(21344),
        d = i(71172),
        h = i(6397),
        c = i(67596),
        u = i(67857);
      const _ = n.colorsPalette['color-cold-gray-500'];
      class p extends u.LineSourcePaneView {
        constructor() {
          super(...arguments), (this._renderer = null), (this._segments = []);
        }
        renderer() {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          var e, t;
          super._updateImpl(), (this._renderer = null), (this._segments = []);
          const i = this._source.priceScale(),
            n =
              null !==
                (t =
                  null === (e = this._source.ownerSource()) || void 0 === e
                    ? void 0
                    : e.firstValue()) && void 0 !== t
                ? t
                : null;
          if (
            this._points.length < 2 ||
            null === i ||
            i.isEmpty() ||
            null === n
          )
            return;
          const u = this._source.points(),
            p = this._source.properties().childs(),
            g = p.candleStyle.childs();
          this._segments = this._source
            .segments()
            .map((e, t) => {
              if (t >= this._points.length - 1) return null;
              const r = this._points[t].x,
                s = u[t].price,
                a = u[t + 1].price,
                o = i.priceToCoordinate(s, n),
                l = i.priceToCoordinate(a, n),
                d = u[t + 1].index - u[t].index,
                h = this._model.timeScale().barSpacing() * Math.sign(d),
                c = (l - o) / (e.bars().length - 1),
                _ = g.upColor.value(),
                p = g.downColor.value(),
                f = g.borderUpColor.value(),
                v = g.borderDownColor.value();
              return {
                bars: e.bars().map((e, t) => {
                  const s = o + t * c,
                    a = i.coordinateToPrice(s, n),
                    l = e.c >= e.o;
                  return {
                    time: r + t * h,
                    open: i.priceToCoordinate(a + e.o, n),
                    high: i.priceToCoordinate(a + e.h, n),
                    low: i.priceToCoordinate(a + e.l, n),
                    close: i.priceToCoordinate(a + e.c, n),
                    color: l ? _ : p,
                    borderColor: l ? f : v,
                    hollow: !1,
                  };
                }),
              };
            })
            .filter(s.notNull);
          const f = new o.CompositeRenderer();
          for (let e = 1; e < this._points.length; e++) {
            const t = {
                points: [this._points[e - 1], this._points[e]],
                color: _,
                linewidth: 1,
                linestyle: r.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: d.LineEnd.Normal,
                rightend: d.LineEnd.Normal,
              },
              i = new h.TrendLineRenderer();
            i.setData(t),
              i.setHitTest(new a.HitTestResult(a.HitTestResult.MOVEPOINT)),
              f.append(i);
          }
          const v = g.drawWick.value(),
            x = g.drawBorder.value(),
            w = g.borderColor.value(),
            m = g.wickColor.value(),
            R = new o.CompositeRenderer();
          R.setGlobalAlpha(1 - p.transparency.value() / 100);
          const y = this._model.timeScale().barSpacing();
          for (let e = 0; e < this._segments.length; e++) {
            const t = {
              bars: this._segments[e].bars,
              barSpacing: y,
              wickVisible: v,
              bodyVisible: !0,
              borderVisible: x,
              borderColor: w,
              wickColor: m,
              barWidth: (0, l.optimalBarWidth)(y),
              hittest: new a.HitTestResult(a.HitTestResult.MOVEPOINT),
            };
            R.append(new c.PaneRendererCandles(t));
          }
          f.append(R), this.addAnchors(f), (this._renderer = f);
        }
      }
    },
    95071: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { LineToolHeadAndShouldersPaneView: () => g });
      var n = i(95196),
        r = i(79881),
        s = i(33420),
        a = i(6397),
        o = i(18614),
        l = i(44896),
        d = i(87088),
        h = i(71172),
        c = i(59943),
        u = i(67857),
        _ = i(54837);
      const p = {
        leftShoulder: (0, r.t)('Left Shoulder'),
        rightShoulder: (0, r.t)('Right Shoulder'),
        head: (0, r.t)('Head'),
      };
      class g extends u.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._trendLineRenderer = new a.TrendLineRenderer()),
            (this._triangleRendererPoints234 = new o.TriangleRenderer()),
            (this._intersect1Renderer = new o.TriangleRenderer()),
            (this._intersect2Renderer = new o.TriangleRenderer()),
            (this._polyLineRenderer = new c.PolygonRenderer()),
            (this._leftShoulderLabelRenderer = new l.TextRenderer()),
            (this._headLabelRenderer = new l.TextRenderer()),
            (this._rightShoulderLabelRenderer = new l.TextRenderer()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          let e, t;
          super._updateImpl(), (this._renderer = null);
          const [i, a, o, l, c, u, g] = this._points;
          if (this._points.length >= 5) {
            const r = (0, n.intersectLineSegments)(o, c, i, a);
            if (null !== r) {
              const t = c.subtract(o);
              e = o.add(t.scaled(r));
            }
            if (7 === this._points.length) {
              const e = (0, n.intersectLineSegments)(o, c, u, g);
              if (null !== e) {
                const i = c.subtract(o);
                t = o.add(i.scaled(e));
              }
            }
          }
          if (this._points.length < 2) return;
          const f = this._source.properties().childs(),
            v = new d.CompositeRenderer(),
            x = (e, t) => ({
              points: [e],
              text: (0, r.t)(t),
              color: f.textcolor.value(),
              horzAlign: 'center',
              vertAlign: 'middle',
              font: _.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: f.bold && f.bold.value(),
              italic: f.italic && f.italic.value(),
              fontsize: f.fontsize.value(),
              backgroundColor: f.color.value(),
              backgroundRoundRect: 4,
            }),
            w = (e, t, i) => ({
              points: [e, t, i],
              color: 'rgba(0, 0, 0, 0)',
              linewidth: 0,
              backcolor: f.backgroundColor.value(),
              fillBackground: f.fillBackground.value(),
              transparency: f.transparency.value(),
            }),
            m = {
              points: this._points,
              color: f.color.value(),
              linewidth: f.linewidth.value(),
              linestyle: s.LINESTYLE_SOLID,
              backcolor: 'rgba(0, 0, 0, 0)',
              fillBackground: !1,
              filled: !1,
            };
          if (
            (this._polyLineRenderer.setData(m),
            v.append(this._polyLineRenderer),
            this._points.length >= 5)
          ) {
            let i,
              n,
              r = !1,
              a = !1;
            e ? (i = e) : ((i = o), (r = !0)),
              t ? (n = t) : ((n = c), (a = !0));
            const d = {
              points: [i, n],
              color: f.color.value(),
              linewidth: f.linewidth.value(),
              linestyle: s.LINESTYLE_DOTTED,
              extendleft: !1,
              extendright: !1,
              leftend: h.LineEnd.Normal,
              rightend: h.LineEnd.Normal,
            };
            (d.extendleft = r),
              (d.extendright = a),
              this._trendLineRenderer.setData(d),
              v.append(this._trendLineRenderer);
            const u = w(o, l, c);
            this._triangleRendererPoints234.setData(u),
              v.append(this._triangleRendererPoints234);
          }
          if (e) {
            const t = w(e, a, o);
            this._intersect1Renderer.setData(t),
              v.append(this._intersect1Renderer);
          }
          if (t) {
            const e = w(c, u, t);
            this._intersect2Renderer.setData(e),
              v.append(this._intersect2Renderer);
          }
          if (this._points.length >= 2) {
            const e = x(a, p.leftShoulder);
            a.y < i.y
              ? ((e.vertAlign = 'bottom'), (e.offsetY = 5))
              : ((e.vertAlign = 'top'), (e.offsetY = 5)),
              this._leftShoulderLabelRenderer.setData(e),
              v.append(this._leftShoulderLabelRenderer);
          }
          if (this._points.length >= 4) {
            const e = x(l, p.head);
            l.y < o.y
              ? ((e.vertAlign = 'bottom'), (e.offsetY = 5))
              : ((e.vertAlign = 'top'), (e.offsetY = 5)),
              this._headLabelRenderer.setData(e),
              v.append(this._headLabelRenderer);
          }
          if (this._points.length >= 6) {
            const e = x(u, p.rightShoulder);
            u.y < c.y
              ? ((e.vertAlign = 'bottom'), (e.offsetY = 5))
              : ((e.vertAlign = 'top'), (e.offsetY = 5)),
              this._rightShoulderLabelRenderer.setData(e),
              v.append(this._rightShoulderLabelRenderer);
          }
          this.addAnchors(v), (this._renderer = v);
        }
      }
    },
    68724: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { HighlighterPaneView: () => s });
      var n = i(33420),
        r = i(58979);
      class s extends r.BrushBasePaneView {
        _createPolygonRendererData() {
          const e = this._source.properties().childs();
          return {
            points: this._points,
            color: e.linecolor.value(),
            linewidth: 20,
            backcolor: 'rgba(0, 0, 0, 0)',
            fillBackground: !1,
            linestyle: n.LINESTYLE_SOLID,
            linecap: 'round',
            linejoin: 'round',
            filled: !1,
            transparency: e.transparency.value(),
          };
        }
      }
    },
    98827: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { HorzLinePaneView: () => u });
      var n = i(72927),
        r = i(10288),
        s = i(10992),
        a = i(44896),
        o = i(29982),
        l = i(87088),
        d = i(67857),
        h = i(54837);
      const c = [s.PaneCursorType.VerticalResize];
      class u extends d.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._renderer = null),
            (this._labelRenderer = new a.TextRenderer()),
            (this._lineRenderer = new o.HorizontalLineRenderer()),
            this._lineRenderer.setHitTest(
              new r.HitTestResult(r.HitTestResult.MOVEPOINT),
            );
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
        _updateImpl(e, t) {
          if (
            (super._updateImpl(e, t),
            (this._renderer = null),
            0 === this._points.length)
          )
            return;
          const i = this._source.properties().childs(),
            s = new l.CompositeRenderer(),
            a = {
              y: this._points[0].y,
              color: i.linecolor.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
            };
          this._lineRenderer.setData(a),
            this._lineRenderer.setHitTest(
              new r.HitTestResult(r.HitTestResult.MOVEPOINT, {
                snappingPrice: this._source.points()[0].price,
              }),
            );
          const o = a.linewidth / 2 + 1;
          let d = a.y < -o || a.y > e + o;
          if (
            (s.append(this._lineRenderer),
            i.showLabel.value() &&
              1 === this._points.length &&
              i.text.value().length > 0)
          ) {
            const r = i.vertLabelsAlign.value(),
              a = i.horzLabelsAlign.value();
            let o = 0,
              l = 0;
            'left' === a
              ? (l = 3)
              : 'right' === a
              ? ((l = this._model.timeScale().width()), (o = 3))
              : (l = this._model.timeScale().width() / 2);
            const c = {
              points: [new n.Point(l, this._points[0].y)],
              text: i.text.value(),
              color: i.textcolor.value(),
              vertAlign: r,
              horzAlign: a,
              font: h.CHART_FONT_FAMILY,
              offsetX: o,
              offsetY: 0,
              bold: i.bold.value(),
              italic: i.italic.value(),
              fontsize: i.fontsize.value(),
              forceTextAlign: !0,
            };
            this._labelRenderer.setData(c),
              s.append(this._labelRenderer),
              (d = d && this._labelRenderer.isOutOfScreen(t, e));
          }
          if (!d) {
            if (1 === this._points.length) {
              const e = new n.Point(t / 2, this._points[0].y);
              (e.data = 0),
                (e.square = !0),
                s.append(
                  this.createLineAnchor(
                    { points: [e], pointsCursorType: c },
                    0,
                  ),
                );
            }
            0, (this._renderer = s);
          }
        }
      }
    },
    71250: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { HorzRayPaneView: () => _ });
      var n = i(72927),
        r = i(87088),
        s = i(44896),
        a = i(67857),
        o = i(5025),
        l = i(10288),
        d = i(55430),
        h = i(21344);
      class c {
        constructor() {
          (this._data = null), (this._data = null);
        }
        setData(e) {
          this._data = e;
        }
        draw(e, t) {
          if (null === this._data || 0 === this._data.points.length) return;
          const i = t.pixelRatio,
            n = t.physicalWidth,
            r = this._data.points[0].y,
            s = Math.max(0, this._data.points[0].x),
            a = Math.max(n, this._data.points[0].x);
          (e.lineCap = 'butt'),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = Math.max(1, Math.floor(this._data.linewidth * i))),
            void 0 !== this._data.linestyle &&
              (0, o.setLineStyle)(e, this._data.linestyle),
            (0, d.drawHorizontalLine)(
              e,
              Math.round(r * i),
              Math.round(s * i),
              Math.round(a * i),
            );
        }
        hitTest(e) {
          if (null === this._data || 0 === this._data.points.length)
            return null;
          if (e.x < this._data.points[0].x) return null;
          const t = (0, h.interactionTolerance)().line;
          return Math.abs(e.y - this._data.points[0].y) <= t
            ? new l.HitTestResult(this._data.hitTestResult, {
                snappingPrice: this._data.snappingPrice,
              })
            : null;
        }
      }
      var u = i(54837);
      class _ extends a.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._horzRayRenderer = new c()),
            (this._labelRenderer = new s.TextRenderer()),
            (this._renderer = null),
            (this._horzRayRenderer = new c()),
            (this._labelRenderer = new s.TextRenderer()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
        _updateImpl(e, t) {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            0 === this._points.length)
          )
            return;
          const i = this._source.properties().childs(),
            s = new r.CompositeRenderer(),
            a = {
              points: this._points,
              color: i.linecolor.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              hitTestResult: l.HitTestResult.MOVEPOINT,
              snappingPrice: this._source.points()[0].price,
            };
          this._horzRayRenderer.setData(a), s.append(this._horzRayRenderer);
          let o = this._points[0].clone();
          if (i.showLabel.value() && 1 === this._points.length) {
            const e = i.vertLabelsAlign.value(),
              t = i.horzLabelsAlign.value(),
              r = 0;
            let a = 0;
            const l = i.text.value(),
              d = i.bold.value(),
              h = i.italic.value(),
              c = u.CHART_FONT_FAMILY,
              _ = i.fontsize.value();
            if ('right' === t) {
              const e = this._labelRenderer.measure().width,
                t = this._model.timeScale().width();
              o.x + e + 3 >= t
                ? (o = o.add((0, n.point)(e + 3, 0)))
                : ((o = (0, n.point)(t, o.y)), (a = 3));
            } else
              'center' === t &&
                (o = (0, n.point)(
                  (o.x + this._model.timeScale().width()) / 2,
                  o.y,
                ));
            const p = {
              points: [o],
              text: l,
              color: i.textcolor.value(),
              vertAlign: e,
              horzAlign: t,
              font: c,
              offsetX: a,
              offsetY: r,
              bold: d,
              italic: h,
              fontsize: _,
              forceTextAlign: !0,
            };
            this._labelRenderer.setData(p), s.append(this._labelRenderer);
          }
          this.addAnchors(s), (this._renderer = s);
        }
      }
    },
    63245: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { IconPaneView: () => x });
      var n = i(72927),
        r = i(51102),
        s = i(53312),
        a = i(87088),
        o = i(71172),
        l = i(33420),
        d = i(10992),
        h = i(6397),
        c = i(67857),
        u = i(76553),
        _ = i(16932),
        p = i(58729),
        g = i(10288);
      class f extends p.ScaledPaneRenderer {
        constructor(e) {
          super(), (this._data = null), (this._cache = e);
        }
        setData(e) {
          this._data = e;
        }
        hitTest(e, t) {
          if (null === this._data) return null;
          const i = 65536 * this._data.icon + this._data.size,
            n = this._cache[i] * this._data.scale,
            s = (0, r.rotationMatrix)(-this._data.angle);
          let a = e.subtract(this._data.point);
          return (
            (a = (0, r.transformPoint)(s, a)),
            Math.abs(a.y) <= n / 2 && Math.abs(a.x) <= this._data.size / 2
              ? new g.HitTestResult(g.HitTestResult.MOVEPOINT)
              : null
          );
        }
        _drawImpl(e, t) {
          if (null === this._data) return;
          const i = String.fromCharCode(this._data.icon);
          e.font = this._data.size + 'px FontAwesome';
          const n = e.measureText(i).width;
          e.textBaseline = 'middle';
          const r = this._data.point;
          e.translate(r.x, r.y),
            e.rotate(this._data.angle - Math.PI / 2),
            e.scale(this._data.scale, 1);
          const s = 65536 * this._data.icon + this._data.size;
          e.textAlign = (0, u.isRtl)() ? 'right' : 'left';
          const a = (0, _.calcTextHorizontalShift)(e, n);
          (this._cache[s] = n),
            this._data.selected &&
              ((e.fillStyle = 'rgba(80, 80, 80, 0.2)'),
              e.fillRect(
                -this._cache[s] / 2,
                -this._data.size / 2,
                this._cache[s],
                this._data.size,
              )),
            (e.fillStyle = this._data.color),
            e.fillText(i, -this._cache[s] / 2 + a, 0);
        }
      }
      const v = s.colorsPalette['color-cold-gray-500'];
      class x extends c.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._cache = {}),
            (this._dashRenderer = new h.TrendLineRenderer()),
            (this._iconRenderer = new f(this._cache)),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            this._points.length < 1)
          )
            return;
          const e = new a.CompositeRenderer(),
            t = this._source.properties().childs(),
            i = {
              point: this._points[0],
              color: t.color.value(),
              size: t.size.value(),
              icon: t.icon.value(),
              angle: t.angle.value(),
              scale: t.scale.value(),
              selected: this.areAnchorsVisible(),
            };
          this._iconRenderer.setData(i), e.append(this._iconRenderer);
          const s = 65536 * i.icon + i.size,
            h = this._cache[s],
            u = i.size,
            _ = this._points[0],
            p = t.scale.value(),
            g = this._source.getAnchorLimit();
          let f = new n.Point(Math.max(g, u) / 2, 0),
            x = new n.Point(0, Math.max(g, p * h) / 2);
          const w = (0, r.rotationMatrix)(t.angle.value());
          (f = (0, r.transformPoint)(w, f)), (x = (0, r.transformPoint)(w, x));
          const m = _.add(f);
          m.data = 0;
          const R = _.subtract(f);
          R.data = 1;
          const y = _.add(x);
          (y.data = 2), (y.square = !0);
          const T = _.subtract(x);
          if (((T.data = 3), (T.square = !0), this.areAnchorsVisible())) {
            const t = {
              points: [m, R],
              color: v,
              linewidth: 1,
              linestyle: l.LINESTYLE_DASHED,
              extendleft: !1,
              extendright: !1,
              leftend: o.LineEnd.Normal,
              rightend: o.LineEnd.Normal,
            };
            this._dashRenderer.setData(t), e.append(this._dashRenderer);
          }
          const b = (0, c.thirdPointCursorType)(m, R),
            L = [d.PaneCursorType.Default, d.PaneCursorType.Default, b, b];
          e.append(
            this.createLineAnchor(
              { points: [m, R, y, T], pointsCursorType: L },
              0,
            ),
          ),
            (this._renderer = e);
        }
      }
    },
    67857: (e, t, i) => {
      'use strict';
      i.d(t, { thirdPointCursorType: () => u, LineSourcePaneView: () => _ });
      var n = i(72927),
        r = i(53312),
        s = i(87910),
        a = i(10288),
        o = i(73301),
        l = i(77042),
        d = i(10992),
        h = i(16282);
      const c = r.colorsPalette['color-tv-blue-600'];
      function u(e, t) {
        const i = t.x - e.x,
          n = t.y - e.y,
          r = Math.abs(Math.atan2(i, n));
        return r > Math.PI / 4 && r < (3 * Math.PI) / 4
          ? d.PaneCursorType.VerticalResize
          : d.PaneCursorType.HorizontalResize;
      }
      class _ {
        constructor(e, t) {
          (this._invalidated = !0),
            (this._points = []),
            (this._middlePoint = null),
            (this._selectionRenderers = []),
            (this._lineAnchorRenderers = []),
            (this._source = e),
            (this._model = t);
        }
        priceToCoordinate(e) {
          const t = this._source.priceScale();
          if (null === t) return null;
          const i = this._source.ownerSource(),
            n = null !== i ? i.firstValue() : null;
          return null === n ? null : t.priceToCoordinate(e, n);
        }
        currentPoint() {
          const e = this._model.crossHairSource();
          return new n.Point(e.originX(), e.originY());
        }
        anchorColor() {
          return c;
        }
        isHoveredSource() {
          return this._source === this._model.hoveredSource();
        }
        isSelectedSource() {
          return this._model.selection().isSelected(this._source);
        }
        isBeingEdited() {
          return this._model.lineBeingEdited() === this._source;
        }
        isEditMode() {
          return !this._model.isSnapshot();
        }
        areAnchorsVisible() {
          return (
            ((this.isHoveredSource() && !this.isLocked()) ||
              this.isSelectedSource()) &&
            this.isEditMode()
          );
        }
        update() {
          this._invalidated = !0;
        }
        isLocked() {
          return Boolean(this._source.isLocked && this._source.isLocked());
        }
        addAnchors(e, t) {
          let i = this._points;
          this._model.lineBeingCreated() === this._source &&
            (i = i.slice(0, -1));
          const n = i.map((e, t) => {
            const i = this._source.points()[t],
              n = e;
            return (
              (n.snappingPrice = null == i ? void 0 : i.price),
              (n.snappingIndex = null == i ? void 0 : i.index),
              n
            );
          });
          e.append(
            this.createLineAnchor({ ...(null != t ? t : {}), points: n }, 0),
          );
        }
        createLineAnchor(e, t) {
          var i;
          if (this.isLocked()) {
            const i = this._getSelectionRenderer(t);
            return (
              i.setData({
                bgColors: this._lineAnchorColors(e.points),
                points: e.points,
                visible: this.areAnchorsVisible(),
                hittestResult: a.HitTestResult.REGULAR,
                barSpacing: this._model.timeScale().barSpacing(),
              }),
              i
            );
          }
          const n = (0, s.lastMouseOrTouchEventInfo)().isTouch,
            r = this._getLineAnchorRenderer(t);
          return (
            r.setData({
              ...e,
              color: this.anchorColor(),
              backgroundColors: this._lineAnchorColors(e.points),
              currentPoint: this.currentPoint(),
              linePointBeingEdited: this.isBeingEdited()
                ? this._model.linePointBeingEdited()
                : null,
              hittestResult:
                null !== (i = e.hittestResult) && void 0 !== i
                  ? i
                  : a.HitTestResult.CHANGEPOINT,
              radius: n ? 13 : 6,
              strokeWidth: n ? 2 : 1,
              selected: this.isSelectedSource(),
              selectedStrokeWidth: n ? 0 : 3,
              visible: this.areAnchorsVisible(),
            }),
            r
          );
        }
        _lineAnchorColors(e) {
          const t = (0, h.ensureNotNull)(
            this._model.paneForSource(this._source),
          ).height();
          return e.map((e) =>
            this._model.backgroundColorAtYPercentFromTop(e.y / t),
          );
        }
        _updateImpl(e, t) {
          this._points = [];
          if (this._model.timeScale().isEmpty()) return;
          if (!this._validatePriceScale()) return;
          const i = this._source.points();
          for (let e = 0; e < i.length; e++) {
            const t = i[e],
              n = this._source.pointToScreenPoint(t);
            if (!n) return;
            const r = n;
            (r.data = e), this._points.push(r);
          }
          2 === this._points.length &&
            (this._middlePoint = this._source.calcMiddlePoint(
              this._points[0],
              this._points[1],
            )),
            (this._invalidated = !1);
        }
        _validatePriceScale() {
          const e = this._source.priceScale();
          return null !== e && !e.isEmpty();
        }
        _getSource() {
          return this._source;
        }
        _getPoints() {
          return this._points;
        }
        _getModel() {
          return this._model;
        }
        _height() {
          const e = this._source.priceScale();
          return null !== e ? e.height() : 0;
        }
        _width() {
          return this._model.timeScale().width();
        }
        _getSelectionRenderer(e) {
          for (; this._selectionRenderers.length <= e; )
            this._selectionRenderers.push(new o.SelectionRenderer());
          return this._selectionRenderers[e];
        }
        _getLineAnchorRenderer(e) {
          for (; this._lineAnchorRenderers.length <= e; )
            this._lineAnchorRenderers.push(new l.LineAnchorRenderer());
          return this._lineAnchorRenderers[e];
        }
      }
    },
    69473: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { LineToolBeingCreatedPaneView: () => c });
      var n = i(53312),
        r = i(67857),
        s = i(33420),
        a = i(71172),
        o = i(87088),
        l = i(69819),
        d = i(6397);
      const h = n.colorsPalette['color-cold-gray-500'];
      class c extends r.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._lineRenderer1 = new l.VerticalLineRenderer()),
            (this._lineRenderer2 = new l.VerticalLineRenderer()),
            (this._medianRenderer = new d.TrendLineRenderer()),
            (this._renderer = null);
        }
        renderer() {
          return (
            this._invalidated && (this._updateImpl(), (this._invalidated = !1)),
            this._renderer
          );
        }
        _updateImpl() {
          super._updateImpl(), (this._renderer = null);
          const e = this._getPoints();
          if (e.length < 1) return;
          this._renderer = new o.CompositeRenderer();
          const [t, i] = e;
          this._lineRenderer1.setData({
            x: t.x,
            color: h,
            linewidth: 1,
            linestyle: s.LINESTYLE_SOLID,
          }),
            this._renderer.append(this._lineRenderer1),
            e.length > 1 &&
              (this._lineRenderer2.setData({
                x: i.x,
                color: h,
                linewidth: 1,
                linestyle: s.LINESTYLE_SOLID,
              }),
              this._medianRenderer.setData({
                points: [t, i],
                color: h,
                linewidth: 1,
                linestyle: s.LINESTYLE_SOLID,
                extendleft: !1,
                extendright: !1,
                leftend: a.LineEnd.Normal,
                rightend: a.LineEnd.Normal,
              }),
              this._renderer.append(this._lineRenderer2),
              this._renderer.append(this._medianRenderer));
        }
      }
    },
    44993: (e, t, i) => {
      'use strict';
      i.d(t, { LineToolPaneViewWithLevelledTextCache: () => o });
      var n = i(16282),
        r = i(67857),
        s = i(57583),
        a = i(8356);
      class o extends r.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._cache = null),
            (this._cacheDrawParams = null),
            (this._cacheInvalidated = !0);
        }
        getCacheCanvas(e) {
          return (
            this._createCacheIfRequired(e),
            (0, n.ensureNotNull)(this._cache).canvas()
          );
        }
        getCacheRects(e, t) {
          return this._createCacheIfRequired(e), null;
        }
        destroy() {
          var e;
          null === (e = this._cache) || void 0 === e || e.destroy();
        }
        _updateImpl() {
          super._updateImpl(), (this._cacheInvalidated = !0);
        }
        _createCache(e) {
          return new s.LevelledLineToolLabelsCache(
            this._source.properties().fibLevelsBasedOnLogScale,
            this._source.levelsCount(),
            e,
          );
        }
        _createCacheIfRequired(e) {
          var t;
          (null !== this._cache &&
            null !== this._cacheDrawParams &&
            (0, a.areEqualPaneRenderParams)(e, this._cacheDrawParams)) ||
            (null === (t = this._cache) || void 0 === t || t.destroy(),
            (this._cache = this._createCache(e)),
            (this._cacheState = this._cache.updateSource(this._source)),
            (this._cacheDrawParams = e),
            (this._cacheInvalidated = !1)),
            this._cacheInvalidated &&
              ((this._cacheState = this._cache.updateSource(this._source)),
              (this._cacheInvalidated = !1));
        }
      }
    },
    50093: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { NotePaneView: () => x });
      var n = i(67857),
        r = i(87088),
        s = i(73301),
        a = i(10288),
        o = i(16282),
        l = i(44896),
        d = i(50968),
        h = i(76553),
        c = i(16932),
        u = i(8356),
        _ = i(72927),
        p = i(71044);
      class g {
        constructor(e) {
          (this._data = null),
            (this._sourceCanvas = null),
            (this._translate = new _.Point(0, 0)),
            (this._renderParams = e);
        }
        destroy() {
          var e;
          null === (e = this._sourceCanvas) || void 0 === e || e.remove();
        }
        renderParams() {
          return this._renderParams;
        }
        update(e) {
          var t, i;
          (t = this._data),
            (i = e),
            (null === t ||
              t.markerColor !== i.markerColor ||
              t.borderColor !== i.borderColor ||
              t.width !== i.width ||
              t.height !== i.height) &&
              this._createSource(e.width, e.height, e.markerColor),
            (this._data = e);
        }
        drawOn(e) {
          const t = (0, o.ensureNotNull)(this._data),
            i = new _.Point(Math.round(t.point.x), Math.round(t.point.y)).add(
              this._translate,
            );
          e.drawImage(
            (0, o.ensureNotNull)(this._sourceCanvas),
            Math.round(i.x * this._renderParams.pixelRatio),
            Math.round(i.y * this._renderParams.pixelRatio),
            Math.round(t.width * this._renderParams.pixelRatio),
            Math.round(t.height * this._renderParams.pixelRatio),
          );
        }
        hasPoint(e) {
          const t = (0, o.ensureNotNull)(this._data),
            i = t.point.add(this._translate),
            n = new _.Point(t.point.x - this._translate.x, t.point.y);
          return (0, p.pointInBox)(e, (0, _.box)(i, n));
        }
        _createSource(e, t, i) {
          (this._sourceCanvas = (0, c.createDisconnectedCanvas)(
            document,
            new c.Size(e, t),
            this._renderParams.pixelRatio,
          )),
            (this._translate = new _.Point(-e / 2, 0.5 - t)),
            this._translate.x % 1 == 0 &&
              (this._translate = new _.Point(
                this._translate.x + 0.5,
                this._translate.y,
              ));
          const n = (0, o.ensureNotNull)(this._sourceCanvas.getContext('2d'));
          (0, c.drawScaled)(n, this._renderParams.pixelRatio, () => {
            const r = 0.6 * e;
            (n.fillStyle = i),
              n.beginPath(),
              n.moveTo(e / 2, t),
              n.quadraticCurveTo(e, e / 1.15, e, e / 2),
              n.arc(e / 2, e / 2, e / 2, 0, Math.PI, !0),
              n.quadraticCurveTo(0, e / 1.15, e / 2, t),
              n.fill(),
              (n.globalCompositeOperation = 'destination-out'),
              n.beginPath(),
              n.moveTo((e - r) / 2, e / 2),
              n.arc(e / 2, e / 2, r / 2, 0, 2 * Math.PI),
              n.fill();
          });
        }
      }
      class f {
        constructor() {
          (this._source = null), (this._data = null);
        }
        setData(e) {
          (this._data = e), this._source && this._source.update(e);
        }
        draw(e, t) {
          var i;
          if (null === this._data) return;
          (null !== this._source &&
            (0, u.areEqualPaneRenderParams)(this._source.renderParams(), t)) ||
            (null === (i = this._source) || void 0 === i || i.destroy(),
            (this._source = new g(t)),
            this._source.update(this._data));
          this._source.drawOn(e),
            this._data.tooltipVisible && this._drawTooltipOn(e, t);
        }
        hitTest(e) {
          return null !== this._data &&
            null !== this._source &&
            this._source.hasPoint(e)
            ? new a.HitTestResult(a.HitTestResult.MOVEPOINT)
            : null;
        }
        _drawTooltipOn(e, t) {
          e.save(), e.translate(0.5, 0.5);
          const i = (0, o.ensureNotNull)(this._data),
            n = String(i.text).replace(/^\s+|\s+$/g, '');
          e.font =
            (i.bold ? 'bold ' : '') +
            (i.italic ? 'italic ' : '') +
            i.fontSize +
            'px ' +
            i.font;
          const r = i.tooltipWidth - 2 * i.tooltipPadding,
            s = (0, l.wordWrap)(n, e.font, r),
            a = i.point,
            u = i.tooltipLineSpacing;
          let _ = i.tooltipWidth,
            p = s.length * i.fontSize + 2 * i.tooltipPadding;
          s.length > 1 && (p += (s.length - 1) * u);
          let g = Math.round(a.x - _ / 2),
            f = Math.round(a.y - i.height - p - 8);
          const v = a.x < 20 || a.x + 20 > i.vpWidth;
          let x = v ? null : 'top',
            w = v ? 0 : Math.round(a.x);
          f < 10 ? (f = a.y + 13) : (x = 'bottom'),
            g < 10
              ? (g += Math.abs(g - 10))
              : g + _ + 10 > i.vpWidth && (g -= g + _ + 10 - i.vpWidth),
            (e.fillStyle = (0, d.generateColor)(
              i.backgroundColor,
              i.backgroundTransparency,
            )),
            (e.strokeStyle = i.borderColor),
            (e.lineWidth = 1),
            e.beginPath();
          const m = Math.round(g * t.pixelRatio),
            R = Math.round(f * t.pixelRatio);
          (w = Math.round(w * t.pixelRatio)),
            (p = Math.round(p * t.pixelRatio)),
            (_ = Math.round(_ * t.pixelRatio));
          const y = Math.round(7 * t.pixelRatio);
          e.moveTo(m, R),
            v ||
              'top' !== x ||
              (e.lineTo(w - y, R), e.lineTo(w, R - y), e.lineTo(w + y, R)),
            e.lineTo(m + _, R),
            e.lineTo(m + _, R + p),
            v ||
              'bottom' !== x ||
              (e.lineTo(w + y, R + p),
              e.lineTo(w, R + p + y),
              e.lineTo(w - y, R + p)),
            e.lineTo(m, R + p),
            e.closePath(),
            e.fill(),
            e.stroke(),
            (e.textBaseline = 'middle'),
            (e.fillStyle = i.textColor),
            (e.textAlign = (0, h.isRtl)() ? 'right' : 'left');
          const T = (0, c.calcTextHorizontalShift)(e, r),
            b = g + i.tooltipPadding + T;
          let L = f + i.tooltipPadding + i.fontSize / 2;
          (0, c.drawScaled)(e, t.pixelRatio, () => {
            for (let t = 0; t < s.length; t++)
              e.fillText(s[t].replace(/^\s+/, ''), b, L), (L += i.fontSize + u);
          }),
            e.restore();
        }
      }
      var v = i(54837);
      class x extends n.LineSourcePaneView {
        constructor(e, t) {
          super(e, t), (this._renderer = null), (this._noteRenderer = new f());
        }
        isLabelVisible() {
          return this.isHoveredSource() || this.isSelectedSource();
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl(), (this._renderer = null);
          const e = this._getSource(),
            t = this._source.isFixed() ? e.fixedPoints() : this._points;
          if (t.length < 1) return;
          const i = new r.CompositeRenderer(),
            n = this.isLabelVisible(),
            o = this._source.properties().childs(),
            l = {
              text: o.text.value(),
              bold: o.bold.value(),
              italic: o.italic.value(),
              font: v.CHART_FONT_FAMILY,
              fontSize: o.fontSize.value(),
              backgroundColor: o.backgroundColor.value(),
              backgroundTransparency: o.backgroundTransparency.value(),
              borderColor: o.borderColor.value(),
              textColor: o.textColor.value(),
              markerColor: o.markerColor.value(),
              point: t[0],
              width: 24,
              height: 32,
              tooltipVisible: n,
              vpWidth: this._model.timeScale().width(),
              tooltipWidth: e.getTooltipWidth(),
              tooltipPadding: e.getTooltipPadding(),
              tooltipLineSpacing: e.getTooltipLineSpacing(),
            };
          this._noteRenderer.setData(l),
            i.append(this._noteRenderer),
            i.append(
              new s.SelectionRenderer({
                points: t,
                bgColors: this._lineAnchorColors(t),
                visible: this.areAnchorsVisible(),
                barSpacing: this._model.timeScale().barSpacing(),
                hittestResult: a.HitTestResult.MOVEPOINT,
              }),
            ),
            (this._renderer = i);
        }
      }
    },
    76322: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { OrderPaneView: () => v });
      var n = i(72927),
        r = i(67857),
        s = i(87088),
        a = i(79881),
        o = i(14768),
        l = i(5025),
        d = i(58729),
        h = i(10288),
        c = i(22675),
        u = i(55752);
      const _ = (0, a.t)('Modify Order'),
        p = (0, a.t)('Cancel Order');
      class g extends d.ScaledPaneRenderer {
        constructor(e) {
          super(),
            (this._data = null),
            (this._cache = {}),
            (this._data = null),
            (this._adapter = e);
        }
        setData(e) {
          this._data = e;
        }
        hitTest(e, t) {
          if (null === this._data || 0 === this._data.points.length)
            return null;
          const i = this._cache;
          if (e.y < i.top || e.y > i.bottom) return null;
          if (this._adapter.getBlocked() && e.x >= i.left && e.x < i.right)
            return new h.HitTestResult(h.HitTestResult.CUSTOM, {});
          if (
            this._adapter.getEditable() &&
            e.x >= i.left &&
            e.x < i.bodyRight
          ) {
            const e = this._adapter.hasMoveCallback()
              ? h.HitTestResult.MOVEPOINT
              : h.HitTestResult.REGULAR;
            return 0 === this._adapter.getTooltip().length
              ? new h.HitTestResult(e)
              : new h.HitTestResult(e, {
                  tooltip: {
                    text: this._adapter.getTooltip(),
                    rect: {
                      x: i.left,
                      y: i.top,
                      w: i.bodyRight - i.left,
                      h: i.bottom - i.top,
                    },
                  },
                });
          }
          return this._adapter.getEditable() &&
            e.x >= i.bodyRight &&
            e.x < i.quantityRight
            ? this._adapter.hasModifyCallback()
              ? new h.HitTestResult(h.HitTestResult.CUSTOM, {
                  clickHandler: this._adapter.callOnModify.bind(this._adapter),
                  tapHandler: this._adapter.callOnModify.bind(this._adapter),
                  tooltip: {
                    text:
                      this._adapter.getModifyTooltip() ||
                      (0, c.appendEllipsis)(_),
                    rect: {
                      x: i.bodyRight,
                      y: i.top,
                      w: i.quantityRight - i.bodyRight,
                      h: i.bottom - i.top,
                    },
                  },
                })
              : new h.HitTestResult(h.HitTestResult.REGULAR)
            : this._adapter.getCancellable() &&
              e.x >= i.quantityRight &&
              e.x < i.right
            ? new h.HitTestResult(h.HitTestResult.CUSTOM, {
                clickHandler: this._adapter.callOnCancel.bind(this._adapter),
                tapHandler: this._adapter.callOnCancel.bind(this._adapter),
                tooltip: {
                  text: this._adapter.getCancelTooltip() || p,
                  rect: {
                    x: i.quantityRight,
                    y: i.top,
                    w: i.right - i.quantityRight,
                    h: i.bottom - i.top,
                  },
                },
              })
            : null;
        }
        _drawImpl(e, t) {
          if (
            null === this._data ||
            !this._data.points ||
            this._data.points.length < 1
          )
            return;
          const i = t.cssWidth,
            n = this._bodyWidth(e),
            r = this._quantityWidth(e),
            s = n + r + this._cancelButtonWidth(),
            a = i - s,
            o = Math.max((this._adapter.getLineLength() / 100) * i, 1),
            l = Math.round(i - Math.min(a, o)),
            d = l - s,
            h = Math.round(this._data.points[0].y),
            c = Math.round(h - (this._height() + 1) / 2);
          (this._cache.bodyRight = d + n),
            (this._cache.quantityRight = d + n + r),
            (this._cache.top = c),
            (this._cache.bottom = c + this._height()),
            (this._cache.left = d),
            (this._cache.right = l),
            this._drawLines(e, d, l, h, i);
          let u = !1;
          0 !== n &&
            (this._drawBody(e, d, c),
            this._adapter.hasMoveCallback() && this._drawMovePoints(e, d, c),
            this._drawBodyText(e, d, c),
            (u = !0)),
            0 !== r &&
              (this._drawQuantity(e, d + n, c, u),
              this._drawQuantityText(e, d + n, c),
              (u = !0)),
            0 !== this._cancelButtonWidth() &&
              this._drawCancelButton(e, d + n + r, c, u);
        }
        _height() {
          return Math.max(
            20,
            1 +
              Math.max(
                u.fontHeight(this._adapter.getBodyFont()),
                u.fontHeight(this._adapter.getQuantityFont()),
              ),
          );
        }
        _bodyWidth(e) {
          if (0 === this._adapter.getText().length) return 0;
          e.save(), (e.font = this._adapter.getBodyFont());
          const t = e.measureText(this._adapter.getText()).width;
          return e.restore(), Math.round(20 + t);
        }
        _getQuantity() {
          return (0, o.splitThousands)(this._adapter.getQuantity(), ' ');
        }
        _quantityWidth(e) {
          if (0 === this._getQuantity().length) return 0;
          e.save(), (e.font = this._adapter.getQuantityFont());
          const t = e.measureText(this._getQuantity()).width;
          return e.restore(), Math.round(Math.max(this._height(), 10 + t));
        }
        _cancelButtonWidth() {
          return this._adapter.isOnCancelCallbackPresent() ? this._height() : 0;
        }
        _drawLines(e, t, i, n, r) {
          e.save(),
            (e.strokeStyle = this._adapter.getLineColor()),
            (0, l.setLineStyle)(e, this._adapter.getLineStyle()),
            (e.lineWidth = this._adapter.getLineWidth()),
            (0, l.drawLine)(e, i, n, r, n),
            this._adapter.getExtendLeft() && (0, l.drawLine)(e, 0, n, t, n),
            e.restore();
        }
        _drawMovePoints(e, t, i) {
          e.save(),
            (e.strokeStyle = this._adapter.getBodyBorderColor()),
            (e.fillStyle = this._adapter.getBodyBorderColor());
          const n = t + 4,
            r = n + 2,
            s = Math.floor((this._height() - 10) / 2) + 1;
          for (let t = 0; t < s; ++t) {
            const s = i + 5 + 2 * t;
            (0, l.drawLine)(e, n, s, r, s);
          }
          e.restore();
        }
        _drawBody(e, t, i) {
          (e.strokeStyle = this._adapter.getBodyBorderColor()),
            (e.fillStyle = this._adapter.getBodyBackgroundColor());
          const n = this._bodyWidth(e),
            r = this._height();
          e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1), e.strokeRect(t, i, n, r);
        }
        _drawBodyText(e, t, i) {
          (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getBodyFont()),
            (e.fillStyle = this._adapter.getBodyTextColor());
          const n = t + this._bodyWidth(e) / 2,
            r = i + this._height() / 2;
          e.fillText(this._adapter.getText(), 5 + n - 2, r);
        }
        _drawQuantity(e, t, i, n) {
          e.save(),
            (e.strokeStyle = this._adapter.getQuantityBorderColor()),
            (e.fillStyle = this._adapter.getQuantityBackgroundColor());
          const r = this._quantityWidth(e),
            s = this._height();
          e.fillRect(t + 0.5, i + 0.5, r - 1, s - 1),
            n &&
              e.clip &&
              (e.beginPath(), e.rect(t + 0.5, i - 0.5, r + 1, s + 1), e.clip()),
            e.strokeRect(t, i, r, s),
            e.restore();
        }
        _drawQuantityText(e, t, i) {
          e.save(),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getQuantityFont()),
            (e.fillStyle = this._adapter.getQuantityTextColor());
          const n = t + this._quantityWidth(e) / 2,
            r = i + this._height() / 2;
          e.fillText(this._getQuantity(), n, r), e.restore();
        }
        _drawCancelButton(e, t, i, r) {
          (e.strokeStyle = this._adapter.getCancelButtonBorderColor()),
            (e.fillStyle = this._adapter.getCancelButtonBackgroundColor());
          const s = this._cancelButtonWidth(),
            a = this._height();
          e.fillRect(t + 0.5, i + 0.5, s - 1, a - 1),
            this._adapter.getBlocked() &&
              ((e.fillStyle = 'rgba(140, 140, 140, 0.75)'),
              e.fillRect(t + 0.5, i + 0.5, s - 1, a - 1)),
            e.save(),
            r &&
              e.clip &&
              (e.beginPath(), e.rect(t + 0.5, i - 0.5, s + 1, a + 1), e.clip()),
            e.strokeRect(t, i, s, a),
            e.restore();
          const o = t + s,
            d = i + a;
          e.strokeStyle = this._adapter.getCancelButtonIconColor();
          const h = (this._cancelButtonWidth() - 8) / 2,
            c = (this._height() - 8) / 2;
          (0, l.drawPoly)(
            e,
            [new n.Point(t + h, i + c), new n.Point(o - h, d - c)],
            !0,
          ),
            (0, l.drawPoly)(
              e,
              [new n.Point(o - h, i + c), new n.Point(t + h, d - c)],
              !0,
            );
        }
      }
      var f = i(73301);
      class v extends r.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._renderer = new s.CompositeRenderer()),
            (this._selectionRenderer = new f.SelectionRenderer()),
            (this._selectionData = null),
            (this._adapter = e.adapter()),
            (this._orderRenderer = new g(e.adapter())),
            this._renderer.append(this._orderRenderer),
            this._renderer.append(this._selectionRenderer);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(t), this._renderer;
        }
        _updateImpl(e) {
          if (
            (super._updateImpl(),
            (this._selectionData = null),
            this.isSelectedSource() && this._points.length > 0)
          ) {
            const t = this._points[0].y,
              i = e - 3.5 - 1,
              r = this._adapter.hasMoveCallback()
                ? h.HitTestResult.MOVEPOINT
                : h.HitTestResult.REGULAR,
              s = [new n.Point(i, t)];
            this._selectionData = {
              barSpacing: this._model.timeScale().barSpacing(),
              points: s,
              bgColors: this._lineAnchorColors(s),
              hittestResult: r,
              visible: !0,
            };
          }
          this._orderRenderer.setData({ points: this._points }),
            this._selectionRenderer.setData(this._selectionData);
        }
      }
    },
    98906: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { ParallelChannelPaneView: () => d });
      var n = i(72927),
        r = i(10992),
        s = i(87088),
        a = i(21498),
        o = i(67857);
      const l = [
        r.PaneCursorType.Default,
        r.PaneCursorType.Default,
        r.PaneCursorType.Default,
        r.PaneCursorType.Default,
        r.PaneCursorType.VerticalResize,
        r.PaneCursorType.VerticalResize,
      ];
      class d extends o.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._channelRenderer = new a.ParallelChannelRenderer()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl(), (this._renderer = null);
          const e = this._source.priceScale();
          if (!e || e.isEmpty()) return;
          if (0 === this._source.points().length) return;
          let t = null,
            i = null;
          if (3 === this._points.length) {
            const e = this._points[0],
              r = this._points[1],
              s = this._points[2].y - this._points[0].y;
            (t = e.add((0, n.point)(0, s))), (i = r.add((0, n.point)(0, s)));
          }
          if (this._points.length <= 1) return;
          const r = this._source.properties(),
            a = {
              points:
                this._points.length > 2 && null !== t && null !== i
                  ? [this._points[0], this._points[1], t, i]
                  : [this._points[0], this._points[1]],
              color: r.childs().linecolor.value(),
              linewidth: r.childs().linewidth.value(),
              linestyle: r.childs().linestyle.value(),
              extendleft: r.childs().extendLeft.value(),
              extendright: r.childs().extendRight.value(),
              fillBackground: r.childs().fillBackground.value(),
              backcolor: r.childs().backgroundColor.value(),
              transparency: r.childs().transparency.value(),
              showMidline: r.childs().showMidline.value(),
              midlinewidth: r.childs().midlinewidth.value(),
              midlinestyle: r.childs().midlinestyle.value(),
              midcolor: r.childs().midlinecolor.value(),
              hittestOnBackground: !0,
            };
          this._channelRenderer.setData(a);
          const o = new s.CompositeRenderer();
          o.append(this._channelRenderer);
          const d = [];
          if (
            (this._points[0] && d.push(this._points[0]),
            this._points[1] && d.push(this._points[1]),
            t && i)
          ) {
            const e = t;
            (e.data = 2), d.push(e);
            const n = i;
            (n.data = 3), d.push(n);
            const r = t.add(i).scaled(0.5);
            (r.data = 4), (r.square = !0), d.push(r);
            const s = d[0].add(d[1]).scaled(0.5);
            (s.data = 5), (s.square = !0), d.push(s);
          }
          const h = 3 === this._points.length && !t;
          this._model.lineBeingCreated() !== this._source ||
            h ||
            (d.pop(), d.pop()),
            o.append(
              this.createLineAnchor({ points: d, pointsCursorType: l }, 0),
            ),
            (this._renderer = o);
        }
      }
    },
    71544: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { PathPaneView: () => a });
      var n = i(59943),
        r = i(87088),
        s = i(67857);
      class a extends s.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._polygonRenderer = new n.PolygonRenderer()),
            (this._renderer = new r.CompositeRenderer());
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl(), this._renderer.clear();
          const e = this._source.properties().childs(),
            t = {
              points: this._points,
              color: e.lineColor.value(),
              linewidth: e.lineWidth.value(),
              linestyle: e.lineStyle.value(),
              leftend: e.leftEnd.value(),
              rightend: e.rightEnd.value(),
              filled: !1,
              backcolor: '',
              fillBackground: !1,
              transparency: 0,
            };
          this._polygonRenderer.setData(t),
            this._renderer.append(this._polygonRenderer),
            this.addAnchors(this._renderer);
        }
      }
    },
    24425: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { PitchfanLinePaneView: () => d });
      var n = i(10288),
        r = i(16758),
        s = i(87088),
        a = i(71172),
        o = i(6397),
        l = i(67857);
      class d extends l.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._medianRenderer = new o.TrendLineRenderer()),
            (this._sideRenderer = new o.TrendLineRenderer()),
            (this._renderer = null),
            (this._medianPoint = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            0 === this._points.length)
          )
            return;
          if (
            (3 === this._points.length
              ? ((this._medianPoint = this._points[1]
                  .add(this._points[2])
                  .scaled(0.5)),
                (this._medianPoint.data = 3))
              : 2 === this._points.length
              ? ((this._medianPoint = this._points[1].clone()),
                (this._medianPoint.data = 3))
              : ((this._medianPoint = this._points[0].clone()),
                (this._medianPoint.data = 3)),
            this._points.length < 2)
          )
            return;
          if (!this._medianPoint) return;
          const e = new s.CompositeRenderer(),
            t = this._source.properties().childs(),
            i = t.median.childs(),
            l = {
              points: [this._points[0], this._medianPoint],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: !1,
              extendright: !0,
              leftend: a.LineEnd.Normal,
              rightend: a.LineEnd.Normal,
            };
          if (
            (this._medianRenderer.setData(l),
            e.append(this._medianRenderer),
            this._points.length < 3)
          )
            return this.addAnchors(e), void (this._renderer = e);
          const d = {
            points: [this._points[1], this._points[2]],
            color: i.color.value(),
            linewidth: i.linewidth.value(),
            linestyle: i.linestyle.value(),
            extendleft: !1,
            extendright: !1,
            leftend: a.LineEnd.Normal,
            rightend: a.LineEnd.Normal,
          };
          this._sideRenderer.setData(d), e.append(this._sideRenderer);
          let h = 0;
          const c = this._points[2].subtract(this._points[1]).scaled(0.5),
            u = t.fillBackground.value(),
            _ = t.transparency.value();
          for (let t = 0; t <= 8; t++) {
            const i = 'level' + t,
              s = this._source.properties().child(i);
            if (s.childs().visible.value()) {
              const i = this._medianPoint.addScaled(
                  c,
                  s.childs().coeff.value(),
                ),
                l = this._medianPoint.addScaled(c, -s.childs().coeff.value());
              if (u) {
                {
                  const t = {
                      p1: this._points[0],
                      p2: i,
                      p3: this._points[0],
                      p4: this._medianPoint.addScaled(c, h),
                      color: s.childs().color.value(),
                      transparency: _,
                      hittestOnBackground: !0,
                      extendLeft: !1,
                    },
                    n = new r.ChannelRenderer();
                  n.setData(t), e.append(n);
                }
                {
                  const t = {
                      p1: this._points[0],
                      p2: l,
                      p3: this._points[0],
                      p4: this._medianPoint.addScaled(c, -h),
                      color: s.childs().color.value(),
                      transparency: _,
                      hittestOnBackground: !0,
                      extendLeft: !1,
                    },
                    i = new r.ChannelRenderer();
                  i.setData(t), e.append(i);
                }
              }
              h = s.childs().coeff.value();
              {
                const r = {
                    points: [this._points[0], i],
                    color: s.childs().color.value(),
                    linewidth: s.childs().linewidth.value(),
                    linestyle: s.childs().linestyle.value(),
                    extendleft: !1,
                    extendright: !0,
                    leftend: a.LineEnd.Normal,
                    rightend: a.LineEnd.Normal,
                  },
                  l = new o.TrendLineRenderer();
                l.setData(r),
                  l.setHitTest(
                    new n.HitTestResult(n.HitTestResult.MOVEPOINT, void 0, t),
                  ),
                  e.append(l);
              }
              {
                const i = {
                    points: [this._points[0], l],
                    color: s.childs().color.value(),
                    linewidth: s.childs().linewidth.value(),
                    linestyle: s.childs().linestyle.value(),
                    extendleft: !1,
                    extendright: !0,
                    leftend: a.LineEnd.Normal,
                    rightend: a.LineEnd.Normal,
                  },
                  r = new o.TrendLineRenderer();
                r.setData(i),
                  r.setHitTest(
                    new n.HitTestResult(n.HitTestResult.MOVEPOINT, void 0, t),
                  ),
                  e.append(r);
              }
            }
          }
          this.addAnchors(e), (this._renderer = e);
        }
      }
    },
    71161: (e, t, i) => {
      'use strict';
      i.r(t),
        i.d(t, {
          PitchforkLinePaneView: () => h,
          SchiffPitchforkLinePaneView: () => c,
          SchiffPitchfork2LinePaneView: () => u,
          InsidePitchforkLinePaneView: () => _,
        });
      var n = i(72927),
        r = i(10288),
        s = i(16758),
        a = i(87088),
        o = i(71172),
        l = i(6397),
        d = i(67857);
      class h extends d.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._medianRenderer = new l.TrendLineRenderer()),
            (this._sideRenderer = new l.TrendLineRenderer()),
            (this._renderer = null),
            (this._medianPoint = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl(),
            (this._renderer = null),
            0 !== this._points.length &&
              (3 === this._points.length
                ? ((this._medianPoint = this._points[1]
                    .add(this._points[2])
                    .scaled(0.5)),
                  (this._medianPoint.data = 3))
                : 2 === this._points.length
                ? ((this._medianPoint = this._points[1].clone()),
                  (this._medianPoint.data = 3))
                : ((this._medianPoint = this._points[0].clone()),
                  (this._medianPoint.data = 3)),
              this._updateRenderer());
        }
        _updateRenderer() {
          if (this._points.length < 2) return;
          if (!this._medianPoint) return;
          const e = this._source.properties(),
            t = e.childs().median.childs(),
            i = new a.CompositeRenderer(),
            n = {
              points: [this._points[0], this._medianPoint],
              color: t.color.value(),
              linewidth: t.linewidth.value(),
              linestyle: t.linestyle.value(),
              extendleft: e.childs().extendLines.value(),
              extendright: !0,
              leftend: o.LineEnd.Normal,
              rightend: o.LineEnd.Normal,
            };
          if (
            (this._medianRenderer.setData(n),
            i.append(this._medianRenderer),
            this._points.length < 3)
          )
            return this.addAnchors(i), void (this._renderer = i);
          const d = {
            points: [this._points[1], this._points[2]],
            color: t.color.value(),
            linewidth: t.linewidth.value(),
            linestyle: t.linestyle.value(),
            extendleft: !1,
            extendright: !1,
            leftend: o.LineEnd.Normal,
            rightend: o.LineEnd.Normal,
          };
          this._sideRenderer.setData(d), i.append(this._sideRenderer);
          const h = this._points[2].subtract(this._points[1]).scaled(0.5),
            c = this._medianPoint.subtract(this._points[0]);
          let u = 0;
          const _ = e.childs().fillBackground.value(),
            p = e.childs().transparency.value();
          for (let t = 0; t <= 8; t++) {
            const n = 'level' + t,
              a = e.childs()[n];
            if (a.childs().visible.value()) {
              const n = this._medianPoint.addScaled(
                  h,
                  a.childs().coeff.value(),
                ),
                d = n.add(c),
                g = this._medianPoint.addScaled(h, -a.childs().coeff.value()),
                f = g.add(c);
              if (_) {
                {
                  const t = this._medianPoint.addScaled(h, u),
                    r = {
                      p1: n,
                      p2: d,
                      p3: t,
                      p4: t.add(c),
                      color: a.childs().color.value(),
                      transparency: p,
                      hittestOnBackground: !0,
                      extendLeft: e.childs().extendLines.value(),
                    },
                    o = new s.ChannelRenderer();
                  o.setData(r), i.append(o);
                }
                {
                  const t = this._medianPoint.addScaled(h, -u),
                    n = {
                      p1: g,
                      p2: f,
                      p3: t,
                      p4: t.add(c),
                      color: a.childs().color.value(),
                      transparency: p,
                      hittestOnBackground: !0,
                      extendLeft: e.childs().extendLines.value(),
                    },
                    r = new s.ChannelRenderer();
                  r.setData(n), i.append(r);
                }
              }
              u = a.childs().coeff.value();
              const v = {
                  points: [n, d],
                  color: a.childs().color.value(),
                  linewidth: a.childs().linewidth.value(),
                  linestyle: a.childs().linestyle.value(),
                  extendleft: e.childs().extendLines.value(),
                  extendright: !0,
                  leftend: o.LineEnd.Normal,
                  rightend: o.LineEnd.Normal,
                },
                x = new l.TrendLineRenderer();
              x.setData(v),
                x.setHitTest(
                  new r.HitTestResult(r.HitTestResult.MOVEPOINT, void 0, t),
                ),
                i.append(x);
              const w = {
                  points: [g, f],
                  color: a.childs().color.value(),
                  linewidth: a.childs().linewidth.value(),
                  linestyle: a.childs().linestyle.value(),
                  extendleft: e.childs().extendLines.value(),
                  extendright: !0,
                  leftend: o.LineEnd.Normal,
                  rightend: o.LineEnd.Normal,
                },
                m = new l.TrendLineRenderer();
              m.setData(w),
                m.setHitTest(
                  new r.HitTestResult(r.HitTestResult.MOVEPOINT, void 0, t),
                ),
                i.append(m);
            }
          }
          this.addAnchors(i), (this._renderer = i);
        }
      }
      class c extends h {
        constructor() {
          super(...arguments),
            (this._modifiedBase = null),
            (this._backSideRenderer = new l.TrendLineRenderer());
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateRenderer() {
          if (this._points.length < 2) return;
          this._calcMofifiedBase();
          const e = this._source.properties(),
            t = new a.CompositeRenderer(),
            i = e.childs().median.childs();
          {
            const e = {
              points: [this._points[0], this._points[1]],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: o.LineEnd.Normal,
              rightend: o.LineEnd.Normal,
            };
            if (
              (this._backSideRenderer.setData(e),
              t.append(this._backSideRenderer),
              !this._medianPoint || !this._modifiedBase)
            )
              return this.addAnchors(t), void (this._renderer = t);
          }
          {
            const n = {
              points: [this._modifiedBase, this._medianPoint],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: e.childs().extendLines.value(),
              extendright: !0,
              leftend: o.LineEnd.Normal,
              rightend: o.LineEnd.Normal,
            };
            if (
              (this._medianRenderer.setData(n),
              t.append(this._medianRenderer),
              this._points.length < 3)
            )
              return this.addAnchors(t), void (this._renderer = t);
          }
          {
            const e = {
              points: [this._points[1], this._points[2]],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: o.LineEnd.Normal,
              rightend: o.LineEnd.Normal,
            };
            this._sideRenderer.setData(e), t.append(this._sideRenderer);
          }
          {
            const i = this._points[2].subtract(this._points[1]).scaled(0.5),
              n = this._medianPoint.subtract(this._modifiedBase);
            let a = 0;
            const d = e.childs().fillBackground.value(),
              h = e.childs().transparency.value();
            for (let c = 0; c <= 8; c++) {
              const u = 'level' + c,
                _ = e.child(u);
              if (_.childs().visible.value()) {
                const u = this._medianPoint.addScaled(
                    i,
                    _.childs().coeff.value(),
                  ),
                  p = u.add(n),
                  g = this._medianPoint.addScaled(i, -_.childs().coeff.value()),
                  f = g.add(n);
                if (d) {
                  const r = this._medianPoint.addScaled(i, a);
                  {
                    const i = {
                        p1: u,
                        p2: p,
                        p3: r,
                        p4: r.add(n),
                        color: _.childs().color.value(),
                        transparency: h,
                        hittestOnBackground: !0,
                        extendLeft: e.childs().extendLines.value(),
                      },
                      a = new s.ChannelRenderer();
                    a.setData(i), t.append(a);
                  }
                  {
                    const r = this._medianPoint.addScaled(i, -a),
                      o = {
                        p1: g,
                        p2: f,
                        p3: r,
                        p4: r.add(n),
                        color: _.childs().color.value(),
                        transparency: h,
                        hittestOnBackground: !0,
                        extendLeft: e.childs().extendLines.value(),
                      },
                      l = new s.ChannelRenderer();
                    l.setData(o), t.append(l);
                  }
                }
                a = _.childs().coeff.value();
                const v = {
                    points: [u, p],
                    color: _.childs().color.value(),
                    linewidth: _.childs().linewidth.value(),
                    linestyle: _.childs().linestyle.value(),
                    extendleft: e.childs().extendLines.value(),
                    extendright: !0,
                    leftend: o.LineEnd.Normal,
                    rightend: o.LineEnd.Normal,
                  },
                  x = new l.TrendLineRenderer();
                x.setData(v),
                  x.setHitTest(
                    new r.HitTestResult(r.HitTestResult.MOVEPOINT, void 0, c),
                  ),
                  t.append(x);
                const w = {
                    points: [g, f],
                    color: _.childs().color.value(),
                    linewidth: _.childs().linewidth.value(),
                    linestyle: _.childs().linestyle.value(),
                    extendleft: e.childs().extendLines.value(),
                    extendright: !0,
                    leftend: o.LineEnd.Normal,
                    rightend: o.LineEnd.Normal,
                  },
                  m = new l.TrendLineRenderer();
                m.setData(w),
                  m.setHitTest(
                    new r.HitTestResult(r.HitTestResult.MOVEPOINT, void 0, c),
                  ),
                  t.append(m);
              }
            }
          }
          this.addAnchors(t), (this._renderer = t);
        }
        _calcMofifiedBase() {
          this._points.length > 1 &&
            (this._modifiedBase = this._points[0]
              .add(this._points[1])
              .scaled(0.5));
        }
      }
      class u extends c {
        _calcMofifiedBase() {
          if (this._points.length > 2) {
            const e = this._points[0].x,
              t = 0.5 * (this._points[0].y + this._points[1].y),
              i = new n.Point(e, t);
            this._modifiedBase = i;
          }
        }
      }
      class _ extends h {
        constructor() {
          super(...arguments),
            (this._backSideRenderer = new l.TrendLineRenderer()),
            (this._centerRenderer = new l.TrendLineRenderer()),
            (this._modifiedBase = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateRenderer() {
          if (
            (this._points.length > 1 &&
              (this._modifiedBase = this._points[0]
                .add(this._points[1])
                .scaled(0.5)),
            this._points.length < 2)
          )
            return;
          const e = new a.CompositeRenderer();
          if (!this._medianPoint || !this._modifiedBase)
            return void this.addAnchors(e);
          const t = this._source.properties(),
            i = t.childs().median.childs();
          if (3 === this._points.length) {
            const t = {
              points: [this._modifiedBase, this._points[2]],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: o.LineEnd.Normal,
              rightend: o.LineEnd.Normal,
            };
            this._medianRenderer.setData(t), e.append(this._medianRenderer);
          }
          {
            const t = {
              points: [this._points[0], this._points[1]],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: o.LineEnd.Normal,
              rightend: o.LineEnd.Normal,
            };
            if (
              (this._backSideRenderer.setData(t),
              e.append(this._backSideRenderer),
              this._points.length < 3)
            )
              return this.addAnchors(e), void (this._renderer = e);
          }
          {
            const t = {
              points: [this._points[1], this._points[2]],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: o.LineEnd.Normal,
              rightend: o.LineEnd.Normal,
            };
            this._sideRenderer.setData(t), e.append(this._sideRenderer);
          }
          {
            const n = this._points[2].subtract(this._points[1]).scaled(0.5),
              a = this._points[2].subtract(this._modifiedBase);
            let d = 0;
            const h = t.childs().fillBackground.value(),
              c = t.childs().transparency.value(),
              u = {
                points: [this._medianPoint, this._medianPoint.add(a)],
                color: i.color.value(),
                linewidth: i.linewidth.value(),
                linestyle: i.linestyle.value(),
                extendleft: t.childs().extendLines.value(),
                extendright: !0,
                leftend: o.LineEnd.Normal,
                rightend: o.LineEnd.Normal,
              };
            this._centerRenderer.setData(u), e.append(this._centerRenderer);
            for (let i = 0; i <= 8; i++) {
              const u = 'level' + i,
                _ = t.child(u).childs();
              if (_.visible.value()) {
                const u = this._medianPoint.addScaled(n, _.coeff.value()),
                  p = u.add(a),
                  g = this._medianPoint.addScaled(n, -_.coeff.value()),
                  f = g.add(a);
                if (h) {
                  {
                    const i = this._medianPoint.addScaled(n, d),
                      r = {
                        p1: u,
                        p2: p,
                        p3: i,
                        p4: i.add(a),
                        color: _.color.value(),
                        transparency: c,
                        hittestOnBackground: !0,
                        extendLeft: t.childs().extendLines.value(),
                      },
                      o = new s.ChannelRenderer();
                    o.setData(r), e.append(o);
                  }
                  {
                    const i = this._medianPoint.addScaled(n, -d),
                      r = {
                        p1: g,
                        p2: f,
                        p3: i,
                        p4: i.add(a),
                        color: _.color.value(),
                        transparency: c,
                        hittestOnBackground: !0,
                        extendLeft: t.childs().extendLines.value(),
                      },
                      o = new s.ChannelRenderer();
                    o.setData(r), e.append(o);
                  }
                }
                d = _.coeff.value();
                const v = {
                    points: [u, p],
                    color: _.color.value(),
                    linewidth: _.linewidth.value(),
                    linestyle: _.linestyle.value(),
                    extendleft: t.childs().extendLines.value(),
                    extendright: !0,
                    leftend: o.LineEnd.Normal,
                    rightend: o.LineEnd.Normal,
                  },
                  x = new l.TrendLineRenderer();
                x.setData(v),
                  x.setHitTest(
                    new r.HitTestResult(r.HitTestResult.MOVEPOINT, void 0, i),
                  ),
                  e.append(x);
                const w = {
                    points: [g, f],
                    color: _.color.value(),
                    linewidth: _.linewidth.value(),
                    linestyle: _.linestyle.value(),
                    extendleft: t.childs().extendLines.value(),
                    extendright: !0,
                    leftend: o.LineEnd.Normal,
                    rightend: o.LineEnd.Normal,
                  },
                  m = new l.TrendLineRenderer();
                m.setData(w),
                  m.setHitTest(
                    new r.HitTestResult(r.HitTestResult.MOVEPOINT, void 0, i),
                  ),
                  e.append(m);
              }
            }
          }
          this.addAnchors(e), (this._renderer = e);
        }
      }
    },
    177: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { PolylinePaneView: () => a });
      var n = i(59943),
        r = i(87088),
        s = i(67857);
      class a extends s.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._polygonRenderer = new n.PolygonRenderer()),
            (this._renderer = new r.CompositeRenderer());
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl(), this._renderer.clear();
          const e = this._source.properties().childs(),
            t = {
              points: this._points,
              color: e.linecolor.value(),
              linewidth: e.linewidth.value(),
              linestyle: e.linestyle.value(),
              filled: e.filled.value(),
              backcolor: e.backgroundColor.value(),
              fillBackground: e.fillBackground.value(),
              transparency: e.transparency.value(),
            };
          this._polygonRenderer.setData(t),
            this._renderer.append(this._polygonRenderer),
            this.addAnchors(this._renderer);
        }
      }
    },
    44622: (e, t, i) => {
      'use strict';
      var n = i(79881).t,
        r = i(67857).LineSourcePaneView,
        s = i(55752),
        a = i(10288).HitTestResult,
        o = i(14768).splitThousands,
        l = i(76553),
        d = i(22675).appendEllipsis,
        h = i(58729).ScaledPaneRenderer;
      class c extends h {
        constructor(e, t) {
          super(), (this._data = null), (this._cache = e), (this._adapter = t);
        }
        setData(e) {
          this._data = e;
        }
        _height() {
          return Math.max(
            20,
            1 +
              Math.max(
                s.fontHeight(this._adapter.getBodyFont()),
                s.fontHeight(this._adapter.getQuantityFont()),
              ),
          );
        }
        _bodyWidth(e) {
          if (0 === this._adapter.getText().length) return 0;
          e.save(), (e.font = this._adapter.getBodyFont());
          var t = e.measureText(this._adapter.getText()).width;
          return e.restore(), Math.round(10 + t);
        }
        _getQuantity() {
          var e = this._adapter.getQuantity();
          return isNaN(e) ? e : o(this._adapter.getQuantity(), ' ');
        }
        _quantityWidth(e) {
          if (0 === this._getQuantity().length) return 0;
          e.save(), (e.font = this._adapter.getQuantityFont());
          var t = e.measureText(this._getQuantity()).width;
          return e.restore(), Math.round(Math.max(this._height(), 10 + t));
        }
        _reverseButtonWidth() {
          return this._adapter.isOnReverseCallbackPresent()
            ? this._height()
            : 0;
        }
        _closeButtonWidth() {
          return this._adapter.isOnCloseCallbackPresent() ? this._height() : 0;
        }
        _drawLines(e, t, i, n, r) {
          e.save(),
            (e.strokeStyle = this._adapter.getLineColor()),
            (e.lineStyle = this._adapter.getLineStyle()),
            (e.lineWidth = this._adapter.getLineWidth()),
            CanvasEx.drawLine(e, i, n, r, n),
            this._adapter.getExtendLeft() && CanvasEx.drawLine(e, 0, n, t, n),
            e.restore();
        }
        _drawBody(e, t, i) {
          (e.strokeStyle = this._adapter.getBodyBorderColor()),
            (e.fillStyle = this._adapter.getBodyBackgroundColor());
          var n = this._bodyWidth(e),
            r = this._height();
          e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1), e.strokeRect(t, i, n, r);
        }
        _drawBodyText(e, t, i) {
          e.save(),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getBodyFont()),
            (e.fillStyle = this._adapter.getBodyTextColor());
          var n = t + this._bodyWidth(e) / 2,
            r = i + this._height() / 2;
          e.fillText(this._adapter.getText(), n, r), e.restore();
        }
        _drawQuantity(e, t, i) {
          (e.strokeStyle = this._adapter.getQuantityBorderColor()),
            (e.fillStyle = this._adapter.getQuantityBackgroundColor());
          var n = this._quantityWidth(e),
            r = this._height();
          e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1), e.strokeRect(t, i, n, r);
        }
        _drawQuantityText(e, t, i) {
          e.save(),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getQuantityFont()),
            (e.fillStyle = this._adapter.getQuantityTextColor());
          var n = t + this._quantityWidth(e) / 2,
            r = i + this._height() / 2;
          e.fillText(l.startWithLTR(this._getQuantity() + ''), n, r),
            e.restore();
        }
        _drawReverseButton(e, t, i) {
          e.save(),
            (e.strokeStyle = this._adapter.getReverseButtonBorderColor()),
            (e.fillStyle = this._adapter.getReverseButtonBackgroundColor());
          var n = this._reverseButtonWidth(),
            r = this._height();
          e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1),
            e.strokeRect(t, i, n, r),
            (e.strokeStyle = this._adapter.getReverseButtonIconColor());
          var s = function (e, t) {
              CanvasEx.setLineStyle(e, CanvasEx.LINESTYLE_SOLID),
                CanvasEx.drawLine(e, 0, 0, 0, t),
                CanvasEx.drawLine(e, -1, 1, 1, 1),
                CanvasEx.drawLine(e, -2, 2, 2, 2);
            },
            a = t + Math.round((this._reverseButtonWidth() - 6) / 2),
            o = i + 5;
          e.save(),
            e.translate(a, o),
            s(e, 10),
            e.translate(6, 10),
            e.rotate(Math.PI),
            s(e, 10),
            e.restore(),
            this._adapter._blocked &&
              ((e.fillStyle = 'rgba(140, 140, 140, 0.75)'),
              e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1)),
            e.restore();
        }
        _drawCloseButton(e, t, i) {
          e.save(),
            (e.strokeStyle = this._adapter.getCloseButtonBorderColor()),
            (e.fillStyle = this._adapter.getCloseButtonBackgroundColor());
          var n = this._closeButtonWidth(),
            r = this._height();
          e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1), e.strokeRect(t, i, n, r);
          var s = t + n,
            a = i + r;
          e.strokeStyle = this._adapter.getCloseButtonIconColor();
          var o = (this._closeButtonWidth() - 8) / 2,
            l = (this._height() - 8) / 2;
          CanvasEx.drawPoly(
            e,
            [
              { x: t + o, y: i + l },
              { x: s - o, y: a - l },
            ],
            !0,
          ),
            CanvasEx.drawPoly(
              e,
              [
                { x: s - o, y: i + l },
                { x: t + o, y: a - l },
              ],
              !0,
            ),
            this._adapter._blocked &&
              ((e.fillStyle = 'rgba(140, 140, 140, 0.75)'),
              e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1)),
            e.restore();
        }
        _drawImpl(e) {
          if (
            null !== this._data &&
            this._data.points &&
            !(this._data.points.length < 1)
          ) {
            var t = this._data.width,
              i = this._bodyWidth(e),
              n = this._quantityWidth(e),
              r = this._reverseButtonWidth(e),
              s = i + n + r + this._closeButtonWidth(),
              a = t - s,
              o = Math.max((this._adapter.getLineLength() / 100) * t, 1),
              l = Math.round(t - Math.min(a, o)),
              d = l - s,
              h = Math.round(this._data.points[0].y),
              c = Math.round(h - (this._height() + 1) / 2);
            (this._cache.bodyRight = d + i),
              (this._cache.quantityRight = this._cache.bodyRight + n),
              (this._cache.reverseButtonRight = this._cache.quantityRight + r),
              (this._cache.top = c),
              (this._cache.bottom = c + this._height()),
              (this._cache.left = d),
              (this._cache.right = l),
              this._drawLines(e, d, l, h, t),
              0 !== i && (this._drawBody(e, d, c), this._drawBodyText(e, d, c)),
              0 !== n &&
                (this._drawQuantity(e, this._cache.bodyRight, c),
                this._drawQuantityText(e, this._cache.bodyRight, c)),
              0 !== r &&
                this._drawReverseButton(e, this._cache.quantityRight, c),
              0 !== this._closeButtonWidth() &&
                this._drawCloseButton(e, this._cache.reverseButtonRight, c);
          }
        }
        hitTest(e) {
          return null === this._data ||
            0 === this._data.points.length ||
            e.y < this._cache.top ||
            e.y > this._cache.bottom ||
            e.x < this._cache.left ||
            this._cache.right < e.x
            ? null
            : this._adapter._blocked
            ? new a(a.CUSTOM, {})
            : e.x >= this._cache.bodyRight &&
              e.x < this._cache.quantityRight &&
              this._adapter._onModifyCallback
            ? new a(a.CUSTOM, {
                clickHandler: this._adapter.callOnModify.bind(this._adapter),
                tapHandler: this._adapter.callOnModify.bind(this._adapter),
                tooltip: {
                  text:
                    this._adapter.getProtectTooltip() ||
                    d(n('Protect Position')),
                  rect: {
                    x: this._cache.bodyRight,
                    y: this._cache.top,
                    w: this._cache.quantityRight - this._cache.bodyRight,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              })
            : e.x >= this._cache.quantityRight &&
              e.x < this._cache.reverseButtonRight
            ? new a(a.CUSTOM, {
                clickHandler: this._adapter.callOnReverse.bind(this._adapter),
                tapHandler: this._adapter.callOnReverse.bind(this._adapter),
                tooltip: {
                  text:
                    this._adapter.getReverseTooltip() || n('Reverse Position'),
                  rect: {
                    x: this._cache.quantityRight,
                    y: this._cache.top,
                    w:
                      this._cache.reverseButtonRight -
                      this._cache.quantityRight,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              })
            : e.x >= this._cache.reverseButtonRight && e.x < this._cache.right
            ? new a(a.CUSTOM, {
                clickHandler: this._adapter.callOnClose.bind(this._adapter),
                tapHandler: this._adapter.callOnClose.bind(this._adapter),
                tooltip: {
                  text: this._adapter.getCloseTooltip() || n('Close Position'),
                  rect: {
                    x: this._cache.reverseButtonRight,
                    y: this._cache.top,
                    w: this._cache.right - this._cache.reverseButtonRight,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              })
            : new a(a.CUSTOM, {
                clickHandler: function () {},
                tapHandler: function () {},
                tooltip: {
                  text: this._adapter.getTooltip(),
                  rect: {
                    x: this._cache.left,
                    y: this._cache.top,
                    w: this._cache.bodyRight - this._cache.left,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              });
        }
      }
      t.PositionPaneView = class extends r {
        constructor(e, t) {
          super(e, t),
            (this._rendererCache = {}),
            (this._renderer = new c(this._rendererCache, e._adapter));
        }
        renderer(e, t) {
          return (
            this._invalidated && this._updateImpl(),
            this._renderer.setData({
              points: this._points,
              width: this._model.timeScale().width(),
            }),
            this._renderer
          );
        }
      };
    },
    94562: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(79881).t,
        s = i(67857).LineSourcePaneView,
        a = i(35001).Interval,
        o = i(10288).HitTestResult,
        l = i(87088).CompositeRenderer,
        d = i(27867).getImage,
        h = i(57968),
        c = i(62159).PercentageFormatter,
        u = i(54041).DateFormatter,
        _ = i(18675).TimeFormatter,
        p = i(1953).TimeSpanFormatter,
        g = i(50968),
        f = i(84888),
        v = i(16932).calcTextHorizontalShift,
        x = i(76553).isRtl,
        w = i(55430).drawRoundRect,
        m = i(73395).makeFont,
        R = i(58729).ScaledPaneRenderer,
        y = i(76553),
        T = y.forceLTRStr,
        b = y.startWithLTR,
        L = i(54837).CHART_FONT_FAMILY;
      class S extends R {
        constructor() {
          super(),
            (this._data = null),
            (this._font = L),
            (this._targetFontSize1 = 14),
            (this._targetFontSize2 = 11),
            (this._sourceFontSize1 = 12),
            (this._sourceFontSize2 = 10),
            (this._arrowOffset = 6),
            (this._arrowWidth = 5),
            (this._arrowHeight = 5),
            (this._radius = 3),
            (this._sourceWidth = void 0),
            (this._sourceHeight = void 0),
            (this._sourceRectLeftOffset = void 0),
            (this._targetWidth = void 0),
            (this._targetHeight = void 0),
            (this._targetRectLeftOffset = void 0);
        }
        setData(e) {
          this._data = e;
        }
        drawBalloon(e, t, i, r, s, a) {
          var o = a || 20;
          if ((e.beginPath(), 'down' === s)) {
            var l = new n(
              t.x - o,
              t.y - this._arrowOffset - this._arrowHeight - r,
            );
            return (
              e.moveTo(l.x + this._radius, l.y),
              e.lineTo(l.x + i - this._radius, l.y),
              e.arcTo(l.x + i, l.y, l.x + i, l.y + this._radius, this._radius),
              e.lineTo(l.x + i, l.y + r - this._radius),
              e.arcTo(
                l.x + i,
                l.y + r,
                l.x + i - this._radius,
                l.y + r,
                this._radius,
              ),
              e.lineTo(l.x + o + this._arrowWidth, l.y + r),
              e.lineTo(l.x + o, l.y + r + this._arrowHeight),
              e.lineTo(l.x + o - this._arrowWidth, l.y + r),
              e.lineTo(l.x + this._radius, l.y + r),
              e.arcTo(l.x, l.y + r, l.x, l.y + r - this._radius, this._radius),
              e.lineTo(l.x, l.y + this._radius),
              e.arcTo(l.x, l.y, l.x + this._radius, l.y, this._radius),
              l
            );
          }
          var d = new n(
            t.x - o,
            t.y + this._arrowOffset + this._arrowHeight + r,
          );
          return (
            e.moveTo(d.x + this._radius, d.y),
            e.lineTo(d.x + i - this._radius, d.y),
            e.arcTo(d.x + i, d.y, d.x + i, d.y - this._radius, this._radius),
            e.lineTo(d.x + i, d.y - r + this._radius),
            e.arcTo(
              d.x + i,
              d.y - r,
              d.x + i - this._radius,
              d.y - r,
              this._radius,
            ),
            e.lineTo(d.x + o + this._arrowWidth, d.y - r),
            e.lineTo(d.x + o, d.y - r - this._arrowHeight),
            e.lineTo(d.x + o - this._arrowWidth, d.y - r),
            e.lineTo(d.x + this._radius, d.y - r),
            e.arcTo(d.x, d.y - r, d.x, d.y - r + this._radius, this._radius),
            e.lineTo(d.x, d.y - this._radius),
            e.arcTo(d.x, d.y, d.x + this._radius, d.y, this._radius),
            new n(d.x, d.y - r)
          );
        }
        drawTargetLabel(e) {
          e.save(), e.translate(0.5, 0.5);
          var t = m(this._targetFontSize1, this._font, 'normal'),
            i = m(this._targetFontSize2, this._font, 'normal'),
            n = this._data.targetLine1,
            s = this._data.targetLine2,
            a = this._data.targetLine3,
            o = this._data.targetLine4;
          e.font = t;
          var l = e.measureText(n).width,
            d = e.measureText(s).width,
            h = e.measureText(' ').width;
          e.font = i;
          var c = e.measureText(a).width,
            u = e.measureText(o).width,
            _ = e.measureText(' ').width,
            p = (this._data.clockWhite && this._data.clockWhite.width) || 0;
          (this._targetWidth = Math.max(l + d + h, c + u + p + 2 * _) + 8 + 4),
            (this._targetHeight =
              this._targetFontSize1 + this._targetFontSize2 + 9 + 4);
          var R = this._data.points[1],
            y = R.x + this._targetWidth - e.canvas.width + 5;
          this._targetRectLeftOffset = Math.max(
            20,
            Math.min(this._targetWidth - 15, y),
          );
          var T = 'up' === this._data.direction ? 'down' : 'up',
            b = this.drawBalloon(
              e,
              R,
              this._targetWidth,
              this._targetHeight,
              T,
              this._targetRectLeftOffset,
            );
          (e.fillStyle = g.generateColor(
            this._data.targetBackColor,
            this._data.transparency,
          )),
            e.fill(),
            (e.lineWidth = 2),
            (e.strokeStyle = g.generateColor(
              this._data.targetStrokeColor,
              this._data.transparency,
            )),
            e.stroke();
          e.beginPath(),
            e.arc(R.x, R.y, 3, 0, 2 * Math.PI, !1),
            (e.fillStyle = this._data.centersColor),
            e.fill(),
            (e.textBaseline = 'top'),
            (e.fillStyle = this._data.targetTextColor);
          var L = 2 + b.x + 4,
            S = 2 + b.y + 3,
            P = this._targetWidth - 8 - 4;
          (e.font = t), (e.textAlign = x() ? 'right' : 'left');
          var C = v(e, P - d - h);
          e.fillText(n, L + C, S);
          var M = v(e, P - l);
          e.fillText(s, L + l + h + M, S), (e.font = i);
          var I = S + this._targetFontSize1 + 3,
            N = v(e, P - u - p - _);
          e.fillText(a, L + N, I);
          var D = v(e, P - c - _ - p - u);
          this._data.clockWhite &&
            e.drawImage(this._data.clockWhite, L + c + _ + D, I + 1);
          var A = v(e, P - c - p);
          if ((e.fillText(o, L + c + p + 2 * _ + A, I), this._data.status)) {
            var k, E, B, O;
            switch (
              ((e.font = m(this._targetFontSize1, this._font, 'bold')),
              this._data.status)
            ) {
              case f.AlertStatus.Success:
                (k = r('SUCCESS')),
                  (E = g.generateColor(
                    this._data.successBackground,
                    this._data.transparency,
                  )),
                  (B = this._data.successTextColor),
                  (O = this._data.successIcon);
                break;
              case f.AlertStatus.Failure:
                (k = r('FAILURE')),
                  (E = g.generateColor(
                    this._data.failureBackground,
                    this._data.transparency,
                  )),
                  (B = this._data.failureTextColor),
                  (O = this._data.failureIcon);
            }
            var H = this._targetFontSize1 + 4,
              z = e.measureText(k).width,
              V = Math.round((this._targetWidth - z) / 2),
              W = v(e, z);
            (e.fillStyle = E),
              'up' === this._data.direction
                ? (w(e, b.x - 1, b.y - H - 2, this._targetWidth + 2, H, 5),
                  e.fill(),
                  (e.fillStyle = B),
                  e.fillText(k, b.x + V + W, b.y - H + 1),
                  O &&
                    e.drawImage(
                      O,
                      b.x + V - O.width - 4,
                      b.y - H - 2 + Math.abs(H - O.height) / 2,
                    ))
                : (w(
                    e,
                    b.x - 1,
                    b.y + this._targetHeight + 2,
                    this._targetWidth + 2,
                    H,
                    5,
                  ),
                  e.fill(),
                  (e.fillStyle = B),
                  e.fillText(k, b.x + V + W, b.y + this._targetHeight + 5),
                  O &&
                    e.drawImage(
                      O,
                      b.x + V - O.width - 4,
                      b.y +
                        this._targetHeight +
                        10 -
                        Math.abs(H - O.height) / 2,
                    )),
              e.restore();
          } else e.restore();
        }
        drawStartLabel(e) {
          e.save(), e.translate(0.5, 0.5);
          var t = m(this._sourceFontSize1, this._font, 'normal'),
            i = m(this._sourceFontSize2, this._font, 'normal');
          e.font = t;
          var n = e.measureText(this._data.sourceLine1).width;
          e.font = i;
          var r = e.measureText(this._data.sourceLine2).width;
          (this._sourceWidth = Math.max(n, r) + 6 + 4),
            (this._sourceHeight =
              this._sourceFontSize1 + this._sourceFontSize2 + 6 + 4);
          var s = this._data.points[0],
            a = s.x + this._sourceWidth - e.canvas.width + 5;
          this._sourceRectLeftOffset = Math.max(
            20,
            Math.min(this._sourceWidth - 15, a),
          );
          var o = this.drawBalloon(
            e,
            s,
            this._sourceWidth,
            this._sourceHeight,
            this._data.direction,
            this._sourceRectLeftOffset,
          );
          (e.fillStyle = g.generateColor(
            this._data.sourceBackColor,
            this._data.transparency,
          )),
            e.fill(),
            (e.lineWidth = 2),
            (e.strokeStyle = g.generateColor(
              this._data.sourceStrokeColor,
              this._data.transparency,
            )),
            e.stroke(),
            (e.textAlign = x() ? 'right' : 'left'),
            (e.textBaseline = 'top'),
            (e.fillStyle = this._data.sourceTextColor);
          var l = v(e, this._sourceWidth - 6 - 4),
            d = 2 + o.x + 3 + l,
            h = 2 + o.y + 2;
          (e.font = t),
            e.fillText(this._data.sourceLine1, d, h),
            (e.font = i),
            e.fillText(
              this._data.sourceLine2,
              d,
              h + this._sourceFontSize1 + 2,
            );
          e.beginPath(),
            e.arc(s.x, s.y, 3, 0, 2 * Math.PI, !1),
            (e.fillStyle = this._data.centersColor),
            e.fill(),
            e.restore();
        }
        _drawImpl(e) {
          if (!(null === this._data || this._data.points.length < 2)) {
            (e.lineCap = 'butt'),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              (e.lineStyle = this._data.linestyle);
            var t = this._data.points[0],
              i = this._data.points[1],
              n = i.subtract(t);
            Math.abs(n.x) < 1 || Math.abs(n.y) < 1
              ? (e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(i.x, i.y),
                e.stroke())
              : (e.save(),
                e.beginPath(),
                e.translate(t.x, t.y),
                e.scale(1, n.y / n.x),
                e.moveTo(0, 0),
                e.arcTo(n.x, 0, n.x, n.x, Math.abs(n.x)),
                e.lineTo(n.x, n.x),
                e.restore(),
                e.stroke()),
              this.drawTargetLabel(e),
              this.drawStartLabel(e);
            var r = Math.max(8, 4 * this._data.linewidth);
            e.fillStyle = this._data.color;
            var s = n.y < 0 ? 1 : -1;
            if (Math.abs(n.x) < 1 || Math.abs(n.y) < 1)
              var a = Math.atan(n.x / n.y);
            else {
              var o,
                l,
                d = Math.abs(n.x),
                h = Math.abs(n.y),
                c = 0,
                u = Math.PI / 2,
                _ = (c + u) / 2;
              if (n.length() > r)
                for (;;) {
                  (o = d * Math.sin(_)), (l = h * (1 - Math.cos(_)));
                  var p = Math.sqrt((o - d) * (o - d) + (l - h) * (l - h));
                  if (Math.abs(p - r) < 1) break;
                  p > r ? (c = _) : (u = _), (_ = (c + u) / 2);
                }
              (a = Math.atan((d - o) / (h - l))), n.x * n.y < 0 && (a = -a);
            }
            e.save(),
              e.beginPath(),
              e.translate(i.x, i.y),
              e.rotate(-a),
              e.moveTo(0, 0),
              e.lineTo(-r / 2, s * r),
              e.lineTo(r / 2, s * r),
              e.lineTo(0, 0),
              e.restore(),
              e.fill();
          }
        }
        targetLabelHitTest(e) {
          if (
            void 0 === this._targetWidth ||
            void 0 === this._targetHeight ||
            void 0 === this._targetRectLeftOffset
          )
            return null;
          var t = this._targetHeight + this._arrowHeight;
          this._data.status && (t += this._targetFontSize1 + 10);
          var i = 'up' === this._data.direction ? -1 : 1,
            n = this._radius,
            r = this._data.points[1],
            s = r.x - this._targetRectLeftOffset,
            a = r.y + i * n,
            l = r.y + i * (t + n),
            d = Math.min(a, l),
            h = Math.max(a, l);
          return e.x >= s &&
            e.x <= s + this._targetWidth &&
            e.y >= d &&
            e.y <= h
            ? new o(o.MOVEPOINT)
            : null;
        }
        sourceLabelHitTest(e) {
          if (
            void 0 === this._sourceHeight ||
            void 0 === this._sourceWidth ||
            void 0 === this._sourceRectLeftOffset
          )
            return null;
          var t = 'up' === this._data.direction ? 1 : -1,
            i = this._radius,
            n = this._data.points[0],
            r = n.x - this._sourceRectLeftOffset,
            s = n.y + i * t,
            a = n.y + (i + this._sourceHeight + this._arrowHeight) * t,
            l = Math.min(s, a),
            d = Math.max(s, a);
          return e.x >= r &&
            e.x <= r + this._sourceWidth &&
            e.y >= l &&
            e.y <= d
            ? new o(o.MOVEPOINT)
            : null;
        }
        hitTest(e) {
          if (null === this._data || this._data.points.length < 2) return null;
          var t = this._data.points[0],
            i = this._data.points[1],
            n = i.subtract(t),
            r = ((n = i.subtract(t)), e.subtract(t)),
            s = Math.abs(n.x),
            a = Math.abs(n.y),
            l = h.sign(n.y) * (a - a * Math.sqrt(1 - (r.x * r.x) / (s * s)));
          if (Math.abs(l - r.y) < 3) return new o(o.MOVEPOINT);
          var d = this.targetLabelHitTest(e);
          return d || this.sourceLabelHitTest(e);
        }
      }
      t.PredictionPaneView = class extends s {
        constructor(e, t) {
          super(e, t), (this._pendingIcons = 3);
          var n = this;
          function r() {
            (n._pendingIcons -= 1),
              0 === n._pendingIcons &&
                n._source.model().updateSource(n._source);
          }
          (this._clockWhite = null),
            (this._successIcon = null),
            (this._failureIcon = null),
            d('prediction-clock-white', i(83764)).then(function (e) {
              (n._clockWhite = e), r();
            }),
            d('prediction-success-white', i(80985)).then(function (e) {
              (n._successIcon = e), r();
            }),
            d('prediction-failure-white', i(141)).then(function (e) {
              (n._failureIcon = e), r();
            }),
            (this._percentageFormatter = new c()),
            (this._predictionRenderer = new S()),
            (this._renderer = null);
        }
        iconsReady() {
          return 0 === this._pendingIcons;
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            (this._targetLine1 = ''),
            (this._targetLine2 = ''),
            (this._targetLine3 = ''),
            (this._targetLine4 = ''),
            !(this._source.points().length < 2)) &&
            this._source.priceScale()
          ) {
            var e = this._source.ownerSource().formatter(),
              t = this._source.points()[1],
              i = this._source.points()[0];
            this._targetLine3 = T(e.format(t.price));
            var n = t.price - i.price,
              s = (n / Math.abs(i.price)) * 100;
            this._targetLine1 = T(
              e.format(n) + ' (' + this._percentageFormatter.format(s) + ')',
            );
            var o = this._model.timeScale().indexToUserTime(i.index),
              d = this._model.timeScale().indexToUserTime(t.index);
            i.time &&
              t.time &&
              ((o = TradingView.isString(i.time)
                ? new Date(Date.parse(i.time))
                : i.time),
              (d = TradingView.isString(t.time)
                ? new Date(Date.parse(t.time))
                : t.time));
            var h = this._model.mainSeries().isDWM(),
              c = a.parse(this._model.mainSeries().interval()),
              g = c.isSeconds() || c.isTicks();
            if (d && o) {
              (this._targetLine4 = new u().format(d)),
                h ||
                  (this._targetLine4 =
                    this._targetLine4 +
                    '  ' +
                    new _(g ? '%h:%m:%s' : '%h:%m').format(d));
              var v = (d.valueOf() - o.valueOf()) / 1e3;
              this._targetLine2 =
                r('in', { context: 'dates' }) + ' ' + b(new p().format(v));
            }
            (this._sourceLine1 = e.format(i.price)), (this._sourceLine2 = '');
            var x = this._model.timeScale().indexToUserTime(i.index);
            x &&
              ((this._sourceLine2 = new u().format(x)),
              h ||
                (this._sourceLine2 =
                  this._sourceLine2 +
                  ' ' +
                  new _(g ? '%h:%m:%s' : '%h:%m').format(x))),
              (this._direction =
                this._source.direction() === f.Direction.Up ? 'up' : 'down'),
              (this._finished =
                this._model.lineBeingCreated() !== this._source &&
                this._model.lineBeingEdited() !== this._source &&
                !this._model.sourcesBeingMoved().includes(this._source));
            var w = {};
            (w.points = this._points),
              (w.color = this._source.properties().linecolor.value()),
              (w.linewidth = this._source.properties().linewidth.value()),
              (w.targetLine1 = this._targetLine1),
              (w.targetLine2 = this._targetLine2),
              (w.targetLine3 = this._targetLine3),
              (w.targetLine4 = this._targetLine4),
              (w.status = this._source.properties().status.value()),
              (w.transparency = this._source.properties().transparency.value()),
              (w.targetBackColor = this._source
                .properties()
                .targetBackColor.value()),
              (w.targetStrokeColor = this._source
                .properties()
                .targetStrokeColor.value()),
              (w.targetTextColor = this._source
                .properties()
                .targetTextColor.value()),
              (w.sourceBackColor = this._source
                .properties()
                .sourceBackColor.value()),
              (w.sourceStrokeColor = this._source
                .properties()
                .sourceStrokeColor.value()),
              (w.sourceTextColor = this._source
                .properties()
                .sourceTextColor.value()),
              (w.successBackground = this._source
                .properties()
                .successBackground.value()),
              (w.successTextColor = this._source
                .properties()
                .successTextColor.value()),
              (w.failureBackground = this._source
                .properties()
                .failureBackground.value()),
              (w.failureTextColor = this._source
                .properties()
                .failureTextColor.value()),
              (w.intermediateBackColor = this._source
                .properties()
                .intermediateBackColor.value()),
              (w.intermediateTextColor = this._source
                .properties()
                .intermediateTextColor.value()),
              (w.sourceLine1 = this._sourceLine1),
              (w.sourceLine2 = this._sourceLine2),
              (w.direction = this._direction),
              (w.clockWhite = this._clockWhite),
              (w.successIcon = this._successIcon),
              (w.failureIcon = this._failureIcon),
              (w.finished = this._finished),
              (w.centersColor = this._model.backgroundCounterColor()),
              this._predictionRenderer.setData(w);
            var m = new l();
            m.append(this._predictionRenderer),
              this.addAnchors(m),
              (this._renderer = m);
          }
        }
      };
    },
    12396: (e, t, i) => {
      'use strict';
      var n = i(72927),
        r = n.Point,
        s = n.box,
        a = i(71044).pointInBox,
        o = i(67857).LineSourcePaneView,
        l = i(73301).SelectionRenderer,
        d = i(10288).HitTestResult,
        h = i(87088).CompositeRenderer,
        c = i(50968),
        u = i(16932).calcTextHorizontalShift,
        _ = i(76553).isRtl,
        p = i(58729).ScaledPaneRenderer,
        g = i(54837);
      class f extends p {
        constructor(e, t) {
          super(),
            (this._data = null),
            (this._measureCache = e),
            (this._chartModel = t),
            (this._points = null);
        }
        setData(e) {
          (this._data = e), (this._points = e.points);
        }
        _drawImpl(e) {
          if (
            null !== this._data &&
            null !== this._points &&
            0 !== this._points.length
          ) {
            e.font = [
              this._data.fontWeight,
              this._data.fontSize + 'px',
              this._data.fontFamily,
            ].join(' ');
            var t = e.measureText(this._data.label);
            t.height = this._data.fontSize;
            var i = 10,
              n = 5,
              r = t.width + 2 * i,
              s = t.height + 2 * n,
              a = this._points[0].x - -9,
              o = this._points[0].y - (s + 15);
            e.textAlign = _() ? 'right' : 'left';
            var l = u(e, t.width);
            this._measureCache &&
              Object.assign(this._measureCache, {
                innerWidth: r,
                innerHeight: s,
                tailLeft: -9,
                tailHeight: 15,
              }),
              e.translate(0.5 + a, 0.5 + o),
              e.beginPath(),
              e.moveTo(12, s),
              e.lineTo(-9, s + 15),
              e.lineTo(-10, s + 15 - 1),
              e.lineTo(5, s),
              e.lineTo(3, s),
              e.arcTo(0, s, 0, 0, 3),
              e.lineTo(0, 3),
              e.arcTo(0, 0, r, 0, 3),
              e.lineTo(r - 3, 0),
              e.arcTo(r, 0, r, s, 3),
              e.lineTo(r, s - 3),
              e.arcTo(r, s, 0, s, 3),
              e.lineTo(12, s),
              (e.fillStyle = c.generateColor(
                this._data.backgroundColor,
                this._data.transparency,
              )),
              e.fill(),
              (e.strokeStyle = this._data.borderColor),
              (e.lineWidth = 2),
              e.stroke(),
              e.closePath(),
              (e.textBaseline = 'alphabetic'),
              (e.fillStyle = this._data.color),
              e.fillText(
                this._data.label,
                i + l,
                s / 2 + Math.floor(0.35 * this._data.fontSize),
              ),
              e.translate(-0.5, -0.5),
              e.beginPath(),
              e.arc(-9, s + 15, 2.5, 0, 2 * Math.PI, !1),
              (e.fillStyle = c.generateColor(
                this._data.borderColor,
                this._data.transparency,
              )),
              e.fill(),
              (e.strokeStyle = this._chartModel.backgroundColor().value()),
              (e.lineWidth = 1),
              e.stroke(),
              e.closePath();
          }
        }
        hitTest(e) {
          if (
            null === this._data ||
            null === this._points ||
            0 === this._points.length
          )
            return null;
          var t = this._points[0].x - this._measureCache.tailLeft,
            i =
              this._points[0].y -
              (this._measureCache.innerHeight + this._measureCache.tailHeight),
            n = s(
              new r(t, i),
              new r(
                t + this._measureCache.innerWidth,
                i + this._measureCache.innerHeight,
              ),
            );
          return a(e, n) ? new d(d.MOVEPOINT) : null;
        }
      }
      t.PriceLabelPaneView = class extends o {
        constructor(e, t, i) {
          super(e, t),
            (this._rendererCache = {}),
            (this._priceLabelRenderer = new f(this._rendererCache, t)),
            (this._renderer = null);
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            this._source.points().length > 0)
          ) {
            var e = this._source.points()[0].price,
              t = this._source.priceScale();
            if (!t || t.isEmpty()) return;
            var i = this._source.ownerSource().firstValue();
            this._priceLabel = t.formatPrice(e, i);
          }
          var n = {};
          if (
            ((n.points = this._points),
            (n.borderColor = this._source.properties().borderColor.value()),
            (n.backgroundColor = this._source
              .properties()
              .backgroundColor.value()),
            (n.color = this._source.properties().color.value()),
            (n.fontWeight = this._source.properties().fontWeight.value()),
            (n.fontSize = this._source.properties().fontsize.value()),
            (n.fontFamily = g.CHART_FONT_FAMILY),
            (n.transparency = this._source.properties().transparency.value()),
            (n.label = this._priceLabel),
            this._priceLabelRenderer.setData(n),
            1 === n.points.length)
          ) {
            var r = new h();
            return (
              r.append(this._priceLabelRenderer),
              r.append(
                new l({
                  points: n.points,
                  bgColors: this._lineAnchorColors(n.points),
                  visible: this.areAnchorsVisible(),
                }),
              ),
              void (this._renderer = r)
            );
          }
          this._renderer = this._priceLabelRenderer;
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    78240: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { PriceNotePaneView: () => w });
      var n = i(16282),
        r = i(72927),
        s = i(53312),
        a = i(87088),
        o = i(44896),
        l = i(67857),
        d = i(89684),
        h = i(33420),
        c = i(5025),
        u = i(54837),
        _ = i(87910),
        p = i(10288),
        g = i(55430),
        f = i(21344);
      function v(e) {
        let t, i;
        return (
          e >= -135 && e <= -45
            ? ((t = 'center'), (i = 'bottom'))
            : e > -45 && e < 45
            ? ((t = 'left'), (i = 'middle'))
            : e >= 45 && e <= 135
            ? ((t = 'center'), (i = 'top'))
            : ((t = 'right'), (i = 'middle')),
          { horzAlign: t, vertAlign: i }
        );
      }
      class x {
        constructor() {
          (this._data = null),
            (this._priceLabelRenderer = new o.TextRenderer(
              void 0,
              new p.HitTestResult(p.HitTestResult.MOVEPOINT, {
                areaName: p.AreaName.Style,
                activeItem: 1,
              }),
            )),
            (this._hittest = new p.HitTestResult(p.HitTestResult.MOVEPOINT, {
              areaName: p.AreaName.Style,
            }));
        }
        setData(e) {
          this._data = e;
          const t = e.points[0],
            i = e.points[1],
            n = Math.round((180 * Math.atan2(i.y - t.y, i.x - t.x)) / Math.PI);
          this._priceLabelRenderer.setData({
            ...v(n),
            points: [i],
            text: e.text,
            color: e.textColor,
            font: u.CHART_FONT_FAMILY,
            fontSize: e.fontSize,
            bold: e.bold,
            italic: e.italic,
            offsetX: 0,
            offsetY: 0,
            borderColor: e.borderColor,
            borderWidth: 1,
            backgroundColor: e.backgroundColor,
            backgroundRoundRect: 4,
            boxPaddingVert: 6,
            boxPaddingHorz: 8,
          });
        }
        setHitTest(e) {
          this._hittest = e;
        }
        draw(e, t) {
          const i = this._data;
          if (null === i || i.points.length < 2) return;
          e.save();
          const n = t.pixelRatio,
            r = Math.round(i.points[0].x * n),
            s = Math.round(i.points[0].y * n),
            a = Math.round(i.points[1].x * n),
            o = Math.round(i.points[1].y * n);
          (e.lineCap = 'butt'),
            (0, c.setLineStyle)(e, h.LINESTYLE_SOLID),
            (e.strokeStyle = i.lineColor),
            (e.fillStyle = i.lineColor),
            (e.lineWidth = Math.round(1 * n));
          const l = (0, f.fillScaledRadius)(2, n);
          (0, g.createCircle)(e, r, s, l),
            e.fill(),
            (0, c.drawLine)(e, r, s, a, o),
            this._priceLabelRenderer.draw(e, t);
          const d = 1 * n;
          (e.strokeStyle = i.circleBorderColor), (e.lineWidth = d);
          const u = l + d / 2;
          (0, g.createCircle)(e, r, s, u), e.stroke(), e.restore();
        }
        hitTest(e) {
          const t = this._data;
          if (null === t) return null;
          const i = (0, _.lastMouseOrTouchEventInfo)().isTouch ? 20 : 3;
          return (0, d.distanceToSegment)(t.points[0], t.points[1], e)
            .distance <= i
            ? this._hittest
            : this._priceLabelRenderer.hitTest(e);
        }
      }
      class w extends l.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._renderer = new a.CompositeRenderer()),
            (this._priceNoteRenderer = new x()),
            (this._customLabelRenderer = new o.TextRenderer());
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl(), this._renderer.clear();
          const e = this._source.priceScale();
          if (!e || e.isEmpty()) return;
          const t = this._points;
          if (t.length < 2) return;
          const i = this._source.properties().childs(),
            a = this._model.isDark()
              ? s.colorsPalette['color-cold-gray-900']
              : s.colorsPalette['color-white'],
            o = this._source.points()[0].price,
            l = (0, n.ensureNotNull)(this._source.ownerSource()).firstValue();
          if (null === l) return;
          const d = e.formatPrice(o, l);
          if (
            (this._priceNoteRenderer.setData({
              text: d,
              points: t,
              lineColor: i.lineColor.value(),
              circleBorderColor: a,
              backgroundColor: i.priceLabelBackgroundColor.value(),
              borderColor: i.priceLabelBorderColor.value(),
              textColor: i.priceLabelTextColor.value(),
              fontSize: i.priceLabelFontSize.value(),
              bold: i.priceLabelBold.value(),
              italic: i.priceLabelItalic.value(),
            }),
            this._renderer.append(this._priceNoteRenderer),
            this._renderer.append(this.createLineAnchor({ points: t }, 0)),
            i.showLabel && i.showLabel.value())
          ) {
            const e = t[0],
              n = t[1],
              s = e.x < n.x ? e : n,
              a = s === e ? n : e,
              o = i.vertLabelsAlign.value(),
              l = i.horzLabelsAlign.value();
            let d;
            d =
              'left' === l
                ? s.clone()
                : 'right' === l
                ? a.clone()
                : new r.Point((e.x + n.x) / 2, (e.y + n.y) / 2);
            const h = Math.atan((a.y - s.y) / (a.x - s.x)),
              c = {
                points: [d],
                text: i.text.value(),
                color: i.textColor.value(),
                vertAlign: o,
                horzAlign: l,
                font: u.CHART_FONT_FAMILY,
                offsetX: 0,
                offsetY: 0,
                bold: i.bold.value(),
                italic: i.italic.value(),
                fontsize: i.fontSize.value(),
                forceTextAlign: !0,
                angle: h,
              };
            this._customLabelRenderer.setData(c),
              this._renderer.append(this._customLabelRenderer);
          }
        }
      }
    },
    6704: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { PriceRangePaneView: () => v });
      var n = i(16282),
        r = i(72927),
        s = i(76553),
        a = i(67857),
        o = i(44896),
        l = i(72095),
        d = i(6397),
        h = i(87088),
        c = i(62159),
        u = i(33420),
        _ = i(71172),
        p = i(85421),
        g = (i(86656), i(54837));
      const f = new c.PercentageFormatter();
      class v extends a.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._topBorderRenderer = new d.TrendLineRenderer()),
            (this._bottomBorderRenderer = new d.TrendLineRenderer()),
            (this._distanceRenderer = new d.TrendLineRenderer()),
            (this._backgroundRenderer = new l.RectangleRenderer()),
            (this._labelRenderer = new o.TextRenderer()),
            (this._renderer = new h.CompositeRenderer()),
            (this._pipFormatter = null),
            (this._lastSymbolInfo = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
        _updateImpl(e, t) {
          var i;
          if (
            (super._updateImpl(),
            this._renderer.clear(),
            this._points.length < 2 || this._source.points().length < 2)
          )
            return;
          const a = this._source.properties().childs(),
            l = a.extendLeft.value(),
            d = a.extendRight.value(),
            [h, c] = this._points,
            v = Math.min(h.x, c.x),
            x = Math.max(h.x, c.x);
          a.fillBackground.value() &&
            (this._backgroundRenderer.setData({
              points: [new r.Point(v, h.y), new r.Point(x, c.y)],
              color: 'white',
              linewidth: 0,
              backcolor: a.backgroundColor.value(),
              fillBackground: !0,
              transparency: a.backgroundTransparency.value(),
              extendLeft: l,
              extendRight: d,
            }),
            this._renderer.append(this._backgroundRenderer));
          const w = (e, t, i) => {
            e.setData({
              points: [t, i],
              color: a.linecolor.value(),
              linewidth: a.linewidth.value(),
              linestyle: u.LINESTYLE_SOLID,
              extendleft: l,
              extendright: d,
              leftend: _.LineEnd.Normal,
              rightend: _.LineEnd.Normal,
            }),
              this._renderer.append(e);
          };
          let m = v,
            R = x;
          m === R && (l && (m -= 1), d && (R += 1)),
            w(
              this._topBorderRenderer,
              new r.Point(m, h.y),
              new r.Point(R, h.y),
            ),
            w(
              this._bottomBorderRenderer,
              new r.Point(m, c.y),
              new r.Point(R, c.y),
            );
          const y = Math.round((h.x + c.x) / 2),
            T = new r.Point(y, h.y),
            b = new r.Point(y, c.y);
          this._distanceRenderer.setData({
            points: [T, b],
            color: a.linecolor.value(),
            linewidth: a.linewidth.value(),
            linestyle: u.LINESTYLE_SOLID,
            extendleft: !1,
            extendright: !1,
            leftend: _.LineEnd.Normal,
            rightend:
              Math.abs(T.y - b.y) >= 15 * a.linewidth.value()
                ? _.LineEnd.Arrow
                : _.LineEnd.Normal,
          }),
            this._renderer.append(this._distanceRenderer),
            a.showLabel.value();
          {
            const t = this._source.points()[0].price,
              l = this._source.points()[1].price,
              d = l - t,
              u = (100 * d) / Math.abs(t),
              _ = this._model.mainSeries().symbolInfo();
            _ &&
              _ !== this._lastSymbolInfo &&
              ((this._pipFormatter = new p.PipFormatter(
                _.pricescale,
                _.minmov,
                _.type,
                _.minmove2,
              )),
              (this._lastSymbolInfo = _));
            const v = (0, s.forceLTRStr)(
              (0, n.ensureNotNull)(this._source.ownerSource())
                .formatter()
                .format(d) +
                ' (' +
                f.format(u) +
                ') ' +
                (this._pipFormatter ? this._pipFormatter.format(d) : ''),
            );
            let x;
            x =
              l > t
                ? new r.Point(0.5 * (h.x + c.x), c.y - 2 * a.fontsize.value())
                : new r.Point(
                    0.5 * (h.x + c.x),
                    c.y + 0.7 * a.fontsize.value(),
                  );
            const w = { x: 0, y: 10 },
              m = a.fontsize.value(),
              R = {
                points: [x],
                text: v,
                color: a.textcolor.value(),
                font: g.CHART_FONT_FAMILY,
                offsetX: w.x,
                offsetY: w.y,
                padding: 8,
                vertAlign: 'middle',
                horzAlign: 'center',
                fontsize: m,
                backgroundRoundRect: 4,
                backgroundHorzInflate: 0.4 * m,
                backgroundVertInflate: 0.2 * m,
              },
              y =
                null === (i = a.fillLabelBackground) || void 0 === i
                  ? void 0
                  : i.value();
            y && (R.backgroundColor = a.labelBackgroundColor.value()),
              this._labelRenderer.setData(R);
            const T = this._labelRenderer.measure(),
              b = (0, o.calculateLabelPosition)(T, h, c, w, e);
            this._labelRenderer.setPoints([b]),
              this._renderer.append(this._labelRenderer);
          }
          this.addAnchors(this._renderer);
        }
      }
    },
    46474: (e, t, i) => {
      'use strict';
      var n = i(93572).ArcWedgeRenderer,
        r = i(19027).FibWedgePaneView,
        s = i(6397).TrendLineRenderer,
        a = i(87088).CompositeRenderer,
        o = i(71172).LineEnd;
      t.ProjectionLinePaneView = class extends r {
        constructor(e, t) {
          super(e, t),
            (this._baseTrendRenderer = new s()),
            (this._edgeTrendRenderer = new s()),
            (this._arcWedgeRenderer = new n());
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateRenderer() {
          if (!(this._points.length < 2)) {
            var e = new a(),
              t = this._source.properties(),
              i = this._points,
              n = i[0],
              r = i[1],
              s = {
                points: [n, r],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: t.trendline.color.value(),
                linewidth: t.linewidth.value(),
                linestyle: t.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: o.Normal,
                rightend: o.Normal,
              };
            if (
              (this._baseTrendRenderer.setData(s),
              e.append(this._baseTrendRenderer),
              this._points.length < 3)
            )
              return this.addAnchors(e), void (this._renderer = e);
            var l = i[2],
              d = l.data,
              h = r.subtract(n).length(),
              c = l.subtract(n).normalized();
            ((l = n.add(c.scaled(h))).data = d),
              (s = {
                points: [n, l],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: t.trendline.color.value(),
                linewidth: t.linewidth.value(),
                linestyle: t.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: o.Normal,
                rightend: o.Normal,
              }),
              this._edgeTrendRenderer.setData(s),
              e.append(this._edgeTrendRenderer);
            var u = this._levels[0],
              _ = {};
            (_.center = this._points[0]),
              (_.radius = u.radius),
              (_.prevRadius = 0),
              (_.edge = this._edge),
              (_.color = t.trendline.color.value()),
              (_.color1 = t.color1.value()),
              (_.color2 = t.color2.value()),
              (_.linewidth = t.linewidth.value()),
              (_.edge1 = this._edge1),
              (_.edge2 = this._edge2),
              (_.p1 = u.p1),
              (_.p2 = u.p2),
              (_.fillBackground = t.fillBackground.value()),
              (_.transparency = t.transparency.value()),
              (_.gradient = !0),
              this._arcWedgeRenderer.setData(_),
              e.append(this._arcWedgeRenderer),
              this.addAnchors(e),
              (this._renderer = e);
          }
        }
      };
    },
    75196: (e, t, i) => {
      'use strict';
      i.r(t),
        i.d(t, {
          RectanglePaneView: () => h,
        });
      var n = i(72927),
        r = i(54837),
        s = i(72095),
        a = i(87088),
        o = i(44896),
        l = i(67857),
        d = i(10992);
      class h extends l.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._rectangleRenderer = new s.RectangleRenderer()),
            (this._textRenderer = new o.TextRenderer()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            this._points.length < 2)
          )
            return;
          const e = this._getSource().properties().childs(),
            t = {
              points: this._points,
              color: e.color.value(),
              linewidth: e.linewidth.value(),
              backcolor: e.backgroundColor.value(),
              fillBackground: e.fillBackground.value(),
              transparency: e.transparency.value(),
              extendLeft: e.extendLeft.value(),
              extendRight: e.extendRight.value(),
              includeRightEdge: !0,
            };
          this._rectangleRenderer.setData(t);
          const i = new a.CompositeRenderer();
          i.append(this._rectangleRenderer);
          const s = this._points[0],
            o = this._points[1];
          if (e.showLabel.value()) {
            const t = Math.min(s.x, o.x),
              a = Math.max(s.x, o.x),
              l = Math.min(s.y, o.y),
              d = Math.max(s.y, o.y);
            let h, c, u, _;
            const p = e.fontSize.value() / 3;
            let g,
              f,
              v = 0;
            switch (e.vertLabelsAlign.value()) {
              case 'middle':
                (_ = (l + d) / 2), (c = 'middle'), (v = p);
                break;
              case 'top':
                (_ = d), (c = 'top');
                break;
              case 'bottom':
                (_ = l), (c = 'bottom');
            }
            switch (e.horzLabelsAlign.value()) {
              case 'center':
                (u = (t + a) / 2), (h = 'center');
                break;
              case 'left':
                (u = t), (h = 'left');
                break;
              case 'right':
                (u = a), (h = 'right');
            }
            'middle' === c && ((g = a - t - 2 * v), (f = d - l));
            const x = {
              points: [new n.Point(u, _)],
              text: e.text.value(),
              fontSize: e.fontSize.value(),
              font: r.CHART_FONT_FAMILY,
              bold: e.bold.value(),
              italic: e.italic.value(),
              horzAlign: h,
              vertAlign: c,
              color: e.textColor.value(),
              wordWrapWidth: g,
              maxHeight: f,
              offsetX: 0,
              offsetY: 0,
              boxPaddingVert: p,
              boxPaddingHorz: v,
              forceTextAlign: !0,
            };
            this._textRenderer.setData(x), i.append(this._textRenderer);
          }
          this._addAnchors(s, o, i), (this._renderer = i);
        }
        _addAnchors(e, t, i) {
          const r = new n.Point(e.x, t.y);
          r.data = 2;
          const s = new n.Point(t.x, e.y);
          s.data = 3;
          const a = new n.Point(e.x, 0.5 * (e.y + t.y));
          a.data = 4;
          const o = new n.Point(t.x, 0.5 * (e.y + t.y));
          o.data = 5;
          const l = new n.Point(0.5 * (e.x + t.x), e.y);
          l.data = 6;
          const h = new n.Point(0.5 * (e.x + t.x), t.y);
          (h.data = 7), [a, o, l, h].forEach((e) => (e.square = !0));
          const c = e.x - t.x,
            u = e.y - t.y,
            _ = Math.sign(c * u),
            p = [
              _ < 0
                ? d.PaneCursorType.DiagonalNeSwResize
                : d.PaneCursorType.DiagonalNwSeResize,
              _ < 0
                ? d.PaneCursorType.DiagonalNeSwResize
                : d.PaneCursorType.DiagonalNwSeResize,
              _ > 0
                ? d.PaneCursorType.DiagonalNeSwResize
                : d.PaneCursorType.DiagonalNwSeResize,
              _ > 0
                ? d.PaneCursorType.DiagonalNeSwResize
                : d.PaneCursorType.DiagonalNwSeResize,
              d.PaneCursorType.HorizontalResize,
              d.PaneCursorType.HorizontalResize,
              d.PaneCursorType.VerticalResize,
              d.PaneCursorType.VerticalResize,
            ];
          i.append(
            this.createLineAnchor(
              { points: [e, t, r, s, a, o, l, h], pointsCursorType: p },
              0,
            ),
          );
        }
      }
    },
    56145: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { RegressionTrendPaneView: () => g });
      var n = i(16282),
        r = i(50968),
        s = i(10288),
        a = i(87088),
        o = i(21498),
        l = i(44896),
        d = i(6397),
        h = i(73301),
        c = i(72927),
        u = i(71172),
        _ = i(54837);
      var p = i(67857);
      class g extends p.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._data = null),
            (this._pearsonsLabelRenderer = new l.TextRenderer()),
            (this._renderer = null),
            (this._renderer = null);
        }
        renderer() {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl(),
            (this._data = (function (e, t) {
              const i = { lines: [], pearsons: null };
              if (!t.properties().visible.value()) return i;
              const r = e.timeScale(),
                s = t.priceScale(),
                a = e.mainSeries().firstBar();
              if (!s || s.isEmpty() || r.isEmpty() || !a) return i;
              const o = t.startIndex(),
                l = t.endIndex();
              if (null === o || null === l) return i;
              const d = [t.baseLine(), t.downLine(), t.upLine()],
                h = Math.round(r.indexToCoordinate(o)),
                p = Math.round(r.indexToCoordinate(l)),
                g = t.properties(),
                f = [g.styles.baseLine, g.styles.downLine, g.styles.upLine],
                v = a[4];
              for (let r = 0; r < d.length; r++) {
                if (!f[r].visible.value()) continue;
                const a = (0, n.ensureNotNull)(d[r]).startPrice,
                  o = (0, n.ensureNotNull)(d[r]).endPrice;
                if (void 0 === a || void 0 === o) continue;
                const l = s.priceToCoordinate(a, v),
                  _ = s.priceToCoordinate(o, v),
                  x = new c.Point(h, l),
                  w = new c.Point(p, _),
                  m = f[r].color.value(),
                  R = f[r].linewidth.value(),
                  y = f[r].linestyle.value(),
                  T = {
                    points: [x, w],
                    width: e.timeScale().width(),
                    height: (0, n.ensureNotNull)(t.priceScale()).height(),
                    color: m,
                    linewidth: R,
                    linestyle: y,
                    extendleft: !1,
                    extendright: g.styles.extendLines.value(),
                    leftend: u.LineEnd.Normal,
                    rightend: u.LineEnd.Normal,
                  };
                i.lines.push(T);
              }
              const x = (0, n.ensureNotNull)(t.downLine());
              if (g.styles.showPearsons.value() && void 0 !== x.startPrice) {
                const e = s.priceToCoordinate(x.startPrice, v),
                  n = new c.Point(h, e);
                i.pearsons = {
                  points: [n],
                  text: '' + t.pearsons(),
                  color: g.styles.downLine.color.value(),
                  vertAlign: 'top',
                  horzAlign: 'center',
                  font: _.CHART_FONT_FAMILY,
                  offsetX: 0,
                  offsetY: 4,
                  fontsize: 12,
                };
              }
              return i;
            })(this._model, this._source)),
            (this._renderer = null);
          const e = new a.CompositeRenderer();
          let t = [];
          const i = [
              this._data.lines[1],
              this._data.lines[0],
              this._data.lines[2],
            ].filter((e) => !!e),
            l = this._source
              .properties()
              .childs()
              .styles.childs()
              .transparency.value();
          for (let t = 1; t < i.length; t++) {
            const n = {
                points: [
                  i[t].points[0],
                  i[t].points[1],
                  i[t - 1].points[0],
                  i[t - 1].points[1],
                ],
                color: i[t].color,
                linewidth: i[t].linewidth,
                linestyle: i[t].linestyle,
                extendleft: !1,
                extendright: i[t].extendright,
                backcolor: i[t].color,
                transparency: l,
                skipLines: !0,
                fillBackground: !0,
                showMidline: !1,
              },
              r = new o.ParallelChannelRenderer(
                new s.HitTestResult(s.HitTestResult.REGULAR),
              );
            r.setData(n), e.append(r);
          }
          const p = this._getTransparencyResetLines();
          for (let n = 0; n < i.length; n++) {
            const r = new d.TrendLineRenderer();
            r.setData(p[n]),
              r.setHitTest(new s.HitTestResult(s.HitTestResult.REGULAR)),
              e.append(r),
              0 !== n && (t = t.concat(i[n].points));
          }
          this._data.pearsons &&
            ((this._data.pearsons.color = (0, r.resetTransparency)(
              this._data.pearsons.color,
            )),
            this._pearsonsLabelRenderer.setData(this._data.pearsons),
            e.append(this._pearsonsLabelRenderer)),
            this._data.lines.length >= 1 &&
              e.append(
                new h.SelectionRenderer({
                  points: t,
                  bgColors: this._lineAnchorColors(t),
                  visible: this.areAnchorsVisible(),
                  hittestResult: s.HitTestResult.REGULAR,
                  barSpacing: this._model.timeScale().barSpacing(),
                }),
              ),
            (this._renderer = e);
        }
        _getTransparencyResetLines() {
          return (0, n.ensureNotNull)(this._data).lines.map((e) => ({
            ...e,
            color: (0, r.resetTransparency)(e.color),
          }));
        }
      }
    },
    18452: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(79881).t,
        s = i(67857).LineSourcePaneView,
        a = i(6397).TrendLineRenderer,
        o = i(44896).TextRenderer,
        l = i(72095).RectangleRenderer,
        d = i(10288).HitTestResult,
        h = i(87088).CompositeRenderer,
        c = i(62159).PercentageFormatter,
        u = i(57649).NumericFormatter,
        _ = i(85421).PipFormatter,
        p = i(50968),
        g = i(71172).LineEnd,
        f = i(67033).RiskRewardPointIndex,
        v = i(76553).forceLTRStr,
        x = i(10992).PaneCursorType,
        w = i(54837),
        m = [x.Default, x.HorizontalResize, x.VerticalResize, x.VerticalResize];
      class R extends s {
        constructor(e, t) {
          super(e, t),
            (this._percentageFormatter = new c()),
            (this._numericFormatter = new u()),
            (this._pipFormatter = null),
            (this._lastSymbolInfo = null),
            (this._entryLineRenderer = new a()),
            (this._stopLineRenderer = new a()),
            (this._targetLineRenderer = new a()),
            (this._positionLineRenderer = new a()),
            (this._fullStopBgRenderer = new l(
              new d(d.MOVEPOINT),
              new d(d.MOVEPOINT),
            )),
            (this._stopBgRenderer = new l(
              new d(d.MOVEPOINT),
              new d(d.MOVEPOINT),
            )),
            (this._fullTargetBgRenderer = new l(
              new d(d.MOVEPOINT),
              new d(d.MOVEPOINT),
            )),
            (this._targetBgRenderer = new l(
              new d(d.MOVEPOINT),
              new d(d.MOVEPOINT),
            )),
            (this._stopLabelRenderer = new o()),
            (this._middleLabelRenderer = new o()),
            (this._profitLabelRenderer = new o()),
            (this._renderer = null);
        }
        _formatInTicks(e) {
          var t = this._model.mainSeries().base();
          return Math.round(e * t);
        }
        isLabelVisible() {
          return (
            this.isHoveredSource() ||
            this.isSelectedSource() ||
            this._source.properties().alwaysShowStats.value()
          );
        }
        _updateImpl(e, t) {
          super._updateImpl(e, t),
            (this._renderer = null),
            (this._stopLevel = null),
            (this._profitLevel = null);
          var i = this._model.timeScale(),
            r = this._source.priceScale();
          if (!r || r.isEmpty() || i.isEmpty()) return;
          var s = this._source.points();
          if (s.length < 2 || this._points.length < 2) return;
          var a = this._model.mainSeries(),
            o = a.bars();
          if (0 === o.length) return;
          if (null === o.last()) return;
          this._isClosed = 4 === s.length;
          var l = this._source.lastBarData();
          if (!l) return;
          var d = this._source.stopPrice(),
            c = this._source.profitPrice();
          this._pl = this._source.calculatePL(l.closePrice);
          var u = this._source.ownerSource().firstValue();
          (this._entryLevel = this._points[f.Entry].y),
            (this._stopLevel = r.priceToCoordinate(d, u)),
            (this._profitLevel = r.priceToCoordinate(c, u)),
            (this._closeLevel = r.priceToCoordinate(l.closePrice, u)),
            (this._closeBar = this._source._model
              .timeScale()
              .indexToCoordinate(l.index));
          var x = new h(),
            R = this,
            y = this._source.properties(),
            T = this._points[f.Entry].x,
            b = this._points[f.ActualEntry]
              ? this._points[f.ActualEntry].x
              : this._points[f.Close].x,
            L = this._points[f.ActualClose]
              ? this._points[f.ActualClose].x
              : this._points[f.Close].x,
            S = this._points[f.Close].x;
          let P = S < -5 || T > t + 5;
          var C = new n(T, this._entryLevel),
            M = new n(S, this._stopLevel);
          if (
            (((k = {}).points = [C, M]),
            (k.color = 'white'),
            (k.linewidth = 0),
            (k.backcolor = y.stopBackground.value()),
            (k.fillBackground = !0),
            (k.transparency = y.stopBackgroundTransparency.value()),
            (k.extendLeft = !1),
            (k.extendRight = !1),
            this._fullStopBgRenderer.setData(k),
            x.append(this._fullStopBgRenderer),
            this._pl < 0 && b !== L)
          ) {
            (C = new n(b, this._entryLevel)), (M = new n(L, this._closeLevel));
            ((k = {}).points = [C, M]),
              (k.color = 'white'),
              (k.linewidth = 0),
              (k.backcolor = y.stopBackground.value()),
              (k.fillBackground = !0);
            var I =
              100 -
              100 *
                (1 - (N = 0.01 * y.stopBackgroundTransparency.value()) * N * N);
            (k.transparency = I),
              (k.extendLeft = !1),
              (k.extendRight = !1),
              this._stopBgRenderer.setData(k),
              x.append(this._stopBgRenderer);
          }
          (C = new n(T, this._entryLevel)), (M = new n(S, this._profitLevel));
          if (
            (((k = {}).points = [C, M]),
            (k.color = 'white'),
            (k.linewidth = 0),
            (k.backcolor = y.profitBackground.value()),
            (k.fillBackground = !0),
            (k.transparency = y.profitBackgroundTransparency.value()),
            (k.extendLeft = !1),
            (k.extendRight = !1),
            this._fullTargetBgRenderer.setData(k),
            x.append(this._fullTargetBgRenderer),
            this._pl > 0 && b !== L)
          ) {
            (C = new n(b, this._entryLevel)), (M = new n(L, this._closeLevel));
            ((k = {}).points = [C, M]),
              (k.color = 'white'),
              (k.linewidth = 0),
              (k.backcolor = y.profitBackground.value()),
              (k.fillBackground = !0);
            var N,
              D =
                100 -
                100 *
                  (1 -
                    (N = 0.01 * y.profitBackgroundTransparency.value()) *
                      N *
                      N);
            (k.transparency = D),
              (k.extendLeft = !1),
              (k.extendRight = !1),
              this._targetBgRenderer.setData(k),
              x.append(this._targetBgRenderer);
          }
          var A = function (e, t, i, n) {
            var r = {};
            (r.points = [t, i]),
              (r.width = R._model.timeScale().width()),
              (r.height = R._source.priceScale().height()),
              (r.color = n || R._source.properties().linecolor.value()),
              (r.linewidth = R._source.properties().linewidth.value()),
              (r.linestyle = CanvasEx.LINESTYLE_SOLID),
              (r.extendleft = !1),
              (r.extendright = !1),
              (r.leftend = g.Normal),
              (r.rightend = g.Normal),
              e.setData(r),
              x.append(e);
          };
          if (this._points[f.ActualEntry]) {
            var k;
            (C = this._points[f.ActualEntry]),
              (M = this._isClosed
                ? this._points[f.ActualClose]
                : new n(this._closeBar, this._closeLevel));
            ((k = {}).points = [C, M]),
              (k.width = R._model.timeScale().width()),
              (k.height = R._source.priceScale().height()),
              (k.color = R._source.properties().linecolor.value()),
              (k.linewidth = 1),
              (k.linestyle = CanvasEx.LINESTYLE_DASHED),
              (k.extendleft = !1),
              (k.extendright = !1),
              (k.leftend = g.Normal),
              (k.rightend = g.Arrow),
              this._positionLineRenderer.setData(k),
              x.append(this._positionLineRenderer);
          }
          R = this;
          var E = function (i, n, r, s, a, o, l) {
              if (R.isLabelVisible()) {
                var d = {};
                (d.points = [n]),
                  (d.text = r),
                  (d.color = y.textcolor.value()),
                  (d.font = w.CHART_FONT_FAMILY),
                  (d.offsetX = 3),
                  (d.offsetY = o),
                  (d.vertAlign = a),
                  (d.horzAlign = 'center'),
                  (d.backgroundRoundRect = 4),
                  (d.backgroundColor = p.resetTransparency(s)),
                  (d.fontsize = y.fontsize.value()),
                  (d.backgroundHorzInflate = 4),
                  l && (d.borderColor = l),
                  i.setData(d),
                  (P = P && i.isOutOfScreen(t, e)),
                  x.append(i);
              }
            },
            B = this._source.entryPrice(),
            O = this._source.stopPrice(),
            H = this._source.profitPrice(),
            z = Math.abs(O - B),
            V = Math.round((1e4 * z) / B) / 100,
            W = Math.abs(H - B),
            F = Math.round((1e4 * W) / B) / 100,
            Y = Math.abs(B - H) / Math.abs(B - O);
          (C = new n(T, this._points[f.Entry].y)),
            (M = new n(S, this._points[f.Entry].y));
          A(this._entryLineRenderer, C, M);
          var j = new n((T + S) / 2, Math.round(this._points[0].y) + 0.5),
            U = '',
            Q = '',
            q = this._numericFormatter.format(Math.round(100 * Y) / 100);
          this._points[1] &&
            void 0 !== this._pl &&
            (Q = this._source.ownerSource().formatter().format(this._pl));
          var G = y.qty.value() / y.lotSize.value(),
            Z = a.symbolInfo(),
            X =
              'bitcoin' === Z.type ||
              'crypto' === Z.type ||
              'futures' === Z.type
                ? Math.round(1e3 * G) / 1e3
                : Math.floor(G);
          if (y.compact.value())
            (U += Q ? Q + ' ~ ' : ''), (U += X + '\n'), (U += q);
          else {
            var J = this._isClosed
              ? this.i18nCache.closed
              : this.i18nCache.open;
            (U += Q
              ? this.i18nCache.pnl.format({ status: J, pnl: Q }) + ', '
              : ''),
              (U += this.i18nCache.qty.format({ qty: X }) + '\n'),
              (U += this.i18nCache.ratio.format({ ratio: q }) + ' ');
          }
          var K = y.linecolor.value();
          this._pl < 0
            ? (K = y.stopBackground.value())
            : this._pl > 0 && (K = y.profitBackground.value()),
            E(this._middleLabelRenderer, j, U, K, 'middle', 0, 'white');
          (C = new n(T, this._stopLevel)), (M = new n(S, this._stopLevel));
          A(this._stopLineRenderer, C, M, y.stopBackground.value()),
            Z &&
              Z !== this._lastSymbolInfo &&
              ((this._pipFormatter = new _(
                Z.pricescale,
                Z.minmov,
                Z.type,
                Z.minmove2,
              )),
              (this._lastSymbolInfo = Z));
          (j = new n((T + S) / 2, this._stopLevel)), (U = '');
          var $ = this._source.ownerSource().formatter().format(z),
            ee = this._percentageFormatter.format(V);
          (U = y.compact.value()
            ? $ + ' (' + ee + ') ' + y.amountStop.value()
            : this.i18nCache.stop.format({
                stopChange: v(this._source.ownerSource().formatter().format(z)),
                stopChangePercent: v(this._percentageFormatter.format(V)),
                stopChangePip: this._pipFormatter
                  ? v(this._pipFormatter.format(z))
                  : '',
                amount: v(y.amountStop.value()),
              })),
            E(
              this._stopLabelRenderer,
              j,
              U,
              y.stopBackground.value(),
              B < O ? 'bottom' : 'top',
              0,
            );
          (C = new n(T, this._profitLevel)), (M = new n(S, this._profitLevel));
          A(this._targetLineRenderer, C, M, y.profitBackground.value());
          (j = new n((T + S) / 2, this._profitLevel)),
            (U = ''),
            ($ = this._source.ownerSource().formatter().format(W)),
            (ee = this._percentageFormatter.format(F));
          if (
            ((U = y.compact.value()
              ? $ + ' (' + ee + ') ' + y.amountTarget.value()
              : this.i18nCache.target.format({
                  profitChange: v(
                    this._source.ownerSource().formatter().format(W),
                  ),
                  profitChangePercent: v(this._percentageFormatter.format(F)),
                  profitChangePip: this._pipFormatter
                    ? v(this._pipFormatter.format(W))
                    : '',
                  amount: v(y.amountTarget.value()),
                })),
            E(
              this._profitLabelRenderer,
              j,
              U,
              y.profitBackground.value(),
              B < O ? 'top' : 'bottom',
              0,
            ),
            !P)
          ) {
            var te = this._points[0].clone();
            (te.data = 0), (te.snappingPrice = B);
            var ie = new n(T, this._stopLevel);
            (ie.data = 2), (ie.square = !0), (ie.snappingPrice = O);
            var ne = new n(T, this._profitLevel);
            (ne.data = 3), (ne.square = !0), (ne.snappingPrice = H);
            var re = new n(S, te.y);
            (re.data = 1), (re.square = !0), (re.snappingIndex = l.index);
            var se = { points: [te, re, ie, ne], pointsCursorType: m };
            x.append(this.createLineAnchor(se, 0)), (this._renderer = x);
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
      }
      (R.prototype.i18nCache = {
        pnl: r('{status} P&L: {pnl}'),
        open: r('Open', { context: 'line_tool_position' }),
        closed: r('Closed', { context: 'line_tool_position' }),
        ratio: r('Risk/Reward Ratio: {ratio}'),
        stop: r(
          'Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}',
        ),
        target: r(
          'Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}',
        ),
        qty: r('Qty: {qty}'),
      }),
        (t.RiskRewardPaneView = R);
    },
    57414: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(89684).distanceToLine,
        s = i(67857).LineSourcePaneView,
        a = i(67857).thirdPointCursorType,
        o = i(6397).TrendLineRenderer,
        l = i(59943).PolygonRenderer,
        d = i(87088).CompositeRenderer,
        h = i(71172).LineEnd,
        c = i(10992).PaneCursorType;
      t.RotatedRectanglePaneView = class extends s {
        constructor(e, t) {
          super(e, t),
            (this._poligonRenderer = new l()),
            (this._renderer = null);
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            (this._distance = 0),
            3 === this._points.length &&
              (this._distance = r(
                this._points[0],
                this._points[1],
                this._points[2],
              ).distance),
            0 !== this._points.length)
          ) {
            var e,
              t,
              i,
              s,
              l = new d(),
              u = this._source.properties(),
              _ = this._points[0],
              p = this._points[1];
            if (2 === this._points.length) {
              ((f = {}).points = this._points),
                (f.floatPoints = this._floatPoints),
                (f.width = this._model.timeScale().width()),
                (f.height = this._source.priceScale().height()),
                (f.color = u.color.value()),
                (f.linewidth = 1),
                (f.linestyle = CanvasEx.LINESTYLE_SOLID),
                (f.extendleft = !1),
                (f.extendright = !1),
                (f.leftend = h.Normal),
                (f.rightend = h.Normal);
              var g = new o();
              g.setData(f), l.append(g);
            } else if (3 === this._points.length) {
              var f,
                v = p.subtract(_),
                x = new n(v.y, -v.x).normalized().scaled(this._distance),
                w = x.scaled(-1);
              (e = _.add(x)),
                (t = p.add(x)),
                (i = _.add(w)),
                (s = p.add(w)),
                ((f = {}).points = [e, t, s, i]),
                (f.color = u.color.value()),
                (f.linewidth = this._source.properties().linewidth.value()),
                (f.linestyle = CanvasEx.LINESTYLE_SOLID),
                (f.filled = !0),
                (f.backcolor = u.backgroundColor.value()),
                (f.fillBackground = u.fillBackground.value()),
                (f.transparency = u.transparency.value()),
                this._poligonRenderer.setData(f),
                l.append(this._poligonRenderer);
            }
            var m = [];
            m.push(_), this._points.length >= 2 && m.push(p);
            var R = [c.Default, c.Default];
            if (3 === this._points.length) {
              (e.data = 2),
                (i.data = 2),
                (t.data = 2),
                (s.data = 2),
                m.push(e, i, t, s);
              var y = a(_, p);
              R.push(y, y, y, y);
            }
            l.append(
              this.createLineAnchor({ points: m, pointsCursorType: R }, 0),
            ),
              (this._renderer = l);
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    21857: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { SignpostPaneView: () => I });
      var n = i(72927),
        r = i(53312),
        s = i(54837),
        a = i(71233),
        o = i(89684),
        l = i(71044),
        d = i(16282),
        h = i(87910),
        c = i(16932),
        u = i(44896),
        _ = i(10288),
        p = i(79739),
        g = i(21344);
      const f = new WeakMap();
      function v(e, t, i, n) {
        let r = f.get(e);
        return (
          (void 0 !== r && r.width === t) ||
            ((r = (function (e, t, i, n) {
              const r = (0, c.createDisconnectedCanvas)(
                  document,
                  new c.Size(t, t),
                  1,
                ),
                s =
                  0 === n
                    ? Math.min(e.width, e.height)
                    : Math.max(e.width, e.height),
                a = Math.round(e.width / 2 - s / 2),
                o = Math.round(e.height / 2 - s / 2),
                l = (0, c.getContext2D)(r);
              return (
                i &&
                  (l.beginPath(),
                  l.arc(t / 2, t / 2, t / 2, 0, 2 * Math.PI, !0),
                  l.closePath(),
                  l.clip()),
                (l.imageSmoothingEnabled = !0),
                (l.imageSmoothingQuality = 'high'),
                l.drawImage(e, a, o, s, s, 0, 0, t, t),
                r
              );
            })(e, t, i, n)),
            f.set(e, r)),
          r
        );
      }
      function x(e) {
        return e.poleStartY;
      }
      function w(e) {
        return e.inverseAnchorPosition
          ? e.anchorY
          : e.anchorY +
              (e.labelHeight + e.poleTailHeight + 2 * e.circleRadius) *
                e.direction;
      }
      function m(e) {
        return e.inverseAnchorPosition
          ? e.anchorY + (2 * e.circleRadius + e.poleTailHeight) * e.direction
          : e.anchorY + e.labelHeight * e.direction;
      }
      function R(e) {
        return e.inverseAnchorPosition
          ? m(e) - e.poleTailHeight * e.direction
          : m(e) + e.poleTailHeight * e.direction;
      }
      function y(e, t, i, n, r, s) {
        const a = s.pixelRatio,
          o = (0, g.fillScaledRadius)(t.circleRadius, a),
          l = Math.round(t.x * a),
          d = t.inverseAnchorPosition
            ? Math.round(t.anchorY * a) +
              Math.round(t.circleRadius * a) * t.direction
            : Math.round(t.anchorY * a) +
              Math.round(
                (t.labelHeight + t.poleTailHeight + t.circleRadius) * a,
              ) *
                t.direction,
          h = (Math.max(1, Math.floor(a)) % 2) / 2,
          c = l + h,
          u = d + h;
        e.save();
        const _ = u + 0.05 * o,
          f = e.createRadialGradient(c, _, o / 2, c, _, 1.1 * o);
        if (
          (f.addColorStop(0, 'transparent'),
          f.addColorStop(0.1, n),
          f.addColorStop(1, 'transparent'),
          (e.fillStyle = f),
          e.beginPath(),
          e.arc(c, _, 1.1 * o, 0, 2 * Math.PI, !0),
          e.closePath(),
          e.fill(),
          e.restore(),
          e.beginPath(),
          e.arc(c, u, o, 0, 2 * Math.PI, !0),
          e.closePath(),
          e.fill(),
          null !== t.image)
        ) {
          const n = t.srcItem.type() === p.StoriesTimeLineItemType.Emoji,
            r = n ? 2 * (0, g.fillScaledRadius)(i, a) : 2 * o,
            s = v(t.image, r, !n, n ? 1 : 0);
          e.drawImage(s, c - r / 2, u - r / 2);
        }
        const x = Math.round(t.circleBorderWidth * a),
          w = (0, g.strokeScaledRadius)(t.circleRadius, a, x);
        if (
          ((e.lineWidth = x),
          e.beginPath(),
          e.arc(c, u, w, 0, 2 * Math.PI, !0),
          e.closePath(),
          e.stroke(),
          t.outsideBorderWidth)
        ) {
          e.save();
          const i = Math.round(t.outsideBorderWidth * a),
            n = w + x / 2 + i / 2;
          (e.lineWidth = i),
            (e.strokeStyle = r),
            e.beginPath(),
            e.arc(c, u, n, 0, 2 * Math.PI, !0),
            e.closePath(),
            e.stroke(),
            e.restore();
        }
        t.srcItem.sourceLabel();
      }
      class T {
        constructor(e, t, i, n) {
          (this._data = null),
            (this._labels = []),
            (this._cacheRects = {}),
            (this._items = []),
            (this._hitTestResult = e),
            (this._showTooltipHandler = t),
            (this._clearSelectedDataHandler = i),
            (this._phantomMode = Boolean(n));
        }
        setData(e) {
          this._data = e;
        }
        clearItems() {
          (this._labels = []), (this._items = []), (this._cacheRects = {});
        }
        addItem(e) {
          const t = {
              circleBackgroundColor: e.circleBackgroundColor,
              circleBorderColor: e.circleBorderColor,
              circleBorderWidth: e.circleBorderWidth,
              outsideBorderWidth: e.outsideBorderWidth,
              image: e.image,
              itemIndex: e.itemIndex,
              labelIndex: e.labelIndex,
              x: e.x,
              anchorY: e.anchorY,
              poleTailHeight: e.poleTailHeight,
              poleStartY: e.poleStartY,
              circleRadius: e.circleRadius,
              srcItem: e.srcItem,
              direction: e.direction * (e.inverseAnchorPosition ? -1 : 1),
              labelHeight: 0,
              labelId: -1,
              inverseAnchorPosition: e.inverseAnchorPosition,
            },
            i = {
              offsetX: 0,
              offsetY: 0,
              points: [new n.Point(e.x, e.anchorY)],
              forceCalculateMaxLineWidth: !0,
              vertAlign: -1 === e.labelDirection ? 'bottom' : 'top',
              horzAlign: 'center',
              horzTextAlign: 'center',
              font: e.labelFont,
              fontSize: e.labelFontSize,
              bold: e.labelFontBold,
              italic: e.labelFontItalic,
              backgroundRoundRect: e.labelBorderRadius,
              padding: e.labelPadding,
              boxPaddingVert: e.labelBoxPaddingVert,
              boxPaddingHorz: e.labelBoxPaddingHorz,
              wordWrapWidth: e.labelWordWrapWidth,
              color: e.labelColor,
              borderColor: e.labelBorderColor,
              borderWidth: 1,
              backgroundColor: e.labelBackgroundColor,
              text: e.text,
            };
          if (e.inverseAnchorPosition) {
            const e = (0, d.ensureDefined)(i.points);
            (e[0] = new n.Point(e[0].x, m(t))),
              (t.labelId = this._labels.length);
          } else {
            const r = new u.TextRenderer(i);
            this._labels.push(r),
              (t.labelId = this._labels.length),
              (t.labelHeight = r.measure().height);
            const s =
              1 === e.direction
                ? Math.min(t.poleStartY - t.labelHeight, t.anchorY)
                : Math.max(t.poleStartY + t.labelHeight, t.anchorY);
            t.anchorY !== s &&
              ((t.anchorY = s),
              (i.points = [new n.Point(e.x, s)]),
              r.setData(i));
          }
          const r = new u.TextRenderer(i);
          this._labels.push(r), this._items.push(t);
        }
        itemAnchorY(e) {
          return e >= this._items.length ? null : this._items[e].anchorY;
        }
        hitTest(e, t) {
          if (null === this._data) return null;
          for (let i = this._items.length - 1; i >= 0; --i) {
            const r = this._items[i],
              [s, a, o] = this._doesPointBelongToItem(r, e);
            if (s || a || o) {
              const e = {
                hideCrosshairLinesOnHover: !0,
                activeItem: s || a ? r.itemIndex : r.labelIndex,
              };
              o
                ? (e.areaName = _.AreaName.Text)
                : a && (e.areaName = _.AreaName.Style);
              const i = this._showTooltipHandler;
              if (void 0 !== i) {
                const s = {
                    targetBox: this._itemRect(r, t.cssHeight),
                    item: r.srcItem,
                  },
                  a = (e) => {
                    const [t, i] = this._doesPointBelongToItem(r, e);
                    return t || i;
                  };
                (e.tapHandler = (e) => {
                  e.preventDefault(),
                    i(
                      s,
                      new n.Point(e.clientX - e.localX, e.clientY - e.localY),
                      a,
                    );
                }),
                  (e.clickHandler = (e) => {
                    i(
                      s,
                      new n.Point(e.clientX - e.localX, e.clientY - e.localY),
                      a,
                    );
                  });
                const o = this._clearSelectedDataHandler;
                void 0 !== o &&
                  ((e.doubleClickHandler = (e) => o()),
                  (e.pressedMouseMoveHandler = (e) => o()),
                  (e.executeDefaultAction = {
                    pressedMouseMoveHandler: !0,
                    touchMoveHandler: !0,
                  }));
              }
              return new _.HitTestResult(this._hitTestResult, e);
            }
          }
          return null;
        }
        draw(e, t) {
          if (null === this._data) return;
          e.save(), this._phantomMode && (e.globalAlpha = 0.5);
          const { poleColor: i, emojiRadius: n } = this._data,
            r = t.pixelRatio,
            s = Math.max(1, Math.floor(r)),
            a = s % 2 ? 0.5 : 0;
          e.beginPath(), (e.strokeStyle = i), (e.lineWidth = s);
          for (const t of this._items) {
            const i = Math.round(t.x * r) + a;
            e.moveTo(i, Math.round(x(t) * r)),
              e.lineTo(i, Math.round(w(t) * r)),
              0 !== t.poleTailHeight &&
                (e.moveTo(i, Math.round(m(t) * r)),
                e.lineTo(i, Math.round(R(t) * r)));
          }
          e.stroke();
          for (const i of this._items)
            (e.strokeStyle = i.circleBorderColor),
              (e.fillStyle = i.circleBackgroundColor),
              i.circleRadius > 0 &&
                y(
                  e,
                  i,
                  n,
                  this._data.shadowColor,
                  this._data.outsideBorderColor,
                  t,
                ),
              this._labels[i.labelId].draw(e, t);
          e.restore();
        }
        _itemRect(e, t) {
          if (!this._cacheRects[e.labelId]) {
            const i = this._labels[e.labelId].rect(),
              n = e.circleRadius > 0 ? e.circleRadius + e.circleBorderWidth : 0,
              r = i.y < e.poleStartY;
            this._cacheRects[e.labelId] = {
              top: Math.max(r ? i.y : e.poleStartY, 0),
              bottom: Math.min(r ? e.poleStartY : i.y + i.height, t),
              left: Math.min(e.x - n, i.x),
              right: Math.max(e.x + n, i.x + i.width),
            };
          }
          return this._cacheRects[e.labelId];
        }
        _doesPointBelongToItem(e, t) {
          const i = (0, h.lastMouseOrTouchEventInfo)().isTouch ? 20 : 3,
            r = e.x,
            s =
              (0, o.distanceToSegment)(
                new n.Point(r, x(e)),
                new n.Point(r, w(e)),
                t,
              ).distance < i,
            a =
              !s &&
              e.circleRadius > 0 &&
              (0, l.pointInCircle)(
                t,
                new n.Point(
                  r,
                  (function (e) {
                    return e.inverseAnchorPosition
                      ? e.anchorY + e.circleRadius * e.direction
                      : e.anchorY +
                          (e.labelHeight + e.poleTailHeight + e.circleRadius) *
                            e.direction;
                  })(e),
                ),
                e.circleRadius + i,
              );
          return [
            s,
            a,
            !s && !a && null !== this._labels[e.labelId].hitTest(t),
          ];
        }
      }
      const b = {
          circleBackgroundColor: r.colorsPalette['color-cold-gray-800'],
          circleBorderColor: r.colorsPalette['color-cold-gray-900'],
          labelBackgroundColor: r.colorsPalette['color-cold-gray-900'],
          labelBorderColor: r.colorsPalette['color-cold-gray-800'],
          labelTextColor: r.colorsPalette['color-cold-gray-200'],
          poleColor: r.colorsPalette['color-cold-gray-500'],
          shadowColor: 'rgba(0,0,0,0.4)',
          selectionColor: r.colorsPalette['color-tv-blue-500'],
          labelHoveredColor: r.colorsPalette['color-cold-gray-800'],
          labelSelectedColor: r.colorsPalette['color-tv-blue-a900'],
        },
        L = {
          circleBackgroundColor: r.colorsPalette['color-cold-gray-100'],
          circleBorderColor: r.colorsPalette['color-white'],
          labelBackgroundColor: r.colorsPalette['color-white'],
          labelBorderColor: r.colorsPalette['color-cold-gray-150'],
          labelTextColor: r.colorsPalette['color-cold-gray-900'],
          poleColor: r.colorsPalette['color-cold-gray-500'],
          shadowColor: 'rgba(107,121,136,0.4)',
          selectionColor: r.colorsPalette['color-tv-blue-500'],
          labelHoveredColor: r.colorsPalette['color-cold-gray-100'],
          labelSelectedColor: r.colorsPalette['color-tv-blue-50'],
        };
      class S {
        constructor(e, t, i, n, r) {
          (this._renderer = null),
            (this._invalidated = !0),
            (this._model = e),
            (this._timeLine = t),
            (this._timeLineItemsRenderer = new T(
              i,
              null == n ? void 0 : n.tooltipHandler,
              null == n ? void 0 : n.clearSelectedDataHandler,
              r,
            ));
        }
        update() {
          this._invalidated = !0;
        }
        renderer(e, t) {
          return (
            this._invalidated &&
              (this._updateImpl(e), (this._invalidated = !1)),
            this._renderer
          );
        }
        itemAnchorY(e) {
          return this._timeLineItemsRenderer.itemAnchorY(e);
        }
        _updateImpl(e) {
          (this._renderer = null), this._timeLineItemsRenderer.clearItems();
          const t = this._timeLine.priceSource();
          if (null === t) return;
          const i = this._model.timeScale(),
            n = t.priceScale(),
            r = t.firstValue();
          if (i.isEmpty() || null === n || n.isEmpty() || null === r) return;
          const o = this._model.isDark(),
            l = o ? b : L;
          let d;
          const h = this._model.mainSeries();
          for (const c of this._timeLine.items()) {
            if (this._timeLine.isHidden(c)) continue;
            const u = c.position(),
              _ =
                t === h
                  ? (0, a.getSeriesPosition)(h, c)
                  : (0, a.getNoDataPosition)(c, n, r);
            if (null === _) continue;
            const p = i.indexToCoordinate(_.index),
              g = n.priceToCoordinate(_.price, r),
              f = c.showPlate();
            let v = (0, a.positionToCoordinate)(
              u,
              e,
              g,
              _.positionPointDirection,
            );
            v >= -1e-10 &&
              v <= e + 1e-10 &&
              (v = Math.min(e - 2, Math.max(2, v)));
            const x = _.visualDirection !== _.positionPointDirection,
              w = _.visualDirection,
              m = this._timeLine.isItemSelected(c),
              R = this._timeLine.isItemHovered(c),
              y = {
                circleBackgroundColor:
                  c.backgroundPlateColor(o) || l.circleBackgroundColor,
                outsideBorderWidth: m ? 2 : R ? 1 : 0,
                circleBorderColor: l.circleBorderColor,
                circleBorderWidth: 1,
                image: c.image(),
                itemIndex: c.itemIndex(),
                labelIndex: c.labelIndex(),
                x: p,
                anchorY: v,
                poleTailHeight: c.headline() && f ? 10 : 0,
                poleStartY: _.poleStartY,
                circleRadius: f ? 35 : 0,
                direction: w,
                inverseAnchorPosition: x,
                srcItem: c,
                text: c.headline(),
                labelDirection: _.positionPointDirection,
                labelFont: s.CHART_FONT_FAMILY,
                labelFontSize: (c.fontSize && c.fontSize()) || 12,
                labelFontBold: (c.fontBold && c.fontBold()) || !1,
                labelFontItalic: (c.fontItalic && c.fontItalic()) || !1,
                labelBorderRadius: 4,
                labelPadding: 3,
                labelBoxPaddingVert: 6,
                labelBoxPaddingHorz: 8,
                labelWordWrapWidth: 134,
                labelColor: l.labelTextColor,
                labelBorderColor: l.labelBorderColor,
                labelBackgroundColor: m
                  ? l.labelSelectedColor
                  : R
                  ? l.labelHoveredColor
                  : l.labelBackgroundColor,
              };
            this._timeLine.isItemHovered(c)
              ? (d = y)
              : this._timeLineItemsRenderer.addItem(y);
          }
          void 0 !== d && this._timeLineItemsRenderer.addItem(d),
            this._timeLineItemsRenderer.setData({
              emojiRadius: 16,
              poleColor: l.poleColor,
              shadowColor: l.shadowColor,
              outsideBorderColor: l.selectionColor,
            }),
            (this._renderer = this._timeLineItemsRenderer);
        }
      }
      var P = i(87088),
        C = i(10992),
        M = i(67857);
      class I extends M.LineSourcePaneView {
        constructor(e, t) {
          super(e, t),
            (this._renderer = new P.CompositeRenderer()),
            (this._storiesEventsPaneView = new S(
              t,
              e,
              _.HitTestResult.MOVEPOINT,
              void 0,
              e.isPhantom(),
            ));
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
        _updateImpl(e, t) {
          super._updateImpl(),
            this._renderer.clear(),
            this._storiesEventsPaneView.update();
          const i = this._storiesEventsPaneView.renderer(e, t);
          if (
            (null !== i && this._renderer.append(i), this._source.isPhantom())
          )
            return;
          const r = this._storiesEventsPaneView.itemAnchorY(0);
          if (null === r) return;
          const s = this._points[0],
            a = new n.Point(s.x, r);
          (a.data = s.data),
            (a.square = !0),
            this._renderer.append(
              this.createLineAnchor(
                {
                  points: [a],
                  pointsCursorType: [C.PaneCursorType.VerticalResize],
                },
                0,
              ),
            );
        }
      }
    },
    69486: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { SineLinePaneView: () => h });
      var n = i(72927),
        r = i(67857),
        s = i(87088),
        a = i(58729),
        o = i(10288),
        l = i(5025);
      class d extends a.ScaledPaneRenderer {
        constructor(e) {
          super(), (this._data = e);
        }
        hitTest(e, t) {
          const i = ((e.x - this._data.point.x) * Math.PI) / this._data.width;
          let n = (Math.sin(i - Math.PI / 2) * this._data.height) / 2;
          return (
            (n = this._data.point.y + n + this._data.height / 2),
            Math.abs(n - e.y) <= 3
              ? new o.HitTestResult(o.HitTestResult.MOVEPOINT)
              : null
          );
        }
        _drawImpl(e, t) {
          (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.lineWidth),
            (0, l.setLineStyle)(e, this._data.lineStyle),
            e.beginPath(),
            e.moveTo(this._data.point.x, this._data.point.y);
          const i = Math.max(1, this._data.width / 30),
            n = t.cssWidth - this._data.point.x + i;
          for (let t = 1; t <= n; t += i) {
            const i = (t * Math.PI) / this._data.width,
              n = (Math.sin(i - Math.PI / 2) * this._data.height) / 2;
            e.lineTo(
              this._data.point.x + t,
              this._data.point.y + n + this._data.height / 2,
            );
          }
          e.stroke();
        }
      }
      class h extends r.LineSourcePaneView {
        constructor(e, t) {
          super(e, t), (this._renderer = new s.CompositeRenderer());
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
        _updateImpl(e, t) {
          if (
            (super._updateImpl(),
            this._renderer.clear(),
            this._points.length < 2)
          )
            return;
          const [i, r] = this._source.points();
          if (0 === 2 * Math.abs(i.index - r.index))
            return void this.addAnchors(this._renderer);
          const [s, a] = this._points,
            o = Math.abs(s.x - a.x),
            l = a.y - s.y,
            h = this._source.properties().childs(),
            c = h.linewidth.value();
          if ((s.y < -c && a.y < -c) || (s.y > e + c && a.y > e + c)) return;
          const u = 2 * o,
            _ =
              s.x > 0
                ? s.x - Math.ceil(s.x / u) * u
                : s.x + Math.floor(-s.x / u) * u,
            p = {
              point: new n.Point(_, s.y),
              width: o,
              height: l,
              color: h.linecolor.value(),
              lineWidth: h.linewidth.value(),
              lineStyle: h.linestyle.value(),
            };
          this._renderer.append(new d(p)), this.addAnchors(this._renderer);
        }
      }
    },
    70014: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { StudyLineDataSourceAnchorsPaneView: () => r });
      var n = i(67857);
      class r extends n.LineSourcePaneView {
        renderer() {
          return (
            this._invalidated && (this._updateImpl(), (this._invalidated = !1)),
            this.createLineAnchor({ points: this._getPoints() }, 0)
          );
        }
      }
    },
    15253: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { TextPaneView: () => p });
      var n = i(16282),
        r = i(72927),
        s = i(54837),
        a = i(10992),
        o = i(44896),
        l = i(87088),
        d = i(73301),
        h = i(77036),
        c = i(10288),
        u = i(67857);
      const _ = [a.PaneCursorType.HorizontalResize];
      class p extends u.LineSourcePaneView {
        constructor(e, t, i, n, r, s, a, l) {
          super(e, t),
            (this._textRenderer = new o.TextRenderer()),
            (this._noSelection = !1),
            (this._renderer = null),
            (this._offsetX = i),
            (this._offsetY = n),
            (this._vertAlign = r),
            (this._horzAlign = s),
            (this._forceTextAlign = Boolean(a)),
            (this._noSelection = !1),
            (this._renderer = null),
            (this._recalculateSourcePointsOnFirstUpdate = l);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
        disableSelection() {
          this._noSelection = !0;
        }
        isEditMode() {
          return !this._getModel().readOnly();
        }
        _updateImpl(e, t) {
          super._updateImpl(e, t), (this._renderer = null);
          const i = this._getSource(),
            a = i.priceScale();
          if (!a || a.isEmpty()) return;
          const o = i.properties().childs(),
            u = this._getModel(),
            p = {
              text: o.text.value(),
              color: o.color.value(),
              fontSize: o.fontsize.value(),
              boxPadding: o.fontsize.value() / 6,
              font: s.CHART_FONT_FAMILY,
              vertAlign: this._vertAlign || 'top',
              horzAlign: this._horzAlign || 'left',
              offsetX: this._offsetX || 0,
              offsetY: this._offsetY || 0,
              forceTextAlign: this._forceTextAlign,
            };
          if (
            ((p.points = i.isFixed() ? i.fixedPoints() : this._points),
            o.fillBackground &&
              o.fillBackground.value() &&
              (p.backgroundColor = o.backgroundColor.value()),
            o.drawBorder &&
              o.drawBorder.value() &&
              (p.borderColor = o.borderColor.value()),
            o.wordWrap &&
              o.wordWrap.value() &&
              (p.wordWrapWidth = o.wordWrapWidth.value()),
            (p.bold = o.bold && o.bold.value()),
            (p.italic = o.italic && o.italic.value()),
            (p.highlightBorder = u.selection().isSelected(i)),
            !i.isFixed() && o.fixedSize && !o.fixedSize.value())
          ) {
            p.scaleX = u.timeScale().barSpacing() / i.barSpacing();
            const e = (0, n.ensureNotNull)(a.priceRange());
            let t = a.height() / e.length();
            const r = a.logFormula();
            i.isPriceDencityLog() &&
              !a.isLog() &&
              (t =
                a.height() /
                ((0, h.toLog)(e.maxValue(), r) -
                  (0, h.toLog)(e.minValue(), r))),
              !i.isPriceDencityLog() &&
                a.isLog() &&
                (t =
                  a.height() /
                  ((0, h.fromLog)(e.maxValue(), r) -
                    (0, h.fromLog)(e.minValue(), r)));
            const s = i.priceDencity();
            void 0 !== s && (p.scaleY = t / s),
              (void 0 === s || void 0 === p.scaleY || p.scaleY <= 0) &&
                delete p.scaleY;
          }
          if (
            (this._textRenderer.setData(p),
            this._textRenderer.isOutOfScreen(t, e))
          )
            return;
          const g = 1 === p.points.length;
          if (g && void 0 !== this._recalculateSourcePointsOnFirstUpdate) {
            this._renderer = null;
            const e = this._textRenderer.measure();
            return (
              this._recalculateSourcePointsOnFirstUpdate(e.width, e.height),
              void (this._recalculateSourcePointsOnFirstUpdate = void 0)
            );
          }
          if (g && !this._noSelection) {
            const e = new l.CompositeRenderer();
            e.append(this._textRenderer);
            const t = p.points[0].clone(),
              i = this._textRenderer.measure(),
              n = i.width,
              s = i.height;
            if (p.wordWrapWidth) {
              const i = new r.Point(t.x + n, t.y + s / 2);
              (i.data = 1),
                e.append(
                  this.createLineAnchor(
                    { points: [i], pointsCursorType: _ },
                    1,
                  ),
                );
            }
            const a = new r.Point(t.x + n / 2, t.y + s);
            return (
              (a.data = 0),
              e.append(
                new d.SelectionRenderer({
                  points: [a],
                  bgColors: this._lineAnchorColors([a]),
                  visible: this.areAnchorsVisible(),
                  hittestResult: c.HitTestResult.MOVEPOINT,
                  barSpacing: u.timeScale().barSpacing(),
                }),
              ),
              void (this._renderer = e)
            );
          }
          this._renderer = this._textRenderer;
        }
      }
    },
    10319: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { LineToolThreeDrivesPaneView: () => u });
      var n = i(33420),
        r = i(87088),
        s = i(44896),
        a = i(57649),
        o = i(6397),
        l = i(71172),
        d = i(59943),
        h = i(67857),
        c = i(54837);
      class u extends h.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._numericFormatter = new a.NumericFormatter()),
            (this._retrace1LabelRenderer = new s.TextRenderer()),
            (this._retrace12LabelRenderer = new s.TextRenderer()),
            (this._polyLineRenderer = new d.PolygonRenderer()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl(), (this._renderer = null);
          let e = NaN,
            t = NaN;
          if (this._source.points().length >= 4) {
            const [, t, i, n] = this._source.points();
            e =
              Math.round(
                100 * Math.abs((n.price - i.price) / (i.price - t.price)),
              ) / 100;
          }
          if (this._source.points().length >= 6) {
            const [, , , e, i, n] = this._source.points();
            t =
              Math.round(
                100 * Math.abs((n.price - i.price) / (i.price - e.price)),
              ) / 100;
          }
          if (this._points.length < 2) return;
          const i = this._source.properties().childs(),
            s = new r.CompositeRenderer(),
            a = (e, t) => ({
              points: [e],
              text: t,
              color: i.textcolor.value(),
              vertAlign: 'middle',
              horzAlign: 'center',
              font: c.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: i.bold && i.bold.value(),
              italic: i.italic && i.italic.value(),
              fontsize: i.fontsize.value(),
              backgroundColor: i.color.value(),
              backgroundRoundRect: 4,
            }),
            d = (e, t) => ({
              points: [e, t],
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: n.LINESTYLE_DOTTED,
              extendleft: !1,
              extendright: !1,
              leftend: l.LineEnd.Normal,
              rightend: l.LineEnd.Normal,
            }),
            h = {
              points: this._points,
              color: i.color.value(),
              linewidth: i.linewidth.value(),
              linestyle: n.LINESTYLE_SOLID,
              leftend: l.LineEnd.Normal,
              rightend: l.LineEnd.Normal,
              backcolor: 'rgba(0, 0, 0, 0)',
              fillBackground: !1,
              filled: !1,
            };
          if (
            (this._polyLineRenderer.setData(h),
            s.append(this._polyLineRenderer),
            !isNaN(e))
          ) {
            const t = new o.TrendLineRenderer();
            t.setData(d(this._points[1], this._points[3])), s.append(t);
            const i = a(
              this._points[1].add(this._points[3]).scaled(0.5),
              this._numericFormatter.format(e),
            );
            this._retrace1LabelRenderer.setData(i),
              s.append(this._retrace1LabelRenderer);
          }
          if (!isNaN(t)) {
            const e = new o.TrendLineRenderer();
            e.setData(d(this._points[3], this._points[5])), s.append(e);
            const i = a(
              this._points[5].add(this._points[3]).scaled(0.5),
              this._numericFormatter.format(t),
            );
            this._retrace12LabelRenderer.setData(i),
              s.append(this._retrace12LabelRenderer);
          }
          this.addAnchors(s), (this._renderer = s);
        }
      }
    },
    24216: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(67857).LineSourcePaneView,
        s = i(10288).HitTestResult,
        a = i(87088).CompositeRenderer,
        o = i(50968),
        l = i(58729).ScaledPaneRenderer;
      class d extends l {
        constructor() {
          super(), (this._data = null);
        }
        setData(e) {
          this._data = e;
        }
        _drawImpl(e) {
          null !== this._data &&
            ((e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth),
            CanvasEx.setLineStyle(e, this._data.linestyle),
            e.save(),
            e.translate(this._data.point.x + 1, this._data.point.y),
            e.scale(this._data.width, this._data.height),
            e.beginPath(),
            e.arc(0.5, 0, 0.5, Math.PI, 0, !1),
            e.restore(),
            e.stroke(),
            this._data.fillBackground &&
              ((e.fillStyle = o.generateColor(
                this._data.backcolor,
                this._data.transparency,
              )),
              e.fill()));
        }
        hitTest(e) {
          if (null === this._data || e.y > this._data.point.y) return null;
          if (
            e.x < this._data.point.x ||
            e.x > this._data.point.x + this._data.width
          )
            return null;
          var t = new n(
              this._data.point.x + this._data.width / 2,
              this._data.point.y,
            ),
            i = e.subtract(t),
            r = this._data.height / this._data.width;
          i.y /= r;
          var a = i.length();
          return Math.abs(a - this._data.width / 2) < 3
            ? new s(s.MOVEPOINT)
            : null;
        }
      }
      t.TimeCyclesPaneView = class extends r {
        constructor(e, t) {
          super(e, t), (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            !(this._points.length < 2))
          ) {
            var e = this._source.points(),
              t = e[0],
              i = e[1],
              r = Math.min(t.index, i.index),
              s = Math.max(t.index, i.index),
              o = s - r,
              l = this._points[0],
              h = this._points[1],
              c = Math.abs(l.x - h.x),
              u = new a(),
              _ = this._source.properties(),
              p = this._model.timeScale();
            if (0 !== o) {
              for (var g = Math.min(l.x, h.x), f = [], v = r; g > -c; v -= o)
                (g = p.indexToCoordinate(v)), f.push(g);
              g = Math.max(l.x, h.x);
              for (v = s; g < p.width(); v += o)
                (g = p.indexToCoordinate(v)), f.push(g);
              for (var x = 0; x < f.length; x++) {
                var w = {
                    point: new n(f[x], l.y),
                    width: c,
                    height: c,
                    color: _.linecolor.value(),
                    linewidth: _.linewidth.value(),
                    linestyle: _.linestyle.value(),
                    fillBackground: _.fillBackground.value(),
                    backcolor: _.backgroundColor.value(),
                    transparency: _.transparency.value(),
                  },
                  m = new d();
                m.setData(w), u.append(m);
              }
              this.addAnchors(u), (this._renderer = u);
            }
          }
        }
      };
    },
    10854: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(79881).t,
        s = i(67857).LineSourcePaneView,
        a = i(56224).TrendLineStatsRenderer,
        o = i(44896).TextRenderer,
        l = i(6397).TrendLineRenderer,
        d = i(87088).CompositeRenderer,
        h = i(62159).PercentageFormatter,
        c = i(73301).SelectionRenderer,
        u = i(85421).PipFormatter,
        _ = i(71172).LineEnd,
        p = i(3785).LabelSettings,
        g = i(54837),
        f = i(10288).HitTestResult,
        v = i(58729).ScaledPaneRenderer,
        x = i(58729).ScaledPaneRendererWrapper,
        w = i(76553).forceLTRStr;
      class m extends v {
        constructor() {
          super(), (this._data = null);
        }
        setData(e) {
          this._data = e;
        }
        hitTest() {
          return null;
        }
        _drawImpl(e) {
          if (null !== this._data) {
            e.save(),
              e.translate(this._data.point.x, this._data.point.y),
              (e.strokeStyle = this._data.color);
            var t = [1, 2];
            'function' == typeof e.setLineDash
              ? e.setLineDash(t)
              : void 0 !== e.mozDash
              ? (e.mozDash = t)
              : void 0 !== e.webkitLineDash && (e.webkitLineDash = t);
            var i = this._data.size;
            e.beginPath(),
              e.moveTo(0, 0),
              e.lineTo(i, 0),
              e.arc(0, 0, i, 0, -this._data.angle, this._data.angle > 0),
              e.stroke(),
              e.restore();
          }
        }
      }
      t.TrendAnglePaneView = class extends s {
        constructor(e, t) {
          super(e, t),
            (this._label = null),
            (this._rendererCache = {}),
            (this._pipFormatter = null),
            (this._lastSymbolInfo = null),
            (this._trendLineRenderer = new l()),
            (this._angleRenderer = new m()),
            (this._angleLabelRenderer = new o()),
            (this._renderer = null);
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            this._points.length > 0 && void 0 !== this._source._angle)
          ) {
            var e = this._points[0],
              t = Math.cos(this._source._angle),
              i = -Math.sin(this._source._angle),
              s = new n(t, i);
            (this._secondPoint = e.addScaled(s, this._source._distance)),
              (this._secondPoint.data = 1),
              (this._middlePoint = this._source.calcMiddlePoint(
                this._points[0],
                this._secondPoint,
              ));
          }
          if (((this._label = null), !(this._source.points().length < 2))) {
            e = this._source.points()[0];
            var o,
              l,
              v = this._source.points()[1],
              m = [];
            if (
              this._source.properties().showPriceRange.value() &&
              this._source.priceScale()
            ) {
              var R = v.price - e.price,
                y = R / Math.abs(e.price);
              o =
                this._source.ownerSource().formatter().format(R) +
                ' (' +
                new h().format(100 * y) +
                ') ';
              var T = this._model.mainSeries().symbolInfo();
              T &&
                T !== this._lastSymbolInfo &&
                ((this._pipFormatter = new u(
                  T.pricescale,
                  T.minmov,
                  T.type,
                  T.minmove2,
                )),
                (this._lastSymbolInfo = T)),
                (o += this._pipFormatter
                  ? ', ' + this._pipFormatter.format(R)
                  : ''),
                m.push('priceRange');
            }
            if (this._source.properties().showBarsRange.value()) {
              l = '';
              var b = v.index - e.index;
              (l += r('{count} bars').format({ count: w(b) })),
                m.push('barsRange');
            }
            (this._label =
              [w(o), l]
                .filter(function (e) {
                  return e;
                })
                .join('\n') || null),
              (this._icons = m);
            var L = new d(),
              S = {},
              P =
                this.isHoveredSource() ||
                this.isSelectedSource() ||
                this._source.properties().alwaysShowStats.value(),
              C =
                (this.isHoveredSource() || this.isSelectedSource()) &&
                this._source.properties().showMiddlePoint.value();
            if (this._secondPoint && this._points.length > 0) {
              var M = this._source.properties().linecolor.value();
              if (
                ((S.points = [this._points[0], this._secondPoint]),
                (S.width = this._model.timeScale().width()),
                (S.height = this._source.priceScale().height()),
                (S.color = M),
                (S.linewidth = this._source.properties().linewidth.value()),
                (S.linestyle = this._source.properties().linestyle.value()),
                (S.extendleft = this._source.properties().extendLeft.value()),
                (S.extendright = this._source.properties().extendRight.value()),
                (S.leftend = _.Normal),
                (S.rightend = _.Normal),
                this._trendLineRenderer.setData(S),
                L.append(this._trendLineRenderer),
                P && this._label && 2 === this._points.length)
              ) {
                var I = this._source.properties().statsPosition.value(),
                  N = this._source.getPointByPosition(
                    I,
                    S.points[0],
                    this._middlePoint,
                    S.points[1],
                  ),
                  D = this._model.isDark(),
                  A = D ? p.bgColorDark : p.bgColorLight,
                  k = D ? p.textColorDark : p.textColorLight,
                  E = {
                    points: [N],
                    text: this._label,
                    color: k,
                    isDark: D,
                    font: g.CHART_FONT_FAMILY,
                    fontSize: p.fontSize,
                    lineSpacing: p.lineSpacing,
                    backgroundColor: A,
                    backgroundRoundRect: p.rectRadius,
                    paddingLeft: p.paddingLeftRight,
                    paddingRight: p.paddingLeftRight,
                    paddingTop: p.paddingTopBottom,
                    paddingBottom: p.paddingTopBottom,
                    textPadding: p.textPadding,
                    doNotAlignText: !0,
                    icons: this._icons,
                  },
                  B = p.offset;
                (E.offsetX = B),
                  (E.offsetY = B),
                  ((this._points[1].y < this._points[0].y &&
                    this._points[1].x < this._points[0].x) ||
                    (this._points[1].y > this._points[0].y &&
                      this._points[1].x > this._points[0].x)) &&
                    (E.vertAlign = 'bottom'),
                  L.append(new x(new a(E, this._rendererCache)));
              }
              this._middlePoint &&
                L.append(
                  new c({
                    points: [this._middlePoint],
                    bgColors: this._lineAnchorColors([this._middlePoint]),
                    color: M,
                    visible: C && this.areAnchorsVisible(),
                    hittestResult: f.REGULAR,
                  }),
                );
              var O = {};
              (O.point = this._points[0]),
                (O.angle = this._source._angle),
                (O.color = this._source.properties().linecolor.value()),
                (O.size = 50),
                this._angleRenderer.setData(O),
                L.append(this._angleRenderer);
              var H = Math.round((180 * O.angle) / Math.PI) + 'º';
              (N = this._points[0].clone()).x = N.x + 50;
              var z = {
                points: [N],
                text: w(H),
                color: this._source.properties().textcolor.value(),
                horzAlign: 'left',
                font: g.CHART_FONT_FAMILY,
                offsetX: 5,
                offsetY: 0,
                bold: this._source.properties().bold.value(),
                italic: this._source.properties().italic.value(),
                fontsize: this._source.properties().fontsize.value(),
                vertAlign: 'middle',
              };
              this._angleLabelRenderer.setData(z),
                L.append(this._angleLabelRenderer);
            }
            0,
              this._secondPoint &&
                this._points.length > 0 &&
                L.append(
                  this.createLineAnchor(
                    { points: [this._points[0], this._secondPoint] },
                    0,
                  ),
                ),
              (this._renderer = L);
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    67390: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(72095).RectangleRenderer,
        s = i(6397).TrendLineRenderer,
        a = i(68791).PaneRendererCachedImage,
        o = i(10288).HitTestResult,
        l = i(87088).CompositeRenderer,
        d = i(71172).LineEnd,
        h = i(75235).fibLevelCoordinate,
        c = i(44993).LineToolPaneViewWithLevelledTextCache,
        u = i(57583).LevelledLineToolLabelsCache;
      class _ extends u {
        _selectStartPrice(e) {
          return e.points()[2].price;
        }
        priceRange(e, t) {
          var i = this.points(e),
            n = i[0],
            r = i[1],
            s = t ? n.price - r.price : r.price - n.price;
          if (!this._calculateLogLevels(e)) return { price: s };
          var a = e.priceScale(),
            o = e.ownerSource().firstValue(),
            l = a.priceToCoordinate(n.price, o),
            d = a.priceToCoordinate(r.price, o);
          return { price: s, coordinate: t ? l - d : d - l };
        }
      }
      t.TrendBasedFibExtensionPaneView = class extends c {
        constructor(e, t) {
          super(e, t),
            (this._rendererCache = {}),
            (this._trendLineRendererPoints12 = new s()),
            (this._trendLineRendererPoints23 = new s()),
            (this._renderer = null);
        }
        getCacheRects(e, t) {
          super.getCacheRects(e, t);
          var i = this._cacheState.preparedCells.cells[
            this._levels[t].index - 1
          ];
          if (i) {
            var r = this._points[1],
              s = this._points[2],
              a = Math.min(r.x, s.x),
              o = Math.max(r.x, s.x);
            (r = new n(a, this._levels[t].y)),
              (s = new n(o, this._levels[t].y));
            var l,
              d = this._source.properties(),
              h = d.extendLines.value() ? this._model.timeScale().width() : o;
            switch (d.horzLabelsAlign.value()) {
              case 'left':
                l = r;
                break;
              case 'center':
                ((l = r.add(s).scaled(0.5)).x += i.width / 2),
                  (l.x = Math.round(l.x));
                break;
              case 'right':
                d.extendLines.value()
                  ? (l = new n(h - 4, this._levels[t].y))
                  : (((l = new n(h + 4, this._levels[t].y)).x += i.width),
                    (l.x = Math.round(l.x)));
            }
            var c = {
                left: i.left,
                top: this._cache.topByRow(this._cacheState.row),
                width: i.width,
                height: this._cache.rowHeight(this._cacheState.row),
              },
              u = {
                left: l.x - c.width,
                top: l.y,
                width: i.width,
                height: c.height,
              },
              _ = d.vertLabelsAlign.value();
            return (
              'middle' === _ && (u.top -= u.height / 2),
              'bottom' === _ && (u.top -= u.height),
              { cacheRect: c, targetRect: u }
            );
          }
        }
        _createCache(e) {
          return new _(
            this._source.properties().fibLevelsBasedOnLogScale,
            this._source.levelsCount(),
            e,
          );
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            3 === this._source.points().length)
          ) {
            var e = this._source.priceScale();
            if (!e || e.isEmpty() || this._model.timeScale().isEmpty()) return;
            var t = this._source.ownerSource().firstValue();
            if (null == t) return;
            var i = this._source.points()[0],
              c = this._source.points()[1],
              u = this._source.points()[2],
              _ = !1;
            (C = this._source.properties()).reverse &&
              C.reverse.value() &&
              (_ = C.reverse.value()),
              (this._levels = []);
            var p,
              g,
              f = _ ? i.price : c.price,
              v = _ ? c.price : i.price,
              x = f - v,
              w = e.isLog() && C.fibLevelsBasedOnLogScale.value();
            if (w)
              (p = e.priceToCoordinate(f, t) - e.priceToCoordinate(v, t)),
                (g = e.priceToCoordinate(u.price, t));
            for (
              var m = { price: u.price, coordinate: g },
                R = { price: x, coordinate: p },
                y = this._source.levelsCount(),
                T = 1;
              T <= y;
              T++
            ) {
              var b = C['level' + T];
              if (b.visible.value()) {
                var L = b.coeff.value(),
                  S = b.color.value(),
                  P = h(m, R, L, e, t, w);
                this._levels.push({
                  color: S,
                  price: e.coordinateToPrice(P, t),
                  y: P,
                  linewidth: C.levelsStyle.linewidth.value(),
                  linestyle: C.levelsStyle.linestyle.value(),
                  index: T,
                });
              }
            }
          }
          if (!(this._points.length < 2)) {
            var C,
              M = new l();
            (i = this._points[0]), (c = this._points[1]);
            if ((C = this._source.properties()).trendline.visible.value()) {
              var I = {
                points: [i, c],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: C.trendline.color.value(),
                linewidth: C.trendline.linewidth.value(),
                linestyle: C.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: d.Normal,
                rightend: d.Normal,
              };
              this._trendLineRendererPoints12.setData(I),
                M.append(this._trendLineRendererPoints12);
            }
            if (this._points.length < 3)
              return this.addAnchors(M), void (this._renderer = M);
            u = this._points[2];
            if (C.trendline.visible.value()) {
              I = {
                points: [c, u],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: C.trendline.color.value(),
                linewidth: C.trendline.linewidth.value(),
                linestyle: C.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: d.Normal,
                rightend: d.Normal,
              };
              this._trendLineRendererPoints23.setData(I),
                M.append(this._trendLineRendererPoints23);
            }
            var N = Math.min(u.x, c.x),
              D = Math.max(u.x, c.x),
              A = C.fillBackground.value(),
              k = C.transparency.value(),
              E = C.extendLinesLeft.value(),
              B = C.extendLines.value();
            if (A)
              for (T = 0; T < this._levels.length; T++)
                if (T > 0 && A) {
                  var O = this._levels[T - 1],
                    H =
                      ((i = new n(N, this._levels[T].y)),
                      (c = new n(D, O.y)),
                      {});
                  (H.points = [i, c]),
                    (H.color = this._levels[T].color),
                    (H.linewidth = 0),
                    (H.backcolor = this._levels[T].color),
                    (H.fillBackground = !0),
                    (H.transparency = k),
                    (H.extendLeft = E),
                    (H.extendRight = B);
                  var z = new r(void 0, void 0, !0);
                  z.setData(H), M.append(z);
                }
            var V = N,
              W = D;
            V === W && (E && (V -= 1), B && (W += 1));
            for (T = 0; T < this._levels.length; T++) {
              I = {
                points: [
                  (i = new n(V, this._levels[T].y)),
                  (c = new n(W, this._levels[T].y)),
                ],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._levels[T].color,
                linewidth: this._levels[T].linewidth,
                linestyle: this._levels[T].linestyle,
                extendleft: E,
                extendright: B,
                leftend: d.Normal,
                rightend: d.Normal,
              };
              var F = new s();
              if (
                (F.setData(I),
                F.setHitTest(
                  new o(
                    o.MOVEPOINT,
                    { snappingPrice: this._levels[T].price },
                    this._levels[T].index,
                  ),
                ),
                M.append(F),
                C.showCoeffs.value() || C.showPrices.value())
              ) {
                var Y = new a(this, T);
                M.append(Y);
              }
            }
            this.addAnchors(M), (this._renderer = M);
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    8287: (e, t, i) => {
      'use strict';
      var n = i(72927).Point,
        r = i(69819).VerticalLineRenderer,
        s = i(67857).LineSourcePaneView,
        a = i(44896).TextRenderer,
        o = i(72095).RectangleRenderer,
        l = i(6397).TrendLineRenderer,
        d = i(10288).HitTestResult,
        h = i(87088).CompositeRenderer,
        c = i(71172).LineEnd,
        u = i(54837);
      t.TrendBasedFibTimePaneView = class extends s {
        constructor(e, t) {
          super(e, t),
            (this._trendLineRendererPoints12 = new l()),
            (this._trendLineRendererPoints23 = new l()),
            (this._renderer = null);
        }
        _updateImpl() {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            3 === this._source.points().length)
          ) {
            if (
              !this._source.priceScale() ||
              this._source.priceScale().isEmpty() ||
              this._model.timeScale().isEmpty()
            )
              return;
            var e = this._source.points()[0],
              t = this._source.points()[1],
              i = this._source.points()[2];
            if (((this._levels = []), t.index === e.index)) return;
            var s = t.index - e.index,
              l = this._source.properties(),
              _ = i.index;
            if (null === this._model.timeScale().visibleBarsStrictRange())
              return;
            for (var p = 1; p <= 11; p++) {
              var g = l['level' + p];
              if (g.visible.value()) {
                var f = g.coeff.value(),
                  v = g.color.value(),
                  x = Math.round(_ + f * s),
                  w = {
                    x: this._model.timeScale().indexToCoordinate(x),
                    coeff: f,
                    color: v,
                    linewidth: g.linewidth.value(),
                    linestyle: g.linestyle.value(),
                    index: p,
                  };
                l.showCoeffs.value() &&
                  ((w.text = f), (w.y = this._source.priceScale().height())),
                  this._levels.push(w);
              }
            }
          }
          if (!(this._points.length < 2)) {
            var m = new h();
            (e = this._points[0]), (t = this._points[1]);
            if ((l = this._source.properties()).trendline.visible.value()) {
              var R = {
                points: [e, t],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: l.trendline.color.value(),
                linewidth: l.trendline.linewidth.value(),
                linestyle: l.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: c.Normal,
                rightend: c.Normal,
              };
              this._trendLineRendererPoints12.setData(R),
                m.append(this._trendLineRendererPoints12);
            }
            if (this._points.length < 3)
              return this.addAnchors(m), void (this._renderer = m);
            i = this._points[2];
            if (l.trendline.visible.value()) {
              R = {
                points: [t, i],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: l.trendline.color.value(),
                linewidth: l.trendline.linewidth.value(),
                linestyle: l.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: c.Normal,
                rightend: c.Normal,
              };
              this._trendLineRendererPoints23.setData(R),
                m.append(this._trendLineRendererPoints23);
            }
            var y = l.fillBackground.value(),
              T = l.transparency.value(),
              b = this._model.timeScale().width(),
              L = this._source.priceScale().height();
            if (y)
              for (p = 1; p < this._levels.length; p++) {
                var S = this._levels[p - 1],
                  P =
                    ((e = new n(S.x, 0)),
                    (t = new n(
                      this._levels[p].x,
                      this._source.priceScale().height(),
                    )),
                    {});
                (P.points = [e, t]),
                  (P.color = this._levels[p].color),
                  (P.linewidth = 0),
                  (P.backcolor = this._levels[p].color),
                  (P.fillBackground = !0),
                  (P.transparency = T),
                  (P.extendLeft = !1),
                  (P.extendRight = !1),
                  (D = new o(void 0, void 0, !0)).setData(P),
                  m.append(D);
              }
            for (p = 0; p < this._levels.length; p++) {
              if (void 0 !== this._levels[p].text) {
                var C,
                  M = l.horzLabelsAlign.value();
                switch (
                  ((M =
                    'left' === M ? 'right' : 'right' === M ? 'left' : 'center'),
                  l.vertLabelsAlign.value())
                ) {
                  case 'top':
                    C = new n(this._levels[p].x, 0);
                    break;
                  case 'middle':
                    C = new n(this._levels[p].x, 0.5 * this._levels[p].y);
                    break;
                  case 'bottom':
                    C = new n(this._levels[p].x, this._levels[p].y);
                }
                var I = {
                  points: [C],
                  text: '' + this._levels[p].text,
                  color: this._levels[p].color,
                  vertAlign: l.vertLabelsAlign.value(),
                  horzAlign: M,
                  font: u.CHART_FONT_FAMILY,
                  offsetX: 2,
                  offsetY: 0,
                  fontsize: 12,
                };
                m.append(new a(I));
              }
              var N = {};
              (N.width = b),
                (N.height = L),
                (N.x = this._levels[p].x),
                (N.color = this._levels[p].color),
                (N.linewidth = this._levels[p].linewidth),
                (N.linestyle = this._levels[p].linestyle);
              var D,
                A = new d(d.MOVEPOINT, null, this._levels[p].index);
              (D = new r()).setData(N), D.setHitTest(A), m.append(D);
            }
            this.addAnchors(m), (this._renderer = m);
          }
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    3785: (e, t, i) => {
      'use strict';
      var n;
      i.d(t, { LabelSettings: () => n }),
        (function (e) {
          (e.offset = 8),
            (e.fontSize = 12),
            (e.lineSpacing = 16),
            (e.rectRadius = 4),
            (e.bgColorLight = 'rgba(227,242,253,0.9)'),
            (e.bgColorDark = 'rgba(67,70,81,0.9)'),
            (e.textColorLight = '#2A2E39'),
            (e.textColorDark = '#F8F9FD'),
            (e.textPadding = 10),
            (e.paddingTopBottom = 13),
            (e.paddingLeftRight = 10);
        })(n || (n = {}));
    },
    45127: (e, t, i) => {
      'use strict';
      var n = i(16282).ensureNotNull,
        r = i(72927).Point,
        s = i(79881).t,
        a = i(67857).LineSourcePaneView,
        o = i(68791).PaneRendererCachedImage,
        l = i(87088).CompositeRenderer,
        d = i(62159).PercentageFormatter,
        h = i(57649).NumericFormatter,
        c = i(1953).TimeSpanFormatter,
        u = i(85421).PipFormatter,
        _ = i(73301).SelectionRenderer,
        p = i(6397).TrendLineRenderer,
        g = i(44896).TextRenderer,
        f = i(3785).LabelSettings,
        v = i(54837),
        x = i(10288).HitTestResult,
        w = i(45188).TrendLineStatsCache,
        m = i(8356).areEqualPaneRenderParams,
        R = i(56224).iconsContainer,
        y = i(76553),
        T = y.forceLTRStr,
        b = y.startWithLTR;
      t.TrendLinePaneView = class extends a {
        constructor(e, t) {
          super(e, t),
            (this._label = null),
            (this._rendererCache = {}),
            (this._cacheInvalidated = !0),
            (this._percentageFormatter = new d()),
            (this._numericFormatter = new h()),
            (this._pipFormatter = null),
            (this._lastSymbolInfo = null),
            (this._trendRenderer = new p()),
            (this._labelRenderer = new g()),
            (this._renderer = null),
            (this._cache = null),
            (this._cacheDrawParams = null),
            (this._iconsReady = !1),
            R.onAllIconsReady().subscribe(this, function () {
              this._cache && (this._cache.destroy(), (this._cache = null)),
                (this._iconsReady = !0),
                t.lightUpdate();
            });
        }
        iconsReady() {
          return this._iconsReady;
        }
        update() {
          super.update(), (this._cacheInvalidated = !0);
        }
        getCacheCanvas(e) {
          return this._createCacheIfRequired(e), n(this._cache).canvas();
        }
        getCacheRects(e, t) {
          this._createCacheIfRequired(e);
          var i = this._source.properties().statsPosition.value(),
            n = this._source.getPointByPosition(
              i,
              this._points[0],
              this._middlePoint,
              this._points[1],
            ),
            r = {
              left: 0,
              top: this._cache.topByRow(this._statCache.rowIndex),
              width: this._cache.rowWidth(this._statCache.rowIndex),
              height: this._cache.rowHeight(this._statCache.rowIndex),
            },
            s = {
              left: Math.floor(n.x),
              top: Math.floor(n.y),
              width: r.width,
              height: r.height,
            };
          return (
            (s.left += f.paddingLeftRight),
            (this._points[1].y < this._points[0].y &&
              this._points[1].x < this._points[0].x) ||
            (this._points[1].y > this._points[0].y &&
              this._points[1].x > this._points[0].x)
              ? (s.top -= f.paddingLeftRight + s.height)
              : (s.top += f.paddingLeftRight),
            { cacheRect: r, targetRect: s }
          );
        }
        _createCacheIfRequired(e) {
          (null != this._cache &&
            null != this._cacheDrawParams &&
            m(e, this._cacheDrawParams)) ||
            (this._cache && this._cache.destroy(),
            (this._cache = new w(e)),
            (this._statCache = this._cache.updateSource(
              this._source,
              function () {
                return this._statLabelData();
              }.bind(this),
            )),
            (this._cacheDrawParams = e),
            (this._cacheInvalidated = !1)),
            this._cacheInvalidated &&
              ((this._cacheState = this._cache.updateSource(
                this._source,
                function () {
                  return this._statLabelData();
                }.bind(this),
              )),
              (this._cacheInvalidated = !1));
        }
        destroy() {
          this._cache && (this._cache.destroy(), (this._cache = null)),
            R.onAllIconsReady().unsubscribeAll(this);
        }
        _updateImpl() {
          (this._renderer = null), (this._invalidated = !1);
          var e = this._source.priceScale(),
            t = this._model.timeScale();
          if (e && !e.isEmpty() && !t.isEmpty()) {
            var i = this._model.timeScale().visibleBarsStrictRange();
            if (null !== i) {
              var n = this._source.points();
              if (!(n.length < 2)) {
                var s = n[0],
                  a = n[1],
                  d = this._source.properties();
                if (
                  (!(s.index < i.firstBar() && a.index < i.firstBar()) ||
                    d.extendLeft.value() ||
                    d.extendRight.value()) &&
                  (super._updateImpl(), !(this._points.length < 2))
                ) {
                  var h = d.showBarsRange.value(),
                    c = d.showDateTimeRange.value(),
                    u = d.showDistance.value(),
                    p = d.showPriceRange.value(),
                    g = d.showAngle.value();
                  p ||
                    h ||
                    c ||
                    u ||
                    g ||
                    ((this._label = null),
                    this._labelData &&
                      ((this._labelData.text = ''),
                      (this._labelData.lines = [])));
                  var f = new l(),
                    w = d.linecolor.value(),
                    m = {};
                  (m.points = this._points),
                    (m.width = t.width()),
                    (m.height = e.height()),
                    (m.color = w),
                    (m.linewidth = d.linewidth.value()),
                    (m.linestyle = d.linestyle.value()),
                    (m.extendleft = d.extendLeft.value()),
                    (m.extendright = d.extendRight.value()),
                    (m.leftend = d.leftEnd.value()),
                    (m.rightend = d.rightEnd.value()),
                    this._trendRenderer.setData(m),
                    f.append(this._trendRenderer);
                  var R =
                      ((this.isHoveredSource() || this.isSelectedSource()) &&
                        this.isEditMode()) ||
                      d.alwaysShowStats.value(),
                    y =
                      (this.isHoveredSource() || this.isSelectedSource()) &&
                      d.showMiddlePoint.value();
                  if (R && 2 === this._points.length) {
                    var T = new o(this, 0);
                    f.append(T);
                  }
                  if (
                    (this._middlePoint &&
                      f.append(
                        new _({
                          points: [this._middlePoint],
                          bgColors: this._lineAnchorColors([this._middlePoint]),
                          color: w,
                          visible: y && this.areAnchorsVisible(),
                          hittestResult: x.REGULAR,
                        }),
                      ),
                    this.addAnchors(f),
                    d.showLabel &&
                      d.showLabel.value() &&
                      d.text.value().length > 0)
                  ) {
                    (s = this._points[0]), (a = this._points[1]);
                    var b,
                      L = s.x < a.x ? s : a,
                      S = L === s ? a : s,
                      P = d.vertLabelsAlign.value(),
                      C = d.horzLabelsAlign.value();
                    b =
                      'left' === C
                        ? L.clone()
                        : 'right' === C
                        ? S.clone()
                        : new r((s.x + a.x) / 2, (s.y + a.y) / 2);
                    var M = Math.atan((S.y - L.y) / (S.x - L.x)),
                      I = {
                        points: [b],
                        text: d.text.value(),
                        color: d.textcolor.value(),
                        vertAlign: P,
                        horzAlign: C,
                        font: v.CHART_FONT_FAMILY,
                        offsetX: 0,
                        offsetY: 0,
                        bold: d.bold.value(),
                        italic: d.italic.value(),
                        fontsize: d.fontsize.value(),
                        forceTextAlign: !0,
                        angle: M,
                      };
                    this._labelRenderer.setData(I),
                      f.append(this._labelRenderer);
                  }
                  this._renderer = f;
                }
              }
            }
          }
        }
        _statLabelData() {
          var e,
            t,
            i,
            n,
            r,
            a,
            o,
            l = this._source.points(),
            d = l[0],
            h = l[1],
            _ = this._source.properties(),
            p = [];
          if (_.showPriceRange.value() && this._source.priceScale()) {
            var g = (n = h.price - d.price) / Math.abs(d.price);
            e =
              this._source.ownerSource().formatter().format(n) +
              ' (' +
              this._percentageFormatter.format(100 * g) +
              ')';
            var x = this._model.mainSeries().symbolInfo();
            x &&
              x !== this._lastSymbolInfo &&
              ((this._pipFormatter = new u(
                x.pricescale,
                x.minmov,
                x.type,
                x.minmove2,
              )),
              (this._lastSymbolInfo = x)),
              (e += this._pipFormatter
                ? ', ' + this._pipFormatter.format(n)
                : ''),
              p.push('priceRange');
          }
          var w,
            m = _.showBarsRange.value(),
            R = _.showDateTimeRange.value(),
            y = _.showDistance.value(),
            L = _.showAngle.value();
          if (L || y) {
            var S = this._source.pointToScreenPoint(d);
            (a = this._source.pointToScreenPoint(h).subtract(S)),
              (o = Math.round(1e5 * a.length()) / 1e5);
          }
          if (m || R || y) {
            if (
              ((t = ''),
              m &&
                ((r = h.index - d.index),
                (t += s('{count} bars').format({ count: T(r) }))),
              R)
            ) {
              var P = this._model.timeScale().indexToUserTime(d.index),
                C = this._model.timeScale().indexToUserTime(h.index);
              if (P && C) {
                var M = (C.valueOf() - P.valueOf()) / 1e3,
                  I = b(new c().format(M));
                I && (t += m ? ' (' + I + ')' : I);
              }
            }
            y &&
              (t && (t += ', '),
              (t += s('distance: {number} px').format({
                number: T(this._numericFormatter.format(Math.round(o))),
              }))),
              t && p.push('barsRange');
          }
          L &&
            (o > 0 &&
              ((a = a.normalized()), (w = Math.acos(a.x)), a.y > 0 && (w = -w)),
            'number' != typeof w ||
              TradingView.isNaN(w) ||
              ((i = Math.round((180 * w) / Math.PI) + 'º'), p.push('angle')));
          (this._label =
            [T(e), t, i]
              .filter(function (e) {
                return e;
              })
              .join('\n') || null),
            (this._icons = p);
          var N = this._model.isDark(),
            D = N ? f.bgColorDark : f.bgColorLight,
            A = N ? f.textColorDark : f.textColorLight,
            k = {
              points: [this._points[1]],
              text: this._label,
              color: A,
              isDark: N,
              font: v.CHART_FONT_FAMILY,
              fontSize: f.fontSize,
              lineSpacing: f.lineSpacing,
              backgroundColor: D,
              backgroundRoundRect: f.rectRadius,
              paddingLeft: f.paddingLeftRight,
              paddingRight: f.paddingLeftRight,
              paddingTop: f.paddingTopBottom,
              paddingBottom: f.paddingTopBottom,
              textPadding: f.textPadding,
              doNotAlignText: !0,
              icons: this._icons,
            };
          return (
            this._points[1].y < this._points[0].y && (k.vertAlign = 'bottom'),
            this._points[1].x < this._points[0].x && (k.horzAlign = 'right'),
            (this._labelData = k),
            k
          );
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
      };
    },
    45188: (e, t, i) => {
      'use strict';
      i.d(t, { TrendLineStatsCache: () => g });
      var n = i(16282),
        r = i(72927),
        s = i(65447),
        a = i(56224),
        o = i(54837),
        l = i(3785),
        d = i(16932),
        h = l.LabelSettings.fontSize,
        c = l.LabelSettings.lineSpacing,
        u = l.LabelSettings.paddingTopBottom;
      const _ = (0, s.getLogger)('Chart.LineToolTrendLine');
      function p(e, t) {
        return (
          !(!e && !t) &&
          (!(!e || t) ||
            !(e || !t) ||
            e.index !== t.index ||
            e.price !== t.price)
        );
      }
      class g {
        constructor(e) {
          (this._sourcesToRow = new Map()),
            (this._rowsToSources = new Map()),
            (this._currentWidth = 400),
            (this._actualCapacity = 1),
            (this._currentSymbol = ''),
            (this._params = e);
          const t = c,
            i = h + t;
          (this._maxRowHeight = 3 * i - t + 2 * u + 2), this._recreateCanvas();
        }
        destroy() {
          delete this._canvas, delete this._ctx;
        }
        canvas() {
          return this._canvas;
        }
        topByRow(e) {
          return e * this._maxRowHeight;
        }
        rowHeight(e) {
          const t = (0, n.ensureDefined)(this._rowsToSources.get(e)),
            i = (0, n.ensureDefined)(this._sourcesToRow.get(t)).effectiveState;
          return null !== i ? i.realRowHeight : this._maxRowHeight;
        }
        rowWidth(e) {
          const t = (0, n.ensureDefined)(this._rowsToSources.get(e));
          return (0, n.ensureDefined)(this._sourcesToRow.get(t)).width;
        }
        currentWidth() {
          return this._currentWidth;
        }
        updateSource(e, t) {
          const i = e.properties().symbol.value();
          this._currentSymbol !== i &&
            (_.logDebug(
              'TrendLineCache. Clearing canvas because of changing symbol from ' +
                this._currentSymbol +
                ' to ' +
                i,
            ),
            (this._currentSymbol = i),
            this._sourcesToRow.clear(),
            this._rowsToSources.clear());
          const n = e.id();
          let r = this._sourcesToRow.get(n);
          if (void 0 === r) {
            const e = this._findEmptyRow(n);
            (r = { effectiveState: null, rowIndex: e, width: 0 }),
              this._sourcesToRow.set(n, r),
              this._rowsToSources.set(e, n);
          }
          const s = r.effectiveState,
            a = this._effectiveState(e);
          if (!this._effectiveStatesEquals(s, a)) {
            const e = t();
            this._repaintSource(n, r.rowIndex, e), (r.effectiveState = a);
          }
          return r;
        }
        _findEmptyRow(e) {
          let t = 0;
          for (; void 0 !== this._rowsToSources.get(t); ) t++;
          return (
            this._rowsToSources.set(t, e),
            t >= this._actualCapacity &&
              (this._actualCapacity++, this._recreateCanvas()),
            t
          );
        }
        _effectiveState(e) {
          const t = e.properties(),
            i = t.showBarsRange.value(),
            r = t.showDateTimeRange.value(),
            s = t.showDistance.value(),
            a = t.showPriceRange.value(),
            o = t.showAngle.value();
          let l = 0;
          (i || r || s) && l++, o && l++, a && l++;
          const d = (h + c) * l - c + 2 * u + 2;
          return {
            p1: Object.assign({}, e.points()[0]),
            p2: Object.assign({}, e.points()[1]),
            props: e.properties(),
            showBars: i,
            showTimeRange: r,
            showDistance: s,
            showPriceRange: a,
            showAngle: o,
            dark: e.model().isDark(),
            priceRange: (0, n.ensureNotNull)(
              (0, n.ensureNotNull)(e.priceScale()).priceRange(),
            ).state(),
            barSpacing: e.model().timeScale().barSpacing(),
            realRowHeight: d,
          };
        }
        _effectiveStatesEquals(e, t) {
          if (null !== e && null === t) return !1;
          if (null === e && null !== t) return !1;
          const i = (0, n.ensureNotNull)(e),
            r = (0, n.ensureNotNull)(t);
          if (p(i.p1, r.p1)) return !1;
          if (p(i.p2, r.p2)) return !1;
          if (i.dark !== r.dark) return !1;
          if (i.showBars !== r.showBars) return !1;
          if (i.showTimeRange !== r.showTimeRange) return !1;
          if (i.showDistance !== r.showDistance) return !1;
          if (i.showPriceRange !== r.showPriceRange) return !1;
          if (i.showAngle !== r.showAngle) return !1;
          if (i.showAngle || i.showDistance) {
            if (i.priceRange.min !== r.priceRange.min) return !1;
            if (i.priceRange.max !== r.priceRange.max) return !1;
            if (i.barSpacing !== r.barSpacing) return !1;
          }
          return !0;
        }
        _repaintSource(e, t, i) {
          (i.points[0] = new r.Point(0, 0)),
            (i.offsetX = 0),
            (i.offsetY = 0),
            delete i.horzAlign,
            delete i.vertAlign,
            (0, d.drawScaled)(this._ctx, this._params.pixelRatio, () => {
              this._ctx.translate(0.5, this.topByRow(t) + 0.5),
                this._ctx.clearRect(
                  0,
                  0,
                  this._currentWidth,
                  this._maxRowHeight,
                );
              const r = new a.TrendLineStatsRenderer(i, { widths: [] }).draw(
                this._ctx,
                this._params,
              );
              (0, n.ensureDefined)(this._sourcesToRow.get(e)).width = r.width;
            });
        }
        _recreateCanvas() {
          (this._canvas = (0, n.ensureNotNull)(
            document.createElement('canvas'),
          )),
            (this._canvas.width = this._currentWidth * this._params.pixelRatio),
            (this._canvas.height =
              this._maxRowHeight *
              this._actualCapacity *
              this._params.pixelRatio),
            (this._ctx = (0, n.ensureNotNull)(this._canvas.getContext('2d'))),
            (this._ctx.font = `${h}px ${o.CHART_FONT_FAMILY}`),
            this._sourcesToRow.clear(),
            this._rowsToSources.clear();
        }
      }
    },
    90137: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { LineToolTrianglePatternPaneView: () => _ });
      var n = i(16282),
        r = i(72927),
        s = i(33420),
        a = i(87088),
        o = i(6397),
        l = i(18614),
        d = i(44896),
        h = i(71172),
        c = i(67857),
        u = i(54837);
      class _ extends c.LineSourcePaneView {
        constructor() {
          super(...arguments),
            (this._trendLineRendererPoints01 = new o.TrendLineRenderer()),
            (this._trendLineRendererPoints12 = new o.TrendLineRenderer()),
            (this._trendLineRendererPoints23 = new o.TrendLineRenderer()),
            (this._intersectionRenderer = new l.TriangleRenderer()),
            (this._aLabelRenderer = new d.TextRenderer()),
            (this._bLabelRenderer = new d.TextRenderer()),
            (this._cLabelRenderer = new d.TextRenderer()),
            (this._dLabelRenderer = new d.TextRenderer()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl(), (this._renderer = null);
          const [e, t, i, o] = this._points;
          let l, d, c;
          if (4 === this._points.length) {
            if (Math.abs(i.x - e.x) < 1 || Math.abs(o.x - t.x) < 1) return;
            let n = Math.min(e.x, t.x);
            (n = Math.min(n, i.x)), (n = Math.min(n, o.x));
            const s = (i.y - e.y) / (i.x - e.x),
              a = e.y + (n - e.x) * s,
              h = (o.y - t.y) / (o.x - t.x),
              u = t.y + (n - t.x) * h;
            if (Math.abs(s - h) < 1e-6) return;
            (d = new r.Point(n, a)), (c = new r.Point(n, u));
            const _ = (t.y - e.y + (e.x * s - t.x * h)) / (s - h);
            if (_ < n) {
              let n = Math.max(e.x, t.x);
              (n = Math.max(n, i.x)),
                (n = Math.max(n, o.x)),
                (d = new r.Point(n, e.y + (n - e.x) * s)),
                (c = new r.Point(n, t.y + (n - t.x) * h));
            }
            const p = e.y + (_ - e.x) * s;
            l = new r.Point(_, p);
          }
          if (this._points.length < 2) return;
          const _ = this._source.properties().childs(),
            p = new a.CompositeRenderer(),
            g = (e, t) => ({
              points: [e],
              text: t,
              color: _.textcolor.value(),
              vertAlign: 'middle',
              horzAlign: 'center',
              font: u.CHART_FONT_FAMILY,
              offsetX: 0,
              offsetY: 0,
              bold: _.bold && _.bold.value(),
              italic: _.italic && _.italic.value(),
              fontsize: _.fontsize.value(),
              backgroundColor: _.color.value(),
              backgroundRoundRect: 4,
            }),
            f = (e, t) => ({
              points: [e, t],
              color: _.color.value(),
              linewidth: _.linewidth.value(),
              linestyle: s.LINESTYLE_SOLID,
              extendleft: !1,
              extendright: !1,
              leftend: h.LineEnd.Normal,
              rightend: h.LineEnd.Normal,
            });
          if (
            (this._trendLineRendererPoints01.setData(f(e, t)),
            p.append(this._trendLineRendererPoints01),
            this._points.length >= 3 &&
              (this._trendLineRendererPoints12.setData(f(t, i)),
              p.append(this._trendLineRendererPoints12)),
            4 === this._points.length &&
              (this._trendLineRendererPoints23.setData(f(i, o)),
              p.append(this._trendLineRendererPoints23),
              l))
          ) {
            const e = {
              points: [(0, n.ensureDefined)(d), (0, n.ensureDefined)(c), l],
              color: _.color.value(),
              linewidth: _.linewidth.value(),
              backcolor: _.backgroundColor.value(),
              fillBackground: _.fillBackground.value(),
              transparency: _.transparency.value(),
              linestyle: s.LINESTYLE_DOTTED,
            };
            this._intersectionRenderer.setData(e),
              p.append(this._intersectionRenderer);
          }
          const v = g(e, 'A');
          t.y > e.y
            ? ((v.vertAlign = 'bottom'), (v.offsetY = 5))
            : ((v.vertAlign = 'top'), (v.offsetY = 5)),
            this._aLabelRenderer.setData(v),
            p.append(this._aLabelRenderer);
          const x = g(t, 'B');
          if (
            (t.y < e.y
              ? ((x.vertAlign = 'bottom'), (x.offsetY = 5))
              : ((x.vertAlign = 'top'), (x.offsetY = 5)),
            this._bLabelRenderer.setData(x),
            p.append(this._bLabelRenderer),
            this._points.length > 2)
          ) {
            const e = g(i, 'C');
            i.y < t.y
              ? ((e.vertAlign = 'bottom'), (e.offsetY = 5))
              : ((e.vertAlign = 'top'), (e.offsetY = 5)),
              this._cLabelRenderer.setData(e),
              p.append(this._cLabelRenderer);
          }
          if (this._points.length > 3) {
            const e = g(o, 'D');
            o.y < i.y
              ? ((e.vertAlign = 'bottom'), (e.offsetY = 5))
              : ((e.vertAlign = 'top'), (e.offsetY = 5)),
              this._dLabelRenderer.setData(e),
              p.append(this._dLabelRenderer);
          }
          this.addAnchors(p), (this._renderer = p);
        }
      }
    },
    57984: (e, t, i) => {
      'use strict';
      var n = i(67857).LineSourcePaneView,
        r = i(87088).CompositeRenderer,
        s = i(18614).TriangleRenderer;
      t.TrianglePaneView = class extends n {
        constructor(e, t) {
          super(e, t),
            (this._triangleRenderer = new s()),
            (this._renderer = null);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(), this._renderer;
        }
        _updateImpl() {
          super._updateImpl(), (this._renderer = null);
          var e = {};
          (e.points = this._points),
            (e.color = this._source.properties().color.value()),
            (e.linewidth = this._source.properties().linewidth.value()),
            (e.backcolor = this._source.properties().backgroundColor.value()),
            (e.fillBackground = this._source
              .properties()
              .fillBackground.value()),
            (e.transparency = this._source.properties().transparency.value()),
            this._triangleRenderer.setData(e);
          var t = new r();
          t.append(this._triangleRenderer),
            this.addAnchors(t),
            (this._renderer = t);
        }
      };
    },
    73184: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { VertLinePaneView: () => u });
      var n = i(72927),
        r = i(87088),
        s = i(44896),
        a = i(10992),
        o = i(69819),
        l = i(67857),
        d = i(10288),
        h = i(54837);
      const c = [a.PaneCursorType.HorizontalResize];
      class u extends l.LineSourcePaneView {
        constructor(e, t, i) {
          super(e, t),
            (this._lineRenderer = new o.VerticalLineRenderer()),
            (this._labelRenderer = new s.TextRenderer()),
            (this._renderer = null),
            (this._pane = i);
        }
        renderer(e, t) {
          return this._invalidated && this._updateImpl(e, t), this._renderer;
        }
        _validatePriceScale() {
          return !0;
        }
        _updateImpl(e, t) {
          if (
            (super._updateImpl(),
            (this._renderer = null),
            0 === this._points.length)
          )
            return;
          const i = this._source.properties().childs(),
            s = {
              x: this._points[0].x,
              color: i.linecolor.value(),
              linewidth: i.linewidth.value(),
              linestyle: i.linestyle.value(),
            },
            a = s.linewidth / 2 + 1;
          let o = s.x < -a || s.x > t + a;
          this._lineRenderer.setData(s),
            this._lineRenderer.setHitTest(
              new d.HitTestResult(d.HitTestResult.MOVEPOINT, {
                snappingIndex: this._source.points()[0].index,
              }),
            );
          const l = new r.CompositeRenderer();
          if (
            (l.append(this._lineRenderer),
            i.showLabel.value() &&
              i.text.value().length > 0 &&
              this._source.model().paneForSource(this._source) === this._pane)
          ) {
            let r = 0,
              s = 5,
              a = 'center',
              d = 'middle';
            const c = this._points[0].x;
            let u = 0;
            switch (i.vertLabelsAlign.value()) {
              case 'top':
                u = e;
                break;
              case 'middle':
                u = e / 2;
                break;
              case 'bottom':
                u = 0;
            }
            if ('horizontal' === i.textOrientation.value()) {
              switch (i.horzLabelsAlign.value()) {
                case 'left':
                  a = 'right';
                  break;
                case 'right':
                  a = 'left';
                  break;
                case 'center':
                  a = 'center';
              }
              switch (i.vertLabelsAlign.value()) {
                case 'top':
                  d = 'bottom';
                  break;
                case 'middle':
                  d = 'middle';
                  break;
                case 'bottom':
                  d = 'top';
              }
            } else {
              switch (
                ((r = -Math.PI / 2), (s = 0), i.horzLabelsAlign.value())
              ) {
                case 'left':
                  d = 'bottom';
                  break;
                case 'right':
                  d = 'top';
                  break;
                case 'center':
                  d = 'middle';
              }
              switch (i.vertLabelsAlign.value()) {
                case 'top':
                  a = 'left';
                  break;
                case 'middle':
                  a = 'center';
                  break;
                case 'bottom':
                  a = 'right';
              }
            }
            const _ = {
              points: [new n.Point(c, u)],
              text: i.text.value(),
              color: i.textcolor.value(),
              vertAlign: d,
              horzAlign: a,
              font: h.CHART_FONT_FAMILY,
              offsetX: s,
              offsetY: 0,
              bold: i.bold.value(),
              italic: i.italic.value(),
              fontsize: i.fontsize.value(),
              forceTextAlign: !0,
              angle: r,
            };
            this._labelRenderer.setData(_),
              l.append(this._labelRenderer),
              (o = o && this._labelRenderer.isOutOfScreen(t, e));
          }
          if (!o) {
            if (1 === this._points.length) {
              const t = new n.Point(this._points[0].x, e / 2);
              (t.data = 0),
                (t.square = !0),
                (t.snappingIndex = this._source.points()[0].index),
                l.append(
                  this.createLineAnchor(
                    { points: [t], pointsCursorType: c },
                    0,
                  ),
                );
            }
            this._renderer = l;
          }
        }
      }
    },
    68791: (e, t, i) => {
      'use strict';
      i.d(t, { PaneRendererCachedImage: () => a });
      var n = i(72927),
        r = i(71044),
        s = i(10288);
      class a {
        constructor(e, t) {
          (this._cacheRect = null),
            (this._targetRect = null),
            (this._cacheProvider = e),
            (this._index = t);
        }
        draw(e, t) {
          const i = this._cacheProvider.getCacheRects(t, this._index);
          if (null === i)
            return (this._cacheRect = null), void (this._targetRect = null);
          if (
            ((this._cacheRect = i.cacheRect),
            (this._targetRect = i.targetRect),
            0 === this._cacheRect.width ||
              0 === this._cacheRect.height ||
              0 === this._targetRect.width ||
              0 === this._targetRect.height)
          )
            return;
          e.save(), e.setTransform(1, 0, 0, 1, 0, 0);
          const n = t.pixelRatio,
            r = this._cacheProvider.getCacheCanvas(t);
          e.drawImage(
            r,
            Math.round(this._cacheRect.left * n),
            Math.round(this._cacheRect.top * n),
            this._cacheRect.width * n,
            this._cacheRect.height * n,
            Math.round(this._targetRect.left * n),
            Math.round(this._targetRect.top * n),
            this._targetRect.width * n,
            this._targetRect.height * n,
          ),
            e.restore();
        }
        hitTest(e) {
          if (null === this._targetRect) return null;
          const t = new n.Point(this._targetRect.left, this._targetRect.top),
            i = t.add(
              new n.Point(this._targetRect.width, this._targetRect.height),
            );
          return (0, r.pointInBox)(e, (0, n.box)(t, i))
            ? new s.HitTestResult(s.HitTestResult.REGULAR)
            : null;
        }
      }
    },
    93572: (e, t, i) => {
      'use strict';
      i.d(t, { ArcWedgeRenderer: () => a });
      var n = i(10288),
        r = i(50968),
        s = i(58729);
      class a extends s.ScaledPaneRenderer {
        constructor() {
          super(...arguments),
            (this._data = null),
            (this._hitTest = new n.HitTestResult(n.HitTestResult.MOVEPOINT)),
            (this._backHitTest = new n.HitTestResult(
              n.HitTestResult.MOVEPOINT_BACKGROUND,
            ));
        }
        setData(e) {
          this._data = e;
        }
        setHitTest(e) {
          this._hitTest = e;
        }
        hitTest(e) {
          if (null === this._data) return null;
          const t = e.subtract(this._data.center),
            i = t.length();
          if (Math.abs(i - this._data.radius) <= 4) {
            const t = e.subtract(this._data.p1).length(),
              i = e.subtract(this._data.p2).length();
            if (
              Math.max(t, i) <= this._data.p1.subtract(this._data.p2).length()
            )
              return this._hitTest;
          }
          if (this._data.fillBackground && i <= this._data.radius) {
            const e = this._data.p1.subtract(this._data.center).normalized(),
              i = this._data.p2.subtract(this._data.center).normalized(),
              n = t.normalized(),
              r = e.dotProduct(i),
              s = n.dotProduct(e),
              a = n.dotProduct(i);
            if (s >= r && a >= r) return this._backHitTest;
          }
          return null;
        }
        _drawImpl(e) {
          if (
            null !== this._data &&
            ((e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth),
            e.beginPath(),
            e.arc(
              this._data.center.x,
              this._data.center.y,
              this._data.radius,
              this._data.edge1,
              this._data.edge2,
              !0,
            ),
            e.stroke(),
            this._data.fillBackground)
          ) {
            if (
              (e.arc(
                this._data.center.x,
                this._data.center.y,
                this._data.prevRadius,
                this._data.edge2,
                this._data.edge1,
                !1,
              ),
              this._data.gradient)
            ) {
              const t = e.createRadialGradient(
                this._data.center.x,
                this._data.center.y,
                this._data.prevRadius,
                this._data.center.x,
                this._data.center.y,
                this._data.radius,
              );
              t.addColorStop(
                0,
                (0, r.generateColor)(
                  this._data.color1,
                  this._data.transparency,
                ),
              ),
                t.addColorStop(
                  1,
                  (0, r.generateColor)(
                    this._data.color2,
                    this._data.transparency,
                  ),
                ),
                (e.fillStyle = t);
            } else
              e.fillStyle = (0, r.generateColor)(
                this._data.color,
                this._data.transparency,
                !0,
              );
            e.fill();
          }
        }
      }
    },
    41454: (e, t, i) => {
      'use strict';
      i.d(t, {
        quadroBezierHitTest: () => r,
        cubicBezierHitTest: () => s,
        extendQuadroBezier: () => a,
      });
      var n = i(89684);
      function r(e, t, i, r, s) {
        const a = i.subtract(e).length() + i.subtract(t).length(),
          o = Math.max(3 / a, 0.02);
        let l;
        for (let a = 0; ; a += o) {
          a > 1 && (a = 1);
          const o = e.scaled((1 - a) * (1 - a)),
            d = i.scaled(2 * a * (1 - a)),
            h = t.scaled(a * a),
            c = o.add(d).add(h);
          if (void 0 !== l) {
            if ((0, n.distanceToSegment)(c, l, r).distance < s) return !0;
          } else if (c.subtract(r).length() < s) return !0;
          if (((l = c), 1 === a)) break;
        }
        return !1;
      }
      function s(e, t, i, r, s, a) {
        const o =
            i.subtract(e).length() +
            r.subtract(i).length() +
            t.subtract(r).length(),
          l = Math.max(3 / o, 0.02);
        let d;
        for (let o = 0; ; o += l) {
          o > 1 && (o = 1);
          const l = e.scaled((1 - o) * (1 - o) * (1 - o)),
            h = i.scaled(3 * (1 - o) * (1 - o) * o),
            c = r.scaled(3 * (1 - o) * o * o),
            u = t.scaled(o * o * o),
            _ = l.add(h).add(c).add(u);
          if (void 0 !== d) {
            if ((0, n.distanceToSegment)(_, d, s).distance < a) return !0;
          } else if (_.subtract(s).length() < a) return !0;
          if (((d = _), 1 === o)) break;
        }
        return !1;
      }
      function a(e, t, i, n, r) {
        const s = i.subtract(e).length() + i.subtract(t).length();
        if (!s) return [];
        const a = (function (e, t, i, n, r) {
          const s = [],
            a = o(e.y, t.y, i.y, 0).concat(o(e.y, t.y, i.y, r));
          for (let r = 0; r < a.length; r++) {
            const o = l(e.x, t.x, i.x, a[r]);
            o >= 0 && o <= n && s.push(a[r]);
          }
          const d = o(e.x, t.x, i.x, 0).concat(o(e.x, t.x, i.x, n));
          for (let n = 0; n < d.length; n++) {
            const a = l(e.y, t.y, i.y, d[n]);
            a >= 0 && a <= r && s.push(d[n]);
          }
          return s;
        })(e, t, i, n, r)
          .filter((e) => e > 1)
          .sort((e, t) => e - t);
        t.x >= 0 && t.x <= n && t.y >= 0 && t.y <= r && a.unshift(1);
        const d = 3 / s,
          h = [];
        for (let n = 0; n < a.length - 1; n += 2) {
          let r = d,
            s = a[n],
            o = a[n + 1] + r;
          const l = [];
          for (; s <= o; ) {
            const n = e.scaled((1 - s) * (1 - s)),
              a = i.scaled(2 * s * (1 - s)),
              d = t.scaled(s * s),
              h = n.add(a).add(d);
            if (l.length > 0) {
              l[l.length - 1].subtract(h).length() < 2 && ((o += r), (r *= 2));
            }
            l.push(h), (s += r);
          }
          l.length > 0 && h.push(l);
        }
        return h;
      }
      function o(e, t, i, n) {
        const r = [],
          s = e - 2 * i + t,
          a = 2 * i - 2 * e,
          o = e - n;
        if (Math.abs(s) > 1e-8) {
          const e = a * a - 4 * s * o;
          e >= 0 &&
            (r.push((-a + Math.sqrt(e)) / (2 * s)),
            r.push((-a - Math.sqrt(e)) / (2 * s)));
        } else r.push(-o / a);
        return r;
      }
      function l(e, t, i, n) {
        return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * i + n * n * t;
      }
    },
    16758: (e, t, i) => {
      'use strict';
      i.d(t, { ChannelRenderer: () => c });
      var n = i(16282),
        r = i(72927),
        s = i(71044),
        a = i(89684),
        o = i(95196),
        l = i(10288),
        d = i(50968),
        h = i(58729);
      class c extends h.ScaledPaneRenderer {
        constructor() {
          super(...arguments), (this._data = null);
        }
        setData(e) {
          this._data = e;
        }
        hitTest(e, t) {
          if (null === this._data || !this._data.hittestOnBackground)
            return null;
          const i = this._visiblePolygon(t);
          return null !== i && (0, s.pointInPolygon)(e, i)
            ? new l.HitTestResult(l.HitTestResult.MOVEPOINT_BACKGROUND)
            : null;
        }
        _drawImpl(e, t) {
          if (null === this._data) return;
          const i = this._visiblePolygon(t);
          if (null !== i) {
            e.beginPath(), e.moveTo(i[0].x, i[0].y);
            for (let t = 1; t < i.length; t++) e.lineTo(i[t].x, i[t].y);
            (e.fillStyle = (0, d.generateColor)(
              this._data.color,
              this._data.transparency,
              !0,
            )),
              e.fill();
          }
        }
        _visiblePolygon(e) {
          const t = (0, n.ensureNotNull)(this._data),
            i = t.p1,
            s = t.p2,
            o = t.p3,
            l = t.p4;
          if (
            (0, r.equalPoints)(i, s) ||
            (0, r.equalPoints)(o, l) ||
            ((0, a.distanceToLine)(i, s, o).distance < 1e-6 &&
              (0, a.distanceToLine)(i, s, l).distance < 1e-6)
          )
            return null;
          if (e.cssWidth <= 0 || e.cssHeight <= 0) return null;
          let d = [
            new r.Point(0, 0),
            new r.Point(e.cssWidth, 0),
            new r.Point(e.cssWidth, e.cssHeight),
            new r.Point(0, e.cssHeight),
          ];
          return (
            (d = u(d, i, s, [l, o])),
            (d = u(d, l, o, [i, s])),
            (0, r.equalPoints)(o, i) ||
              t.extendLeft ||
              (d = u(d, o, i, [s, l])),
            d
          );
        }
      }
      function u(e, t, i, n) {
        const s = (0, r.equalPoints)(i, n[0])
          ? (0, r.equalPoints)(i, n[1])
            ? null
            : n[1]
          : n[0];
        return null !== e && null !== s
          ? (0, o.intersectPolygonAndHalfplane)(
              e,
              (0, r.halfplaneThroughPoint)((0, r.lineThroughPoints)(t, i), s),
            )
          : null;
      }
    },
    10847: (e, t, i) => {
      'use strict';
      i.d(t, { DisjointChannelRenderer: () => _ });
      var n = i(16282),
        r = i(72927),
        s = i(71044),
        a = i(89684),
        o = i(95196),
        l = i(33420),
        d = i(10288),
        h = i(21498),
        c = i(50968),
        u = i(58729);
      class _ {
        constructor() {
          (this._parallelChannelRenderer = new h.ParallelChannelRenderer()),
            (this._disjointChannelIntersectionRenderer = new p()),
            (this._selectedRenderer = this._disjointChannelIntersectionRenderer);
        }
        setData(e) {
          if (e.points.length < 4) return;
          const [t, i, n, s] = e.points;
          if (
            (0, r.equalPoints)(t, i) ||
            (0, r.equalPoints)(n, s) ||
            ((0, a.distanceToLine)(t, i, n).distance < 1e-6 &&
              (0, a.distanceToLine)(t, i, s).distance < 1e-6)
          )
            this._selectedRenderer = null;
          else {
            null !==
            (0, o.intersectLines)(
              (0, r.lineThroughPoints)(t, i),
              (0, r.lineThroughPoints)(n, s),
            )
              ? (this._disjointChannelIntersectionRenderer.setData(e),
                (this._selectedRenderer = this._disjointChannelIntersectionRenderer))
              : (this._parallelChannelRenderer.setData({
                  extendleft: e.extendleft,
                  extendright: e.extendright,
                  points: [t, i, s, n],
                  fillBackground: !0,
                  backcolor: e.backcolor,
                  transparency: e.transparency,
                  color: 'rgba(0,0,0,0)',
                  linestyle: l.LINESTYLE_SOLID,
                  linewidth: 0,
                  showMidline: !1,
                  hittestOnBackground: e.hittestOnBackground,
                }),
                (this._selectedRenderer = this._parallelChannelRenderer));
          }
        }
        hitTest(e, t) {
          return null !== this._selectedRenderer
            ? this._selectedRenderer.hitTest(e, t)
            : null;
        }
        draw(e, t) {
          null !== this._selectedRenderer && this._selectedRenderer.draw(e, t);
        }
      }
      class p extends u.ScaledPaneRenderer {
        constructor() {
          super(...arguments), (this._data = null);
        }
        setData(e) {
          this._data = e;
        }
        hitTest(e, t) {
          if (null === this._data || !this._data.hittestOnBackground)
            return null;
          for (const i of this._visiblePolygons(t))
            if ((0, s.pointInPolygon)(e, i))
              return new d.HitTestResult(d.HitTestResult.MOVEPOINT_BACKGROUND);
          return null;
        }
        _drawImpl(e, t) {
          if (!(null === this._data || this._data.points.length < 4)) {
            e.fillStyle = (0, c.generateColor)(
              this._data.backcolor,
              this._data.transparency,
            );
            for (const i of this._visiblePolygons(t)) {
              e.beginPath(), e.moveTo(i[0].x, i[0].y);
              for (let t = 1; t < i.length; t++) e.lineTo(i[t].x, i[t].y);
              e.fill();
            }
          }
        }
        _visiblePolygons(e) {
          const t = (0, n.ensureNotNull)(this._data),
            [i, s, a, l] = t.points;
          if (e.cssWidth <= 0 || e.cssHeight <= 0) return [];
          const d = (0, o.intersectLines)(
            (0, r.lineThroughPoints)(i, s),
            (0, r.lineThroughPoints)(a, l),
          );
          if (null === d) return [];
          const h = [
              new r.Point(0, 0),
              new r.Point(e.cssWidth, 0),
              new r.Point(e.cssWidth, e.cssHeight),
              new r.Point(0, e.cssHeight),
            ],
            c = [];
          {
            let e = h;
            const n = i.subtract(s).add(d),
              r = l.subtract(a).add(d);
            (e = g(e, d, n, [r, r])),
              (e = v(e, t)),
              (e = g(e, r, d, [n, n])),
              null !== e && c.push(e);
          }
          {
            let e = h;
            const n = s.subtract(i).add(d),
              r = a.subtract(l).add(d);
            (e = g(e, d, n, [r, r])),
              (e = v(e, t)),
              (e = g(e, r, d, [n, n])),
              null !== e && c.push(e);
          }
          return c;
        }
      }
      function g(e, t, i, n) {
        const s = (0, r.equalPoints)(i, n[0])
          ? (0, r.equalPoints)(i, n[1])
            ? null
            : n[1]
          : n[0];
        return null !== e && null !== s
          ? (0, o.intersectPolygonAndHalfplane)(
              e,
              (0, r.halfplaneThroughPoint)((0, r.lineThroughPoints)(t, i), s),
            )
          : null;
      }
      function f(e, t, i) {
        return null !== e
          ? (0, o.intersectPolygonAndHalfplane)(
              e,
              (0, r.halfplaneThroughPoint)(
                ((n = t), (0, r.line)(1, 0, -n)),
                new r.Point(i, 0),
              ),
            )
          : null;
        var n;
      }
      function v(e, t) {
        const [i, n] = t.points;
        return (
          t.extendleft || (e = f(e, i.x, n.x)),
          t.extendright || (e = f(e, n.x, i.x)),
          e
        );
      }
    },
    90212: (e, t, i) => {
      'use strict';
      i.d(t, { EllipseRendererSimple: () => d });
      var n = i(10288),
        r = i(57968),
        s = i(72927),
        a = i(50968),
        o = i(5025),
        l = i(58729);
      class d extends l.ScaledPaneRenderer {
        constructor(e, t, i) {
          super(),
            (this._data = e),
            (this._hitTest =
              t || new n.HitTestResult(n.HitTestResult.MOVEPOINT)),
            (this._backgroundHitTest =
              i || new n.HitTestResult(n.HitTestResult.MOVEPOINT_BACKGROUND));
        }
        hitTest(e) {
          if (this._data.points.length < 2) return null;
          const t = this._data.points[0],
            i = this._data.points[1],
            n = 0.5 * Math.abs(t.x - i.x),
            a = Math.abs(t.x - i.x),
            o = Math.abs(t.y - i.y),
            l = t.add(i).scaled(0.5);
          let d = e.subtract(l);
          if (a < 1 || o < 1) return null;
          const h = (i.y - t.y) / (i.x - t.x);
          d = new s.Point(d.x, d.y / h);
          let c = d.x * d.x + d.y * d.y - n * n;
          return (
            (c = (0, r.sign)(c) * Math.sqrt(Math.abs(c / n))),
            Math.abs(c) < 3
              ? this._hitTest
              : this._data.fillBackground &&
                !this._data.noHitTestOnBackground &&
                c < 3
              ? this._backgroundHitTest
              : null
          );
        }
        _drawImpl(e) {
          (e.lineCap = 'butt'),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth),
            void 0 !== this._data.linestyle &&
              (0, o.setLineStyle)(e, this._data.linestyle);
          const t = this._data.points[0],
            i = this._data.points[1],
            n = Math.abs(t.x - i.x),
            r = Math.abs(t.y - i.y),
            s = t.add(i).scaled(0.5);
          if (n < 1 || r < 1) return;
          let l = 0;
          if (this._data.wholePoints) {
            const e = this._data.wholePoints[0],
              t = this._data.wholePoints[1];
            l = Math.abs(e.x - t.x);
          }
          e.save(),
            e.translate(s.x, s.y),
            e.scale(1, r / n),
            e.beginPath(),
            e.arc(0, 0, n / 2, 0, 2 * Math.PI, !1),
            e.restore(),
            e.stroke(),
            this._data.fillBackground &&
              (this._data.wholePoints &&
                (e.translate(s.x, s.y),
                e.scale(1, r / n),
                e.arc(0, 0, l / 2, 0, 2 * Math.PI, !0)),
              (e.fillStyle = (0, a.generateColor)(
                this._data.backcolor,
                this._data.transparency,
                !0,
              )),
              e.fill());
        }
      }
    },
    77042: (e, t, i) => {
      'use strict';
      i.d(t, { LineAnchorRenderer: () => v });
      var n = i(72927),
        r = i(71044),
        s = i(55430),
        a = i(47903),
        o = i(10288),
        l = i(10992),
        d = i(21344),
        h = i(16282);
      class c extends n.Point {
        constructor(e, t, i, n) {
          super(e, t), (this.data = i), (this.square = n);
        }
      }
      function u(e, t, i, n) {
        const r = i + n / 2;
        (0, s.drawRoundRect)(e, t.x - r, t.y - r, 2 * r, 2 * r, (i + n) / 2),
          e.closePath(),
          (e.lineWidth = n);
      }
      function _(e, t, i, n) {
        (e.globalAlpha = 0.2), u(e, t, i, n), e.stroke(), (e.globalAlpha = 1);
      }
      function p(e, t, i, n) {
        u(e, t, i - n, n), e.fill(), e.stroke();
      }
      function g(e, t, i, n) {
        (e.globalAlpha = 0.2),
          e.beginPath(),
          e.arc(t.x, t.y, i + n / 2, 0, 2 * Math.PI, !0),
          e.closePath(),
          (e.lineWidth = n),
          e.stroke(),
          (e.globalAlpha = 1);
      }
      function f(e, t, i, n) {
        e.beginPath(),
          e.arc(t.x, t.y, i - n / 2, 0, 2 * Math.PI, !0),
          e.closePath(),
          (e.lineWidth = n),
          e.fill(),
          e.stroke();
      }
      class v {
        constructor(e) {
          this._data = null != e ? e : null;
        }
        setData(e) {
          this._data = e;
        }
        draw(e, t) {
          if (null === this._data || !this._data.visible) return;
          const i = [],
            n = [],
            r = [],
            s = [];
          for (let e = 0; e < this._data.points.length; ++e) {
            const t = this._data.points[e],
              a = this._data.backgroundColors[e];
            t.square ? (i.push(t), n.push(a)) : (r.push(t), s.push(a));
          }
          i.length &&
            ((e.strokeStyle = this._data.color),
            this._drawPoints(e, t.pixelRatio, i, n, p, _)),
            r.length &&
              ((e.strokeStyle = this._data.color),
              this._drawPoints(e, t.pixelRatio, r, s, f, g));
        }
        hitTest(e) {
          var t;
          if (null === this._data || this._data.disableInteractions)
            return null;
          const {
              radius: i,
              points: n,
              pointsCursorType: r,
              hittestResult: s,
            } = this._data,
            a = (0, d.interactionTolerance)().anchor;
          for (let d = 0; d < n.length; ++d) {
            const h = n[d];
            if (h.subtract(e).length() <= i + a)
              return new o.HitTestResult(Array.isArray(s) ? s[d] : s, {
                pointIndex: h.data,
                cursorType:
                  null !== (t = null == r ? void 0 : r[d]) && void 0 !== t
                    ? t
                    : l.PaneCursorType.Default,
                activeItem: h.activeItem,
                snappingPrice: h.snappingPrice,
                snappingIndex: h.snappingIndex,
              });
          }
          return null;
        }
        doesIntersectWithBox(e) {
          return (
            null !== this._data &&
            this._data.points.some((t) => (0, r.pointInBox)(t, e))
          );
        }
        _drawPoints(e, t, i, n, r, s) {
          const o = (0, h.ensureNotNull)(this._data),
            l = o.currentPoint,
            u = o.radius;
          let _ = Math.max(1, Math.floor((o.strokeWidth || 2) * t));
          o.selected && (_ += Math.max(1, Math.floor(t / 2)));
          const p = Math.max(1, Math.floor(t));
          let g = Math.round(u * t * 2);
          g % 2 != p % 2 && (g += 1);
          const f = (p % 2) / 2,
            v = (0, d.interactionTolerance)().anchor;
          for (let d = 0; d < i.length; ++d) {
            const h = i[d];
            e.fillStyle = n[d];
            if (
              !((0, a.isInteger)(h.data) && o.linePointBeingEdited === h.data)
            ) {
              if (
                (r(
                  e,
                  new c(
                    Math.round(h.x * t) + f,
                    Math.round(h.y * t) + f,
                    h.data,
                    h.square,
                  ),
                  g / 2,
                  _,
                ),
                !o.disableInteractions)
              ) {
                if (h.subtract(l).length() <= u + v) {
                  const i = Math.max(1, Math.floor(o.selectedStrokeWidth * t));
                  let n = Math.round(u * t * 2);
                  n % 2 != p % 2 && (n += 1);
                  s(
                    e,
                    new c(
                      Math.round(h.x * t) + f,
                      Math.round(h.y * t) + f,
                      h.data,
                      h.square,
                    ),
                    n / 2,
                    i,
                  );
                }
              }
            }
          }
        }
      }
    },
    21498: (e, t, i) => {
      'use strict';
      i.d(t, { ParallelChannelRenderer: () => u });
      var n = i(16282),
        r = i(72927),
        s = i(89684),
        a = i(95196),
        o = i(5025),
        l = i(10288),
        d = i(21344),
        h = i(50968),
        c = i(58729);
      class u extends c.ScaledPaneRenderer {
        constructor(e, t) {
          super(),
            (this._data = null),
            (this._hittestResult =
              e || new l.HitTestResult(l.HitTestResult.MOVEPOINT)),
            (this._backHittestResult =
              t || new l.HitTestResult(l.HitTestResult.MOVEPOINT_BACKGROUND));
        }
        setData(e) {
          this._data = e;
        }
        hitTest(e, t) {
          if (null === this._data || this._data.points.length < 2) return null;
          const [i, n] = this._data.points,
            r = this._extendAndHitTestLineSegment(e, i, n, t);
          if (null !== r) return r;
          if (4 === this._data.points.length && !this._data.skipTopLine) {
            const [, , r, s] = this._data.points,
              a = this._extendAndHitTestLineSegment(e, r, s, t);
            if (null !== a) return a;
            if (this._data.showMidline && !this._data.skipLines) {
              const a = i.add(r).scaled(0.5),
                o = n.add(s).scaled(0.5),
                l = this._extendAndHitTestLineSegment(e, a, o, t);
              if (null !== l) return l;
            }
          }
          return this._data.hittestOnBackground && this._data.fillBackground
            ? this._hitTestBackground(e)
            : null;
        }
        _drawImpl(e, t) {
          if (null === this._data || this._data.points.length < 2) return;
          (e.lineCap = 'butt'),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth),
            (0, o.setLineStyle)(e, this._data.linestyle);
          const [i, n] = this._data.points;
          if (this._data.points.some((e) => !isFinite(e.y)))
            this._extendAndDrawLineSegment(e, i, n, t);
          else if (
            (this._data.skipLines || this._extendAndDrawLineSegment(e, i, n, t),
            4 === this._data.points.length)
          ) {
            const [, , r, s] = this._data.points;
            if (
              (this._data.skipLines ||
                this._data.skipTopLine ||
                this._extendAndDrawLineSegment(e, r, s, t),
              this._data.fillBackground &&
                this._drawBackground(e, this._data.points, t),
              this._data.showMidline && !this._data.skipLines)
            ) {
              (e.strokeStyle = this._data.midcolor),
                (e.lineWidth = this._data.midlinewidth),
                (0, o.setLineStyle)(e, this._data.midlinestyle);
              const a = i.add(r).scaled(0.5),
                l = n.add(s).scaled(0.5);
              this._extendAndDrawLineSegment(e, a, l, t);
            }
          }
        }
        _getColor() {
          const e = (0, n.ensureNotNull)(this._data);
          return (0, h.generateColor)(e.backcolor, e.transparency);
        }
        _extendAndDrawLineSegment(e, t, i, n) {
          const r = this._extendAndClipLineSegment(t, i, n);
          null !== r && (0, o.drawLine)(e, r[0].x, r[0].y, r[1].x, r[1].y);
        }
        _extendAndHitTestLineSegment(e, t, i, n) {
          const r = this._extendAndClipLineSegment(t, i, n);
          if (null !== r) {
            if ((0, s.distanceToSegment)(r[0], r[1], e).distance <= 3)
              return this._hittestResult;
          }
          return null;
        }
        _extendAndClipLineSegment(e, t, i) {
          const r = (0, n.ensureNotNull)(this._data);
          return (0, d.extendAndClipLineSegment)(
            e,
            t,
            i.cssWidth,
            i.cssHeight,
            r.extendleft,
            r.extendright,
          );
        }
        _drawBackground(e, t, i) {
          const a = (0, n.ensureNotNull)(this._data),
            [o, l, d, h] = t;
          if (
            (0, r.equalPoints)(o, l) ||
            (0, r.equalPoints)(d, h) ||
            (0, s.distanceToLine)(o, l, d).distance < 1e-6 ||
            (0, s.distanceToLine)(o, l, h).distance < 1e-6
          )
            return;
          if (i.cssWidth <= 0 || i.cssHeight <= 0) return;
          let c = [
            new r.Point(0, 0),
            new r.Point(i.cssWidth, 0),
            new r.Point(i.cssWidth, i.cssHeight),
            new r.Point(0, i.cssHeight),
          ];
          if (
            ((c = _(c, o, l, h)),
            a.extendright || (c = _(c, l, h, d)),
            (c = _(c, h, d, o)),
            a.extendleft || (c = _(c, d, o, l)),
            null !== c)
          ) {
            e.beginPath(), e.moveTo(c[0].x, c[0].y);
            for (let t = 1; t < c.length; t++) e.lineTo(c[t].x, c[t].y);
            (e.fillStyle = this._getColor()), e.fill();
          }
        }
        _hitTestBackground(e) {
          const t = (0, n.ensureNotNull)(this._data);
          if (4 !== t.points.length) return null;
          const [i, r, s] = t.points,
            a = (r.y - i.y) / (r.x - i.x),
            o = i.y + a * (e.x - i.x),
            l = s.y + a * (e.x - s.x),
            d = Math.max(o, l),
            h = Math.min(o, l),
            c = Math.min(i.x, r.x),
            u = Math.max(i.x, r.x);
          return (!t.extendleft && e.x < c) || (!t.extendright && e.x > u)
            ? null
            : e.y >= h && e.y <= d
            ? this._backHittestResult
            : null;
        }
      }
      function _(e, t, i, n) {
        return null !== e
          ? (0, a.intersectPolygonAndHalfplane)(
              e,
              (0, r.halfplaneThroughPoint)((0, r.lineThroughPoints)(t, i), n),
            )
          : null;
      }
    },
    59943: (e, t, i) => {
      'use strict';
      i.d(t, { PolygonRenderer: () => u });
      var n = i(71044),
        r = i(89684),
        s = i(5025),
        a = i(6397),
        o = i(71172),
        l = i(10288),
        d = i(50968),
        h = i(58729),
        c = i(21344);
      class u extends h.ScaledPaneRenderer {
        constructor(e) {
          super(),
            (this._data = null),
            (this._backHittest = new l.HitTestResult(
              l.HitTestResult.MOVEPOINT_BACKGROUND,
            )),
            (this._points = []),
            (this._hittest =
              null != e ? e : new l.HitTestResult(l.HitTestResult.MOVEPOINT));
        }
        setData(e) {
          (this._data = e), (this._points = e.points);
        }
        hitTest(e) {
          if (
            null === this._data ||
            (void 0 !== this._data.mouseTouchable && !this._data.mouseTouchable)
          )
            return null;
          const t = Math.max(
              (0, c.interactionTolerance)().line,
              Math.ceil(this._data.linewidth / 2),
            ),
            i = this._points.length;
          if (1 === i) {
            return (0, n.pointInCircle)(e, this._points[0], t)
              ? this._hittest
              : null;
          }
          for (let n = 1; n < i; n++) {
            const i = this._points[n - 1],
              s = this._points[n];
            if ((0, r.distanceToSegment)(i, s, e).distance <= t)
              return this._hittest;
          }
          if (this._data.filled && this._data.fillBackground && i > 0) {
            const n = this._points[0],
              s = this._points[i - 1];
            if ((0, r.distanceToSegment)(n, s, e).distance <= t)
              return this._hittest;
          }
          return this._data.filled &&
            this._data.fillBackground &&
            (0, n.pointInPolygon)(e, this._data.points)
            ? this._backHittest
            : null;
        }
        _drawImpl(e, t) {
          var i, n;
          const r = this._points.length;
          if (null === this._data || 0 === r) return;
          if (1 === r)
            return void this._drawPoint(
              e,
              this._points[0],
              this._data.linewidth / 2,
              this._data.color,
            );
          e.beginPath();
          const l =
            null !== (i = this._data.linecap) && void 0 !== i ? i : 'butt';
          (e.lineCap = l),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth),
            (e.lineJoin =
              null !== (n = this._data.linejoin) && void 0 !== n ? n : 'miter'),
            (0, s.setLineStyle)(e, this._data.linestyle);
          const h = this._points[0];
          e.moveTo(h.x, h.y);
          for (const t of this._points) e.lineTo(t.x, t.y);
          if (
            (this._data.filled &&
              this._data.fillBackground &&
              ((e.fillStyle = (0, d.generateColor)(
                this._data.backcolor,
                this._data.transparency,
              )),
              e.fill()),
            this._data.filled && !this._data.skipClosePath && e.closePath(),
            this._data.linewidth > 0 && e.stroke(),
            r > 1)
          ) {
            if (
              ('butt' !== l && (e.lineCap = 'butt'),
              this._data.leftend === o.LineEnd.Arrow)
            ) {
              const i = this._correctArrowPoints(
                this._points[1],
                this._points[0],
                e.lineWidth,
                l,
              );
              (0, a.drawArrow)(i[0], i[1], e, e.lineWidth, t.pixelRatio);
            }
            if (this._data.rightend === o.LineEnd.Arrow) {
              const i = this._correctArrowPoints(
                this._points[r - 2],
                this._points[r - 1],
                e.lineWidth,
                l,
              );
              (0, a.drawArrow)(i[0], i[1], e, e.lineWidth, t.pixelRatio);
            }
          }
        }
        _drawPoint(e, t, i, n) {
          0 !== i &&
            (e.beginPath(),
            (e.fillStyle = n),
            e.arc(t.x, t.y, i, 0, 2 * Math.PI, !0),
            e.fill(),
            e.closePath());
        }
        _correctArrowPoints(e, t, i, n) {
          const r = t.subtract(e),
            s = r.length();
          if ('butt' === n || s < 1) return [e, t];
          const a = s + i / 2;
          return [e, r.scaled(a / s).add(e)];
        }
      }
    },
    56224: (e, t, i) => {
      'use strict';
      i.d(t, { TrendLineStatsRenderer: () => x, iconsContainer: () => f });
      var n = i(72927),
        r = i(71044),
        s = i(16282),
        a = i(43367),
        o = i(44896),
        l = i(10288),
        d = i(55430),
        h = i(47903),
        c = i(16932),
        u = i(5729),
        _ = i.n(u);
      class p {
        constructor(e, t, i) {
          (this._ready = !1),
            (this._img = (function (e, t, i) {
              const n = new Image();
              return (
                (n.width = t), (n.height = t), (n.onload = i), (n.src = e), n
              );
            })(e, t, () => {
              (this._ready = !0), i();
            }));
        }
        ready() {
          return this._ready;
        }
        image() {
          return this._img;
        }
      }
      let g = null;
      const f = new (class {
          constructor(e, t) {
            (this._icons = new Map()),
              (this._onAllIconsLoaded = new (_())()),
              (this._pendingLoading = e.length);
            const i = () => {
              0 == --this._pendingLoading && this._onAllIconsLoaded.fire();
            };
            e.forEach((e) => {
              const n = this._icons.get(e.name) || new Map();
              n.set(e.theme, new p(e.imageData, t, i)),
                this._icons.set(e.name, n);
            });
          }
          getIcon(e, t) {
            return (0, s.ensureDefined)(
              (0, s.ensureDefined)(this._icons.get(e)).get(t),
            );
          }
          onAllIconsReady() {
            return this._onAllIconsLoaded;
          }
        })(
          [
            {
              name: 'angle',
              theme: 'dark',
              imageData:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjQ5OTk5IDE1SDIuNjU3NzFMMy4wNjEwNCAxNC4yNjA2TDkuMDYxMDQgMy4yNjA1N0w5LjMwMDQ2IDIuODIxNjJMMTAuMTc4NCAzLjMwMDQ4TDkuOTM4OTMgMy43Mzk0Mkw3LjUxMzg1IDguMTg1NDJDMTAuNTYyMSA5LjY3MjA1IDEwLjk0NTEgMTIuNjI2MSAxMC45OTMxIDE0SDE0LjVIMTVWMTVIMTQuNUgzLjQ5OTk5Wk05Ljk5MTk3IDE0QzkuOTQyMzYgMTIuNzI1OSA5LjU4NjI5IDEwLjI4OCA3LjAzNDM1IDkuMDY0NDlMNC4zNDIyNiAxNEg5Ljk5MTk3WiIgZmlsbD0iI0Y4RjlGRCIvPgo8L3N2Zz4K',
            },
            {
              name: 'angle',
              theme: 'light',
              imageData:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy40OTk5OSAxNUgyLjY1NzcxTDMuMDYxMDQgMTQuMjYwNkw5LjA2MTA0IDMuMjYwNTdMOS4zMDA0NiAyLjgyMTYyTDEwLjE3ODQgMy4zMDA0OEw5LjkzODkzIDMuNzM5NDJMNy41MTM4NSA4LjE4NTQyQzEwLjU2MjEgOS42NzIwNSAxMC45NDUxIDEyLjYyNjEgMTAuOTkzMSAxNEgxNC41SDE1VjE1SDE0LjVIMy40OTk5OVpNOS45OTE5NyAxNEM5Ljk0MjM2IDEyLjcyNTkgOS41ODYyOSAxMC4yODggNy4wMzQzNSA5LjA2NDQ5TDQuMzQyMjYgMTRIOS45OTE5N1oiIGZpbGw9IiMyQTJFMzkiLz4NCjwvc3ZnPg0K',
            },
            {
              name: 'barsRange',
              theme: 'dark',
              imageData:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzVjMuNVY1SDFWNlYxM1YxNEgyVjE1LjVWMTZIM1YxNS41VjE0SDRWMTNWNlY1SDNWMy41VjNIMlpNOC4yMDcxMSA3LjVMNy44NTM1NSA3Ljg1MzU1TDYuNzA3MTEgOUgxMS4yOTI5TDEwLjE0NjQgNy44NTM1NUw5Ljc5Mjg5IDcuNUwxMC41IDYuNzkyODlMMTAuODUzNiA3LjE0NjQ1TDEyLjg1MzYgOS4xNDY0NUwxMy4yMDcxIDkuNUwxMi44NTM2IDkuODUzNTVMMTAuODUzNiAxMS44NTM2TDEwLjUgMTIuMjA3MUw5Ljc5Mjg5IDExLjVMMTAuMTQ2NCAxMS4xNDY0TDExLjI5MjkgMTBINi43MDcxMUw3Ljg1MzU1IDExLjE0NjRMOC4yMDcxMSAxMS41TDcuNSAxMi4yMDcxTDcuMTQ2NDUgMTEuODUzNkw1LjE0NjQ1IDkuODUzNTVMNC43OTI4OSA5LjVMNS4xNDY0NSA5LjE0NjQ1TDcuMTQ2NDUgNy4xNDY0NUw3LjUgNi43OTI4OUw4LjIwNzExIDcuNVpNMyA2SDJWMTNIM1Y2Wk0xNSAzLjVWM0gxNlYzLjVWNUgxN1Y2VjEzVjE0SDE2VjE1LjVWMTZIMTVWMTUuNVYxNEgxNFYxM1Y2VjVIMTVWMy41Wk0xNSA2SDE2VjEzSDE1VjZaIiBmaWxsPSIjRjhGOUZEIi8+DQo8L3N2Zz4NCg==',
            },
            {
              name: 'barsRange',
              theme: 'light',
              imageData:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzVjMuNVY1SDFWNlYxM1YxNEgyVjE1LjVWMTZIM1YxNS41VjE0SDRWMTNWNlY1SDNWMy41VjNIMlpNOC4yMDcxMSA3LjVMNy44NTM1NSA3Ljg1MzU1TDYuNzA3MTEgOUgxMS4yOTI5TDEwLjE0NjQgNy44NTM1NUw5Ljc5Mjg5IDcuNUwxMC41IDYuNzkyODlMMTAuODUzNiA3LjE0NjQ1TDEyLjg1MzYgOS4xNDY0NUwxMy4yMDcxIDkuNUwxMi44NTM2IDkuODUzNTVMMTAuODUzNiAxMS44NTM2TDEwLjUgMTIuMjA3MUw5Ljc5Mjg5IDExLjVMMTAuMTQ2NCAxMS4xNDY0TDExLjI5MjkgMTBINi43MDcxMUw3Ljg1MzU1IDExLjE0NjRMOC4yMDcxMSAxMS41TDcuNSAxMi4yMDcxTDcuMTQ2NDUgMTEuODUzNkw1LjE0NjQ1IDkuODUzNTVMNC43OTI4OSA5LjVMNS4xNDY0NSA5LjE0NjQ1TDcuMTQ2NDUgNy4xNDY0NUw3LjUgNi43OTI4OUw4LjIwNzExIDcuNVpNMyA2SDJWMTNIM1Y2Wk0xNSAzLjVWM0gxNlYzLjVWNUgxN1Y2VjEzVjE0SDE2VjE1LjVWMTZIMTVWMTUuNVYxNEgxNFYxM1Y2VjVIMTVWMy41Wk0xNSA2SDE2VjEzSDE1VjZaIiBmaWxsPSIjMkEyRTM5Ii8+DQo8L3N2Zz4NCg==',
            },
            {
              name: 'priceRange',
              theme: 'dark',
              imageData:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAySDMuNUgxMy41SDE0VjNIMTMuNUgzLjVIM1YyWk04LjUgMy43OTI4OUw4Ljg1MzU1IDQuMTQ2NDVMMTAuODUzNiA2LjE0NjQ1TDExLjIwNzEgNi41TDEwLjUgNy4yMDcxMUwxMC4xNDY0IDYuODUzNTVMOSA1LjcwNzExVjEyLjI5MjlMMTAuMTQ2NCAxMS4xNDY0TDEwLjUgMTAuNzkyOUwxMS4yMDcxIDExLjVMMTAuODUzNiAxMS44NTM2TDguODUzNTUgMTMuODUzNkw4LjUgMTQuMjA3MUw4LjE0NjQ1IDEzLjg1MzZMNi4xNDY0NSAxMS44NTM2TDUuNzkyODkgMTEuNUw2LjUgMTAuNzkyOUw2Ljg1MzU1IDExLjE0NjRMOCAxMi4yOTI5VjUuNzA3MTFMNi44NTM1NSA2Ljg1MzU1TDYuNSA3LjIwNzExTDUuNzkyODkgNi41TDYuMTQ2NDUgNi4xNDY0NUw4LjE0NjQ1IDQuMTQ2NDVMOC41IDMuNzkyODlaTTMuNSAxNkgzVjE1SDMuNUgxMy41SDE0VjE2SDEzLjVIMy41WiIgZmlsbD0iI0Y4RjlGRCIvPg0KPC9zdmc+DQo=',
            },
            {
              name: 'priceRange',
              theme: 'light',
              imageData:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAySDMuNUgxMy41SDE0VjNIMTMuNUgzLjVIM1YyWk04LjUgMy43OTI4OUw4Ljg1MzU1IDQuMTQ2NDVMMTAuODUzNiA2LjE0NjQ1TDExLjIwNzEgNi41TDEwLjUgNy4yMDcxMUwxMC4xNDY0IDYuODUzNTVMOSA1LjcwNzExVjEyLjI5MjlMMTAuMTQ2NCAxMS4xNDY0TDEwLjUgMTAuNzkyOUwxMS4yMDcxIDExLjVMMTAuODUzNiAxMS44NTM2TDguODUzNTUgMTMuODUzNkw4LjUgMTQuMjA3MUw4LjE0NjQ1IDEzLjg1MzZMNi4xNDY0NSAxMS44NTM2TDUuNzkyODkgMTEuNUw2LjUgMTAuNzkyOUw2Ljg1MzU1IDExLjE0NjRMOCAxMi4yOTI5VjUuNzA3MTFMNi44NTM1NSA2Ljg1MzU1TDYuNSA3LjIwNzExTDUuNzkyODkgNi41TDYuMTQ2NDUgNi4xNDY0NUw4LjE0NjQ1IDQuMTQ2NDVMOC41IDMuNzkyODlaTTMuNSAxNkgzVjE1SDMuNUgxMy41SDE0VjE2SDEzLjVIMy41WiIgZmlsbD0iIzJBMkUzOSIvPg0KPC9zdmc+DQo=',
            },
          ],
          18,
        ),
        v = new Map();
      class x {
        constructor(e, t, i) {
          (this._fontSize = 0),
            (this._preRendered = !1),
            (this._boundingBox = null),
            (this._rect = null),
            (this._padding = null),
            (this._textPoint = null),
            (this._textSizeCache = t),
            (this._data = e),
            (this._fontSize = e.fontSize ? e.fontSize : 12),
            (this._lineSpacing =
              (0, h.isNumber)(this._data.lineSpacing) && this._data.lineSpacing
                ? this._data.lineSpacing
                : 0),
            (e.lines = this._lines =
              null === e.text
                ? []
                : (0, o.wordWrap)(e.text, this.fontStyle(), e.wordWrapWidth)),
            (this._hittest =
              i || new l.HitTestResult(l.HitTestResult.MOVEPOINT));
        }
        fontStyle() {
          return `${this._data.bold ? 'bold ' : ''}${
            this._data.italic ? 'italic ' : ''
          }${this._fontSize}px ${this._data.font}`;
        }
        draw(e, t) {
          if (0 === this._data.points.length || null === this._data.text)
            return { width: 0 };
          this._preRender();
          const i = this._fontSize + this._lineSpacing;
          (e.textBaseline = 'top'), (e.font = this.fontStyle());
          const n = (0, s.ensureNotNull)(this._rect);
          if (this._rect) {
            if (
              (('right' !== this._data.horzAlign &&
                'center' !== this._data.horzAlign) ||
                (!0 !== this._data.doNotAlignText &&
                  (e.textAlign =
                    'right' === this._data.horzAlign ? 'end' : 'center')),
              this._data.backgroundRoundRect
                ? ((0, d.drawRoundRect)(
                    e,
                    n.x,
                    n.y,
                    n.w,
                    n.h,
                    this._data.backgroundRoundRect,
                  ),
                  (e.fillStyle = this._data.backgroundColor),
                  e.fill(),
                  (e.globalAlpha = 1))
                : ((e.fillStyle = this._data.backgroundColor),
                  e.fillRect(n.x, n.y, n.w, n.h),
                  (e.globalAlpha = 1)),
              this._data.icons)
            ) {
              let r = 0;
              const a = Math.ceil((18 - this._fontSize) / 2),
                o = (0, s.ensureNotNull)(this._padding);
              for (const s of this._data.icons) {
                const l = Math.round(n.x + o.left),
                  d = Math.round(n.y + o.top + i * r - a);
                this._drawIcon(e, l, d, s, Boolean(this._data.isDark), t),
                  (r += 1);
              }
            }
          } else
            'right' === this._data.horzAlign
              ? (e.textAlign = 'end')
              : 'center' === this._data.horzAlign && (e.textAlign = 'center');
          const r = (0, s.ensureNotNull)(this._textPoint),
            a = r.x;
          let o = r.y;
          e.fillStyle = this._data.color;
          for (const t of this._lines) e.fillText(t, a, o), (o += i);
          return { width: n.w + 2 };
        }
        hitTest(e) {
          return 0 === this._data.points.length
            ? null
            : (this._preRender(),
              this._boundingBox && (0, r.pointInBox)(e, this._boundingBox)
                ? this._hittest
                : null);
        }
        _preRender() {
          if (this._preRendered) return;
          const e = (function () {
              if (null !== g) return g;
              const e = (0, c.createDisconnectedCanvas)(
                document,
                new c.Size(0, 0),
              );
              return (g = (0, c.getPrescaledContext2D)(e)), g;
            })(),
            t = this._data.points[0].x + (this._data.offsetX || 0);
          let i = t;
          const r = this._data.points[0].y + (this._data.offsetY || 0);
          let s = r;
          const a = this._fontSize,
            o = this._lineSpacing,
            l = (a + o) * this._lines.length - o;
          (e.textBaseline = 'top'), (e.font = this.fontStyle());
          const d = [];
          let h;
          if (this._data.wordWrapWidth) {
            h = this._data.wordWrapWidth;
            for (let e = 0; e < this._lines.length; e++)
              d.push(this._data.wordWrapWidth);
          } else {
            h = 0;
            for (let t = 0; t < this._lines.length; t++) {
              const i = e.measureText(this._lines[t]).width;
              d.push(i), (h = Math.max(h, i));
            }
          }
          const u = {
              top: this._data.paddingTop,
              right: this._data.paddingRight,
              bottom: this._data.paddingBottom,
              left: this._data.paddingLeft,
            },
            _ = {
              x: Math.floor(t),
              y: Math.floor(r),
              w: Math.ceil(h + u.left + u.right),
              h: Math.ceil(l + u.top + u.bottom),
            };
          if (((i += u.left), (s += u.top), this._data.icons)) {
            const e =
              void 0 !== this._data.textPadding
                ? this._data.textPadding
                : Math.round(a / 2);
            (i += 18 + e), (_.w += 18 + e);
          }
          if (
            'bottom' === this._data.vertAlign ||
            'middle' === this._data.vertAlign
          ) {
            const e =
              'middle' === this._data.vertAlign
                ? r - _.h / 2
                : r - _.h - (_.y - r);
            (s += e - _.y), (_.y = e);
          }
          if (
            'right' === this._data.horzAlign ||
            'center' === this._data.horzAlign
          ) {
            const n =
              'center' === this._data.horzAlign
                ? t - _.w / 2
                : t - _.w - (_.x - t);
            (i += n - _.x),
              (_.x = n),
              !0 !== this._data.doNotAlignText &&
                ('right' === this._data.horzAlign
                  ? ((e.textAlign = 'end'), (i += h))
                  : ((e.textAlign = 'center'), (i += h / 2)));
          }
          _.w % 2 != 0 && _.w++,
            (_.x += 0.5),
            (_.y += 0.5),
            (this._boundingBox = (0, n.box)(
              new n.Point(_.x, _.y),
              new n.Point(_.x + _.w, _.y + _.h),
            )),
            (this._rect = _),
            (this._padding = u),
            (this._textPoint = { x: i, y: s }),
            this._textSizeCache && (this._textSizeCache.widths = d),
            (this._preRendered = !0);
        }
        _drawIcon(e, t, i, n, r, o) {
          const l = `${n}${this._data.isDark}${o.pixelRatio}`;
          let d = v.get(l);
          if (!d) {
            (d = document.createElement('canvas')),
              (d.width = 18 * o.pixelRatio),
              (d.height = 18 * o.pixelRatio),
              (d.style.width = '18px'),
              (d.style.height = '18px');
            const e = (0, s.ensureNotNull)(d.getContext('2d'));
            e.setTransform(1, 0, 0, 1, 0, 0),
              a.isEdge || e.scale(o.pixelRatio, o.pixelRatio);
            const t = f.getIcon(n, r ? 'dark' : 'light');
            t.ready() && (e.drawImage(t.image(), 0, 0), v.set(l, d));
          }
          e.drawImage(d, t - 0.5, i - 0.5, 18, 18);
        }
      }
    },
    18614: (e, t, i) => {
      'use strict';
      i.d(t, { TriangleRenderer: () => h });
      var n = i(89684),
        r = i(71044),
        s = i(58729),
        a = i(10288),
        o = i(50968),
        l = i(5025),
        d = i(21344);
      class h extends s.ScaledPaneRenderer {
        constructor() {
          super(...arguments), (this._data = null);
        }
        setData(e) {
          this._data = e;
        }
        hitTest(e) {
          if (null === this._data || this._data.points.length < 2) return null;
          const [t, i] = this._data.points;
          let s = (0, n.distanceToSegment)(t, i, e);
          const o = (0, d.interactionTolerance)().line;
          if (s.distance <= o)
            return new a.HitTestResult(a.HitTestResult.MOVEPOINT);
          if (3 !== this._data.points.length) return null;
          const l = this._data.points[2];
          return (
            (s = (0, n.distanceToSegment)(i, l, e)),
            s.distance <= o
              ? new a.HitTestResult(a.HitTestResult.MOVEPOINT)
              : ((s = (0, n.distanceToSegment)(l, t, e)),
                s.distance <= o
                  ? new a.HitTestResult(a.HitTestResult.MOVEPOINT)
                  : this._data.fillBackground &&
                    (0, r.pointInTriangle)(e, t, i, l)
                  ? new a.HitTestResult(a.HitTestResult.MOVEPOINT_BACKGROUND)
                  : null)
          );
        }
        _drawImpl(e) {
          if (null === this._data || this._data.points.length < 2) return;
          (e.lineCap = 'butt'),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth),
            void 0 !== this._data.linestyle &&
              (0, l.setLineStyle)(e, this._data.linestyle);
          const [t, i] = this._data.points,
            n = 2 === this._data.points.length ? i : this._data.points[2];
          e.beginPath(),
            e.moveTo(t.x, t.y),
            e.lineTo(i.x, i.y),
            e.lineTo(n.x, n.y),
            e.lineTo(t.x, t.y),
            this._data.fillBackground &&
              ((e.fillStyle = (0, o.generateColor)(
                this._data.backcolor,
                this._data.transparency,
              )),
              e.fill()),
            e.stroke();
        }
      }
    },
  },
]);
