import { PureComponent } from 'react';

import './SearchCard.style.scss';

class SearchCardComponent extends PureComponent {

  state = {
    searchText: '',
  }

  renderTitle() {
    return (
      <p className='SearchCard-Title'>
        {'Search'}
      </p>
    );
  }

  checkForEmptyInputs() {
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleInputChange(e) {
    const { target: { name, value } } = e;

    this.setState({ [name]: value });
  }

  renderSearchCardForm() {
    const { searchText} = this.state;

    return (
      <div className='SearchCard-SearchCardForm'>
        { this.renderTitle() }
        <div className='SearchCard-Divider'></div>
        <form className='SearchCard-Form' onSubmit={(e) => this.handleSubmit(e)}>
          <div className='FormInputContainer'>
            <input 
              type='text' 
              className='FormInput' 
              name='searchText' 
              value={searchText}
              placeholder='Type Here...'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <button
            type='submit'
            className='SearchCard-Button Button'
          >{"Search"}</button>
        </form>
      </div>
    );
  }

  renderSearchCard() {
    return (
      <div className='SearchCard'>
        { this.renderSearchCardForm() }
      </div>
    );
  }

  render() {
    return this.renderSearchCard();
  }
}

export default SearchCardComponent;