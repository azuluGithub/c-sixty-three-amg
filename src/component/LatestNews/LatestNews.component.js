import { useEffect, useState } from "react";

import './LatestNews.style.scss';

function useOnScreen(options){
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return [ setRef, isVisible];
}

const LatestNews = () => {
    const [ setRef, isVisible ] = useOnScreen({ threshold: 0.3 });

    const latestList = [
        {
            id: 'BREAKING NEWS',
            title: 'BREAKING NEWS',
            img: '/assets/images/latest-news/latest-1.jpg',
            date: 'May 19 1992',
            content: 'Another learner, who chose to remain anonymous, said that when she registered at the college she was told that she will get a stipend which is at least R 7000.',
        },
        {
            id: 'LOAD SHEDDING',
            title: 'LOAD SHEDDING',
            date: 'May 19 1992',
            img: '/assets/images/latest-news/latest-2.jpg',
            content: 'This graph shows the hourly load shedding distribution during 2022',
        },
        {
            id: 'we need money',
            title: 'we need money',
            date: 'May 19 1992',
            img: '/assets/images/latest-news/latest-3.jpg',
            content: 'I  do not understand why they are introducing this bursary because they didn’t enquire with us before making the decision.',
        },
        {
            id: 'COURTS',
            title: 'COURTS',
            date: 'May 19 1992',
            img: '/assets/images/latest-news/latest-4.jpg',
            content: 'De Ruyter not qualified or experienced enough to pull Eskom out of this mess',
        },
    ];

    const upcomingEventsList = [
        {
            id: 'event 1',
            title: 'Community Service',
            date: '23',
            month: 'February',
            year: '2023',
            content: 'Cleaning Kutlwanong Hall in Soweto',
            time: '08:00AM - 05:00PM',
            location: 'Zola, Soweto',
        },
        {
            id: 'event 2',
            title: 'Covid Conference',
            date: '02',
            month: 'August',
            year: '2023',
            time: '10:00AM - 05:00PM',
            content: 'Last conference of the year blah blah blah blah',
            location: 'Johanneburg Hall',
        },
        {
            id: 'event 3',
            title: 'Food for work Service',
            date: '05',
            month: 'December',
            time: '12:00AM - 01:00PM',
            year: '2030',
            content: 'Students will be working for food and so on and so for',
            location: 'Durban',
        },
    ]


    const renderLatestTitle = () => {
        return (
            <p className='LatestNews-Title H2MB'>
                {'Latest News'}
            </p>
        );
    }

    const renderLatestItem = ({ id, title, date, img, content}) => {
        return (
            <div className='LatestNews-LatestItem' key={id}>
                <div className='LatestNews-LatestImage'>
                    <img 
                        className='LatestNews-LatestImg' 
                        src={img} 
                        alt='nursing college story' 
                    />
                </div>
                <div className='LatestNews-LatestItemInfo'>
                    <span className='LatestNews-LatestItemTitle'>{ title }</span>
                    <p className='LatestNews-LatestItemDate'>{ date }</p>
                    <p className='LatestNews-LatestItemContent'>{ content.substring(0, 100) + '...' }</p>
                </div>
            </div>
        )
    }

    const renderLatestNews = () => {
        const toggleLatest = isVisible ? 'LatestNews-Latest_Appear': 'LatestNews-Latest_FadeIn';

        return(
            <div className={`LatestNews-Latest ${toggleLatest}`}>
                { renderLatestTitle() }
                { latestList.map(renderLatestItem) }
                { renderLatestButton() }
            </div>
        );
    }

    const renderUpcomingTitle = () => {
        return (
            <p className='LatestNews-Title H2MB'>
                {'Upcoming-Events'}
            </p>
        );
    }

    const renderUpcomingItem = ({ id, date, month, title, year, content, time, location}) => {
        return (
            <div className='LatestNews-UpcomingItem' key={id}>
                <div className='LatestNews-ItemCalendar'>
                    <div className='LatestNews-UpcomingCalendarTop TextCenter'>
                        <p className='LatestNews-UpcomingDate'>{ date }</p>
                        <p className='LatestNews-UpcomingMonth'>{ month }</p>
                    </div>
                    <div className='LatestNews-UpcomingCalendarBottom'>
                        <p className='LatestNews-UpcomingYear'>{ year }</p>
                    </div>
                    <div className='LatestNews-UpcomingDecos'>
                        <div className='LatestNews-UpcomingDeco'></div>
                        <div className='LatestNews-UpcomingDeco'></div>
                    </div>
                </div>
                <div className='LatestNews-UpcomingInfo'>
                    <span className='LatestNews-UpcomingTitle'>{ title }</span>
                    <p className='LatestNews-UpcomingContent'>{ content.substring(0, 100) }</p>
                    <div className='LatestNews-UpcomingLocation'>
                        <span className='LatestNews-UpcomingTime'>{ time }</span>
                        <p className='LatestNews-UpcomingLocation'>{ location }</p>
                    </div>
                </div>
            </div>
        )
    }

    const renderLatestButton = () => {
        return (
            <div className='LatestNews-ButtonContainer'>
                <button className='LatestNews-Button Button'>{'View All'}</button>
            </div>
        );
    }

    const renderUpcomingButton = () => {
        return (
            <div className='LatestNews-ButtonContainer'>
                <button className='LatestNews-Button Button'>{'View All'}</button>
            </div>
        );
    }

    const renderUpcomingEvents = () => {
        if (!upcomingEventsList.length) {
            return <div></div>;
        }
        const toggleUpcoming = isVisible ? 'LatestNews-UpcomingEventsContainer_Appear': 'LatestNews-UpcomingEventsContainer_FadeIn';

        return (
            <div className={`LatestNews-UpcomingEventsContainer ${toggleUpcoming}`}>
                { renderUpcomingTitle() }
                <div className='LatestNews-UpcomingEvents'>
                    { upcomingEventsList.map(renderUpcomingItem) }
                </div>
                { renderUpcomingButton() }
            </div>
        );
    }

    const renderContent = () => {
        return (
            <div className='LatestNews-Split Split'>
                { renderLatestNews() }
                { renderUpcomingEvents() }
            </div>
        );
    }

    return (
        <section ref={setRef} className='LatestNews PaddedContainer'>
            <div className='ContainerWrapper'>
                { renderContent() }
            </div>
        </section>
    );
}

export default LatestNews;











// import { PureComponent } from 'react';

// import './LatestNews.style.scss';

// class LatestNewsComponent extends PureComponent {

//     latestList = [
//         {
//             id: 'BREAKING NEWS',
//             title: 'BREAKING NEWS',
//             img: '/assets/images/latest-news/latest-1.jpg',
//             date: 'May 19 1992',
//             content: 'Another learner, who chose to remain anonymous, said that when she registered at the college she was told that she will get a stipend which is at least R 7000.',
//         },
//         {
//             id: 'LOAD SHEDDING',
//             title: 'LOAD SHEDDING',
//             date: 'May 19 1992',
//             img: '/assets/images/latest-news/latest-2.jpg',
//             content: 'This graph shows the hourly load shedding distribution during 2022',
//         },
//         {
//             id: 'we need money',
//             title: 'we need money',
//             date: 'May 19 1992',
//             img: '/assets/images/latest-news/latest-3.jpg',
//             content: 'I  do not understand why they are introducing this bursary because they didn’t enquire with us before making the decision.',
//         },
//         {
//             id: 'COURTS',
//             title: 'COURTS',
//             date: 'May 19 1992',
//             img: '/assets/images/latest-news/latest-4.jpg',
//             content: 'De Ruyter not qualified or experienced enough to pull Eskom out of this mess',
//         },
//     ];

//     upcomingEventsList = [
//         {
//             id: 'event 1',
//             title: 'Community Service',
//             date: '23',
//             month: 'February',
//             year: '2023',
//             content: 'Cleaning Kutlwanong Hall in Soweto',
//             time: '08:00AM - 05:00PM',
//             location: 'Zola, Soweto',
//         },
//         {
//             id: 'event 2',
//             title: 'Covid Conference',
//             date: '02',
//             month: 'August',
//             year: '2023',
//             time: '10:00AM - 05:00PM',
//             content: 'Last conference of the year blah blah blah blah',
//             location: 'Johanneburg Hall',
//         },
//         {
//             id: 'event 3',
//             title: 'Food for work Service',
//             date: '05',
//             month: 'December',
//             time: '12:00AM - 01:00PM',
//             year: '2030',
//             content: 'Students will be working for food and so on and so for',
//             location: 'Durban',
//         },
//     ]


//     renderLatestTitle() {
//         return (
//             <p className='LatestNews-Title H2MB'>
//                 {'Latest News'}
//             </p>
//         );
//     }

//     renderLatestItem({ id, title, date, img, content}) {
//         return (
//             <div className='LatestNews-LatestItem' key={id}>
//                 <div className='LatestNews-LatestImage'>
//                     <img 
//                         className='LatestNews-LatestImg' 
//                         src={img} 
//                         alt='nursing college story' 
//                     />
//                 </div>
//                 <div className='LatestNews-LatestItemInfo'>
//                     <span className='LatestNews-LatestItemTitle'>{ title }</span>
//                     <p className='LatestNews-LatestItemDate'>{ date }</p>
//                     <p className='LatestNews-LatestItemContent'>{ content.substring(0, 100) + '...' }</p>
//                 </div>
//             </div>
//         )
//     }

//     renderLatestNews() {
//         const { latestList } = this;

//         return(
//             <div className='LatestNews-Latest'>
//                 { this.renderLatestTitle() }
//                 { latestList.map(this.renderLatestItem) }
//                 { this.renderLatestButton() }
//             </div>
//         );
//     }

//     renderUpcomingTitle() {
//         return (
//             <p className='LatestNews-Title H2MB'>
//                 {'Upcoming-Events'}
//             </p>
//         );
//     }

//     renderUpcomingItem({ id, date, month, title, year, content, time, location}) {
//         return (
//             <div className='LatestNews-UpcomingItem' key={id}>
//                 <div className='LatestNews-ItemCalendar'>
//                     <div className='LatestNews-UpcomingCalendarTop TextCenter'>
//                         <p className='LatestNews-UpcomingDate'>{ date }</p>
//                         <p className='LatestNews-UpcomingMonth'>{ month }</p>
//                     </div>
//                     <div className='LatestNews-UpcomingCalendarBottom'>
//                         <p className='LatestNews-UpcomingYear'>{ year }</p>
//                     </div>
//                     <div className='LatestNews-UpcomingDecos'>
//                         <div className='LatestNews-UpcomingDeco'></div>
//                         <div className='LatestNews-UpcomingDeco'></div>
//                     </div>
//                 </div>
//                 <div className='LatestNews-UpcomingInfo'>
//                     <span className='LatestNews-UpcomingTitle'>{ title }</span>
//                     <p className='LatestNews-UpcomingContent'>{ content.substring(0, 100) }</p>
//                     <div className='LatestNews-UpcomingLocation'>
//                         <span className='LatestNews-UpcomingTime'>{ time }</span>
//                         <p className='LatestNews-UpcomingLocation'>{ location }</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     renderLatestButton() {
//         return (
//             <div className='LatestNews-ButtonContainer'>
//                 <button className='LatestNews-Button Button'>{'View All'}</button>
//             </div>
//         );
//     }

//     renderUpcomingButton() {
//         return (
//             <div className='LatestNews-ButtonContainer'>
//                 <button className='LatestNews-Button Button'>{'View All'}</button>
//             </div>
//         );
//     }

//     renderUpcomingEvents() {
//         const { upcomingEventsList } = this;

//         if (!upcomingEventsList.length) {
//             return <div></div>;
//         }

//         return (
//             <div className='LatestNews-UpcomingEventsContainer'>
//                 { this.renderUpcomingTitle() }
//                 <div className='LatestNews-UpcomingEvents'>
//                     { upcomingEventsList.map(this.renderUpcomingItem) }
//                 </div>
//                 { this.renderUpcomingButton() }
//             </div>
//         );
//     }

//     renderContent() {
//         return (
//             <div className='Split'>
//                 { this.renderLatestNews() }
//                 { this.renderUpcomingEvents() }
//             </div>
//         );
//     }

//     renderComponents() {
//         return (
//             <section className='LatestNews PaddedContainer'>
//                 <div className='ContainerWrapper'>
//                     { this.renderContent() }
//                 </div>
//             </section>
//         );
//     }

//     render() {
//         return this.renderComponents();
//     }
// }

// export default LatestNewsComponent;