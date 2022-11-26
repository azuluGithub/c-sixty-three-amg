import { PureComponent } from 'react';

import './HomeTotal.style.scss';

class HomeTotal extends PureComponent {

    totalsList = [
        {
            id: 'new zxdxcfcvstudents',
            count: '100',
            descr: 'new students',
        },
        {
            id: 'newbnjnj students',
            count: '60',
            descr: 'new students',
        },
        {
            id: 'newbhbhbh students',
            count: '187',
            descr: 'new students',
        },
        {
            id: 'new studentshuhu',
            count: '342',
            descr: 'new students',
        },
    ];

    renderImage() {
        const url = `${process.env.PUBLIC_URL}/assets/images/home-total/home-total.jpg`;

        return (
            <div className='HomeTotal-Image'>
                <img
                    className='HomeTotal-Img'
                    src={url} 
                    alt='hospital items'
                />
            </div>
        );
    }

    
    renderListItem({ id, count, descr }) {
        return (
            <div className='HomeTotal-ListItem' key={id}>
                <div className='HomeTotal-CountContainer'>
                    <p className='HomeTotal-Count'>{count}</p>
                </div>
                <div className='HomeTotal-DescrContainer'>
                    <p className='HomeTotal-DescrValue'>{descr}</p>
                    <p className='HomeTotal-Descr'>{'Every Year'}</p>
                </div>
            </div>
        );
    }

    renderTotals() {
        const { totalsList } = this;

        return (
            <div className='HomeTotal-Totals Split'>
                { totalsList.map(this.renderListItem)}
            </div>
        )
    }

    renderComponents() {
        return (
          <section className='HomeTotal'>
            { this.renderImage()}
            <div className='HomeTotal-Container ContainerWrapper'>
                { this.renderTotals() }
            </div>
          </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default HomeTotal;