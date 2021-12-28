import {ROUTES} from "./SideMenu";

export const menuItems = [
    {
        name: "trade",
        link: `${ROUTES.TRADE}/exchange`
    },
    {
        name: "farms",
        link: "/farms"
    },
    {
        name: "pools",
        link: "/pools"
    },
    {
        name: "vaults",
        link: "",
        isComing: true
    },
    {
        name: "nfts",
        link: "",
        isComing: true
    },
    {
        name: "docs",
        link: "/docs"
    }
]