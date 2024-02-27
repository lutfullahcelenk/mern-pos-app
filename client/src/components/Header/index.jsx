import React from "react";
import { Badge, Input } from "antd";
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

const Header = () => {
    return (
        <div className="border-b mb-6">
            <header className="flex items-center py-4 px-6 gap-2 md:gap-10">
                <div className="logo">
                    <a href="/">
                        <h2 className="text-xl font-bold md:text-4xl">LUTFULLAH</h2>
                    </a>
                </div>

                <div className="header-search flex-1 flex justify-center">
                    <Input
                        size="large"
                        placeholder="Ürün Ara..."
                        prefix={<SearchOutlined />}
                        className="rounded-full"
                    />
                </div>

                <div className="menu-links flex justify-between items-center gap-7 lg:static fixed bottom-0 lg:w-auto w-screen lg:bg-transparent bg-white left-0 lg:border-t-0 border-t lg:px-0 px-4 py-1">
                    <a
                        href={"/"}
                        className="menu-link flex flex-col items-center gap-1 hover:text-primary transition-all"
                    >
                        <HomeOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Ana Sayfa</span>
                    </a>
                    <Badge count={5} offset={[0, 6]} className="md:flex hidden">
                        <a
                            href={"/"}
                            className="menu-link flex flex-col items-center gap-1 hover:text-primary transition-all"
                        >
                            <ShoppingCartOutlined className="md:text-2xl text-xl" />
                            <span className="md:text-xs text-[10px]">Sepet</span>
                        </a>
                    </Badge>
                    <a
                        href={"/"}
                        className="menu-link flex flex-col items-center gap-1 hover:text-primary transition-all"
                    >
                        <CopyOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Faturalar</span>
                    </a>
                    <a
                        href={"/"}
                        className="menu-link flex flex-col items-center gap-1 hover:text-primary transition-all"
                    >
                        <UserOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Müşteriler</span>
                    </a>
                    <a
                        href={"/"}
                        className="menu-link flex flex-col items-center gap-1 hover:text-primary transition-all"
                    >
                        <BarChartOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">İstatistikler</span>
                    </a>
                    <a
                        href={"/"}
                        className="menu-link flex flex-col items-center gap-1 hover:text-primary transition-all"
                    >
                        <LogoutOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Çıkış</span>
                    </a>
                </div>
                <Badge count={5} offset={[0, 6]} className="md:hidden flex">
                    <a
                        href={"/"}
                        className="menu-link flex flex-col hover:text-primary transition-all"
                    >
                        <ShoppingCartOutlined className="text-2xl" />
                        <span className="md:text-xs text-[10px]">Sepet</span>
                    </a>
                </Badge>
            </header>
        </div>
    );
};

export default Header;
