import React, {Suspense} from 'react';
import {renderRoutes, RouteConfig} from "react-router-config";
import Spin from "antd/lib/spin";
import {LoadingOutlined} from "@ant-design/icons";

type DashboardLayoutProps = {
    route: RouteConfig
}

function AuthLayout(props: DashboardLayoutProps): JSX.Element {
    const {route} = props;

    return (
        <>
            <Suspense fallback={<Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}/>}>
                {renderRoutes(route.routes)}
            </Suspense>
        </>
    );
}

export default AuthLayout;
