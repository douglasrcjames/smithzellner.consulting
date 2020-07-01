import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          year: new Date().getFullYear(),
        };
    }

    render() {
        return (
            <footer>
                <div className="center-text s-padding-t-b">
                    <hr/>
                    <br/>
                    &copy;
                    {' '}
                    {this.state.year}
                    {' '}
                    Zellner Consulting 
                    {/* TODO: add me somewhere || Icons from <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>  */}
                </div>
            </footer>
        )
    }
}
