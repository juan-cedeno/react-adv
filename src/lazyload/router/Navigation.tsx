import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom"
import LazyLoad1 from '../pages/LazyLoad1';
import LazyLoad2 from '../pages/LazyLoad2';
import LazyLoad3 from '../pages/LazyLoad3';

export const Navigation = () => {

    const {url , path} = useRouteMatch() 

  return (
    <div>
        <ul >
            <li style={{display:'flex' , flexDirection: 'column'}}>
                <Link to= {`${url}/lazy1`}>Lazy 1</Link>
                <Link to= {`${url}/lazy2`}>Lazy 2</Link>
                <Link to= {`${url}/lazy3`}>Lazy 3</Link>

            </li>
        </ul>

        <Switch>
            <Route path={`${path}/lazy1`} component={LazyLoad1}/>
            <Route path={`${path}/lazy2`} component={LazyLoad2}/>
            <Route path={`${path}/lazy3`} component={LazyLoad3}/>
            <Redirect to={`${path}/lazy1`}/>

        </Switch>
    </div>
  )
}
