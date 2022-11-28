import { useEffect, useState } from "react";

import './NewsLetter.style.scss';

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

const NewsLetterComponent = () => {
  const [ setRef, isVisible ] = useOnScreen({ threshold: 0.3 });

  const renderTitle = () => {
    const toggleForm = isVisible ? 'NewsLetter-Title_Appear': 'NewsLetter-Title_FadeIn';

    return (
      <p className={`NewsLetter-Title ${toggleForm}`}>
          {'NewsLetter'}
      </p>
    );
  }

  const renderForm = () => {
    const toggleForm = isVisible ? 'NewsLetter-NewsLetterForm_Appear': 'NewsLetter-NewsLetterForm_FadeIn';

    return (
      <div className={`NewsLetter-NewsLetterForm ${toggleForm}`}>
        <form className='NewsLetter-Form' onSubmit={() =>{}}>
          <div className='NewsLetter-InputContainer'>
            <p className='NewsLetter-Label'>{"Email Address"}</p>
            <input 
              type='text' 
              className='NewsLetter-Input' 
              name='userEmail' 
              value={''}
              placeholder='Email'
              onChange={(e) =>{}}
            />
          </div>
          <div className='NewsLetter-ButtonContainer'>
            <button
              type='submit'
              className='NewsLetter-Button Button'
            >{"Submit"}</button>
          </div>
        </form>
      </div>
    );
  }

  const renderComponents = () => {
    return (
      <div className='Split NewsLetter-SplitContainer'>
        { renderTitle() }
        { renderForm() }
      </div>
    );
  }

  return (
      <section ref={setRef} className='NewsLetter PaddedContainer'>
        <div className='ContainerWrapper'>
          { renderComponents() }
        </div>
      </section>
    );
}

export default NewsLetterComponent;















// import { PureComponent } from 'react';

// import './NewsLetter.style.scss';

// class NewsLetterComponent extends PureComponent {

//   state = {
//     userEmail: '',
//   }

//   renderTitle() {
//     return (
//       <p className='NewsLetter-Title'>
//           {'NewsLetter'}
//       </p>
//     );
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     const { userEmail } = this.state;

//     if (!userEmail.trim().length) {
//       return ;
//     }

//     const trimEmail = userEmail.trim().toLowerCase();
//     console.log(trimEmail);
    
//   }

//   handleInputChange(e) {
//     const { target: { name, value } } = e;

//     this.setState({ [name]: value });
//   }

//   renderForm() {
//     const { userEmail } = this.state;

//     return (
//       <div className='NewsLetter-NewsLetterForm'>
//         <form className='NewsLetter-Form' onSubmit={(e) => this.handleSubmit(e)}>
//           <div className='NewsLetter-InputContainer'>
//             <p className='NewsLetter-Label'>{"Email Address"}</p>
//             <input 
//               type='text' 
//               className='NewsLetter-Input' 
//               name='userEmail' 
//               value={userEmail}
//               placeholder='Email'
//               onChange={(e) => this.handleInputChange(e)}
//             />
//           </div>
//           <div className='NewsLetter-ButtonContainer'>
//             <button
//               type='submit'
//               className='NewsLetter-Button Button'
//             >{"Submit"}</button>
//           </div>
//         </form>
//       </div>
//     );
//   }

//   renderComponents() {
//     return (
//       <div className='Split NewsLetter-SplitContainer'>
//         { this.renderTitle() }
//         { this.renderForm() }
//       </div>
//     );
//   }

//   renderNewsLetter() {
//     return (
//       <section className='NewsLetter PaddedContainer'>
//         <div className='ContainerWrapper'>
//           { this.renderComponents() }
//         </div>
//       </section>
//     );
//   }

//   render() {
//     return this.renderNewsLetter();
//   }
// }

// export default NewsLetterComponent;