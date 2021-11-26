import {FC} from 'react'
import {Route, Switch} from 'react-router-dom';

import {RouteName} from '../../const/consts';
import Layout from '../Layout';
import Character from '../Character';
import News from '../News';
import './Main.css'

const Main: FC = (children) => {
  return (
    <main role='main' className='main mx-auto'>
      <Switch>
        <Route exact path={RouteName.DEFAULT} component={Layout} />
        <Route exact path={RouteName.NEWS} component={News} />
        <Route exact path={RouteName.CHARACTER} component={Character} />

        <Route component={Layout} />
      </Switch>
    </main>
  )
}

export default Main
