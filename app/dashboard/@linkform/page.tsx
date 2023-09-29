import { Suspense, lazy } from 'react';
import LoadingFormLink from './loading';

const LazyComponent = lazy(() => {
    // This delay simulates a longer module loading time
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(import('../../components/formLink.component') as any);
        }, 1000);
    });
});

export default function LinkForm() {
    return (
        <Suspense fallback={LoadingFormLink()}>
                <LazyComponent/>
        </Suspense>

    )
}