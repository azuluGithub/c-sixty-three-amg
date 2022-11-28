import { PureComponent } from 'react';

import NewsCategoriesCardComponent from './NewsCategoriesCard.component';

class NewsCategoriesCard extends PureComponent {

    renderNewsCategoriesCard() {
        return (
            <NewsCategoriesCardComponent />
        );
    }

    render() {
        return this.renderNewsCategoriesCard();
    }
}

export default NewsCategoriesCard;