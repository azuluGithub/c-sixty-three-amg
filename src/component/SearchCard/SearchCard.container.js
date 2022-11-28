import { PureComponent } from 'react';

import SearchCardComponent from './SearchCard.component';

class SearchCard extends PureComponent {

    renderSearchCard() {
        return (
            <SearchCardComponent />
        );
    }

    render() {
        return this.renderSearchCard();
    }
}

export default SearchCard;