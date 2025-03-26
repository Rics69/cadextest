import { Button } from "antd";

const Header = () => {
    return (
        <header className="sticky top-0 bg-white shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="text-xl font-bold">Some company</div>
                <Button type="primary" className="!px-12" href="/contacts">Contact us</Button>
            </div>
        </header>
    );
};

export default Header;