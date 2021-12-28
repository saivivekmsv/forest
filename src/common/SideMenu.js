export const ROUTES = {
    HOME: "/home",
    TRADE: "/trade",
    FARMS: "/farms",
    POOLS: "/pools",
    VAULTS: "/vaults",
    NFTS: "/nfts",
    DOCS: "/docs" 
}

export const MENU_TYPE = {
    TRADE: "trade",
    FARMS: "farms",
    POOLS: "pools",
    VAULTS: "vaults",
    NFTS: "nfts",
    DOCS: "docs"
};

export const TRADE_ROUTES = {
    EXCHANGE: `${ROUTES.TRADE}/trade-exchange`,
    LIQUIDITY: `${ROUTES.TRADE}/trade-liquidity`
}

export const SIDE_MENUS = {
    [MENU_TYPE.TRADE] : [
        {
            menu:"Exchange",
            link: TRADE_ROUTES.EXCHANGE
        },
        {
            menu: "Liquidity",
            link: TRADE_ROUTES.LIQUIDITY
        }
    ]
} 