import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../lazyload/components/NoLazy';


type JSXComponent = () => JSX.Element

interface Routes {
    path: string
    Component : LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
    children?: Routes[]
}

const LazyLayout = lazy(() => import('../lazyload/layout/LazyLayout'))
// const LazyLoad2 = lazy(() => import('../lazyload/pages/LazyLoad2'))
// const LazyLoad3 = lazy(() => import('../lazyload/pages/LazyLoad3'))


export const routes: Routes[] = [
    {
        path : '/lazyLoad',
        Component: LazyLayout,
        name: 'Lazy load '
    },
    {
        path : '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy load'
    },
    // {
    //     path : '/lazyLoad3',
    //     Component: LazyLoad3,
    //     name: 'Lazy load 3'
    // },
]