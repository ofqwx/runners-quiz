import React from "react";
import { Route, RouteProps } from "react-router-dom";

type TPageRouteProps = RouteProps & {
    //eslint-disable-next-line
  layout: React.ComponentType<any>;
};

export default function PageRoute({
  layout: Layout,
  ...routerProps
}: TPageRouteProps): JSX.Element {
  return (
    <Layout>
      <Route {...routerProps} />
    </Layout>
  );
}
