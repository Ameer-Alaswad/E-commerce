const displayConfig = {
    xsNone: { xs: "none" },
    smBlock: { sm: "block" },
    xsFlex: { xs: "flex" },
    mdNone: { md: "none" },
    mdFlex: { md: "flex" },
};

export const linkToLanding = {
    color: "white",
    textDecoration: "none",
}
export const linkStyles = {
    ...displayConfig.xsNone,
    ...displayConfig.smBlock,
};

export const cartAndUserMenuStyles = {
    ...displayConfig.xsNone,
    ...displayConfig.mdFlex,
};

export const mobileMenuStyles = {
    ...displayConfig.xsFlex,
    ...displayConfig.mdNone,
};
