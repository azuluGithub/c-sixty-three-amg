import { PureComponent } from 'react';
import Typewriter from 'typewriter-effect';

class TypeWriterEffect extends PureComponent {

    renderComponent() {
        const { text } = this.props;

        return (
            <Typewriter
                options={{
                    strings: text,
                    autoStart: true,
                    loop: true
                }}
            />
        )
    }
    
    render() {
        return this.renderComponent();
    }
}

export default TypeWriterEffect;