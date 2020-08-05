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
                <div className="center-text s-padding-b">
                    <hr className="no-margin no-padding" />
                    <br/>
                    <a href="https://www.douglasrcjames.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-tools"/> by douglasrcjames</a>
                    <br/>
                    &copy;
                    {' '}
                    {this.state.year}
                    {' '}
                    Smith-Zellner Consulting             
                    {/* TODO: add me somewhere || Icons from <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>  */}
                </div>
            </footer>
        )
    }
}
