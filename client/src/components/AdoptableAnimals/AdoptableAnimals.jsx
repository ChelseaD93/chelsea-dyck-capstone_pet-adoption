import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AdoptableCats from '../AdoptableCats/AdoptableCats';
import AdoptableCritters from '../AdoptableCritters/AdoptableCritters';
import AdoptableDogs from '../AdoptableDogs/AdoptableDogs';

function AdoptableAnimals(props) {
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

export default AdoptableAnimals;