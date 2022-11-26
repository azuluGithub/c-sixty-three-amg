import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './FooterDetails.style.scss';

class FooterDetailsComponent extends PureComponent {

  imgUrl = '/assets/icons/social/whatsapp.png';

  ourSiteList = [
    {
      id: 'graduation',
      name: 'graduation',
      url: '/graduation'
    },
    {
        id: "admissions",
        name: "admissions",
        url: "/admissions",
    },
    {
        id: "international",
        name: "international",
        url: "/international",
    },
    {
        id: "courses",
        name: "courses",
        url: "/courses",
    },
    {
        id: "gallery",
        name: "gallery",
        url: "/gallery",
    },
    {
        id: "about",
        name: "about us",
        url: "/about",
    },
    {
        id: "alumni",
        name: "alumni",
        url: "/alumni",
    },
    {
        id: "faqs",
        name: "FAQs",
        url: "/faqs",
    }
  ];

  socialsList= [
    {
        id: 'social-email',
        icon: `${process.env.PUBLIC_URL}/assets/icons/social/email-icon.png`,
        name: 'email',
    },
    {
        id: 'social-facebook',
        icon: `${process.env.PUBLIC_URL}/assets/icons/social/facebook-icon.png`,
        name: 'facebook',
    },
    {
        id: 'social-linkedin',
        icon: `${process.env.PUBLIC_URL}/assets/icons/social/linkedin-icon.png`,
        name: 'linkedin',
    },
    {
        id: 'social-twitter',
        icon: `${process.env.PUBLIC_URL}/assets/icons/social/twitter-icon.png`,
        name: 'twitter',
    },
  ]

  contactList = [
    {
      id: 'email',
      name: 'mpumalangagovhealth@gmail.com',
      url: null,
    },
    {
      id: 'number',
      name: '013 796 1352',
      url: null,
    },
    {
      id: 'location',
      name: 'Themba Hospital Road, 1245, Kabokweni',
      url: null,
    },
  ]

  renderSocialItem({ id, img, url }) {
    return (
      <Link to={url} className='Link FooterDetails-SocialsImage' key={id}>
        <img 
            className='FooterDetails-SocialsImg' 
            src={img} 
            alt='theFrangipani product' 
        /> 
      </Link>
    );
  }

  renderSocial({ icon, id }) {
    return (
      <div className='FooterDetails-SocialImage' key={id}>
        <img 
            className='FooterDetails-SocialImg' 
            src={icon} 
            alt='nursing college social contact' 
        /> 
      </div>
    );
  }

  renderSocials() {
    const { socialsList } = this;

    return (
        <div className='FooterDetails-SocialContainer'>
          { socialsList.map((social) => this.renderSocial(social)) }
        </div>
    );
  }

  renderLogo() {
    const logoLogo = `${process.env.PUBLIC_URL}/assets/logo/logoLogo.png`;

    return (
        <div className='FooterDetails-LogoContainer'>
            <img
                className='FooterDetails-Logo'
                src={logoLogo} 
                alt='mpumalanga college logo'
            />
        </div>
    );
}

  renderContent() {
    return (
      <div className='FooterDetails-Content'>
        <div className='FooterDetails-ContentContainer'>
            <span className='FooterDetails-ContentHeading'>{'Mpumalanga College of Nursing'}</span>
            <p className='FooterDetails-ContentParagrph'>
                {'Mpumalanga College of Nursing is a public nursing training college in Mpumalanga, South Africa with campus in Kabokweni, Mbombela.'}
            </p>
            { this.renderLogo() }
            { this.renderSocials() }
        </div>
      </div>
    );
  }

  renderLink(url, name) {
    if (!url) {
      return (
        <span>{ name }</span>
      );
    }
    
    return (
      <Link to={url} className='Link FooterDetails-LinkAnchor'>{ name }</Link>
    );
  }

  renderLinkElement(element) {
    const { name, url } = element;

    return (
      <div key={name} className='FooterDetails-LinkElement'>
        { this.renderLink(url, name) }
      </div>
    );
  }

  renderLinksItem(title, list) {
    return (
      <div className='FooterDetails-LinksItem'>
        <span className='FooterDetails-LinksTitle'>{title}</span>
        { list.map(this.renderLinkElement.bind(this)) }
      </div>
    );
  }

  renderEmptyBox() {
    return (
      <div></div>
    );
  }

  renderLinks() {
    const { ourSiteList, contactList } = this;

    return (
      <div className='Split'>
        { this.renderEmptyBox() }
        { this.renderLinksItem('on our site', ourSiteList) }
        {/* { this.renderLinksItem('resources', resourcesList) } */}
        { this.renderLinksItem('contact', contactList) }
      </div>
    );
  }

  renderComponents() {
    return (
      <div className='Split '>
        { this.renderContent() }
        { this.renderLinks() }
      </div>
    );
  }

  renderFooterDetails() {
    return (
      <section className='FooterDetails  PaddedContainer'>
        <div className='ContainerWrapper'>
          { this.renderComponents() }
        </div>
      </section>
    );
  }

  render() {
    return this.renderFooterDetails();
  }
}

export default FooterDetailsComponent;