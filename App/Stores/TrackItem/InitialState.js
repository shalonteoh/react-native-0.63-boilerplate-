/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
    items: [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Drink ice water',
            data: {
                date: 'Today',
                value: 5,
            }
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Eat fast food',
            data: {
                date: 'Today',
                value: 2,
            }
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'East junk food',
            data: {
                date: 'Today',
                value: 0,
            }
        },
    ],
    getItemsLoading: false,
    getItemsErrorMessage: null,
}