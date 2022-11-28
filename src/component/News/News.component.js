import { PureComponent } from 'react';

import NewsCard from '../NewsCard';
import NewsCategoriesCard from '../NewsCategoriesCard';
import SearchCard from '../SearchCard';

import './News.style.scss';

class NewsComponent extends PureComponent {

    newsList = [
        {
            id: 'BREAKING NEWS',
            title: 'BREAKING NEWS',
            img: '/assets/images/hero/phone.jpg',
            date: '26',
            month: 'Mar',
            year: '2023',
            author: 'star arnold',
            commentsCount: 6,
            category: 'business',
            content: 'Another learner, who chose to remain anonymous, said that when she registered at the college she was told that she will get a stipend which is at least R 7000.',
        },
        {
            id: 'LOAD SHEDDING',
            title: 'LOAD SHEDDING',
            date: '05',
            month: 'Jan',
            year: '2000',
            author: 'skott',
            commentsCount: 2,
            category: 'sports',
            img: '/assets/images/banner/banner-img-3.jpg',
            content: 'This graph shows the hourly load shedding distribution during 2022',
        },
        {
            id: 'we need money',
            title: 'we need money',
            date: '13',
            month: 'May',
            year: '2019',
            author: 'stone smart',
            commentsCount: 0,
            category: 'academics',
            img: '/assets/images/banner/banner-img-1.jpg',
            content: 'I  do not understand why they are introducing this bursary because they didn’t enquire with us before making the decision.',
        },
        {
            id: 'COURTS',
            title: 'COURTS',
            date: '02',
            month: 'Aug',
            year: '2021',
            author: 'murphy lee',
            commentsCount: 23,
            category: 'music',
            img: '/assets/images/banner/banner-img-2.jpg',
            content: 'De Ruyter not qualified or experienced enough to pull Eskom out of this mess',
        },
    ];

    renderNewsItem(newsItem) {
        return (
            <NewsCard 
                news={newsItem} 
                key={newsItem.id} 
            />
        );
    }

    renderNewsList() {
        const { newsList } = this;

        if (!newsList.length) {
            return <></>;
        }

        return (
            <div className='News-NewsList'>
                { newsList.map(this.renderNewsItem) }
            </div>
        );
    }

    renderSearchCard() { 
        return (
            <div className='News-SearchCard'>
                <SearchCard />
            </div>
        );
    }

    renderCategories() { 
        return (
            <div className='News-Categories'>
                <NewsCategoriesCard />
            </div>
        );
    }

    renderSide() { 
        return (
            <div className='News-NewsSide'>
                { this.renderSearchCard() }
                { this.renderCategories() }
            </div>
        );
    }

    renderComponents() {

        return (
            <div className='News PaddedContainer'>
                <div className='News-Container ContainerWrapper'>
                    { this.renderNewsList() }
                    { this.renderSide() }
                </div>
            </div>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default NewsComponent;