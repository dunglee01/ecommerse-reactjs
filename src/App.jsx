import Blog from '@components/Blog/Blog';
import HomePage from '@components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';

function App() {
    return (
        <BrowserRouter>
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
    );
}

export default App;
