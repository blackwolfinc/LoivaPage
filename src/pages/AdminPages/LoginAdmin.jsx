import React from 'react'

export const LoginAdmin = () => {
    return (
        <div>
            <form action="LoginData">
                <div className="cardLogin">
                    <div className="imgWraper">
                        <img src="https://obs.line-scdn.net/0hm4aFni-JMhtcPx65uexNTGZpMXRvUyEYOAljBQxRbC8hXXEZaVB4fSs6bnt3XHVFMgt_fHA4KSp4DnZMN194" alt=""/>
                    </div>
                    <div className="inputWraper">
                    <label htmlFor="usrename">Tes Input</label>
                        <input name="usrename" type="text" placeholder="Username"/>
                        <label htmlFor="usrename">Tes Input</label>
                        <input name="usrename" type="password" placeholder="Password"/>
                    </div>


                    <button type="submit" className="btn btn-success">Login</button>
                </div>
            </form>
            
        </div>
    )
}
