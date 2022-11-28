import { PureComponent } from 'react';

import './NewsCategoriesCard.style.scss';

class NewsCategoriesCardComponent extends PureComponent {

  categoriesList = [
    {
        id: 'category 2',
        name: 'library',
    },
    {
        id: 'category 3',
        name: 'room',
    },
    {
        id: 'category 4',
        name: 'class',
    },
    {
        id: 'category 6',
        name: 'campus',
    },
];

  renderTitle() {
    return (
      <p className='NewsCategoriesCard-Title'>
        {'Categories'}
      </p>
    );
  }

  renderCategory(category) {
    const { id, name } = category;

    return (
        <div className='NewsCategoriesCard-Card' key={id}>
            <span className='NewsCategoriesCard-Name'>{name}</span>
        </div>
    );
}

  renderCategoriesList() {
    const { categoriesList } = this;

    return (
        <div className='NewsCategoriesCard-CategoriesList'>
          { categoriesList.map(this.renderCategory) }
        </div>
    );
  }

  renderNewsCategories() {
    return (
      <div className='NewsCategoriesCard'>
        { this.renderTitle() }
        <div className='NewsCategoriesCard-Divider'></div>
        { this.renderCategoriesList() }
      </div>
    );
  }

  render() {
    return this.renderNewsCategories();
  }
}

export default NewsCategoriesCardComponent;