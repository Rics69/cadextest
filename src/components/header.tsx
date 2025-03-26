import {Button} from "antd";

const Header = () => {
    return <div className="header">
        <div className="header__inner container">
            <div className="header__logo logo">
                Some company
            </div>
            <Button type="primary">Contact us</Button>
        </div>
    </div>
}

export default Header;