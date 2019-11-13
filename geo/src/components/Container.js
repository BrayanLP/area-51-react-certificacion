import React from 'react'
// import { Presentational } from '../app'
export const Presentational = (props) => {
    const { lat , lng } = props
    return <div>
        <p>
        Latitud: {lat}
        </p>
        <p>
        Longitud: {lng}
        </p>
    </div>
}

export class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            lng: null,
            isFetching: false
        };
        console.log('constructor');
        this.setPosition = this.setPosition.bind(this);
    }
    // componentWillMount(){
    //     console.log('will...')
    // }
    componentDidMount() {
        console.log('mounted...');
        this.setState({ isFetching: true });
        if (navigator.geolocation) {
            console.log(navigator.geolocation);
            // navigator.geolocation.getCurrentPosition(this.handleSuccess);
            navigator.geolocation.getCurrentPosition(this.setPosition);
        }
    }
    setPosition({ coords: { latitude, longitude } }) {
        // console.log(latitude, longitude)
        this.setState({
            lat: latitude,
            lng: longitude, isFetching: false
        });
    }
    render() {
        console.log('rendering...');
        console.log(this.state);
        const { isFetching } = this.state;
        return (<React.Fragment>
            <div className="container">
                <h2>Container</h2>
                {isFetching ? 'loading...' : <Presentational {...this.state}></Presentational>}
            </div>
        </React.Fragment>);
    }
}
