import { ReactNode, Suspense, lazy } from "react";
import Loading from "./loading";

// that's the point to use Suspens

const LazyGetStartedComponent = lazy(() => {
    // This delay simulates a longer module loading time
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(import('../components/get-started.component') as any);
        }, 10000);
    });
});


export default function GetStarted() {
    return (
        // <Suspense fallback={Loading}>
        <Suspense fallback={Loading()}>
            <LazyGetStartedComponent/>
        </Suspense>
    );
}