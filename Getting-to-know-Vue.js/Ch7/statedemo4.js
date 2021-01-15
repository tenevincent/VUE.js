var shipsModule = {
    state: {
        ship: {},
        ships: { count: 0, results: [] }
    },
    getters: {
        onlyStarFighters: function(state) {
            return state.ships.results.filter(function(ship) {
                return ship.starship_class === 'Starfighter';
            });
        },
        onlyStarFightersCount: function(state, getters) {
            return getters.onlyStarFighters.length;
        },
        setShip: function(state) {
            return function(url) {
                return state.ships.results.find(function(ship) {
                    return ship.url === url;
                });
            };
        }
    },
    mutations: {
        setShips: function(state, payload) {
            state.ships = payload.newShips;
        },
        setShip: function(state, payload) {
            state.ship = payload.newShip;
        }
    },
    actions: {
        search: function(context, payload) {
            axios
                .get(`https://swapi.co/api/starships/?search=${payload.searchText}`)
                .then(response => {
                    context.commit('setShips', { newShips: response.data });
                });
        },
        setShip: function(context, payload) {
            context.commit('clearPilots');
            context.commit('setShip', {
                newShip: context.getters.setShip(payload.url)
            });
            context.dispatch('getPilots', { urls: context.state.ship.pilots });
        }
    }
};

var pilotsModule = {
    state: {
        pilots: []
    },
    getters: {},
    mutations: {
        clearPilots: function(state) {
            state.pilots = [];
        },
        addPilot: function(state, payload) {
            state.pilots.push(payload.newPilot);
        }
    },
    actions: {
        getPilots: function(context, payload) {
            payload.urls.forEach(function(url) {
                axios.get(url).then(response => {
                    context.commit('addPilot', { newPilot: response.data });
                });
            });
        }
    }
};