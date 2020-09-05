import React from 'react';

class Response extends React.Component {

    translateText(text) {
        let translatedText = text.replace(/[aeou]/g, 'i')
                                       .replace(/[áéóú]/g, 'í')
                                       .replace(/[àèòù]/g, 'ì')
                                       .replace(/[äëöü]/g, 'ï')
                                       .replace(/[âêôû]/g, 'î');
        translatedText = translatedText.replace(/[AEOU]/g, 'I')
                                       .replace(/[ÁÉÓÚ]/g, 'Í')
                                       .replace(/[ÀÈÒÙ]/g, 'Ì')
                                       .replace(/[ÄËÖÜ]/g, 'Ï')
                                       .replace(/[ÂÊÔÛ]/g, 'Î');
        translatedText = translatedText.replace(/qii/g, 'qui')
                                       .replace(/QII/g, 'QUI')
                                       .replace(/qií/g, 'quí')
                                       .replace(/QIÍ/g, 'QUÍ')
                                       .replace(/qiï/g, 'quï')
                                       .replace(/QIÏ/g, 'QUÏ')
                                       .replace(/qiî/g, 'quî')
                                       .replace(/QIÎ/g, 'QUÎ');

        return translatedText;
    }

    render() {
        const text = this.props.textToTranslate;
        return ( 
        <div className="response">
            <p > { this.translateText(text) } </p> 
            </div >
        );
    }
}

export default Response;