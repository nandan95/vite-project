
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { sensingRoutesConfig } from "../sensing/routes/routeConfig";
import { SENSING_SIDENAV_ROUTES } from "../sensing/routes/routesPaths";

interface RouteConfig {
    path: string;
    isPrivate?: boolean;
    isCommon?: boolean;
    component: React.ComponentType;
  }

 



const routesConfig = [
...sensingRoutesConfig
]


const RoutesManager = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Navigate to={SENSING_SIDENAV_ROUTES.HOME} />} />
  
          {routesConfig.map((item: RouteConfig) => {
            if (item.isCommon) {
              const Component = item.component;
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  element={
                    // <CommonRoute>
                      <Component />
                    // </CommonRoute>
                  }
                />
              );
            }
            // const AccessWrapper = item.isPrivate ? PrivateRoute : PublicRoute;
            // let LayoutWrapper;
  
            // if (item.path === "/account-setup") {
            //   LayoutWrapper = item.isPrivate ? AcountContainer : EmptyWrapper;
            // } else if (item.path === "/org-setup") {
            //   LayoutWrapper = item.isPrivate ? OrgContainer : EmptyWrapper;
            // } else {
            //   LayoutWrapper = item.isPrivate ? PageContainer : EmptyWrapper;
            // }
            // const Component = item.component;
            // return (
            //   <Route
            //     key={item.path}
            //     path={item.path}
            //     element={
            //       <NetworkWrapper>
            //         <AccessWrapper>
            //           <LayoutWrapper>
            //             <Component />
            //           </LayoutWrapper>
            //         </AccessWrapper>
            //       </NetworkWrapper>
            //     }
            //   />
            // );
          })}
        </Routes>
      </BrowserRouter>
    );
  };

  export default RoutesManager;
