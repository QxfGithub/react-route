import React ,{Compnent} from 'react'

export  default class News extends React.Component{

    state ={

        newlist : ["news1","news2","news3"]
    }

    render(){
        return (

            <div>
                <h1>news...</h1>
                <ul>
                    {
                        this.state.newlist.map( (val,index) => <li key={index}>{val}</li>)
                    }
                </ul>
            </div>
        )
    }

}



