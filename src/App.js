import React from 'react';
import Titulos from './component/titulo';
import Form from './component/form';
import Clima from './component/Clima';

const API_KEY = "196d058b3f27ccda11e21bdd158ca34b";
// const AEMET = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYWxhamFkb3JAaG90bWFpbC5jb20iLCJqdGkiOiIxZTU2M2U2ZC1iOGViLTRlN2YtOGEzOS1jNmE2NjJjZDRhY2EiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTU1MTQ5NjEyMCwidXNlcklkIjoiMWU1NjNlNmQtYjhlYi00ZTdmLThhMzktYzZhNjYyY2Q0YWNhIiwicm9sZSI6IiJ9.hgqTAFZ0kFQ6vNbB_OaaSpxcyb5mTqix-3dq-BPZrhk"

class App extends React.Component {

    state = {
        temperatura: undefined,
        ciudad: undefined,
        pais: undefined,
        humedad: undefined,
        descripcion: undefined,
        error: undefined
    }

getWeather = async (e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=es&units=metric&APPID=${API_KEY}`);

    const data = await api_call.json();

    if(city && country) {

    
        this.setState({
            temperatura: data.main.temp,
            ciudad: data.name,
            pais: data.sys.country,
            humedad: data.main.humidity,
            descripcion: data.weather[0].description,
            error: ""
        });
        
    } else {

        this.setState({
            temperatura: undefined,
            ciudad: undefined,
            pais: undefined,
            humedad: undefined,
            descripcion: undefined,
            error: "Por favor introduzca un valor"
        });
    }

}

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        
                            <div className="row">
                                <div className="col-5 title-container">
                                <Titulos/>
                                </div>
                                <div className="col-7 form-container">
                                <Form getWeather={this.getWeather}/>
                                <Clima
                                temperatura={this.state.temperatura}
                                ciudad={this.state.ciudad}
                                pais={this.state.pais}
                                humedad={this.state.humedad}
                                descripcion={this.state.descripcion}
                                error={this.state.error}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        );
    }
}

export default App;