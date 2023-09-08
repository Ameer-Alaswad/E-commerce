const displayConfig = {
    xsNone: { xs: "none" },
    smBlock: { sm: "block" },
    xsFlex: { xs: "flex" },
    mdNone: { md: "none" },
    mdFlex: { md: "flex" },
};

export const landingLinkStyles = {
    color: "#ff5200",
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
export const navbarStyles = { backgroundColor: "#ADD8E6", color: "#ff5200" }