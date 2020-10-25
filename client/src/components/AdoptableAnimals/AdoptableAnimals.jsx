import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from "axios";
import AdoptableCats from '../AdoptableCats/AdoptableCats';
import AdoptableCritters from '../AdoptableCritters/AdoptableCritters';
import AdoptableDogs from '../AdoptableDogs/AdoptableDogs';

class AdoptableAnimals extends React.Component {


    componentDidMount() {
    //information for API access through PetFinder.com
    const API_KEY = 'Ab8xQ5x4ko6Ue4EfS12b2T4jmijVdGltbWXPJ8zLreFMbC9Lo1';
    const SECRET_KEY = 'vswXi2YoIUPufT0BrJCtRXoXKkJI8gEn16QehuXn';

    axios
        .post('https://api.petfinder.com/v2/oauth2/token',
            {
                grant_type:'client_credentials',
                client_id: API_KEY,
                client_secret: SECRET_KEY
            }
        )
        .then((res) => {
            console.log(res.data.access_token)
        })
    }
    //componentDidUpdate -- refreshing timed axios to keep up with token timeouts


    render() {
        return (
        <div>

            <Switch>
                <Route path='/adoptable-animals/cats' exact render={(routeProps) => <AdoptableCats {...routeProps} />} />
                <Route path='/adoptable-animals/dogs' exact render={(routeProps) => <AdoptableDogs {...routeProps} />} />
                <Route path='/adoptable-animals/critters' exact render={(routeProps) => <AdoptableCritters {...routeProps} />} />
            </Switch>            
        </div>
        );
    }
}

export default AdoptableAnimals;