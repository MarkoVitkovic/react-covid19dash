import React, { Component } from 'react'
import Axios from 'axios'
import "./style.css"

export default class App extends Component {
    constructor(props){
        super(props);

        this.getCountryData = this.getCountryData.bind(this);
    }
    state = {
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        countries: []
    }

    componentDidMount(){ 
        this.getData();
    }
    
    async getData(){
        const res = await Axios.get("https://covid19.mathdro.id/api");
        const resCountry = await Axios.get("https://covid19.mathdro.id/api/countries");
        const countries = [];
        for(var i = 0; i<resCountry.data.countries.length;i++){
            countries.push(resCountry.data.countries[i].name)
        }
        this.setState({
            confirmed: res.data.confirmed.value,
            recovered: res.data.recovered.value,
            deaths: res.data.deaths.value,  
            countries
        })
    }
    async getCountryData(e){
        if(e.target.value === "WorldWide"){
            return this.getData();
        }
        const res = await Axios.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
        this.setState({
            confirmed: res.data.confirmed.value,
            recovered: res.data.recovered.value,
            deaths: res.data.deaths.value
        })
    }
    renderCountryOptions(){
            return this.state.countries.map((country, i) => {
                return <option key={i}>{country}</option>
            });
    }


    render() {
        return (
            
            <div className="container">
                <h1>COVID-19 Update</h1>
                <select className="dropdown" onChange={this.getCountryData}>
                    <option>WorldWide</option>
                    {this.renderCountryOptions()}
                </select>
                <div className="flex">
                    <div className="box confirmed">
                        <h2>Confirmed cases</h2>
                        <h3>{this.state.confirmed}</h3>
                    </div>
                    <div className="box recovered">
                        <h2>Recovered cases</h2>
                        <h3>{this.state.recovered}</h3>
                    </div>
                    <div className="box deaths">
                        <h2>Deaths</h2>
                        <h3>{this.state.deaths}</h3>
                    </div>
                </div>
            </div>
            
        )
    }
}
