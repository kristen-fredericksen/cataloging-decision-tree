/* @ds-bundle: {"format":4,"namespace":"CUNYLibraryServicesDesignSystem_bb051c","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"933cb1f05419","components/core/Badge.jsx":"aeabccebc4b4","components/core/Button.jsx":"c58a123cca59","components/core/Card.jsx":"5b0319c7d47e","components/core/Icon.jsx":"d0d7e6ad7aef","components/core/IconButton.jsx":"1eab630a0ffa","components/core/Tag.jsx":"6cd5bba22c70","components/data/DataTable.jsx":"56b84d00c51e","components/feedback/Alert.jsx":"eea7767e49e8","components/feedback/Dialog.jsx":"ec339f2e19cf","components/feedback/EmptyState.jsx":"fe39253c619d","components/feedback/Spinner.jsx":"30236d66e305","components/feedback/Toast.jsx":"c1b5834c9b74","components/feedback/Tooltip.jsx":"545071e10df4","components/forms/Checkbox.jsx":"2da39813e830","components/forms/Field.jsx":"22f445cae590","components/forms/Input.jsx":"d2a2f58ab412","components/forms/Radio.jsx":"fd62b9ec4dba","components/forms/SearchBar.jsx":"e6e0be081737","components/forms/Select.jsx":"99cdded3d2b7","components/forms/Switch.jsx":"efb7cc9b4669","components/forms/Textarea.jsx":"cae765d5f881","components/navigation/Accordion.jsx":"cdaa14c28e60","components/navigation/Breadcrumb.jsx":"b569bab2b941","components/navigation/Pagination.jsx":"f675328f109c","components/navigation/SiteFooter.jsx":"71b723f11ebb","components/navigation/SiteHeader.jsx":"1b89873b9cc9","components/navigation/Tabs.jsx":"d53755ef8a5d","ui_kits/knowledge_base/FaqAnswer.jsx":"179bfdb80ce2","ui_kits/knowledge_base/FaqList.jsx":"6ea45d123a66","ui_kits/knowledge_base/faqData.js":"fbf548ae8c04","ui_kits/ols_website/Hero.jsx":"c1632aa9ac3a","ui_kits/ols_website/LibrarianPanel.jsx":"a98cc249b66e","ui_kits/ols_website/ServiceGrid.jsx":"1494527d5ffd","ui_kits/onesearch/FacetRail.jsx":"b51f64884935","ui_kits/onesearch/RecordDetail.jsx":"d168ccd7ecdc","ui_kits/onesearch/ResultList.jsx":"608944d9f2a1","ui_kits/onesearch/resultData.js":"8b95e3dce068"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CUNYLibraryServicesDesignSystem_bb051c = window.CUNYLibraryServicesDesignSystem_bb051c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LOGO_SRC = {
  blue: "ols-logo-rgb.png",
  black: "ols-logo-black.png",
  white: "ols-logo-white.png",
  cmyk: "ols-logo-cmyk.png"
};

/**
 * The CUNY Library Services lockup. Raster only — no SVG was supplied by OLS.
 * Never re-typeset, recolour, or rebuild the mark; only these five files are approved.
 */
function Logo({
  variant = "blue",
  height = 40,
  assetBase = "assets/logos",
  alt = "CUNY Library Services",
  href,
  style,
  ...rest
}) {
  const img = /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetBase}/${LOGO_SRC[variant] || LOGO_SRC.blue}`,
    alt: alt,
    height: height,
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
  if (!href) return img;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "inline-block",
      textDecoration: "none",
      lineHeight: 0
    }
  }, img);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const badgeTones = {
  neutral: {
    background: "var(--gray-100)",
    color: "var(--gray-700)",
    border: "var(--gray-200)"
  },
  brand: {
    background: "var(--surface-brand-subtle)",
    color: "var(--blue-800)",
    border: "var(--border-info)"
  },
  taxi: {
    background: "var(--taxi)",
    color: "var(--indigo)",
    border: "var(--taxi)"
  },
  success: {
    background: "var(--green-100)",
    color: "var(--green-700)",
    border: "var(--border-success)"
  },
  warning: {
    background: "var(--amber-100)",
    color: "var(--amber-700)",
    border: "var(--border-warning)"
  },
  danger: {
    background: "var(--red-100)",
    color: "var(--red-700)",
    border: "var(--border-danger)"
  },
  solid: {
    background: "var(--cuny-blue)",
    color: "var(--white)",
    border: "var(--cuny-blue)"
  }
};
function Badge({
  children,
  tone = "neutral",
  dot,
  style,
  ...rest
}) {
  const t = badgeTones[tone] || badgeTones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "2px 8px",
      height: 22,
      font: "var(--weight-semibold) var(--text-xs)/1 var(--font-sans)",
      letterSpacing: "var(--tracking-wide)",
      borderRadius: "var(--radius-xs)",
      background: t.background,
      color: t.color,
      borderWidth: `1px`,
      borderStyle: "solid",
      borderColor: `${t.border}`,
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--radius-pill)",
      background: "currentColor"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  title,
  eyebrow,
  footer,
  accent,
  padding = "var(--space-6)",
  interactive,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      background: "var(--surface-card)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--border-subtle)",
      borderTop: accent ? `4px solid var(--rule-${accent === "taxi" ? "accent" : "brand"})` : undefined,
      borderRadius: "var(--radius-lg)",
      padding,
      color: "var(--text-body)",
      textDecoration: "none",
      transition: "var(--transition-control)",
      ...(interactive || href ? {
        cursor: "pointer",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        borderColor: hover ? "var(--border-default)" : "var(--border-subtle)"
      } : null),
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      marginBottom: "var(--space-2)"
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      color: "var(--text-heading)",
      margin: "0 0 var(--space-2)"
    }
  }, title) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      paddingTop: "var(--space-3)",
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: "var(--rule-hairline)",
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lucide, tinted with a CSS mask so it inherits currentColor.
 * SUBSTITUTION: OLS supplied no icon set. Lucide's 2px-stroke outline style is the
 * closest neutral match to CUNY's plain institutional web furniture.
 *
 * Glyphs are vendored into assets/icons/. Point a page at them once:
 *   window.OLS_ICON_BASE = "../../assets/icons";
 * Otherwise the pinned jsDelivr copy is used.
 */
const CDN_BASE = "https://cdn.jsdelivr.net/npm/lucide-static@1.41.0/icons";

/** Lucide renamed these in v1. Both spellings resolve. */
const ICON_ALIASES = {
  "check-circle": "circle-check",
  "alert-triangle": "triangle-alert",
  "alert-octagon": "octagon-alert",
  "help-circle": "circle-help",
  "alert-circle": "circle-alert",
  "x-circle": "circle-x"
};
function Icon({
  name,
  size = 20,
  base,
  label,
  style,
  ...rest
}) {
  const resolved = ICON_ALIASES[name] || name;
  const root = base || typeof window !== "undefined" && window.OLS_ICON_BASE || CDN_BASE;
  const url = `url("${root}/${resolved}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      backgroundColor: "currentColor",
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const btnSizes = {
  sm: {
    height: 32,
    padding: "0 12px",
    fontSize: "var(--text-sm)",
    gap: 6,
    icon: 16
  },
  md: {
    height: 40,
    padding: "0 18px",
    fontSize: "var(--text-base)",
    gap: 8,
    icon: 18
  },
  lg: {
    height: 48,
    padding: "0 24px",
    fontSize: "var(--text-md)",
    gap: 10,
    icon: 20
  }
};
const btnVariants = {
  primary: {
    background: "var(--control-primary-bg)",
    color: "var(--control-primary-fg)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--control-primary-bg)"
  },
  secondary: {
    background: "var(--control-secondary-bg)",
    color: "var(--control-secondary-fg)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--control-secondary-border)"
  },
  ghost: {
    background: "transparent",
    color: "var(--control-ghost-fg)",
    border: "1px solid transparent"
  },
  danger: {
    background: "var(--red-600)",
    color: "var(--white)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--red-600)"
  },
  inverse: {
    background: "var(--white)",
    color: "var(--cuny-blue)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--white)"
  }
};
const btnHover = {
  primary: {
    background: "var(--control-primary-bg-hover)",
    borderColor: "var(--control-primary-bg-hover)"
  },
  secondary: {
    background: "var(--surface-brand-subtle)"
  },
  ghost: {
    background: "var(--surface-hover)"
  },
  danger: {
    background: "var(--red-700)",
    borderColor: "var(--red-700)"
  },
  inverse: {
    background: "var(--blue-100)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  block,
  disabled,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = btnSizes[size] || btnSizes.md;
  const v = btnVariants[variant] || btnVariants.primary;
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      font: `var(--weight-semibold) ${s.fontSize}/1 var(--font-sans)`,
      letterSpacing: "var(--tracking-normal)",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      textDecoration: "none",
      whiteSpace: "nowrap",
      transition: "var(--transition-control)",
      ...v,
      ...(hover && !disabled ? btnHover[variant] : null),
      ...(disabled ? {
        background: "var(--control-disabled-bg)",
        color: "var(--control-disabled-fg)",
        borderColor: "var(--control-disabled-bg)"
      } : null),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const iconBtnSizes = {
  sm: {
    box: 32,
    glyph: 16
  },
  md: {
    box: 40,
    glyph: 20
  },
  lg: {
    box: 48,
    glyph: 22
  }
};
function IconButton({
  icon,
  label,
  size = "md",
  variant = "ghost",
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = iconBtnSizes[size] || iconBtnSizes.md;
  const base = {
    ghost: {
      background: "transparent",
      color: "var(--control-ghost-fg)",
      border: "1px solid transparent"
    },
    outline: {
      background: "var(--white)",
      color: "var(--cuny-blue)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--border-default)"
    },
    solid: {
      background: "var(--control-primary-bg)",
      color: "var(--white)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--control-primary-bg)"
    }
  }[variant];
  const hov = {
    ghost: {
      background: "var(--surface-hover)"
    },
    outline: {
      background: "var(--surface-brand-subtle)",
      borderColor: "var(--cuny-blue)"
    },
    solid: {
      background: "var(--control-primary-bg-hover)",
      borderColor: "var(--control-primary-bg-hover)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      padding: 0,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-control)",
      ...base,
      ...(hover && !disabled ? hov : null),
      ...(disabled ? {
        color: "var(--control-disabled-fg)",
        background: "transparent"
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.glyph
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  selected,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = Boolean(onClick);
  const Tag_ = clickable ? "button" : "span";
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    type: clickable ? "button" : undefined,
    "aria-pressed": clickable ? !!selected : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "0 10px",
      height: 28,
      font: "var(--weight-medium) var(--text-sm)/1 var(--font-sans)",
      borderRadius: "var(--radius-sm)",
      cursor: clickable ? "pointer" : "default",
      transition: "var(--transition-control)",
      background: selected ? "var(--cuny-blue)" : hover && clickable ? "var(--surface-brand-subtle)" : "var(--white)",
      color: selected ? "var(--white)" : "var(--gray-700)",
      borderWidth: `1px`,
      borderStyle: "solid",
      borderColor: `${selected ? "var(--cuny-blue)" : "var(--border-default)"}`,
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: "inline-flex",
      background: "none",
      border: 0,
      padding: 0,
      margin: "0 -2px 0 0",
      color: "inherit",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  sort,
  onSort,
  dense,
  caption,
  style,
  ...rest
}) {
  const pad = dense ? "8px 12px" : "12px 16px";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      font: "var(--type-body-sm)"
    }
  }, caption ? /*#__PURE__*/React.createElement("caption", {
    style: {
      captionSide: "top",
      textAlign: "left",
      padding: pad,
      font: "var(--type-label)",
      color: "var(--text-muted)",
      background: "var(--surface-sunken)"
    }
  }, caption) : null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--surface-sunken)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    scope: "col",
    "aria-sort": sort === c.key ? "descending" : c.sortable ? "none" : undefined,
    style: {
      textAlign: c.align || "left",
      padding: pad,
      font: "var(--weight-semibold) var(--text-xs)/1.4 var(--font-sans)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "var(--border-default)",
      whiteSpace: "nowrap",
      width: c.width
    }
  }, c.sortable ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSort && onSort(c.key),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: "none",
      border: 0,
      padding: 0,
      font: "inherit",
      letterSpacing: "inherit",
      textTransform: "inherit",
      color: "inherit",
      cursor: "pointer"
    }
  }, c.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: sort === c.key ? "chevron-down" : "chevrons-up-down",
    size: 13
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, c.label))))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id ?? i,
    style: {
      borderBottom: i === rows.length - 1 ? 0 : "1px solid var(--rule-hairline)",
      background: "var(--white)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: pad,
      color: "var(--text-body)",
      verticalAlign: "top",
      fontFamily: c.mono ? "var(--font-mono)" : undefined,
      fontSize: c.mono ? "var(--text-xs)" : undefined
    }
  }, c.render ? c.render(r) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const alertTones = {
  info: {
    bg: "var(--surface-brand-subtle)",
    border: "var(--border-info)",
    fg: "var(--blue-800)",
    icon: "info"
  },
  success: {
    bg: "var(--green-100)",
    border: "var(--border-success)",
    fg: "var(--green-700)",
    icon: "check-circle"
  },
  warning: {
    bg: "var(--amber-100)",
    border: "var(--border-warning)",
    fg: "var(--amber-700)",
    icon: "alert-triangle"
  },
  danger: {
    bg: "var(--red-100)",
    border: "var(--border-danger)",
    fg: "var(--red-700)",
    icon: "alert-octagon"
  }
};
function Alert({
  tone = "info",
  title,
  children,
  onDismiss,
  style,
  ...rest
}) {
  const t = alertTones[tone] || alertTones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: tone === "danger" ? "alert" : "status",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      padding: "var(--space-4)",
      background: t.bg,
      borderWidth: `1px`,
      borderStyle: "solid",
      borderColor: `${t.border}`,
      borderRadius: "var(--radius-md)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      display: "flex",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: t.fg,
      marginBottom: children ? 2 : 0
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--gray-800)"
    }
  }, children) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      background: "none",
      border: 0,
      padding: 0,
      color: t.fg,
      cursor: "pointer",
      display: "flex",
      height: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  const panel = React.useRef(null);
  const restoreTo = React.useRef(null);

  // Escape to dismiss, and a simple Tab cycle inside the panel (WCAG 2.1.2).
  React.useEffect(() => {
    if (!open) return undefined;
    restoreTo.current = document.activeElement;
    const focusables = () => Array.from(panel.current ? panel.current.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])') : []);
    const first = focusables()[0];
    if (first) first.focus();else if (panel.current) panel.current.focus();
    const onKey = e => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose && onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const list = focusables();
      if (!list.length) return;
      const firstEl = list[0];
      const lastEl = list[list.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      if (restoreTo.current && restoreTo.current.focus) restoreTo.current.focus();
    };
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "var(--surface-overlay)",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: "var(--space-16) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: panel,
    role: "dialog",
    "aria-modal": "true",
    tabIndex: -1,
    "aria-label": typeof title === "string" ? title : undefined,
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-raised)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-5) var(--space-6)",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      flex: 1,
      font: "var(--type-h3)",
      margin: 0
    }
  }, title), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      font: "var(--type-body)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-2)",
      padding: "var(--space-4) var(--space-6)",
      background: "var(--surface-sunken)",
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: "var(--border-subtle)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  icon = "search-x",
  title,
  children,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--space-3)",
      padding: "var(--space-12) var(--space-6)",
      background: "var(--surface-sunken)",
      borderWidth: "1px",
      borderStyle: "dashed",
      borderColor: "var(--border-default)",
      borderRadius: "var(--radius-lg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 32
  })), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h4)",
      color: "var(--text-heading)"
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      maxWidth: "var(--measure-narrow)"
    }
  }, children) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Spinner({
  size = 20,
  label = "Loading",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": label,
    style: {
      display: "inline-flex",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, "@keyframes ols-spin{to{transform:rotate(360deg)}}"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderWidth: `${Math.max(2, Math.round(size / 10))}px`,
      borderStyle: "solid",
      borderColor: `var(--gray-200)`,
      borderTopColor: "var(--cuny-blue)",
      borderRadius: "var(--radius-pill)",
      animation: "ols-spin var(--duration-slow) linear infinite",
      animationDuration: "700ms"
    }
  }));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const toastIcons = {
  info: "info",
  success: "check-circle",
  warning: "alert-triangle",
  danger: "alert-octagon"
};
const toastAccents = {
  info: "var(--cuny-blue)",
  success: "var(--green-600)",
  warning: "var(--amber-600)",
  danger: "var(--red-600)"
};
function Toast({
  tone = "info",
  message,
  action,
  onDismiss,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      minHeight: 48,
      padding: "10px 12px 10px 14px",
      background: "var(--indigo)",
      color: "var(--white)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      maxWidth: 440,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: tone === "info" ? "var(--sky)" : toastAccents[tone],
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: toastIcons[tone],
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: "var(--type-body-sm)"
    }
  }, message), action ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: action.onClick,
    style: {
      background: "none",
      border: 0,
      padding: "0 4px",
      color: "var(--sky)",
      font: "var(--type-label)",
      cursor: "pointer"
    }
  }, action.label) : null, onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      background: "none",
      border: 0,
      padding: 0,
      color: "var(--gray-400)",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  placement = "top",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 50,
      opacity: open ? 1 : 0,
      visibility: open ? "visible" : "hidden",
      transition: "opacity var(--duration-fast) var(--ease-standard)",
      background: "var(--indigo)",
      color: "var(--white)",
      font: "var(--weight-regular) var(--text-xs)/1.35 var(--font-sans)",
      padding: "6px 8px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      boxShadow: "var(--shadow-sm)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  indeterminate,
  disabled,
  onChange,
  count,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate;
  }, [indeterminate]);
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      cursor: disabled ? "not-allowed" : "pointer",
      font: "var(--type-body-sm)",
      color: disabled ? "var(--text-subtle)" : "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      flex: "0 0 auto",
      borderRadius: "var(--radius-xs)",
      background: disabled ? "var(--control-disabled-bg)" : on ? "var(--cuny-blue)" : "var(--white)",
      borderWidth: `1px`,
      borderStyle: "solid",
      borderColor: `${on && !disabled ? "var(--cuny-blue)" : "var(--border-control)"}`,
      color: "var(--white)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      outline: focus ? "2px solid transparent" : "none",
      outlineOffset: "2px",
      transition: "var(--transition-control)"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 14
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  }) : null), /*#__PURE__*/React.createElement("span", null, label), count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-subtle)",
      font: "var(--type-body-sm)"
    }
  }, "(", count, ")") : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldWrap = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-2)"
};
const fieldLabel = {
  font: "var(--type-label)",
  color: "var(--text-heading)"
};
const fieldHint = {
  font: "var(--type-body-sm)",
  color: "var(--text-muted)",
  margin: 0
};
const fieldError = {
  font: "var(--type-body-sm)",
  color: "var(--text-danger)",
  margin: 0
};
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...fieldWrap,
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: fieldLabel
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-danger)",
      marginLeft: 3
    }
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("p", {
    style: fieldError
  }, error) : hint ? /*#__PURE__*/React.createElement("p", {
    style: fieldHint
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const controlBox = state => ({
  width: "100%",
  height: 40,
  padding: "0 12px",
  font: "var(--type-body)",
  color: "var(--text-body)",
  background: state.disabled ? "var(--control-disabled-bg)" : "var(--white)",
  borderWidth: `1px`,
  borderStyle: "solid",
  borderColor: `${state.invalid ? "var(--red-600)" : state.focus ? "var(--border-focus)" : "var(--border-control)"}`,
  borderRadius: "var(--radius-md)",
  outline: "2px solid transparent",
  outlineOffset: "2px",
  boxShadow: state.focus ? "var(--focus-ring)" : "none",
  transition: "var(--transition-control)"
});
function Input({
  icon,
  invalid,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const box = controlBox({
    focus,
    invalid,
    disabled
  });
  const input = /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: icon ? {
      ...box,
      border: 0,
      boxShadow: "none",
      background: "transparent",
      height: "100%",
      padding: 0,
      flex: 1
    } : {
      ...box,
      ...style
    }
  }, rest));
  if (!icon) return input;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...box,
      display: "flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-subtle)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  disabled,
  name,
  value,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      cursor: disabled ? "not-allowed" : "pointer",
      font: "var(--type-body-sm)",
      color: disabled ? "var(--text-subtle)" : "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      borderWidth: `${checked ? 5 : 1}px`,
      borderStyle: "solid",
      borderColor: `${checked && !disabled ? "var(--cuny-blue)" : "var(--border-control)"}`,
      boxShadow: focus ? "var(--focus-ring)" : "none",
      outline: focus ? "2px solid transparent" : "none",
      outlineOffset: "2px",
      transition: "var(--transition-control)"
    }
  }), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = "Search books, articles, and more",
  scopes,
  scope,
  onScopeChange,
  size = "lg",
  style,
  ...rest
}) {
  const h = size === "lg" ? 52 : 44;
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(value);
    },
    style: {
      display: "flex",
      alignItems: "stretch",
      height: h,
      background: "var(--white)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--border-control)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      ...style
    }
  }, rest), scopes ? /*#__PURE__*/React.createElement("select", {
    value: scope,
    onChange: e => onScopeChange && onScopeChange(e.target.value),
    style: {
      appearance: "none",
      border: 0,
      borderRightWidth: "1px",
      borderRightStyle: "solid",
      borderRightColor: "var(--border-subtle)",
      background: "var(--gray-50)",
      padding: "0 14px",
      font: "var(--type-label)",
      color: "var(--gray-700)",
      cursor: "pointer",
      outline: "2px solid transparent",
      outlineOffset: "2px"
    }
  }, scopes.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, s))) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "0 0 0 14px",
      color: "var(--text-subtle)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20
  })), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 0,
      outline: "2px solid transparent",
      outlineOffset: "2px",
      padding: "0 12px",
      font: "var(--type-lead)",
      color: "var(--text-body)",
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      border: 0,
      background: "var(--cuny-blue)",
      color: "var(--white)",
      font: "var(--weight-semibold) var(--text-base)/1 var(--font-sans)",
      padding: "0 24px",
      cursor: "pointer"
    }
  }, "Search"));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const controlBox = state => ({
  width: "100%",
  height: 40,
  padding: "0 12px",
  font: "var(--type-body)",
  color: "var(--text-body)",
  background: state.disabled ? "var(--control-disabled-bg)" : "var(--white)",
  borderWidth: `1px`,
  borderStyle: "solid",
  borderColor: `${state.invalid ? "var(--red-600)" : state.focus ? "var(--border-focus)" : "var(--border-control)"}`,
  borderRadius: "var(--radius-md)",
  outline: "2px solid transparent",
  outlineOffset: "2px",
  boxShadow: state.focus ? "var(--focus-ring)" : "none",
  transition: "var(--transition-control)"
});
function Select({
  options = [],
  invalid,
  disabled,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlBox({
        focus,
        invalid,
        disabled
      }),
      appearance: "none",
      paddingRight: 36,
      fontFamily: "var(--font-sans)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-subtle)",
      display: "flex",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  disabled,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      font: "var(--type-body-sm)",
      color: disabled ? "var(--text-subtle)" : "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 38,
      height: 22,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: disabled ? "var(--control-disabled-bg)" : checked ? "var(--cuny-blue)" : "var(--gray-300)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      outline: focus ? "2px solid transparent" : "none",
      outlineOffset: "2px",
      transition: "background-color var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 19 : 3,
      width: 16,
      height: 16,
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--duration-fast) var(--ease-standard)"
    }
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const controlBox = state => ({
  width: "100%",
  height: 40,
  padding: "0 12px",
  font: "var(--type-body)",
  color: "var(--text-body)",
  background: state.disabled ? "var(--control-disabled-bg)" : "var(--white)",
  borderWidth: `1px`,
  borderStyle: "solid",
  borderColor: `${state.invalid ? "var(--red-600)" : state.focus ? "var(--border-focus)" : "var(--border-control)"}`,
  borderRadius: "var(--radius-md)",
  outline: "2px solid transparent",
  outlineOffset: "2px",
  boxShadow: state.focus ? "var(--focus-ring)" : "none",
  transition: "var(--transition-control)"
});
function Textarea({
  invalid,
  disabled,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlBox({
        focus,
        invalid,
        disabled
      }),
      height: "auto",
      padding: "10px 12px",
      lineHeight: "var(--leading-normal)",
      resize: "vertical",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = [],
  multiple = true,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const toggle = i => setOpen(prev => {
    const next = multiple ? new Set(prev) : new Set();
    if (prev.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i ? "1px solid var(--border-subtle)" : 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": on,
      onClick: () => toggle(i),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        width: "100%",
        padding: "var(--space-4) var(--space-5)",
        background: on ? "var(--surface-sunken)" : "var(--white)",
        border: 0,
        cursor: "pointer",
        textAlign: "left",
        font: "var(--type-h4)",
        color: "var(--text-heading)",
        transition: "var(--transition-control)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--cuny-blue)",
        display: "flex",
        transform: on ? "rotate(180deg)" : "none",
        transition: "transform var(--duration-fast) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 20
    }))), on ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 var(--space-5) var(--space-5)",
        font: "var(--type-body)",
        color: "var(--text-body)",
        maxWidth: "var(--measure-prose)"
      }
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      font: "var(--type-body-sm)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      "aria-current": last ? "page" : undefined,
      style: {
        color: last ? "var(--text-muted)" : "var(--text-body)"
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: "var(--text-link)"
      }
    }, it.label), !last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--gray-400)",
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14
    })) : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function pageList(page, total) {
  const out = [];
  const push = n => out.push(n);
  push(1);
  for (let n = page - 1; n <= page + 1; n++) if (n > 1 && n < total) push(n);
  if (total > 1) push(total);
  const uniq = [...new Set(out)].sort((a, b) => a - b);
  const withGaps = [];
  uniq.forEach((n, i) => {
    if (i && n - uniq[i - 1] > 1) withGaps.push("…");
    withGaps.push(n);
  });
  return withGaps;
}
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style,
  ...rest
}) {
  const cell = extra => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 34,
    height: 34,
    padding: "0 8px",
    background: "var(--white)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--border-control)",
    borderRadius: "var(--radius-md)",
    cursor: "pointer",
    font: "var(--weight-medium) var(--text-sm)/1 var(--font-sans)",
    color: "var(--gray-700)",
    transition: "var(--transition-control)",
    ...extra
  });
  const go = n => onChange && onChange(Math.min(total, Math.max(1, n)));
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Pagination",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous page",
    disabled: page <= 1,
    onClick: () => go(page - 1),
    style: cell({
      color: page <= 1 ? "var(--control-disabled-fg)" : "var(--gray-700)",
      cursor: page <= 1 ? "not-allowed" : "pointer"
    })
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16
  })), pageList(page, total).map((n, i) => n === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `gap${i}`,
    style: {
      minWidth: 24,
      textAlign: "center",
      color: "var(--text-subtle)",
      font: "var(--type-body-sm)"
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    "aria-current": n === page ? "page" : undefined,
    onClick: () => go(n),
    style: cell(n === page ? {
      background: "var(--cuny-blue)",
      borderColor: "var(--cuny-blue)",
      color: "var(--white)",
      fontWeight: "var(--weight-semibold)"
    } : null)
  }, n)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next page",
    disabled: page >= total,
    onClick: () => go(page + 1),
    style: cell({
      color: page >= total ? "var(--control-disabled-fg)" : "var(--gray-700)",
      cursor: page >= total ? "not-allowed" : "pointer"
    })
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  columns = [],
  note,
  assetBase = "assets/logos",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-brand-deep)",
      color: "var(--sky)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "var(--space-12) var(--gutter-page-lg) var(--space-8)",
      display: "flex",
      gap: "var(--space-16)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "white",
    height: 40,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--sky)",
      margin: "var(--space-4) 0 0",
      maxWidth: 260
    }
  }, "The City University of New York \xB7 205 East 42nd Street, New York, NY 10017")), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--white)",
      marginBottom: "var(--space-1)"
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "var(--type-body-sm)",
      color: "var(--sky)",
      textDecoration: "none"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.14)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "var(--space-4) var(--gutter-page-lg)",
      font: "var(--type-body-sm)",
      color: "var(--sky)"
    }
  }, note || "© 2026 The City University of New York · 26 Colleges. One University.")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  links = [],
  active,
  onNavigate,
  utility,
  assetBase = "assets/logos",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      background: "var(--white)",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "var(--border-subtle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)",
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "var(--space-4) var(--gutter-page-lg)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "blue",
    height: 38,
    assetBase: assetBase,
    href: "#"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      flex: 1
    }
  }, links.map(l => {
    const on = l.label === active;
    return /*#__PURE__*/React.createElement("a", {
      key: l.label,
      href: l.href || "#",
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(l.label);
        }
      },
      style: {
        font: `${on ? "var(--weight-semibold)" : "var(--weight-medium)"} var(--text-sm)/1 var(--font-sans)`,
        color: on ? "var(--cuny-blue)" : "var(--gray-700)",
        textDecoration: "none",
        padding: "6px 0",
        borderBottomWidth: `2px`,
        borderBottomStyle: "solid",
        borderBottomColor: `${on ? "var(--cuny-blue)" : "transparent"}`
      }
    }, l.label);
  })), utility || /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: "var(--type-label)",
      color: "var(--cuny-blue)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "log-in",
    size: 16
  }), " CUNY Login")));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const active = value ?? (tabs[0] && (tabs[0].value || tabs[0]));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "var(--border-subtle)",
      ...style
    }
  }, rest), tabs.map(t => {
    const tab = typeof t === "string" ? {
      value: t,
      label: t
    } : t;
    const on = tab.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(tab.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "none",
        border: 0,
        cursor: "pointer",
        padding: "0 0 10px",
        marginBottom: -1,
        borderBottomWidth: `3px`,
        borderBottomStyle: "solid",
        borderBottomColor: `${on ? "var(--cuny-blue)" : "transparent"}`,
        font: `${on ? "var(--weight-semibold)" : "var(--weight-medium)"} var(--text-base)/1.4 var(--font-sans)`,
        color: on ? "var(--cuny-blue)" : "var(--text-muted)",
        transition: "var(--transition-control)"
      }
    }, tab.label, tab.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-subtle)"
      }
    }, tab.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/knowledge_base/FaqAnswer.jsx
try { (() => {
const {
  Breadcrumb,
  Badge,
  Button,
  Card,
  Alert,
  Icon,
  IconButton
} = window.CUNYLibraryServicesDesignSystem_bb051c;
function FaqAnswer({
  entry,
  all,
  onOpen,
  onBack
}) {
  const [helpful, setHelpful] = React.useState(null);
  const related = (entry.related || []).map(id => all.find(e => e.id === id)).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 300px",
      gap: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      marginBottom: "var(--space-4)"
    },
    items: [{
      label: "Knowledge base",
      href: "#"
    }, {
      label: entry.topic,
      href: "#"
    }, {
      label: entry.q.length > 44 ? entry.q.slice(0, 44) + "…" : entry.q
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, entry.topic), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-subtle)"
    }
  }, entry.views.toLocaleString(), " views \xB7 last updated ", entry.updated)), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--tracking-tight)",
      margin: "0 0 var(--space-6)",
      maxWidth: "var(--measure-prose)"
    }
  }, entry.q), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--measure-prose)"
    }
  }, entry.answer.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, p)), entry.steps ? /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      margin: "0 0 var(--space-3)"
    }
  }, "Steps"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: "0 0 0 var(--space-5)",
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, entry.steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      marginBottom: "var(--space-2)"
    }
  }, s)))) : null, /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Who Can Do This"
  }, "Requires an Alma account with Cataloger or Catalog Manager role in your institution zone.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      marginTop: "var(--space-8)",
      paddingTop: "var(--space-5)",
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: "var(--rule-hairline)",
      maxWidth: "var(--measure-prose)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)"
    }
  }, "Was this helpful?"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: helpful === "yes" ? "primary" : "secondary",
    icon: "thumbs-up",
    onClick: () => setHelpful("yes")
  }, "Yes"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: helpful === "no" ? "primary" : "secondary",
    icon: "thumbs-down",
    onClick: () => setHelpful("no")
  }, "No"), helpful ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-success)"
    }
  }, "Thanks \u2014 recorded.") : null)), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      position: "sticky",
      top: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-left",
    onClick: onBack,
    style: {
      alignSelf: "flex-start",
      marginLeft: -12
    }
  }, "All answers"), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-5)",
    title: "Related Answers"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, related.length ? related.map(r => /*#__PURE__*/React.createElement("a", {
    key: r.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(r.id);
    },
    style: {
      font: "var(--type-body-sm)",
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 2,
      display: "flex",
      color: "var(--gray-400)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 14
  })), r.q)) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-subtle)"
    }
  }, "None yet."))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-5)",
    title: "Still stuck?",
    footer: "Weekdays, 9am\u20135pm ET"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)",
      margin: "0 0 var(--space-4)"
    }
  }, "Submit a question to the Office of Library Services, or bring it to the Technical Services drop-in session."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    block: true,
    icon: "message-square"
  }, "Ask OLS a question"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    block: true,
    iconAfter: "external-link"
  }, "Drop-in session calendar")))));
}
Object.assign(window, {
  FaqAnswer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/knowledge_base/FaqAnswer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/knowledge_base/FaqList.jsx
try { (() => {
const {
  Card,
  Badge,
  Tag,
  Icon,
  EmptyState,
  Button,
  Pagination
} = window.CUNYLibraryServicesDesignSystem_bb051c;
function FaqList({
  entries,
  topic,
  onTopic,
  topics,
  onOpen,
  query
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "230px 1fr",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "var(--space-3)"
    }
  }, "Topics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: !topic,
    onClick: () => onTopic(null)
  }, "All topics"), topics.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: topic === t,
    onClick: () => onTopic(t)
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, entries.length, " ", entries.length === 1 ? "answer" : "answers", topic ? /*#__PURE__*/React.createElement(React.Fragment, null, " in ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-body)"
    }
  }, topic)) : null, query ? /*#__PURE__*/React.createElement(React.Fragment, null, " matching \u201C", query, "\u201D") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-subtle)"
    }
  }, "Sorted by views")), entries.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    title: "No answers matched that search",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => onTopic(null)
    }, "Clear filters")
  }, "Try a shorter phrase, or browse by topic. If nothing fits, submit the question and OLS will answer it.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, entries.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.id,
    interactive: true,
    onClick: () => onOpen(e.id),
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, e.topic), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-subtle)"
    }
  }, e.views.toLocaleString(), " views \xB7 updated ", e.updated)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h4)",
      color: "var(--text-link)"
    }
  }, e.q), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      margin: "var(--space-2) 0 0",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, e.answer[0])), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)",
      display: "flex",
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20
  })))))), entries.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: 1,
    total: 4,
    onChange: () => {}
  })) : null));
}
Object.assign(window, {
  FaqList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/knowledge_base/FaqList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/knowledge_base/faqData.js
try { (() => {
const FAQ_TOPICS = ["Alma", "Primo VE", "Acquisitions", "Cataloging", "E-Resources", "Analytics"];
const FAQ_ENTRIES = [{
  id: "852-indicator",
  topic: "Cataloging",
  q: "How do I fix a miscoded 852 first indicator?",
  views: 1842,
  updated: "12 Aug 2026",
  answer: ["The 852 first indicator declares which classification scheme the call number follows. A value of 0 means Library of Congress; 1 means Dewey; 8 means a local scheme. Records loaded from vendors frequently arrive with 8 where 0 belongs, which breaks shelf-order sorting in Primo VE.", "Build a set of the affected holdings in Alma, then run Change Holdings Information with a normalization rule that sets the first indicator to 0. Re-index is automatic and takes up to 24 hours to appear in OneSearch."],
  steps: ["In Alma, go to Resources > Advanced Search and search Holdings where 852 ind1 equals 8.", "Save the results as an itemized set.", "Run Change Holdings Information on the set with your 852-indicator normalization rule.", "Confirm in Primo VE the next day that shelf order is correct."],
  related: ["local-prefixes", "sudoc-vs-lc"]
}, {
  id: "local-prefixes",
  topic: "Cataloging",
  q: "Which call-number prefixes are local shelving codes rather than LC classes?",
  views: 964,
  updated: "04 Aug 2026",
  answer: ["DVD, REF, OVERSIZE, CURR, and campus-specific stems are local shelving prefixes. They sit in the same subfield as the class number but are not part of it, so any validation that treats them as LC classes will report false errors.", "Strip the prefix before validating, and keep it for display and shelf order."],
  related: ["852-indicator"]
}, {
  id: "routing-error",
  topic: "Primo VE",
  q: "Why does my Primo VE API call return ROUTING_ERROR?",
  views: 1310,
  updated: "27 Jul 2026",
  answer: ["ROUTING_ERROR means the vid you passed does not resolve to a view in the institution behind your API key. It is a configuration failure, not an empty result set — Primo returns it before it ever runs the query.", "Check the vid against the CUNY view list, and confirm the API key is scoped to the same institution as the view."],
  steps: ["Confirm the vid spelling, including the institution prefix (for example 01CUNY_HC:CUNY_HC).", "Confirm the API key's institution matches the vid's institution.", "Retry with a known-good vid to isolate the variable."],
  related: ["api-rate-limits"]
}, {
  id: "api-rate-limits",
  topic: "Alma",
  q: "What are the Alma API rate limits, and what happens when I hit them?",
  views: 702,
  updated: "19 Jul 2026",
  answer: ["Alma enforces a per-institution daily threshold across all API keys. Once exceeded, calls return HTTP 429 with a PER_SECOND_THRESHOLD or DAILY_THRESHOLD error body.", "Batch reads where the API supports it, cache configuration lookups, and run bulk jobs against sets in Alma rather than looping over records via the API."],
  related: ["routing-error"]
}, {
  id: "cdi-activation",
  topic: "E-Resources",
  q: "A collection is activated but not appearing in OneSearch. What should I check?",
  views: 588,
  updated: "15 Jul 2026",
  answer: ["Check three things in order: whether the collection is active in the Network Zone, whether CDI search activation is switched on for it, and whether the campus view's scope includes CDI results."],
  related: []
}, {
  id: "analytics-callno",
  topic: "Analytics",
  q: "How do I pull a call-number audit report from Alma Analytics?",
  views: 431,
  updated: "02 Jul 2026",
  answer: ["Use the Physical Items subject area with Permanent Call Number, Call Number Type, and Library dimensions. Filter to your library and export to CSV for validation outside Analytics."],
  related: ["852-indicator"]
}];
Object.assign(window, {
  FAQ_TOPICS,
  FAQ_ENTRIES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/knowledge_base/faqData.js", error: String((e && e.message) || e) }); }

// ui_kits/ols_website/Hero.jsx
try { (() => {
const {
  SearchBar,
  Button
} = window.CUNYLibraryServicesDesignSystem_bb051c;
function Hero({
  onSearch
}) {
  const [q, setQ] = React.useState("");
  const [scope, setScope] = React.useState("Everything");
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-brand)",
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "var(--space-16) var(--gutter-page-lg) var(--space-20)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 4,
      background: "var(--taxi)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--taxi)"
    }
  }, "Office of Library Services")), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      letterSpacing: "var(--tracking-tightest)",
      color: "var(--white)",
      margin: 0,
      maxWidth: 780
    }
  }, "31 Libraries. One Collection."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--sky)",
      maxWidth: 620,
      margin: "var(--space-5) 0 var(--space-8)"
    }
  }, "OneSearch lets you search in one place for books, articles, DVDs, and more, across the whole University."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    value: q,
    onChange: setQ,
    onSubmit: onSearch,
    scopes: ["Everything", "Books", "Articles", "Journals"],
    scope: scope,
    onScopeChange: setScope
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    iconAfter: "arrow-right",
    onClick: onSearch
  }, "Advanced search"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "help-circle",
    style: {
      color: "var(--white)"
    }
  }, "Ask a librarian"))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ols_website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ols_website/LibrarianPanel.jsx
try { (() => {
const {
  Tabs,
  DataTable,
  Badge,
  Button,
  Alert,
  Accordion
} = window.CUNYLibraryServicesDesignSystem_bb051c;
const IZ_ROWS = [{
  id: 1,
  code: "01CUNY_BB",
  campus: "Baruch College",
  alma: "Live",
  tone: "success"
}, {
  id: 2,
  code: "01CUNY_HC",
  campus: "Hunter College",
  alma: "Live",
  tone: "success"
}, {
  id: 3,
  code: "01CUNY_QC",
  campus: "Queens College",
  alma: "Live",
  tone: "success"
}, {
  id: 4,
  code: "01CUNY_NETWORK",
  campus: "Network Zone",
  alma: "Shared",
  tone: "brand"
}];
function LibrarianPanel() {
  const [tab, setTab] = React.useState("systems");
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sunken)",
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: "var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "var(--space-16) var(--gutter-page-lg)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 var(--space-6)"
    }
  }, "For Librarians"), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "systems",
      label: "Systems"
    }, {
      value: "notices",
      label: "Service Notices",
      count: 2
    }, {
      value: "faq",
      label: "Technical Services FAQ"
    }],
    style: {
      marginBottom: "var(--space-6)"
    }
  }), tab === "systems" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    caption: "Alma institution zones \xB7 4 of 25",
    columns: [{
      key: "code",
      label: "Institution code",
      mono: true,
      width: "34%"
    }, {
      key: "campus",
      label: "Campus"
    }, {
      key: "alma",
      label: "Alma",
      width: "18%",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.alma)
    }],
    rows: IZ_ROWS,
    style: {
      background: "var(--white)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      margin: "0 0 var(--space-3)"
    }
  }, "Staff Toolkits"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconAfter: "external-link",
    block: true
  }, "Alma configuration guide"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconAfter: "external-link",
    block: true
  }, "Primo VE view codes"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconAfter: "external-link",
    block: true
  }, "Open an Ex Libris case")))) : null, tab === "notices" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Alma maintenance Sunday 07:00\u201311:00 ET"
  }, "OneSearch stays available; requesting and renewals are paused."), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "CDI activation refresh completed 28 August"
  }, "Newly activated collections appear in OneSearch within 24 hours.")) : null, tab === "faq" ? /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    style: {
      background: "var(--white)"
    },
    items: [{
      title: "How do I fix a miscoded 852 indicator?",
      content: /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, "Set the first indicator to 0 for Library of Congress classification, then re-run the normalization job on the affected set.")
    }, {
      title: "Which call-number prefixes are local, not LC?",
      content: /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, "DVD, REF, OVERSIZE, and campus-specific stems are local shelving prefixes. Strip them before validating against LC classes.")
    }, {
      title: "Why does my Primo API call return ROUTING_ERROR?",
      content: /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, "Check the ", /*#__PURE__*/React.createElement("code", null, "vid"), " parameter against the CUNY view list \u2014 a view code that does not exist for the institution returns ROUTING_ERROR rather than an empty result set.")
    }]
  }) : null));
}
Object.assign(window, {
  LibrarianPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ols_website/LibrarianPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ols_website/ServiceGrid.jsx
try { (() => {
const {
  Card,
  Badge
} = window.CUNYLibraryServicesDesignSystem_bb051c;
const OLS_SERVICES = [{
  eyebrow: "Discovery",
  title: "CUNY OneSearch",
  body: "Search the CUNY catalog and most licensed electronic resources in one place.",
  meta: "31 libraries"
}, {
  eyebrow: "Repository",
  title: "CUNY Academic Works",
  body: "The University's central open-access repository for faculty articles, dissertations, OER, and reports.",
  meta: "Open access"
}, {
  eyebrow: "Publishing",
  title: "Scholarly Publishing",
  body: "Hosting and technical infrastructure for peer-reviewed journals, proceedings, and multimedia publications.",
  meta: "Campus-led"
}, {
  eyebrow: "Archives",
  title: "Archives and Special Collections",
  body: "Coordinated archival initiatives across CUNY's libraries, preserving institutional history.",
  meta: "Mellon-funded through 2026"
}, {
  eyebrow: "E-Resources",
  title: "Centrally Licensed Databases",
  body: "University-wide licences negotiated by OLS, available to every campus with a CUNY Login.",
  meta: "CUNY Login required"
}, {
  eyebrow: "Interlibrary",
  title: "CLICS and ILL",
  body: "Intercampus borrowing through OneSearch, plus interlibrary loan for material CUNY does not hold.",
  meta: "2–3 business days"
}];
function ServiceGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "var(--space-16) var(--gutter-page-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "What OLS Does"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-muted)",
      maxWidth: "var(--measure-prose)",
      margin: "var(--space-3) 0 0"
    }
  }, "OLS runs the shared systems, licences, and infrastructure that the University's libraries depend on.")), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "26 colleges")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-5)"
    }
  }, OLS_SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    accent: true,
    interactive: true,
    href: "#",
    eyebrow: s.eyebrow,
    title: s.title,
    footer: s.meta
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)",
      margin: 0
    }
  }, s.body)))));
}
Object.assign(window, {
  ServiceGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ols_website/ServiceGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/onesearch/FacetRail.jsx
try { (() => {
const {
  Checkbox,
  Radio,
  Button,
  Tag
} = window.CUNYLibraryServicesDesignSystem_bb051c;
function FacetRail({
  facets,
  applied,
  onToggle,
  onClear,
  scope,
  onScope
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 260,
      flex: "0 0 260px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-5)",
      background: "var(--surface-sunken)",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "var(--space-3)"
    }
  }, "Search scope"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "scope",
    label: "This campus",
    checked: scope === "campus",
    onChange: () => onScope("campus")
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "scope",
    label: "All CUNY libraries",
    checked: scope === "cuny",
    onChange: () => onScope("cuny")
  }))), facets.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.key,
    style: {
      padding: "var(--space-4) var(--space-5)",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "var(--rule-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "var(--space-3)"
    }
  }, g.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, g.options.map(([label, count]) => /*#__PURE__*/React.createElement(Checkbox, {
    key: label,
    label: label,
    count: count,
    checked: applied.includes(label),
    onChange: () => onToggle(label)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "rotate-ccw",
    onClick: onClear,
    disabled: !applied.length
  }, "Reset filters"))));
}
Object.assign(window, {
  FacetRail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/onesearch/FacetRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/onesearch/RecordDetail.jsx
try { (() => {
const {
  Breadcrumb,
  Badge,
  Button,
  DataTable,
  Tabs,
  Alert,
  Dialog,
  Tag
} = window.CUNYLibraryServicesDesignSystem_bb051c;
function RecordDetail({
  r,
  onBack,
  onRequest,
  requesting,
  onCloseRequest,
  onConfirm
}) {
  const [tab, setTab] = React.useState("holdings");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      marginBottom: "var(--space-4)"
    },
    items: [{
      label: "OneSearch",
      href: "#"
    }, {
      label: "Results",
      href: "#"
    }, {
      label: r.title.length > 40 ? r.title.slice(0, 40) + "…" : r.title
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 260px",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, r.type), /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone,
    dot: true
  }, r.status), r.peer ? /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Peer-reviewed") : null), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--tracking-tight)",
      margin: "0 0 var(--space-3)",
      maxWidth: "var(--measure-prose)"
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-6)"
    }
  }, r.author, " \xB7 ", r.publisher, " \xB7 ", r.year), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "holdings",
      label: "Get it"
    }, {
      value: "details",
      label: "Details"
    }, {
      value: "subjects",
      label: "Subjects"
    }],
    style: {
      marginBottom: "var(--space-5)"
    }
  }), tab === "holdings" ? r.online ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Full Text Available"
  }, "Sign in with your CUNY Login to read this without hitting a paywall.") : /*#__PURE__*/React.createElement(DataTable, {
    caption: "Physical Holdings",
    columns: [{
      key: "library",
      label: "Library"
    }, {
      key: "loc",
      label: "Location"
    }, {
      key: "call",
      label: "Call number",
      mono: true
    }, {
      key: "status",
      label: "Status",
      render: h => /*#__PURE__*/React.createElement(Badge, {
        tone: h.tone,
        dot: true
      }, h.status)
    }],
    rows: [{
      id: 1,
      library: "Hunter College",
      loc: "Main stacks",
      call: r.call,
      status: "Available",
      tone: "success"
    }, {
      id: 2,
      library: "Baruch College",
      loc: "Main stacks",
      call: r.call,
      status: "Due 14 Sep 2026",
      tone: "warning"
    }, {
      id: 3,
      library: "Queens College",
      loc: "Reference",
      call: r.call,
      status: "Library use only",
      tone: "neutral"
    }]
  }) : null, tab === "details" ? /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      key: "k",
      label: "Field",
      width: "28%"
    }, {
      key: "v",
      label: "Value"
    }],
    rows: [{
      id: 1,
      k: "MMS ID",
      v: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-xs)"
        }
      }, "991234567890106126")
    }, {
      id: 2,
      k: "Format",
      v: r.type
    }, {
      id: 3,
      k: "Publisher",
      v: r.publisher
    }, {
      id: 4,
      k: "Published",
      v: String(r.year)
    }, {
      id: 5,
      k: "Language",
      v: "English"
    }, {
      id: 6,
      k: "Source",
      v: r.online ? "CDI" : "Network Zone"
    }]
  }) : null, tab === "subjects" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, r.subjects.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    onClick: () => {}
  }, s))) : null), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      position: "sticky",
      top: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-left",
    onClick: onBack,
    style: {
      alignSelf: "flex-start",
      marginLeft: -12
    }
  }, "Back to results"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    iconAfter: r.online ? "external-link" : "arrow-right",
    onClick: r.online ? undefined : onRequest
  }, r.online ? "View online" : "Place request"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "secondary",
    icon: "bookmark"
  }, "Save to My Favorites"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "ghost",
    icon: "quote"
  }, "Cite"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "ghost",
    icon: "mail"
  }, "Email"))), /*#__PURE__*/React.createElement(Dialog, {
    open: requesting,
    title: "Request This Item",
    onClose: onCloseRequest,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onCloseRequest
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: onConfirm
    }, "Place request"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 var(--space-4)"
    }
  }, "Pick-up at ", /*#__PURE__*/React.createElement("strong", null, "Hunter College Library"), ". Intercampus requests through CLICS are usually ready in 2\u20133 business days."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "You will receive an email when the item is on the hold shelf.")));
}
Object.assign(window, {
  RecordDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/onesearch/RecordDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/onesearch/ResultList.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Icon,
  Tag,
  EmptyState,
  Pagination,
  Tabs,
  Select
} = window.CUNYLibraryServicesDesignSystem_bb051c;
const TYPE_ICON = {
  Book: "book",
  eBook: "tablet",
  Article: "file-text",
  Video: "video",
  Journal: "newspaper"
};
function ResultRow({
  r,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      padding: "var(--space-5) 0",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "var(--rule-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      flex: "0 0 40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      color: "var(--gray-500)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: TYPE_ICON[r.type] || "file",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-semibold) 10px/1 var(--font-sans)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-subtle)",
      textAlign: "center"
    }
  }, r.type)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(r.id);
    },
    style: {
      font: "var(--type-h4)",
      textDecoration: "none"
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      marginTop: "var(--space-1)"
    }
  }, r.author, " \xB7 ", r.publisher, " \xB7 ", r.year), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginTop: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone,
    dot: true
  }, r.status), r.peer ? /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Peer-reviewed") : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, r.campus), r.call ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, r.call) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: 150,
      flex: "0 0 150px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    block: true,
    iconAfter: r.online ? "external-link" : "arrow-right"
  }, r.online ? "View online" : "Request"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    block: true,
    icon: "bookmark"
  }, "Save")));
}
function ResultList({
  results,
  applied,
  onToggle,
  onOpen,
  tab,
  onTab,
  query
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: onTab,
    tabs: [{
      value: "all",
      label: "Everything",
      count: "1,491"
    }, {
      value: "books",
      label: "Books",
      count: "412"
    }, {
      value: "articles",
      label: "Articles",
      count: "806"
    }, {
      value: "journals",
      label: "Journals",
      count: "61"
    }],
    style: {
      marginBottom: "var(--space-4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-body)"
    }
  }, "1\u2013", results.length), " of 1,491 results for \u201C", query, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 190
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["Relevance", "Date — newest first", "Date — oldest first", "Title A–Z"]
  }))), applied.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      padding: "var(--space-3) 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Filters:"), applied.map(a => /*#__PURE__*/React.createElement(Tag, {
    key: a,
    onRemove: () => onToggle(a)
  }, a))) : null, results.length ? /*#__PURE__*/React.createElement("div", null, results.map(r => /*#__PURE__*/React.createElement(ResultRow, {
    key: r.id,
    r: r,
    onOpen: onOpen
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: 1,
    total: 75,
    onChange: () => {}
  }))) : /*#__PURE__*/React.createElement(EmptyState, {
    title: "No results match those filters",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Expand beyond CUNY holdings")
  }, "Remove a filter, try fewer terms, or widen the scope to all CUNY libraries."));
}
Object.assign(window, {
  ResultList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/onesearch/ResultList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/onesearch/resultData.js
try { (() => {
const RESULTS = [{
  id: 1,
  type: "Book",
  title: "The Antikythera mechanism: the story behind the genius of the Greek computer",
  author: "Evaggelos Vallianatos",
  year: 2021,
  publisher: "Universal Publishers",
  peer: false,
  online: false,
  campus: "Hunter College Library",
  call: "QB107 .V35 2021",
  status: "Available",
  tone: "success",
  subjects: ["Antikythera mechanism (Ancient calculator)", "Astronomical instruments"]
}, {
  id: 2,
  type: "Article",
  title: "Decoding the Antikythera mechanism: calendar rings and eclipse prediction",
  author: "T. Freeth; A. Jones",
  year: 2012,
  publisher: "Journal for the History of Astronomy",
  peer: true,
  online: true,
  campus: "Available online",
  call: null,
  status: "Full text available",
  tone: "success",
  subjects: ["Archaeoastronomy", "Ancient technology"]
}, {
  id: 3,
  type: "eBook",
  title: "A portable cosmos: revealing the Antikythera mechanism, scientific wonder of the ancient world",
  author: "Alexander Jones",
  year: 2017,
  publisher: "Oxford University Press",
  peer: false,
  online: true,
  campus: "Available online",
  call: null,
  status: "Full text available",
  tone: "success",
  subjects: ["Science, Ancient", "Greece — Antiquities"]
}, {
  id: 4,
  type: "Book",
  title: "Gears from the Greeks: the Antikythera mechanism, a calendar computer from ca. 80 B.C.",
  author: "Derek de Solla Price",
  year: 1974,
  publisher: "American Philosophical Society",
  peer: false,
  online: false,
  campus: "Baruch College Library",
  call: "QB107 .P74 1974",
  status: "Request from another campus",
  tone: "warning",
  subjects: ["Calendar", "Astronomical instruments"]
}, {
  id: 5,
  type: "Video",
  title: "The two-thousand-year-old computer",
  author: "BBC Four",
  year: 2012,
  publisher: "BBC",
  peer: false,
  online: true,
  campus: "Streaming video",
  call: null,
  status: "Streaming available",
  tone: "success",
  subjects: ["Documentary films"]
}];
const FACETS = [{
  key: "type",
  label: "Resource type",
  options: [["Book", 412], ["Article", 806], ["eBook", 188], ["Video", 24], ["Journal", 61]]
}, {
  key: "avail",
  label: "Availability",
  options: [["Available online", 994], ["Held at my campus", 217], ["Peer-reviewed", 642]]
}, {
  key: "campus",
  label: "Library",
  options: [["Hunter College", 96], ["Baruch College", 74], ["Queens College", 68], ["City College", 55]]
}, {
  key: "date",
  label: "Publication date",
  options: [["2020 – 2026", 288], ["2010 – 2019", 501], ["2000 – 2009", 244], ["Before 2000", 458]]
}];
Object.assign(window, {
  RESULTS,
  FACETS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/onesearch/resultData.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
