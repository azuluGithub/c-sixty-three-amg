import { PureComponent } from 'react';

import StudentSideBar from '../../component/StudentSideBar';
import StudentTopBar from '../../component/StudentTopBar';

import './StudentAccounts.style.scss';

class StudentAccountsComponent extends PureComponent {

  billingAddress = {
    physicalAddress : {
      streetAddress: '123 broadway brookly',
      city: 'london',
      province: 'gauteng',
      postalCode: '5634',
    },
    postalAddress : {
      streetAddress: '123 broadway brookly',
      city: 'london',
      province: 'gauteng',
      postalCode: '5634',
    }
  }

  paymentInfoList = [
    {
      id: 'dxfghjkljhgchjkl',
      imgUrl: '/assets/portal/icons/hall.png',
      title: 'due',
      description: 'payment due',
      amount: '5000',
    },
    {
      id: 'ftyujhdrtyhvcdrty234',
      imgUrl: '/assets/portal/icons/hall.png',
      title: 'arrears',
      description: 'what i am owing',
      amount: '0'
    }
  ];
  
  renderSideBar() {
    return (
      <div className='FixedSideBar'>
        <StudentSideBar />
      </div>
    );
  }

  renderAddressItem(info) {
    const { title, streetAddress, city, province, code } = info;
    
    return (
      <div className='StudentAccounts-AddressItemContainer'>
        <div className='StudentAccounts-AddressItemContent'>
          <p className='StudentAccounts-AddressItemTitle'>{ title }</p>
          <div className='StudentAccounts-AddressItemDataItemData'>
            <span className='StudentAccounts-AddressItemDataKey'>{ 'street address: '}</span>
            <span className='StudentAccounts-AddressItemDataValue'>{ streetAddress }</span>
          </div>
          <div className='StudentAccounts-AddressItemDataItemData'>
            <span className='StudentAccounts-AddressItemDataKey'>{ 'city: '}</span>
            <span className='StudentAccounts-AddressItemDataValue'>{ city }</span>
          </div>
          <div className='StudentAccounts-AddressItemDataItemData'>
            <span className='StudentAccounts-AddressItemDataKey'>{ 'province: '}</span>
            <span className='StudentAccounts-AddressItemDataValue'>{ province }</span>
          </div>
          <div className='StudentAccounts-AddressItemDataItemData'>
            <span className='StudentAccounts-AddressItemDataKey'>{ 'postal code: '}</span>
            <span className='StudentAccounts-AddressItemDataValue'>{ code }</span>
          </div>
        </div>
      </div>
    )
  }

  renderBillingAddressActions() {
    const deleteImg = '/assets/portal/icons/delete.png';
    const editImg = '/assets/portal/icons/edit.png';

    return (
      <div className='StudentAccounts-BillingAddressActions'>
          <div className='StudentAccounts-BillingAddressActionsDelete'>
            <div className='StudentAccounts-BillingAddressActionsDeleteImage'>
              <img
                className='StudentAccounts-BillingAddressActionsDeleteImg'
                src={deleteImg}
                alt='delete icon display'
              />  
            </div>
            <span className='StudentAccounts-BillingAddressActionsDeleteText'>{'DELETE'}</span>
          </div>
          <div className='StudentAccounts-BillingAddressActionsEdit'>
            <div className='StudentAccounts-BillingAddressActionsEditImage'>
              <img
                className='StudentAccounts-BillingAddressActionsEditImg'
                src={editImg}
                alt='delete icon display'
              />  
            </div>
            <span className='StudentAccounts-BillingAddressActionsEditText'>{'EDIT'}</span>
          </div>
        </div>
    )
  }
  
  renderBillingAddress() {
    const { billingAddress: { physicalAddress, postalAddress } } = this;
    const { streetAddress: physicalStreet, city: physicalCity, province: physicalProvince, postalCode: physicalPostalCode } = physicalAddress;
    const { streetAddress: postalStreet, city: postalCity, province: postalProvince, postalCode: postalPostalCode } = postalAddress;
    
    return (
      <div className='StudentAccounts-BillingAddress'>
        <p className='StudentAccounts-BillingAddressTitle'>{'Bill To Address' }</p>
        <div className='StudentAccounts-BillingAddressList'>
          <div className='StudentAccounts-BillingAddressCard'>
            { this.renderAddressItem({
                title: 'Physical Address',
                streetAddress: physicalStreet,
                city: physicalCity,
                province: physicalProvince,
                code: physicalPostalCode,
              })
            }
            { this.renderBillingAddressActions() }
          </div>
          <div className='StudentAccounts-BillingAddressCard'>
            { this.renderAddressItem({
                title: 'Postal Address',
                streetAddress: postalStreet,
                city: postalCity,
                province: postalProvince,
                code: postalPostalCode,
              })
            }
            { this.renderBillingAddressActions() }
          </div>
        </div>
      </div>
    );
  }

  renderStudentCard() {
    const imgUrl = '/assets/portal/images/student-card.png';

    return (
      <div className='StudentAccounts-StudentCard'>
        <img
          className='StudentAccounts-StudentCardImg'
          src={imgUrl}
          alt='student card display'
        />  
      </div>
    );
  }

  renderPaymentInfoCard(info) {
    const { id, imgUrl, title, description, amount } = info;

    return (
      <div className='StudentAccounts-PaymentInfoCard' key={id}>
        <div className='StudentAccounts-PaymentInfoCardImage'>
          <img
            className='StudentAccounts-PaymentInfoCardImg'
            src={imgUrl}
            alt='bank builing icon display'
          />
        </div>
        <div className='StudentAccounts-PaymentInfoCardContent'>
          <p className='StudentAccounts-PaymentInfoCardTitle'>{ title }</p>
          <span className='StudentAccounts-PaymentInfoCardDescription'>{ description }</span>
          <div className='StudentAccounts-PaymentInfoCardDivider'></div>
          <span className='StudentAccounts-PaymentInfoCardAmount'>{ 'R ' } { amount }</span>
        </div>
      </div>
    );
  }

  renderPaymentInfo() {
    const { paymentInfoList } = this;

    return (
      <div className='StudentAccounts-PaymentInfo'>
        { paymentInfoList.map(this.renderPaymentInfoCard) }
      </div>
    );
  }

  renderStudentDetails() {
    return (
      <div className='StudentAccounts-StudentDetails'>
        { this.renderStudentCard() }
        { this.renderPaymentInfo() }
      </div>
    );
  }

  renderMain() {
    return (
      <div className='StudentAccounts-Main'>
        <StudentTopBar />
        <div className='StudentAccounts-MainBillingAddress'>
           { this.renderBillingAddress() }
           { this.renderStudentDetails() }
        </div>
      </div>
    )
  }
    
  renderComponents() {
    return (
      <main className='StudentAccounts'>
        <div className='StudentAccounts-Components'>
          { this.renderSideBar() }
          { this.renderMain() }
        </div>
      </main>
    );
  }

  render() {
    return this.renderComponents();
  }
}

export default StudentAccountsComponent;