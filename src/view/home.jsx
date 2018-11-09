import  React from 'react'
import MyNavLink from '../component/my-nav-link'
import {Route,Redirect,Switch} from 'react-router-dom'

import News from './news'
import Message from './message'

export default function Home() {

    return (

        <div>
            <h1>Home组件内容。。。。</h1>

            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to='/home/news'>news</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to='/home/message'>message</MyNavLink>
                    </li>
                </ul>

                <Switch>
                    <Route path='/home/news' component={News}/>
                    <Route path='/home/message' component={Message}/>
                    <Redirect to="/home/news" />
                </Switch>
            </div>

        </div>


    )

}