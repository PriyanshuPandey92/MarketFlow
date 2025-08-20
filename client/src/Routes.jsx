import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "shared/ui/ScrollToTop";
import ErrorBoundary from "shared/components/ErrorBoundary";
import Header from "shared/components/Header/Header";
import Sidebar from "shared/components/Sidebar";
import NotFound from "shared/components/NotFound";
import Homepage from "modules/homepage";
import ProductCatalog from "modules/productCatalog";
import ShoppingCart from "modules/shoppingCart";
import ProductDetail from "modules/productDetails";
import AccountDashboard from "modules/accountDashboard";
const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 lg:ml-64 pt-16 lg:pt-20">
              <RouterRoutes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/homepage" element={<Homepage/>} />
                <Route path="/productCatalog" element={<ProductCatalog />} />
                <Route path="/shoppingCart" element={<ShoppingCart />} />
                <Route path="/productDetail" element={<ProductDetail />} />
                <Route path="/accountDashboard" element={<AccountDashboard />} />
                <Route path="*" element={<NotFound />} />
              </RouterRoutes>
            </main>
          </div>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;