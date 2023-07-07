const displayConfig = {
    xsNone: { xs: "none" },
    smBlock: { sm: "block" },
    xsFlex: { xs: "flex" },
    mdNone: { md: "none" },
    mdFlex: { md: "flex" },
};

export const landingLinkStyles = {
    color: "white",
    textDecoration: "none",
}
export const linkDisplayStyles = {
    ...displayConfig.xsNone,
    ...displayConfig.smBlock,
};

export const cartAndUserMenuDisplayStyles = {
    ...displayConfig.xsNone,
    ...displayConfig.mdFlex,
};

export const mobileMenuDisplayStyles = {
    ...displayConfig.xsFlex,
    ...displayConfig.mdNone,
};
