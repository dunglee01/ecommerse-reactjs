import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SidebarProvider } from '@/contexts/SideBarProvider';
import SideBar from '@components/Sidebar/Sidebar';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/storeProvider';

function App() {
    return (
        <StoreProvider>
            <ToastProvider>
                <SidebarProvider>
                    <BrowserRouter>
                        <SideBar />

                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                {routers.map((item, index) => {
                                    return (
                                        <Route
                                            path={item.path}
                                            element={<item.component />}
                                            key={index}
                                        />
                                    );
                                })}
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </SidebarProvider>
            </ToastProvider>
        </StoreProvider>
    );
}

export default App;
