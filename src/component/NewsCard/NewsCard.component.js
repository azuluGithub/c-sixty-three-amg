import { PureComponent } from 'react';

import './NewsCard.style.scss';

class NewsCard extends PureComponent {
    renderCardButton() {
        return (
            <div className='NewsCard-ButtonContainer'>
                <button className='NewsCard-Button Button'>{'Read More'}</button>
            </div>
        );
    }

    renderMetaData() {
        const { news: { author, commentsCount, category } } = this.props;

        const categoryIcon = `${process.env.PUBLIC_URL}/assets/icons/news/category.png`;
        const commentsIcon = `${process.env.PUBLIC_URL}/assets/icons/news/comments.png`;
        const authorIcon = `${process.env.PUBLIC_URL}/assets/icons/news/author.png`;

        return (
            <div className='NewsCard-Metadata'>
                <div className='NewsCard-Meta'>
                    <div className='NewsCard-MetaIconContainer'>
                        <img 
                            className='NewsCard-MetaIcon' 
                            src={authorIcon} 
                            alt='news about nursing school' 
                        />
                        <span className='NewsCard-MetaBlack'>{ 'By ' }</span>
                    </div>
                    <div className='NewsCard-MetaValue'>
                        { author } 
                    </div>
                </div>
                <div className='NewsCard-Meta'>
                    <div className='NewsCard-MetaIconContainer'>
                        <img 
                            className='NewsCard-MetaIcon' 
                            src={categoryIcon} 
                            alt='news about nursing school' 
                        />
                    </div>
                    <div className='NewsCard-MetaValue'>
                        { category } 
                    </div>
                </div>
                <div className='NewsCard-Meta'>
                    <div className='NewsCard-MetaIconContainer'>
                        <img 
                            className='NewsCard-MetaIcon' 
                            src={commentsIcon} 
                            alt='news about nursing school' 
                        />
                    </div>
                    <div className='NewsCard-MetaValue'>
                    <span className='NewsCard-MetaBlack'>{ '(' }{ commentsCount }{ ')'}</span>  { ' Comments' } 
                    </div>
                </div>
            </div>
        );
    }

    renderCardImage() {
        const { news: { date, month, year, img } } = this.props;
        return (
            <div className='NewsCard-CardImage'>
                <img 
                    className='NewsCard-CardImg' 
                    src={img} 
                    alt='news about nursing school' 
                />
                <div className='NewsCard-Calendar'>
                    <div className='NewsCard-CalendarTop'>
                        { date } {' '} { month }
                    </div>
                    <div className='NewsCard-CalendarBottom'>
                        { year }
                    </div>
                </div>
            </div>
        );
    }

    renderCard() {
        const { news: { title, content } } = this.props;

        return (
            <div className='NewsCard'>
                { this.renderCardImage() }
                <div className='NewsCard-Title'>
                    { title }
                </div>
                { this.renderMetaData() }
                <div className='NewsCard-Divider'></div>
                <p className='NewsCard-Content'>{ content.substring(0, 250) + '...' }</p>
                { this.renderCardButton() }
            </div>
        );
    }

    render() {
        return this.renderCard();
    }
}

export default NewsCard;