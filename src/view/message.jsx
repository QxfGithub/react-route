import React from 'react'
import {Route,Link} from 'react-router-dom'
import MessageDetail from './message-detail'


export default class Message extends React.Component{

    state = {
        messages:[]
    }

    componentDidMount () {
        // 模拟发送ajax请求
        setTimeout( ()=> {
            const messages = [
                {id: 1, title: 'Message001'},
                {id: 3, title: 'Message003'},
                {id: 6, title: 'Message006'},
            ]

            this.setState({
                messages
            })
        }, 1000)
    }

    getDetail = (id)=>{
        this.props.history.push(`/home/message/${id}`)
    }

    getDetail2 = (id)=>{
        this.props.history.replace(`/home/message/${id}`)
    }

    forward = () =>{
        this.props.history.goForward()
    }

    back = ()=>{
        this.props.history.goBack()
    }

    render() {
        const path = this.props.match.path

        return (

            <div>
                <h1>messages...</h1>
                <ul>
                    {
                        this.state.messages.map((m, index) =>
                            <li key={index}>
                                <Link to={`${path}/${m.id}`}>{m.title}</Link>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick ={() => this.getDetail(m.id)}>查看详情(props.history.push())</button>
                                <button onClick ={() => this.getDetail2(m.id)}>查看详情(props.history.replace())</button>
                            </li>
                        )
                    }
                </ul>

                <p>
                    <button onClick={this.back}>返回</button>&nbsp;
                    <button onClick={this.forward}>前进</button>&nbsp;
                </p>
                <hr/>

                <Route path={`${path}/:id`} component={MessageDetail}/>
            </div>
        )
    }
}
