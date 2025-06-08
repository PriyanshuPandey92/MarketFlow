import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "shared/ui/ScrollToTop";
import ErrorBoundary from "shared/components/ErrorBoundary";
import Header from "shared/components/Header/Header";
import Sidebar from "shared/components/Sidebar";
import NotFound from "shared/components/NotFound";
import HomepageDiscoveryEngine from "modules/homepage-discovery-engine";
import ProductCatalogIntelligentBrowsing from "modules/product-catalog-intelligent-browsing";
import ShoppingCartCheckoutFrictionlessConversion from "modules/shopping-cart-checkout-frictionless-conversion";
import ProductDetailDecisionSupport from "modules/product-detail-decision-support";
import UserAccountDashboardPersonalExperience from "modules/user-account-dashboard-personal-experience";
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
                <Route path="/" element={<HomepageDiscoveryEngine />} />
                <Route path="/homepage-discovery-engine" element={<HomepageDiscoveryEngine />} />
                <Route path="/product-catalog-intelligent-browsing" element={<ProductCatalogIntelligentBrowsing />} />
                <Route path="/shopping-cart-checkout-frictionless-conversion" element={<ShoppingCartCheckoutFrictionlessConversion />} />
                <Route path="/product-detail-decision-support" element={<ProductDetailDecisionSupport />} />
                <Route path="/user-account-dashboard-personal-experience" element={<UserAccountDashboardPersonalExperience />} />
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