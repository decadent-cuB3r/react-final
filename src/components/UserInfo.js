import { useEffect, useContext } from "react";
import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { StoreContext } from "../context"

export default function UserInfo(props) {

    const { state: { userSignin: { userInfo, remember } } } = useContext(StoreContext);
    const history = useHistory();

    const goToProfile = () => {
        history.push("/login?redirect=profile");
    };

    useEffect(() => {
        if (remember)
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        else
            localStorage.removeItem("userInfo");
    }, [userInfo, remember]);

    return (
        <>
            <div onClick={goToProfile} className="UserInfo-box" >
                {userInfo
                    ? <UserOutlined style={{ margin: '0', fontSize: '28px', color: 'orange' }} />
                    : <UserSwitchOutlined style={{ fontSize: '28px', color: 'orange' }} />

                }
                <div className="UserInfo-text">
                    {userInfo
                        ? `${userInfo.displayName}'s`
                        : `請登入`
                    }
                </div>
            </div>
        </>
    );
}
