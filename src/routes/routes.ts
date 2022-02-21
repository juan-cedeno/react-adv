import { lazy, LazyExoticComponent } from 'react';


type JSXComponent = () => JSX.Element

interface Routes {
    path: string
    Component : LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
    children?: Routes[]
}

const LazyLoad1 = lazy(() => import('../lazyload/pages/LazyLoad1'))
const LazyLoad2 = lazy(() => import('../lazyload/pages/LazyLoad2'))
const LazyLoad3 = lazy(() => import('../lazyload/pages/LazyLoad3'))


export const routes: Routes[] = [
    {
        path : '/lazyLoad1',
        Component: LazyLoad1,
        name: 'Lazy load 1'
    },
    {
        path : '/lazyLoad2',
        Component: LazyLoad2,
        name: 'Lazy load 2'
    },
    {
        path : '/lazyLoad3',
        Component: LazyLoad3,
        name: 'Lazy load 3'
    },
]